
import Note from "./components/Note"

const App = ({notes}) =>{
  return(
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((val) => {
          console.log(val)
          return <Note note={val} key={val.id}/>
        })}
      </ul>
    </div>
  )
}
export default App;