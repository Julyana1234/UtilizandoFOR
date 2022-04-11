const elementos = [
    {tag: 'p', texto: 'Alguma coisa'},
    {tag: 'div', texto: 'Alguma coisa'},
    {tag: 'section', texto: 'Alguma coisa'},
    {tag: 'footer', texto: 'Alguma coisa'},
];

const container = document.querySelector('.container'); // Seleciona o container que foi criado no INDEX.HTML
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag, texto } = elementos[i]; //Criação das tags dentro do FOR
    let tagCriada = document.createElement(tag); //Criação das tags dentro do FOR
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada); // A cada interação do for ele adciona uma tag na DIV
}

container.appendChild(div)