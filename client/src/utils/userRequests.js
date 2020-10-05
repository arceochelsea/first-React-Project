const {default: axios} = require('axios'); 
const baseURL = 'http://localhost:3333';

module.exports = {
    loginReq: async (values) => {
        const 
            reqBody = {},
            failedValues = [];
        for (const key of values) {
            const val = values[key].trim();
            if (val !== '') {
                reqBody[key] = val
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

if (failedValues.length !== 0) {
    return alert(failedValues.map(err=>{return `Error with ${err.key}:\n${err.error}\n`}).join('\n'))
}

const loginURL = `${baseURL}/user/login`;

const xhr = new XMLHttpRequest();
xhr.open('PUT', loginURL, false);
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onload = () => {
    const res = JSON.parse(xhr.responseText)
    console.log(res);
}

xhr.send(JSON.stringify(reqBody))