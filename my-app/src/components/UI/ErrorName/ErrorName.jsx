import React from 'react';
import classes from "./ErrorName.module.css"
const ErrorName = ({ children, ...props }) => {
    return (
        <div {...props} className={classes.errorName}>
            {children}
        </div>
    );
}

export default ErrorName;
