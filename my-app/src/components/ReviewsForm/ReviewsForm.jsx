import { useState, useEffect } from "react";
import ReviewsFormButton from "../UI/ReviewsFormButton/ReviewsFormButton"
import ReviewsFormInputName from "../UI/ReviewsFormInputName/ReviewsFormInputName"
import ReviewsFormInputAppraisement from "../UI/ReviewsFormInputAppraisement/ReviewsFormInputAppraisement"
import ReviewsFormTextarea from "../UI/ReviewsFormTextarea/ReviewsFormTextarea"
import ErrorAppraisement from "../UI/ErroAppraisement/ErrorAppraisement"
import ErrorName from "../UI/ErrorName/ErrorName"
import "./ReviewsForm.css"

const ReviewsForm = () => {
    const [name, setName] = useState(localStorage.getItem("name"))
    const [appraisement, setAppraisement] = useState(localStorage.getItem("appraisement"))
    const [textarea, setArea] = useState(localStorage.getItem("textarea"))
    const [nameDirty, setNameDirty] = useState(false)
    const [appraisementDirty, setAppraisementDirty] = useState(false)
    const [nameError, setNameError] = useState("вы не указали имя и фамилию")
    const [appraisementError, setAppraisementError] = useState("Оценка должна быть от 1 до 5")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || appraisementError) {
            return setFormValid(false)
        }
        setFormValid(true)
    }, [nameError, appraisementError])

    const preventDefault = (e) => {
        e.preventDefault();
        localStorage.removeItem("name");
        localStorage.removeItem("appraisement");
        localStorage.removeItem("textarea");
    };

    const nameHandler = (e) => {
        setName(e.target.value)
        localStorage.setItem("name", e.target.value)
        e.target.value = localStorage.getItem("name");
        if (!e.target.value) {
            return setNameError("вы не указали имя и фамилию")
        }
        if ((e.target.value.length < 2)) {
            return setNameError("Имя не может быть короче 2-х символов")
        }
        setNameError("")
    }

    const textareaHandler = (e) => {
        setArea(e.target.value)
        localStorage.setItem("textarea", e.target.value)
    }

    const appraisementHandler = (e) => {
        localStorage.setItem("appraisement", e.target.value);
        setAppraisement(e.target.value)
        if (isNaN(e.target.value)) {
            return setAppraisementError("Оценка должна содержать цифры")
        }
        if ((e.target.value < 1 || e.target.value > 5)) {
            return setAppraisementError("Оценка должна быть от 1 до 5")
        }
        setAppraisementError("")
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break
            case "appraisement":
                setAppraisementDirty(true)
                break
        }
    }

    const focusHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(false)
                break
            case "appraisement":
                setAppraisementDirty(false)
                break
        }
    }

    return (
        <form className="form">
            <h2>Добавить свой отзыв</h2>
            <div className="form__inner">
                {(nameDirty && nameError) && <ErrorName className="error errorName">{nameError}</ErrorName>}
                <ReviewsFormInputName onChange={e => nameHandler(e)} value={name} name="name" onFocus={e => focusHandler(e)} onBlur={e => blurHandler(e)} placeholder="Имя и фамилия*" />
                {(appraisementDirty && appraisementError) && <ErrorAppraisement className="error errorAppraisement">{appraisementError}</ErrorAppraisement>}
                <ReviewsFormInputAppraisement onChange={e => appraisementHandler(e)} value={appraisement} name="appraisement" onFocus={e => focusHandler(e)} onBlur={e => blurHandler(e)} placeholder="Оценка*" />
            </div>
            <ReviewsFormTextarea value={textarea} onChange={e => textareaHandler(e)} name="textarea" className="form__text" placeholder="Текст отзыва" />
            <ReviewsFormButton onClick={preventDefault} disabled={!formValid}>Оставить отзыв</ReviewsFormButton>
        </form>
    );
}

export default ReviewsForm;
