import React, { useState } from 'react'


export default function TextForm(props) {
  // All Function Logic Start------------------------

  /* feautre -1 Function Of Convert UpperCase */
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }

  /* feautre -2 Function Of Convert LowerCase */
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCopy = () => {

  }

  // Function Of Remove Extra Space from text area
  const handleExtraSpaces = () => 
  {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleClearClick = () =>
   {
    let text = "";
    setText(text);
   }

  const [text, setText] = useState('Enter text here');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  // All Function Logic End------------------------
  return (
    <>
      <div>
        <div style={{color: props.mode==='dark'?'white':'#042743'}}> <h1> Enter Your Text </h1></div>
       
        {/* Logic of text area in which we type  */}
        <div className="mb-3">
          <textarea className="form-control" idName="typeing_Box" value={text} onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
        {/* Counting Word and charaacter Logic here */}
      <div className='Container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Word and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
      {/* Logic Section of - Calculating Reading Time */}
        <div className="Container-Preview_Area" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>Preview</h1>
          <p>{text}</p>
        </div>
    </>
  )
}