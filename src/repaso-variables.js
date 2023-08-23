// const nom = prompt('escribe tu nombre');
// const apell = prompt('escribe tu Apellidos');

//  const usuario = `Bienvenido ${nom}, ${apell}`;
//  console.log(usuario);       

// function saluda (nom,apell){

//     return `hola ${nom} ${apell}`

// }

// console.log(saluda(nom,apell));

// Objetos

// const materia = {
//     nombre: 'codigo',
//     profesor: 'Javier',
//     intensidad: '10 horas',
// }

// console.table(materia);

// const materia2 = {...materia};s
// materia2.nombre = 'javascript';
// materia2.profesor = 'Yecid';
// materia2.intensidad = '30 horas';	
// console.table(materia2);

// Arrays

// const arreglo = new Array(10);

// arreglo.push(2);
// console.log(arreglo);

// const materias =['Html', 'JSON', 'String', 'Number', 'Boolean', 'Date'];

// console.table(materias);

// const materia1 = ['ciencias','Español','Matematicas'];
// console.table(materia1);
// let profesores =[...materias];

// profesores[0] = 'Ciencias';
// profesores[3] = 'Español';

// console.table(profesores);

// const numeros = [1,2,3,4,5,6,7,8,9];

// let numero = [...numeros];

// const num = numeros.map(function(numeros){return numeros*2});
// console.table(num);

// function Inicosesion(nombre){
// return `Bienvenido ${nombre}`;
// }

// function recibir(){
//     const hola = Inicosesion('alvaro');
//     console.log(hola);
// }
// recibir();

// const getusu = (nombre)=> ({ uid: 'ABC687',username: nombre});

// const usuarioacti = getusu('alvaro');

// console.table(usuarioacti);  

// const estudiante = {
//     nombre:'Alvaro',
//     apellido: 'Lopez',
//     ficha: '2556678',
//     edad:'18 años',
//     programa: 'Adso'
// }

// // console.log(estudiante.nombre+" "+estudiante.apellido+" "+estudiante.ficha);


// const retornaaprendiz = ({nombre,apellido,ficha})=> (console.log(nombre+" "+apellido+" "+ficha));

// retornaaprendiz(estudiante);
// const motero = {
//     nombre:'Alvaro',
//     apellido: 'Lopez',
//     placa: '2556678',
//     edad:'18 años',
//     detalles : {
//         ciudad: 'popayan',
//         direccion:'la rejoya'
//     }
  
// }

// const retornamotero = ({nombre,apellido,placa,marca = 'yamaha',detalles:{ciudad}})=> (console.log(nombre+" "+apellido+" "+placa+" "+marca+" "+ciudad));

// retornamotero(motero);

// const arrray = [];

// arrray.push('hola','mar');
// console.log(arrray[1]);



// const arreglo = ['uno','dos','tres'];

// const arregloret = ([uno,dos])=>(console.log(uno,dos));

// arregloret(arreglo);

// const usestate = (nombre)=>{
//     return [nombre, ()=> {console.log('El usuario esta activo');}]
// }

// const [nombre,setnombre] = usestate('alvaro');

// console.log(nombre);

// setnombre();

// const usestate2 = (nombre2)=> ([nombre2,()=>{console.log('El usuario esta activo');}]);

// const [recibo,otro] = usestate2('alvaro');

// console.log(recibo);
// otro();


// Eventos Con El mouse 

// const div = document.getElementById('escucha');

// div.addEventListener('click', ()=>{
//     console.log('porque me tocas')
// });

// div.addEventListener('mouseover', ()=>{
//     console.log('porque me tocas')
// });


//Ejercicio 1

// document.addEventListener('DOMContentLoaded', (event)=>{
//     event.preventDefault();
//     const inicia = document.getElementById('iniciosesion');
// inicia.addEventListener('submit',(event)=>{

//     event.preventDefault();
//     // alert('Bienvenido Ramdom');
//     document.body.style.backgroundColor = 'yellow';

//     const usu = document.getElementById('correo').value;
//     const contra = document.getElementById('contra').value;
    

//     if (usu === 'alvaro10@gmail.com' && contra === '12345678'){
    
//     alert('Bienvenido ALVARO');
//     document.body.style.backgroundColor = 'blue';
//     }
//     else if (usu === 'admin10@gmail.com' && contra === '12345678'){
//         alert('Bienvenido ADMIN');
//         document.body.style.backgroundColor = 'red';
//     }
    // else if (contra.length < 8){
    //     alert('Maximo 8 caracteres');
    // }
    // else if (usu && contra){
    //     alert('Bienvenido Ramdom');x 
    //     document.body.style.backgroundColor = 'yellow';
    // }
    
//     });
// });

// Hasta aqui Ejercicio1

let nombre = 'alvaro';
let apellido = 'lopez';

(
    function(){
        console.log(nombre,apellido);
    }
)();