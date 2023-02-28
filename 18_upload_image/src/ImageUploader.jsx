import React, { useState, useRef, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import Camera from "/src/assets/camera.svg";

import style from "./ImageUploader.module.scss";

//assetsを使うには、vercel.jsonを作成する

//const override: CSSProperties = {
//  display: "block",
//  margin: "0 auto",
//  borderColor: "red",
//};

export const ImageUploader = ({ callBackFromChild, movieId }) => {
  //callBackFromChild({ isLoading: true });
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36d7b7");

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (e) => {
    const imageUploaded = e.target.files[0];
    console.log("file=", imageUploaded);

    const formData = new FormData();
    formData.append("files", imageUploaded);

    setLoading(true);

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
            setLoading(false);

            callBackFromChild(imageUploaded);
          })
          .catch((error) => {
            setLoading(false);
            console.log("error movie");

            //handle error
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log("error upload");

        //handle error
      });
  };

  return (
    <>
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>

        <button onClick={handleClick}>
          <img src={Camera} />
          <PulseLoader
            size={15}
            color={color}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
    </>
  );
};
