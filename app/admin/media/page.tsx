"use client"

import { useEffect, useRef, useState } from 'react'

export default function AdminMediaPage() {
  const [items, setItems] = useState<Array<{url:string,width?:number,height?:number,alt?:string}>>([])
  const [loading, setLoading] = useState(true)
  const fileInput = useRef<HTMLInputElement | null>(null)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/media/list', { cache: 'no-store' })
      const data = await res.json()
      setItems(data.items || [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function upload(e: React.FormEvent) {
    e.preventDefault()
    const file = fileInput.current?.files?.[0]
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/media/upload', { method: 'POST', body: fd })
    if (res.ok) load()
  }

  async function remove(url: string) {
    if (!confirm('Delete this file?')) return
    const res = await fetch('/api/media/delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) })
    if (res.ok) load()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Media</h1>

      <form onSubmit={upload} className="flex items-center gap-3">
        <input type="file" ref={fileInput} accept="image/*" />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Upload</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map(it => (
            <div key={it.url} className="border rounded p-2">
              <img src={it.url} alt={it.alt || ''} className="w-full h-32 object-cover rounded" />
              <div className="text-xs text-slate-600 mt-1">{it.width || '?'}×{it.height || '?'}</div>
              <button className="text-red-600 text-sm mt-2" onClick={() => remove(it.url)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
