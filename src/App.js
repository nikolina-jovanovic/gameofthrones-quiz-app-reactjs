import React from 'react';
import "./styles.css";
import Start from "./components/Start";
import { useState, useEffect } from "react";
//import Background from './images/GOTwp2Blurred.jpg';

export default function App() {
  const [name, setName] = useState({
    text: "",
    isSubmitClicked: false
  });

  //visibility of an input field:
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (name.isSubmitClicked) {
      setVisible(false);
    }
  }, [name.isSubmitClicked]);

  const handleChange = (e) => {
    setName({ ...name, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.text) {
      setName({ ...name, isSubmitClicked: true });
    } else {
      alert("Write your name,please.");
    }
  };

  return (
    <div>
      {visible && (
        <form onSubmit={handleSubmit} className="App">
          <h1
            style={{
              fontFamily: "'Mate SC', serif",
              color: "rgb(80,80,80)",
              fontSize: "45px"
            }}
          >
            Game of Thrones quiz
          </h1>
          <h2 style={{ width: "80%" }}>Hello,tell us your name!</h2>
          <input
            autoFocus
            className="input-name"
            value={name.text}
            onChange={handleChange}
            type="text"
          />
          <button className="input-btn">Continue</button>
        </form>
      )}
      {name.isSubmitClicked && <Start name={name.text} />}
    </div>
  );
}
