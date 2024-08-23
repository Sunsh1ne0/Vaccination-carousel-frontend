import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return ( 
        <button {...props} style={{ backgroundColor: props.backgroundcolor, height: props.heightbtn, maxWidth: props.maxwidthbtn, transition: props.transition }} className={classes.myBtn}>
            <span> {children} </span>
        </button>
     );
}
 
export default MyButton;