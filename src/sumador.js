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
    .reduce((acc, num) => acc + parseInt(num, 10), 0);
}

export default sumar;
