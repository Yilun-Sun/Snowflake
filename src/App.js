import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas';
import CoordinateCanvas from './Canvas/CoordinateCanvas';
import styles from './CSS/Button.module.css';
import './CSS/AwesomeHoverBtn.scss';

let test1 = 'Draw a snowflake    ';
let test2 = '画个雪花儿    ';

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
  height: '57px',
  fontSize: '40px',
};

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#6699A1'
    }}>
      <header className="containerH">
        <div className="containerV">
          <div className="Heading2">{test1}</div>
          <div className="Heading2">{test2}</div>
        </div>

        <Canvas />




      </header>
      <div className="containerH">

        <div className="Heading2" >起名儿: </div>
        <textarea id='filenameTextArea' style={textareaStyle}></textarea>
        <div className="spaceBar"></div>
        <div><button class="btn btn--stripe" onClick={to_image}>Save as Image</button></div>

      </div>

    </div>

  );
}

export default App;
