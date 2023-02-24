import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  console.log("App");

  const [files, setFiles] = useState();
  const [movies, setMovies] = useState([]);

  const initialValue = [{ id: 0, value: " --- Select a State ---" }];

  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://lusty.asia:1443/api/movies")
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

  const clickCard = (e, id) => {
    setFiles(e);
    console.log("id=", id);
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    //console.log("movies=", movies);
    //movies.map((movie) => {
    //  console.log("title=", movie.attributes.title);
    //});
    //return;

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
          .put("https://lusty.asia:1443/api/movies/2", payload)
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
          <div className="card">
            <div>{d.id}</div>
            <div>{d.attributes.title}</div>
            <input
              type="file"
              onChange={(e) => clickCard(e.target.files, d.id)}
            />
          </div>
        ))}
      </div>
      <form onSubmit={uploadImage}>
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
