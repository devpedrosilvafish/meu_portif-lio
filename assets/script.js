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

//fazer aparecer barra no cards projecto com ver mais e nome do projeto.

/*const conteudoGeral = document.querySelectorAll('.conteudo_cards');
const descricao = document.querySelector('.descricao_off')

conteudoGeral.addEventListener("mouseenter", () => {
    descricao.style.opacity = "1";
    descricao.style.transform = 'translateY(0)'
})

conteudoGeral.addEventListener("mouseleave", () => {
    descricao.style.opacity = "0.5";
     descricao.style.transform = 'translateY(-90px)'
    
});*/

const conteudos = document.querySelectorAll('.conteudo_cards');

conteudos.forEach(function (conteudo) {
    // Seleciona a descrição dentro de cada card
    const descricao = conteudo.querySelector('.descricao_off');

    // Quando o mouse entrar no card
    conteudo.addEventListener("mouseenter", function () {
        descricao.style.opacity = "1";
        descricao.style.transform = "translateY(0)";
    });

    // Quando o mouse sair do card
    conteudo.addEventListener("mouseleave", function () {
        descricao.style.opacity = "0.5";
        descricao.style.transform = "translateY(-90px)";
    });
});

// MOdal




const areaModal = document.querySelector('.area_modal');
const fecharModal = document.querySelector('.fechar_modal');
const btnsAbrir = document.querySelectorAll('.bt-ver');

const titleModal = document.querySelector('.title_modal');
const textModal = document.querySelector('.content_p');
const videoModal = document.querySelector(".video_modal");


//posso usar tudo querySelector
const repo = document.querySelector('#modalRepo');
const site = document.getElementById('modalSite');
const linkedin = document.getElementById('modalLinkedin');

const conteudoModal = {
    1: {
        titulo: "Meu Portifolio",
        descricao: "Neste portfólio, você encontrará alguns dos meus principais projetos em HTML, CSS e JavaScript, criados com foco em design responsivo, interatividade e boas práticas de código. Cada trabalho reflete meu aprendizado contínuo e minha paixão por transformar ideias em interfaces funcionais e criativas.",
        video: "videos/projeto-meu-portifolio.mp4",
        repo: "https://github.com/devpedrosilvafish/meu_portif-lio",
        site: "https://devpedrosilvafish.github.io/meu_portif-lio/",
        linkedin: "https://www.linkedin.com/in/devpedrosilvasilvafish/"

    },
    2: {
        titulo: "Projeto: Landing Page GTA",
        descricao: "Este projeto é uma landing page inspirada no universo de GTA, criada para destacar o visual marcante e a identidade do jogo. Desenvolvida com HTML, CSS e JavaScript, a página conta com design responsivo, animações sutis e estrutura moderna, demonstrando minhas habilidades em front-end e atenção aos detalhes na experiência do usuário..",
        video: "videos/projeto-gta.mp4",
        repo: "https://github.com/devpedrosilvafish/projeto-gta",
        site: "https://devpedrosilvafish.github.io/projeto-gta/",
        linkedin: "https://www.linkedin.com/in/devpedrosilvasilvafish/"
    },
    3: {
        titulo: "Projeto: Projeto Vida Music",
        descricao: "Este site foi desenvolvido para o time de louvor da igreja Projeto Vida, com o objetivo de compartilhar músicas, eventos e mensagens inspiradoras. Construído com HTML, CSS e JavaScript, o projeto une design moderno, navegação intuitiva e valores cristãos, criando uma plataforma que reflete fé, arte e tecnologia em harmonia..",
        video: "videos/projeto-pvm.mp4",
        repo: "https://github.com/devpedrosilvafish/projeto-pvm",
        site: "https://devpedrosilvafish.github.io/projeto-pvm/",
        linkedin: "https://www.linkedin.com/in/devpedrosilvasilvafish/"
    },


};




fecharModal.addEventListener('click', () => {
    areaModal.style.display = 'none';
});

btnsAbrir.forEach((botao) => {
    botao.addEventListener('click', function () {
        const id = this.closest(".conteudo_cards").getAttribute("data-id"); //this= esse botao que cliquei, parrent = eu cliquei o botao e vou pegar o card onde esta aquele botao.
        const conteudoGeral = conteudoModal[id];

        titleModal.textContent = conteudoGeral.titulo;
        textModal.textContent = conteudoGeral.descricao;
        videoModal.src = conteudoGeral.video;
        areaModal.style.display = 'flex';

        repo.href = conteudoGeral.repo;
        site.href = conteudoGeral.site;
        linkedin.href = conteudoGeral.linkedin;


    });
});

//





