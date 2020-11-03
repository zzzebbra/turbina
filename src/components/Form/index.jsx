import React from 'react'
import './index.css';

function Form() {
  return (
    <div className="contactUs">
    <span className="contactUsCapture">Заполняя эту форму, вы становитесь частью проекта.</span>
    <form action="" className="form">
      <input className="formInput" type="text" placeholder="Имя и фамилия автора"/>
      <input className="formInput" type="tel" placeholder="Телефон"/>
      <input className="formInput" type="email" placeholder="Почта"/>
      <input className="formInput" type="text" placeholder="Стихи"/>
      <div className="checkbox">
        <input id="checkbox" className="checkboxInput" type="checkbox" placeholder="Стихи"/>
        <label className="checkboxLabel" htmlFor="checkbox">Согласен с <a href="#" className="checkboxLink">офертой</a></label>
      </div>
      <button type="submit" className="formButton">Отправить форму</button>
    </form>
    </div>
  )
}

export default Form
