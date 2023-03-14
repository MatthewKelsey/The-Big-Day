import React, { useEffect, useState } from "react";

function Popular(props) {
  let [currentPhoto, setCurrentPhoto] = useState(0);

  let popularPhotos = props.popularPhotos.slice(0, 5);

  useEffect(() => {
    console.log(popularPhotos)
    setTimeout(() => {
      if (currentPhoto < popularPhotos.length) {
        setCurrentPhoto(currentPhoto + 1);
      } else {
        setCurrentPhoto(0);
      }
    }, 5000);
  }, [currentPhoto]);

  return (
    <div className="pop">
      <div></div>
      <div className="popular">
        <h2>Most Popular</h2>
        {popularPhotos[currentPhoto] && (
          <img alt="popular" src={popularPhotos[currentPhoto].imgAddress}></img>
        )}
      </div>
    </div>
  );
}

export default Popular;
