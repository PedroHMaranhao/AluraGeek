import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "card__container";
    produto.innerHTML = 
    `<div class="card__item">
        <img class="card__produto__imagem" src="${imagem}" alt="produto">
        <p>${nome}</p>
        <div class ="card__produto__detalhes">
            <p>${preco}</p>
            <button class="btn-excluir" data-id="${id}">Excluir</button>
        </div>
    </div>`;

    // Adiciona o evento de clique para o botão de excluir
    produto.querySelector(".btn-excluir").addEventListener("click", () => {
        excluirProduto(id, produto);
    });

    return produto;
}

async function listarProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)
        ));
    } catch {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h3>`;
    }
}

async function excluirProduto(id, produto) {
    try {
        await conectaApi.excluiProduto(id);
        lista.removeChild(produto);
    } catch (e) {
        alert("Não foi possível excluir o produto.");
    }
}

listarProdutos();