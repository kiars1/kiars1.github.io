(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"pushUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._checkResponse(e)}))}},{key:"pushUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"pushCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likes=t.likes,this._owner=t.owner._id,this._cardSelector=n,this._api=r,this._handleCardClick=o,this._handleDelete=i,this._userId=u}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo__container").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;this._element=this._getTemplate(),this._setEventListeners();var t=this._element.querySelector(".photo__image"),n=this._element.querySelector(".photo__title"),r=this._element.querySelector(".photo__score");return this._likeButton=this._element.querySelector(".photo__like-button"),this._scoring=this._element.querySelector(".photo__score"),n.textContent=this._name,t.alt=this._name,t.src=this._link,t.id=this._id,r.textContent=this._likes.length,this._owner!=this._userId&&(this._element.querySelector(".photo__trash-button").style.display="none"),this._likes.find((function(t){return t._id===e._userId}))&&this._element.querySelector(".photo__like-button").classList.add("photo__like-button_active"),this._element}},{key:"_handleLikeClick",value:function(){var e=this;this._likeButton.classList.contains("photo__like-button_active")?this._api.deleteLike(this._id).then((function(t){e._likeButton.classList.remove("photo__like-button_active"),e._scoring.textContent="".concat(t.likes.length)})).catch((function(e){console.log(e)})):this._api.putLike(this._id).then((function(t){e._likeButton.classList.add("photo__like-button_active"),e._scoring.textContent="".concat(t.likes.length)})).catch((function(e){console.log(e)}))}},{key:"deletePhoto",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".photo__image").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".photo__like-button").addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".photo__trash-button").addEventListener("click",(function(){e._handleDelete(e)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this),this._keyClose=n,this._saveButtons=this._popupElement.querySelectorAll(".popup__button-save")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){e.key==this._keyClose&&this.close()}},{key:"renderLoading",value:function(e,t){e?this._saveButtons.forEach((function(e){e.classList.add("popup__button-save_active"),e.textContent=t})):this._saveButtons.forEach((function(e){e.classList.remove("popup__button-save_active"),e.textContent=t}))}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__button-close")||t.target.classList.contains("popup"))&&e.close()}))}}])&&o(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function u(e,t){var n,r=e.popupElement,o=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,r,t))._submitCallback=o,n._formElement=r.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this.inputValue={},this._inputList.forEach((function(t){e.inputValue[t.name]=t.value})),this.inputValue}},{key:"setEventListeners",value:function(){var e=this;c(f(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues())}))}},{key:"close",value:function(){c(f(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&a(t.prototype,n),u}(i);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e,t))._popupFigure=e.querySelector(".popup__image"),n._popupFigcaption=e.querySelector(".popup__subtitle"),n}return t=u,(n=[{key:"open",value:function(e){y(m(u.prototype),"open",this).call(this),this._popupFigure.src=e.link,this._popupFigure.alt=e.name,this._popupFigcaption.textContent=e.name}}])&&_(t.prototype,n),u}(i);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,n))._submitHandler=t,r}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;E(C(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._card)}))}},{key:"open",value:function(e){this._card=e,E(C(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),u}(i);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&O(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._info=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._info.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._info.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&P(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._buttonElement=n.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_addInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_removeInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkinputValidity",value:function(e){e.validity.valid?this._removeInputError(e):this._addInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkinputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"refreshInputValidity",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._removeInputError(t)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&I(t.prototype,n),e}(),U=document.querySelector(".profile__image"),B=document.querySelector(".profile__name"),T=document.querySelector(".profile__description"),x=document.querySelector(".profile__button-edit"),A=document.querySelector(".profile__button-add"),V=document.querySelector(".profile__button-edit-photo"),D=document.querySelector(".popup_type_avatar"),F=document.querySelector(".popup_type_edit"),H=document.querySelector(".popup_type_new-card"),N=document.querySelector(".popup_type_delete"),J=D.querySelector(".popup__form"),G=F.querySelector(".popup__form"),M=H.querySelector(".popup__form"),z=document.querySelector(".popup_type_image"),$=document.querySelector("#nameInput"),K=document.querySelector("#jobInput"),Q=document.querySelector(".photo__list"),W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disable",inputErrorClass:"popup__input_type-error",errorClass:"popup__form-error_active"},X="Escape";function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26/",headers:{authorization:"1dde9be2-497c-4a76-871d-3a40c54053fd","Content-Type":"application/json"}}),ee=new R(W,J),te=new R(W,G),ne=new R(W,M),re=new b(z,X),oe=new q(B,T,U);ee.enableValidation(),te.enableValidation(),ne.enableValidation();var ie=null,ue=function(e,t,n){var o=new r(e,".photo-template",Z,(function(){re.open(e)}),(function(){fe.open(o)}),t),i=o.generateCard();n.addItem(i)},ae=new j({renderer:function(e){ue(e,ie,ae)}},Q),ce=new p({popupElement:D,submitCallback:function(e){ce.renderLoading(!0,"Сохранение...");var t=e.AvatarProfile;Z.pushUserAvatar({avatar:t}).then((function(e){oe.setUserAvatar(e.avatar),ce.close()})).catch((function(){alert("Невозможно обновить аватар пользователя.")})).finally((function(){ce.renderLoading(!1,"Сохранить")}))}},X),se=new p({popupElement:F,submitCallback:function(e){se.renderLoading(!0,"Сохранение...");var t=e.nameProfile,n=e.jobProfile;Z.pushUserInfo({name:t,job:n}).then((function(e){var t=e.name,n=e.about;oe.setUserInfo(t,n),se.close()})).catch((function(){alert("Невозможно обновить данные пользователя.")})).finally((function(){se.renderLoading(!1,"Сохранить")}))}},X),le=new p({popupElement:H,submitCallback:function(e){le.renderLoading(!0,"Сохранение...");var t=e.TitleProfile,n=e.PhotoProfile;Z.pushCards({name:t,link:n}).then((function(e){ue(e,ie,ae),le.close()})).catch((function(){alert("Невозможно добавить новую карточку.")})).finally((function(){le.renderLoading(!1,"Создать")}))}},X),fe=new L(N,(function(e){fe.renderLoading(!0,"Сохранение...");var t=e._id;Z.deleteCards(t).then((function(t){(t.message="Пост удалён")&&(e.deletePhoto(),fe.close())})).catch((function(){alert("Невозможно удалить карточку.")})).finally((function(){fe.renderLoading(!1,"Да")}))}),X);V.addEventListener("click",(function(){ce.open(),ee.refreshInputValidity()})),x.addEventListener("click",(function(){se.open(),$.value=oe.getUserInfo().name,K.value=oe.getUserInfo().job,te.refreshInputValidity()})),A.addEventListener("click",(function(){le.open(),ne.refreshInputValidity()})),ce.setEventListeners(),le.setEventListeners(),re.setEventListeners(),se.setEventListeners(),fe.setEventListeners(),Promise.all([Z.getInitialCards(),Z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],u=i.name,a=i.about,c=i.avatar;oe.setUserInfo(u,a),oe.setUserAvatar(c),ie=i._id,ae.render(o)})).catch((function(e){console.log(e)}))})();