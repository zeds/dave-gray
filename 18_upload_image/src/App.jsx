import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  console.log("App");

  const [files, setFiles] = useState();
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://lusty.asia:1443/api/movies?populate=image")
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setMovies(data);
        console.log("movies=", movies); // <--- this will output the old state since the setWidgets above won't do it's work till the next re-render
      })
      .catch((erroe) => {
        console.log("error");
      });
  }, []); //[]しないと、何度もuseEffectが呼び出されるので注意！

  const clickInput = (file, id) => {
    console.log("file=", file);
    console.log("id=", id);
    setFiles(file);
    setMovieId(id);
  };

  //movieIdの変更を監視
  useEffect(() => {
    console.log("file selected");
    if (movieId !== 0) {
      uploadImage();
    }
  }, [movieId]);

  const uploadImage = () => {
    console.log("movieId=", movieId);
    //e.preventDefault();

    const formData = new FormData();
    formData.append("files", files[0]);

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
  };

  return (
    <>
      <div className="container">
        {movies.map((d) => (
          <div className="card" key={d.id}>
            {/*{JSON.stringify(
              d.attributes.image.data.attributes.formats.thumbnail
            )}*/}
            <img
              src={`https://lusty.asia:1443${d.attributes.image.data.attributes.formats.thumbnail.url}`}
              alt=""
            />
            <div>{d.id}</div>
            <div>{d.attributes.title}</div>
            <input
              type="file"
              onChange={(e) => clickInput(e.target.files, d.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
