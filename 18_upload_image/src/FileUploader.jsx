import React, { useState, useRef } from "react";
import axios from "axios";

import style from "./FileUploader.module.scss";

//assetsを使うには、vercel.jsonを作成する

export const FileUploader = ({ callBackFromChild, movieId }) => {
  //callBackFromChild({ isLoading: true });
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    console.log("file=", fileUploaded);

    const formData = new FormData();
    formData.append("files", fileUploaded);

    axios
      .post("https://lusty.asia:1443/api/upload", formData)
      .then((response) => {
        console.log("response=", response);

        const imageId = response.data[0].id;
        const payload = {
          data: {
            image: imageId,
          },
        };
        axios
          .put(`https://lusty.asia:1443/api/movies/${movieId}`, payload)
          .then((response) => {
            console.log("success movie");
            callBackFromChild(fileUploaded);
          })
          .catch((error) => {
            console.log("error movie");

            //handle error
          });
      })
      .catch((error) => {
        console.log("error upload");

        //handle error
      });

    //props.handleFile(fileUploaded);
  };

  return (
    <>
      <button onClick={handleClick}>
        <img src="/src/assets/camera.svg" />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
