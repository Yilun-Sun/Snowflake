import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas/Canvas';
import CoordinateCanvas from './Canvas/CoordinateCanvas';
import styles from './CSS/Button.module.css';

let test = '<= Draw a snowflake you like';

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



function App() {
  const docStyle = document.documentElement.style
  const aElem = document.querySelector('a')
  const boundingClientRect = aElem.getBoundingClientRect()

  aElem.onmousemove = function (e) {

    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top

    const xc = boundingClientRect.width / 2
    const yc = boundingClientRect.height / 2

    const dx = x - xc
    const dy = y - yc

    docStyle.setProperty('--rx', `${dy / -1}deg`)
    docStyle.setProperty('--ry', `${dx / 10}deg`)

  }

  aElem.onmouseleave = function (e) {

    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')

  }

  aElem.onmousedown = function (e) {

    docStyle.setProperty('--tz', '-25px')

  }

  document.body.onmouseup = function (e) {

    docStyle.setProperty('--tz', '-12px')

  }

  
  return (
    <div className="App">
      <header className="container">

        <Canvas />

        <div className="Heading2">{test}</div>


      </header>
      <div className="container">
        <div>Name: </div>
        <textarea id='filenameTextArea'></textarea>
        <button className={styles.btngradientorange} onClick={to_image}>Save as Image</button>
        <button className="a">Awesome Button</button>
      </div>

    </div>

  );
}

export default App;
