import React, { useContext } from "react";

// !! Form Context
import { FormContext } from "./Form";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsCheck } from "react-icons/bs";

import styles from "../Search/search.module.scss";

const Dropdown = ({ title, items = [], multiSelect = false }) => {
  const formContext = useContext(FormContext);

  // ! Ask Jamie - or look into library..
  // todo - dropdown should close when any other element in the form is clicked

  const handleOnClick = (item) => {
    if (!formContext.selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        formContext.setSelection([item]);
      } else if (multiSelect) {
        formContext.setSelection([...formContext.selection, item]);
      }
    } else {
      let selectionAfterRemoval = formContext.selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      formContext.setSelection([...selectionAfterRemoval]);
    }
  };

  //  Testing - saves selected items..
  //   console.log(formContext.selection);

  return (
    <div
      className={`${styles["dropdown-section-input"]} ${styles["dropdown-container"]}`}
    >
      <div
        // !! Maybe remove classname in future..
        className={`${styles["dropdown-section-input"]} ${styles["dropdown-header"]}`}
        tabIndex={0}
        role="button"
        onKeyPress={() => formContext.toggle(!formContext.openDropdown)}
        onClick={() => formContext.toggle(!formContext.openDropdown)}
      >
        {/* <div className={styles["dropdown-header-title"]}>
          <p className={styles["dropdown-header-title-bold"]}>{title}</p>
        </div> */}

        <div className={styles["dropdown-header-action"]}>
          <p>
            {formContext.openDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </p>
        </div>
      </div>
      {formContext.openDropdown && (
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
                    {formContext.isItemInSelection(item) && <BsCheck />}
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
