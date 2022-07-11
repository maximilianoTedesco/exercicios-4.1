// contrutora sempre primeira letra maiuscula
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia);// data "0" = 01/01/1970 TimeStamp unix ou época unix
// formato Ano, mês, dia, hora, Min, seg, milesimos
//const data = new Date(2022, 6, 12, 15, 14, 27, 500); // ter pelomenos 2 parametros
//const data = new Date('2022-07-12 20:20:59');
//const data = new Date(1657569527298)
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth()); // começa de janeiro em zero
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('ms', data.getMilliseconds());
//console.log('Dia Semana', data.getDay()); // começa domingo em zero

//console.log(data.toString())
//console.log(Date.now())
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)