import React, { useContext } from "react";
import { useRef, useState } from "react";


// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LogIn/LogIn.module.scss";

// importing fetch request from services
import { login } from "../../Services/getLoggedUser.js";

const LogIn = (props) => {

    //* Email
    const emailInputRef = useRef();
    const [enteredEmail, setEnteredEmail] = useState('');
    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
    const [errorEmailMessage, setErrorEmailMessage] = useState('');

    //* Password
    const passwordInputRef = useRef();
    const [enteredPassword, setEnteredPassword] = useState('');
    const passwordInputChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }
    const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

    // !!! This is where we define Context from App to use in current Component
    const loginContext = useContext(AppContext);
    // Login Modal is not visible
    if (!props.showLogin) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(loginContext.loginData, loginContext.setLoginData);

        //check normalizeEmail -> expressvalidator
        if (enteredEmail.trim() === '' || enteredEmail.length >= 50 || enteredEmail.normalizeEmail === true) {
            if (enteredEmail.trim() === '') {
                setEnteredEmailIsValid(false);
                setErrorEmailMessage("Email is required")
            };
            if (enteredEmail.length >= 50) {
                setEnteredEmailIsValid(false);
                setErrorEmailMessage("'Email should not be longer than 50 characters'")
            }

            if (enteredEmail.normalizeEmail === true) {
                setEnteredEmailIsValid(false);
                setErrorEmailMessage("Should be a valid email")
            }

        } else {
            console.log("Success!")
            //display success -> 
        }


        if (enteredPassword.trim() === '' || enteredPassword.length <= 16 || enteredPassword.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/, "i") === true) {
            if (enteredEmail.trim() === '') {
                setEnteredPasswordIsValid(false);
                setErrorPasswordMessage("Password is required")
            };
            if (enteredPassword.length <= 16) {
                setEnteredPasswordIsValid(false);
                setErrorPasswordMessage("Password should not be longer than 18 characters'")
            }

            if (enteredPassword.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/, "i") === true) {
                setEnteredPasswordIsValid(false);
                setErrorPasswordMessage("Password should be combination of at least one uppercase, one lower case, one special character and one number")
            }

        } else {
            console.log("Success!")
            //display success -> 
        }

        setEnteredEmailIsValid(true);
        const enteredEmailValue = emailInputRef.current.value;
        console.log(enteredEmailValue);
        setEnteredEmail('');

        setEnteredPasswordIsValid(true);
        const enteredPasswordValue = passwordInputRef.current.value;
        console.log(enteredPasswordValue);
        setEnteredPassword('');


        return (
            <>
                <div
                    className={styles["login-modal-container"]}
                    onClick={props.closeLogin}>
                    {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
                    <div className={styles.content} onClick={stop}>
                        <div className={styles.header}>
                            <div onClick={props.closeLogin}>X</div>

                            <div className={styles.title}>Log in</div>
                        </div>
                        <div className={styles.body}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles["form-container"]}>
                                    <input
                                        className={styles["input-login"]}
                                        type="text"
                                        placeholder="E-Mail"
                                        name="email"
                                        onChange={loginContext.collectLoginData}
                                        value={loginContext.loginData.email}
                                    />
                                    {!enteredEmailIsValid && <p className={styles["error-text"]}>{errorEmailMessage}</p>}
                                    <input
                                        className={styles["input-login"]}
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={loginContext.collectLoginData}
                                        value={loginContext.loginData.password}
                                    />
                                    {!enteredPasswordIsValid && <p className={styles["error-text"]}>{errorPasswordMessage}</p>}

                                    <input
                                        className={styles["input-login-button"]}
                                        type="submit"
                                        value="Log In"
                                    />
                                    <div className={styles["modal-footer"]}>
                                        <div>Forgot your password?</div>
                                        <div>
                                            Not a member yet? {""}
                                            <span
                                                onClick={props.openSignup}
                                                className={styles.link}
                                            >
                                                Sign up
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};



export default LogIn;
