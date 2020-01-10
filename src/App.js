import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas';

let test = '<= Draw a snowflake you like';

function to_image() {
  var canvas = document.getElementById("canvas");
  var dataURL = canvas.toDataURL("image/jpeg", 1.0);
  let filename = document.getElementById("filenameTextArea").value;
  if (filename.length === 0){
    filename = 'untitled';
  }
  downloadImage(dataURL, filename + '.jpeg');
}

function downloadImage(data, filename) {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}

function App() {
  return (
    <div className="App">
      <header className="container">
        <Canvas />
        <div className="Heading2">{test}</div>


      </header>
      <div className="container">
        <div>Name: </div>
        <textarea id='filenameTextArea'></textarea>
        <button onClick={to_image}>Save as Image</button>
      </div>

    </div>

  );
}

export default App;
