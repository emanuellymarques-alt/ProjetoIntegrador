
        // 1. Dados dos Produtos baseados no site Entre Flores
const produtos = [
  { 
    id: 1, 
    nome: 'Buquê Doze Razões', 
    preco: 149.90, 
    img: 'img/rosa1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> 12 Rosas vermelhas naturais selecionadas, folhagens de eucalipto e laço especial de cetim branco.'
  },
  { 
    id: 2, 
    nome: 'Buquê Jardim de Afeto', 
    preco: 119.90, 
    img: 'img/rosa2.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Rosas coloridas (vermelhas, rosa e brancas), gipsofila, papel kraft e laço de cetim.'
  },
  { 
    id: 3, 
    nome: 'Buquê Paixão Carmesim', 
    preco: 95.00, 
    img: 'img/rosa3.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> 6 Rosas vermelhas carmesim de botão aberto, folhagem verde e embalagem minimalista.'
  },
  { 
    id: 4, 
    nome: 'Buquê Sinfonia de Tons', 
    preco: 160.00, 
    img: 'img/rosa4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Mix de rosas em tons pastéis (rosa bebê, chá e pink), gipsofila e acabamento em seda.'
  },
   { 
    id: 5, 
    nome: 'Buquê Doze Razões', 
    preco: 190, 
    img: 'img/cas1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> 12 Rosas vermelhas naturais selecionadas, folhagens de eucalipto e laço especial de cetim branco.'
  },
  { 
    id: 6, 
    nome: 'Buquê Jardim de Afeto', 
    preco: 119.90, 
    img: 'img/cas2.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Rosas coloridas (vermelhas, rosa e brancas), gipsofila, papel kraft e laço de cetim.'
  },
  { 
    id: 7, 
    nome: 'Buquê Paixão Carmesim', 
    preco: 95.00, 
    img: 'img/cas3.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> 6 Rosas vermelhas carmesim de botão aberto, folhagem verde e embalagem minimalista.'
  },
  { 
    id: 8, 
    nome: 'Buquê Sinfonia de Tons', 
    preco: 160.00, 
    img: 'img/cas4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Mix de rosas em tons pastéis (rosa bebê, chá e pink), gipsofila e acabamento em seda.'
  },
   { 
    id: 9, 
    nome: 'Buquê Doze Razões', 
    preco: 149.90, 
    img: 'img/gira1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> 12 Rosas vermelhas naturais selecionadas, folhagens de eucalipto e laço especial de cetim branco.'
  },
  { 
    id: 10, 
    nome: 'Buquê Jardim de Afeto', 
    preco: 119.90, 
    img: 'img/gira2.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Rosas coloridas (vermelhas, rosa e brancas), gipsofila, papel kraft e laço de cetim.'
  },
  { 
    id: 11, 
    nome: 'Buquê Paixão Carmesim', 
    preco: 95.00, 
    img: 'img/gira3.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> 6 Rosas vermelhas carmesim de botão aberto, folhagem verde e embalagem minimalista.'
  },
  { 
    id: 12, 
    nome: 'Buquê Sinfonia de Tons', 
    preco: 160.00, 
    img: 'img/tulipa.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Mix de rosas em tons pastéis (rosa bebê, chá e pink), gipsofila e acabamento em seda.'
  },
];
        let carrinho = [];
        let descontoAtivo = 0;
        let tipoDesconto = '';

        // 2. Renderizar Produtos
        // Renderizar Produtos agrupados de 4 em 4 no Carrossel
