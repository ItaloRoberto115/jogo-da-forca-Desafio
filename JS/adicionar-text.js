var textArea = document.getElementById("text-area");
var botaoAdicionar = document.querySelector(".adicionar-text");
var armazem = []
var palavrasCriadas = JSON.parse(localStorage.getItem("armazem")) || [];
var regex = new RegExp("^[a-zA-Z0-9]+$");
var number = /[0-9]/g;

//armazem.push = localStorage.getItem("date",armazem);

botaoAdicionar.addEventListener("click",function(){

    var texto = textArea.value.toUpperCase();
    var textString = JSON.stringify(texto);
    
    
    if( !regex.test(texto) || number.test(texto)||texto.length < 3 || texto.length >= 8 ){
        alert("EAE");
        return clear();
    }

    palavrasCriadas.push(texto);
    
    window.localStorage.setItem("date",JSON.stringify(palavrasCriadas));
    
    console.log(textString)

    clear();
});

function clear(){
    document.getElementById("text-area").value = "";
    
}



//usar a opçao 
