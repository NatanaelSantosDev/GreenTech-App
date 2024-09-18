var id = parseInt(localStorage.getItem('detalhe'));

var produtos = JSON.parse(localStorage.getItem('produtos'));

var item = produtos.find(produto => produto.id === id);

if (item) {
    console.log('produto Encontrado', item);

    $("#imagem-detalhe").attr('src', item.imagem);
    $("#nome-detalhe").html(item.nome);
    $("#rating-detalhe").html(item.rating);
    $("#like-detalhe").html(item.likes);
    $("#reviews-detalhe").html(item.reviews + ' reviews');
    $("#descricao-detalhe").html(item.descricao);
    $("#preco-detalhe").html(item.preco);
    $("#precopromo-detalhe").html(item.preco_promocional);

    var tableDetalhes = $("#tabdetalhes");

    item.detalhes.forEach(detalhe => {
        var linha = `<tr>
        <td>${detalhe.caracteristica}</td>
        <td>${detalhe.detalhes}</td>
        </tr> `;

        tableDetalhes.append(linha);

    });
    
} else {
    console.log('Produto não encontrado', item);
}