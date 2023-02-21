import React from "react";
import { Route, Routes } from "react-router-dom";

//権限OK：childrenを表示
//権限NG：アクセスできません
const userType = "public";
//const userType = "editor";
//const userType = "public";
//const userType = "";

// role="admin editor"
export const AuthRole = ({ role, children }) => {
  console.log("role=", role);

  if (!userType.length) {
    return <>あなたは権限を持っていません</>;
  }

  const roles = role.split(" ");
  if (roles.includes(userType)) {
    {
      return <>{children}</>;
    }
  } else {
    return <>あなたはこのページにアクセスする権限を持っていません</>;
  }
};
