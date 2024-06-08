
import { useState } from "react"
import Note from "./components/Note"

const App = () =>{

  const [notes, setNotes] = useState("Ammuku dumuku")

  
  const addnote = (event) =>{
    event.preventDefault()
    console.log("Kadauule Ajith eh ( ͡° ͜ʖ ͡°)!!!",event.target)
    console.log(notes)
  }
  return(
    <>
      <h1>Notes</h1>
      <form>
        <input value={notes} onChange={e => setNotes(e.target.value)}/>
        <button type="submit" onClick={addnote}>AK ( ͡° ͜ʖ ͡°)
</button>
      </form>    
    </>
  )
}
export default App;