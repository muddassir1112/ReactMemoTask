import React, { useState } from "react";
import "./NumberToWord.css";

export const NumberToWord = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  let oneToTwenty = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let tenth = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const handleInput = (e) => {
    setInput(parseInt(e.target.value));
  };
  const doConvert = () => {
    if (input.toString().length > 7) return setResult("overlimit");
    let num = ("0000000" + input)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!num) return;
    let outputText =
      num[1] != 0
        ? (oneToTwenty[Number(num[1])] ||
            `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
        : "";

    outputText +=
      num[2] != 0
        ? (oneToTwenty[Number(num[2])] ||
            `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
        : "";
    outputText +=
      num[3] != 0
        ? (oneToTwenty[Number(num[3])] ||
            `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " thousand "
        : "";
    outputText +=
      num[4] != 0
        ? (oneToTwenty[Number(num[4])] ||
            `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
        : "";
    outputText +=
      num[5] != 0
        ? oneToTwenty[Number(num[5])] ||
          `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
        : "";
    setResult(outputText);
  };
  return (
    <div className="container1">
      <h2>
        <u>Question-5</u>
      </h2>
      <h3>Number To Word</h3>
      <div class="header">
        <h1>
          <u>Number to Words</u>
        </h1>
        <h3>Please type a number:</h3>
        <input
          className="numberInput"
          id="numberInput"
          placeholder="Enter your number"
          onChange={handleInput}
        />
        <button className="convertBtn" onClick={doConvert}>
          Convert to text
        </button>
      </div>
      <div id="result">
        <p>{result}</p>
      </div>
    </div>
  );
};
