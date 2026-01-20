import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({ name: '', email: '', uid: '' })
  const [submissions, setSubmissions] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name && !form.email && !form.uid) return
    setSubmissions((s) => [{ ...form, id: Date.now() }, ...s])
    setForm({ name: '', email: '', uid: '' })
  }

  return (
    <div className="app-container">
      <h1>Simple Form</h1>

      <form className="simple-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>

        <label>
          UID
          <input name="uid" value={form.uid} onChange={handleChange} placeholder="Unique ID" />
        </label>

        <div className="form-actions">
          <button type="submit" className="primary">Submit</button>
          <button type="button" onClick={() => setForm({ name: '', email: '', uid: '' })}>Clear</button>
        </div>
      </form>

      <section className="submissions">
        <h2>Submissions</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet — submit the form.</p>
        ) : (
          submissions.map((s) => (
            <article key={s.id} className="card">
              <strong>{s.name || '(no name)'}</strong>
              <div className="meta">{s.email} • {s.uid}</div>
            </article>
          ))
        )}
      </section>
    </div>
  )
}

export default App
