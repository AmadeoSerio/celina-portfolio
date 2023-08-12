/*

let casamiento = 20000;
let cumpleaños = 20000;
let producto = 10000;
let recitales = 18000;
let emprendimiento = 12000;
let video = 18000;

// WHILE QUE FUNCIONA EN EL LIVE SERVER ¡¡SÓLO EN LA PESTAÑA DE DE CONTACTO!! Lo hice con IF pero
// queda más ordenado con el while. Debajo dejé comentado el IF de todas maneras.

let pedidoDeTrabajo = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (casamiento, cumpleaños, producto, recitales, emprendimiento)").toLowerCase();

while (pedidoDeTrabajo != "esc") {
    switch (pedidoDeTrabajo) {
        case "casamiento":
            alert(`este servicio tiene un valor de: ${casamiento}`);
            break;

        case "cumpleaños":
            alert(`este servicio tiene un valor de: ${cumpleaños}`);
            break;

        case "producto":
            alert(`este servicio tiene un valor de: ${producto}`);
            break;

        case "recitales":
            alert(`este servicio tiene un valor de: ${recitales}`);
            break;

        case "emprendimiento":
            alert(`este servicio tiene un valor de: ${emprendimiento}`);
            break;

        case "video":
            alert(`este servicio tiene un valor de: ${video}`);
            break;

        default:
            alert(`el servicio solicitado no existe, intente de nuevo`);
            break;
    }
    pedidoDeTrabajo = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (casamiento, cumpleaños, producto, recitales, emprendimiento)").toLowerCase();
}

*/

// CONDICIONAL QUE FUNCIONA EN EL LIVE SERVER ¡¡SÓLO EN LA PESTAÑA DE DE CONTACTO!!

/*
if (pedidoDeTrabajo === "casamiento") {
    alert(`este servicio tiene un valor de: ${casamiento}`);
}
else if (pedidoDeTrabajo === "cumpleaños") {
    alert(`este servicio tiene un valor de: ${cumpleaños}`);
}
else if (pedidoDeTrabajo === "producto") {
    alert(`este servicio tiene un valor de: ${producto}`);
}
else if (pedidoDeTrabajo === "recitales") {
    alert(`este servicio tiene un valor de: ${recitales}`);
}
else if (pedidoDeTrabajo === "emprendimiento") {
    alert(`este servicio tiene un valor de: ${emprendimiento}`);
}
else {
    alert(`el servicio solicitado no existe, intente de nuevo`);
}*/



/*
// FUNCIÓN PARA SUMAR SERVICIOS DE FOTOGRAFÍAS  *****RECORDAR COMENTAR EL WHILE PARA QUE FUNCIONE*****
function sumar(num1, num2) {
    return num1 + num2;
}
let resultado = sumar(recitales, video);

console.log(resultado);


// FUNCIÓN PARA CALCULAR UN SERVICIO CON VIDEO, la idea sería que el porcentaje siempre sea del video para la promo
// a un 75% de su valor + 1000 mil de descuento.
let promo = 1000;

const suma = (servicio1, video) => (servicio1 + video);
const resta = (servicio1, promo) => (servicio1 - promo);
const portcentaje = (video) => video * 0.75;

// Sólo hay que modificar donde dice suma acá debajo por el servicio deseado para calcular.
let precioFinal = resta(suma(recitales, portcentaje(video)), promo);
console.log(precioFinal);

*/

class Fotografia {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.vendido = false;
    }
  
    fechaOcupada() {
      this.vendido = true;
    }
  }
  
  const eventos = [];
  
  eventos.push(new Fotografia("casamiento", 20000));
  eventos.push(new Fotografia("cumpleaño", 20000));
  eventos.push(new Fotografia("producto", 10000));
  eventos.push(new Fotografia("recital", 18000));
  eventos.push(new Fotografia("emprendimiento", 12000));
  eventos.push(new Fotografia("video", 18000));
  
  let nombre = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (casamiento, cumpleaño, producto, recital, emprendimiento o video). En caso de que quieras cerrar la ventana escriba: 'esc'").toLowerCase();
  

  while (nombre != "esc") {
    const servicio = eventos.find((item) => item.nombre === nombre);
    
  
    if (servicio) {
      let mensaje = `
        Nombre: ${servicio.nombre}
        Precio: ${servicio.precio}
      `;
  
      alert(mensaje);
    } else {
      alert("El servicio ingresado es incorrecto");
    }
 
    nombre = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (casamiento, cumpleaño, producto, recital, emprendimiento o video). En caso de que quieras cerrar la ventana escriba: 'esc'");
  }

      /*
    const filtrado = eventos.filter((item) => item.precio > precio);
     filtrado.forEach((servicio) => {
       let mensaje =  `
       Nombre: ${servicio.nombre}
       Precio: ${servicio.precio}
     `;
     alert(mensaje);
     }  
     )
*/
//ESTÁ HECHO CON UN FOR
  // while (nombre != "esc") {
  //   let servicio;
  
  //   for (const item of eventos) {
  //     if (item.nombre === nombre) {
  //       servicio = item;
  //     }
  //   }
  
  //   if (servicio) {
  //     let mensaje = `
  //       Nombre: ${servicio.nombre}
  //       Precio: ${servicio.precio}
  //     `;
  
  //     alert(mensaje);
  //   } else {
  //     alert("No hay fecha para realizar el trabajo");
  //   }
  
  //   nombre = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (casamiento, cumpleaños, producto, recitales, emprendimiento o videos). En caso de que quieras cerrar la ventana escriba: 'esc'");
  // }