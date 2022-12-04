import React from 'react';
import classes from "./ReviewsFormTextarea.module.css"
const ReviewsFormTextarea = (props) => {
    return (
        <textarea {...props} className={classes.form__textarea} />
    );
}

export default ReviewsFormTextarea;
