async function listaProdutos() {
    
    const conexao = await fetch("http://localhost:3000/Produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/Produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//FUNÇÃO DE EXCLUIR PRODUTO
async function excluiProduto(id) {
    const conexao = await fetch(`http://localhost:3000/Produtos/${id}`, {
        method: "DELETE",
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível excluir o ");
    }
}

// Exportação das funções
export const conectaApi = {
    listaProdutos,
    criaProduto,
    excluiProduto
};