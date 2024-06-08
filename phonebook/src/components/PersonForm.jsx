import React, { useState } from 'react'

const PersonForm = (props) => {

  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)

  const addPerson = (event) =>{
    event.preventDefault()

    const find = props.persons.find(val => val.name.toLowerCase() === newName.toLowerCase())
    if(find){
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      const newpersonObject = {
      name : newName,
      number: newNumber,
      id: props.persons.length+1
    }
    props.setpersons(props.persons.concat(newpersonObject))
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

  return (
    <div>
        <form onSubmit={addPerson}>
        <div>
          name : <input onChange={handlenamechange}/> <br/>
          number : <input onChange={handlenumberchange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm