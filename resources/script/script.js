async function load() {
    const REQUEST = await fetch("https://www.onepieceapi.com/api/devil-fruits");
    return await REQUEST.json();
}

let dados = await load();

console.log(dados);

let body = document.querySelector("body");

body.innerHTML = '<div class="container"></div>';

let container = document.querySelector(".container");

dados.forEach(element => {

    container.innerHTML += `
        <div class="fruta">
            <h3>${element.name.en}</h3>
            <p>Fruta do tipo ${element.type}</p>
            <img src="${element.image_url}">
        </div>
    `;

});