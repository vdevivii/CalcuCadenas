function sumar(cadena) {
  if (cadena === "") return 0;

  const numeros = cadena.split(",");
  return numeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
}

export default sumar;
