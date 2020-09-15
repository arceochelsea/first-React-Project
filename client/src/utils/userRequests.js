const {default: axios} = require('axios'); 
const baseURL = 'http://localhost:4000';

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

        const reqData = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
            },

            data: JSON.stringify(reqBody)
        }

        axios.put(loginURL, reqData)
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
        console.log(form);
        
    //all validation from before, plus make sure both password inputs match
    }
}