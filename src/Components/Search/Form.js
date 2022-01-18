import React, { Fragment, useState, useContext, createContext } from "react";

import { AppContext } from "../../App";

//  Styles
import styles from "../Search/search.module.scss";
// Datepicker override styles
import "../Search/Datepicker-Styling/datepicker-override.scss";

// Components
import Map from "../Map/Map";
import Dropdown from "./Dropdown";

// Libraries
import Expand from "react-expand-animated";
import DatePicker from "react-datepicker";

// Icons
import { BsArrowsCollapse } from "react-icons/bs";

// !!! Form Context
export const FormContext = createContext();

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

  // ? State Hooks
  const [searchFieldQuery, setSearchFieldQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campervans, setCampervans] = useState("");
  // Amenity Selection
  const [selection, setSelection] = useState([]);
  // Amenities Dropdown state
  const [openDropdown, setOpenDropdown] = useState(false);

  // ? To pass down to Dropdown..
  const toggle = () => setOpenDropdown(!openDropdown);

  let isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }

    return false;
  };

  // ? ====

  // ? Handling and collecting user input/data

  const handleUserInput = (event) => {
    switch (event.target.name) {
      case "locationSearchName":
        setSearchFieldQuery(event.target.value);
        break;
      case "campervans":
        setCampervans(event.target.value);
        break;
      case "amenities":
        setSelection(event.target.value);
        break;

      default:
        break;
    }
  };

  // ! Collected data to send to backend
  let searchDataToSend = {
    locationSearchName: searchFieldQuery,
    checkInDate: startDate,
    checkOutDate: endDate,
    campervans: campervans,
    amenities: selection,
  };

  console.log(handleUserInput);
  console.log(searchDataToSend);

  // ? ====

  return (
    <FormContext.Provider
      value={{
        selection,
        setSelection,
        openDropdown,
        setOpenDropdown,
        toggle,
        // handleOnClick,
        isItemInSelection,
      }}
    >
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
              // ! Testing
              name="locationSearchName"
              onChange={handleUserInput}
            ></input>

            {/* // ? This is the dropdown area with all other search fields in the form */}
            <Expand open={SearchContext.openSearch}>
              <div
                className={`${styles["form-dropdown-container"]}
              ${SearchContext.openSearch
                    ? styles["form-dropdown-container"]
                    : styles["hidden-form-dropdown"]
                  }
<<<<<<< HEAD

=======
>>>>>>> main
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
                    // name="checkInDate"
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
                    name="campervans"
                    onChange={handleUserInput}
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
                  // ! How to bring these two together..?
                  onClick={MapContext.mapView}
                  onSubmit={console.log("CHECK:", searchDataToSend)}
                >
                  Search
                </button>
              </div>
            </Expand>
          </form>
        </Fragment>
      </div>
      {/* //  Conditional rendering - Map only opens on a successful submit via onSubmit in form */}
      {MapContext.openMap && <Map />}
    </FormContext.Provider>
  );
};

export default Form;