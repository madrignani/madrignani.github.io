function calcularSomaPares() {
  const maxNumber = parseInt(document.getElementById('maxNumber').value);
  let somaPares = 0;

  for (let i = 0; i <= maxNumber; i++) {
      if (i % 2 === 0) {
          somaPares += i;
      }
  }

  document.getElementById('resultado').innerHTML = `A soma de todos os números pares de 0 até ${maxNumber} é: ${somaPares}`;
}