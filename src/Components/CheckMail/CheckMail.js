import React, { useContext } from "react";
import styles from "./CheckMail.module.scss";
import Button from "../../UI/Button/Button.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

import { AppContext } from "../../App";

const useQuery = () => {
  return new URLSearchParams(window.location.search).get("message");
};

const CheckMail = () => {
  const query = useQuery();

  const SearchContext = useContext(AppContext);

  return (
    <>
      <Navbar />
      {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
      {/* {SearchContext.openSearch ? <Search /> : null} */}
      <Search />

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
