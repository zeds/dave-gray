import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import style from "./Welcome.module.scss";

export const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user.username}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <div className={style.welcome}>
      <h1>{welcome}</h1>
      <div className={style.info}>
        <p>Token: {tokenAbbr}</p>
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
