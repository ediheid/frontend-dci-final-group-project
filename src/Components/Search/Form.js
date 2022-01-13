import React, { Fragment, useState, useContext } from "react";

import { AppContext } from "../../App";

//  Styles
import styles from "../Search/search.module.scss";
// Datepicker override styles
import "../Search/Datepicker-Styling/datepicker-override.scss";
// Dropdown override styles
import "../Search/Dropdown-Styling/dropdown-styling.css";

// Components
import Map from "../Map/Map";

// Libraries
import Expand from "react-expand-animated";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";

// Icons
import { BsArrowsCollapse } from "react-icons/bs";

// ? Form Component
const Form = (props) => {
  // ? Context Variables
  const SearchContext = useContext(AppContext);
  const MapContext = useContext(AppContext);

  // ! Debug why this useEffect stops the app from running unless the backend server is running
  // ? useEffect to pass in location Data from fetch request
  // useEffect(() => {
  //   locations(MapContext.setMapEventData);
  // }, []);
  // // console.log("!!!!!MAPEVENT", mapEventData);

  // todo Dropdown - Ready to take in data - see docs:
  // https://www.npmjs.com/package/react-dropdown
  const options = ["one", "two", "three"];
  // * Default

  // todo Calendar - work on functionality and data collection
  // See docs..
  // https://reactdatepicker.com/
  // !! Setting placeholder instead of today's date as holder
  // https://github.com/Hacker0x01/react-datepicker/issues/446
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // Testing and does set on select
  // console.log(startDate);
  // console.log(endDate);

  return (
    <>
      <div className={styles["form-container"]}>
        {/* //? Expand sits WITHIN the <form> so everything can be submitted at once (onSubmit) */}
        {/* // todo - when setting up data collection add error handling of not ALL fields are filled out */}

        <Fragment>
          <form
            className={styles.form}
            // ! Note: submit functionality now sits on the button and has fixed the dropdown bug
            // onSubmit={MapContext.mapView}
          >
            {/* // ? Search bar - when clicked will open all search fields */}
            <input
              className={styles["search-input"]}
              placeholder="Dream about Schwarzwald?"
              onClick={SearchContext.openForm}
            ></input>

            {/* // ? This is the dropdown area with all other search fields in the form */}
            <Expand open={SearchContext.openSearch}>
              <div className={styles["form-dropdown-container"]}>
                {/* // ? Check in */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Check in</label>

                  <DatePicker
                    minDate={new Date()}
                    placeholderText="Add dates"
                    dateFormat="dd/MM/yyyy"
                    className={styles["dropdown-section-input"]}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  {/* // todo: Original to match */}
                </div>

                {/* // ? Check out */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Check out</label>
                  <DatePicker
                    minDate={new Date()}
                    placeholderText="Add dates"
                    dateFormat="dd/MM/yyyy"
                    className={styles["dropdown-section-input"]}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>

                {/* // ? Number of Campervans */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Campervans</label>
                  <input
                    className={styles["dropdown-section-input"]}
                    placeholder="e.g. 1"
                    type="number"
                  ></input>
                </div>

                {/* // ? Dropdown for amenities */}
                <div className={styles["search-item"]}>
                  <label className={styles["search-labels"]}>Extras</label>
                  <Dropdown
                    // * Styled in "../Search/dropdown-styling.css" - from node modules default styles;
                    options={options}
                    // onChange={this._onSelect} // todo: Look into docs
                  />
                </div>

                {/* //? Close button  */}
                <button
                  className={styles["close-button"]}
                  onClick={SearchContext.toggleSearchDropdown}
                >
                  <BsArrowsCollapse />
                </button>

                {/* // ? Search/Submit button - will then render mapView on successful submit! */}
                <button
                  className={styles["form-search-button"]}
                  type="submit"
                  onClick={MapContext.mapView}
                >
                  Search
                </button>
              </div>
            </Expand>
          </form>
        </Fragment>
      </div>
      {/* // ! Conditional rendering - Map only opens on a successful submit via onSubmit in form */}
      {MapContext.openMap && <Map />}
    </>
  );
};

export default Form;
