"use client"

import { useEffect, useState } from 'react'

export default function AdminTextsPage() {
  const [texts, setTexts] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/texts', { cache: 'no-store' })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to load')
      setTexts(data.texts || {})
    } catch (e: any) {
      setError(e.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function saveAll(updated: Record<string, string>) {
    setError(null)
    const res = await fetch('/api/admin/texts', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data?.error || 'Save failed')
      return
    }
    await load()
  }

  function updateKey(k: string, v: string) {
    setTexts(prev => ({ ...prev, [k]: v }))
  }

  function removeKey(k: string) {
    const copy = { ...texts }
    delete copy[k]
    setTexts(copy)
  }

  function addKey() {
    if (!newKey) return
    setTexts(prev => ({ ...prev, [newKey]: newValue }))
    setNewKey('')
    setNewValue('')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Site Texts</h1>

      <div className="border rounded p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="border p-2 rounded" placeholder="Key (e.g. hero_title)" value={newKey} onChange={e => setNewKey(e.target.value)} />
          <input className="border p-2 rounded md:col-span-2" placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} />
          <button className="bg-black text-white px-4 py-2 rounded md:col-span-3" onClick={addKey}>Add</button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {Object.keys(texts).length === 0 && <p>No texts yet.</p>}
          {Object.entries(texts).map(([k, v]) => (
            <div key={k} className="border rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                <input className="border p-2 rounded" defaultValue={k} readOnly />
                <input className="border p-2 rounded md:col-span-2" value={v} onChange={e => updateKey(k, e.target.value)} />
              </div>
              <div className="mt-3 flex gap-3">
                <button className="bg-black text-white px-3 py-2 rounded" onClick={() => saveAll(texts)}>Save</button>
                <button className="text-red-600" onClick={() => removeKey(k)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  )
}
