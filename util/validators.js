module.exports.validateRegisterInput = (
    username, 
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'username must not be null'
    }
    if(email.trim() === ''){
        errors.email = 'email must not be null'
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'email must be a valid email address'
        } 
    }

    if(password === ''){
        errors.password = 'Password must not be null'
    }else if(password !== confirmPassword){
        errors.confirmPassword = 'Password not match'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'username must not be null'
    }
    if(password.trim() === ''){
        errors.password = 'password must not be null'
    }
    return {
        errors, 
        valid: Object.keys(errors).lenght< 1
    }
}