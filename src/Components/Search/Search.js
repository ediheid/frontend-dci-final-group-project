import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Form from "./Form";

import styles from "../Search/search.module.scss";

const Search = () => {
  // ? State hooks
  // Passed down to Form.js - is used to to openSearch but also to change bg opacity
  const [open, setOpen] = useState(false);

  // ? Open Search function
  // Passed down to Form.js
  const openSearch = () => {
    setOpen(true);
    // or if we want to toggle between but the UX is not that great as when user clicks on a new search bar the entire form will disappear
    // setOpen(!open);
  };

  const closeSearchButton = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar open={open} openSearch={openSearch} />
      <header
        className={`${styles["search-main-container"]} ${
          open ? styles["bgChange"] : styles["search-main-container"]
        }`}
      >
        <Form
          open={open}
          openSearch={openSearch}
          closeSearchButton={closeSearchButton}
        />
      </header>
    </>
  );
};

export default Search;
