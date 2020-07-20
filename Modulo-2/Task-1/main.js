//ejercicio 1                 PRIMERA ENTREGA
console.log("-------------------------EJERCICIO 1-------------------------");
function invertir() {
	var cadena="1234";
	var nuevacadena="";
	for (var i = cadena.length - 1; i >= 0; i--) {
        nuevacadena += cadena[i];
    }
	console.log("la cadena es: " + cadena);
return nuevacadena;
}
console.log("cadena invertida: "+ invertir());
console.log("-------------------------EJERCICIO 2-------------------------");
//Ejercicio 2
function ordenar() {
	var cadena="webmaster";	
	var letras=cadena.split("");
	letras.sort();
	console.log("la cadena es: "+ cadena);
return letras;
}
console.log("cadena invertida: "+ ordenar());
console.log("-------------------------EJERCICIO 3-------------------------");
//ejercicio3
function convertir(){
	var cadena="principe de persia";
	var palabras=cadena.split(" ");
	var nuevacadena="";
	for(var i=0;i< palabras.length; i++) {
		var palabra=("" +palabras[i]);
		var m=palabra[0];
		var mayus = m.toUpperCase(); 
		var por=palabra.slice(1,palabra.length); 
		var fin =(""+mayus+por);
		nuevacadena += " " +fin;
    }
	console.log("La cadena es: "+ cadena);
	return nuevacadena;
}
console.log("La nueva cadena es:"+ convertir());
console.log("-------------------------EJERCICIO 4-------------------------");
//Ejercicio 4
function largo(){
	var oracion="hola mundo";
	var palabras=oracion.split(" ");
	var x=0;
	var large="";
	for(var i=0;i<palabras.length;i++){
		if(x<palabras[i].length){
			x=palabras[i].length;
			large=palabras[i];
		}
	}
	console.log("cadena original: "+ oracion);
	return large;
}
console.log("palabra larga: "+ largo());




//                             SEGUNDA ENTREGA


//Escribir expresiones con variables.
var myName ="Janneth";
var age=18;
var ignasiAge =34;
var ageDiff= age-ignasiAge;
//Imprimir Variable
console.log("Iniciando Javascript....");
console.log("-------------------------EJERCICIO 1-------------------------");
console.log(myName);  //Ejercicio1
console.log("-------------------------EJERCICIO 2-------------------------");
console.log(age);     //Ejercicio2
console.log("-------------------------EJERCICIO 3-------------------------");
console.log(ageDiff); //Ejercicio3
//Escribir código con condicionales.
console.log("-------------------------EJERCICIO 4-------------------------");
//Ejercicio4
if (age > 21) {
  console.log("es mayor a 21");
}
else {
  console.log("es menor a 21");
}
console.log("-------------------------EJERCICIO 5-------------------------");
//Ejercicio5
if (age > ignasiAge) {
  console.log("Ignasi es más joven que usted");
}
else if(age<ignasiAge)  {
  console.log("Ignasi es más viejo que usted");
}
else{
  console.log("Tiene la misma edad que Ignasi");
}


//                                TERCERA ENTREGA


console.log("-------------------------EJERCICIO 1-------------------------");
//Ejercicio1
var nombres = ["Victoria","Fernando","Diego","Victoria", "Daiana", "Janneth", "Stefania", "Elisabet", "Ivan","Gianina","Laura","Margara", "Alan","Laura","Eliana","Andres","Rodrigo","Scarlet","Maria","Edgar","Adriana","Adriana","Aibby","Juan","Federico","Judith"];
nombres.sort();
//console.log(nombres);
console.log("primer nombre: "+nombres [nombres.length-1]);
console.log("ultimo nombre: "+nombres [1]);
for(var i=0;i<nombres.length;i++){
  console.log(nombres [i])
}
console.log("-------------------------EJERCICIO 2-------------------------");
//Ejercico2
var edades= [24, 35, 23, 26, 20, 18, 27, 26, 36, 33, 32, 34, 36, 37, 29, 27, 25, 22, 23, 26, 24, 36, 33, 32, 34, 36, 37, 29, 27, 25, 22, 23, 26, 24, 19, 25, 33];
var cont=0;
console.log("Edades recorridas con WHILE");
while(cont<edades.length){
  console.log(edades[cont]);
  cont++;
}
console.log("Todas las edades pares recorridas con WHILE");
var par=0;
while(par<edades.length){
  if((edades[par]%2)==0){//condicion de par
    console.log(`Es par ${edades[par]}`);
  }/*else{
    console.log(`Es impar ${edades[par]}`);
  }*/
  par++;
}
console.log("Edades recorridas con FOR");
for(var i=0; i<edades.length;i++){
	console.log(edades[i]);
}
console.log("-------------------------EJERCICIO 3-------------------------");
//Ejercicio3
function getmayor(edades) {
  var mayor=edades[0];
  for(var i=0;i<edades.length;i++){
    if(edades[i]>=mayor){
      mayor=edades[i];
    }  
  }
	return mayor;
}
console.log("Edades: "+edades);
console.log("El mayor es " + getmayor(edades));
console.log("-------------------------EJERCICIO 4-------------------------");
//Ejercicio4
function getmenor(edades) {
  var menor=edades[0];
  for(var i=0;i<edades.length;i++){
    if(edades[i]<=menor){
      menor=edades[i];
    }  
  }
	return menor;
}
console.log("Edades: "+edades);
console.log("El menor es " +getmenor(edades));
console.log("-------------------------EJERCICIO 5-------------------------");
//ejercicio5
var index=20;
function getind(edades,index) {
	var valor=0;
  if(index<edades.length){//condicion para verificar si existe un numero para al indice
		valor=edades[index];
  }
	else{
		valor="no hay valor";
	}
	return valor;
}
console.log("Todas las edades: " + edades);
console.log("Indice: "+ index);
console.log("El numero en el indice es: " + getind(edades,index)  );
console.log("-------------------------EJERCICIO 6-------------------------");
//ejercicio6
function getrepetido(arrays){
  var arrays=[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
  var arrayaux=[];
  var cont=1;
	console.log("array: "+arrays);
  for(var i=0 ; i<arrays.length ; i++){
    var valor=arrays[i];
    for(var j=i+1;j<arrays.length;j++){
      if(valor==arrays[j]){
        arrayaux.push(valor);
        console.log(`El numero ${valor} se repite`);
        cont++;
        if(cont>1){
          console.log(arrayaux);
        }
      }
    }
  }
	
  return arrayaux; 
}
getrepetido();
console.log("-------------------------EJERCICIO 6.1-------------------------");
function repetidos(edades){
	var repe=[];
	var agregado=0;
	for(var i=0; i<edades.length-1 ; i++){
		if(repe.includes(edades[i])==false){
			var j=i+1;
			while(j<edades.length && agregado == 0){
				if(edades[i]==edades[j]){
					repe.push(edades[j]);
					agregado =1;
				}
				j=j+1;
			}
				agregado=0;		
		}
		
	}
return repe;
}
console.log("Todas las edades: " + edades);
console.log("Edades Repetidas: "+repetidos(edades));
console.log("-------------------------EJERCICIO 7-------------------------");
//ejercicio7
function color1(){
	var myColor = ["Red", "Green", "White", "Black"];
	console.log("colores: \"" + myColor.join("\",\"") +"\"" );
	return myColor;
}
color1();