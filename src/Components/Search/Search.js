import React, { useState, useContext } from "react";

import { AppContext } from "../../App";

import Navbar from "../Navbar/Navbar";
import Form from "./Form";

import styles from "../Search/search.module.scss";

// // !! createContext variable
// export const SearchContext = createContext();

const Search = () => {
  const SearchContext = useContext(AppContext);

  // // ? State hooks
  // // Passed down to Form.js - is used to to openSearch but also to change bg opacity
  // const [open, setOpen] = useState(false);

  // // ? Open Search function
  // // Passed down to Form.js
  // const openSearch = () => {
  //   setOpen(true);
  //   // or if we want to toggle between but the UX is not that great as when user clicks on a new search bar the entire form will disappear
  //   // setOpen(!open);
  // };

  // const closeSearchButton = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      {/* <SearchContext.Provider
        value={{
          openSearch: openSearch,
          openAllSearchFields: open,
          closeSearchButton: closeSearchButton,
        }}
      > */}
      {/* <Navbar
        open={open}
        openSearch={openSearch}
        closeSearchButton={closeSearchButton}
      /> */}
      <header
        className={`${styles["search-main-container"]} ${
          SearchContext.openSearch
            ? styles["bgChange"]
            : styles["search-main-container"]
        }`}
      >
        <Form
          open={SearchContext.openForm}
          openSearch={SearchContext.openSearch}
          closeSearchButton={SearchContext.closeSearchButton}
        />
      </header>
      {/* </SearchContext.Provider> */}
    </>
  );
};

export default Search;
