import { NUMEROS } from './numeros.js';

const NOMES_CANAIS = [
    "Suporte Principal",
    "Atendimento Rápido",
    "Canal VIP",
    "Suporte Premium",
    "Atendimento Express",
    "Canal Direto",
    "Suporte 24h",
    "Canal Prioritário",
    "Atendimento Gold",
    "Canal Executivo"
];

const DESCRICOES = [
    "Resposta garantida em minutos. Equipe dedicada ao seu atendimento.",
    "Atendimento ágil e eficiente. Tire suas dúvidas rapidamente.",
    "Acesso exclusivo para melhor experiência. Atendimento personalizado.",
    "Suporte especializado disponível. Qualidade premium garantida.",
    "Atendimento expresso sem filas. Resolução imediata de problemas.",
    "Conexão direta com nossa equipe. Comunicação sem intermediários.",
    "Disponível a qualquer hora. Estamos sempre prontos para ajudar.",
    "Prioridade no atendimento. Seu tempo é valioso para nós.",
    "Atendimento diferenciado. Experiência gold em cada interação.",
    "Canal executivo de alto nível. Soluções profissionais e rápidas."
];

function criarPosts() {
    const postsContainer = document.getElementById('postsContainer');

    NUMEROS.forEach((numero, index) => {
        const post = document.createElement('div');
        post.className = 'post';
        post.style.animationDelay = `${0.5 + (index * 0.1)}s`;

        post.innerHTML = `
            <div class="post-header">
                <div class="post-icon">💬</div>
                <div class="post-info">
                    <div class="post-title">${NOMES_CANAIS[index]}</div>
                    <div class="post-meta">Online agora</div>
                </div>
            </div>
            <div class="post-content">
                ${DESCRICOES[index]}
            </div>
            <div class="post-action">
                <span class="action-text">Iniciar conversa</span>
                <span class="action-arrow">→</span>
            </div>
        `;

        post.addEventListener('click', () => iniciarRedirecionamento(numero));
        postsContainer.appendChild(post);
    });
}

function iniciarRedirecionamento(numero) {
    const redirectNotice = document.getElementById('redirectNotice');
    const redirectText = document.getElementById('redirectText');
    const progressFill = document.getElementById('progressFill');

    redirectNotice.classList.add('active');

    let segundos = 5;
    progressFill.style.width = '100%';

    const intervalo = setInterval(() => {
        segundos--;
        redirectText.textContent = `Redirecionando em ${segundos} segundo${segundos !== 1 ? 's' : ''}`;
        progressFill.style.width = `${(segundos / 5) * 100}%`;

        if (segundos <= 0) {
            clearInterval(intervalo);
            window.location.href = `https://wa.me/${numero}`;
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', criarPosts);
