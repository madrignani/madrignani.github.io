function fatorial(num) {
  document.write("O FATORIAL DE " +num);
  var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
  document.write(" É: " +result);
}
fatorial(12);