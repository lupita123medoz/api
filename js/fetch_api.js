"use strict"
const btnTXT=document.querySelector("#btn_txt");
const btnJSON=document.querySelector("#btn_json");
const btnAPI=document.querySelector("#btn_api");
const lblResultado=document.querySelector("#resultado");
//Crear los eventos, para cargar los datos del archivo de texto
btnTXT.addEventListener("click", function(e){
    e.preventDefault();
    const url="data/datos.txt";
    fetch(url)
    .then(respuesta=> {
        console.clear();
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.statusText);
        console.log(respuesta.url);
        console.log(respuesta.type);
        return respuesta.text()
    })
    .then(personas => lblResultado.innerHTML = personas)
    .catch(error => console.log(error))
});
//Crear los eventos, para cargar los datos del archivo de texto
btnJSON.addEventListener("click", function (e){
    e.preventDefault();
    fetch("data/empleados.json")
    .then(res => {
        return res.json()
    })
    .then(personas => {
        console.clear();
        console.log(personas);
        let lista = "<ul>";
        personas.forEach(personas =>{
            const {nombre, puesto, empresa} = personas
            lista +=`
            <li><b>Nombre:</b> ${nombre}, <b>puesto:</b> ${puesto},
            <b>empresa:</b> ${empresa}</li>
            `;
        });
        lista += "<ul>";
        lblResultado.innerHTML = lista;
    }).catch(error => console.log(error))
});
//para cargar los datos de una REST API
btnAPI.addEventListener("click", function (e){
    e.preventDefault();
    fetch("https://picsum.photos/list")
    .then(res => res.json())
    .then(imagenes => {
        let lista ="<ul>";
        imagenes.forEach(imagen =>{
            lista +=`
            <li>
            <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
            <b>Autor:</b> ${imagen.author}
            </li>
            `;
        });
        lista += "</ul>";
        lblResultado.innerHTML = lista;
    })
    .catch(error => console.log(error));
});