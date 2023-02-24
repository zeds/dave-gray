import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Route, Routes } from "react-router-dom";

//権限OK：childrenを表示
//権限NG：アクセスできません
//const userType = "public";
//const userType = "editor";
//const userType = "public";
//const userType = "";

// role="admin editor"
export const AuthRole = ({ role, children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  //useEffect(() => {
  //  console.log("useEffect");
  //}, []); // []をつけると1度しか呼び出されない

  //ノーチェック
  if (role === "") {
    return <>{children}</>;
  }

  const user = cookies.user;

  //ログインしていない時
  if (!user) {
    return <>ログインしてください</>;
  }

  const userType = user.role_linkstaff;

  //userに権限がアサインされていない
  if (!userType.length) {
    return <>あなたは権限を持っていません</>;
  }

  // "admin editor public"テキストを配列に変換
  const roles = role.split(" ");
  // roles = ["admin","editor"]
  console.log("role=", role);
  console.log("roles=", roles);

  // userType="public"
  if (roles.includes(userType)) {
    {
      return <>{children}</>;
    }
  } else {
    return <>あなたはこのページにアクセスする権限を持っていません</>;
  }
};
