// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  b=0
  a=0
  for (i=0;i<array.length;i++){
    a=array[i]
    b=a+1
    array[i]=b
  }return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase=[]
  for(i=0;i<palabras.length;i++){
    frase=frase+palabras[i]
    if (i<palabras.length-1){
      frase=frase+" "
    }
  }
  return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i<array.length;i++){
    if (elemento==array[i]){
      return true
    }
  }return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  a=0
  for (i=0;i<numeros.length;i++){
    a=numeros[i]+a
  }
  return a
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  a=0
  for (i=0;i<resultadosTest.length;i++){
    a=resultadosTest[i]+a
  }
  return a/resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  a=0
  for (i=0;i<numeros.length;i++){
    if (numeros[i]>a){
      a=numeros[i]
    }
    if (numeros[i]<a){
      a=a
    }
  }
  return a
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length!=0){
    a=1
    for (i=0;i<arguments.length;i++){
      a=a*arguments[i]
    }
    return a
  }
  return 0
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  a=0
  for (i=0;i<arreglo.length;i++){
    if (arreglo[i]>18){
      a=a+1
    }
    if (arreglo[i]<18){
      a=a
    }
  }
  return a
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia==1 || numeroDeDia==7){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  a=Math.sqrt(n*n)
  if (a>=1){
    if (a==9){
      return true
    }
    if (a!=9){
      a=n/10
      a=Math.floor(a)
    }
    if (a<1 || a!=9){
      return false
    }
    return true
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i=a=b=0;i<arreglo.length;i++){
    a=arreglo[0]
    if (a==arreglo[i]){
      b=b+1
    }
    if (a!=arreglo[i]){
      b=b
    }
  }
  if (b==arreglo.length){
    return true
  }
  return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  arreglo=[array.length]
  j=0
  for (i=0;i<array.length;i++){
    if (array[i]=="Marzo" || array[i]=="Noviembre" || array[i]=="Enero"){
      arreglo[j]=array[i]
      j++
    }
  }
  if (arreglo[0]!="Marzo" || arreglo[1]!="Noviembre" || arreglo[2]!="Enero"){
    return "No se encontraron los meses pedidos"
  }
  return arreglo
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoArray=[]
  j=0
  for (i=0;i<array.length;i++){
    if (array[i]>100){
      nuevoArray[j]=array[i]
      j++
    }
    if (array[i]<100){
      nuevoArray=nuevoArray
    }
  }
  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  array=[10]
  parametro=numero
  i=1;
  while (i<11){
    if (parametro!=i){
      parametro=parametro+2
      array[i-1]=parametro
      i++
    }
    if (parametro==i){
      return "Se interrumpió la ejecución"
      break;
    }
  }
  return array
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array=[10]
  parametro=numero
  i=1;
  while (i<10){
    if (parametro!=5){
      parametro=parametro+2
      array[i-1]=parametro
      i++
    }
    if (parametro==5){
      parametro=parametro+4
      continue;
    }
  }
  return array
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
