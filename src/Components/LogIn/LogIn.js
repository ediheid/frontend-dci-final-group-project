import React, { useState } from "react";
import { Link } from "react-router-dom";

// ? All Component and View imports
import SignUp from "../SignUp/SignUp";

// ? Stylesheet
import styles from "../LogIn/LogIn.module.scss";

const LogIn = (props) => {
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
    if (!props.setShowLogIn) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    // !! ASK GROUP, go to line 159
    const switchToSignup = (event) => {
        props.setShowLogIn(false);
        setShowSignUp(true);
    };

    // !! Kathi: Go through it with Jan, Marc or Edith
    const sendData = (event) => {
        // const history = useHistory();
        // const navigate = useNavigate();
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // let navigate = useNavigate();

        const userData = {
            email,
            password,
        };

        console.log(userData);

        // !! Kathi copied from Tutorial
        //     // IS SENDING THE REQUETS TO LOCALHOST 3000
        //     // TO SOLVE IT: ADD CODE SNIPPET TO BACKEND APP.JS FILE
        //     fetch("/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             // Authorization: "Bearer " + localStorage.getItem("jwt"),
        //         },
        //         body: JSON.stringify(userData),
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //             if (data.error) {
        //                 M.toast({ html: data.error, classes: "pink accent-2" });
        //             } else {
        //                 localStorage.setItem("jwt", data.token);
        //                 localStorage.setItem("user", JSON.stringify(data.user));
        //                 dispatch({ type: "USER", payload: data.user });

        //                 M.toast({
        //                     html: "Logged in successfully",
        //                     classes: "green lighten-2",
        //                 });

        //                 // IF THE USER IS LOGGED IN, NAVIGATE TO HOME
        //                 navigate("/");
        //             }
        //             // console.log(data);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
    };

    // !! USER CONTEXT
    //     export const UserContext = createContext();

    // const Routing = () => {
    //     let navigate = useNavigate();
    //     const { state, dispatch } = useContext(UserContext);

    //     useEffect(() => {
    //         const user = JSON.parse(localStorage.getItem("user"));
    //         // IF USER IS LOGGED IN THE URL ROUTES WORKS
    //         if (user) {
    //             dispatch({ type: "USER", payload: user });
    //             // navigate("/");
    //             // IF USER IS NOT LOGGED IN, USER WILL GO TO /LOGIN
    //         } else {
    //             // if (!navigate.location.pathname.startsWith("/reset"))
    //             navigate("/login");
    //         }
    //     }, []);

    return (
        <>
            <div
                className={styles["login-modal-container"]}
                onClick={props.onCloseLogin}
            >
                <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} />
                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div onClick={props.onCloseLogin}>X</div>

                        <div className={styles.title}>Log in</div>
                    </div>
                    <div className={styles.body}>
                        <form onSubmit={sendData}>
                            <div className={styles["form-container"]}>
                                <input
                                    className={styles["input-login"]}
                                    type="text"
                                    placeholder="E-Mail"
                                    name="email"
                                />
                                <input
                                    className={styles["input-login"]}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />

                                <input
                                    className={styles["input-login-button"]}
                                    type="submit"
                                    value="Log In"
                                />
                                <div className={styles["modal-footer"]}>
                                    <div>Forgot your password?</div>
                                    <div>
                                        Not a member yet?
                                        {/* <SignUp
                                            onClose={closeSignUp}
                                            show={showSignUp}
                                        /> */}
                                        <span
                                            // onClick={`${props.openSignUp} ${props.onCloseLogin} `}

                                            // onClick={props.onCloseLogin}
                                            // !! Ask group
                                            onClick={switchToSignup}
                                            className={styles.link}
                                        >
                                            {" "}
                                            Sign up
                                        </span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div onClick={openSignUp}>
                                            I AM A TEST SIGN UP BUTTON
                                        </div>
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
