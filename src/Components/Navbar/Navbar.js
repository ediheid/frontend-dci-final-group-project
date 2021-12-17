import React, { useState } from "react";

// ? Stylesheet
import styles from "../Navbar/navbar.module.scss";

// ? All Component and View imports
import LogIn from "../../Components/LogIn/LogIn";
// import SignUp from "../../Components/SignUp/Signup";

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

    return (
        <>
            <div className={styles["navbar-container"]}>
                <LogIn
                    onCloseLogin={closeLogIn}
                    showLogin={showLogIn}
                    // setShowLogIn={setShowLogIn}
                />
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
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
