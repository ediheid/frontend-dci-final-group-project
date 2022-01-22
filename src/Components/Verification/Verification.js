import React, { useContext } from "react";
import styles from "./Verification.module.scss";
import Button from "../../UI/Button/Button.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AppContext } from "../../App";

const useQuery = () => {
  return new URLSearchParams(window.location.search).get("message");
};

const Verification = () => {
  const query = useQuery();

  const verificationContext = useContext(AppContext);

  const showLoginModal = () => {
    verificationContext.setShowLoginModal(true);
  };

  const changeContent = () => {
    if (
      query === "Your account has been successfully activated!" ||
      query === "User has already been verified. Please login!"
    ) {
      return (
        <Link
          to="/"
          onClick={showLoginModal}
          className={styles["button-container"]}
        >
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
        <Link to="/login" className={styles.heading}>
          <a href="#">Resend confirmation mail</a>
        </Link>
      );
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles["main-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles.heading} id="verification">
            {query}
          </div>
          {changeContent()}
        </div>
      </main>
    </>
  );
};

export default Verification;
