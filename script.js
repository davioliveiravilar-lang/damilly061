try {
    const CONFIG = window.CONFIG;

    const app = document.getElementById('app');
        
        // --------------------------------------------------------
        // RENDERIZAÇÃO DO CONTEÚDO
        // --------------------------------------------------------

        // Função auxiliar para gerar seções
        const createSection = (id, classes, content) => {
            return `<section id="${id}" class="${classes}">${content}</section>`;
        };

        let html = '';

        // 1. TELA DE ABERTURA
        html += createSection('abertura', 'hero', `
            <div class="hero-content reveal">
                <h1>Nossa História</h1>
                <p class="date" style="margin-bottom: 5px;">4 anos de nós ❤️</p>
                <p class="hero-names">DV & DY</p>
                <p class="date">${CONFIG.geral.dataInicioFormatada}</p>
                <button id="btn-start" class="btn-primary">Começar nossa história</button>
            </div>
        `);

        // 2. ANTES DE TUDO
        html += createSection('antes-de-tudo', 'reveal', `
            <div class="centered-block">
                <h2 class="section-title">Antes de sermos nós</h2>
                <p class="story-text">${CONFIG.antesDeTudo.texto}</p>
                <br>
                <p class="story-quote">Quando finalmente criei coragem para te contar o que sentia, eu realmente achei que daria certo. Mas, por algum motivo, as coisas não aconteceram como imaginávamos. Hoje, acreditamos que aquele período foi necessário para que pudéssemos amadurecer e entender melhor o que sentíamos. Mesmo ficando um tempo longe, Deus continuou guiando nossos caminhos. E, no fundo, eu sempre tive a sensação de que, de alguma forma, você voltaria para a minha vida.</p>
            </div>
        `);

        // 2.5 A DECISÃO
        html += createSection('a-decisao', 'reveal', `
            <div class="centered-block">
                <h2 class="section-title">A decisão</h2>
                <p class="timeline-date">Em algum dia de 06 de outubro a 23 de outubro</p>
                <p class="story-text">${CONFIG.aDecisao.texto}</p>
            </div>
        `);

        // 3. PRIMEIRA FOTO JUNTOS
        html += createSection('primeira-foto', 'reveal', `
            <div class="centered-block">
                <h2 class="section-title">A primeira foto juntos</h2>
                <p class="timeline-date" style="font-size: 1.2rem; margin-bottom: 20px;">${CONFIG.primeiraFoto.data}</p>
                <p class="story-text" style="margin-bottom: 30px;">${CONFIG.primeiraFoto.historia}</p>
                <p class="story-quote" style="margin-bottom: 40px;">Talvez naquela época a gente nem imaginasse o quanto essa foto se tornaria importante.</p>
                <img src="${CONFIG.primeiraFoto.foto}" alt="Primeira foto juntos" class="zoomable vintage-photo" style="width: 100%; max-width: 400px; border-radius: var(--radius); box-shadow: var(--shadow-soft); margin: 0 auto;">
            </div>
        `);

        // 4. O DIA DO PEDIDO
        html += createSection('pedido', 'reveal', `
            <div class="centered-block">
                <h2 class="section-title">O dia em que começou oficialmente o nosso nós</h2>
                <p class="timeline-date" style="font-size: 1.2rem; margin-bottom: 20px;">${CONFIG.pedidoNamoro.data}</p>
                <p class="story-text" style="margin-bottom: 40px;">${CONFIG.pedidoNamoro.texto}</p>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <img src="${CONFIG.pedidoNamoro.fotos[0]}" alt="O Pedido 1" class="zoomable" style="width: 100%; max-width: 45%; border-radius: var(--radius); box-shadow: var(--shadow-soft);">
                    <img src="${CONFIG.pedidoNamoro.fotos[1]}" alt="O Pedido 2" class="zoomable" style="width: 100%; max-width: 45%; border-radius: var(--radius); box-shadow: var(--shadow-soft);">
                </div>
            </div>
        `);



        // 7. PRIMEIRO ANIVERSÁRIO (2023)
        html += createSection('aniversario-1', 'reveal', `
            <h2 class="section-title">2023</h2>
            <h3 style="margin-bottom: 20px;">365 dias. 52 semanas. 12 meses.</h3>
            <p style="font-size: 1.5rem; color: var(--color-accent); font-family: var(--font-heading);">Uma história que estava apenas começando.</p>
            <br>
            <p style="max-width: 800px; margin: 0 auto; text-align: left;">${CONFIG.aniversario1Ano.resumo}</p>
            <div class="gallery" style="margin-top: 40px; column-count: 3;">
                ${CONFIG.aniversario1Ano.fotos.map(f => `<div class="gallery-item"><img src="${f}" class="zoomable"></div>`).join('')}
            </div>
        `);

        // 10. SEGUNDO ANIVERSÁRIO (2024)
        html += createSection('aniversario-2', 'reveal', `
            <h2 class="section-title">2024</h2>
            <h3 style="margin-bottom: 30px;">730 dias juntos.</h3>
            <p style="max-width: 800px; margin: 0 auto; text-align: left;">${CONFIG.aniversario2Anos.resumo}</p>
            <div class="gallery" style="margin-top: 40px; column-count: 3;">
                ${CONFIG.aniversario2Anos.fotos.map(f => `<div class="gallery-item"><img src="${f}" class="zoomable"></div>`).join('')}
            </div>
        `);

        // 13. TERCEIRO ANIVERSÁRIO (2025)
        html += createSection('aniversario-3', 'reveal', `
            <h2 class="section-title">2025</h2>
            <h3 style="margin-bottom: 30px;">1.095 dias.</h3>
            <p style="max-width: 800px; margin: 0 auto; text-align: left;">${CONFIG.aniversario3Anos.resumo}</p>
            <div class="gallery" style="margin-top: 40px; column-count: 3;">
                ${CONFIG.aniversario3Anos.fotos.map(f => `<div class="gallery-item"><img src="${f}" class="zoomable"></div>`).join('')}
            </div>
        `);



        // 16. 4 ANOS
        html += createSection('quatro-anos', 'reveal', `
            <h2 class="section-title" style="font-size: 4rem;">4 ANOS</h2>
            <h3 style="font-size: 2rem; margin: 20px 0;">1.460 dias.</h3>
            <div style="max-width: 800px; margin: 40px auto; text-align: left; font-size: 1.2rem; line-height: 1.8;">
                <p>E então chegamos ao nosso quarto ano juntos. O ano que estamos vivendo agora e, sem dúvida, um dos mais especiais de toda a nossa história.</p><br>
                <p>Hoje, nossa relação é simplesmente inexplicável. A nossa conexão, a forma como nos entendemos, como cuidamos um do outro e como conseguimos estar bem juntos é algo que eu nunca encontrei em nenhum outro lugar. Parece que fomos feitos para nos encontrar.</p><br>
                <p>Agora somos adultos, amadurecemos e aprendemos muito com tudo o que vivemos. Olho para nós hoje e vejo o quanto crescemos desde aquelas duas crianças que tinham medo de contar o que sentiam. Passamos por dificuldades, aprendemos com nossos erros, mudamos e, acima de tudo, continuamos escolhendo um ao outro.</p><br>
                <p>Eu amo você cada dia mais. Amo a pessoa que você é, a pessoa que se tornou e tudo aquilo que ainda vamos viver juntos. Você é minha futura esposa, meu lar, meu porto seguro e a pessoa com quem eu quero compartilhar a vida.</p><br>
                <p>Depois de tudo que vivemos, de todas as fases que passamos e de tudo que aprendemos juntos, eu só consigo ter mais certeza de que é com você que quero continuar. Ainda temos tantos lugares para conhecer, tantos momentos para viver, tantos sonhos para realizar e tantos capítulos para escrever.</p><br>
                <p>E se esses quatro anos já nos deram uma história tão bonita, eu mal consigo imaginar tudo o que ainda vamos construir. Porque a nossa história não termina aqui. Na verdade, depois de tudo que já vivemos, sinto que estamos apenas começando a viver a parte mais bonita dela: o nosso futuro, juntos.</p>
            </div>
        `);

        // 17. MOMENTOS IMPORTANTES
        let galeriaFotos = CONFIG.muralDeMemorias.map(f => `
            <div class="gallery-item"><img src="${f}" class="zoomable"></div>
        `).join('');
        
        html += createSection('mural', 'reveal', `
            <h2 class="section-title">Momentos</h2>
            <div class="gallery">
                ${galeriaFotos}
            </div>
        `);

        // 18. PEQUENAS COISAS QUE AMO
        let coisasCards = CONFIG.coisasQueAmo.map(c => `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>${c.titulo}</h3>
                    </div>
                    <div class="flip-card-back">
                        <p>${c.texto}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        html += createSection('amo-voce', 'reveal', `
            <h2 class="section-title">Talvez você nem perceba, mas...</h2>
            <p style="margin-bottom: 40px;">(Clique nos cards)</p>
            <div class="cards-grid">
                ${coisasCards}
            </div>
        `);



        // 20. NOSSOS LUGARES
        let lugaresCards = CONFIG.nossosLugares.map(l => `
            <div class="split-section" style="margin-bottom: 40px; background: var(--color-white); padding: 20px; border-radius: var(--radius); box-shadow: var(--shadow-soft);">
                <div class="split-image">
                    <img src="${l.foto}" class="zoomable">
                </div>
                <div class="split-content">
                    <h3>${l.nome}</h3>
                    ${l.data ? `<p class="timeline-date">${l.data}</p>` : ''}
                    <p>${l.historia}</p>
                </div>
            </div>
        `).join('');
        
        html += createSection('lugares', 'reveal', `
            <h2 class="section-title">Nosso lugar favorito</h2>
            <div style="width: 100%;">
                ${lugaresCards}
            </div>
        `);

        // 21. CONTADOR
        html += createSection('contador', 'reveal', `
            <h2 class="section-title">Nossa História em Números</h2>
            <div class="counter-box" id="counter-box">
                <!-- Renderizado via JS dinâmico -->
            </div>
            <p style="margin-top: 30px; font-style: italic; font-size: 1.2rem;">"E contando..."</p>
        `);



        // 23 & 24. FUTURO
        let futuroCards = CONFIG.futuro.map(f => `
            <div class="flip-card" style="height: 200px;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="background: var(--color-pink-soft);">
                        <h3 style="font-size: 1.2rem;">${f.titulo}</h3>
                    </div>
                    <div class="flip-card-back" style="${f.foto ? `background-image: url('${f.foto}'); background-size: cover; background-position: center; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);` : `background: var(--color-gold);`}">
                        <p style="position: relative; z-index: 2; font-size: 1.2rem;">${f.texto}</p>
                        ${f.foto ? '<div style="position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.4); border-radius: var(--radius); z-index: 1;"></div>' : ''}
                    </div>
                </div>
            </div>
        `).join('');

        html += createSection('futuro', 'reveal', `
            <h2 class="section-title">Capítulos que ainda não escrevemos</h2>
            <div class="cards-grid" style="margin-bottom: 60px;">
                ${futuroCards}
            </div>

        `);

        // 25. DECLARAÇÃO FINAL
        html += createSection('final', 'reveal', `
            <div style="max-width: 600px; margin: 0 auto; line-height: 2.5; font-size: 1.4rem;">
                <p class="reveal">4 anos passaram.</p>
                <p class="reveal">Mas quando olho para tudo que vivemos...</p>
                <p class="reveal">Eu percebo que não foram apenas 4 anos.</p>
                <p class="reveal">Foram milhares de momentos.</p>
                <p class="reveal">Milhares de risadas. Abraços. Conversas.</p>
                <p class="reveal">Desafios. Conquistas. Memórias.</p>
                <p class="reveal">E uma quantidade extravagante de amor.</p>
                <br><br>
                <p class="reveal">Obrigado por fazer parte da minha história.</p>
                <h3 class="reveal" style="color: var(--color-accent); font-size: 2rem; margin-top: 20px;">Sempre será nós.</h3>
                <h2 class="reveal" style="font-size: 3rem; margin-top: 30px;">Feliz 4 anos, meu amor. ❤️</h2>
                <p class="reveal" style="margin-top: 40px; font-family: var(--font-heading); font-size: 1.5rem;">— ${CONFIG.geral.meuNome}</p>
            </div>
        `);

        // 26. FIM?
        html += createSection('fim', 'reveal', `
            <h2 id="fim-text" style="font-size: 4rem; cursor: pointer;">Fim?</h2>
            <div id="fim-resposta" style="opacity: 0; transition: opacity 2s; margin-top: 20px;">
                <p style="font-size: 1.5rem;">Não.</p>
                <p style="font-size: 1.5rem;">Nossa história está apenas começando.</p>
                <h3 style="font-size: 2.5rem; margin-top: 20px; color: var(--color-gold);">Capítulo 5 em breve...</h3>
            </div>
        `);

        app.innerHTML = html;

        // --------------------------------------------------------
        // LÓGICA E INTERAÇÕES
        // --------------------------------------------------------

        // Configurar áudio
        const audioEl = document.getElementById('background-music');
        if (CONFIG.geral.musicaUrl) {
            audioEl.src = CONFIG.geral.musicaUrl;
        }

        // Botão Começar (Hero)
        document.getElementById('btn-start').addEventListener('click', () => {
            document.getElementById('antes-de-tudo').scrollIntoView({ behavior: 'smooth' });
            
            // Mostrar e dar play no áudio com a primeira interação
            const audioCtrl = document.getElementById('audio-control');
            audioCtrl.style.display = 'block';
            audioEl.play().catch(e => console.log('Audio autoplay blocked'));
            document.querySelector('#toggle-music i').className = 'fas fa-pause';
        });

        // Controle de Música
        document.getElementById('toggle-music').addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (audioEl.paused) {
                audioEl.play();
                icon.className = 'fas fa-pause';
            } else {
                audioEl.pause();
                icon.className = 'fas fa-music';
            }
        });

        // Flip Cards Interativos
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
            });
        });

        // Modal de Fotos
        const modal = document.getElementById('photo-modal');
        const modalImg = document.getElementById('modal-img');
        const span = document.getElementsByClassName('close-modal')[0];

        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        span.onclick = function() {
            modal.style.display = "none";
        }
        modal.onclick = function(e) {
            if(e.target === modal) modal.style.display = "none";
        }

        // Intersection Observer (Animações de Scroll)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Tratar elemento reveal-slow interno
                    const slow = entry.target.querySelector('.reveal-slow');
                    if(slow) {
                        setTimeout(() => {
                            slow.style.opacity = '1';
                            slow.style.transform = 'scale(1)';
                        }, 1000);
                    }
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Progress Bar e Navegação Dinâmica
        const sections = document.querySelectorAll('section');
        const sideNav = document.getElementById('side-nav');
        
        sections.forEach((sec, index) => {
            // Criar dots
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            if(index === 0) dot.classList.add('active');
            
            // Tooltip texto (usando o id formatado ou h2)
            const titleEl = sec.querySelector('h2');
            const title = titleEl ? titleEl.innerText : 'Seção ' + (index + 1);
            
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.innerText = title;
            
            dot.appendChild(tooltip);
            
            dot.addEventListener('click', () => {
                sec.scrollIntoView({ behavior: 'smooth' });
            });
            
            sideNav.appendChild(dot);
        });

        const dots = document.querySelectorAll('.nav-dot');

        window.addEventListener('scroll', () => {
            // Progress Bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('myBar').style.width = scrolled + "%";

            // Atualizar Dots
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });
            
            sections.forEach((sec, index) => {
                dots[index].classList.remove('active');
                if(sec.getAttribute('id') === current) {
                    dots[index].classList.add('active');
                }
            });
        });

        // Atualização do Contador
        const startDate = new Date(CONFIG.geral.dataInicioRelacionamento);
        const counterBox = document.getElementById('counter-box');
        
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;
            
            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            const years = Math.floor(totalDays / 365.25);
            const days = Math.floor(totalDays % 365.25);
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            if(counterBox) {
                counterBox.innerHTML = `
                    <div class="counter-item"><div class="counter-number">${years}</div><div class="counter-label">Anos</div></div>
                    <div class="counter-item"><div class="counter-number">${days}</div><div class="counter-label">Dias</div></div>
                    <div class="counter-item"><div class="counter-number">${hours}</div><div class="counter-label">Horas</div></div>
                    <div class="counter-item"><div class="counter-number">${minutes}</div><div class="counter-label">Minutos</div></div>
                    <div class="counter-item"><div class="counter-number">${seconds}</div><div class="counter-label">Segundos</div></div>
                `;
            }
        }
        
        if(counterBox) {
            updateCounter();
            setInterval(updateCounter, 1000);
        }

        // Fim Iterativo
        const fimText = document.getElementById('fim-text');
        const fimResposta = document.getElementById('fim-resposta');
        if(fimText) {
            fimText.addEventListener('click', () => {
                fimResposta.style.opacity = '1';
            });
            
        const fimObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setTimeout(() => {
                    fimResposta.style.opacity = '1';
                }, 3000); // Mostra automaticamente depois de 3 seg
            }
        });
        fimObserver.observe(fimText);
    }
} catch (e) {
    document.body.innerHTML = '<div style="color:red; font-size:20px; padding:20px; background:white;">ERRO: ' + e.message + '<br><br>' + e.stack + '</div>';
}
