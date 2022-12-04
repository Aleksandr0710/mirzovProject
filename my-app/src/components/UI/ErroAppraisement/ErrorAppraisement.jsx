import classes from './ErroAppraisement.module.css';

const ErrorAppraisement = ({ children, ...props }) => {
    return (
        <div {...props} className={classes.erroAppraisement}>
            {children}
        </div>
    );
}

export default ErrorAppraisement;
