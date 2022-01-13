import React, { useContext, useState } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LogIn/LogIn.module.scss";

// importing fetch request from services
import { login } from "../../Services/getLoggedUser.js";

import LogInValidation from "./LogInValidation";

const LogIn = (props) => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

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
        login(loginContext.loginData, loginContext.setLoginData, loginContext.setCurrentUser, loginContext.setShowLoginModal, loginContext.setCookie, loginContext.history)
        setErrors(LogInValidation(values));
    }

    return (
        <>
            <div
                className={styles["login-modal-container"]}
                onClick={props.closeLogin}
            >

                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div
                            className={styles.pointer}
                            onClick={props.closeLogin}
                        >
                            X
                        </div>

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
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className={styles["error"]}>{errors.email}</p>}
                                <input
                                    className={styles["input-login"]}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className={styles["error"]}>{errors.password}</p>}

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
};

export default LogIn;
