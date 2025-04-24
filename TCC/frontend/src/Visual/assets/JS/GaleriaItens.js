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
            
                const descricaoCompleta = item.descricao || 'Sem descrição';
                const descricaoCurta = descricaoCompleta.length > 100 
                    ? descricaoCompleta.substring(0, 100) + '...'
                    : descricaoCompleta;
                
                card.innerHTML = `
                    <img src="${imagem}" alt="${item.nomeItem}">
                    <h3>${item.nomeItem}</h3>
                    <p class="descricao" data-completa="${item.descricao || 'Sem descrição'}">${(item.descricao || 'Sem descrição').slice(0, 20)}...</p>
                    <button class="btn-toggle-descricao">Ler mais</button>
                    <p>Quantidade: ${item.quantidade}</p>
                `;
                
            
                container.appendChild(card);
            });
            
        }
        document.querySelectorAll('.btn-toggle-descricao').forEach(botao => {
            botao.addEventListener('click', () => {
                const descricao = botao.previousElementSibling;
                const textoCompleto = descricao.getAttribute('data-completa');
        
                if (botao.textContent === 'Ler mais') {
                    descricao.textContent = textoCompleto;
                    botao.textContent = 'Ler menos';
                } else {
                    descricao.textContent = textoCompleto.slice(0, 20) + '...';
                    botao.textContent = 'Ler mais';
                }
            });
        });
        

    } catch (erro) {
        console.error("Erro ao carregar itens:", erro);
        alert("Erro ao carregar itens do estoque.");
    }
}

document.addEventListener('DOMContentLoaded', carregarItens);
