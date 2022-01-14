import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsCheck } from "react-icons/bs";

import styles from "../Search/search.module.scss";

const Dropdown = ({ title, items = [], multiSelect = false }) => {
  // ? State Hooks
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpenDropdown(!openDropdown);

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  let isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }

    return false;
  };

  // ! Testing - saves selected items..
  console.log(selection);

  return (
    <div
      className={`${styles["dropdown-section-input"]} ${styles["dropdown-container"]}`}
    >
      <div
        // !! Maybe remove classname in future..
        className={`${styles["dropdown-section-input"]} ${styles["dropdown-header"]}`}
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!openDropdown)}
        onClick={() => toggle(!openDropdown)}
      >
        {/* <div className={styles["dropdown-header-title"]}>
          <p className={styles["dropdown-header-title-bold"]}>{title}</p>
        </div> */}

        <div className={styles["dropdown-header-action"]}>
          <p>{openDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
      </div>
      {openDropdown && (
        <div className={styles["outer-dropdown-list-container"]}>
          <ul className={styles["dropdown-list"]}>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  className={styles["dropdown-list-item"]}
                  type="button"
                  onClick={() => handleOnClick(item)}
                >
                  <span>{item.value}</span>
                  {/* // !!! */}
                  {/* // todo: add icons - selected can be a tick!? */}
                  <span className={styles["selected-icon"]}>
                    {isItemInSelection(item) && <BsCheck />}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
