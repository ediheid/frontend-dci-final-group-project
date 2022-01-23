import React from "react";

// ? Stylesheet
import styles from "../LocationCards/LocationCards.module.scss";

// ? All Images -> import images from static
//import middleOfNowhere from "./static/pexels-arthouse-studio-4579021.jpg";
import BlackForestCamping from "./static/BlackForestCampingAlisehof.001.jpg";
import CampingMunstertal from "./static/CampingMünstertal.001.jpg";
import CampingSchonenbuchen from "./static/CampingSchönenbuchen.001.jpg";
import Daheim from "./static/Daheim.001.jpg";
import FerienparadiesSchwarzwälderHof from "./static/FerienparadiesSchwarzwälderHof.001.jpg";
import HöhencampingKönigskanzel from "./static/HöhencampingKönigskanzel.001.jpg";
import LynxCamp from "./static/LynxCamp.001.jpg";
import MarionandHanspeterWiesler from "./static/MarionandHanspeterWiesler.001.jpg";
import MeadowbedHilserhof from "./static/MeadowbedHilserhof.001.jpg";
import ResortKleinenzhof from "./static/ResortKleinenzhof.001.jpg";

// Private Locations
//* 10 Location Cards
const LocationCards = () => {
  return (
    <div className={styles["wrapper"]}>
      {/* <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img src={Daheim} className={styles["card__image"]} alt="" />
          <h2 className={styles["card__title"]}> DaHeim </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>An der Gutach 1, 78098 Triberg in the
                Black Forest, Germany
              </li>
              <li>
                <span>Price per night:</span> €30
              </li>
              <li>
                <span>Max Capacity:</span>4
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div> */}

      {/* <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={ResortKleinenzhof}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}> Resort Kleinenzhof </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Kleinenzhof 1, 75323 Bad Wildbad, Germany
              </li>
              <li>
                <span>Price per night:</span> €26
              </li>
              <li>
                <span>Max Capacity:</span>3
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div> */}

      {/* <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={FerienparadiesSchwarzwälderHof}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}>
            {" "}
            Ferienparadies Schwarzwälder Hof{" "}
          </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Tretenhofstrasse 76, 77960 Seelbach,
                Germany
              </li>
              <li>
                <span>Price per night:</span> €32
              </li>
              <li>
                <span>Max Capacity:</span>4
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div> */}

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={CampingMunstertal}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}> Camping Münstertal </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Dietzelbachstraße 6, 79244 Münstertal /
                Schwarzwald, Germany
              </li>
              <li>
                <span>Price per night:</span> €33
              </li>
              <li>
                <span>Max Capacity:</span>4
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img src={LynxCamp} className={styles["card__image"]} alt="" />
          <h2 className={styles["card__title"]}> Lynx Camp </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Friedhofstrasse 18, 78141 Schönwald im
                Schwarzwald, Germany
              </li>
              <li>
                <span>Price per night:</span>€35
              </li>
              <li>
                <span>Max Capacity:</span>3
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={MeadowbedHilserhof}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}> Meadow bed Hilserhof </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Obertal 5, 78098 Triberg in the Black
                Forest, Germany
              </li>
              <li>
                <span>Price per night:</span>€27
              </li>
              <li>
                <span>Max Capacity:</span>3
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={CampingSchonenbuchen}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}> Camping Schönenbuchen </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Friedrichstrasse 58, 79677 Schönau in the
                Black Forest, Germany
              </li>
              <li>
                <span>Price per night:</span>€32
              </li>
              <li>
                <span>Max Capacity:</span>4
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={HöhencampingKönigskanzel}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}> Höhencamping Königskanzel </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Freizeitweg 13, 72280 Dornstetten, Germany
              </li>
              <li>
                <span>Price per night:</span>€25
              </li>
              <li>
                <span>Max Capacity:</span>2
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={BlackForestCamping}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}>
            {" "}
            Black Forest Camping Alisehof{" "}
          </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Rippoldsauer Str. 2-8, 77776 Bad
                Rippoldsau-Schapbach,
              </li>
              <li>
                <span>Price per night:</span>€38
              </li>
              <li>
                <span>Max Capacity:</span>3
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>

      <div className={styles["card"]}>
        <div className={styles["card__body"]}>
          <img
            src={MarionandHanspeterWiesler}
            className={styles["card__image"]}
            alt=""
          />
          <h2 className={styles["card__title"]}>
            {" "}
            Marion and Hanspeter Wiesler{" "}
          </h2>
          <p className={styles["card__description"]}>
            <ul>
              <li>
                <span>Address: </span>Weilertalstrasse 73, 79410 Badenweiler,
                Germany
              </li>
              <li>
                <span>Price per night:</span>€28
              </li>
              <li>
                <span>Max Capacity:</span>2
              </li>
            </ul>
          </p>
        </div>
        <button className={styles["card__btn"]}>View Location</button>
      </div>
    </div>
  );
};

export default LocationCards;
