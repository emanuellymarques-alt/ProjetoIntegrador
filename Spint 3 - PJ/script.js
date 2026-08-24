
// 1. Dados dos Produtos baseados no site Entre Flores
const produtos = [
  {
    id: 1,
    nome: 'Doze Razões de Amor',
    preco: 149.90,
    img: 'img/rosa1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> 12 Rosas vermelhas naturais selecionadas, folhagens de eucalipto e laço especial de cetim branco.'
  },
  {
    id: 2,
    nome: 'Doce Encanto',
    preco: 119.90,
    img: 'img/rosa5.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Rosas cor rosa, papel kraft e laço de cetim.'
  },
  {
    id: 3,
    nome: 'Paixão Carmesim',
    preco: 95.00,
    img: 'img/rosa3.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> 6 Rosas vermelhas carmesim de botão aberto, folhagem verde e embalagem minimalista.'
  },
  {
    id: 4,
    nome: 'Sinfonia de Tons',
    preco: 160.00,
    img: 'img/rosa4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Mix de rosas em tons pastéis (rosa bebê, chá e pink), gipsofila e acabamento em seda.'
  },
  {
    id: 5,
    nome: 'Raio de Sol',
    preco: 190,
    img: 'img/test gira1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sol Dourado<br><strong>Itens:</strong> 12 girassóis naturais selecionados, folhagens de eucalipto e acabamento em papel kraft com laço especial.'
  },
  {
    id: 6,
    nome: 'Ametista Imperial',
    preco: 119.90,
    img: 'img/lirio4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Lírios rosas naturais selecionados, folhagens verdes e acabamento refinado.'
  },
  {
    id: 7,
    nome: 'Jardim Colorido',
    preco: 95.00,
    img: 'img/marga3.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> Mix de flores do campo naturais em tons vibrantes (margaridas, crisântemos e pompons), folhagens verdes e acabamento refinado com laço especial.'
  },
  {
    id: 8,
    nome: 'Luar de Marfim',
    preco: 160.00,
    img: 'img/lirio2.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Lírios brancos naturais selecionados, alstroemérias brancas, folhagens verdes, embalagem em papel kraft e acabamento refinado com laço especial de cetim vermelho.'
  },
  

];

// 1. Dados dos Produtos baseados no site Entre Flores
const produtos2 = [
  {
    id: 13,
    nome: 'Cesta Promessa Rubi',
    preco: 149.90,
    img: 'img/cesta1.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> 12 Rosas vermelhas naturais, urso de pelúcia, chocolates selecionados, folhagens verdes e cesta decorativa com acabamento refinado.'
  },
  {
    id: 14,
    nome: 'Cesta Doçura Celestial',
    preco: 119.90,
    img: 'img/cesta2.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Rosas naturais, chocolates Ferrero Rocher, folhagens verdes e cesta decorativa com laço especial.'
  },
  {
    id: 15,
    nome: 'Cesta Majestosa',
    preco: 95.00,
    img: 'img/cesta4.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong>Arranjo floral natural, chocolates selecionados, folhagens verdes e cesta decorativa com laço especial'
  },
  {
    id: 16,
    nome: 'Cesta Aurora Serena',
    preco: 160.00,
    img: 'img/cesta5.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Flores naturais, chocolates, biscoitos, suco, café e cesta decorativa com acabamento refinado.'
  },
  {
    id: 17,
    nome: 'Cesta Eterno Abraço',
    preco: 190,
    img: 'img/cesta6.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> Urso de pelúcia, chocolates selecionados, e cesta decorativa com laço especial.'
  },
  {
    id: 18,
    nome: 'Cesta Reserva de Safira',
    preco: 119.90,
    img: 'img/cesta7.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Orquídea natural, vinho especial, chocolates selecionados, folhagens ornamentais e cesta decorativa com acabamento refinado.'
  },
  {
    id: 19,
    nome: 'Cesta Brisa Dourada',
    preco: 95.00,
    img: 'img/ddm1 test.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong> Arranjo de flores secas naturais, bolo de chocolate, geleia artesanal, biscoitos amanteigados, torradas, suco especial e cesta de vime com acabamento refinado em laço de cetim.'
  },
  {
    id: 20,
    nome: 'Rosas e Vinho Premium',
    preco: 160.00,
    img: 'img/c4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Combinação de vinho, rosas vermelhas e chocolates, envolvida com embalagem elegante e cesta.'
  }


];

