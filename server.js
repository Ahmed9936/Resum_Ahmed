const exporss = require("express");

const app = exporss();
const db = require("./website/backend/database.js");

const { check, validationResult } = require("express-validator");
let formvaldat = getContactUsFormValidation();

app.listen(4000, () => {
    console.log("Server is listening on provided port");
});

app.use(exporss.urlencoded({extended:false}));

app.use("/", exporss.static("./website"));

app.post("/contact-me",formvaldat, (request, response) => {

    const errors = validationResult(request)
    if(!errors.isEmpty()){

        let msg = `<h1>Sorry, we found errors with your submission.</h1>${printErrors(errors.array())}`;
        response.send(msg);

    }else{
        const name = request.body.name;
        const gender = request.body.gender;
        const mobile = request.body.mobile;
        const languageOfCommunication = request.body.languageOfCommunication;
        const email = request.body.email;
        const date = request.body.date;
        const message = request.body.message;
        
        // save data
        db.addMessage( name , email, mobile, gender, date, languageOfCommunication, message);



        const msg = `<h1>Thank you, your message has been saved. <a href='./'>Click Here</a> to go back to our website.</h1>`;
        response.send(msg);

    }

})

function getContactUsFormValidation() {
    return[
        check('name').isLength({min:1, max:100}).withMessage('Name must be between 1 and 100 chars in length')
        .isString().withMessage('Name must be of type string')
        .trim().escape(),

        check('email').isLength({min:2, max:200}).withMessage('Email must be between 2 and 200 chars in length')
        .isString().withMessage('Email must be of type string')
        .isEmail().withMessage('Email must be in the correct email fromat e.g., x@y.com')
        .trim().escape(),

        check('mobile').isLength({min:9, max:14}).withMessage('Mobile must be between 9 and 14 digits')
        .isNumeric().withMessage('Mobile must consist of numbers only')
        .trim().escape(),

        check('gender').custom(val => {
            const gender = ['Male', 'Female'];
            if(gender.includes(val)) return true
            return false
        }).withMessage("Selection for 'Your Gender' must be from provided list")
        .trim().escape(),

        check('date').isLength({min:10, max:10}).withMessage('Date of birth must be 10 chars in length')
        .isString().withMessage('Date of birth must be of type string')
        .isDate().withMessage('Date of birth must consist of date only')
        .trim().escape(),

        check('languageOfCommunication').custom(val => {
            const languageOfCommunication = ['Arabic', 'English', 'French'];
            if(languageOfCommunication.includes(val)) return true
            return false
        }).withMessage("Selection for 'Your Gender' must be from provided list")
        .trim().escape(),

        check('message').isLength({min:1, max:500}).withMessage('Message must be between 1 and 500 chars in length')
        .isString().withMessage('Message must be of type string')
        .trim().escape(),
    ]
}

function printErrors(errArray){
    let errors = [];
    for (let index = 0; index < errArray.length; index++) {
        let err = errArray[index]["msg"];
        let msg = `<p>${err}</p>`;
        errors.push(msg);
    }
    return errors.join("");
}
