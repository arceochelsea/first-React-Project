import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import { useTheme } from '../Hooks/ThemeContext';
import Text from './Text';
import axios from 'axios';

export default function Form(props) { //inputs=Array(of Objs.), title=String

    const initialState = props.inputs.reduce( ( intial, input ) => {
        intial[input.name] = ''
        return intial
    }, {})

    const [formValues, updateValues] = useState(initialState)
    const [requestMessage, setReqMsg] = useState('')

    const buttonOnclick = () => {
        updateValues(initialState)
        const user = props.submitFunc(formValues)
        console.log(user)
    }

    return (
        <div>
            <h2>
                {props.title}
            </h2>  
            <form
            id={props.id}
            >
                { 
                    Array.isArray(props.inputs)
                    ? props.inputs.map( inProps => 
                            <Input
                            key={inProps.name} 
                            value={formValues[inProps.name]}
                            name={inProps.name}
                            ph={inProps.ph}
                            type={inProps.type}
                            style={inProps.style}
                            id={inProps.id}
                            onChange={ (e) => {

                                const newValue = e.target.value;
                                const inputName = e.target.name;

                                console.log(newValue);

                                updateValues( {...formValues, [inputName]: newValue} )
                            }}
                            />
                    ): 'Dev Warning! No Inputs, Check Code'
                }
                </form>
            <Button
                text={'Submit'}
                onClick={buttonOnclick}
            />
        </div>    
    )
}
