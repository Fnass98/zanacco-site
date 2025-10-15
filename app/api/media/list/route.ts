import { NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const prisma = await getPrisma()
    const items = await prisma.imageAsset.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ items })
  } catch (e: any) {
    return NextResponse.json({ items: [] })
  }
}
