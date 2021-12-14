import React from "react";

import styles from "../Search/search.module.scss";

const Search = () => {
  return (
    <div className={styles["search-main-container"]}>
      <div>
        <form>
          <input></input>

          <div>
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