function renderizarProdutos() {
  const container = document.getElementById('produtos-container');
  let htmlCarrossel = '';

  // Agrupa os produtos de 4 em 4
  for (let i = 0; i < produtos.length; i += 4) {
    // Define o primeiro slide como ativo
    const classeAtiva = (i === 0) ? 'active' : '';

    htmlCarrossel += `
      <div class="carousel-item ${classeAtiva}">
        <div class="row g-4 justify-content-center px-4">
    `;

    // Pega até 4 produtos para o slide atual
    for (let j = i; j < i + 4 && j < produtos.length; j++) {
      const prod = produtos[j];
      htmlCarrossel += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card card-produto shadow-sm">
            <img src="${prod.img}" class="card-img-top" alt="${prod.nome}">
            <div class="card-body d-flex flex-column text-center">
              <h5 class="card-title fw-bold">${prod.nome}</h5>
              <p class="preco my-1">R$ ${prod.preco.toFixed(2).replace('.', ',')}</p>
              <button class="btn btn-ef w-100 my-2" onclick="adicionarAoCarrinho(${prod.id})">
                <i class="bi bi-bag-plus me-1"></i> Comprar
              </button>
              <p class="descricao">
                ${prod.descricao}
              </p>
            </div>
          </div>
        </div>
      `;
    }

    htmlCarrossel += `
        </div>
      </div>
    `;
  }

  container.innerHTML = htmlCarrossel;
}

        // 3. Adicionar item ao carrinho
        function adicionarAoCarrinho(idProduto) {
            let produtoEncontrado = null;
            for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].id === idProduto) {
                    produtoEncontrado = produtos[i];
                    break;
                }
            }

            let itemNoCarrinho = null;
            for (let i = 0; i < carrinho.length; i++) {
                if (carrinho[i].id === idProduto) {
                    itemNoCarrinho = carrinho[i];
                    break;
                }
            }

            if (itemNoCarrinho) {
                itemNoCarrinho.qtd += 1;
            } else {
                carrinho.push({
                    id: produtoEncontrado.id,
                    nome: produtoEncontrado.nome,
                    preco: produtoEncontrado.preco,
                    qtd: 1
                });
            }

            animarBotaoCarrinho();
            atualizarCarrinho();
        }

        // 4. Animação no Ícone Flutuante
        function animarBotaoCarrinho() {
            const btn = document.getElementById('btn-carrinho-flutuante');
            btn.classList.add('animar-carrinho');

            setTimeout(function () {
                btn.classList.remove('animar-carrinho');
            }, 400);
        }

        // 5. Alterar Quantidade
        function alterarQuantidade(idProduto, delta) {
            for (let i = 0; i < carrinho.length; i++) {
                if (carrinho[i].id === idProduto) {
                    carrinho[i].qtd += delta;

                    if (carrinho[i].qtd <= 0) {
                        removerDoCarrinho(idProduto);
                        return;
                    }
                    break;
                }
            }
            atualizarCarrinho();
        }

        // 6. Remover Item
        function removerDoCarrinho(idProduto) {
            const novoCarrinho = [];
            for (let i = 0; i < carrinho.length; i++) {
                if (carrinho[i].id !== idProduto) {
                    novoCarrinho.push(carrinho[i]);
                }
            }
            carrinho = novoCarrinho;
            atualizarCarrinho();
        }

        // 7. Aplicar Cupom
        function aplicarCupom() {
            const inputCupom = document.getElementById('cupom-input');
            const mensagemCupom = document.getElementById('cupom-mensagem');
            const codigo = inputCupom.value.trim().toUpperCase();

            if (codigo === 'FLORES10') {
                descontoAtivo = 10;
                tipoDesconto = 'porcentagem';
                mensagemCupom.className = 'form-text text-success fw-bold';
                mensagemCupom.textContent = 'Cupom de 10% aplicado!';
            } else if (codigo === 'FRETEGRATIS') {
                descontoAtivo = 15;
                tipoDesconto = 'fixo';
                mensagemCupom.className = 'form-text text-success fw-bold';
                mensagemCupom.textContent = 'Desconto de R$ 15,00 aplicado!';
            } else if (codigo === '') {
                descontoAtivo = 0;
                tipoDesconto = '';
                mensagemCupom.textContent = '';
            } else {
                descontoAtivo = 0;
                tipoDesconto = '';
                mensagemCupom.className = 'form-text text-danger';
                mensagemCupom.textContent = 'Cupom inválido!';
            }

            atualizarCarrinho();
        }

        // 8. Atualizar Carrinho
        function atualizarCarrinho() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartTotal = document.getElementById('cart-total');
            const cartDesconto = document.getElementById('cart-desconto');
            const linhaDesconto = document.getElementById('linha-desconto');

            let totalQtd = 0;
            for (let i = 0; i < carrinho.length; i++) {
                totalQtd += carrinho[i].qtd;
            }
            cartCount.textContent = totalQtd;

            if (carrinho.length === 0) {
                cartItemsContainer.innerHTML = '<li class="list-group-item text-center text-muted py-4 bg-transparent border-0">Seu carrinho está vazio.</li>';
                cartSubtotal.textContent = 'R$ 0,00';
                cartTotal.textContent = 'R$ 0,00';
                linhaDesconto.style.setProperty('display', 'none', 'important');
                return;
            }

            let htmlCarrinho = '';
            let subtotalPreco = 0;

            for (let i = 0; i < carrinho.length; i++) {
                const item = carrinho[i];
                const itemTotal = item.preco * item.qtd;
                subtotalPreco += itemTotal;

                htmlCarrinho += `
          <li class="list-group-item bg-transparent px-0 py-3 border-bottom">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="fw-bold text-dark">${item.nome}</span>
              <button class="btn btn-sm text-danger p-0 border-0" onclick="removerDoCarrinho(${item.id})">
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group btn-group-sm" role="group">
                <button type="button" class="btn btn-outline-secondary" onclick="alterarQuantidade(${item.id}, -1)">-</button>
                <span class="btn btn-outline-secondary disabled text-dark fw-bold px-3">${item.qtd}</span>
                <button type="button" class="btn btn-outline-secondary" onclick="alterarQuantidade(${item.id}, 1)">+</button>
              </div>
              <span class="fw-bold text-dark">R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
            </div>
          </li>
        `;
            }

            cartItemsContainer.innerHTML = htmlCarrinho;

            let valorDesconto = 0;
            if (tipoDesconto === 'porcentagem') {
                valorDesconto = (subtotalPreco * descontoAtivo) / 100;
            } else if (tipoDesconto === 'fixo') {
                valorDesconto = descontoAtivo;
            }

            if (valorDesconto > subtotalPreco) {
                valorDesconto = subtotalPreco;
            }

            const valorFinal = subtotalPreco - valorDesconto;

            cartSubtotal.textContent = `R$ ${subtotalPreco.toFixed(2).replace('.', ',')}`;

            if (valorDesconto > 0) {
                linhaDesconto.style.setProperty('display', 'flex', 'important');
                cartDesconto.textContent = `- R$ ${valorDesconto.toFixed(2).replace('.', ',')}`;
            } else {
                linhaDesconto.style.setProperty('display', 'none', 'important');
            }

            cartTotal.textContent = `R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
        }

        // 9. Finalizar Compra
        function finalizarCompra() {
            if (carrinho.length === 0) {
                alert("Adicione pelo menos um buquê ao carrinho!");
                return;
            }
            alert("Pedido realizado com sucesso na Entre Flores!");
            carrinho = [];
            descontoAtivo = 0;
            tipoDesconto = '';
            document.getElementById('cupom-input').value = '';
            document.getElementById('cupom-mensagem').textContent = '';
            atualizarCarrinho();
        }

        // Inicialização
        renderizarProdutos();
