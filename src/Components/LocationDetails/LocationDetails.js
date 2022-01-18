import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../App";

import { getSpecificLocation } from "../../Services/getSpecificLocation.js";

// ? Stylesheet
import styles from "../LocationDetails/LocationDetails.module.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";
import Map from "../Map/Map";

// ? All Images
import mainImage from "../LocationDetails/static/pexels-mali-maeder-109679.jpg";
import florian from "../LocationDetails/static/pexels-anna-shvets-5262378.jpg";

const LocationDetails = () => {
  const SearchContext = useContext(AppContext);
  const [specificLocationData, setSpecificLocationData] = useState({})

  const params = useParams();
  const getParams = params.id;


  console.log("Params", getParams)


  useEffect(() => {
    getSpecificLocation(getParams, setSpecificLocationData)
    console.log("hello !")
  }, [])

  
  console.log("SpecificLocationData", specificLocationData)
  
  const amenities = specificLocationData.amenities.map(a => <div>{a}</div>)
  // const spaceType = specificLocationData.spaceType.map(a => <div>{a}</div>)

  const title = "Lonely place in the middle of black forest";
  const address = "Feldberg, Baden-Würtemberg, Germany";
  const nameOfPlace = "Lonely place";
  const hostName = "Florian";

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
            src={mainImage}
            alt="Forest by mali maeder from Pexels
"
          />
          {/* // !! Title of location */}
          <div className={styles["heading-title"]}>{}</div>
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
              <br /> hosted by {hostName}
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
            {/* <div>1 caravan</div>
            <div>forrest</div>
            <div>no wifi</div>
            <div>no shower</div>
            <div>animals allowed</div> */}
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
              <div>Free cancellation for 48 hours</div>
              <div>{""}</div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles["detailed-description"]}>
            Lemon drops candy canes marshmallow cake apple pie. Toffee wafer
            bear claw jujubes liquorice chupa chups cotton candy gummies. Apple
            pie cookie jujubes jujubes pastry halvah. <br />
            <br /> Toffee candy canes chocolate cake sesame snaps marzipan oat
            cake bear claw chocolate. Jelly-o macaroon bear claw apple pie oat
            cake halvah. Chupa chups sesame snaps brownie marshmallow topping
            sesame snaps pie.{" "}
            <div className={styles["modal-description-link"]}>
              Show more &#62;
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles["heading-section"]}>
            What this place offers
          </div>
          <div className={styles["bonus-container"]}>
            <div className={styles.icon}>
              <i class="fas fa-tree"></i>{" "}
            </div>
            <div className={styles["bonus-description"]}>
              <div>Forest view</div>
              <div>{""}</div>
            </div>
          </div>
          <div className={styles["bonus-container"]}>
            <div className={styles.icon}>
              <i className="fas fa-box-open"></i>
            </div>
            <div className={styles["bonus-description"]}>
              <div>Welcome package</div>
              <div>{""}</div>
            </div>
          </div>
          <div className={styles["bonus-container"]}>
            <div className={styles.icon}>
              <i className="fas fa-campground"></i>{" "}
            </div>
            <div className={styles["bonus-description"]}>
              <div>Calmness</div>
              <div>{""}</div>
            </div>
          </div>
          <Button>Show all amenities</Button>
          <hr className={styles.hr} />
          <div className={styles["map-container"]}>
            <div className={styles["heading-section"]}>Where you'll be</div>
            <div className={styles.map}>
              <Map />
            </div>
            <div>
              <div className={styles["location-description"]}>
                <div>{address}</div>
                <div>
                  The black forest is Biscuit sesame snaps jelly fruitcake
                  dragée chocolate cake tiramisu topping. Carrot cake lollipop
                  shortbread apple pie fruitcake. Shortbread marshmallow
                  chocolate bar gummi bears carrot cake tootsie roll cookie.
                  Biscuit bear claw dessert chocolate cake liquorice.
                </div>
              </div>
              <div className={styles["map-description-link"]}>
                Show more &#62;
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles["host-details-container"]}>
            {/* // !! Title + host + intro */}
            <div className={styles["heading-title"]}>
              Hosted by {hostName}
              {/* <br /> */}
              <div className={styles["member-since"]}>
                Joined in December 2020
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

          <div className={styles["booking-info-container"]}>
            {/* // !! More info */}
            <div className={styles["heading-booking-info"]}>
              Availabilty
              {/* <br /> */}
              <div>May 02 - May 09</div>
            </div>

            <div>
              {/* TEST */}
              <i class="fas fa-greater-than"></i>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles["booking-info-container"]}>
            {/* // !! More info */}
            <div className={styles["heading-booking-info"]}>
              House rules
              {/* <br /> */}
              <div>Check-in: 1 pm</div>
            </div>

            <div>
              {/* TEST */}
              <i class="fas fa-greater-than"></i>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles["booking-info-container"]}>
            {/* // !! More info */}
            <div className={styles["heading-booking-info"]}>
              Cancellation policy
              {/* <br /> */}
              <div>Free cancellation for 48 hours</div>
            </div>

            <div>
              {/* TEST */}
              <i class="fas fa-greater-than"></i>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles["price-container"]}>
            {/* // !! More info */}
            <div className={styles["price-info"]}>
              €85 / <span className={styles.span}>night</span>
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
};

export default LocationDetails;
