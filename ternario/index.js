// (condição) ?; 'valor verdadeiro' : 'valor falso';

const pontuacaoUsuario = 500
;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';
/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario Normal');
}*/

const corUsuario = null;
const corPadrao = corUsuario || 'preta'; // seta valor padrão
console.log(nivelUsuario, corPadrao)
