import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ImageUploader } from "./ImageUploader";

function App() {
  console.log("App");

  const [movies, setMovies] = useState([]);

  const hogeArray = [
    { id: 1, name: "tom" },
    { id: 2, name: "Ab" },
    { id: 3, name: "Andrey" },
  ];

  //hogeArray.map((item) => {
  //  console.log("item=", item.id);
  //});
  //for (let i = 0; i < hogeArray.length; i++) {
  //  console.log("name=", hogeArray[i].name);
  //}

  const test = () => {
    child(myFunc, 4);
  };
  const myFunc = (item) => {
    console.log("item=", item);
    if (item === "アイス買っていいですか？") {
      return "ダメです!";
    }
    if (item === "チョコ買っていいですか？") {
      return "虫歯になるからダメです！";
    }
    return "何言ってるかわからない";
  };

  const child = (func, id) => {
    console.log("child id=", id);
    let ret = func("アイス買っていいですか？");
    console.log(ret);
    ret = func("チョコ買っていいですか？");
    console.log(ret);
    ret = func("タバコ買っていいですか？");
    console.log(ret);
  };

  const fetchPost = async () => {
    test();
    console.log("fetchPost");
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
    //uploadにTODO失敗した時の処理が必要？
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
            <ImageUploader callBackFromChild={parentFunction} movieId={d.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
