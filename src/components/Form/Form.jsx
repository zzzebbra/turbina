import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./index.css";

function Form() {
  // input Name
  const inputNameRegex = /^[а-яА-ЯёЁ\s]+$/;
  const [inputName, setInputName] = React.useState("");
  const [isInputNameValid, setIsInputNameValid] = React.useState(true);
  const [inputNameError, setinputNameError] = React.useState(
    "введите имя и фамилию автора"
  );
  const inpuNametValidation = () => {
    setIsInputNameValid(inputNameRegex.test(inputName));
    isInputNameValid
      ? setinputNameError("введите имя и фамилию автора")
      : setinputNameError(
          "ошибка, имя введено не верно. Используйте только Кириллицу"
        );
  };

  // input Telephone
  // const inputTelRegexFinal = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g;
  const inputTelRegex = /^\+?[0-9\s]*$/;
  const [inputTel, setInputTel] = React.useState("");
  const [isInputTelValid, setIsInputTelValid] = React.useState(true);
  const [inputTelError, setinputTelError] = React.useState(
    "введите номер в формате: +7 909 967 38 82"
  );
  const inpuTeltValidation = () => {
    setIsInputTelValid(inputTelRegex.test(inputTel));
    isInputTelValid
      ? setinputTelError("введите номер в формате: +7 909 967 38 82")
      : setinputTelError(
          "ошибка, номер должен быть в формате: +7 909 967 38 82"
        );
  };

  // input Email
  const inputEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [inputEmail, setInputEmail] = React.useState("");
  const [isInputEmailValid, setIsInputEmailValid] = React.useState(true);
  const [inputEmailError, setinputEmailError] = React.useState("введите email");
  const inpuEmailtValidation = () => {
    setIsInputEmailValid(inputEmailRegex.test(inputEmail));
    isInputEmailValid
      ? setinputEmailError("введите email")
      : setinputEmailError("ошибка, email введен не верно");
  };

  // input Text
  const [inputText, setInputText] = React.useState("");
  const [inputTextStart, setInputTextStart] = React.useState(false);
  const [isInputTextValid, setIsInputTextValid] = React.useState(true);
  const [inputTextError, setinputTextError] = React.useState("введите стихи");
  const inpuTexttValidation = () => {
    if (inputText) setInputTextStart(true);
    inputTextStart && !inputText
      ? setinputTextError("ошибка, поле не должно быть пустым. Введите стихи")
      : setinputTextError("введите стихи");
  };

  //input checkbox policy
  const [inputCheckbox, setInputCheckbox] = React.useState(false);

  // state of button submit form
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  // button Submit active
  const isFormFilled = () => {
    const isFormValid = [
      inputName,
      isInputNameValid,
      inputTel,
      isInputTelValid,
      inputEmail,
      isInputEmailValid,
      inputText,
      inputCheckbox,
    ].every((elem) => elem !== false);
    setIsButtonActive(isFormValid);
  };

  React.useEffect(() => {
    inpuNametValidation();
    inpuTeltValidation();
    inpuEmailtValidation();
    inpuTexttValidation();
    isFormFilled();
  }, [
    inputTel,
    isInputTelValid,
    inputEmail,
    isInputEmailValid,
    inputName,
    isInputNameValid,
    inputText,
    isInputTextValid,
    inputCheckbox,
  ]);

  return (
    <div className="contactUs">
      <span className="contactUsCapture">
        Заполняя эту форму, вы становитесь частью проекта.
      </span>
      <form action="" className="form">
        <div className="inputWrapper">
          <input
            required
            className={cx("formInput", inputName && "formInputActive")}
            onChange={(e) => setInputName(e.target.value)}
            type="text"
            placeholder="Имя и фамилия автора"
          />
          {inputName && (
            <span
              className={cx(
                "inputError",
                !isInputNameValid && "inputErrorTrue"
              )}
            >
              {inputNameError}
            </span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            required
            val={inputTel}
            onChange={(e) => setInputTel(e.target.value)}
            className={cx("formInput", inputTel && "formInputActive")}
            type="tel"
            placeholder="Телефон"
          />
          {inputTel && (
            <span
              className={cx("inputError", !isInputTelValid && "inputErrorTrue")}
            >
              {inputTelError}
            </span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            required
            val={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            className={cx("formInput", inputEmail && "formInputActive")}
            type="email"
            placeholder="Почта"
          />
          {inputEmail && (
            <span
              className={cx(
                "inputError",
                !isInputEmailValid && "inputErrorTrue"
              )}
            >
              {inputEmailError}
            </span>
          )}
        </div>
        <div className="inputWrapper">
          <textarea
            val={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
            rows="1"
            className={cx("formInput", inputTextStart && "formInputActive")}
            type="text"
            placeholder="Стихи"
          />
          {inputTextStart && (
            <span className={cx("inputError", !inputText && "inputErrorTrue")}>
              {inputTextError}
            </span>
          )}
        </div>
        <div className="checkbox">
          <div htmlFor="checkbox" className="checkboxInputWrapper">
            <input
              val={inputCheckbox}
              onChange={(e) => setInputCheckbox(e.target.checked)}
              required
              id="checkbox"
              className="checkboxInput"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="checkboxInputFake"></label>
          </div>
          <label className="checkboxLabel" htmlFor="checkbox">
            <span className="checkboxLabelText">Согласен с</span>
            <Link to="#" className="checkboxLink">
              офертой
            </Link>
          </label>
        </div>
        {isButtonActive ? (
          <button type="submit" className="formButton">
            Отправить форму
          </button>
        ) : (
          <button
            disabled
            type="submit"
            className="formButton formButtonDisabled"
          >
            Отправить форму
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
