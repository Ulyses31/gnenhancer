

const handleClickResultado = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("handleClickResultado", "tagName", evt.target.tagName);
    if(evt.target.tagName != "a" && evt.target.tagName != "A"){
        return;
    }
    const href = evt.target.href;
    window.location = href;
}

const parser = new DOMParser();

const  handlerClickBusqueda = async (evt) => {
    console.log("clickado");
    const data = new FormData(formulario);
    const res = await fetch("/buscar/serie/", {
        method: "POST",
        body: data
    });
    const rawText = await res.text();
    const parseado = parser.parseFromString(rawText, "text/html");
    const result = parseado.querySelector("ul.results");
    panel.appendChild(result);
    document.removeEventListener("click", document);
    panel.addEventListener("click", handleClickResultado);
    // const a =  result.getElementsByTagName("a")[0];
    // let url =  a.href;
    // window.location = url;
}

const construirInterfaz = () => {
    const txtOcultar = "visibility:hidden;display:none";

document.removeEventListener("click", document);

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

const panel = document.createElement("div");
panel.setAttribute("id", "panel");
document.body.appendChild(panel);

const btn = document.createElement("button");
btn.setAttribute("value", "enviar");
btn.addEventListener("click",handlerClickBusqueda );
btn.innerText = "Enviar";
document.body.appendChild(btn);

return {panel, formulario}

}


const {panel, formulario} = construirInterfaz();



