import React, {useState} from 'react'

export default function App () {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Hola mundo!</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Aqui!</button>
    </>
  )
}