import React, { Fragment, useState } from "react";

// Styles
// ? Main Styles
import styles from "../Search/search.module.scss";
// ? Remove original once done
// (still need to refactor to SASS with correct units)
// import "react-datepicker/dist/react-datepicker.css";
// !!!!
import "../Search/Datepicker-Styling/datepicker-override.scss";
// ? Remove original once done
//  (still need to refactor to SASS with correct units)
// import "react-dropdown/style.css";
import "../Search/Dropdown-Styling/dropdown-styling.css";

// Libraries
import Expand from "react-expand-animated";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";

const Form = (props) => {
  // todo Dropdown - Ready to take in data - see docs:
  // https://www.npmjs.com/package/react-dropdown
  const options = ["one", "two", "three"];
  // ? Default

  // todo Calendar - work on functionality and data collection
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // !!!
  // let test = new Date();
  //   let test = moment("20211215");
  //   console.log(test);

  // !!! New test react-dates
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const [focusedInput, setFocusedInput] = useState(null);

  // const handleDatesChange = ({ startDate, endDate }) => {
  //   setStartDate(startDate);
  //   setEndDate(endDate);
  // };

  return (
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
            onClick={props.openSearch}
          ></input>
          {/* This is the dropdown area with all other search fields in the form */}
          <Expand open={props.open}>
            <div className={styles["form-dropdown-container"]}>
              {/* Check in */}
              <div className={styles["search-item"]}>
                <label className={styles["search-labels"]}>Check in</label>

                <DatePicker
                  className={styles["dropdown-section-input"]}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {/* // todo: Original to match */}
                {/* <input
                  className={styles["dropdown-section-input"]}
                  placeholder="Add dates"
                ></input> */}
              </div>

              {/* Check out */}
              <div className={styles["search-item"]}>
                <label className={styles["search-labels"]}>Check out</label>
                <DatePicker
                  className={styles["dropdown-section-input"]}
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
                {/* // todo: Original to match */}
                {/* <input
                  className={styles["dropdown-section-input"]}
                  placeholder="Add dates"
                ></input> */}
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
                  options={options}
                  // onChange={this._onSelect} // todo: Look into docs
                />
              </div>
            </div>
          </Expand>
        </form>
      </Fragment>
    </div>
  );
};

export default Form;
