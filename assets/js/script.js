const dias = document.getElementById('dias');
const meses = document.getElementById('meses');
const anos = document.getElementById('anos');

const calendario = setInterval(function calendar() {
    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    if(dia < 10) dia = '0' + dia;
    if(mes  < 10) mes = '0' + mes;
    

    dias.textContent = dia;
    meses.textContent = mes;
    anos.textContent = ano;
})

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let time = new Date();
    let hora = time.getHours();
    let minuto = time.getMinutes();
    let segundo = time.getSeconds();

    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})