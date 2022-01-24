import React from "react";

import styles from "./LocationDetailsIcons.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faSink } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faFaucet } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";

const accessible = <FontAwesomeIcon icon={faWheelchair} />;
const electricity = <FontAwesomeIcon icon={faBolt} />;
const wifi = <FontAwesomeIcon icon={faWifi} />;
const sauna = <FontAwesomeIcon icon={faHotTub} />;
const tShirt = <FontAwesomeIcon icon={faTshirt} />;
const child = <FontAwesomeIcon icon={faChild} />;
const kiosk = <FontAwesomeIcon icon={faUtensils} />;
const fire = <FontAwesomeIcon icon={faFire} />;
const basin = <FontAwesomeIcon icon={faSink} />;
const dog = <FontAwesomeIcon icon={faDog} />;
const charger = <FontAwesomeIcon icon={faChargingStation} />;
const empty = <FontAwesomeIcon icon={faTimesCircle} />;

const forest = <FontAwesomeIcon icon={faTree} />;
const meadow = <FontAwesomeIcon icon={faCampground} />;
const river = <FontAwesomeIcon icon={faWater} />;
const lake = <FontAwesomeIcon icon={faFish} />;

const water = <FontAwesomeIcon icon={faFaucet} />;
const shower = <FontAwesomeIcon icon={faShower} />;
const toilet = <FontAwesomeIcon icon={faToilet} />;

const LocationDetailsIcons = (props) => {
  // console.log("props", props.openAmenitiesList)
  return (
    <div
      style={{ maxHeight: props.openAmenitiesList ? "fit-content" : 180 }}
      className={styles.amenitiesFlex}
    >
      {props.specificLocationData.amenities.includes("barrierFree") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{accessible}</div>
          <div className={styles["bonus-description"]}>
            <div>Barrier-free</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("electricity") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{electricity}</div>
          <div className={styles["bonus-description"]}>
            <div>Electricity</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("animalsWelcome") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{dog}</div>
          <div className={styles["bonus-description"]}>
            <div>Animals welcome</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("wifi") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{wifi}</div>
          <div className={styles["bonus-description"]}>
            <div>Wifi</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("sauna") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{sauna}</div>
          <div className={styles["bonus-description"]}>
            <div>Sauna</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("washingMachine") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{tShirt}</div>
          <div className={styles["bonus-description"]}>
            <div>Washing machine</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("playground") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{child}</div>
          <div className={styles["bonus-description"]}>
            <div>Playground</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("kiosk") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{kiosk}</div>
          <div className={styles["bonus-description"]}>
            <div>Kiosk</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("fireplace") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{fire}</div>
          <div className={styles["bonus-description"]}>
            <div>Fireplace</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("batteryCharger") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{charger}</div>
          <div className={styles["bonus-description"]}>
            <div>Battery Charger</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.amenities.includes("basin") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{basin}</div>
          <div className={styles["bonus-description"]}>
            <div>Basin</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.propertyType.includes("field") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{meadow}</div>
          <div className={styles["bonus-description"]}>
            <div>Field / Meadow</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.propertyType.includes("forest") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{forest}</div>
          <div className={styles["bonus-description"]}>
            <div>Forest view</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.propertyType.includes("lake") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{lake}</div>
          <div className={styles["bonus-description"]}>
            <div>Lake / Sea nearby</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.propertyType.includes("river") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{river}</div>
          <div className={styles["bonus-description"]}>
            <div>River nearby</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.essentialAmenities.includes("water") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{water}</div>
          <div className={styles["bonus-description"]}>
            <div>Water access</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.essentialAmenities.includes("lavatory") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{toilet}</div>
          <div className={styles["bonus-description"]}>
            <div>Lavatory on property</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.essentialAmenities.includes("shower") && (
        <div className={styles["bonus-container"]}>
          <div className={styles.icon}>{shower}</div>
          <div className={styles["bonus-description"]}>
            <div>Shower on property</div>
            <div>{""}</div>
          </div>
        </div>
      )}

      {props.specificLocationData.essentialAmenities.length === 0 &&
        props.specificLocationData.amenities.length === 0 &&
        props.specificLocationData.propertyType.length === 0 && (
          <div className={styles["bonus-container"]}>
            <div className={styles.icon}>{empty}</div>
            <div className={styles["bonus-description"]}>
              <div>
                We are sorry, there were no Infos or anmenities provided by the
                user.
              </div>
              <div>{""}</div>
            </div>
          </div>
        )}
    </div>
  );
};

export default LocationDetailsIcons;
