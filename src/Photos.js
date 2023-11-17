import React, { useState } from "react";
import axios from "axios";

export default function Photos(props) {
  const [dataPhotos, setDataPhotos] = useState(null);
  function handlePhotos(response) {
    setDataPhotos(response.data.photos);
  }
  let apiKeyPexels = "KxHdtbLuNaHyq8ZwdGUUsK9HhImpDlD51oXOwcYIy9GJt3P7HoaIEQkv";
  let headers = { Authorization: `${apiKeyPexels}` };
  let apiUrlPexels = `https://api.pexels.com/v1/search?query=${props.word}&per_page=9`;
  axios.get(apiUrlPexels, { headers: headers }).then(handlePhotos);

  if (dataPhotos) {
    return (
      <section class="photo-gallery">
        <div class="row">
          {dataPhotos.map(function (showPhotos, index) {
            return (
              <div class="col-4" key={index}>
                <a
                  href={showPhotos.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    class="img-fluid"
                    src={showPhotos.src.tiny}
                    alt={showPhotos.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
