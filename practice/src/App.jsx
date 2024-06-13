import { useEffect, useState } from "react"
import Note from "./components/Note"
import axios from "axios" 
const App = () =>{


  const [notes,setnotes] = useState([])
  const [newnote, setnewNote] = useState("Ammuku dumuku")
  const [showAll, setshowAll] = useState(true)

  useEffect(() =>{

    console.log('effect')
    axios.get("http://localhost:3001/notes")
    .then(res => {
      console.log("Promise fulfilled")
      setnotes(res.data)
    })
    .catch(e => console.log("Thambi Error pa : ", e))
  },[])

  const addNote = (event) => {
    event.preventDefault()

    const newnoteObject = {
      content : newnote,
      important : Math.random() < 0.5,
      id : notes.length + 1
    }

    setnotes(notes.concat(newnoteObject))
    setnewNote('')

  }
  const handlenotechange = (event) => {
    event.preventDefault()
    setnewNote(event.target.value)
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