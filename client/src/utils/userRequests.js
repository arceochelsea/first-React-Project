const {default: axios} = require('axios'); 
const baseURL = 'http://localhost:3333';

module.exports = {
    loginReq: (form) => {

        const reqBody = {};

        for (const input of form) {
        
            const val = input.value;

            if (val !== '') {
                reqBody[input.name] = val
            }
        }

        //frontend validation needed: [] make sure all fields are present, [] email is an email, [] lengths of inputs (match schema)

        const loginURL = `${baseURL}/user/login`


        axios.put(loginURL, reqBody)
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        })
    },

    regReq: (form) => {

        const reqBody = {};

        for (const input of form) {

            const val = input.value;

            if (val !== '') {
                reqBody[input.name] = val
            }
        }

        const registerURL = `${baseURL}/user/register`
        
        axios.post(registerURL, reqBody)
        .then( res => {
            console.log(res)
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })        
    //all validation from before, plus make sure both password inputs match
    }
}