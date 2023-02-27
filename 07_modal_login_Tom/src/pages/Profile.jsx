import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { setCredentials, logOut } from "../features/auth/authSlice";

import { Link } from "react-router-dom";
import style from "./Profile.module.scss";
import { PublicProfile } from "./PublicProfile";
import {
  useGetMoviesQuery,
  useGetMeQuery,
} from "../features/users/usersApiSlice";

/**
・開いた時に、users APIを呼び出して最新の情報を取得する。
・APIを呼び出す時には、JWTを使う。/api/users/me
・ログアウトボタン
・useStateで、コンポーネントの中での変数の値を保持、更新する
・too many renderの例題
　https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number
・profileと、ユーザー一覧を開いている場合、両方ともに、stateを見る
　profileを開いた時に、APIを呼び出して新しい情報を取得したらstateを更新
　ユーザー一覧も自動的に表示が更新されるハズ！？
・エラー：Cannot update a component (`Profile`) while rendering a different component (`Profile`)




❌<button onClick={setCounter(counter + 1)}>Increment</button>
⭕️<button onClick={() => setCounter(counter + 1)}>Increment</button>

 */

export const Profile = () => {
  const dispatch = useDispatch();

  let user = useSelector(selectCurrentUser);
  let token = useSelector(selectCurrentToken);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

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

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMeQuery(cookies.jwt);
  //} = useGetMoviesQuery();

  if (isSuccess) {
    console.log("isSuccess response=", response);
    const payload = {
      user: response,
      jwt: cookies.jwt,
    };
    dispatch(setCredentials);
    //dispatch(logOut);
  }

  if (isError) {
    return <>API呼び出しで失敗しました</>;
  }

  return (
    <>
      <PublicProfile props={obj} />
    </>
  );

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
