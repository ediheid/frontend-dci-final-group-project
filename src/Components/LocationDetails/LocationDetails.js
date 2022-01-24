import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";

// ? import fetch request to get Data for populatin the pages
import { getSpecificLocation } from "../../Services/getSpecificLocation.js";

// ? import Component for Aminities
import LocationDetailsIcons from "./LocationDetailsIcons.js";

// ? Stylesheet
import styles from "../LocationDetails/LocationDetails.module.scss";
import btnStyles from "../../UI/Button/Button.module.scss";
import "../../Components/Search/Datepicker-Styling/datepicker-override.scss";
import "../Search/Datepicker-Styling/datepicker-override.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";
import Map from "../Map/Map";

// ? All Images
import pic1 from "./static/pic-1.jpg";
import pic2 from "./static/pic-2.jpg";
import pic3 from "./static/pic-3.jpg";
import pic4 from "./static/pic-4.jpg";
import pic5 from "./static/pic-5.jpg";
import pic6 from "./static/pic-6.jpg";
import pic7 from "./static/pic-7.jpg";
import pic8 from "./static/pic-8.jpg";
// import pic9 from "./static/pic-1.jpg";
import pic10 from "./static/pic-10.jpg";
import pic11 from "./static/pic-11.jpg";
import pic12 from "./static/pic-12.jpg";
import pic13 from "./static/pic-13.jpg";
import pic14 from "./static/pic-14.jpg";
// import MapLocationForm from "../Map/MapLocationForm.js";

// ? take a random img for the host
const picArr = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic10, pic11, pic12, pic13, pic14];
const randomString = Math.floor(Math.random() * picArr.length);
let pic = picArr[randomString];

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;
const spinner = <FontAwesomeIcon icon={faSpinner} />;

