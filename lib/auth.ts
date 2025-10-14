import { cookies } from 'next/headers'

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'Zanacco@1234!'
}

export function setAdminSession() {
  cookies().set('admin', '1', { httpOnly: true, sameSite: 'lax', path: '/' })
}

export function clearAdminSession() {
  cookies().set('admin', '', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 0 })
}

export function isAdmin() {
  return cookies().get('admin')?.value === '1'
}
