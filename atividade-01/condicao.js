let altura = 1.70;
let peso = 80;
imc = peso /(altura**2)

if(imc < 18.5){
    console.log("Você está abaixo do peso!")
} else if (imc > 18.5 && imc < 25) {
    console.log("Seu peso está normal.")
} else if (imc > 25 && imc < 30) {
    console.log("Você está acima do peso!")
} else if (imc > 30) {
    console.log("Você está em obesidade morbida.")
}