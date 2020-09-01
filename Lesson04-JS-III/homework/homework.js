// No cambies los nombres de las funciones.
var array = ["juan","pedro","romina"]
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return document.write(array[0])
}
devolverPrimerElemento(array)

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return document.write(array[array.length - 1])
}
devolverUltimoElemento(array)

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return document.write(array.length)
}
obtenerLargoDelArray(array)


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return document.write(array)
}
agregarItemAlFinalDelArray(array,"ramiro")
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  document.write(array)
}
agregarItemAlComienzoDelArray(array,"5")
palabras = ["arboleda","demonio","babsonico"]
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concat = palabras[0] + " "+palabras[1] + " "+palabras[2]
  document.write(concat)
}
dePalabrasAFrase(palabras)
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i<array.length;i++) {
    if (array[i] === elemento){
      return document.write(true)
    } else {
      return document.write(false)
    }
  }
}
arrayContiene(array,"ramiro")
var array = [1,2,3,4,5,5,6,7]
suma = 0
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
for (i=0;i<array.length;i++){
  suma = suma + array[i];
} {
  return document.write(suma)
}
}
agregarNumeros(array)
var resultadosTest = [1,5,2,4,8,4,7,5,9]
suma = 0
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
for (i=0;i<resultadosTest.length;i++){
  suma = suma + resultadosTest[i]
}{
  return document.write(suma/(resultadosTest.length));
}
}
promedioResultadosTest(resultadosTest)
numeros = [1,5,4,8,2,5,9,4]
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
}
numeroMasGrande(numeros)
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
