import jwt_decode from "jwt-decode";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Modal.module.scss";
import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/products/productsSlice";

import { openModal } from "../features/modal/modalSlice";

/**
・useRefの使い方
　https://zenn.dev/dove/articles/e2d962e9d69e20
・useRefを<input ref={}>で設定するとエラーになってしまう。なぜ？
　Internal React error: Expected static flag was missing. Please notify the React team.



**/

export const LoginModal = ({ open }) => {
  if (!open) return null;

  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput.current) {
      emailInput.current.focus();
    }
  }, []);

  return (
    <form>
      <label>
        Email
        <input name="email" type="email" ref={emailInput} />
      </label>
      <label>
        Password
        <input name="email" type="email" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginModal;
