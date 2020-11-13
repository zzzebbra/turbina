import React from "react";
import cx from "classnames";
import "./index.css";
import {
  inputsErorMes,
  inputEmailRegex,
  inputNameRegex,
  inputTelRegex,
} from "./constants";

function Form() {
  const [inputValues, updateInputValues] = React.useState({
    name: "",
    tel: "",
    email: "",
    text: "",
    checkbox: false,
  });

  const [inputTextStart, setInputTextStart] = React.useState(false);
  const [lastChangedInputName, setLastChangedInputName] = React.useState(null);

  const [inputValidationValues, updateInputValidationValues] = React.useState({
    name: true,
    tel: true,
    email: true,
    text: true,
  });
  const checkValidInput = (inputValidationName) => {
    let dataToCheck = {
      currentRegex: null,
      inputValue: null,
    };
    switch (inputValidationName) {
      case "name":
        dataToCheck = {
          currentRegex: inputNameRegex,
          inputValue: inputValues.name,
        };
        break;
      case "tel":
        dataToCheck = {
          currentRegex: inputTelRegex,
          inputValue: inputValues.tel,
        };
        break;
      case "email":
        dataToCheck = {
          currentRegex: inputEmailRegex,
          inputValue: inputValues.email,
        };
        break;
      case "text":
        dataToCheck = {
          currentRegex: null,
          inputValue: inputValues.text,
        };
        break;
    }
    const { currentRegex, inputValue } = dataToCheck;
    if (inputValidationName === "text") {
      setInputTextStart(true);
      const isInputValid = inputValue.length > 0;
      updateInputValidationValues({
        ...inputValidationValues,
        [inputValidationName]: isInputValid,
      });
      return;
    }
    if (currentRegex === null) return;
    const isInputValid = currentRegex.test(inputValue);
    updateInputValidationValues({
      ...inputValidationValues,
      [inputValidationName]: isInputValid,
    });
    setLastChangedInputName(null);
  };

  const updateValue = (e) => {
    const inputName = e.target.getAttribute("name");
    if (inputName === "checkbox") {
      updateInputValues({ ...inputValues, [inputName]: e.target.checked });
      return;
    }
    updateInputValues({ ...inputValues, [inputName]: e.target.value });
    setLastChangedInputName(inputName);
  };

  // state of button submit form
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  // button Submit active
  const isFormFilled = () => {
    const isFormValid = [
      inputValues.name,
      inputValidationValues.name,
      inputValues.tel,
      inputValidationValues.tel,
      inputValues.email,
      inputValidationValues.email,
      inputValues.text,
      inputValues.checkbox,
    ].every((elem) => elem !== false);
    setIsButtonActive(isFormValid);
  };

  React.useEffect(() => {
    lastChangedInputName && checkValidInput(lastChangedInputName);
    isFormFilled();
  }, [inputValues]);

  return (
    <div className="contact-us">
      <span className="contact-us__capture">
        Заполняя эту форму, вы становитесь частью проекта.
      </span>
      <form action="" className="form">
        <div className="input-wrapper">
          <input
            name="name"
            value={inputValues.name}
            onChange={(e) => updateValue(e)}
            className={cx("form__input", {
              form__input_active: inputValues.name,
            })}
            type="text"
            placeholder="Имя и фамилия автора"
            required
          />
          {inputValues.name && (
            <span
              className={cx("input-error", {
                "input-error_true": !inputValidationValues.name,
              })}
            >
              {inputValidationValues.name
                ? inputsErorMes.name.true
                : inputsErorMes.name.false}
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            name="tel"
            value={inputValues.tel}
            onChange={(e) => updateValue(e)}
            className={cx("form__input", {
              form__input_active: inputValues.tel,
            })}
            type="tel"
            placeholder="Телефон"
            required
          />
          {inputValues.tel && (
            <span
              className={cx("input-error", {
                "input-error_true": !inputValidationValues.tel,
              })}
            >
              {inputValidationValues.tel
                ? inputsErorMes.tel.true
                : inputsErorMes.tel.false}
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            name="email"
            value={inputValues.email}
            onChange={(e) => updateValue(e)}
            className={cx("form__input", {
              form__input_active: inputValues.email,
            })}
            type="email"
            placeholder="Почта"
            required
          />
          {inputValues.email && (
            <span
              className={cx("input-error", {
                "input-error_true": !inputValidationValues.email,
              })}
            >
              {inputValidationValues.email
                ? inputsErorMes.email.true
                : inputsErorMes.email.false}
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <textarea
            name="text"
            value={inputValues.text}
            onChange={(e) => updateValue(e)}
            required
            rows="1"
            className={cx("form__input", {
              form__input_active: inputTextStart,
            })}
            type="text"
            placeholder="Стихи"
          />
          {inputTextStart && (
            <span
              className={cx("input-error", {
                "input-error_true": !inputValidationValues.text,
              })}
            >
              {inputValidationValues.text
                ? inputsErorMes.text.true
                : inputsErorMes.text.false}
            </span>
          )}
        </div>
        <div className="checkbox">
          <div htmlFor="checkbox" className="checkbox__input-wrapper">
            <input
              name="checkbox"
              value={inputValues.checkbox}
              onChange={(e) => updateValue(e)}
              required
              id="checkbox"
              className="checkbox__input"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="checkbox__input-fake"></label>
          </div>
          <label className="checkbox__label" htmlFor="checkbox">
            <span className="checkbox__label-text">Согласен с</span>
            <a href="#" className="checkbox__link">
              <div className="checkbox__link-popup">
                Пользовательское соглашение
              </div>
              офертой
            </a>
          </label>
        </div>
        {isButtonActive ? (
          <button type="submit" className="form-button">
            Отправить форму
          </button>
        ) : (
          <button
            disabled
            type="submit"
            className="form-button form-button_disabled"
          >
            <div className="form-button-popup">
              Еще нельзя. Все поля, должны быть заполнены корректыми данными
            </div>
            Отправить форму
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
