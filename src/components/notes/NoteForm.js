import React, {useState} from 'react'

export default function NoteForm() {
  const [content, setContent] = useState("")

  function handleSubmit(e){
    // fetch to backend to create note
    e.preventDefault()
    fetch("http://localhost:9393/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        content: content
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
    setContent("")
  }

  function handleChange(e){
    // setState
    setContent(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea onChange={handleChange} value={content}></textarea>
      <input type="submit" />
    </form>
  )
}
