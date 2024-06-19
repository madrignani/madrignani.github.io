function fatorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = num;
  while (num > 1) {
      num--;
      result *= num;
  }
  return result;
}

function calcularFatorial() {
  const num = document.getElementById('number').value;
  const resultado = fatorial(num);
  document.getElementById('resultado').innerText = `O fatorial de ${num} é: ${resultado}`;
}