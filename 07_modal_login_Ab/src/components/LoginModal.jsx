import jwt_decode from "jwt-decode";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Modal.module.scss";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/products/productsSlice";

import { openModal } from "../features/modal/modalSlice";

export const LoginModal = ({ open }) => {
  if (!open) return null;

  const userRef = useRef();
  const errRef = useRef();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    //フォーカス
    userRef.current.focus();
  }, []); // []をつけると1度しか呼び出されない

  //TODO
  //useEffect(() => {
  //	setErrMsg('')
  //},[identifier, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = {
        identifier: identifier,
        password: password,
      };

      console.log("credentials=", credentials);
      const userData = await login(credentials).unwrap();
      //const userData = await login({ identifier, password }).unwrap()
      console.log("auth userData=", userData);
      //dispatch(setCredentials({ ...userData, user }))

      // jwt decode
      let decoded = jwt_decode(userData.jwt);
      console.log("decoded=", decoded);
      let dateTime = new Date(decoded * 1000);
      console.log(dateTime.toLocaleDateString());

      dispatch(setCredentials(userData));
      setIdentifier("");
      setPassword("");
      navigate("/profile");
      console.log("completed login");
      dispatch(openModal({ name: "login", open: false }));
    } catch (err) {
      console.log("エラー!!!LoginModal");
      console.log("username,passwordが違います");
      setIsLoginFailed(true);
    }
  };
  const handleUserInput = (e) => setIdentifier(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  return (
    <div
      onClick={(event) => {
        dispatch(openModal({ name: "login", open: false }));
      }}
      className={style.modal_container}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={style.modal_form}
      >
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={userRef}
            value={identifier}
            onChange={handleUserInput}
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={handlePwdInput}
            placeholder="password"
          />
          {isLoginFailed ? (
            <span>usernameまたはパスワードが違います</span>
          ) : null}
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
