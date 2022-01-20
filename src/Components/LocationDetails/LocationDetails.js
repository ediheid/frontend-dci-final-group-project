import React, { useRef, useState, useEffect } from "react";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { useParams } from "react-router-dom";

// ? import fetch request to get Data for populatin the pages
import { getSpecificLocation } from "../../Services/getSpecificLocation.js";

// ? import Component for Aminities
import LocationDetailsIcons from "./LocationDetailsIcons.js";

// ? Stylesheet
import styles from "../LocationDetails/LocationDetails.module.scss";
import datePickerstyles from "../Search/search.module.scss";
import "../../Components/Search/Datepicker-Styling/datepicker-override.scss"

import "../Search/Datepicker-Styling/datepicker-override.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";
import Map from "../Map/Map";

// ? All Images
import florian from "../LocationDetails/static/pexels-anna-shvets-5262378.jpg";

const backendURL = process.env.REACT_APP_GET_BACKEND_URL;

const LocationDetails = () => {
  const [specificLocationData, setSpecificLocationData] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [visibleAvailability, setVisibleAvailability] = useState(false);
  const [visibleRules, setVisibleRules] = useState(false);
  const [visibleCancellation, setVisibleCancellation] = useState(false);
  const [openAmenitiesList, setOpenAmenitiesList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  // const btnRef = useRef("styles.amenitiesFlex");
  // const changeStyle = () => {
  //   btnRef.current.value = "styles.amenities";
  // }

  // console.log("REF", btnRef)

    const openCloseAvailability = () => {
        setVisibleAvailability(!visibleAvailability);
    };

    const openCloseRules = () => {
        setVisibleRules(!visibleRules);
    };

    const openCloseCancellation = () => {
        setVisibleCancellation(!visibleCancellation);
    };

  const cutText = text => {
    if (!readMore) {
      return text.slice(0,300)
    } else {
      return text
    }
  }

  const linkname = readMore ? "show less" : "show more"; 

  const params = useParams();
  const getParams = params.id;

  useEffect(() => {
    getSpecificLocation(getParams, setSpecificLocationData)
  }, [])
  
  console.log("SpecificLocationData", specificLocationData)
  
  const amenities = specificLocationData?.amenities?.map((a, i) => <div key={i}>{a}</div>)
  
  const cancellationText = () => {

    let text = "";

    switch(specificLocationData?.cancellation) {
      case "Loose cancellation policy: Until 24h before booking.":
        return text = "Your host will accept cancellations that are provided at least 24 hours before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted."
      case "Moderate cancellation policy: Until 72h before booking.":
        return text = "Your host will accept cancellations that are provided at least 3 days before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted."
      case "Strict cancellation policy: Until 2weeks before booking.":
        return text = "Your host will accept cancellations that are provided at least 2 weeks before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted."
      case "Very strict cancellation policy: Until 1 month before booking.": 
        return text = "Your host will accept cancellations that are provided at least 1 month before your booking starts. Cancellations are only accepted througout a regular accepted cancellation with this app. The Cancellation is just valid, when your host acceppted it and you are getting a confirmation. Cancellation via mail or phone calls will not be accepted."
    }
  };
  
  console.log("CANCELLATION", specificLocationData?.cancellation)


  

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
            alt="Forest by mali maeder from Pexels
"
          />
          {/* // !! Title of location */}
          <div className={styles["heading-title"]}>{specificLocationData.title}</div>
          {/* // !! Address under title of location */}
          <div className={styles["title-location"]}>{}</div>
          <hr className={styles.hr} />
          {/* // !! Catching info */}
          <div className={styles["catching-info"]}>
            This is a rare find. Lucky you!
          </div>
          <hr className={styles.hr} />
          <div className={styles["intro-container"]}>
            {/* // !! Title + host + intro */}
            <div className={styles["heading-title"]}>
              {/* {nameOfPlace}  */}
              <br /> hosted by {specificLocationData.host}
              {/* <div>Joined in December 2020</div>
                            <Button>Contact host</Button> */}
            </div>

            <div>
              <img
                className={styles["host-image"]}
                src={florian}
                alt="Blond man with yellow flowers"
              />
            </div>
          </div>
          {/* // !! Title + host + intro */}
          <div className={styles["intro-details"]}>
            {amenities}
          </div>
          <hr className={styles.hr} />
          {/* // !! Nice to have */}
          <div className={styles["bonus-container"]}>
            <div className={styles.icon}>
              <i className="fas fa-shuttle-van"></i>
            </div>
            <div className={styles["bonus-description"]}>
              
              <div>{specificLocationData.spaceType}</div>
              <div>{specificLocationData.spaceType === "An entire property" ? "You'll have the place to yourself." : "You'll share the place with other caravans."}</div>
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
              <div>Great communication experience</div>
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
              <a className="showmore" onClick={() => setReadMore(!readMore)}>{linkname} &#62;</a>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles["heading-section"]}>
            What this place offers
          </div>

          <LocationDetailsIcons specificLocationData={specificLocationData} openAmenitiesList={openAmenitiesList}/>
          
          {/* <Button onClick={() => setOpenAmenitiesList(!openAmenitiesList)}>Show all amenities</Button> */}

          <button className={styles.button} onClick={() => setOpenAmenitiesList(!openAmenitiesList)}>Show all amenities</button>
          
          <hr className={styles.hr} />
          <div className={styles["map-container"]}>
            <div className={styles["heading-section"]}>Where you'll be</div>
            <div className={styles.map}>
              <Map />
            </div>
            <div>
              <div className={styles["location-description"]}>
                <div>{specificLocationData.location.city}, {specificLocationData.location.region}, {specificLocationData.location.country}</div>
                <div>
                  {cutText(specificLocationData.regionalDescription)} 
                </div>
              </div>
              <div className={styles["map-description-link"]}>
                <a className="showmore" onClick={() => setReadMore(!readMore)}>{linkname} &#62;</a>
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
              <img
                className={styles["host-image"]}
                src={florian}
                alt="Blond man with yellow flowers"
              />
            </div>
          </div>
          <Button>Contact host</Button>
          <div className={styles["payment-info"]}>
            To protect your payment, never transfer money or communicate outside
            of the Freshbnb website or app.
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
                                <div className={styles.subinfo}>May 02 - May 09</div>
                                <div className={styles.details}>
                              
                                        <div className={styles.bookingInfoText}>
                                            <DatePicker minDate={new Date()}
                                                        placeholderText="Add dates"
                                                       dateFormat="dd/MM/yyyy"
                                                        className={datePickerstyles["dropdown-section-input"]}
                                                        selected={startDate}
                    
                                                              
                                                      onChange={(date) => setStartDate(date)}
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
                                <div className={styles.subinfo}>Check-in: 1pm</div>
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
                                <div className={styles.subinfo}>{specificLocationData.cancellation}</div>
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
                                <div>02 May - 09 May</div>
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
  return <div>Loading</div>
}
};

export default LocationDetails;
