import React, { useState } from 'react'

export default function TextForm(props) {
const handleOnChange = (event) => {
console.log('On change')
setText(event.target.value);
}

  const handleUpClick = () => {
    console.log("You clicked on the handleUpClick"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    console.log("You clicked on the handleUpClick"+ text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearText = () => {
    console.log("You clicked on the handleUpClick"+ text);
    let newText =('');
    setText(newText)
  }

  const handleCopy = () => {
    let text = document.getElementById("my-Box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState('Enter text here');
  // setText("This is your text now");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="my-Box" rows="7" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>Time needed to read : {text.split(" ").length *0.008}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
  