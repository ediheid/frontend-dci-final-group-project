import React, { useState } from "react";

// ? Stylesheet
import styles from "../Navbar/Navbar.module.scss";

// ? All Component and View imports
import Registration from "../../Views/Registration/Registration";

const Navbar = (props) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const openLoginModal = (event) => {
        event.preventDefault();
        setShowLoginModal(true);
    };

    const openLoginFromSignup = (event) => {
        setShowSignupModal(false);
        setShowLoginModal(true);
    };

    const closeLoginModal = (event) => {
        event.stopPropagation();

        event.preventDefault();
        setShowLoginModal(false);
    };

    const openSignupModal = (event) => {
        event.preventDefault();
        setShowSignupModal(true);
        setShowLoginModal(false);
    };

    const closeSignupModal = (event) => {
        event.stopPropagation();

        event.preventDefault();
        setShowSignupModal(false);
    };

    return (
        <>
            {/* // !! Conditional styling passed down from  Search.js Component - to change the colour of Navbar when search field is open - to match search full opacity background  */}
            <div
                className={`${styles["navbar-container"]} ${
                    props.open ? styles["bgChange"] : styles["navbar-container"]
                }`}
                //   className={styles["navbar-container"]}
            >
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
                <div className={styles["icon-container"]}>
                    <div className={styles.icon}>
                        <i class="fas fa-caravan"></i>
                    </div>

                    <div
                        className={styles.icon}
                        onClick={props.openSearch}
                        onClick={props.closeSearchButton}
                    >
                        <i class="fas fa-search"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="far fa-heart"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="far fa-comment"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="far fa-user-circle" onClick={openLoginModal}>
                            <Registration
                                showLogin={showLoginModal}
                                closeLogin={closeLoginModal}
                                showSignup={showSignupModal}
                                openSignup={openSignupModal}
                                closeSignup={closeSignupModal}
                                openLogin={openLoginFromSignup}
                            />
                        </i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
