import React from 'react';

function Login() {

  return (
    <div className="login">
      <h2 className="login__title">
        Вход
      </h2>
      <form
        className="login__form"
      >
        <input 
        className="login__input" 
        type="text"
        placeholder="Email"/>
        <input 
        className="login__input"
        type="text"
        placeholder="Пароль"/>
        <button
          className="login__button"
          type="submit">
            Войти
        </button>
      </form>
    </div>
    );
}

export default Login;