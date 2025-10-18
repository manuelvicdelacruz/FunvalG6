/* let nombre = "Manuelvic";        
let edad = 21;                  
let esGamer = true;            
let dinero = null;             
let score;                      
let simbolo = Symbol("asd123");     
let bigNumero = 9007199254740991n; 

console.log(typeof nombre);     
console.log(typeof edad);      
console.log(typeof esGamer);    
console.log(typeof dinero);    
console.log(typeof simbolo);    
console.log(typeof bigNumero); 

nombre = 12345;                
esGamer = "sí, mucho";          
score = false;                 

console.log(typeof nombre);     
console.log(typeof esGamer);    
console.log(typeof score);     */



/*
1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.
*/
// RESPUESTA AQUÍ 👇
let aa = 123;
let bb = 322;
console.log(aa + bb);
console.log(aa - bb);
console.log(aa * bb);
console.log(aa / bb);
/*
2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

/*
3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
4. Calcula el módulo (resto) de dividir 25 entre 4.
   Usa el operador %.
*/
let resto = 25 % 4;
console.log("Resto de 25 ÷ 4:", resto);
// RESPUESTA AQUÍ 👇

/*
5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.
*/
// RESPUESTA AQUÍ 👇

/*
6. Calcula el perímetro de un cuadrado con lado = 5.
   Fórmula: lado * 4
*/
// RESPUESTA AQUÍ 👇

/*
7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.
*/
let num1 = 7;
let num2 = 4;
let suma = num1 + num2;
console.log("La suma es par?", suma % 2 === 0);
// RESPUESTA AQUÍ 👇

/*
8. Calcula el promedio de tres notas y muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// =======================================================


9. // Declara una variable x = 10.//
let x = 10;
x += 5;
console.log("Nuevo valor de x:", x);

// RESPUESTA AQUÍ 👇

/*
10. Declara una variable puntos = 100.
    Resta 20 puntos usando puntos -= 20 y muestra el resultado.
*/
let puntos = 100;
puntos -= 20;
console.log("Puntos:", puntos);
// RESPUESTA AQUÍ 👇

/*
11. Declara precio = 50.
    Duplica su valor usando precio *= 2 y muestra el resultado.
*/
let precio = 50;
precio *= 2;
console.log("Precio duplicado:", precio);
// RESPUESTA AQUÍ 👇

/*
12. Declara saldo = 200.
    Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
*/
let saldo = 200;
saldo /= 4;
console.log("Nuevo saldo:", saldo);

// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// =======================================================

/*
13. Declara dos variables numéricas.
    Muestra si son iguales (==) o diferentes (!=).
*/
// RESPUESTA AQUÍ 👇

/*
14. Declara edad = 17.
    Muestra si es mayor o igual a 18 (edad >= 18).
*/
let edad = 17;
console.log("Es mayor o igual a 18?", edad >= 18);

// RESPUESTA AQUÍ 👇

/*
15. Declara dos variables a = 10, b = "10".
    Muestra el resultado de a == b y a === b para ver la diferencia.
*/
let a = 10;
let b = "10";
console.log("a == b:", a == b);  
console.log("a === b:", a === b);
// RESPUESTA AQUÍ 👇

/*
16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.
*/
let c = 15;
let d = 20;
console.log("c < d:", c < d);
console.log("c >= d:", c >= d);
// RESPUESTA AQUÍ 👇

// =======================================================
// OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// =======================================================

/*
17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir.
*/
let tieneLicencia = true;
let tieneAuto = false;
console.log("Puede conducir?", tieneLicencia && tieneAuto);
// RESPUESTA AQUÍ 👇

/*
18. Declara esMayor = true y tieneEntrada = false.
    Usa || (OR) para verificar si puede entrar al cine.
*/
let esMayor = true;
let tieneEntrada = false;
console.log("Puede entrar al cine?", esMayor || tieneEntrada);
// RESPUESTA AQUÍ 👇

/*
19. Declara variable conectado = false.
    Usa ! (NOT) para mostrar el valor contrario.
*/
let conectado = false;
console.log("Valor contrario:", !conectado);
// RESPUESTA AQUÍ 👇

/*
20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos para verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").
*/
edad = 25;
let nacionalidad = "boliviana";
console.log("Puede votar?", edad >= 18 && nacionalidad == "boliviana");
// RESPUESTA AQUÍ 👇

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇

/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇

/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇

/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    let nombre = "Kevin";
    let edad = 28;
    let nota1 = 70;
    let nota2 = 80;

    let promedio = (nota1 + nota2) / 2;
    let aprobado = promedio >= 60;

    console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
*/
// RESPUESTA AQUÍ 👇