import React from "react";
import { useState } from "react";
export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(""); //State for user Input
  const [select1, setSelect1] = useState(""); //State for Selecting Option "from"
  const [select2, setSelect2] = useState(""); //State for selecting option "to"
  const [result, setResult] = useState(""); // state to display result
  const handleInput = (e) => {
    setAmount(e.target.value);
  };
  const handleSelect1 = (e) => {
    setSelect1(e.target.value);
  };
  const handleSelect2 = (e) => {
    setSelect2(e.target.value);
  };
  //function to convert the user input into desired currency
  const handleConvert = (e) => {
    let res;
    e.preventDefault();
    //Validation to check the correct input
    if (isNaN(amount) || amount === "") {
      alert("Please Enter Amount in Digits");
    } else if (
      select1 === "" ||
      select2 === "" ||
      select1 === "Country" ||
      select2 === "Country"
    ) {
      alert("Please choose Country from list");
    } else if (select1 === "USA" && select2 === "INDIA") {
      res = amount * 82.46;
      setResult(`${amount} USD = ${res} INR`);
    } else if (select1 === "INDIA" && select2 === "USA") {
      res = amount / 82.46;
      setResult(`${amount} INR = ${res} USD`);
    } else if (select1 === "INDIA" && select2 === "INDIA") {
      res = amount * 1;
      setResult(`${amount} INR = ${res}`);
    } else if (select1 === "USA" && select2 === "USA") {
      res = amount * 1;
      setResult(`${amount} USD = ${res}`);
    } else setResult("");
  };

  return (
    <>
    <h1 style={{textAlign:"center"}}><u>Question-3</u></h1>
    <div className="container">
      <h2>Currency Converter</h2>
      <div className="main">
        <div className="row1">
          <label htmlFor="amount">Enter Amount</label>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Enter Amount"
            className="input"
            onChange={handleInput}
          />
        </div>
        <br></br>
        <br></br>
        <div className="row2">
          <div className="col1">
            <label htmlFor="from"> From</label>
            <br></br>
            <select onChange={handleSelect1} className="select">
              <option value="Country">-Country-</option>
              <option value="USA">🇺🇸USD</option>
              <option value="INDIA">🇮🇳IND</option>
            </select>
          </div>
          <p className="image">⇄</p>
          <div className="col3">
            <label htmlFor="to">To</label>
            <br></br>
            <select onChange={handleSelect2} className="select">
              <option value="Country">-Country-</option>
              <option value="USA">🇺🇸USD</option>
              <option value="INDIA">🇮🇳IND</option>
            </select>
          </div>
        </div>
        <div className="result">
          <p>{result}</p>
          <button className="btn" onClick={handleConvert}>
            Get Exchange Rate
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
