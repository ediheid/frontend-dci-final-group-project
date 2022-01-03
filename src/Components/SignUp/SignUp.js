import React, { useCallback } from "react";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

import { signup } from "../../Services/createNewUser.js";

const SignUp = (props) => {
    // Signup Modal is not visible
    if (!props.showSignup) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };


    // const handleSubmit = useCallback((event) => {
    //     event.preventDefault()

    //     signup(props.signupData)
    //   }, [])

    return (
        <>
            <div
                className={styles["signup-modal-container"]}
                onClick={props.closeSignup}
            >
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div onClick={props.closeSignup}>X</div>

                        <div className={styles.title}>Sign up</div>
                    </div>
                    <div className={styles.body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles["form-container"]}>
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    onChange={props.collectSignupData}
                                    value={props.signupData.firstname}
                                />
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    onChange={props.collectSignupData}
                                    value={props.signupData.lastname}
                                />
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="E-Mail"
                                    name="email"
                                    onChange={props.collectSignupData}
                                    value={props.signupData.email}
                                />

                                <input
                                    className={styles["input-signup"]}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={props.collectSignupData}
                                    value={props.signupData.password}
                                />

                                <input
                                    className={styles["input-signup"]}
                                    type="password"
                                    placeholder="Repeat Password"
                                    name="confirmedPassword"
                                    onChange={props.collectSignupData}
                                    value={props.signupData.confirmedPassword}
                                />

                                <input
                                    className={styles["input-signup-button"]}
                                    type="submit"
                                    value="Signup"
                                />
                                <div className={styles["modal-footer"]}>
                                    <div>Already have a Freshbnb account?</div>
                                    <div
                                        onClick={props.openLogin}
                                        className={styles.link}
                                    >
                                        Log in
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

export default SignUp;

// // import React from "react";

// // // ? Stylesheet
// // import styles from "../SignUp/SignUp.module.scss";

// // const SignUp = (props) => {
// //     // SIgnup Modal is not visible
// //     if (!props.showSignup) {
// //         return null;
// //     }

// //     const stop = (event) => {
// //         event.stopPropagation();
// //     };

// //     // !! ASK GROUP, go to line
// //     // const switchToLogin = (event) => {
// //     //     setShowLogIn(true);
// //     //     props.setShowSignUp(false);
// //     // };

// //     return (
// //         <>
// //             <div
// //                 className={styles["signup-modal-container"]}
// //                 onClick={props.onCloseSignup}
// //             >
// //                 {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
// //                 <div className={styles.content} onClick={stop}>
// //                     <div className={styles.header}>
// //                         <div onClick={props.onCloseSignup}>X</div>

// //                         <div className={styles.title}>Sign up</div>
// //                     </div>
// //                     <div className={styles.body}>
// //                         <form>
// //                             <div className={styles["form-container"]}>
// //                                 <input
// //                                     className={styles["input-signup"]}
// //                                     type="text"
// //                                     placeholder="First Name"
// //                                     name="firstname"
// //                                 />
// //                                 <input
// //                                     className={styles["input-signup"]}
// //                                     type="text"
// //                                     placeholder="Last Name"
// //                                     name="lastname"
// //                                 />
// //                                 <input
// //                                     className={styles["input-signup"]}
// //                                     type="text"
// //                                     placeholder="E-Mail"
// //                                     name="email"
// //                                 />

// //                                 <input
// //                                     className={styles["input-signup"]}
// //                                     type="password"
// //                                     placeholder="Password"
// //                                     name="password"
// //                                 />

// //                                 <input
// //                                     className={styles["input-signup"]}
// //                                     type="password"
// //                                     placeholder="Repeat Password"
// //                                     name="confirmedPassword"
// //                                 />

// //                                 <input
// //                                     className={styles["input-signup-button"]}
// //                                     type="submit"
// //                                     value="Log In"
// //                                 />
// //                                 <div className={styles["modal-footer"]}>
// //                                     <div>Already have a Freshbnb account?</div>
// //                                     <div
// //                                         onClick={props.onCloseLogin}
// //                                         className={styles.link}
// //                                     >
// //                                         Log in
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default SignUp;

// ///////////////////////////////////////////////////////
// import React from "react";

// // ? Stylesheet
// import styles from "../SignUp/SignUp.module.scss";

// const SignUp = (props) => {
//     // SIgnup Modal is not visible
//     if (!props.showSignup) {
//         return null;
//     }

//     const stop = (event) => {
//         event.stopPropagation();
//     };

//     // !! ASK GROUP, go to line
//     // const switchToLogin = (event) => {
//     //     setShowLogIn(true);
//     //     props.setShowSignUp(false);
//     // };

//     const sendData = (event) => {
//         event.preventDefault();

//         const firstname = event.target.firstname.value;
//         const lastname = event.target.lastname.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const confirmedPassword = event.target.confirmedPassword.value;

//         const userData = {
//             firstname,
//             lastname,
//             email,
//             password,
//             confirmedPassword,
//         };

//         console.log(userData);

//         // !! Kathi copied from tutorial
//         //   if (
//         //       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         //           email
//         //       )
//         //   ) {
//         //       M.toast({
//         //           html: "invalid email",
//         //           classes: "#c62828 red darken-3",
//         //       });
//         //       return;
//         //   }

//         // IS SENDING THE REQUETS TO LOCALHOST 3000
//         // TO SOLVE IT: ADD CODE SNIPPET TO BACKEND APP.JS FILE (see Petstagram project)
//         // fetch("/signup", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify(userData),
//         // })
//         //     .then((res) => res.json())
//         //     .then((data) => {
//         //         if (data.error) {
//         //             M.toast({ html: data.error, classes: "pink accent-2" });
//         //         } else {
//         //             // M.toast({
//         //             //     html: data.message,
//         //             //     classes: "green lighten-2",
//         //             // });
//         //             // IF THE USER IS SIGNED UP, NAVIGATE TO PAGE: PLEASE CHECK YOUR INBOX AND CONFIRM YOUR EMAIL ADDRESS
//         //             // navigate("/login");
//         //         }
//         //         // console.log(data);
//         //     });
//     };

//     return (
//         <>
//             <div
//                 className={styles["signup-modal-container"]}
//                 onClick={props.onCloseSignup}
//             >
//                 {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
//                 <div className={styles.content} onClick={stop}>
//                     <div className={styles.header}>
//                         <div onClick={props.onCloseSignup}>X</div>

//                         <div className={styles.title}>Sign up</div>
//                     </div>
//                     <div className={styles.body}>
//                         <form onSubmit={sendData}>
//                             <div className={styles["form-container"]}>
//                                 <input
//                                     className={styles["input-signup"]}
//                                     type="text"
//                                     placeholder="First Name"
//                                     name="firstname"
//                                 />
//                                 <input
//                                     className={styles["input-signup"]}
//                                     type="text"
//                                     placeholder="Last Name"
//                                     name="lastname"
//                                 />
//                                 <input
//                                     className={styles["input-signup"]}
//                                     type="text"
//                                     placeholder="E-Mail"
//                                     name="email"
//                                 />

//                                 <input
//                                     className={styles["input-signup"]}
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                 />

//                                 <input
//                                     className={styles["input-signup"]}
//                                     type="password"
//                                     placeholder="Repeat Password"
//                                     name="confirmedPassword"
//                                 />

//                                 <input
//                                     className={styles["input-signup-button"]}
//                                     type="submit"
//                                     value="Log In"
//                                 />
//                                 <div className={styles["modal-footer"]}>
//                                     <div>Already have a Freshbnb account?</div>
//                                     <div
//                                         onClick={props.onCloseLogin}
//                                         className={styles.link}
//                                     >
//                                         Log in
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>{" "}
//         </>
//     );
// };

// export default SignUp;
