import React, { useState } from "react";
import Results from "./Results.js";
import Form from "./Form.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div class="Dictionary">
      <div class="header-form">
        <h1>Dictionary</h1>
        <h2 class="mb-3">What word would you like to look up?</h2>
        <Form word={word} setWord={setWord} setResult={setResult} />
        <div class="">
          <small>suggested words: plants, computer, dog...</small>
        </div>
      </div>
      <div class="section">
        <Results result={result} word={word} />
      </div>
    </div>
  );
}
