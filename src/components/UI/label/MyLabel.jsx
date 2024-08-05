import React from 'react'
import classes from './MyLabel.module.css'

const MyLabel = ({children, ...props}) => {
    return ( 
        <h3 {...props} className={classes.myLbl}>
            {children}
        </h3>
     );
}
 
export default MyLabel;