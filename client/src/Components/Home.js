import React from 'react';

import Button from './Button';

import useTheme from '../hooks/useTheme'

export default function Home() {

    const loginLink = '/login';
    const regLink = '/register';

const [theme] = useTheme()

    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <h3>
                {theme ? "You're in Light" : "You're in Dark"}
            </h3>
            <br/>

            <Button 
            onClick= {() => {window.location = loginLink}}
            text='Login button'
            style={{color: 'white', backgroundColor: 'black'}}
            />

            <Button 
            onClick= {() => {window.location = regLink}}
            text='Register button'
            style={{color: 'white', backgroundColor: 'black'}}
            />
            {/* <a
                href={loginLink}
            >
                Login
            </a> */}
            {/* <br/>
            <a 
                href={regLink}
            >
                Register
            </a> */}
        </div>
    )
}
