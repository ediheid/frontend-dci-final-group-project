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

// ? All Images
import mainImage from "../LocationForm/static/pexels-uriel-mont-6271625.jpg";

// const green = document.querySelector(".numeric-input-btn-up");
// green.style.display = "none";

const LocationForm = () => {
    const SearchContext = useContext(AppContext);
    NumericInput.style.btn.backgroundColor = " rgba(242, 235, 220, 0.8)";
    NumericInput.style["btn:hover"].backgroundColor = "#d3d3d3";
    NumericInput.style["btn:active"].backgroundColor = "pink";

    // NumericInput.style.input.borderColor = "green";
    // NumericInput.style["input:focus"].backgroundColor = "d3d3d3";

    // const btnUp = document.querySelector("btnUp");
    // btnUp.style.backgroundColor = "pink";

    // NumericInput.style.input.color = "red";

    const submitHandler = event => {
        event.preventDefault();

        createLocation(SearchContext.locationData, SearchContext.setLocationData, event)
    };

    

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
                    <div className={styles["heading-title"]}>Become a host</div>
                    {/* // !! Address under title of location */}
                    <div className={styles["subheading-title"]}>
                        Let guests know what your property has to offer
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles["form-container"]}>
                        <form onSubmit={submitHandler}>
                            <div className={styles.heading}>
                                What kind of property will you host?
                            </div>

                            <label className={styles.container}>
                                on a Field / Meadow
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
                                at a Forest
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
                                at a Lake
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
                                at a River
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
                                An entire property
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="spaceType"
                                    value={SearchContext.loginData.spaceType = "An entire property"}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>
                            <label className={styles.container}>
                                A shared property
                                <input
                                    className={styles.input}
                                    type="radio"
                                    name="spaceType"
                                    value={SearchContext.loginData.spaceType = "A shared property"}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>

                            <hr className={styles.hr} />

                            <div className={styles["column-container"]}>
                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        Where's your property located?
                                    </label>

                                    <input
                                        placeholder="Search"
                                        className={styles["input-field"]}
                                        onChange={SearchContext.collectLocationData}
                                        name="address"
                                        value={SearchContext.collectLocationData.address}
                                    />
                                </div>
                                <Map />

                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        How many caravans would you like to
                                        welcome?
                                    </label>

                                    <NumericInput min={1} max={20} defaultValue={1} onChange={(val) => SearchContext.setCapacity(val)} />

                                    {/* <div className={styles.number}>
                                        <span className={styles.minus}>-</span>
                                        <input type="text" value="1" />
                                        <span className={styles.plus}>+</span>
                                    </div> */}

                                    {/* <input className={styles["input-field"]} /> */}
                                </div>
                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    Dou you have any standout amenities?
                                </div>

                                <label className={styles.container}>
                                    Animals welcome
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                        name="animalsWelcome"
                                        onChange={SearchContext.collectLocationData}
                                        checked={SearchContext.locationData.amenities.lavatory}
                                    

                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

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
                                        checked={SearchContext.locationData.amenities.washingMachine}
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
                                    Battery charging station
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                        name="batteryCharger"
                                        onChange={SearchContext.collectLocationData}
                                        checked={SearchContext.locationData.amenities.batteryCharger}
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

                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    What about these assentials?
                                </div>

                                <label className={styles.container}>
                                    Water
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                        name="water"
                                        onChange={SearchContext.collectLocationData}
                                        checked={SearchContext.locationData.essentialAmenities.water}
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
                                        checked={SearchContext.locationData.essentialAmenities.shower}
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
                                        checked={SearchContext.locationData.essentialAmenities.lavatory}
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                <label className={styles["heading-input"]}>
                                    Title
                                </label>

                                <input 
                                className={styles["input-field"]}
                                name="title" 
                                onChange={SearchContext.collectLocationData}
                                />
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                <div className={styles["heading-input"]}>
                                    Description
                                </div>

                                <label className={styles["property-details"]}>
                                    {/* Give guests a sense of what it's like to
                                    stay at your property, including why they'll
                                    love staying there. */}
                                    Provide a general description of what the
                                    property you are offering is like, so guests know
                                    what to expect.
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
                                    Regional Description
                                </div>
                                <label className={styles["property-details"]}>
                                    {/* Let guests know how they can get around the
                                    neighbourhood. */}
                                    Tell your guests something about the region, that your property is located. 
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
                                    House Rules
                                </div>
                                <label className={styles["property-details"]}>
                                    {/* Tell guests if you'll be available to offer
                                    help throughout thei stay and how you'll
                                    keep in touch with them. */}
                                    Tell your guests what rules are on your property. When are your checkin and checkout times? What is allowed, what not (e.g. smoking, pets, etc.)?
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

                            <div className={styles.heading}>
                                Please tell your guest, if and when in advance he could cancel his booking.
                            </div>
                            <label className={styles.container}>
                                Loose cancellation policy: Until 24h before booking.
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="cancellation"
                                    value={SearchContext.loginData.cancellation = "Loose cancellation policy: Until 24h before booking."}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>
                            <label className={styles.container}>
                                Moderate cancellation policy: Until 72h before booking.
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="cancellation"
                                    value={SearchContext.loginData.cancellation = "Moderate cancellation policy: Until 72h before booking."}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>
                            <label className={styles.container}>
                                Strict cancellation policy: Until 2weeks before booking.
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="cancellation"
                                    value={SearchContext.loginData.cancellation = "Strict cancellation policy: Until 2weeks before booking."}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>
                            <label className={styles.container}>
                                Very strict cancellation policy: Until 1 month before booking.
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="cancellation"
                                    value={SearchContext.loginData.cancellation = "Very strict cancellation policy: Until 1 month before booking."}
                                    onChange={SearchContext.collectLocationData}
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>

                            <hr className={styles.hr} />

                            <div className={styles["column-container"]}>
                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        What is the price for one property / night? 
                                    </label>

                                    <NumericInput min={5} max={500} defaultValue={5} step={5} onChange={(val) => SearchContext.setPrice(val)} />

                                    <label className={styles["heading-input"]}>
                                        € 
                                    </label>
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
                                Next, let's add some photos of your property
                            </div>
                            <div>
                                <Button>
                                    <i className="fas fa-arrow-up"></i>Upload photos
                                </Button>
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
