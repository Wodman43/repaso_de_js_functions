
// const ola = document.getElementById('busca');
// const ola2 = document.getElementById('buscar');
// ola.addEventListener('input', (e) =>{
//     console.log(e.target.value);s
// })


// Ejercicio 2
function hacer(){
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const fecha = document.getElementById('fecha').value;
   
    
    const enviar = {cedula,nombre,apellido,correo,fecha};

    if(fecha <= '2005-08-02'){
        alert('Eres mayor de edad');
        return enviar;
    }
    else{
        alert('Eres menor de edad')
    }

    // console.log(cedula.value);
    // console.log(nombre.value);
    // console.log(apellido.value);
    // console.log(correo.value);
    // console.log(fecha.value);
    // console.log(placa.value);
    // console.log(cilindraje.value);

}

function moto (){
    const placa = document.getElementById('placa').value;
    const cilindraje = document.getElementById('cilindraje').value;
    const moto = {placa,cilindraje};
    return moto;
}


const form = document.getElementById('cargar');

form.addEventListener('submit',main);

function main (e){
    e.preventDefault();
    const recibomotoviajero = hacer();
    const recibomoto = moto();
    const mostrar = document.getElementById('mostrar');
    mostrar.innerHTML = `<h1>Datos Del Motoviajero</h1>
    <br>
    <ul> <li>Cedula: ${recibomotoviajero.cedula}</li> 
    <li> Nombre: ${recibomotoviajero.nombre} </li> 
    <li>Apellido: ${recibomotoviajero.apellido}</li> 
     <li> Correo:  ${recibomotoviajero.correo}</li>  
     <li>Fecha:  ${recibomotoviajero.fecha}</li> 
   
        </ul>
        <br>
        <h1>Datos De La Moto</h1>
        <br>
        <ul>
        <li> Placa: ${recibomoto.placa}</li> 
        <li> Cilindraje: ${recibomoto.cilindraje} </li>
        </ul>
        `
    // console.log(recibomotoviajero);
    // console.log(recibomoto);

    console.log(`Cedula: ${recibomotoviajero.cedula}`);
    console.log(`Nombre: ${recibomotoviajero.nombre}`);
    console.log(`Apellido: ${recibomotoviajero.apellido}`);
    console.log(`Correo: ${recibomotoviajero.correo}`);
    console.log(`Fecha: ${recibomotoviajero.fecha}`);
    console.log(`Placa: ${recibomoto.placa}`);
    console.log(`Cilindraje: ${recibomoto.cilindraje}`);
}

//hasta aqui ejercicio2


localStorage.setItem('Nombre', 'Alvaro Lopez');
localStorage.setItem('Materias', 'Matematicas');
sessionStorage.setItem('Profesor',' yecid Pardo');

