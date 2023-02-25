import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { FileUploader } from "./FileUploader";

function App() {
  console.log("App");

  const [movies, setMovies] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://lusty.asia:1443/api/movies?populate=image"
      );
      const data = response.data.data;
      setMovies(data);
      console.log("api call finished");
    } catch (error) {
      console.log("error = ", error);
    }
  };

  useEffect(() => {
    //uploadにTODO失敗した時の処理？
    fetchPost();
  }, []);

  const parentFunction = (e) => {
    console.log("e=", e);
    console.log("ファイルがアップロードされました");
    fetchPost();
  };
  return (
    <>
      <div className="container">
        {movies.map((d) => (
          <div className="card" key={d.id}>
            <img
              src={`https://lusty.asia:1443${d.attributes.image.data.attributes.formats.thumbnail.url}`}
              alt=""
            />
            <div>{d.id}</div>
            <div>{d.attributes.title}</div>
            <FileUploader callBackFromChild={parentFunction} movieId={d.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
