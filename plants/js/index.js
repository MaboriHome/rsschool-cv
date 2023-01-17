const str = `Ваша оценка - 70 баллов
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:

1) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню)

2) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна

Выполненные пункты:
1) Блок header

2) Секция welcome

3) Секция about

4) Секция service

5) Секция prices

6) Секция contacts

7) Блок footer

8) Блок header

9) Секция welcome

10) Секция about

11) Секция service

12) Секция prices

13) Секция contacts

14) Блок footer

15) нет полосы прокрутки при ширине страницы от 1440рх до 380px

16) нет полосы прокрутки при ширине страницы от 380px до 320рх

17) при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка

`
console.log(str);



onBurgerClick = (evt) => {

  document.querySelector('.header__nav').classList.add('header__nav_active');
  document.querySelector('.burger').classList.add('burger__none');
};

onBurgerClose = () => {
  document.querySelector('.header__nav').classList.remove('header__nav_active');
  document.querySelector('.burger').classList.remove('burger__none');
 
}

const burgerElement = document.querySelector('.burger')
  .addEventListener('click', onBurgerClick);

document.querySelector('.header__nav-close').addEventListener('click', onBurgerClose);
