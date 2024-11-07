function sumar(cadena) {
  if (cadena === "") return 0;

  let delimitadores = /,|-/;
  let numeros = cadena;

  const delimitadorPersonalizado = cadena.match(/^\/\/\[(.)\]\n/);
  if (delimitadorPersonalizado) {
    delimitadores = new RegExp(delimitadorPersonalizado[1]);
    numeros = cadena.slice(delimitadorPersonalizado[0].length);
  }

  return numeros
    .split(delimitadores)
    .map(num => parseInt(num, 10))
    .filter(num => num <= 1000)
    .reduce((acc, num) => acc + num, 0);
}

export default sumar;
