import React, { useState } from "react";
import "./App.css";
import { caesar13 } from "./caesar13";

function App() {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [haveNotEncryptedChars, setHaveNotEncryptedChars] = useState(false);
  const [copyButtonValue, setCopyButtonValue] = useState(
    "Copy text to clipboard"
  );

  const handleSentenceInputChange = (e) => {
    setEncryptedMessage(caesar13(e.target.value)[0]);
    setHaveNotEncryptedChars(caesar13(e.target.value)[1]);
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
        style={{ marginBottom: "20px", display: "inline" }}
      ></img>
      <label
        htmlFor="sentence"
        style={{
          marginTop: "20px",
          display: "block",
        }}
      >
        Enter sentence to encrypt:
      </label>
      <input
        type="text"
        id="sentence"
        name="sentence"
        onChange={handleSentenceInputChange}
        style={{ width: "20em" }}
      />
      {haveNotEncryptedChars ? (
        <p style={{ color: "red" }}>
          The encryptor only encrypts the letters of the Latin alphabet.
          <br /> Other characters will not be encrypted!
        </p>
      ) : (
        <br />
      )}
      <label
        htmlFor="codedSentence"
        style={{
          marginTop: "20px",
          display: "block",
        }}
      >
        Encrypted sentence:
      </label>
      <input
        type="text"
        id="codedSentence"
        name="codedSentence"
        disabled={true}
        value={encryptedMessage}
        style={{ width: "20em" }}
      />
      <br />
      <button
        type="button"
        onClick={handleCopyTextToClipboard}
        style={{
          marginTop: "5px",
        }}
      >
        {copyButtonValue}
      </button>
    </div>
  );
}

export default App;
