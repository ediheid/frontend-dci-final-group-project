import React, { useContext } from "react";
import { AppContext } from "../../App.js";

// ? Stylesheet
import styles from "../../Views/Registration/Registration.module.scss";

// ? All Component and View imports
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";
import Logout from "../../Components/Logout/Logout.js";

const Registration = (props) => {
    const RegistrationContext = useContext(AppContext);

    console.log("Registration", RegistrationContext)

    const content = (RegistrationContext.cookies.UserCookie === "null") ?
    (
        <div className={styles.module}>
                <LogIn
                    closeLogin={props.closeLogin}
                    showLogin={props.showLogin}
                    showSignup={props.showSignup}
                    openSignup={props.openSignup}
                    closeModal={props.closeModal}
                    loginFetch={props.loginFetch}
                    collectLoginData={props.collectLoginData}
                    loginData={props.loginData}
                />
                <SignUp
                    showSignup={props.showSignup}
                    closeSignup={props.closeSignup}
                    showLogin={props.showLogin}
                    openLogin={props.openLogin}
                    collectSignupData={props.collectSignupData}
                    signupFetch={props.signupFetch}
                    signupData={props.signupData}
                    
                    // onCloseSignup={closeSignupModal}
                    // showSignup={showSignupModal}
                />

                {/* <div onClick={openLoginModal}>OPEN LOG IN</div>
                <div onClick={openSignupModal}>OPEN SIGN UP</div> */}
            </div>
    )
    :
    (
        <div className={styles.module}>
                <Logout
                    closeLogin={props.closeLogin}
                    showLogin={props.showLogin}
                    closeModal={props.closeModal}
                />
            </div>
    )   

    return (
        <>
            {content}
        </>
    );
};

export default Registration;
