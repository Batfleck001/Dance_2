import React from 'react'

const Number = (props) => {

  return (
    <div>{props.persons.map(val => (<p key={val.id}>{val.name} : {val.number}</p>))}</div>
  )
}

export default Number