import React from "react";
import cx from "classnames";
import "./index.css";

function Form() {
  const inputNameRexExp = /^[а-яА-ЯёЁ\s]+$/;
  const [inputName, setInputName] = React.useState("");
  const [isInputNameValid, setIsInputNameValid] = React.useState(true);
  const [inputNameError, setinputNameError] = React.useState(
    "введите имя и фамилию автора"
  );
  const inpuNametValidation = () => {
    setIsInputNameValid(inputNameRexExp.test(inputName));
    isInputNameValid
      ? setinputNameError("введите имя и фамилию автора")
      : setinputNameError("ошибка, имя введено не верно");
  };

  // const inputTelRexExpFinal = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g;
  const inputTelRexExp = /^\+?[0-9\s]*$/;
  const [inputTel, setInputTel] = React.useState("");
  const [isInputTelValid, setIsInputTelValid] = React.useState(true);
  const [inputTelError, setinputTelError] = React.useState(
    "введите номер в формате: +7 909 967 38 82"
  );
  const inpuTeltValidation = () => {
    setIsInputTelValid(inputTelRexExp.test(inputTel));
    isInputTelValid
      ? setinputTelError("введите номер в формате: +7 909 967 38 82")
      : setinputTelError(
          "ошибка, номер должен быть в формате: +7 909 967 38 82"
        );
  };

  const inputEmailRexExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [inputEmail, setInputEmail] = React.useState("");
  const [isInputEmailValid, setIsInputEmailValid] = React.useState(true);
  const [inputEmailError, setinputEmailError] = React.useState("введите email");
  const inpuEmailtValidation = () => {
    setIsInputEmailValid(inputEmailRexExp.test(inputEmail));
    isInputEmailValid
      ? setinputEmailError("введите email")
      : setinputEmailError("ошибка, email введен не верно");
  };

  React.useEffect(() => {
    inpuNametValidation();
    inpuTeltValidation();
    inpuEmailtValidation();
  }, [
    inputTel,
    isInputTelValid,
    inputEmail,
    isInputEmailValid,
    inputName,
    isInputNameValid,
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
        <textarea
          required
          rows="1"
          className="formInput"
          type="text"
          placeholder="Стихи"
        />
        <div className="checkbox">
          <div htmlFor="checkbox" className="checkboxInputWrapper">
            <input
              required
              id="checkbox"
              className="checkboxInput"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="checkboxInputFake"></label>
          </div>
          <label className="checkboxLabel" htmlFor="checkbox">
            <span className="checkboxLabelText">Согласен с</span>
            <a href="#" className="checkboxLink">
              офертой
            </a>
          </label>
        </div>
        <button type="submit" className="formButton">
          Отправить форму
        </button>
      </form>
    </div>
  );
}

export default Form;
