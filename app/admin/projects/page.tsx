"use client"

import { useEffect, useState } from 'react'

type Project = {
  id: string
  title: string
  slug: string
  description?: string | null
  imageUrl?: string | null
  siteUrl?: string | null
  tags: string[]
  order: number
  published: boolean
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<Partial<Project>>({ title: '', slug: '', order: 0, published: true, tags: [] })

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/projects', { cache: 'no-store' })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to load')
      setProjects(data.projects || [])
    } catch (e: any) {
      setError(e.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function createProject(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const payload = {
      title: form.title,
      slug: form.slug,
      description: form.description || '',
      imageUrl: form.imageUrl || '',
      siteUrl: form.siteUrl || '',
      tags: (form.tags || []).filter(Boolean),
      order: Number(form.order) || 0,
      published: Boolean(form.published)
    }
    const res = await fetch('/api/admin/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data?.error || 'Create failed')
      return
    }
    setForm({ title: '', slug: '', order: 0, published: true, tags: [] })
    await load()
  }

  async function updateProject(id: string, patch: Partial<Project>) {
    const res = await fetch(`/api/admin/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch)
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data?.error || 'Update failed')
      return
    }
    await load()
  }

  async function removeProject(id: string) {
    if (!confirm('Delete this project?')) return
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data?.error || 'Delete failed')
      return
    }
    await load()
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <form onSubmit={createProject} className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded">
        <input className="border p-2 rounded" placeholder="Title" value={form.title || ''} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
        <input className="border p-2 rounded" placeholder="Slug" value={form.slug || ''} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} />
        <input className="border p-2 rounded" placeholder="Image URL" value={form.imageUrl || ''} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))} />
        <input className="border p-2 rounded" placeholder="Site URL" value={form.siteUrl || ''} onChange={e => setForm(f => ({ ...f, siteUrl: e.target.value }))} />
        <input className="border p-2 rounded md:col-span-2" placeholder="Description" value={form.description || ''} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        <input className="border p-2 rounded md:col-span-2" placeholder="Tags (comma-separated)" value={(form.tags || []).join(', ')} onChange={e => setForm(f => ({ ...f, tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} />
        <div className="flex items-center gap-4">
          <input className="border p-2 rounded w-24" type="number" placeholder="Order" value={form.order as any} onChange={e => setForm(f => ({ ...f, order: Number(e.target.value) }))} />
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={!!form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} />
            Published
          </label>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded md:col-span-2" type="submit">Create</button>
        {error && <p className="text-red-600 md:col-span-2">{error}</p>}
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {projects.map(p => (
            <div key={p.id} className="border rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input className="border p-2 rounded" defaultValue={p.title} onBlur={e => updateProject(p.id, { title: e.target.value })} />
                <input className="border p-2 rounded" defaultValue={p.slug} onBlur={e => updateProject(p.id, { slug: e.target.value })} />
                <input className="border p-2 rounded" defaultValue={p.imageUrl || ''} onBlur={e => updateProject(p.id, { imageUrl: e.target.value })} placeholder="Image URL" />
                <input className="border p-2 rounded md:col-span-3" defaultValue={p.description || ''} onBlur={e => updateProject(p.id, { description: e.target.value })} placeholder="Description" />
                <input className="border p-2 rounded md:col-span-3" defaultValue={(p.tags || []).join(', ')} onBlur={e => updateProject(p.id, { tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} placeholder="Tags" />
                <div className="flex items-center gap-4">
                  <input className="border p-2 rounded w-24" type="number" defaultValue={p.order} onBlur={e => updateProject(p.id, { order: Number(e.target.value) })} />
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked={p.published} onChange={e => updateProject(p.id, { published: e.target.checked })} />
                    Published
                  </label>
                </div>
              </div>
              <div className="mt-3 flex gap-3">
                <a className="underline text-blue-600" href={p.siteUrl || '#'} target="_blank" rel="noreferrer">Open</a>
                <button className="text-red-600" onClick={() => removeProject(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
