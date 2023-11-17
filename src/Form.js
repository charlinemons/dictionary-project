import React from "react";
import axios from "axios";

export default function Form(props) {
  function handleResponse(response) {
    props.setResult(response.data);
  }
  function search() {
    let apiKey = `1fabbbt6e694149ea2da3obbe200ebf2`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${props.word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    props.setWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="row d-flex justify-content-center">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a word..."
              class="form-control-lg w-100 search"
              autoFocus="on"
              onChange={handleWordChange}
            ></input>
          </div>
          <div class="col-3 mt-1">
            <input
              type="submit"
              value="Search"
              class="btn btn-outline-primary p-2 w-100"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
