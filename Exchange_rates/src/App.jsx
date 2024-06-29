import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const[currency, setcurrency] = useState(null)
  const[rates,setrates] = useState({})
  const[value, setvalues] = useState('')
  useEffect(() =>{
    if(currency){
      console.log("Effect runs currency now",currency)
      axios.get(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res=> setrates(res.data.rates))
    }
  },[currency])
  const handleChange = (e) =>{
    setvalues(e.target.value)
  }

  const onSearch = (e) =>{
    e.preventDefault()
    setcurrency(value)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App