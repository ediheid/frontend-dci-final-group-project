import React, { Component, Fragment, useState } from "react";

import styles from "../Search/search.module.scss";

// Libraries
import Expand from "react-expand-animated";
import Dropdown from "react-dropdown";

// ? Updated this style sheet!
// import "react-dropdown/style.css";
// todo to this.. (still need to refactor to SASS with correct units)
import "../Search/dropdown-styling.css";

const Search = () => {
  // State hooks
  const [open, setOpen] = useState(false);

  // Open Search function
  const openSearch = () => {
    // !! Question for team: Should we have it as a toggle OR have state as true so dropdown only closes on submit?
    setOpen(true);
    // ! OR
    // setOpen(!open);
  };

  // ! Dropdown - Ready to take in data
  const options = ["one", "two", "three"];
  // ? Default
  // const defaultOption = options[0]; // ? Maybe add a placeholder instead?

  return (
    <header
      className={`${styles["search-main-container"]} ${
        open ? styles["bgChange"] : styles["search-main-container"]
      }`}
    >
      {/* // todo Do I actually need this form container? */}
      <div className={styles["form-container"]}>
        {/* // todo Note: Start of Expand for dropdown search fields - expand sits WITHIN the form so everything can be submitted at once (onSubmit) */}
        <Fragment>
          {/* // ! Note: onSubmit placeholder for collection data in future */}
          {/* // todo - future function will reset form AND setOpen to FALSE */}
          <form onSubmit="" className={styles.form}>
            {/* Search bar - when clicked will open all search fields */}
            <input
              className={styles["search-input"]}
              placeholder="Dream about Schwarzwald?"
              onClick={openSearch}
            ></input>
            {/* This is the dropdown area with all other search fields in the form */}
            <Expand open={open}>
              <div className={styles["form-dropdown-container"]}>
                {/* Check in */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Check in</label>
                  <input
                    className={styles["dropdown-section-input"]}
                    placeholder="Add dates"
                  ></input>
                </div>

                {/* Check out */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Check out</label>
                  <input
                    className={styles["dropdown-section-input"]}
                    placeholder="Add dates"
                  ></input>
                </div>

                {/* Number of Campervans */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Campervans</label>
                  <input
                    className={styles["dropdown-section-input"]}
                    placeholder="e.g. 1"
                  ></input>
                </div>

                {/* Dropdown for amenities */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Extras</label>
                  <Dropdown
                    // ? Styled in "../Search/dropdown-styling.css" - from node modules default styles;
                    // className={styles["dropdown-style"]}
                    options={options}
                    // onChange={this._onSelect}
                    // value={defaultOption}
                    // placeholder="Looking for?"
                  />
                </div>
              </div>
            </Expand>
          </form>
        </Fragment>
      </div>
    </header>
  );
};

export default Search;
