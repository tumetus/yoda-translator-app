import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  app: {
    margin: "10px"
  },
  label: {
    color: 'gray',
    margin: "0 0 0 5px",
    fontSize: "22px"
  },
  textInput: {
    padding: "10px",
    width: "500px",
    margin: "5px",
    fontSize: "21px"
  },
  button: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
    border: "1px solid transparent",
    padding: "10px 30px",
    fontSize: "22px"
  },
  text: {
    margin: "0 0 0 5px",
    color: "green",
    fontSize: "32px"
  }
};

export default function App() {
  let [text, setText] = useState("");
  let [yodaText, setYodaText] = useState("");

  const onTranslateClick = () => {
    axios
      .post("/translate/yoda.json", { text })
      .then(res => {
        const { translated } = res.data.contents;
        setYodaText(translated);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={styles.app}>
      <h1>Yoda translator</h1>
      <label style={styles.label}>English</label>
      <br/>
      <input type="text" value={text} onChange={ e => setText(e.target.value)} style={styles.textInput} placeholder="Type your text here..."/>
      <button style={styles.button} onClick={onTranslateClick}>Translate</button>
      <br/>
      <label style={styles.label}>Yoda</label>
      <div style={styles.text}>{yodaText}</div>
    </div>
  );
};