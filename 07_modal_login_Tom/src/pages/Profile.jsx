import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import style from "./Profile.module.scss";
import { PublicProfile } from "./PublicProfile";
import { useGetMoviesQuery } from "../features/users/usersApiSlice";

/**
・開いた時に、users APIを呼び出して最新の情報を取得する。
・APIを呼び出す時には、JWTを使う。/api/users/me
 */

export const Profile = () => {
  let user = useSelector(selectCurrentUser);
  let token = useSelector(selectCurrentToken);

  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMoviesQuery();

  if (isSuccess) {
    console.log("movies=", movies);
  }

  const obj = {
    background: "/src/assets/surf-small.jpg",
    avatar: "/src/assets/profile_rectangle.jpg",
    username: "tom",
    email: "tom@gmail.com",
    birthday: "",
    hitokoto: "フルスタックエンジニアです！",
    expires: "2023/03/20 18:23:20",
    icEmail: "/src/assets/icons/email.svg",
    icSpeech: "/src/assets/icons/speech.svg",
    icCalendarClock: "/src/assets/icons/calendar-clock.svg",
  };
  return <PublicProfile props={obj} />;

  const welcome = user ? `Profile ${user.username}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  // jwt decode
  const decoded = jwt_decode(token);
  console.log("decoded=", decoded);

  // unix timeをDateに変換
  let dateTime = new Date(decoded.exp * 1000);
  console.log("dateTime=", dateTime);

  const content = (
    <div className={style.welcome}>
      <h1>{welcome}</h1>
      <div className={style.info}>
        <p>権限：{user.role_linkstaff}</p>
        <p>Token: {tokenAbbr}</p>
        <p>jwt_decode：{JSON.stringify(decoded)}</p>
        <p>有効期限：{dateTime.toString()}</p>
        <p>ID：{user.id}</p>
        <p>Email: {user.email}</p>
        <p>username: {user.username}</p>
        <p>
          <Link to="/userslist">Go to the Users List</Link>
        </p>
      </div>
    </div>
  );

  return content;
};
