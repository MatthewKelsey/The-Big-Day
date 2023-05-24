import React from "react";

import ShareAlbum from "./ShareAlbum";
import { useState } from "react";
import MainAlbum from "./MainAlbum";
import Uploader from "./Uploader";

import EnlargedPhoto from "./EnlargedPhoto";
function MainShare(props) {
  const [photos, setPhotos] = useState(props.currentAlbum.photos);
  const [showUpload, setShowUpload] = useState(false);
  const [largePhoto, setLargePhoto] = useState("");
  const [largePhotoActive, setLargePhotoActive] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);
  // const share = () => {
  //   setSharePopup(!sharePopup);
  // };

  // const sortByFavourites = async () => {
  //   let allPhotos = photos;
  //   allPhotos.sort((a, b) => {
  //     return b.likes - a.likes;
  //   });
  //   setPopularPhotos(allPhotos);
  // };

  const upDatePhotos = (id) => {
    let upDatedPhotos = photos.filter((obj) => {
      return obj._id !== id;
    });
    setPhotos(upDatedPhotos);
  };



  return (
    <div className="main-container">
      <div>
        {" "}
       
      </div>
      <br></br>
      
      <div className="main-album">
        <MainAlbum
          currentAlbum={props.currentAlbum}
          photos={photos}
          upDatePhotos={upDatePhotos}
          setLargePhoto={setLargePhoto}
          setLargePhotoActive={setLargePhotoActive}
          currentUser={props.currentUser}
        />
      </div>
      {showUpload && (
        <Uploader
          setShowUpload={setShowUpload}
          photos={photos}
          setPhotos={setPhotos}
          currentAlbum={props.currentAlbum}
        />
      )}
      {sharePopup && (
        <div className="add-album">
          <ShareAlbum
            currentAlbum={props.currentAlbum}
            setSharePopup={setSharePopup}
          />
        </div>
      )}
      {largePhotoActive && (
        <EnlargedPhoto
          setLargePhotoActive={setLargePhotoActive}
          largePhoto={largePhoto}
        />
      )}
      <div onClick={setShowUpload} className="add-photo">
        +
      </div>
    </div>
  );
}
export default MainShare;
