import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="google" href="/"><strong>Google Books</strong></a></span></h1>
        <div>
          <a className="google" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
          </a>
        </div>
    </div>
  );
}

export default Jumbotron;
