import { useEffect, useState } from "react"
import Note from "./components/Note"
import axios from "axios" 
import noteService from "./services/Notes"
const App = () =>{


  const [notes,setnotes] = useState([])
  const [newnote, setnewNote] = useState("Ammuku dumuku")
  const [showAll, setshowAll] = useState(true)

  useEffect(() =>{

    console.log('effect')

    noteService
      .getAll()
      .then(initailnotes => setnotes(initailnotes))
      // .then(res => {
      //   console.log("Promise fulfilled")
      //   setnotes(res.data)
      // })
      .catch(e => console.log("Thambi Error pa : ", e))
  },[])

  const addNote = (event) => {
    event.preventDefault()

    const newnoteObject = {
      content : newnote,
      important : Math.random() < 0.5
    }
    noteService
      .create(newnoteObject)
      .then(newdata => {
        setnotes(notes.concat(newdata))
        setnewNote('')
      })
      // .then(res => {
      //   setnotes(notes.concat(res.data))
      //   setnewNote('')
      // })
      .catch(e => console.log(e))

  }
  const handlenotechange = (event) => {
    event.preventDefault()
    setnewNote(event.target.value)
  }

  const notetoshow = showAll
  ? notes : notes.filter(val => val.important)

  const toggleimportanceOf = (id) =>{
    const note = notes.find(n => n.id === id)
    const changedNote = {...note,important : !note.important}

    noteService
      .update(note.id,changedNote)
      .then(changed => setnotes(notes.map(n => n.id !== id ? n : changed)))
      // .then(res=> {
      //   setnotes(notes.map(n => n.id === id ? res.data : n))
      // })
  }


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
        {notetoshow.map(val => <Note note={val} key={val.id} toggleImportance={()=>toggleimportanceOf(val.id)}/>)}
      </ul>
    </>
  )
}
export default App;