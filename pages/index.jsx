import { useState, useEffect } from 'react'
import produce from 'immer'

const Notes = props => props.notes.map(note => <div>{note.text}</div>)

export default () => {
  const initialNotes = [
    { text: "Loading notes..." }
  ]
  const [notes, setNotes] = useState(initialNotes)

  const handleClick = () => {
    const text = document.getElementById("noteInput").value.trim()
    if (text) {
      const nextNotes = produce(notes, interimNotes => {
        interimNotes.push({ text })
      })
      document.getElementById('noteInput').value = ''

      if (typeof 'window' !== 'undefined') localStorage.setItem('notes', JSON.stringify(nextNotes))
      setNotes(nextNotes)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notes = localStorage.getItem('notes')
      if (notes) return setNotes(JSON.parse(notes))
      return setNotes([])
    }
  }, 0)

  return (
    <>
      <div>

        <input id="noteInput" type="text" placeholder="Add a note" />
        <button onClick={() => handleClick()}>Add Note</button>

        <Notes notes={notes} />
      </div>
    </>
  )
}
