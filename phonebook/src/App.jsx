import React, { useState } from 'react'

const App = () => {

  const [persons, setpersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [query, setquery] = useState('')
  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)

  const addPerson = (event) =>{
    event.preventDefault()

    const find = persons.find(val => val.name.toLowerCase() === newName.toLowerCase())
    if(find){
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      const newpersonObject = {
      name : newName,
      number: newNumber,
      id: persons.length+1
    }
    setpersons(persons.concat(newpersonObject))
  }
  setnewName('')
  setnewNumber(0)
  }
    const handlenamechange = (event) =>{
      event.preventDefault()
      setnewName(event.target.value)
    }
    const handlenumberchange = (event) =>{
      event.preventDefault()
      setnewNumber(event.target.value)
    }
    const handlequery = (event) =>{
      event.preventDefault()
      setquery(event.target.value)
    }
    
    const filtered = query != '' ? persons.filter(val => val.name.toLowerCase().includes(query.toLowerCase())) : []

    
  return (
    <>
      <h2>Phonebook</h2>
      Filter shown with : <input onChange={handlequery}/>
      {filtered.map(val => <p>{val.name} : {val.number}</p>)}
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name : <input onChange={handlenamechange}/> <br/>
          number : <input onChange={handlenumberchange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
      {persons.map(val => (<p key={val.id}>{val.name} : {val.number}</p>))}
    </>
  )
}

export default App