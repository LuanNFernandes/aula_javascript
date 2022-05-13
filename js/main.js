
function clicado(){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar<b>";

    //document.getElementById("agradecimento");
    //console.log(document.getElementById("agradecimento"));
   //alert("Obrigado");
}

function redirecionar(){
    //window.open("https://web.whatsapp.com/");
    window.location.href = "https://web.whatsapp.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texte");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";


}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua Idade?");
console.log(validaIdade(idade));
*/




/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/ 

/*
var count
for (count = 0; count <= 5; count++){
    alert(count);
}
*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"Uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/* 
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push ("Uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = " Luan Fernandes";
//var idade = 31;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão" , "Brasil"));