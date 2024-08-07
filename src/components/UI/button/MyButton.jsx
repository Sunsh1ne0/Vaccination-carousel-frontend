import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.myBtn}>
            <span> {children} </span>
            <div className="fill-animation"></div>
            <div className="color-layer red"></div>
            <div className="color-layer green"></div>
            <div className="color-layer blue"></div>
            <div className="color-layer orange"></div>
            <div className="color-layer purple"></div>
            <div className="color-layer indigo"></div>
            <div className="color-layer yellow"></div>
        </button>
     );
}
 
export default MyButton;