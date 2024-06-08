import React, { useState } from 'react'

const App = () => {

  const[persons,setpersons] = useState([
    { 
      name: 'Arto Hellas',
      id : 1
    }
  ])

  const [newName, setnewName] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const newpersonObject = {
      name : newName,
      id: persons.length+1
    }
    setpersons(persons.concat(newpersonObject))
    setnewName('')
  }
    const handlechange = (event) =>{
      event.preventDefault()
      setnewName(event.target.value)
    }



  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name : <input onChange={handlechange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
      {persons.map(val => <p key={val.id}>{val.name}</p>)}
    </>
  )
}

export default App