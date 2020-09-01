// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = null;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;

// Crea una variable booleana:
const nuevoBool = null;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * null === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return document.write(str)
}
devolverString("mauro")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x+y;
  return document.write(suma)
}
suma(5,6)
function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  var resta = x-y
  return document.write(resta)
}
resta(5,4)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicacion = x*y
  return document.write(multiplicacion)
}
multiplica(4,5)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divide = x / y
  return document.write(divide)
}
divide(10,5)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y) {
    return document.write(true)
  } else {
    return document.write(false)
  }
}
sonIguales(5,5)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length===str2.length) {
    return document.write(true)
  } else {
    return document.write(false)
  }
}
tienenMismaLongitud("arturo","seisss")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return document.write(true)
  } else {
    return document.write(false)
  }
}
menosQueNoventa(50)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
    return document.write(true)
  } else {
    return document.write(false)
  }
}
menosQueNoventa(50)
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x%y
  return document.write(resto)
}
obtenerResto(10,2)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2===0) {
    return document.write(true)
  } else {
    return document.write(false)
  }
}
esPar(4)
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2!==0) {
    return document.write(true)
  } else {
    return document.write(false)
  }
}
esImpar(5)
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num,2)
  return document.write(cuadrado)
}
elevarAlCuadrado(2)
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num,3)
  return document.write(cubo)
}
elevarAlCubo(2)


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 var figura = Math.pow(num,exponent)
  return document.write(figura)
}
elevar(2,4)
function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  var redon = Math.round(num);
  return document.write(redon)
}
redondearNumero(6.6)
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  var redondeo = Math.ceil(num);
  return document.write(redondeo)

}
redondearHaciaArriba(4.08)
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var concat = str + " !"
  return document.write(concat)
}
agregarSimboloExclamacion("alejandro")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var concatenar = nombre +" "+ apellido
  return document.write(concatenar)
}
combinarNombres("narmiro","stradella")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  concatenar = "---> hola "+nombre
  return document.write(concatenar)
}
obtenerSaludo("martin")
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho
  return document.write
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
