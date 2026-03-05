const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');
//  definicao de funcao
const verificaBotao = () => {
    if (btnP1){
        btnP1.addEventListener('click', () => window.location.href='./pages/projeto01.html');
        btnP2.addEventListener('click', () => window.location.href='./pages/projeto02.html');
        btnP3.addEventListener('click', () => window.location.href='./pages/projeto03.html');
        btnP4.addEventListener('click', () => window.location.href='./pages/projeto04.html');
    }
}

const criarBotaoVoltar = () => {
    const bntVoltar = document.createElement('button');
    bntVoltar.innerText = 'Voltar';
    bntVoltar.style.marginTop = '20px';

    bntVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(bntVoltar);
};

//  logica de execuçao 
if (btnP1) {
    // se o btnP1 existe, estamos na index
    verificaBotao();
} else {
    // se nao existe, assume-se que estamos em uma pagina de projeto usando o metodo addEventListener em vez da propriedade onload
window.addEventListener('load', () => {
    console.log('A pagina usando um metodo!');
    criarBotaoVoltar();
});
};