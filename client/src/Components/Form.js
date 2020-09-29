import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'

export default function Form(props) { //inputs=Array(of Objs.), title=String

    const initialState = props.inputs.reduce( ( intial, input ) => {
        intial[input.name] = ''
        return intial
    }, {})

    const [formValue, updateValues] = useState(initialState) 

    const buttonOnclick = () => {
        const user = props.submitFunc(formValue)
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
                            name={inProps.name}
                            ph={inProps.ph}
                            type={inProps.type}
                            style={inProps.style}
                            id={inProps.id}
                            onChange={ (e) => {

                                const newValue = e.target.value;
                                const inputName = e.target.name;

                                console.log(newValue);

                                updateValues( {...formValue, [inputName]: newValue} )
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
