// 1. logica das paginas de projeto
function criarBotaoVoltar(){
    // 1. elemento d btn
    const btnVoltar = document.createElement('button');

    // 2. definicao d estilo do btn
    btnVoltar.innerTest = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // 3. lógica = click

    btnVoltar.addEventListener('click', function() {
        window.location.href = '../index.html'
    });

    // 4. add btn no final do index 
    document.body.appendChild(btnVoltar);

};

// const criarBtnVoltar() => {

// };
// onload = carregar pagina e executar funçao(quem cria o botao é a funçao p o.l. exect)
window.onload = criarBotaoVoltar();