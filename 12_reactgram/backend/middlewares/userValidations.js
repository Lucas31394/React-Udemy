const {body} = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("The name is required!")
            .isLength({min: 3})
            .withMessage("The name must contain at least 3 letters."),
        body("email")
            .isString()
            .withMessage("The email is required!")
            .isEmail()
            .withMessage("Insert a valid email."),
        body("password")
            .isString()
            .withMessage("The password is required!")
            .isLength({min: 5})
            .withMessage("The password must contain at least 5 characters"),
        body("confirmPassword")
            .isString()
            .withMessage("The password confirmation is required!")
            .custom((value, {req}) => {
                if(value != req.body.password) {
                    throw new Error("The passwords doesn't match, please correct the information and try again.")
                }
                return true;
            })
    ];
};

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("The email is required!")
            .isEmail()
            .withMessage("Insert a valid email."),
        body("password")
            .isString()
            .withMessage("The password is required!")
    ];
};

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("The name must contain at least 3 letters."),
        body("password")
            .optional()
            .isLength({min: 5})
            .withMessage("The password must contain at least 5 characters")
    ];
}

module.exports = {userCreateValidation, loginValidation, userUpdateValidation};