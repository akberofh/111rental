import React, { useEffect } from "react";
import styles from "./Register.module.css";
import logo from "../photo/logo.png";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { supabase } from "../../supabase/supabase";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigation = useNavigate();
  const { user, loading } = useAuth();

  if (user) {
    navigation("/"); 
    return; 
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signUp({ email, password });

    if(error) {
    console.log(error.message);
    }
    await supabase
    .from("users")
    .insert([{id:data.user.id, email, role:"user"}])

    alert("Qeydiyyat tamamlandı")
  };

  return (
    <div className={styles.Register}>
      <div className={styles.Left}>
        <img onClick={() => navigation("/")} src={logo} alt="" />
      </div>
      <div className={styles.Right}>
        <div className={styles.back}>
          <RiArrowGoBackLine onClick={() => navigation("/")} />
        </div>
        <p>SIGN UP</p>
        <form action="" onSubmit={handleRegister}>
          <input
            className={styles.input}
            placeholder="Email"
            name="email"
            required
            type="email"
          />
          <input
            placeholder="Password"
            required
            minLength="6"
            type="password"
            name="password"
            className={styles.input}
          />
          <button className={styles.Button} type="submit">
            Register
          </button>
          <a onClick={() => navigation("/login")} href="">
            Don't have an account? <span>Sign in</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
