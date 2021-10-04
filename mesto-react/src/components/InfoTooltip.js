import React from 'react';

import Confirm from '../images/Confirm.svg';
import Dismiss from '../images/Dismiss.svg';

function InfoTooltip () {

  return (
    <div className='popup popup_opened'>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть"></button>
        <img className='popup__union' src={Confirm}/>
        <h2 className="popup__text">
        Что-то пошло не так! Попробуйте ещё раз.
        </h2>
      </div>
    </div>
    );
}

export default InfoTooltip;