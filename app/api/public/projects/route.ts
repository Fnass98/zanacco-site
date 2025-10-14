import { NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'

export async function GET() {
  try {
    const prisma = await getPrisma()
    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    })
    return NextResponse.json({ projects })
  } catch {
    // If DB is not available, return empty list so caller can fallback
    return NextResponse.json({ projects: [] })
  }
}
