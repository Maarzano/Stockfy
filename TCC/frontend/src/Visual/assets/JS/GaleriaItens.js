async function carregarItens() {
    try {
        const resposta = await fetch('http://localhost:8080/v1/Items');
        const itens = await resposta.json();
        const container = document.getElementById('container-itens');
        const placeholder = document.getElementById('placeholder');

        container.innerHTML = '';

        if (itens.length === 0) {
            placeholder.style.display = 'block';
        } else {
            placeholder.style.display = 'none';

            itens.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card-item');

                const imagem = item.imagem ? item.imagem : 'assets/images/sem-imagem.png';

                card.innerHTML = `
                    <img src="${imagem}" alt="${item.nomeItem}">
                    <h3>${item.nomeItem}</h3>
                    <p>${item.descricao || 'Sem descrição'}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                `;

                container.appendChild(card);
            });
        }
    } catch (erro) {
        console.error("Erro ao carregar itens:", erro);
        alert("Erro ao carregar itens do estoque.");
    }
}

document.addEventListener('DOMContentLoaded', carregarItens);
