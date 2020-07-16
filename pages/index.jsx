import { useState } from 'react'
import produce from 'immer'

const Notes = props => props.notes.map(note => <div>{note.text}</div>)

export default () => {
  const initialNotes = [
    { text: "Do something" }, { text: "Do something else" }
  ]
  const [notes, setNotes] = useState(initialNotes)

  const handleClick = () => {
    const text = document.getElementById("noteInput").value.trim()
    if (text) {
      const nextNotes = produce(notes, interimNotes => {
        interimNotes.push({ text })
      })
      document.getElementById('noteInput').value = ''
      setNotes(nextNotes)
    }
  }

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
