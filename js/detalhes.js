var id = parseInt(localStorage.getItem('detalhe'));

var produtos = JSON.parse(localStorage.getItem('produtos'));

var item = produtos.find(produto => produto.id === id);

if (item) {
    console.log('produto Encontrado', item);
} else {
    console.log('Produto não encontrado', item);
}