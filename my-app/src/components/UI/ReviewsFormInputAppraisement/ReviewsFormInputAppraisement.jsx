import React from 'react';
import classes from "./ReviewsFormInputAppraisement.module.css"
const ReviewsFormInputAppraisement = (props) => {
    return (
        <input {...props} className={classes.form__appraisement} />
    );
}

export default ReviewsFormInputAppraisement;
