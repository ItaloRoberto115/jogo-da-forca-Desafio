var palavras = ["POXA","VIDA","CARRINHO"];
var tela = document.getElementById("tela").getContext("2d");
var letras = [];

var jogo = document.getElementById("novo-jogo");
var palavraCorreta = "";
var erros = 9;
var acertos = 0;
var canvas = document.querySelector(".canvas");
var botoesGame = document.querySelector(".game-botoes");



var nova = JSON.parse(window.localStorage.getItem("date"));


var modal = document.getElementById("modal"); 

palavras = palavras.concat(nova);


function textCorreto(){
    
    var palavra = palavras[Math.floor(Math.random()*palavras.length)];
    palavraSecreta = palavra;
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

function desenhaCabeca(){
    tela.beginPath()
    tela.arc(400,250,50,0,2*Math.PI);
    tela.stroke();
    
}
function corpo(){
    tela.beginPath();
    tela.moveTo(400,300);
    tela.lineTo(400,450);
    tela.stroke();
}
function BracoUm(){
    tela.beginPath();
    tela.moveTo(400,320);
    tela.lineTo(350,380);
    tela.stroke();
}
function BracoDois(){
    tela.beginPath();
    tela.moveTo(400,320);
    tela.lineTo(450,380);
    tela.stroke();
}
function pernaUm(){
    tela.beginPath();
    tela.moveTo(400,450);
    tela.lineTo(450,520);
    tela.stroke();
}
function pernaDois(){
    tela.beginPath();
    tela.moveTo(400,450);
    tela.lineTo(350,520);
    tela.stroke();
}

function olhoUm(){
    tela.beginPath();
    tela.moveTo(380,240);
    tela.lineTo(390,260);
    tela.stroke();
    tela.beginPath();
    tela.moveTo(390,240);
    tela.lineTo(380,260);
    tela.stroke();
}
function olhoDois(){
    tela.beginPath();
    tela.moveTo(420,240);
    tela.lineTo(430,260);
    tela.stroke();
    tela.beginPath();
    tela.moveTo(430,240);
    tela.lineTo(420,260);
    tela.stroke();
}
function boca(){
    tela.beginPath();
    tela.moveTo(410,280);
    tela.lineTo(400,280);
    tela.stroke();
}
function forca(){
    tela.beginPath();
    tela.moveTo(400,200)
    tela.lineTo(400,100);
    tela.lineTo(200,100);
    tela.lineTo(200,600);
    tela.lineTo(100,600);
    tela.lineTo(300,600);
    tela.stroke();
};
function voceGanhou(){
    tela.font = "bold 40px Montserrat";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#0A3871";
    tela.fillStyle = "green";
    tela.fillText("VOCE GANHOU!!!", 500, 200);
}
function vocePerdeu(){
    tela.font = "bold 40px Montserrat";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "black";
    tela.fillStyle = "#e33d46";
    tela.fillText("VOCE PERDEU :(", 500, 200);
    
}
function palavraCompleta(){
    tela.font = "bold 40px Montserrat";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "black";
    tela.fillStyle = "#39bf00";
    tela.fillText("palavra correta:", 500, 500);
}


forca();

function block(e){
    
}

document.addEventListener("keydown",function(e){
    var letra = e.key.toUpperCase();

    if(e.keyCode < 65 || e.keyCode > 122){
        return false;
    }
   
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            
            addLetraCorreta(palavraSecreta.indexOf(letra));
            for(let i = 0; i < palavraSecreta.length;i++){
                if(palavraSecreta[i] === letra){
                    letraCorreta(i);
                    acertos += 1
                }
            }
        }else{
            if(!verificarLetraCorreta(e.key))
            return
            addletraIncorreta(letra);
            letraIncorreta(letra,erros);
                   
        }  
    }
   
    if(erros === 8){
        desenhaCabeca();
        
        }if(erros === 7){
            corpo();
            }if(erros === 6){
                BracoUm();
                }if(erros === 5){
                    BracoDois();
                    }if(erros === 4){
                        pernaUm();
                        }if(erros === 3){
                            pernaDois();
                    }if(erros === 2){
                        olhoUm();
                }if(erros === 1){
                    olhoDois();   
            }if(erros === 0){
                boca();
                erros = 500;
                letraCorreta(palavraSecreta);
                for(let i = 0; i < palavraSecreta.length;i++){
                letraCorreta(i); 
            }vocePerdeu();
            palavraCompleta()
            jogo.textContent = "Tentar novamente?"
        }  
            if(acertos === palavraSecreta.length){
                voceGanhou();
                erros = 500;
                
            }
            
    })
