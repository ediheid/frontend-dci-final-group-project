import React, { useState, useContext } from "react";

import { AppContext } from "../../App";

import Form from "./Form";

import styles from "../Search/search.module.scss";

const Search = () => {
  // ? From AppContext
  const SearchContext = useContext(AppContext);

  return (
    <>
      <header
        className={`${styles["search-main-container"]} ${
          SearchContext.openSearch
            ? styles["bgChange"]
            : styles["search-main-container"]
        }`}
      >
        <Form
          // open={SearchContext.openForm}
          openSearch={SearchContext.openSearch}
          closeSearchButton={SearchContext.closeSearchButton}
        />
      </header>
    </>
  );
};

export default Search;
