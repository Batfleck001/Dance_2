
import { useState } from "react"
import Note from "./components/Note"

const App = (props) =>{

  const [notes,setnotes] = useState(props.notes)
  const [newnote, setnewNote] = useState("Ammuku dumuku")
  const [showAll, setshowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const newnoteObject = {
      content : newnote,
      important : Math.random() < 0.5,
      id : notes.length + 1
    }

    setnotes(notes.concat(newnoteObject))
    setnewNote('')

  }
  console.log(notes)
  const handlenotechange = (event) => {
    event.preventDefault()
    setnewNote(event.target.value)

    console.log(event.target.value)
  }

  const notetoshow = showAll
  ? notes : notes.filter(val => val.important)




  return(
    <>
      <h1>Notes</h1>
      <button onClick={() => setshowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>

      <form onSubmit={addNote}>
        <input value={newnote} onChange={handlenotechange}/>
        <button type="submit">AK ( ͡° ͜ʖ ͡°)</button>
      </form>    
      <ul>
        {notetoshow.map(val => <Note note={val} key={val.id}/>)}
      </ul>
    </>
  )
}
export default App;