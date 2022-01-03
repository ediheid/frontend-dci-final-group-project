import React from "react";
import styles from "./Verification.module.scss";
import Button from "../../UI/Button/Button.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const useQuery = () => {
  return new URLSearchParams(window.location.search).get("message");
};

const Verification = () => {
  const query = useQuery();

  const changeContent = () => {
    if (
      query === "Your account has been successfully activated!" ||
      query === "User has already been verified. Please login!"
    ) {
      return (
        <Link to="/landingpage">
          <Button>Login</Button>
        </Link>
      );
    } else if (
      query ===
      "We were unable to find a user for this verification. Please SignUp!"
    ) {
      return (
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      );
    } else {
      return (
        <Link to="/login">
          <a href="#">resend confirmation mail</a>
        </Link>
      );
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.msgbox}>
          <h1 className={styles.heading} id="verification">
            {query}
          </h1>
          {changeContent()}
        </div>
      </main>
    </>
  );
};

export default Verification;
