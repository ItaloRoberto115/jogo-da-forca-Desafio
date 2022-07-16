var textArea = document.getElementById("text-area");
var botaoAdicionar = document.querySelector(".adicionar-text");

var palavrasCriadas = JSON.parse(localStorage.getItem("")) || [];
var regex = new RegExp("^[a-zA-Z0-9]+$");
var number = /[0-9]/g;




//armazem.push = localStorage.getItem("date",armazem);

botaoAdicionar.addEventListener("click",function(){

    var texto = textArea.value.toUpperCase();
    var textString = JSON.stringify(texto);
    
    
    if( !regex.test(texto) || number.test(texto)||texto.length < 3 || texto.length >= 8){
        document.getElementsByName('text-area')[0].placeholder='insira um texto valido';
        textArea.classList.add("color");
        textArea.classList.remove("color2");
        return clear();

    }else{
        document.getElementsByName('text-area')[0].placeholder='Texto Adicionado';
        textArea.classList.remove("color");
        textArea.classList.add("color2");
    }

    palavrasCriadas.push(texto);
    
    window.localStorage.setItem("date",JSON.stringify(palavrasCriadas));

    clear();
});

function clear(){
    document.getElementById("text-area").value = "";
    
}

//usar a opçao 
