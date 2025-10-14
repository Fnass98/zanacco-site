import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link className="text-blue-600 underline" href="/admin/projects">Manage Projects</Link></li>
        <li><Link className="text-blue-600 underline" href="/admin/texts">Edit Site Texts</Link></li>
      </ul>
      <form action="/api/admin/logout" method="POST">
        <button className="border px-3 py-2 rounded" type="submit">Log out</button>
      </form>
    </div>
  )
}
