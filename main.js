class Fotografia {
    constructor(nombre, precio, duracion) {
      this.nombre = nombre;
      this.precio = precio;
      this.duracion = duracion;
      this.ocupado = false;
    }
  
    fechaOcupada() {
      this.ocupado = true;
    }
  }
  
  const eventos = [];
  
  eventos.push(new Fotografia("casamiento", 20000, "6hs"));
  eventos.push(new Fotografia("cumpleaño", 20000, "6hs"));
  eventos.push(new Fotografia("producto", 10000, "2hs"));
  eventos.push(new Fotografia("recital", 18000, "4hs"));
  eventos.push(new Fotografia("emprendimiento", 12000, "2hs"));
  eventos.push(new Fotografia("video", 18000, "3hs"));
  
  let nombre = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (CASAMIENTO, CUMPLEAÑO, PRODUCTO, RECITAL, EMPRENDIMIENTO o VIDEO). En caso de que quieras cerrar la ventana escriba: 'esc'").toLowerCase();

  while (nombre != "esc") {
    const servicio = eventos.find((item) => item.nombre === nombre);    
  
    if (servicio) {
      let mensaje = `
      El servicio seleccionado tiene las siguientes características.
        Categoría: ${servicio.nombre.toUpperCase()} 
        Precio: ${servicio.precio}
        Duración: ${servicio.duracion}
      `;
  
      alert(mensaje);
    } else {
      alert("El servicio ingresado es incorrecto");
    }
 
    nombre = prompt("Ingrese el tipo de servicio de fotografía que quiere relizar (CASAMIENTO, CUMPLEAÑO, PRODUCTO, RECITAL, EMPRENDIMIENTO o VIDEO). En caso de que quieras cerrar la ventana escriba: 'esc'").toLowerCase();
  }
