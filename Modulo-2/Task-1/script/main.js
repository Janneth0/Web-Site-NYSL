//                          PRIMERA ENTREGA
//JavaScript Basics
//Escribir con variables y asignarles valor.
var myName ="Janneth";
var age=20;
var ignasiAge =34;
var ageDiff= ignasiAge-age;
//Imprimir Variable
console.log("Starting javascript...");
console.log("-------------------------EJERCICIO 1-------------------------");
console.log("My name is: "+ myName);  //Ejercicio1
console.log("-------------------------EJERCICIO 2-------------------------");
console.log("My age is: "+age);     //Ejercicio2
console.log("-------------------------EJERCICIO 3-------------------------");
console.log("Age difference: "+ageDiff); //Ejercicio3
//Escribir código con condicionales.
console.log("-------------------------EJERCICIO 4-------------------------");
//Ejercicio4
if (age > 21) {
  console.log(myName,`with ${age} is older than 21`);
}
else {
  console.log(myName,`with ${age} is not older than 21`);
}
console.log("-------------------------EJERCICIO 5-------------------------");
//Ejercicio5
if (age > ignasiAge) {
  console.log("Ignasi is younger than you");
}
else if(age<ignasiAge)  {
  console.log("Ignasi is older than you");
}
else{
  console.log("You have the same age as Ignasi");
}




//                                SEGUNDA ENTREGA


console.log("-------------------------EJERCICIO 1-------------------------");
//Ejercicio1
var nombres = ["Victoria","Andrea","Yennyfer","Nicole", "Flor","Rodrigo","Nadine","Luz","Macarena", "Janneth", "Branko"];
nombres.sort();
console.log("Nombres ordenados: ",nombres);
console.log("Primer nombre: "+nombres [0]);
console.log("Ultimo nombre: "+nombres [nombres.length-1]);
console.log("Nombres impresos en pantalla con FOR")
for(var i=0;i<nombres.length;i++){
  console.log(nombres [i])
}
console.log("-------------------------EJERCICIO 2-------------------------");
//Ejercico2
var edades= [19, 21, 19, 18, 19, 26, 24,23,22,20,32,24];
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
  }
  /*else{
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

console.log("-------------------------EJERCICIO 4-------------------------");
//Ejercicio4
function getmayor(edades) {
	var mayor=edades[0];
	for(var i=0;i<edades.length;i++){
	  if(edades[i]>=mayor){
		mayor=edades[i];
	  }  
	}
	  return mayor;
  }
  console.log("Edades: "+ edades);
  console.log("El mayor es " + getmayor(edades));

console.log("-------------------------EJERCICIO 5-NRO EJ-------------------------");
//Ejercicio 5
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
console.log(array)
function position(matriz,indx){
	if(indx<matriz.length){//condicion para verificar si existe un numero para al indice
	console.log(`El Nro ${matriz[indx]} esta en la posicion `+ indx);
	}
	else{
		console.log("No hay valor para el indice "+indx)
	}
}

position(array,index);
console.log("-------------------------EJERCICIO 5-Visto en CLASES-------------------------");
function buscarindx(array,index){
	console.log(array[index-1]);
}
console.log(array);
buscarindx(array,1);

console.log("-------------------------EJERCICIO 5-Array Edades-------------------------");

//ejercicio5
var index=20;
function indedad(edades,index) {
	var valor=0;
  if(index<edades.length){//condicion para verificar si existe un numero para al indice
		valor=edades[index];
  }else{
		valor="no hay valor";
	}
	return valor;
}
console.log("Todas las edades: " + edades);
console.log("Indice: "+ index);
console.log("El numero en el indice es: " + indedad(edades,index)  );
console.log("-------------------------EJERCICIO 6-------------------------");
//ejercicio6
function getrepetido(arrays){
  var arrayaux=[];
	console.log("array: "+arrays);
  for(var i=0 ; i<arrays.length ; i++){
    var valor=arrays[i];
    for(var j=i+1;j<arrays.length;j++){
      if(valor==arrays[j]){
        arrayaux.push(valor);
        console.log(`El numero ${valor} se repite`);
      }
    }
  }
	console.log(arrayaux)
  return arrayaux; 
}
getrepetido(array);


console.log("-------------------------EJERCICIO 6.1-------------------------");
function repetidos(edades){
	var repe=[];
	var agregado=0;
	for(var i=0; i<edades.length ; i++){
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
	console.log(repe)
return repe;
}
console.log("Todas las edades: " + edades);
console.log("Edades Repetidas: "+repetidos(edades));

console.log("-------------------------EJERCICIO 7------------------------");
//Ejercicio 7
var myColor = ["Red", "Green", "White", "Black"];
function color(color){
	var colores="";
	for(var i=0; i<color.length ; i++){
		if(i!=color.length-1){
			colores += `"${color[i]}",`;
		}else if(i==color.length-1){
			colores += `"${color[i]}"`;
		}
	}
	console.log(colores);
	return colores
}
color(myColor);

console.log("-------------------------EJERCICIO 7.1-------------------------");
//ejercicio7 otra manera
function color1(colors){
	console.log(colors);
	console.log("colores: \"" + colors.join("\",\"") +"\"" );
	
	return colors;
}
color1(myColor);
console.log("-------------------------EJERCICIO 7.2-Visto en Clase------------------------");
function color2(array){
	return array.toString();
}
console.log(color2(myColor));
function arrayColor2(array){
	var frase="";
	for(var i=0;i<array.length;i++){
		frase +='"';
		frase += array[i];
		frase +='"';
		if(i<array.length-1){
			frase +=',';
		}
	}return frase;
}
console.log(arrayColor2(myColor));
//                         TERCERA ENTREGA

//ejercicio 1                 
console.log("-------------------------EJERCICIO 1-------------------------");

function invertir() {
	var x=32443;
	var cadena=""
	console.log(x);
	cadena=""+x;
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
var cadena="webmaster";	
function ordenar(cadena) {
	var letras=cadena.split("");
	letras.sort();
	console.log("la cadena es: "+ cadena);
return letras;
}
console.log("cadena invertida: "+ ordenar(cadena));
console.log("-------------------------EJERCICIO 2.1-------------------------");
//Ejercicio 2
function ordstring(cadena){
	var letras=cadena.split("");
	var n_Cadena_orden="";
	letras.sort();
	for(var i=0;i<letras.length;i++){
		n_Cadena_orden=n_Cadena_orden+letras[i];
	}
	console.log(letras);
	console.log(`'${n_Cadena_orden}'`);

	return n_Cadena_orden;
}
ordstring(cadena);
console.log("-------------------------EJERCICIO 3-------------------------");
//ejercicio3
function convertir(){
	var cadena="prince of persia";
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
	var oracion="Web Development Tutorial";
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


