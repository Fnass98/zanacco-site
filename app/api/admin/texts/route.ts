import { NextRequest, NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'

function requireAdmin(req: NextRequest) {
  const isAdmin = req.cookies.get('admin')?.value === '1'
  if (!isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return null
}

export async function GET(req: NextRequest) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  const rows = await prisma.siteText.findMany({ orderBy: { key: 'asc' } })
  const data: Record<string, string> = {}
  for (const r of rows) data[r.key] = r.value
  return NextResponse.json({ texts: data })
}

export async function PUT(req: NextRequest) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  const body = await req.json().catch(() => ({})) as any
  const entries = Object.entries(body || {}) as [string, any][]
  if (!entries.length) return NextResponse.json({ error: 'No data' }, { status: 400 })

  const results: Record<string, string> = {}
  for (const [key, value] of entries) {
    const rec = await prisma.siteText.upsert({
      where: { key },
      update: { value: String(value ?? '') },
      create: { key, value: String(value ?? '') }
    })
    results[rec.key] = rec.value
  }
  return NextResponse.json({ texts: results })
}
