import React, { useState } from 'react'

export const TextUtility = () => {
    const [input,setInput] = useState("");
    const [inputLength, setInputLength] = useState("");
    const [countWords, setCountWords] = useState("");
    const handleInput = (e) => {
        let strLen = e.target.value.length;
        let strCount = e.target.value.split(' ');
        let strCountLen = strCount.filter((e) => e !== ' ').length;
        setCountWords(strCountLen);
        setInputLength(strLen);
        setInput(e.target.value);
    }
    //Method to convert In Lower Case
    const toLowerCase = () => {
        let inputLower = input.toLowerCase();
        setInput(inputLower);
    }
    //Method to convert In Upper Case
    const toUpperCase = () => {
        let inputUpper = input.toUpperCase();
        setInput(inputUpper);
    }
  return (
    <div className='container1'>
        <h2><u>Question-4</u></h2>
        <h3>Text Utility App</h3>
        <textarea cols={50} rows={8} onChange={handleInput} value={input}/>
        <br></br>
        <p>Number of Characters: {inputLength}</p>
        <p>Number of Words: {countWords}</p>
        <button className='btn1' onClick={toLowerCase}>Lower Case</button>
        <button className='btn1' onClick={toUpperCase}>Upper Case</button>
    </div>
  )
}
