import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const produto = document.querySelector("[data-produto]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    try {
        await conectaApi.criaProduto(produto, preco, imagem);

    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento))