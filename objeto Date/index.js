// contrutora sempre primeira letra maiuscula
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);// data "0" = 01/01/1970 TimeStamp unix ou época unix
console.log(data.toString())
