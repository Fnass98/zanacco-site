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
  const projects = await prisma.project.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] })
  return NextResponse.json({ projects })
}

export async function POST(req: NextRequest) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  const body = await req.json().catch(() => ({})) as any
  const { title, slug, description, imageUrl, siteUrl, tags, order = 0, published = true } = body
  if (!title || !slug) {
    return NextResponse.json({ error: 'title and slug are required' }, { status: 400 })
  }
  const created = await prisma.project.create({
    data: {
      title: String(title),
      slug: String(slug),
      description: description ? String(description) : null,
      imageUrl: imageUrl ? String(imageUrl) : null,
      siteUrl: siteUrl ? String(siteUrl) : null,
      tags: Array.isArray(tags) ? tags.map((t: any) => String(t)) : [],
      order: Number(order) || 0,
      published: Boolean(published)
    }
  })
  return NextResponse.json({ project: created })
}
