import React from 'react';

import Button from './Button';

export default function Login() {

    const regLink = window.location.origin + '/register';

    return (
        <div>
            <h1>
                Login To Your Account
            </h1>
            <h3>
                Need An Account? Register Below!
            </h3>
            <br/>
            
            <Button 
            onClick= {() => {window.location = regLink}}
            text='Register button'
            style={{color: 'white', backgroundColor: 'black'}}
            />

            {/* <a
                href={regLink}
            >
                Need An Account? Register Today!
            </a> */}
        </div>
    )
}
