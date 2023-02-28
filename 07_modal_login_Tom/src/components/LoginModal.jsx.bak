import jwt_decode from "jwt-decode";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Modal.module.scss";
import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/products/productsSlice";

import { openModal } from "../features/modal/modalSlice";

export const LoginModal = ({ open }) => {
  if (!open) return null;

  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const userRef = useRef();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    //フォーカス
    userRef.current.focus();
  }, []); // []をつけると1度しか呼び出されない

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        identifier: identifier,
        password: password,
      };

      console.log("credentials=", credentials);
      const userData = await login(credentials).unwrap();
      console.log("auth userData=", userData);

      //dispatch(setCredentials(userData));

      const user = userData.user;
      const jwt = userData.jwt;

      // cookieに格納
      setCookie("user", user);
      setCookie("jwt", jwt);
      console.log("success setCredentials");

      // jwt decode
      let decoded = jwt_decode(jwt);
      console.log("decoded=", decoded);
      let dateTime = new Date(decoded * 1000);
      console.log(dateTime.toLocaleDateString());

      setIdentifier("");
      setPassword("");
      navigate("/profile");
      console.log("completed login");
      dispatch(openModal({ name: "login", open: false }));
    } catch (err) {
      console.log("エラー!!!LoginModal");
      console.log("username,passwordが違います");
    }
  };
  const handleUserInput = (e) => setIdentifier(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  return (
    <div
      className={style.modal_container}
      onClick={(event) => {
        dispatch(openModal({ name: "login", open: false }));
      }}
    >
      <div
        className={style.modal_form}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={userRef}
            value={identifier}
            onChange={handleUserInput}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePwdInput}
            placeholder="password"
          />
          <button type="submit">login</button>
          <p className={style.message}>
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
