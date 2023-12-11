import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (similarWords, index) {
          const separator = index < props.synonyms.length - 1 ? ", " : "";
          return (
            <span key={index} className="synonyms">
              {similarWords}
              {separator}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
