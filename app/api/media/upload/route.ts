import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import sizeOf from 'image-size'
import { getPrisma } from '@/lib/prisma'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Expected multipart/form-data' }, { status: 400 })
    }

    const form = await req.formData()
    const file = form.get('file') as File | null
    const alt = (form.get('alt') as string) || undefined

    if (!file) return NextResponse.json({ error: 'Missing file' }, { status: 400 })

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Vercel Blob
    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN not set' }, { status: 500 })

    const blob = await put(`media/${Date.now()}-${file.name}`.replace(/\s+/g, '-'), buffer, {
      access: 'public',
      contentType: file.type || 'application/octet-stream',
      token,
    })

    // Get dimensions if image
    let width: number | undefined
    let height: number | undefined
    try {
      const dims = sizeOf(buffer)
      width = dims.width
      height = dims.height
    } catch {}

    // Save to DB
    try {
      const prisma = await getPrisma()
      await prisma.imageAsset.create({ data: { url: blob.url, width: width ?? null, height: height ?? null, alt } })
    } catch {}

    return NextResponse.json({ url: blob.url, width, height })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Upload failed' }, { status: 500 })
  }
}
