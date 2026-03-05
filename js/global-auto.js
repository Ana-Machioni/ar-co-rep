//  1. logica automatica para o Menu(Index)
// buscamos todos os inputs do tipo botao dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            //  o index começa em 0, entao somamos 1 para bater com " porojeto 01", "projeto 02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            alert(numeroProjeto)
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
}

// 2. logica das paginas de projeto (btn voltar)
const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';

    // herdera o estilo 'button' do css
    btnVoltar.className = 'btn-navegacao';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);

}

// se nao houver botoes de projeto na pagina, assume-se que é uma pagina inmterna
if (botoesProjeto.length  === 0) {
    // adicionando um evento de escuta no navegador  (objeto window).
    // apops o carregamento da pagina a funçao ser a invocada()
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
}