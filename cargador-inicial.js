const txtOcultar = "visibility:hidden;display:none";
const divWrap = document.getElementById("fullwrap");
divWrap.style.cssText += txtOcultar;

const elHeader = document.querySelector("header.main_header");
elHeader.style.cssText += txtOcultar;

const divForm = document.createElement("div");
divForm.classList.add("content");
const formulario = document.createElement("form");
const txtKey = document.createElement("input");
txtKey.setAttribute("name", "key");
formulario.appendChild(txtKey);
const hdnGenre = document.createElement("input");
hdnGenre.setAttribute("name", "genre");
hdnGenre.type = "hidden";
const hdKeyword = document.createElement("input");
hdKeyword.setAttribute("name", "keyword");
hdKeyword.value = "title";
hdKeyword.type = "hidden";
formulario.appendChild(hdnGenre);
formulario.appendChild(hdKeyword);
divForm.appendChild(formulario);
document.body.appendChild(divForm);

const  handlerClick = async (evt) => {
    console.log("clickado");
    const data = new FormData(formulario);
    const res = await fetch("/buscar/serie/", {
        method: "POST",
        body: data
    });
    console.log("RES", await res.text());
}


const btn = document.createElement("button");
btn.setAttribute("value", "enviar");
btn.addEventListener("click",handlerClick );
btn.innerText = "Enviar";
document.body.appendChild(btn);




