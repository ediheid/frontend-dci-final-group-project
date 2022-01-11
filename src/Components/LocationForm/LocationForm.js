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
                                What kind of property will you host?
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
                                An entire property
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
                                A shared property
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
                                        Where's your property located?
                                    </label>

                                    <input
                                        placeholder="Search"
                                        className={styles["input-field"]}
                                    />
                                </div>
                                <Map />

                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    <label className={styles["heading-input"]}>
                                        How many caravans would you like to
                                        welcome?
                                    </label>

                                    <NumericInput min={0} max={10} value={1} />

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
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    bla
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <hr className={styles.hr} />

                                <div className={styles.heading}>
                                    What about these guestst favourites?
                                </div>

                                <label className={styles.container}>
                                    Water
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    Shower
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>

                                <label className={styles.container}>
                                    Toilette
                                    <input
                                        className={styles.input}
                                        type="checkbox"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                <label className={styles["heading-input"]}>
                                    Title
                                </label>

                                <input className={styles["input-field"]} />
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                <div className={styles["heading-input"]}>
                                    Description
                                </div>

                                <label className={styles["property-details"]}>
                                    Give guests a sense of what it's like to
                                    stay at your property, including why the'll
                                    love staying there.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />
                            </div>

                            <hr className={styles.hr} />

                            <div className={styles.heading}>
                                <div div className={styles["heading-input"]}>
                                    Your property
                                </div>
                                <label className={styles["property-details"]}>
                                    Provide a general description of what the
                                    property and rooms are like so guestts know
                                    what to expect.
                                </label>

                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />
                                <label className={styles["property-details"]}>
                                    Let guests know how they can get around the
                                    neighbourhood.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />

                                <label className={styles["property-details"]}>
                                    Tell guests if you'll be available to offer
                                    help throughout thei stay and how you'll
                                    keep in touch with them.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />

                                <label className={styles["property-details"]}>
                                    Include any special info you want potential
                                    guests to know before booking that isn't
                                    covered in other settings.
                                </label>
                                <textarea
                                    type="text"
                                    // resize="none"
                                    className={`${styles["input-field"]} ${styles.textarea}`}
                                />
                            </div>
                            <hr className={styles.hr} />

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
                            </div>

                            <hr className={styles.hr} />
                            {/* <hr className={styles.hr} /> */}

                            <div className={styles.heading}>
                                Next, let's add some photos of your property
                            </div>
                            <div>
                                <Button>
                                    <i class="fas fa-arrow-up"></i>Upload photos
                                </Button>
                            </div>
                            <hr className={styles.hr} />

                            <Button>Add property</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationForm;
