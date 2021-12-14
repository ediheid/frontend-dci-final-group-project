import React from "react";

import styles from "../Search/search.module.scss";

const Search = () => {
  return (
    <div className={styles["search-main-container"]}>
      {/* // ! Do I need form container? */}
      <div className={styles["form-container"]}>
        <form className={styles.form}>
          <input className={styles["search-input"]}></input>

          <div className={styles["form-dropdown-container"]}>
            {/* Drop down of hidden extra input on form */}
            {/* Will it be on enter? */}
            {/* Manually code it instead of bringing in library */}
            {/* // !!! Collapsible div will sit here and open on search - */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
