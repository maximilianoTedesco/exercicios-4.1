const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido!!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const faixaImc = getFaixaImc(imc)
    const msg = `Sua Faixa IMC é ${imc} (${faixaImc}).`;
    setResultado(msg, true);
});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getFaixaImc(imc) {
    const faixa = ['A baixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];

    if (imc >= 39.9) return faixa[5];
    if (imc >= 34.9) return faixa[4];
    if (imc >= 29.9) return faixa[3];
    if (imc >= 24.9) return faixa[2];
    if (imc >= 18.5) return faixa[1];
    if (imc < 18.5) return faixa[0];
}


function criaP() {
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

