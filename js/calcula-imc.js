function calcularIMC (kilos, altura) {
    altura = altura /100;
    return (kilos / (altura * altura));
}

var formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function(event){
    event.preventDefault();

    var kilos = parseFloat(document.getElementById('kilos').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = calcularIMC(kilos, altura);
    document.getElementById('imc').value = parseInt(imc).toFixed(2); 
    
    if (imc <= 17) {
        alert('Você está muito abaixo do peso');
    }

    if (imc > 17 && imc <=18.49) {
        alert('Você está abaixo do peso');
    }
    if (imc >= 18.5  && imc <= 24.99) {
        alert('Você está com o peso normal');
    }
    if (imc >= 25 && imc <= 29.99) {
        alert ('Você está acima do peso');
    }
    if (imc >= 30 && imc <=34.99) {
        alert ('Você está com obesidade nivel I');
    }
    if (imc > 35) {
        alert ('Você está com obesidade nivel II');
    }
});
