import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// todo:
// import onClickOutside from "react-onclickoutside";

import styles from "../Search/search.module.scss";

const Dropdown = ({ title, items = [], multiSelect = false }) => {
  // ? State Hooks
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpenDropdown(!openDropdown);

  // todo:
  //   Dropdown.handleClickOutside = () => setOpenDropdown(false);

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
        <div className={styles["dropdown-header-title"]}>
          <p className={styles["dropdown-header-title-bold"]}>{title}</p>
        </div>

        <div className={styles["dropdown-header-action"]}>
          <p>{openDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
      </div>
      {openDropdown && (
        <ul className={styles["dropdown-list"]}>
          {items.map((item) => (
            <li className={styles["dropdown-list-item"]} key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                {/* // !!! */}
                {/* // todo: add icons - selected can be a tick!? */}
                <span>{isItemInSelection(item) && "selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// todo:
// const clickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };
// todo:
// export default onClickOutside(Dropdown, clickOutsideConfig);

export default Dropdown;
