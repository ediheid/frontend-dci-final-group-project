import React, { useState, useContext } from "react";

import { AppContext } from "../../App";

import Form from "./Form";

import Map from "../Map/Map";

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

        {/* // !! Setup conditional rendering that map will only display onSubmit of form! */}
        <Map />
      </header>
    </>
  );
};

export default Search;
