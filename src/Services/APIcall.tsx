import {useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import md5 from 'md5';








// Llave  Publica
const publicKey ='1cce2dd0f26a2ee7853817014d1d35e2';
// Llave privada
const privateKey ='e73b818c048b80e597dfed16e6795e279cd23e57';
const time = Number(new Date());
// hash Funcion 
const hash = md5(time + privateKey + publicKey)
//





const APIcall = () => {
    let counter = 0;
    let page = counter;
      // useState de conteo
    const [conteo, setConteo] = useState(page);//useState #1
      // funcion que incrementa el counter 
    const incrementCounter =() => {
     if (conteo < 1560) {
        setConteo(conteo + 20)
     } 
    };
    // funcion que decrementa el counter
    const decrementCounter =() => {
     if(conteo > 0){
        setConteo(conteo - 20)
     }
    }
    

    const [characters, setList] = useState([]);//useState #2
    useEffect(() => {
        console.log('La funcion api se esta renderizando')
      axios
      .get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${conteo}`,
      )
        .then((response) => {
          setList(response.data.data.results);
          ;
        })
        
        .catch((error) => {
          console.log(error);
        });
    },[conteo]);
     
  
    
    return (
    <div className="bagroung-image  App">
    

      <div className="selector">
      <div id="Next">
        <button  onClick={incrementCounter} className="Next">Siguente-Pagina</button>
      </div>
  
      <div id="previus">
        <button onClick={decrementCounter} className="previus">Pagina-Anterior</button>
      </div>
      </div>
  
  
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className=" pb-2 pt-1 rounded-2xl bg-stone-900 text-center text-2xl font-bold tracking-tight text-gray-200">Personajes de  Marvel</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {characters.map((character) => (
              <div key={character['id']} className="group relative max-w-sm">
                <div className=" h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`}
                    alt='imagen de los personajes'
                    className=" h-full w-full object-fill object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className=" bg-stone-900 text-center rounded-b-lg ">
                  <div className='text-center'>
                    <h1 className="text-center text-sm text-gray-50">
                      <div className='text-center font-bold text-2xl'>
                        <span aria-hidden="true" className=" text-center absolute inset-0 " />
                        {character['name']}
                      </div>
                    </h1>
                    <p className="pb-3.5 mr-3.5 ml-3.5 text-center mt-1 text-sm text-gray-50">{character['description']}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
}

export default APIcall