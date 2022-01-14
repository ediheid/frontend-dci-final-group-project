import React, { useState } from "react";

import styles from "../Search/search.module.scss";

const Dropdown = ({ title, items, multiSelect = false }) => {
  // ? State Hooks
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpenDropdown(!openDropdown);

  const handleOnClick = (item) => {};

  return (
    <div
      className={`${styles["dropdown-section-input"]} ${styles["dropdown-container"]}`}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!openDropdown)}
        onClick={() => toggle(!openDropdown)}
      >
        <div className={styles["header-title"]}>
          <p className={styles["header-title-bold"]}>{title}</p>
        </div>

        <div className={styles["header-action"]}>
          {/* // todo: add icons arrow down and X */}
          <p>{openDropdown ? "Close" : "Open"}</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
