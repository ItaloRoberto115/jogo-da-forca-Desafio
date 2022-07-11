var palavras = ["POXA","VIDA","CARRINHO"];
var tela = document.getElementById("tela").getContext("2d");
var letras = [];
var palavraCorreta = "";
var erros = 9;
var canvas = document.querySelector(".canvas");



var nova = JSON.parse(window.localStorage.getItem("date"));

console.log(nova)

var modal = document.getElementById("modal"); 

palavras = palavras.concat(nova);

function textCorreto(){
    var palavra = palavras[Math.floor(Math.random()*palavras.length)];
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra;
}

function tracos(){
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#0A3871";
    tela.beginPath();
    var eixo = 600/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length;i++){
        tela.moveTo(500+(eixo*i),640);
        tela.lineTo(550+(eixo*i),640);
    }
    tela.stroke();
    tela.closePath();
}

tracos(textCorreto());

function letraCorreta(index) {
    tela.font = "bold 52px Montserrat";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#0A3871";
    var eixo = eixo = 600/palavraSecreta.length;
    tela.fillText(palavraSecreta[index],505+(eixo*index),620);
    tela.stroke()
}

function letraIncorreta(letra,errosLeft){
    tela.font = "bold 40px Montserrat";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#0A3871";
    tela.fillStyle = "black";
    tela.fillText(letra,535+(40*(10-errosLeft)),710,40);
}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        console.log(key);
        letras.push(key);
        return false;
    }else{
        letras.push(key.toUpperCase());
        return true
    }
}

function addLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase;
    
}

function addletraIncorreta(i){
    if(palavraSecreta.indexOf(i)<= 0 ){
        erros -= 1;
        
    }
}

function abrirModal(){
    modal.classList.add("visivel");
    
}



document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            addLetraCorreta(palavraSecreta.indexOf(letra));
            for(let i = 0; i < palavraSecreta.length;i++){
                if(palavraSecreta[i] === letra){
                    letraCorreta(i);
                }
            }
        }else{
            if(!verificarLetraCorreta(e.key))
            return
            addletraIncorreta(letra);
            letraIncorreta(letra,erros);
            console.log(erros); 
        }
       
    }
    if(erros === 0){
        abrirModal();
        canvas.classList.add("remove");
    }
}




