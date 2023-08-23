const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');



let tweets = [];

// Aqui voy a crear los listeners
eventlisteners();

function eventlisteners(){
    formulario.addEventListener('submit', agregartweet);   

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearhtml();
    })
   

}
// aqui van las funciones 

function agregartweet(e){
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);
    if(tweet === ''){
        // alert('no puede estar vacio');
        mostrarerror('Este campo No puede estar vacio');
        return;
    }
   
    const tweetobj = {
        id: Date.now(),
        tweet : tweet
    }

    tweets = [...tweets, tweetobj];
 
    console.log(tweets);
    crearhtml();
    formulario.reset();

}   

function mostrarerror(error){
    const mensajeerror = document.createElement('p');
    mensajeerror.textContent = error;
    mensajeerror.classList.add('error');

    const contenido =document.getElementById('contenido');
    contenido.appendChild(mensajeerror);
    setTimeout(()=> {
        mensajeerror.remove();}, 500);
    

}

function crearhtml(){ limpiarhtml();

    if(tweets.length > 0){
        tweets.forEach((tweet) =>{
            const botonborrar = document.createElement('a');
            botonborrar.classList= 'borrar-tweet';
            botonborrar.innerText = 'Eliminar';
            botonborrar.onclick = () => {
                borrartweet(tweet.id);
            }
            const li = document.createElement('li');
            li.textContent = tweet.tweet;
            listatweets.appendChild(li);
            li.appendChild(botonborrar);
        })
    }
    agregarstorage();

}

function borrartweet(id){
    console.log('Eliminando',id)
    tweets = tweets.filter(tweet => tweet.id!==id);
    crearhtml();
}

function limpiarhtml(){
    while (listatweets.firstChild){
        listatweets.removeChild(listatweets.firstChild);
    }
}


function agregarstorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

