import React from 'react';
import classes from "./ReviewsFormInputName.module.css"
const ReviewsFormInputName = (props) => {
    return (
        <input {...props} className={classes.form__name} />
    );
}

export default ReviewsFormInputName;
