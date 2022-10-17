import React, { useState } from "react"; 

export default function Textbox(props) {

  // state for the text field
  const [text, setText] = useState("enter your text: ");

  // changes the state of the text field as soon as a text is entered in the textbox
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

 

  //changes all the text to uppercase as the button is clicked
  const handleOnUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //changes all the text to lowercase as the button is clicked
  const handleOnLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //clears all the text as the button is clicked
  const handleOnClear = () => {
    // let newText = text.toString("");
    setText("");
  };

  const handleOnFind = () => {
    let word = prompt("enter the word you want to search");
    let replace = prompt("enter the word you want to replace with")
    let wordarr = text.split(" ");
    for (let i=0;i<wordarr.length;i++)
    {
      if(word === wordarr[i])
      {
        wordarr[i] = replace;
        continue;
      }
      else{
        continue;
      }

    }
    setText(wordarr.join(" "));
    console.log(wordarr);
  }


  return (
    <>
      <div className=" container mb-3 my-3" style={props.state}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label my-3"
        >
          Enter Your Text Here :
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={props.state}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mx-2 my-3"
          onClick={handleOnUpper}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-3"
          onClick={handleOnLower}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-3"
          onClick={handleOnClear}
        >
          Clear
        </button>
        <br />
        <button
          type="button"
          className="btn btn-primary mx-2 my-3"
          onClick={handleOnFind}
        >
          Find Word
        </button>
      </div>

      <div className="container" style={props.state}>
        <h2> Preview </h2>
        <p>
          {" "}
          character: {text.length} Words: {text.split(" ").length}
        </p>
      </div>
    </>
  );
}