// 1. Dados dos Produtos baseados no site Entre Flores
const produtos3 = [
  {
    id: 21,
    nome: 'Buquê Horizonte Azul',
    preco: 149.90,
    img: 'img/casamento1.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> Hortênsias brancas e azul-claro, eucalipto fresco e acabamento refinado com laço especial.'
  },
  {
    id: 22,
    nome: 'Buquê Ametista Nupcial',
    preco: 119.90,
    img: 'img/casamento2.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Gestos de Carinho<br><strong>Itens:</strong> Lisianthus e rosas em tons de lilás e roxo, folhagens delicadas e acabamento elegante com laço de cetim.'
  },
  {
    id: 23,
    nome: 'Buquê Promessa Branca',
    preco: 95.00,
    img: 'img/casamento3.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Sentimentos Intensos<br><strong>Itens:</strong>Rosas brancas naturais, mosquitinho fresco, folhagens verdes e acabamento clássico com laço especial.'
  },
  {
    id: 24,
    nome: 'Buquê Pérola Imperial',
    preco: 160.00,
    img: 'img/casamento5.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Orquídeas brancas naturais, folhagens elegantes e acabamento luxuoso com laço de cetim refinado.'
  },
  {
    id: 25,
    nome: 'Buquê Memórias Eternas',
    preco: 190,
    img: 'img/cas1.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Romance Eterno<br><strong>Itens:</strong> Rosas brancas naturais selecionadas, folhagens verdes e acabamento delicado.'
  },
  {
    id: 26,
    nome: 'Buquê Brisa de Hortênsias',
    preco: 119.90,
    img: 'img/casamento06.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Elegância Nupcial<br><strong>Itens:</strong> Hortênsias brancas, rosas brancas, folhagens verdes e laço de cetim branco.'
  },
  {
    id: 27,
    nome: 'Buquê Romance',
    preco: 95.00,
    img: 'img/casamento07.jpg',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Elegância Nupcial <br><strong>Itens:</strong> Rosas champagne, eucalipto, folhagens naturais e laço de cetim champagne.'
  },
  {
    id: 28,
    nome: 'Buquê Harmonia Branca',
    preco: 160.00,
    img: 'img/cas4.png',
    descricao: '<strong>Marca:</strong> ENTRE FLORES<br><strong>Coleção:</strong> Harmonia e Brisa<br><strong>Itens:</strong> Rosas brancas naturais, astromélias brancas, folhagens verdes e acabamento com laço em fita.'
  }


];




const todosProdutos = [...produtos];
let carrinho = [];
let descontoAtivo = 0;
let tipoDesconto = '';

// 2. Renderizar Produtos
// Renderizar Produtos agrupados de 4 em 4 no Carrossel
function renderizarProdutos(lista = produtos) {
  const container = document.getElementById('produtos-container');
  const container2 = document.getElementById('produtos-container2');

  let htmlCarrossel = '';

  // Agrupa os produtos de 4 em 4
  for (let i = 0; i < lista.length; i += 4) {
    // Define o primeiro slide como ativo
    const classeAtiva = (i === 0) ? 'active' : '';

    htmlCarrossel += `
      <div class="carousel-item ${classeAtiva}">
        <div class="row g-4 justify-content-center px-4">
    `;

    // Pega até 4 produtos para o slide atual
    for (let j = i; j < i + 4 && j < produtos.length; j++) {
      const prod = lista[j];
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



function renderizarProdutos2(lista2 = produtos2) {
  const container2 = document.getElementById('produtos-container2');

  let htmlCarrossel = '';

  // Agrupa os produtos de 4 em 4
  for (let i = 0; i < lista2.length; i += 4) {
    // Define o primeiro slide como ativo
    const classeAtiva = (i === 0) ? 'active' : '';

    htmlCarrossel += `
      <div class="carousel-item ${classeAtiva}">
        <div class="row g-4 justify-content-center px-4">
    `;

    // Pega até 4 produtos para o slide atual
    for (let j = i; j < i + 4 && j < produtos2.length; j++) {
      const prod2 = lista2[j];
      htmlCarrossel += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card card-produto shadow-sm">
            <img src="${prod2.img}" class="card-img-top" alt="${prod2.nome}">
            <div class="card-body d-flex flex-column text-center">
              <h5 class="card-title fw-bold">${prod2.nome}</h5>
              <p class="preco my-1">R$ ${prod2.preco.toFixed(2).replace('.', ',')}</p>
              <button class="btn btn-ef w-100 my-2" onclick="adicionarAoCarrinho(${prod2.id})">
                <i class="bi bi-bag-plus me-1"></i> Comprar
              </button>
              <p class="descricao">
                ${prod2.descricao}
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

  container2.innerHTML = htmlCarrossel;

}

function renderizarProdutos3(lista3 = produtos3) {
  const container3 = document.getElementById('produtos-container3');

  let htmlCarrossel = '';

  // Agrupa os produtos de 4 em 4
  for (let i = 0; i < lista3.length; i += 4) {
    // Define o primeiro slide como ativo
    const classeAtiva = (i === 0) ? 'active' : '';

    htmlCarrossel += `
      <div class="carousel-item ${classeAtiva}">
        <div class="row g-4 justify-content-center px-4">
    `;

    // Pega até 4 produtos para o slide atual
    for (let j = i; j < i + 4 && j < produtos3.length; j++) {
      const prod3 = lista3[j];
      htmlCarrossel += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card card-produto shadow-sm">
            <img src="${prod3.img}" class="card-img-top" alt="${prod3.nome}">
            <div class="card-body d-flex flex-column text-center">
              <h5 class="card-title fw-bold">${prod3.nome}</h5>
              <p class="preco my-1">R$ ${prod3.preco.toFixed(2).replace('.', ',')}</p>
              <button class="btn btn-ef w-100 my-2" onclick="adicionarAoCarrinho(${prod3.id})">
                <i class="bi bi-bag-plus me-1"></i> Comprar
              </button>
              <p class="descricao">
                ${prod3.descricao}
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

  container3.innerHTML = htmlCarrossel;

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
// Inicialização
renderizarProdutos();
renderizarProdutos2();
renderizarProdutos3();

const pesquisa = document.getElementById("campoPesquisa");

pesquisa.addEventListener("input", function () {
  const texto = this.value.toLowerCase().trim();

  const filtrados = todosProdutos.filter(produto =>
    produto.nome.toLowerCase().includes(texto)
  );

  renderizarProdutos(filtrados);
});  
