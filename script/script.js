let boton = document.getElementById('btnSuma');
let boton1 = document.getElementById('btnResta');
let boton2 = document.getElementById('btnMulti');
let boton3 = document.getElementById('btnDiv');

boton.addEventListener('click',capturaSuma);
boton1.addEventListener('click',capturaResta);
boton2.addEventListener('click',capturaMulti);
boton3.addEventListener('click',capturaDiv);

let form = document.getElementById('form');

form.addEventListener('submit',formSumbit);

function formSumbit(e){
    e.preventDefault();
}

function capturaSuma(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);

    let suma = numero1 + numero2
    document.getElementById('resultado').value = suma;
    console.log(suma)
    
}

function capturaResta(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);
    

    let resta = numero1 - numero2
    document.getElementById('resultado').value = resta;

    console.log(resta)
    
}

function capturaMulti(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);


    let multiplicacion = numero1 * numero2
    document.getElementById('resultado').value = multiplicacion;

    console.log(multiplicacion)
    
}

function capturaDiv(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);
  

    let division = numero1 / numero2
    document.getElementById('resultado').value = division;
    
    console.log(division)
    
}
