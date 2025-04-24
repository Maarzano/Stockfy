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
                const descricaoResumida = descricaoCompleta.length > 40 
                    ? descricaoCompleta.substring(0, 40) + '...'
                    : descricaoCompleta;

                // Criação do conteúdo do card
                const imagemElem = document.createElement('img');
                imagemElem.src = imagem;
                imagemElem.alt = item.nomeItem;

                const titulo = document.createElement('h3');
                titulo.textContent = item.nomeItem;

                const descricao = document.createElement('p');
                descricao.classList.add('descricao');
                descricao.setAttribute('data-completa', descricaoCompleta);
                descricao.textContent = descricaoResumida;

                const quantidade = document.createElement('p');
                quantidade.textContent = `Quantidade: ${item.quantidade}`;

                card.appendChild(imagemElem);
                card.appendChild(titulo);
                card.appendChild(descricao);

                // Adiciona o botão "Ler mais" se necessário
                if (descricaoCompleta.length > 40) {
                    const botao = document.createElement('button');
                    botao.classList.add('btn-toggle-descricao');
                    botao.textContent = 'Ler mais';
                    botao.addEventListener('click', () => {
                        const textoCompleto = descricao.getAttribute('data-completa');
                        if (botao.textContent === 'Ler mais') {
                            descricao.textContent = textoCompleto;
                            botao.textContent = 'Ler menos';
                        } else {
                            descricao.textContent = textoCompleto.substring(0, 40) + '...';
                            botao.textContent = 'Ler mais';
                        }
                    });
                    card.appendChild(botao);
                }

                card.appendChild(quantidade);
                container.appendChild(card);
            });
        }

    } catch (erro) {
        console.error("Erro ao carregar itens:", erro);
        alert("Erro ao carregar itens do estoque.");
    }
}

document.addEventListener('DOMContentLoaded', carregarItens);
