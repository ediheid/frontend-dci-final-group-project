import React from "react";
import styles from "./CheckMail.module.scss";
import Button from "../../UI/Button/Button.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

// import { AppContext } from "../../App";

const useQuery = () => {
  return new URLSearchParams(window.location.search).get("message");
};

const CheckMail = () => {
  const query = useQuery();

  // const SearchContext = useContext(AppContext);

  return (
    <>
      <Navbar />
      {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
      {/* {SearchContext.openSearch ? <Search /> : null} */}
      <Search />

      <main className={styles["main-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles.heading} id="checkmail">
            {query}
          </div>
          <Link to="/" className={styles["button-container"]}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default CheckMail;
