import React from 'react'
import ReactDOM from 'react-dom'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.myBtn}>
            <span> {children} </span>
            <div class="fill-animation"></div>
            <div class="color-layer red"></div>
            <div class="color-layer green"></div>
            <div class="color-layer blue"></div>
            <div class="color-layer orange"></div>
            <div class="color-layer purple"></div>
            <div class="color-layer indigo"></div>
            <div class="color-layer yellow"></div>
        </button>
     );
}
 
export default MyButton;