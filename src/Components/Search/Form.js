import React, { Fragment } from "react";
// !!!
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";

import moment from "moment";

import styles from "../Search/search.module.scss";

// Libraries
import Expand from "react-expand-animated";
import Dropdown from "react-dropdown";

// ? Updated this style sheet!
// import "react-dropdown/style.css";
// todo to this.. (still need to refactor to SASS with correct units)
import "../Search/dropdown-styling.css";

const Form = (props) => {
  // State hooks
  //   const [open, setOpen] = useState(false);

  // todo Dropdown - Ready to take in data - see docs:
  // https://www.npmjs.com/package/react-dropdown
  const options = ["one", "two", "three"];
  // ? Default

  // !!!!
  let test = new Date();

  //   let test = moment("20211215");
  //   console.log(test);

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
                  options={options}
                  // onChange={this._onSelect} // todo: Look into docs
                />
              </div>

              <SingleDatePicker
                date={moment().subtract(6, "days")} // momentPropTypes.momentObj or null
                onDateChange={(date) => console.log("test")} // PropTypes.func.isRequired
                focused={false} // PropTypes.bool
                onFocusChange={({ focused }) => console.log("test2")} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
              />
            </div>
          </Expand>
        </form>
      </Fragment>
    </div>
  );
};

export default Form;
