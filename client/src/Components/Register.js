import React from 'react';

import Button from './Button';

export default function Register() {

    const loginLink = window.location.origin + '/login';

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <h3>
                Already Have An Account? Login Below
            </h3>
            <br/>

            <Button
            onClick= {() => {window.location = loginLink}}
            text='Login button'
            style={{color: 'white', backgroundColor: 'black'}}
            />

            {/* <a
                href={loginLink}
            >
                Already Have An Account? Login
            </a> */}
        </div>
    )
}
