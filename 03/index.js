
// exercício 03 - Carrinho de um e-commerce

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        { id: 1, nome: "Camisa", qtd: 3, precoUnit: 3000 },
        { id: 2, nome: "Bermuda", qtd: 2, precoUnit: 5000 }
    ]
};


function formatarMoeda(centavos) {
    return `R$ ${(centavos / 100).toFixed(2).replace('.', ',')}`;
}

// Calcula dos itens
function calcularTotalDeItens(carrinho) {
    return carrinho.produtos.reduce((total, produto) => total + produto.qtd, 0);
}

// calcula o total a pagar 
function calcularTotalAPagar(carrinho) {
    return carrinho.produtos.reduce(
        (total, produto) => total + produto.qtd * produto.precoUnit,
        0
    );
}

// Imprime o resumo do carrinho
function imprimirResumoDoCarrinho(carrinho) {
    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: ${formatarMoeda(totalAPagar)}`);
}

// Adiciona produto ao carrinho
function addProdutoAoCarrinho(carrinho, produto) {
    const produtoExistente = carrinho.produtos.find(p => p.id === produto.id);
    if (produtoExistente) {
        produtoExistente.qtd += produto.qtd;
    } else {
        carrinho.produtos.push(produto);
    }
}


function imprimirDetalhes(carrinho) {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log();

    carrinho.produtos.forEach((produto, index) => {
        const totalProduto = produto.qtd * produto.precoUnit;
        console.log(
            `Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - ${formatarMoeda(totalProduto)}`
        );
    });

    console.log();
    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: ${formatarMoeda(totalAPagar)}`);
}

// Calcula o desconto
function calcularDesconto(carrinho) {
    // Se o carrinho estiver vazio, não há desconto
    if (carrinho.produtos.length === 0) {
        return 0;
    }

    const totalItens = calcularTotalDeItens(carrinho);
    const totalAPagar = calcularTotalAPagar(carrinho);
    let desconto = 0;

    // Desconto 1: acima de 4 itens, o item mais barato (uma unidade) sai de graça
    if (totalItens > 4) {
        const precos = carrinho.produtos.map(p => p.precoUnit);
        const menorPrecoUnit = Math.min(...precos);
        desconto = Math.max(desconto, menorPrecoUnit);
    }

    // Desconto 2: acima de R$ 100,00, 10% de desconto
    if (totalAPagar > 10000) {
        const desconto10 = Math.floor(totalAPagar / 10);
        desconto = Math.max(desconto, desconto10);
    }

    return desconto;
}


// Testes


console.log("--- Teste inicial ---");
imprimirResumoDoCarrinho(carrinho);
// Saída esperada:
// Cliente: Guido Bernal
// Total de itens: 5 itens
// Total a pagar: R$ 190,00

console.log("\n--- Detalhes do carrinho original (ordem de inserção) ---");
imprimirDetalhes(carrinho);
// Saída com a correção:
// Cliente: Guido Bernal
//
// Item 1 - Camisa - 3 und - R$ 90,00
// Item 2 - Bermuda - 2 und - R$ 100,00
//
// Total de itens: 5 itens
// Total a pagar: R$ 190,00

console.log("\n--- Adicionando nova bermuda ---");
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};
addProdutoAoCarrinho(carrinho, novaBermuda);
imprimirResumoDoCarrinho(carrinho);
console.log(`Desconto: ${formatarMoeda(calcularDesconto(carrinho))}`);
// Saída esperada:
// Cliente: Guido Bernal
// Total de itens: 8 itens
// Total a pagar: R$ 340,00
// Desconto: R$ 34,00

console.log("\n--- Adicionando novo tênis ---");
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};
addProdutoAoCarrinho(carrinho, novoTenis);
imprimirResumoDoCarrinho(carrinho);
console.log(`Desconto: ${formatarMoeda(calcularDesconto(carrinho))}`);
// saída esperada:
// Cliente: Guido Bernal
// total de itens: 9 itens
// Total a pagar: R$ 440,00
// desconto: R$ 44,00