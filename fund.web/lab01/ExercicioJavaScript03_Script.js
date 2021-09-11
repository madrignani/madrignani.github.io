var i;
var par =0;
for (i=0; i<1000; i++){
  if (i%2 == 0)
    par = par + i;
}
document.write(par);