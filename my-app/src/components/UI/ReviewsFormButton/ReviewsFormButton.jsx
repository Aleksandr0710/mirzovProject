import classes from "./ReviewsFormButton.module.css"
const ReviewsFormButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.form__button}>
            {children}
        </button>
    );
}

export default ReviewsFormButton;
