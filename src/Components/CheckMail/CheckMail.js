import React from "react";
import styles from "./CheckMail.module.scss";
import Button from "../../UI/Button/Button.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const useQuery = () => {
  return new URLSearchParams(window.location.search).get("message");
};

const CheckMail = () => {
  const query = useQuery();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.msgbox}>
            <h1 className={styles.heading} id="checkmail">
            {query}
            </h1>
            <Link to="/">
                <Button>Back to Home</Button>
            </Link>
        </div>
      </main>
    </>
  );
};

export default CheckMail;
