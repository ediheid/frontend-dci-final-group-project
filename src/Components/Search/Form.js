import React, { Fragment, useState, useContext } from "react";

import { AppContext } from "../../App";

//  Styles
import styles from "../Search/search.module.scss";
// Datepicker override styles
import "../Search/Datepicker-Styling/datepicker-override.scss";
// Dropdown override styles
// import "../Search/Dropdown-Styling/dropdown-styling.css";

// Components
import Map from "../Map/Map";

import Dropdown from "./Dropdown";

// Libraries
import Expand from "react-expand-animated";
// import Dropdown from "react-dropdown";

import DatePicker from "react-datepicker";

// Icons
import { BsArrowsCollapse } from "react-icons/bs";

// Amenity items..
const items = [
  {
    id: 1,
    value: "Water",
  },
  {
    id: 2,
    value: "Shower",
  },
  {
    id: 3,
    value: "Lavatory",
  },
  {
    id: 4,
    value: "Barrier-free",
  },

  {
    id: 5,
    value: "Electricity",
  },

  {
    id: 6,
    value: "WiFi",
  },

  {
    id: 7,
    value: "Basin",
  },

  {
    id: 8,
    value: "Sauna",
  },

  {
    id: 9,
    value: "Washing Machine",
  },
  {
    id: 10,
    value: "Fireplace",
  },
  {
    id: 11,
    value: "Playground",
  },
  {
    id: 12,
    value: "Kiosk Nearby",
  },
  {
    id: 13,
    value: "Battery charging",
  },

  {
    id: 14,
    value: "Animals Welcome",
  },
];

// ? Form Component
const Form = (props) => {
  // ? Context Variables
  const SearchContext = useContext(AppContext);
  const MapContext = useContext(AppContext);

<<<<<<< HEAD
  // ! Debug why this useEffect stops the app from running unless the backend server is running
  // ? useEffect to pass in location Data from fetch request
  // useEffect(() => {
  //   locations(MapContext.setMapEventData);
  // }, []);
  // // console.log("!!!!!MAPEVENT", mapEventData);

  // todo Dropdown - Ready to take in data - see docs:
  // https://www.npmjs.com/package/react-dropdown
  const options = [
    "Barrier-free",
    "Lavatory",
    "Electricity supply",
    "Water supply",
    "Showers",
    "Animals welcome",
    "Grey water disposal",
    "Daily waste disposal",
    "Basin",
    "WiFi",
    "Sauna",
    "Whirlpool",
    "Swimming pool",
    "Washing machine",
    "On a private path",
    "In a courtyard",
    "By a body of water",
    "By a pond",
    "By a river",
    "On a field",
    "In the woods",
    "Outdoor seating",
    "Fireplace",
    "Garden",
    "Playground",
    "Basic supplies available to purchase",
    "Battery charging station",
  ];
  // * Default

=======
>>>>>>> 19089366ba2426b5c9bc46a60deb9e992b7a731c
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
              onClick={SearchContext.openForm}
              className={styles["search-input"]}
              placeholder="Dream about Schwarzwald?"
            ></input>

            {/* // ? This is the dropdown area with all other search fields in the form */}
            <Expand open={SearchContext.openSearch}>
              {/* // !!! Testing display none and padding so height is only 10vh */}
              <div
                className={`${styles["form-dropdown-container"]}
              ${
                SearchContext.openSearch
                  ? styles["form-dropdown-container"]
                  : styles["hidden-form-dropdown"]
              }

              `}
              >
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
                  <label className={styles["search-labels"]}>Amenities</label>
                  <Dropdown
                    // title="Select.."
                    // placeholder="Select"
                    items={items}
                    multiSelect
                  ></Dropdown>
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
