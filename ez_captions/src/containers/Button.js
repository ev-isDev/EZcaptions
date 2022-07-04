import React from 'react'

const Button = ({color, text, onClick}) => { 
    // basic button takes in a color and text and an onClick prop for when it is clicked
    // extremely basic and versatile button component!
    return <button onClick = {onClick} 
    style={{backgroundColor: color}} className='btn'>{text}</button> // the class name is for styling
} // CHECK CSS STYLESHEET app.css

export default Button