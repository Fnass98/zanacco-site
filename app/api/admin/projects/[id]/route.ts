import { NextRequest, NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'

function requireAdmin(req: NextRequest) {
  const isAdmin = req.cookies.get('admin')?.value === '1'
  if (!isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return null
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  const project = await prisma.project.findUnique({ where: { id: params.id } })
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ project })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  const body = await req.json().catch(() => ({})) as any
  const { title, slug, description, imageUrl, siteUrl, tags, order, published } = body
  const updated = await prisma.project.update({
    where: { id: params.id },
    data: {
      ...(title !== undefined ? { title: String(title) } : {}),
      ...(slug !== undefined ? { slug: String(slug) } : {}),
      ...(description !== undefined ? { description: description ? String(description) : null } : {}),
      ...(imageUrl !== undefined ? { imageUrl: imageUrl ? String(imageUrl) : null } : {}),
      ...(siteUrl !== undefined ? { siteUrl: siteUrl ? String(siteUrl) : null } : {}),
      ...(tags !== undefined ? { tags: Array.isArray(tags) ? tags.map((t: any) => String(t)) : [] } : {}),
      ...(order !== undefined ? { order: Number(order) || 0 } : {}),
      ...(published !== undefined ? { published: Boolean(published) } : {}),
    }
  })
  return NextResponse.json({ project: updated })
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized
  const prisma = await getPrisma()
  await prisma.project.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
}
