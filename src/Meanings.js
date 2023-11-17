import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div class="item">
      <h5 class="mb-2">{props.data.partOfSpeech}</h5>
      <p class="mb-2">
        {props.data.definition}
        <br />
        {props.data.example && (
          <span class="example">
            <i>{props.data.example}</i>
          </span>
        )}
      </p>
      <Synonyms synonyms={props.data.synonyms} />
    </div>
  );
}
