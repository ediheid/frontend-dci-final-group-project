import React, { Component, Fragment, useState } from "react";

import styles from "../Search/search.module.scss";

// Libraries
import Expand from "react-expand-animated";

const Search = () => {
  // Set state
  const [open, setOpen] = useState(false);

  // toggle
  const openSearch = () => {
    // ! Question for team: Should we have it as a toggle OR have state as true so dropdown only closes on submit?
    setOpen(!open);
  };

  return (
    <header className={styles["search-main-container"]}>
      {/* // todo Do I actually need this form container? */}
      <div className={styles["form-container"]}>
        {/* // ! Note: Start of Expand for dropdown search fields - expand sits WITHIN the form so everything can be submitted at once (onSubmit) */}
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
                    className={styles["dropdown-input"]}
                    placeholder="Add dates"
                  ></input>
                </div>

                {/* Check out */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Check out</label>
                  <input
                    className={styles["dropdown-input"]}
                    placeholder="Add dates"
                  ></input>
                </div>

                {/* Number of Campervans */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Campervans</label>
                  <input
                    className={styles["dropdown-input"]}
                    placeholder="e.g. 1"
                  ></input>
                </div>

                {/* Dropdown for amenities will go here.. */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Amenities</label>
                  <input className={styles["dropdown-input"]}></input>
                </div>
                {/* Drop down of hidden extra input on form */}
                {/* Will it be on enter? */}
                {/* Manually code it instead of bringing in library */}
                {/* // !!! Collapsible div will sit here and open on search - */}
              </div>
            </Expand>
          </form>
        </Fragment>
      </div>
    </header>
  );
};

export default Search;
