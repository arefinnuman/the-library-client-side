/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/authApi";

export default function Login() {
  const [userNameInputValue, setUserNameInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  const userRef: RefObject<HTMLInputElement> = useRef(null);
  const errRef: RefObject<HTMLParagraphElement> = useRef(null);

  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErr("");
  }, [user, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email: userNameInputValue,
      password: passwordInputValue,
    };
    console.log(loginData);
    login(loginData);
    setUserNameInputValue("");
    setPasswordInputValue("");
    // navigate("/");
    console.log("logged");
  };

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameInputValue(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };

  const content = (
    <section className="login">
      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userNameInputValue}
          onChange={handleUserInput}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordInput}
          value={passwordInputValue}
          required
        />
        <button>Sign In</button>
      </form>
    </section>
  );

  return content;
}
