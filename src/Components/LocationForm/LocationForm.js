import React, { useContext } from "react";
import NumericInput from "react-numeric-input";

// ? importing AppContext
import { AppContext } from "../../App";
// ? importing fetch request
import { createLocation } from "../../Services/createLocationData.js";

// ? Stylesheet
import styles from "../LocationForm/LocationForm.module.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";
import Map from "../Map/Map";
// import MapLocationForm from "../Map/MapLocationForm";

// ? All Images
import mainImage from "../LocationForm/static/pexels-uriel-mont-6271625.jpg";

// const green = document.querySelector(".numeric-input-btn-up");
// green.style.display = "none";

const LocationForm = () => {
  const SearchContext = useContext(AppContext);
  NumericInput.style.btn.backgroundColor = " rgba(242, 235, 220, 0.8)";
  NumericInput.style["btn:hover"].backgroundColor = "#d3d3d3";
  NumericInput.style["btn:active"].backgroundColor = "pink";

  // const MapContext = useContext(AppContext);

  // const openMap = () => {
  //   MapContext.setOpenMap(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    createLocation(SearchContext.locationData, SearchContext.setLocationData);

    event.target.reset();
  };

  // const handleSelect = async (value) => {
  //   const results = await SearchContext.geocodeByAddress(value);
  //   const latLng = await SearchContext.getLatLng(results[0]);

  //   // console.log("TESTHANDLE", latLng);
  //   // setSearchFieldQuery(value);
  //   SearchContext.setAddressForForm(value);
  //   SearchContext.setCoordinates(latLng);
  // };

  return (
    <>
      <Navbar />
      {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
      <Search />

      <div className={styles["main-container"]}>
        <div className={styles["content-container"]}>
          <img
            className={styles["title-image"]}
            src={mainImage}
            alt="Forest by mali maeder from Pexels
"
          />
          {/* // !! Title of location */}
          <div
            className={`${styles["heading-title"]} ${styles["main-heading"]}`}
          >
            Become a host
          </div>
          {/* // !! Address under title of location */}
          <div className={styles["subheading-title"]}>
            Let guests know what your property has to offer..
          </div>

          <hr className={styles.hr} />

          <div className={styles["form-container"]}>
            <form onSubmit={submitHandler}>
              <div className={styles.heading}>What kind of property is it?</div>

              <label className={styles.container}>
                Field / Meadow
                <input
                  className={styles.input}
                  type="checkbox"
                  name="field"
                  onChange={SearchContext.collectLocationData}
                  checked={SearchContext.locationData.propertyType.field}
                />
                <span className={styles.checkmark}></span>
              </label>

              <label className={styles.container}>
                Forest
                <input
                  className={styles.input}
                  type="checkbox"
                  name="forest"
                  onChange={SearchContext.collectLocationData}
                  checked={SearchContext.locationData.propertyType.forest}
                />
                <span className={styles.checkmark}></span>
              </label>

              <label className={styles.container}>
                Lake
                <input
                  className={styles.input}
                  type="checkbox"
                  name="lake"
                  onChange={SearchContext.collectLocationData}
                  checked={SearchContext.locationData.propertyType.lake}
                />
                <span className={styles.checkmark}></span>
              </label>

              <label className={styles.container}>
                River
                <input
                  className={styles.input}
                  type="checkbox"
                  name="river"
                  onChange={SearchContext.collectLocationData}
                  checked={SearchContext.locationData.propertyType.river}
                />
                <span className={styles.checkmark}></span>
              </label>

              <hr className={styles.hr} />

              <div className={styles.heading}>
                What kind of space will your guests have?
              </div>
              <label className={styles.container}>
                Entire property
                <input
                  className={styles.input}
                  type="radio"
                  // checked="checked"
                  name="spaceType"
                  value={
                    (SearchContext.loginData.spaceType = "An entire property")
                  }
                  onChange={SearchContext.collectLocationData}
                />
                <span className={styles["checkmark-radio"]}></span>
              </label>
              <label className={styles.container}>
                Shared property
                <input
                  className={styles.input}
                  type="radio"
                  name="spaceType"
                  value={
                    (SearchContext.loginData.spaceType = "A shared property")
                  }
                  onChange={SearchContext.collectLocationData}
                />
                <span className={styles["checkmark-radio"]}></span>
              </label>

              <hr className={styles.hr} />

              <div className={styles["column-container"]}>
                <div className={styles.heading}>
                  <label className={styles["heading-input"]}>
                    Where's your property located?
                  </label>
                  {/* 
                  <input
                    placeholder="Please insert a valid address: street, no. & city"
                    className={styles["input-field"]}
                    onEnter={SearchContext.setAddressForFormCollection}
                    // !! or onClick ?????
                    name="address"
                  /> */}

                  <SearchContext.PlacesAutocomplete
                    value={SearchContext.addressForForm}
                    onChange={SearchContext.setAddressForForm}
                    onSelect={SearchContext.handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div className={styles["search-input-div"]}>
                        <input
                          {...getInputProps({
                            placeholder:
                              "Please insert a valid address: street, no. & city",
                          })}
                          className={styles["input-field"]}
                          onKeyDown={SearchContext.setAddressForFormCollection}
                        ></input>
                        <div className={styles["search-output-container"]}>
                          {loading ? <div>...loading</div> : null}

                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#f2ebdc"
                                : "white",
                            };

                            return (
                              <div className={styles["suggestions-container"]}>
                                <div
                                  className={styles["search-suggestions"]}
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                >
                                  {suggestion.description}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </SearchContext.PlacesAutocomplete>
                </div>

                <hr className={styles.hr} />

                <div className={styles.heading}>
                  <label className={styles["heading-input"]}>
                    How many caravans can fit on your property?
                  </label>

                  <div className={styles["numeric-input-container"]}>
                    <NumericInput
                      min={1}
                      max={20}
                      defaultValue={1}
                      onChange={(val) => SearchContext.setCapacity(val)}
                    />
                  </div>
                  {/* <div className={styles.number}>
                                        <span className={styles.minus}>-</span>
                                        <input type="text" value="1" />
                                        <span className={styles.plus}>+</span>
                                    </div> */}

                  {/* <input className={styles["input-field"]} /> */}
                </div>
                <hr className={styles.hr} />

                <div className={styles.heading}>Amenitites</div>

                <label className={styles.container}>
                  Barrier-free
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="barrierFree"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.barrierFree}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Electricity
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="electricity"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.electricity}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Wifi
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="wifi"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.wlan}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Sauna
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="sauna"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.sauna}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Washing machine
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="washingMachine"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.amenities.washingMachine
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Playground
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="playground"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.playground}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Kiosk
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="kiosk"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.farmShop}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Fireplace
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="fireplace"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.fireplace}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Basin
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="basin"
                    onChange={SearchContext.collectLocationData}
                    checked={SearchContext.locationData.amenities.basin}
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Animals welcome
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="animalsWelcome"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.amenities.animalsWelcome
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Battery charging
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="batteryCharger"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.amenities.batteryCharger
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <hr className={styles.hr} />

                <div className={styles.heading}>Essentials</div>

                <label className={styles.container}>
                  Water
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="water"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.essentialAmenities.water
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Shower
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="shower"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.essentialAmenities.shower
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <label className={styles.container}>
                  Lavatory
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="lavatory"
                    onChange={SearchContext.collectLocationData}
                    checked={
                      SearchContext.locationData.essentialAmenities.lavatory
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>

              <hr className={styles.hr} />

              <div className={styles.heading}>
                <label className={styles["heading-input"]}>Title</label>

                <input
                  className={styles["input-field"]}
                  name="title"
                  onChange={SearchContext.collectLocationData}
                />
              </div>

              <hr className={styles.hr} />

              <div className={styles.heading}>
                <div className={styles["heading-input"]}>Description</div>

                <label className={styles["property-details"]}>
                  {/* Give guests a sense of what it's like to
                                    stay at your property, including why they'll
                                    love staying there. */}
                  Provide a general description of your property so guests to
                  know what to expect.
                </label>
                <textarea
                  type="text"
                  // resize="none"
                  className={`${styles["input-field"]} ${styles.textarea}`}
                  name="description"
                  onChange={SearchContext.collectLocationData}
                />
              </div>

              <hr className={styles.hr} />

              <div className={styles.heading}>
                {/* <div div className={styles["heading-input"]}>
                                    Your property
                                </div>
                                <label className={styles["property-details"]}>
                                    Provide a general description of what the
                                    property and rooms are like so guests know
                                    what to expect.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                /> */}
                <div div className={styles["heading-input"]}>
                  Surrounding Area
                </div>
                <label className={styles["property-details"]}>
                  {/* Let guests know how they can get around the
                                    neighbourhood. */}
                  Tell guests about your top local attractions!
                </label>
                <textarea
                  type="text"
                  // resize="none"
                  className={`${styles["input-field"]} ${styles.textarea}`}
                  name="regionalDescription"
                  onChange={SearchContext.collectLocationData}
                />

                <hr className={styles.hr} />

                <div div className={styles["heading-input"]}>
                  Property Rules
                </div>
                <label className={styles["property-details"]}>
                  Anything else that guests should know? E.g. smoking, quiet
                  hours etc.
                </label>
                <textarea
                  type="text"
                  // resize="none"
                  className={`${styles["input-field"]} ${styles.textarea}`}
                  name="houseRules"
                  onChange={SearchContext.collectLocationData}
                />

                {/* <label className={styles["property-details"]}>
                                    Include any special info you want potential
                                    guests to know before booking that isn't
                                    covered in other settings.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                /> */}
              </div>
              {/* <hr className={styles.hr} />
                            <div className={styles.heading}>
                                <div div className={styles["heading-input"]}>
                                    Your neighbourhood
                                </div>
                                <label className={styles["property-details"]}>
                                    Share some highlights about the
                                    neighbourhood.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />
                            </div> */}

              <hr className={styles.hr} />
              <div className={styles["radio-container"]}>
                <div className={styles.heading}>Cancellation Policy</div>
                <label className={styles.container}>
                  Loose - Up to 24h before check-in.
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="cancellation"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Loose cancellation policy: Until 24h before booking.")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>
                <label className={styles.container}>
                  Moderate - Up to 72h before check-in.
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="cancellation"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Moderate cancellation policy: Until 72h before booking.")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>
                <label className={styles.container}>
                  Strict - Two weeks before check-in.
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="cancellation"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Strict cancellation policy: Until 2weeks before booking.")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>
                <label className={styles.container}>
                  Super Strict - One month before check-in.
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="cancellation"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Very strict cancellation policy: Until 1 month before booking.")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>
              </div>

              <hr className={styles.hr} />
              <div className={styles["radio-container"]}>
                <div className={styles.heading}>Checkin / Checkout</div>
                <label className={styles.container}>
                  Checkin: 10am / checkout: 9am
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 10h / checkout: 9h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 11am / checkout: 10am
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 11h / checkout: 10h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 11am / checkout: 10am
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 11h / checkout: 10h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 12pm / checkout: 11am
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 12h / checkout: 11h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 1pm / checkout: 12pm
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 13h / checkout: 12h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 2pm / checkout: 1pm
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 14h / checkout: 13h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>

                <label className={styles.container}>
                  Checkin: 3pm / checkout: 2pm
                  <input
                    className={styles.input}
                    type="radio"
                    // checked="checked"
                    name="checkin"
                    value={
                      (SearchContext.loginData.cancellation =
                        "Checkin: 15h / checkout: 14h")
                    }
                    onChange={SearchContext.collectLocationData}
                  />
                  <span className={styles["checkmark-radio"]}></span>
                </label>
              </div>

              <hr className={styles.hr} />

              <div className={styles["column-container"]}>
                <div className={styles.heading}>
                  <label className={styles["heading-input"]}>
                    Price per night?
                  </label>

                  <div className={styles["numeric-input-container"]}>
                    <NumericInput
                      min={5}
                      max={500}
                      defaultValue={5}
                      step={5}
                      onChange={(val) => SearchContext.setPrice(val)}
                    />
                    <span className={styles["currency"]}>€</span>
                  </div>
                  {/* <label className={styles["currency"]}>€</label> */}

                  {/* <input
                                        placeholder="Price/night in $"
                                        className={styles["input-field"]}
                                        onChange={SearchContext.collectLocationData}
                                        name="price"
                                    /> */}
                </div>
              </div>

              <hr className={styles.hr} />
              {/* <hr className={styles.hr} /> */}

              <div className={styles.heading}>
                And finally, time for some images of your gorgeous property!
              </div>

              <div className={styles["upload-container"]}>
                <label className={styles["upload-sub-heading"]}>
                  Please select a file to upload.
                </label>

                <input
                  type="file"
                  name="locationImage"
                  onChange={(e) => SearchContext.setImage(e.target.files[0])}
                  class={styles["custom-file-input"]}
                />

                {/* <Button>
                  <i
                    className="fas fa-arrow-up"
                    style={{ paddingRight: ".5rem" }}
                  ></i>{" "}
                  Upload photos
                </Button> */}
              </div>
              <hr className={styles.hr} />

              <Button type="submit">Add property</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationForm;
