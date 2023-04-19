const menu = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao')

menu.addEventListener('click', () => {
    if(navegacao.classList.contains('active')) {
        navegacao.classList.remove('active')
        navegacao.classList.add('navegacao')
    } else {
        navegacao.classList.add('active')
        navegacao.classList.remove('navegacao')
    }
})

if(window.screen.width > 530){
    console.log('texhbhudhx')
    navegacao.classList.remove('active')
}