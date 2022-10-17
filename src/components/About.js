import React from "react";

// props stands for property and we can define a particular variable using props this helps in reuse of the components as well as helps to make the page dynamic with out reloading the site
export default function About() {
  return (
    <>
    <div className="container">
        <p>
            <h1>Motive </h1>
            This is a website build for learning purpose. Unlike other This project is well documented and can be used in future as an review while stuck in any project.
            <h1>About Project </h1>
            It is a simple word manupulation project where we can uppercase all the words, we can lowercase all the code and we can clear the text field too. 
            It can count the number of words and the number of letters as well. It has the feature to enable and diable the dark mode.

        </p>
    </div>
    </>
    
  );
}
