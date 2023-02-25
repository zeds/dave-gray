import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux"
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import style from "./Profile.module.scss"; 
import back from "../assets/back.jpeg"
import victor from "../assets/victor.jpg"

export const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  let user = useSelector(selectCurrentUser);
  let token = useSelector(selectCurrentToken);

  if (user) {
    setCookie("user", user);
  } else {
    console.log("cookieのuserを使う");
    user = cookies.user;
  }

  if (token) {
    setCookie("token", token);
  } else {
    console.log("cookieのtokenを使う");
    token = cookies.token;
  }

  const welcome = user ? `Profile ${user.username}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  // jwt decode
  const decoded = jwt_decode(token);
  console.log("decoded=", decoded);

  // unix timeをDateに変換
  let dateTime = new Date(decoded.exp * 1000);
  console.log("dateTime=", dateTime);

  const content = (
    <div className={style.container}>
      <div className={style.info}>
        <div></div>
        <img src={victor} alt="" />
        <p>Token: {tokenAbbr}</p>
        <p>jwt_decode：{JSON.stringify(decoded)}</p>
        <p>有効期限：{dateTime.toString()}</p>
        <p>ID：{user.id}</p>
        <input type="text" placeholder="123" />
        <p>Email: {user.email}</p>
        <input type="mail" placeholder="ab@gmail.com" />
        <p>username: {user.username}</p>
        <input type="text" placeholder="Abror" />
        <p>
          <Link to="/userslist">Go to the Users List</Link>
        </p>
      </div>
    </div>
  );

  return content;
};
