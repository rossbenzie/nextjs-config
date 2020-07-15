const Notes = props => props.notes.map(note => <div>{note.text}</div>)

export default () => {


  const notes = [
    { text: "Do something" }, { text: "Do something else" }
  ]

  return <Notes notes={notes} />

}
