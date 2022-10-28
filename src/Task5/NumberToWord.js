import React, { useState } from 'react'

export const NumberToWord = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("");
    const handleInput = (e) => {
        setInput(e.target.value);
    }
  return (
    <div className='container1'>
        <h2><u>Question-5</u></h2>
        <h3>Number To Word</h3>
        <input type="text" className='input' placeholder='Enter Your Number' onChange={handleInput}></input>
        <p>{result}</p>
        </div>
  )
}
