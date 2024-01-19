const { check, oneOf,validator, validationResult, body } = require('express-validator');


exports.validate =  function (method) {
    switch (method) {
      case "signup": {
        // console.log("method calling", method)
        return [
            check("firstname")
            .exists().withMessage('first name is required')
            .isLength({ min: 1 }).withMessage('length should be minimum 1'),
  
            check("lastname")
            .exists().withMessage('last name is required')
            .isLength({ min: 1 }).withMessage('length should be minimum 1'),
  
            check("email")
            .exists().withMessage('email is required')
            .if(body("email").notEmpty())
            .isEmail()
            .isLength({ min: 1 }).withMessage('length should be minimum 1'),
  
            check("password")
            .exists().withMessage('password is required')
            .isLength({ min: 1 }).withMessage('length should be minimum 1'),
          ];
      
        break;
    }
    case "login": {
        // console.log("method calling", method)
        return[
            check("email", "Email is Required").exists().isLength({ min: 1 }).if(body("email").notEmpty())
            .isEmail(),
            check("password", "Password is Required").exists().isLength({ min: 1 }),
        ]
    }
  }
}