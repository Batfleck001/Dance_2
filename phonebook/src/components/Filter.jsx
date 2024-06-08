import React from 'react'
import { useState } from 'react'

const Filter = (props) => {

    const [query, setquery] = useState('')

    const handlequery = (event) =>{
        event.preventDefault()
        setquery(event.target.value)
      }

    const filtered = query != '' ? props.persons.filter(val => val.name.toLowerCase().includes(query.toLowerCase())) : []
  
  
    return (
    <div>
        Filter shown with : <input onChange={handlequery}/>

        {filtered.map(val => <p>{val.name} : {val.number}</p>)}
    </div>
  )
}

export default Filter