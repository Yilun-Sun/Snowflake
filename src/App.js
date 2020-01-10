import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas';
import CoordinateCanvas from './Canvas/CoordinateCanvas';
import styles from './CSS/Button.module.css';
import './CSS/AwesomeHoverBtn.scss';

let test = 'Draw a snowflake   ';

function to_image() {
  var canvas = document.getElementById("canvas");
  var dataURL = canvas.toDataURL("image/jpeg", 1.0);
  let filename = document.getElementById("filenameTextArea").value;
  if (filename.length === 0) {
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

const textareaStyle = {
  border: 0,
  borderRadius: '5px',
  backgroundColor: '#FFFFFF',
  width: '200px',
  height: '57px'
};

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#535953'
    }}>
      <header className="containerH">

        <Canvas />

        <div className="Heading2">{test}</div>


      </header>
      <div className="containerH">

        <div className="Heading2">Name: </div>
        <textarea id='filenameTextArea' style={textareaStyle}></textarea>
        <div className="spaceBar"></div>
        <div><button class="btn btn--stripe" onClick={to_image}>Save as Image</button></div>

      </div>

    </div>

  );
}

export default App;
