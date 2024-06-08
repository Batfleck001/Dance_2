import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Number from './components/Number'

const App = () => {

  const [persons, setpersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons = {persons}/>
      <h3>Add a new</h3>
      <PersonForm setpersons={setpersons} persons = {persons}/>
      <h3>Number</h3>
      <Number persons={persons}/>
    </>
  )
}

export default App