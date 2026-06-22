/*const v8= require("v8");

const variableJulian = {
    nombre: "Javascript",
    version: 2026,

};
const tamano = v8.serialize(variableJulian).length;
console.log(`El tamaño de la variable es: ${tamano} bytes`);

if("true"){
    var edad = 30;
    console.log(edad);
}
if(true){
    let nombre = "Julian";
    console.log(nombre);
}
const PI = 3.1416;
console.log(PI);

console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof PI); 

booleano = "true"
console.log(typeof booleano);*/

/*let edad = 15;
if(edad<=12){
    console.log("Eres un niño");
}else if(edad > 12 && edad < 18){
    console.log("Eres un adolescente");
}
else if(edad >= 18){
    console.log("Eres un adulto");
}else if(edad >= 65){
    console.log("Eres un adulto mayor");
}

//Operador ternario
const rango =edad  >= 1&& edad < 13 ? "Eres un niño" : 
edad >= 13 && edad < 18 ? "Eres un adolescente" :
edad >= 18 && edad < 65 ? "Eres un adulto" :
edad >= 65 ? "Eres un adulto mayor" : "Edad no válida";
console.log(rango);*/

const rol= "admin" ? permiso="Total"  : "No eres un administrador"
rol==="editor" ? permiso="lectura y escritura" : "No eres un editor"
rol==="viewer" ? permiso="Solo lectura" : "Sin acceso"

switch(rol){
    case "admin":
        permiso = "Total";
        break;
    case "editor":
        permiso = "lectura y escritura";
        break;
    case "viewer":
        permiso = "Solo lectura";
        break;
    default:
        permiso = "Sin acceso";
}

/*const dias = "lunes";
var dia;

switch(dias){
    case "lunes":
        dia = "lunes";
        break;
    case "martes":        
        dia = "martes";
        break;  
    case "miercoles":        
        dia = "miercoles";
        break;
    case "jueves":        
        dia = "jueves";
        break;
    case "viernes":        
        dia = "viernes";
        break;
    case "sabado":        
        dia = "sabado";
        break;
    case "domingo":        
        dia = "domingo";
        break;
    default:        
        dia = "Día no válido";
}   

console.log(dia); // Imprimirá: lunes*/