console.log("Bem-Vindo ao meu Cronômetro");

let segundos = 0;
let minutos = 0;
let hora = 0;

let tempo = 1000;
let cronometro;

function Iniciar(){
    cronometro = setInterval(() => { timer(); }, tempo);
}

function Pausar(){
    clearInterval(cronometro);
}

function Recomeçar(){
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    hora = 0;

    document.getElementById("contador").innerHTML = "00 : 00 : 00";
}

function timer(){
    segundos++;
    if(segundos == 60 ){
        segundos = 0;
        minutos++
    
        if(minutos == 60){
            minutos = 0;
            hora++;
        }
    }
    let formatar = (hora < 10 ? "0" + hora : hora) + " : " + (minutos < 10 ? "0" + minutos : minutos) + " : " + (segundos < 10 ? "0" + segundos : segundos);
    document.getElementById("contador").innerHTML = formatar;
}

    let data = new Date()
    let horaAtual = data.getHours();
    let minutosAtuais = data.getMinutes();
    let horaEminutos = (horaAtual < 10 ? "0" + horaAtual : horaAtual) + ":" + (minutosAtuais < 10 ? "0" + minutosAtuais : minutosAtuais);
    let semana = new Array();
        semana[0] = "um Domingo";
        semana[1] = "uma Segunda-Feira";
        semana[2] = "uma Terça-Feira";
        semana[3] = "uma Quarta-Feira";
        semana[4] = "uma Quinta-Feira";
        semana[5] = "uma Sexta-Feira";
        semana[6] = "um Sábado";
    let diaAtual = semana[data.getDay()];
        
    if(horaAtual == 0 || horaAtual == 12){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕛"; 
    }
    else if (horaAtual == 1 || horaAtual == 13){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕐";
    }
    else if (horaAtual == 2 || horaAtual == 14){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕑";
    }
    else if (horaAtual == 3 || horaAtual == 15){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕒";
    }
    else if (horaAtual == 4 || horaAtual == 16){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕓";
    }
    else if (horaAtual == 5 || horaAtual == 17){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕔";
    }
    else if (horaAtual == 6 || horaAtual == 18){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕕";
    }
    else if(horaAtual == 7 || horaAtual == 19){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕖";
    }
    else if (horaAtual == 8 || horaAtual == 20){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕗";
    }
    else if (horaAtual == 9 || horaAtual == 21){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕘";
    } 
    else if (horaAtual == 10 || horaAtual == 22){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕙";
    }
    else if( horaAtual == 11 || horaAtual == 23){
        document.getElementById("textin").innerHTML = "Está perdido na hora? Relaxa, agora são " + horaEminutos + " de " + diaAtual + " 🕚";
    }
    else{
        alert("[ERRO INESPERADO] Está tudo bem com a hora do seu relógio?")
    }

    document.getElementById("textin").style.width = 100 + "%";
    document.getElementById("textin").style.marginTop = 20 + "px";
    document.getElementById("textin").style.fontSize = 22 + "px";
    document.getElementById("textin").style.textAlign = "center";