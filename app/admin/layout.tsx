import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-b md:border-b-0 md:border-r p-4 space-y-2">
        <h2 className="font-bold text-lg">Admin</h2>
        <nav className="flex md:block gap-3 md:gap-0">
          <ul className="space-y-2">
            <li><Link className="underline" href="/admin">Dashboard</Link></li>
            <li><Link className="underline" href="/admin/projects">Projects</Link></li>
            <li><Link className="underline" href="/admin/texts">Site Texts</Link></li>
            <li><Link className="underline" href="/admin/media">Media</Link></li>
            <li><Link className="underline" href="/admin/seo">SEO</Link></li>
            <li><Link className="underline" href="/admin/help">Help</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  )
}
