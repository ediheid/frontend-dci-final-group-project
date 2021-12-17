import React, { useState, useRef, useEffect } from "react";

// ? Stylesheet
import styles from "../../Views/Registration/Registration.module.scss";

// ? All Component and View imports
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";

const Registration = (props) => {
    // const ref = useRef();

// useEffect(() => {
//     const checkIfClickedOutside = (e) => {
//         if (props.showLogin && ref.current && !ref.current.contains(e.target)) {
//             props.closeLogin()
//         }
//     }
// }, [props.showLogin])
    

    return (
        <>
            <div className={styles.module}>
                <LogIn
                    closeLogin={props.closeLogin}
                    showLogin={props.showLogin}
                    showSignup={props.showSignup}
                    openSignup={props.openSignup}
                    ref={props.ref}
                    closeModal={props.closeModal}

                />
                <SignUp
                    showSignup={props.showSignup}
                    closeSignup={props.closeSignup}
                    showLogin={props.showLogin}
                    openLogin={props.openLogin}
                    // onCloseSignup={closeSignupModal}
                    // showSignup={showSignupModal}
                />

                {/* <div onClick={openLoginModal}>OPEN LOG IN</div>
                <div onClick={openSignupModal}>OPEN SIGN UP</div> */}
            </div>
        </>
    );
};

export default Registration;
