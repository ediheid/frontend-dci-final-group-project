const LogInValidation = (values) => {

    let errors = {};

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

    return errors;
}

export default LogInValidation;