const LocationDetails = () => {
  const [specificLocationData, setSpecificLocationData] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [visibleAvailability, setVisibleAvailability] = useState(false);
  const [visibleRules, setVisibleRules] = useState(false);
  const [visibleCancellation, setVisibleCancellation] = useState(false);
  const [openAmenitiesList, setOpenAmenitiesList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  // let picString = "";

  // const getRandomPic = () => {
    // const picArr = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg", "pic-6.jpg", "pic-7.jpg", "pic-8.jpg", "pic-10.jpg", "pic-11.jpg", "pic-12.jpg", "pic-13.jpg", "pic-14.jpg"];
    // const randomString = Math.floor(Math.random() * picArr.length);

    // let picString = picArr[randomString];
  // } 

  const openCloseAvailability = () => {
    setVisibleAvailability(!visibleAvailability);
  };

  const openCloseRules = () => {
    setVisibleRules(!visibleRules);
  };

  const openCloseCancellation = () => {
    setVisibleCancellation(!visibleCancellation);
  };

  const cutText = (text) => {
    if (!readMore) {
      return text.slice(0, 300);
    } else {
      return text;
    }
  };

  // ? Function to get inner width of window and to change openAmenities state
  const getInnerWith = () => {
    let size = window.innerWidth;
    if (size > 768) {
      setOpenAmenitiesList(true)
    } else {
      setOpenAmenitiesList(false)
    }
  }
  // ? Call Function on "onresize" eventhandler
  window.onresize = getInnerWith
  

  const linkname = readMore ? "show less" : "show more";

  const params = useParams();
  const getParams = params.id;

  useEffect(() => {
    getSpecificLocation(getParams, setSpecificLocationData);
    // getRandomPic();
  }, []);

  const renameAmenities = () => {
    let newArr = [];

    for (let amenity of specificLocationData.amenities) {
      switch (amenity) {
        case "animalsWelcome":
          newArr.push("Animals welcome");
          break;
        case "barrierFree":
          newArr.push("Animals welcome");
          break;
        case "electricity":
          newArr.push("Electricity");
          break;
        case "wifi":
          newArr.push("Wifi");
          break;
        case "sauna":
          newArr.push("Sauna");
          break;
        case "washingMachine":
          newArr.push("Washing machine");
          break;
        case "playground":
          newArr.push("Playground");
          break;
        case "kiosk":
          newArr.push("Kiosk");
          break;
        case "fireplace":
          newArr.push("Fireplace");
          break;
        case "batteryCharger":
          newArr.push("Battery Charger");
          break;
        case "basin":
          newArr.push("Basin");
          break;
        default:
          newArr.push("This place offers no extras.");
          break;
      }
    }
    return newArr.map((a, i) => <div key={i}>{a}</div>);
  };

  const catchingInfo = [
    "This is a rare find. Lucky you!",
    "is a Superhost.",
    "Users have rated this place as highly.",
    "This place is booked very frequently. Hurry up! ;-)",
  ];
  const random = Math.floor(Math.random() * catchingInfo.length);

  const getcatchingInfoContent = () => {
    let catchingInfoContent = "";

    if (catchingInfo[random] === "is a Superhost.") {
      return (catchingInfoContent = `${specificLocationData.host} is a Superhost.`);
    } else {
      return (catchingInfoContent = catchingInfo[random]);
    }
  };

  const cancellationText = () => {
    let text = "";

    switch (specificLocationData?.cancellation) {
      case "Very strict cancellation policy: Up to 24h before booking.":
        return (text =
          "Your host will accept cancellations that are provided at least 24 hours before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted.");
      case "Strict cancellation policy: Up to 72h before booking.":
        return (text =
          "Your host will accept cancellations that are provided at least 3 days before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted.");
      case "Moderate cancellation policy: Up to 2weeks before booking.":
        return (text =
          "Your host will accept cancellations that are provided at least 2 weeks before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted.");
      case "Loose cancellation policy: Up to 1 month before booking.":
        return (text =
          "Your host will accept cancellations that are provided at least 1 month before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted.");
    }
  };

  if (specificLocationData) {
    return (
      <>
        <Navbar />
        {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
        {/* {SearchContext.openSearch ? <Search /> : null} */}
        {/* // !! */}
        <Search />

        <div className={styles["main-container"]}>
          <div className={styles["content-container"]}>
            <img
              className={styles["title-image"]}
              src={`${backendURL}uploads/${specificLocationData.img}`}
              alt={specificLocationData.title}
            />
            {/* // !! Title of location */}
            <div className={styles["heading-title"]}>
              {specificLocationData.title}
            </div>
            {/* // !! Address under title of location */}
            <div className={styles["title-location"]}>{}</div>
            <hr className={styles.hr} />
            {/* // !! Catching info */}
            <div className={styles["catching-info"]}>
              {getcatchingInfoContent()}
            </div>
            <hr className={styles.hr} />
            <div className={styles["intro-container"]}>
              {/* // !! Title + host + intro */}
              <div className={styles["heading-title"]}>
                {/* {nameOfPlace}  */}
                <br />
                Hosted by {specificLocationData.host}.
                {/* <div>Joined in December 2020</div>
                            <Button>Contact host</Button> */}
              </div>

              <div>
                <img
                  className={styles["host-image"]}
                  src={pic}
                  alt="Portfolio picture of host"
                />
              </div>
            </div>
            {/* // !! Title + host + intro */}
            <div className={styles["intro-details"]}>{renameAmenities()}</div>
            <hr className={styles.hr} />
            {/* // !! Nice to have */}
            <div className={styles["bonus-container"]}>
              <div className={styles.icon}>
                <i className="fas fa-shuttle-van"></i>
              </div>
              <div className={styles["bonus-description"]}>
                <div>{specificLocationData.spaceType}</div>
                <div>
                  {specificLocationData.spaceType === "Entire property"
                    ? "You'll have the place to yourself."
                    : "You'll share the place with other caravans."}
                </div>
              </div>
            </div>
            <div className={styles["bonus-container"]}>
              <div className={styles.icon}>
                <i className="fas fa-door-closed"></i>
              </div>
              <div className={styles["bonus-description"]}>
                <div>Self check-in</div>
                <div>Check yourself in.</div>
              </div>
            </div>
            <div className={styles["bonus-container"]}>
              <div className={styles.icon}>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className={styles["bonus-description"]}>
                <div>Great communication</div>
                <div>The host answers in less than an hour.</div>
              </div>
            </div>
            <div className={styles["bonus-container"]}>
              <div className={styles.icon}>
                <i className="far fa-calendar-times"></i>
              </div>
              <div className={styles["bonus-description"]}>
                <div>{specificLocationData.cancellation}</div>
                <div>{""}</div>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles["detailed-description"]}>
              {cutText(specificLocationData.description)}
              <div className={styles["modal-description-link"]}>
                <button
                  className={btnStyles.button}
                  onClick={() => setReadMore(!readMore)}
                >
                  {linkname}
                </button>
                {/* <a className="showmore" onClick={() => setReadMore(!readMore)}>{linkname} &#62;</a> */}
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles["heading-section"]}>
              What this place offers
            </div>

            <LocationDetailsIcons
              specificLocationData={specificLocationData}
              openAmenitiesList={openAmenitiesList}
            />

            <button
              className={styles.button}
              onClick={() => setOpenAmenitiesList(!openAmenitiesList)}
            >
              Show all amenities
            </button>

            <hr className={styles.hr} />
            <div className={styles["map-container"]}>
              <div className={styles["heading-section"]}>Where you'll be</div>
              <div className={styles.map}>
                {/* <Map /> */}
                {/* <MapLocationForm /> */}
              </div>
              <div>
                <div className={styles["location-description"]}>
                  <div>
                    {specificLocationData.location.city},{" "}
                    {specificLocationData.location.region},{" "}
                    {specificLocationData.location.country}
                  </div>
                  <div>{cutText(specificLocationData.regionalDescription)}</div>
                </div>
                <div className={styles["map-description-link"]}>
                  <button
                    className={btnStyles.button}
                    onClick={() => setReadMore(!readMore)}
                  >
                    {linkname}
                  </button>
                  {/* <a className="showmore" onClick={() => setReadMore(!readMore)}>{linkname} &#62;</a> */}
                </div>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles["host-details-container"]}>
              {/* // !! Title + host + intro */}
              <div className={styles["heading-title"]}>
                Hosted by {specificLocationData.host}
                {/* <br /> */}
                <div className={styles["member-since"]}>
                  {`created on ${specificLocationData.createdAt}`}
                </div>
                <div>
                  <i className="fas fa-user-check"></i>
                  Identity verified
                </div>
                <div>
                  <i className="fas fa-clipboard-check"></i>12 reviews
                </div>
              </div>

              <div>
                {/* <img
                  className={styles["host-image"]}
                  src={florian}
                  alt="Blond man with yellow flowers"
                /> */}
              </div>
            </div>
            <Button>Contact host</Button>
            <div className={styles["payment-info"]}>
              To protect your identity and bank details, never transfer money or
              communicate outside of the Freshbnb website or app.
            </div>

            <hr className={styles.hr} />

            <div
              onClick={openCloseAvailability}
              className={styles["booking-info-container"]}
            >
              {/* // !! More info */}
              <div className={styles["heading-booking-info"]}>
                Availabilty
                {/* <br /> */}
                <div className={styles.subinfo}>
                  Check if this place is available for your next journey.
                </div>
                <div className={styles.details}>
                  <div className={styles["search-item"]}>
                    <label className={styles["search-labels"]}>Check in</label>

                    <DatePicker
                      minDate={new Date()}
                      placeholderText="Add dates"
                      dateFormat="dd/MM/yyyy"
                      className={styles["dropdown-section-input"]}
                      selected={startDate}
                      name="checkInDate"
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
                </div>
              </div>
            </div>

            <hr className={styles.hr} />

            <div
              onClick={openCloseRules}
              className={styles["booking-info-container"]}
            >
              {/* // !! More info */}
              <div className={styles["heading-booking-info"]}>
                Place rules
                <div className={styles.subinfo}>
                  {specificLocationData.checkin}
                </div>
                <div className={styles.details}>
                  {visibleRules && (
                    <div className={styles.bookingInfoText}>
                      {specificLocationData.houseRules}
                    </div>
                  )}
                </div>
              </div>

              <div>
                {visibleRules ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </div>
            </div>

            <hr className={styles.hr} />

            <div
              onClick={openCloseCancellation}
              className={styles["booking-info-container"]}
            >
              {/* // !! More info */}
              <div className={styles["heading-booking-info"]}>
                Cancellation policy
                {/* <br /> */}
                <div className={styles.subinfo}>
                  {specificLocationData.cancellation}
                </div>
                <div className={styles.details}>
                  {visibleCancellation && (
                    <div className={styles.bookingInfoText}>
                      {cancellationText()}
                    </div>
                  )}
                </div>
              </div>

              <div>
                {visibleCancellation ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles["price-container"]}>
              {/* // !! More info */}
              <div className={styles["price-info"]}>
                {specificLocationData.price} € /{" "}
                <span className={styles.span}>night</span>
                {/* <br /> */}
                <div>Book now</div>
              </div>

              <div>
                {/* TEST */}
                <Button>Reserve</Button>
              </div>
            </div>

            {/* <hr className={styles.hr} /> */}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.loadingModal}>
        <p>Loading ...</p>
        <div className={styles.spinner}>{spinner}</div>
      </div>
    );
  }
};

export default LocationDetails;
