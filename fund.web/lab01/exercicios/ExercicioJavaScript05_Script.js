function gerarPrimos() {
  const numMax = parseInt(document.getElementById('numeroMax').value);
  const vet = [];
  const prim = [];
  let resultadoHTML = "<ul>";

  for (let i = 2; i <= numMax; ++i) {
      if (!vet[i]) {
          prim.push(i);
          for (let j = i << 1; j <= numMax; j += i) {
              vet[j] = true;
          }
      }
  }

  for (let i = 0; i < prim.length; i++) {
      resultadoHTML += `<li>${prim[i]}</li>`;
  }
  resultadoHTML += "</ul>";

  document.getElementById('resultado').innerHTML = resultadoHTML;
}