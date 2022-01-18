const SignUpValidation = (values) => {

    let errors = {};


    if (!values.firstName) {
        errors.firstName = "First Name is required"
    } else if (/^\S+@\S+\.\S+$/.test(values.firstName)) {
        errors.firstName = "First name should only include letters or spaces"
    } else if (values.firstName.length > 30) {
        errors.firstName = "First name should not be longer than 30 characters"
    }


    if (!values.lastName) {
        errors.lastName = "Last Name is required"
    } else if (/^\S+@\S+\.\S+$/.test(values.lastName)) {
        errors.lastName = "Last name should only include letters or spaces"
    } else if (values.lastName.length > 30) {
        errors.lastName = "Last Name should not be longer than 30 characters"
    }


    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Should be a valid email"
    } else if (values.email.length > 50) {
        errors.email = "Email should not be longer than 50 characters"
    }


    if (!values.password) {
        errors.password = "Password is required"
    } else if (!values.password.length >= 8) {
        errors.password = "Password should be more than 8 characters"
    } else if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(values.password))) {
        errors.password = "Password should be combination of at least one uppercase, one lower case, one special character and one number"
    }


    if (!values.confirmedPassword) {
        errors.confirmedPassword = "Confirmed Password is required"
    } else if (!values.confirmedPassword.length >= 8) {
        errors.confirmedPassword = "Confirmed Password should be more than 8 characters"
    } else if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(values.confirmedPassword))) {
        errors.confirmedPassword = "Confirmed Password should be combination of at least one uppercase, one lower case, one special character and one number"
    }


    return errors;
}

export default SignUpValidation;