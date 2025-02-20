import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../photo/logo.png";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { supabase } from "../../supabase/supabase"; 

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        setErrorText("Email or password is incorrect.");
      } else {
        setErrorText("Something went wrong. Please try again.");
      }
    } else {
      if (data.user.email === "admin@admin") {
        navigation("/admin-dashboard");
      } else {
        navigation("/");
      }
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Left}>
        <img onClick={() => navigation("/")} src={logo} alt="" />
      </div>
      <div className={styles.Right}>
        <div className={styles.back}>
          <RiArrowGoBackLine onClick={() => navigation("/")} />
        </div>
        <p>SIGN IN</p>
        <form action="" onSubmit={handleLogin}>
          <input
            className={styles.input}
            placeholder="Email"
            name="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            required
            minLength="6"
            type="password"
            name="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorText && <p style={{ color: "red" }}>{errorText}</p>}{" "}
          <button className={styles.Button} type="submit">
            Login
          </button>
          <a onClick={() => navigation("/register")} href="">
            Don't have an account? <span>Sign up</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
