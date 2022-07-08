const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoTitulo = document.getElementById('texto');


textoTitulo.innerHTML = '';
numeroTitulo.innerHTML += numero;
textoTitulo.innerHTML += `<p>Seu numero + 2: é ${numero + 2}.</p>`;
textoTitulo.innerHTML += `<p>A raiz quadrada do seu numero é:  ${numero ** 0.5}.<p>`;
textoTitulo.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero)}.<p>`;
textoTitulo.innerHTML += `<p>É NaN?:  ${Number.isNaN(numero)}.<p>`;
textoTitulo.innerHTML += `<p>Arredondado para baixo é:  ${Math.floor(numero)}.<p>`;
textoTitulo.innerHTML += `<p>Arredondado para cima é:  ${Math.ceil(numero)}.<p>`;
textoTitulo.innerHTML += `<p>Com duas casas decimais é: ${numero.toFixed(2)}.<p>`;