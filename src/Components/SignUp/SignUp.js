import React, { useContext } from "react";
import { useRef, useState } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext, SignupContext } from "../../App";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

// importing fetch request from services
import { signup } from "../../Services/createNewUser.js";

const SignUp = (props) => {
  //   const createUserContext = useContext(SignupContext);
  const signUpContext = useContext(AppContext);

  //* Email
  const emailInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState('');
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [errorEmailMessage, setErrorEmailMessage] = useState('');


  //* FirstName
  const firstNameInputRef = useRef();
  const [enteredFirstName, setEnteredFirstName] = useState(true);
  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  }
  const [enteredFirstNameIsValid, setEnteredFistNameIsValid] = useState(true);
  const [errorFirstNameMessage, setErrorFirstNameMessage] = useState('');

  //* LastName
  const lastNameInputRef = useRef();
  const [enteredLastName, setEnteredLastName] = useState(true);
  const LastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  }
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(true);
  const [errorLastNameMessage, setErrorLastNameMessage] = useState('');


  //* Password
  const passwordInputRef = useRef();
  const [enteredPassword, setEnteredPassword] = useState('');
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

  //* ConfirmedPassword
  const confirmedPasswordInputRef = useRef();
  const [enteredConfirmedPassword, setEnteredConfirmedPassword] = useState('');
  const confirmedPasswordInputChangeHandler = (event) => {
    setEnteredConfirmedPassword(event.target.value);
  }
  const [enteredConfirmedPasswordIsValid, setEnteredConfirmedPasswordIsValid] = useState(true);
  const [errorConfirmedPasswordMessage, setErrorConfirmedPasswordMessage] = useState('');


  // Signup Modal is not visible
  if (!props.showSignup) {
    return null;
  }

  const stop = event => {
    event.stopPropagation();
  };

  // Fetch request for signing up
  const handleSubmit = event => {
    event.preventDefault();
    signup(signUpContext.signupData, signUpContext.setSignupData)

    //*Email
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

    //* FirstName
    if (enteredFirstName.trim() === '' || enteredFirstName.length <= 30 || enteredFirstName.isAlpha === true) {
      if (enteredFirstName.trim() === '') {
        setEnteredFistNameIsValid(false);
        setErrorFirstNameMessage("First Name is required")
      };
      if (enteredFirstName.length <= 30) {
        setEnteredFistNameIsValid(false);
        setErrorFirstNameMessage("First name should not be longer than 30 characters")
      }

      if (enteredFirstName.isAlpha === true) {
        setEnteredFistNameIsValid(false);
        setErrorFirstNameMessage("Last name should only include letters or spaces")
      }

    } else {
      console.log("Success!")
      //display success -> 
    }

    //* Last Name

    if (enteredLastName.trim() === '' || enteredLastName.length <= 30 || enteredLastName.isAlpha === true) {
      if (enteredLastName.trim() === '') {
        setEnteredLastNameIsValid(false);
        setErrorLastNameMessage("Last Name is required")
      };
      if (enteredLastName.length <= 30) {
        setEnteredLastNameIsValid(false);
        setErrorLastNameMessage("Last name should not be longer than 30 characters")
      }

      if (enteredLastName.isAlpha === true) {
        setEnteredLastNameIsValid(false);
        setErrorLastNameMessage("Last name should only include letters or spaces")
      }

    } else {
      console.log("Success!")
      // setSuccessMessage("Signed in")
    }

    //* Password
    if (enteredPassword.trim() === '' || enteredPassword.length <= 16 || enteredPassword.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/, "i") === true) {
      if (enteredPassword.trim() === '') {
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

    //* Confirmed Password

    if (enteredConfirmedPassword.trim() === '' || enteredConfirmedPassword.length <= 16 || enteredConfirmedPassword.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/, "i") === true) {
      if (enteredConfirmedPassword.trim() === '') {
        setEnteredConfirmedPasswordIsValid(false);
        setErrorConfirmedPasswordMessage("Confirmed Password is required")
      };

      if (enteredConfirmedPassword.length <= 16) {
        setEnteredConfirmedPasswordIsValid(false);
        setErrorConfirmedPasswordMessage("Confirmed Password should not be longer than 18 characters'")
      }

      if (enteredConfirmedPassword.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/, "i") === true) {
        setEnteredConfirmedPasswordIsValid(false);
        setErrorConfirmedPasswordMessage("Confirmed Password should be combination of at least one uppercase, one lower case, one special character and one number")
      }

    } else {
      console.log("Success!")
      //display success -> 
    }

    setEnteredEmailIsValid(true);
    const enteredEmailValue = emailInputRef.current.value;
    console.log(enteredEmailValue);
    setEnteredEmail('');

    setEnteredFistNameIsValid(true);
    const enteredFirstNameValue = firstNameInputRef.current.value;
    console.log(enteredFirstNameValue);
    setEnteredFirstName('');

    setEnteredLastNameIsValid(true);
    const enteredLastNameValue = lastNameInputRef.current.value;
    console.log(enteredLastNameValue);
    setEnteredLastName('');

    setEnteredPasswordIsValid(true);
    const enteredPasswordValue = passwordInputRef.current.value;
    console.log(enteredPasswordValue);
    setEnteredPassword('');

    setEnteredConfirmedPasswordIsValid(true);
    const enteredConfirmedPasswordValue = confirmedPasswordInputRef.current.value;
    console.log(enteredConfirmedPasswordValue);
    setEnteredConfirmedPassword('');
  };


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
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.firsName}
                />
                {!enteredFirstNameIsValid && <p className={styles["error-text"]}>{errorFirstNameMessage}</p>}
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.lastName}
                />
                {!enteredLastNameIsValid && <p className={styles["error-text"]}>{errorLastNameMessage}</p>}
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="E-Mail"
                  name="email"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.email}
                />
                {!enteredEmailIsValid && <p className={styles["error-text"]}>{errorEmailMessage}</p>}

                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.password}
                />
                {!enteredPasswordIsValid && <p className={styles["error-text"]}>{errorPasswordMessage}</p>}

                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Repeat Password"
                  name="confirmedPassword"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.confirmedPassword}
                />
                {!enteredConfirmedPasswordIsValid && <p className={styles["error-text"]}>{errorConfirmedPasswordMessage}</p>}

                <input
                  className={styles["input-signup-button"]}
                  type="submit"
                  value="Signup"
                />
                <div className={styles["modal-footer"]}>
                  <div>Already have a Freshbnb account?</div>
                  <div onClick={props.openLogin} className={styles.link}>
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
