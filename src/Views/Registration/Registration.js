import React, { useState } from "react";

// ? Stylesheet
import styles from "../../Views/Registration/Registration.module.scss";

// ? All Component and View imports
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";

const Registration = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const openLoginModal = (event) => {
        event.preventDefault();
        setShowLoginModal(true);
    };

    const closeLoginModal = (event) => {
        event.preventDefault();
        setShowLoginModal(false);
    };

    const openSignupModal = (event) => {
        event.preventDefault();
        setShowSignupModal(true);
    };

    const closeSignupModal = (event) => {
        event.preventDefault();
        setShowSignupModal(false);
    };

    return (
        <>
            <div>
                <LogIn
                    onCloseLogin={closeLoginModal}
                    showLogin={showLoginModal}
                />
                <SignUp
                    onCloseSignup={closeSignupModal}
                    showSignup={showSignupModal}
                />

                <div onClick={openLoginModal}>OPEN LOG IN</div>
                <div onClick={openSignupModal}>OPEN SIGN UP</div>
            </div>
        </>
    );
};

export default Registration;
