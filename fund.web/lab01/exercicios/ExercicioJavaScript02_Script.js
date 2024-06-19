function calcularPotencias() {
  const num = document.getElementById('number').value;
  let resultado = '';
  let counter = 0;

  for (let i = 0; i <= 30; i++) {
      const potencia = Math.pow(num, i);
      resultado += `<span>${num} ^ ${i} = ${potencia}</span> | `;
      counter++;

      if (counter % 5 === 0) {
          resultado += '<br><br>';
      }
  }

  document.getElementById('resultado').innerHTML = resultado;
}
