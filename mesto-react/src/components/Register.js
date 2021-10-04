import React from 'react';
import InfoTooltip from './InfoTooltip.js'

function Register() {

  return (
    <div className="register">
      <h2 className="register__title">
        Регистрация
      </h2>
      <form
        className="register__form"
      >
        <input 
        className="register__input" 
        type="text"
        placeholder="Email"/>
        <input 
        className="register__input"
        type="text"
        placeholder="Пароль"/>
        <button
          className="register__button"
          type="submit">
            Зарегистрироваться
        </button>
      </form>
      <h3 className="register__link">
          Уже зарегистрированы? Войти
        </h3>
        <InfoTooltip />
    </div>
    );
}

export default Register;