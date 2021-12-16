import React, { useState } from "react";

// ? Stylesheet
import styles from "../Navbar/Navbar.module.scss";

// ? All Component and View imports
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/Signup";
// import LogIn2 from "../test/LogIn2/LogIn2";

const Navbar = () => {
    const [showLogIn, setShowLogIn] = useState(false);

    const openLogIn = (event) => {
        event.preventDefault();
        setShowLogIn(true);
    };

    const closeLogIn = (event) => {
        event.preventDefault();
        setShowLogIn(false);
        console.log("background was clicked close log in");
    };

    const [showSignUp, setShowSignUp] = useState(false);

    const openSignUp = (event) => {
        event.preventDefault();
        setShowSignUp(true);
    };

    const closeSignUp = (event) => {
        event.preventDefault();
        setShowSignUp(false);
        console.log("background was clicked close sign up");
    };

    // Login Modal is not visible
    if (!props.showLogin) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    // !! ASK GROUP, go to line
    const switchToSignup = (event) => {
        props.setShowLogIn(false);
        setShowSignUp(true);
    };

    return (
        <>
            <div className={styles["navbar-container"]}>
                <LogIn
                    onCloseLogin={closeLogIn}
                    showLogin={showLogIn}
                    // setShowLogIn={setShowLogIn}
                />
                <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} />
                <div className={styles["icon-container"]}>
                    <div className={styles.icon}>
                        <i class="fas fa-caravan"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="fas fa-search"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="far fa-heart"></i>
                    </div>

                    <div className={styles.icon}>
                        <i class="far fa-comment"></i>
                    </div>

                    <div className={styles.icon} onClick={openLogIn}>
                        <i class="far fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
