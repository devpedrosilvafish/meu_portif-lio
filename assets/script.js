const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const telInput = document.querySelector('#tel')

const msgErro = document.querySelector('.msg_error')

const submit_button = document.querySelector('#submit_button')

submit_button.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;


    if (nameValue === '') {
        msgErro.style.display = 'block';
    }
    else {
        msgErro.textContent = 'tudo okay'
        msgErro.style.display = 'block';

    }
});

ScrollReveal().reveal('.home', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
});

ScrollReveal().reveal('.sobre_mim', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
});

ScrollReveal().reveal('.skills', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
});

ScrollReveal().reveal('.projetos', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
});



ScrollReveal().reveal('.contatos', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
});

//responsive menu

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

hamburguer.addEventListener("click", () =>
    nav.classList.toggle("active"));







