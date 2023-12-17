'use strict'

let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 
alert(week);
//Eliminar el día domingo del inicio de la lista.
alert( week.shift() );
alert( week );
//Agregar el día lunes al inicio de la lista.
week.unshift('Monday');  //negro, azul, blanco
alert( week );
//Agregar el día domingo al final de la lista.
week.push("Sunday"); 
alert(week);
//Insertar el día viernes en la posición correspondiente.
week.splice(4,0,'Friday');
alert(week);
//Mostrar en pantalla de elemento en elemento usando un for.
for (let wek of week) {
    alert( wek );
  }