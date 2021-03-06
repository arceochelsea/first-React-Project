import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import useTheme from '../hooks/useTheme';
import Control from './Control';

export default function AppRouter() {

    const [ theme, setTheme ] = useTheme(true);


    return (
        <div>
            <h1>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button
                onClick={() => {
                    setTheme( prevTheme => 
                    { return !prevTheme})
                }}
                style={buttonStyle}
            >
            {!theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        <Switch>
            <Route
                path='/' exact>
                <Home />
            </Route>
            <Route
                exact path='/login'
            >
                <Login />
            </Route>
            <Route
                exact path='/register'
            >
                <Register />
            </Route>
            <Route
                path='/'
                >
                    <div>
                        <h1>
                            404
                        </h1>
                    </div>
                </Route>
        </Switch>
        </div>
    )
}


const buttonStyle = {
    padding: 10,
    borderRadius: 5,
    fontSize: 'large',
    backgroundColor: 'black',
    color: 'white',
    curser: 'pointer'
}

// const textStyle = StyleSheet.create({
//     setColorWhite: {
//         color: '#f44336'
//     }
// })