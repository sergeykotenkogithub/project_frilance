// Смена языка
const EngRus = document.querySelector('.change-country')
// const EngRus = document.querySelector('.show-country')
const changeCountry = document.querySelector('.country')
changeCountry.addEventListener('click', (e) => {
    // console.log("Привет")
    // EngRus.
    e.preventDefault();
    EngRus.classList.toggle('show-country');
})

// Смена цвета deposit withdrawl

const changeColor = document.querySelector('.last-withdrawal')
const changeColor2 = document.querySelector('.last-deposit')
const lineColor = document.querySelector('.line_crypto')



changeColor.addEventListener('click', e => {
    changeColor.classList.remove('last-withdrawal')
    changeColor.classList.add('last-deposit')
    changeColor2.classList.remove('last-deposit');
    changeColor2.classList.add('last-withdrawal');
    lineColor.style.border = "2px solid #8400e4"
    lineColor.style.top = "37px"
})


changeColor2.addEventListener('click', e => {
    changeColor.classList.remove('last-deposit');
    changeColor.classList.add('last-withdrawal');
    changeColor2.classList.remove('last-withdrawal');
    changeColor2.classList.add('last-deposit');
    lineColor.style.border = "2px solid #2f2c64"
})


// Бургер

const iconMenu = document.querySelector('.menu_icon')
if (iconMenu) {
    const burgerBody = document.querySelector('.burger-body')
    iconMenu.addEventListener("click", e => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
        
    })
}
  
