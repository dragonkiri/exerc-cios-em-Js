let cont = 0;
function text(){
    cont++;
    var text= document.getElementById("text").innerHTML="idiota X" +cont;

}

function colorh(elemente){
    elemente.style.color = "red";
}
function reset_colorh(element){
    element.style.color = "black"
}

function validacao(){
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    if(name ==="" || email === "" ){
        alert("todos os campos devem ser prenchidos")
        return false;
    }
    return true;
}
    function add_item(){
        var item = document.getElementById("item").value;
        if (item !== ""){
            var li = document.createElement("li");
            li.textContent = item;
            document.getElementById("lista").appendChild(li);
            document.getElementById("lista").value="";
             
        }
}

function change_img(){
    var img = document.getElementById("pikachu");
    if (img.src.endsWith("pikapi.jpg")){
        img.src = "squirtle-sax-squirtle.gif ";
    } else {
        img.src = "pikapi.jpg";
    }
}
function changeColor(color){
    document.getElementById("semaforo").style.backgroundColor = color;
}

function validatePassword(){
    var password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("a senha deve ter no minimo 6 caracteres!!");
        return false;
    }
    return true
}

function changeFontSize(size){
    document.getElementById("text").style.fontSize = size + "px";
}

function change_Text(){
    document.getElementById("mudar").textContent = "Texto alterado";
} 


function conta(){
   
    var contador = 10;
    var interval = setInterval(function() {
        contador-- ;
        
        document.getElementById("contar").textContent = contador;
        if (contador === 0){
            clearInterval(interval);
            alert("tempo esgotado");
        }
    }, 2000);
   
}
conta()

function boas_vindas(){
    console.log("aki");
    var now = new Date();
    var hour = now.getHours();
    var greeting; 
    if (hour < 12){
            console.log("aki2");
            greeting = "Bom dia!";
        }else if (hour < 18){
            console.log("aki3");
            greeting = "Boa tarde!";
        } else {
            console.log("aki4");
            greeting = "Boa noite!";
            console.log(greeting);
        }
        document.getElementById("dia").textContent = greeting;
}

boas_vindas()

function cor_fundo(color){
    document.body.style.backgroundColor = color;
}

function play(){
    document.getElementById("som").play();
}

function troca_estilo(){
    var list = document.getElementById("list");
    if (list.style.listStyleType === "disc"){
        (list.style.listStyleType = "decimal")
    }else {
        (list.style.listStyleType = "disc")
    }
}

function progresso_bar(){
    var progresso_bar = document.getElementById("barra_progresso");
    if (progresso_bar.value < 100){
        progresso_bar.value += 10;
    }else {
        alert("Progresso completo");
    }
}

function tema(){
    if (document.body.style.backgroundColor === "white"){
        
        document.body.style.backgroundColor = "black";
    } else {
        
        document.body.style.backgroundColor = "white";
    }
}


