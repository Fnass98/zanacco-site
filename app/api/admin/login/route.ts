import { NextRequest, NextResponse } from 'next/server'
import { getAdminPassword } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({})) as any
  const password = (body?.password ?? '').toString()
  if (!password) {
    return NextResponse.json({ error: 'Password required' }, { status: 400 })
  }
  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin', '1', { httpOnly: true, sameSite: 'lax', path: '/' })
  return res
}
