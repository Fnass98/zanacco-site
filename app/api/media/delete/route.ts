import { NextRequest, NextResponse } from 'next/server'
import { del } from '@vercel/blob'
import { getPrisma } from '@/lib/prisma'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'url required' }, { status: 400 })

    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN not set' }, { status: 500 })

    await del(url, { token })

    try {
      const prisma = await getPrisma()
      await prisma.imageAsset.deleteMany({ where: { url } })
    } catch {}

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Delete failed' }, { status: 500 })
  }
}
