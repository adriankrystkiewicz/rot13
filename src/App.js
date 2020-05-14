import React, { useState } from "react";
import "./App.css";
import { caesar13 } from "./caesar13";

function App() {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [copyButtonValue, setCopyButtonValue] = useState(
    "Copy text to clipboard"
  );

  const handleSentenceInputChange = (e) => {
    setEncryptedMessage(caesar13(e.target.value));
  };

  const handleCopyTextToClipboard = () => {
    navigator.clipboard.writeText(encryptedMessage);
    setCopyButtonValue("Copied! :)");
    setTimeout(() => {
      setCopyButtonValue("Copy text to clipboard");
    }, 2000);
  };

  return (
    <div className="App">
      <h1>ROT13</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Enigma_rotor_set.png"
        alt="Enigma rotor set"
        height="200"
      ></img>
      <br />
      <br />
      <label htmlFor="sentence">Enter sentence to code:</label>
      <br />
      <input
        type="text"
        id="sentence"
        name="sentence"
        onChange={handleSentenceInputChange}
        style={{ width: "20em" }}
      />
      <br />
      <br />
      <br />
      <label htmlFor="codedSentence">Coded sentence:</label>
      <br />
      <input
        type="text"
        id="codedSentence"
        name="codedSentence"
        disabled={true}
        value={encryptedMessage}
        style={{ width: "20em" }}
      />
      <br />
      <button type="button" onClick={handleCopyTextToClipboard}>
        {copyButtonValue}
      </button>
    </div>
  );
}

export default App;
