import React, { useContext } from "react";
import NumericInput from "react-numeric-input";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LocationForm/LocationForm.module.scss";

// ? All Component and View imports
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Button from "../../UI/Button/Button";
import Map from "../Map/Map";

// ? All Images
import mainImage from "../LocationForm/static/pexels-uriel-mont-6271625.jpg";

const green = document.querySelector(".numeric-input-btn-up");
green.style.display = "none";

const LocationForm = () => {
    const SearchContext = useContext(AppContext);
    NumericInput.style.input.color = "red";
    // NumericInput.style["numeric-input-btn-up"] = "green";

    const submitHandler = (event) => {
        event.preventDefault();
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
                                What kind of place will you host?
                            </div>

                            <label className={styles.container}>
                                Field
                                <input
                                    className={styles.input}
                                    type="checkbox"
                                />
                                <span className={styles.checkmark}></span>
                            </label>

                            <label className={styles.container}>
                                Forest
                                <input
                                    className={styles.input}
                                    type="checkbox"
                                />
                                <span className={styles.checkmark}></span>
                            </label>

                            <label className={styles.container}>
                                Lake
                                <input
                                    className={styles.input}
                                    type="checkbox"
                                />
                                <span className={styles.checkmark}></span>
                            </label>

                            <label className={styles.container}>
                                River
                                <input
                                    className={styles.input}
                                    type="checkbox"
                                />
                                <span className={styles.checkmark}></span>
                            </label>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                What kind of space will your guests have?
                            </div>
                            <label className={styles.container}>
                                An entire place
                                <input
                                    className={styles.input}
                                    type="radio"
                                    // checked="checked"
                                    name="radio"
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>
                            <label className={styles.container}>
                                A shared place
                                <input
                                    className={styles.input}
                                    type="radio"
                                    name="radio"
                                />
                                <span
                                    className={styles["checkmark-radio"]}
                                ></span>
                            </label>

                            <hr className={styles.hr} />

                            <div className={styles["column-container"]}>
                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        Where's your place located?
                                    </label>

                                    <input className={styles["input-field"]} />
                                </div>
                                <Map />

                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        How many caravans would you like to
                                        welcome?
                                    </label>

                                    <NumericInput
                                        // style={{
                                        //     input: {
                                        //         color: "red",
                                        //     },
                                        // }}
                                        min={0}
                                        max={10}
                                        value={1}
                                    />

                                    {/* <div className={styles.number}>
                                        <span className={styles.minus}>-</span>
                                        <input type="text" value="1" />
                                        <span className={styles.plus}>+</span>
                                    </div> */}

                                    {/* <input className={styles["input-field"]} /> */}
                                </div>
                            </div>
                            {/* 
                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        Tell us something about the surrounding
                                        area
                                    </label>

                                    <input className={styles["input-field"]} />
                                </div>
                            </div>

                            <hr className={styles.hr} /> */}

                            {/*


                            <div className={styles.test}>
                                <label className={styles["heading-input"]}>
                                    Property rules
                                </label>

                                <input className={styles.input} />
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.test}>
                                <label className={styles["heading-input"]}>
                                    Cancellation Policy
                                </label>

                                <input className={styles.input} />
                            </div>

                            <hr className={styles.hr} /> */}

                            {/* <input
                                className={styles["input-signup"]}
                                type="text"
                                placeholder="Name of your property"
                                name="propertyName"
                                // onChange={signUpContext.collectSignupData}
                                // value={signUpContext.signupData.firstname}
                            />
                            <input
                                className={styles["input-signup"]}
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                // onChange={signUpContext.collectSignupData}
                                // value={signUpContext.signupData.lastname}
                            />
                            <input
                                className={styles["input-signup"]}
                                type="text"
                                placeholder="E-Mail"
                                name="email"
                                // onChange={signUpContext.collectSignupData}
                                // value={signUpContext.signupData.email}
                            />

                            <input
                                className={styles["input-signup"]}
                                type="password"
                                placeholder="Password"
                                name="password"
                                // onChange={signUpContext.collectSignupData}
                                // value={signUpContext.signupData.password}
                            />

                            <input
                                className={styles["input-signup"]}
                                type="password"
                                placeholder="Repeat Password"
                                name="confirmedPassword"
                                // onChange={signUpContext.collectSignupData}
                                // value={
                                //     signUpContext.signupData
                                //         .confirmedPassword
                                // }
                            />

                            {/* <input
                                className={styles["input-signup-button"]}
                                type="submit"
                                value="Signup"
                            /> */}

                            {/* <Button>Add property</Button> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationForm;
