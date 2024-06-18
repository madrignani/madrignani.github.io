function primos(numMax){
  var vet = [], i, j, prim = [];
    for (i = 2; i <= numMax; ++i) {
      if (!vet[i]) {
          prim.push(i);
        for (j = i << 1; j <= numMax; j += i) {
          vet[j] = true;
        }
      }
    }
  document.write(prim);
}
primos (100);