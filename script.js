// CONFIGURAÇÕES GERAIS
        const WHATSAPP_NUMBER = "5541999999999"; // <-- TROQUE PELO NÚMERO REAL (55 + DDD + número)
        const ORIGINAL_TITLE = document.title;
        const ORIGINAL_DESC = document.querySelector('meta[name="description"]').content;

        // BANCO DE DADOS DOS SERVIÇOS
        const SERVICES = {
            'cameras': {
                slug: 'cameras',
                metaTitle: 'Instalação de Câmeras de Segurança (CFTV) em Curitiba | Soma Safe',
                metaDescription: 'Câmeras HD com acesso pelo celular. Instalação e manutenção de CFTV em Curitiba e Região.',
                title: 'Câmeras de Segurança (CFTV)',
                tag: 'Monitoramento 24 Horas',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Cameras+CFTV+Curitiba',
                lead: 'Proteja o que é importante para você com tecnologia de ponta. Nossas câmeras oferecem resolução Full HD, visão noturna e acesso remoto de qualquer lugar do mundo pelo seu celular ou computador em Curitiba e Região Metropolitana.',
                benefits: ['Acesso Remoto via App', 'Gravação em Nuvem ou Local', 'Visão Noturna Avançada', 'Detecção de Movimento Inteligente'],
                waMsg: 'Olá! Quero um orçamento para Câmeras de Segurança (CFTV).'
            },
            'interfones': {
                slug: 'interfones',
                metaTitle: 'Interfones e Vídeo Porteiros em Curitiba | Soma Safe',
                metaDescription: 'Segurança na comunicação com visitantes. Sistemas para residências e condomínios em Curitiba.',
                title: 'Interfonia Residencial e Condominial',
                tag: 'Comunicação Segura',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Interfones+Curitiba',
                lead: 'Sistemas de interfonia modernos para garantir que você saiba exatamente quem está à sua porta antes de abrir. Atendemos desde residências simples até grandes condomínios em Curitiba.',
                benefits: ['Vídeo Porteiros Coloridos', 'Integração com Portões', 'Interfonia IP sem Fio', 'Suporte Técnico Ágil'],
                waMsg: 'Olá! Quero um orçamento para Interfonia.'
            },
            'portoes': {
                slug: 'portoes',
                metaTitle: 'Automatização de Portões em Curitiba | Soma Safe',
                metaDescription: 'Motores rápidos e seguros. Instalação e conserto de portões eletrônicos em Curitiba.',
                title: 'Automatização de Portões',
                tag: 'Conforto e Segurança',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Portoes+Eletronicos',
                lead: 'Instalamos motores de alta velocidade das melhores marcas (PPA, Rossi, Garen) para que você não perca tempo esperando o portão abrir em Curitiba.',
                benefits: ['Motores de Alta Velocidade', 'Controle por Celular ou Tag', 'Manutenção Preventiva', 'Peças Originais'],
                waMsg: 'Olá! Quero um orçamento para Automatização de Portão.'
            },
            'controle-de-acesso': {
                slug: 'controle-de-acesso',
                metaTitle: 'Controle de Acesso em Curitiba | Biometria e Facial',
                metaDescription: 'Gerencie quem entra e sai da sua empresa ou condomínio em Curitiba com biometria e cartões.',
                title: 'Controle de Acesso Inteligente',
                tag: 'Gestão de Entradas',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Controle+Acesso',
                lead: 'Elimine chaves físicas e tenha relatórios precisos de quem acessou cada área da sua empresa ou condomínio em Curitiba e região.',
                benefits: ['Biometria e Facial', 'Leitor de Proximidade (Tags)', 'Software de Gestão', 'Relatórios de Acesso'],
                waMsg: 'Olá! Quero um orçamento para Controle de Acesso.'
            },
            'fechaduras': {
                slug: 'fechaduras',
                metaTitle: 'Fechaduras Digitais e Eletrônicas em Curitiba | Soma Safe',
                metaDescription: 'Sua porta segura com senha, digital ou app. Instalação de fechaduras em Curitiba.',
                title: 'Fechaduras Eletrônicas',
                tag: 'Tecnologia na Porta',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Fechaduras+Digitais',
                lead: 'Modernize sua entrada com fechaduras digitais. Ideal para residências e escritórios que buscam segurança sem carregar chaves.',
                benefits: ['Abertura por Senha/Digital', 'App Bluetooth ou Wi-Fi', 'Travamento Automático', 'Alarme de Intrusão'],
                waMsg: 'Olá! Quero um orçamento para Fechaduras Eletrônicas.'
            },
            'cerca-eletrica': {
                slug: 'cerca-eletrica',
                metaTitle: 'Cerca Elétrica em Curitiba | Instalação e Manutenção',
                metaDescription: 'Proteção perimetral contra invasores. Central de choque e alarme em Curitiba e Região.',
                title: 'Cerca Elétrica e Perimetral',
                tag: 'Proteção Máxima',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Cerca+Eletrica',
                lead: 'A primeira barreira contra invasores. Instalamos cercas potentes seguindo as normas técnicas para garantir a proteção do seu imóvel em Curitiba.',
                benefits: ['Choque não Fatal (Norma)', 'Alarme Integrado na Central', 'Hastes de Alumínio', 'Sirene de Alta Potência'],
                waMsg: 'Olá! Quero um orçamento para Cerca Elétrica.'
            },
            'alarmes': {
                slug: 'alarmes',
                metaTitle: 'Sistemas de Alarme em Curitiba | Soma Safe',
                metaDescription: 'Sensores de presença e barreira. Proteja sua casa com alarme monitorado em Curitiba.',
                title: 'Sistemas de Alarme',
                tag: 'Vigilância Ativa',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Alarmes+Residenciais',
                lead: 'Sistemas inteligentes que detectam qualquer presença não autorizada e enviam alertas em tempo real para o seu celular em Curitiba.',
                benefits: ['Sensores sem Fio', 'Bateria de Backup', 'Sirenes Inteligentes', 'Ativação Remota via App'],
                waMsg: 'Olá! Quero um orçamento para Sistemas de Alarme.'
            },
            'cancelas': {
                slug: 'cancelas',
                metaTitle: 'Cancelas Automáticas em Curitiba | Controle de Fluxo',
                metaDescription: 'Cancelas profissionais para condomínios e empresas em Curitiba. Fluxo rápido e seguro.',
                title: 'Cancelas Automáticas',
                tag: 'Controle de Veículos',
                heroImg: 'https://placehold.co/1200x700/03070F/E0A82E?text=Cancelas+Automaticas',
                lead: 'Soluções robustas para controle de entrada e saída de veículos em estacionamentos, condomínios e pátios industriais em Curitiba.',
                benefits: ['Uso Intenso e Rápido', 'Integração com Tags', 'Braço Articulado ou Reto', 'Proteção de Esmagamento'],
                waMsg: 'Olá! Quero um orçamento para Cancelas.'
            }
        };

        // FUNÇÃO PARA ABRIR O SERVIÇO
        function openService(slug, fromPopState = false) {
            const service = SERVICES[slug];
            if (!service) return;

            const renderContainer = document.getElementById('service-content-render');
            const overlay = document.getElementById('service-overlay');
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.waMsg)}`;

            // Gerar Conteúdo
            renderContainer.innerHTML = `
                <div class="service-nav">
                    <div class="btn-back" onclick="closeService()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Voltar
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="assets/img/logo-soma-safe.png" alt="Soma Safe" style="height:40px">
                        <span style="font-weight:800; font-size:1.1rem; letter-spacing:1px; color:#fff; line-height:1;">SOMA <span style="color:var(--primary-gold);">SAFE</span></span>
                    </div>
                    <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold" style="padding: 10px 20px; font-size:0.8rem;">WhatsApp</a>
                </div>

                <div class="service-hero-full" style="background-image: url('${service.heroImg}')">
                    <div class="service-hero-content">
                        <span class="service-tag">${service.tag}</span>
                        <h1>${service.title}</h1>
                        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold">Solicitar orçamento no WhatsApp</a>
                    </div>
                </div>

                <div class="service-body">
                    <p class="service-description">${service.lead}</p>

                    <h3 style="margin-bottom:20px; border-left:4px solid var(--primary-gold); padding-left:15px;">Galeria de Projetos</h3>
                    <div class="gallery-grid">
                        ${[1,2,3,4,5,6].map(i => `
                            <div class="gallery-item" onclick="openLightbox('https://placehold.co/600x400/03070F/E0A82E?text=${service.slug}+${i}')">
                                <img src="https://placehold.co/600x400/03070F/E0A82E?text=${service.slug}+${i}" loading="lazy" alt="${service.title} - foto ${i}">
                            </div>
                        `).join('')}
                    </div>

                    <h3 style="margin-bottom:20px; border-left:4px solid var(--primary-gold); padding-left:15px;">Principais Benefícios</h3>
                    <div class="benefits-list">
                        ${service.benefits.map(b => `
                            <div class="benefit-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>${b}</span>
                            </div>
                        `).join('')}
                    </div>

                    <div class="dual-inner" style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                        <div style="padding:30px; background:var(--bg-card); border-radius:10px;">
                            <h4>Instalação Especializada</h4>
                            <p style="font-size:0.9rem; color:var(--text-gray); margin:10px 0;">Projetos personalizados para seu imóvel.</p>
                            <a href="${waUrl}" target="_blank" rel="noopener" style="color:var(--primary-gold); font-weight:600;">Quero instalar ➜</a>
                        </div>
                        <div style="padding:30px; background:var(--bg-card); border-radius:10px;">
                            <h4>Manutenção e Suporte</h4>
                            <p style="font-size:0.9rem; color:var(--text-gray); margin:10px 0;">Conserto rápido e troca de componentes.</p>
                            <a href="${waUrl}" target="_blank" rel="noopener" style="color:var(--primary-gold); font-weight:600;">Preciso de suporte ➜</a>
                        </div>
                    </div>

                    <div class="service-cta-box">
                        <h2>Peça seu orçamento de ${service.title} em Curitiba e Região</h2>
                        <p style="margin:20px 0; color:var(--text-gray);">Atendimento imediato via WhatsApp para residências e empresas.</p>
                        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-gold">Falar com Consultor agora</a>
                    </div>
                </div>

                <footer style="padding: 40px; text-align:center; border-top:1px solid var(--navy-border);">
                    <p style="font-size:0.9rem; color:#555;">Soma Safe | ${service.title} em Curitiba</p>
                </footer>
            `;

            // Ativar Overlay
            overlay.classList.add('active');
            overlay.scrollTop = 0;
            document.body.classList.add('modal-open');

            // Atualizar SEO
            document.title = service.metaTitle;
            document.querySelector('meta[name="description"]').content = service.metaDescription;

            // Histórico (Deep-link)
            if (!fromPopState) {
                history.pushState({ service: slug }, service.title, `#${slug}`);
            }
        }

        // FUNÇÃO PARA FECHAR
        function closeService(fromPopState = false) {
            document.getElementById('service-overlay').classList.remove('active');
            document.body.classList.remove('modal-open');

            // Restaurar SEO Original
            document.title = ORIGINAL_TITLE;
            document.querySelector('meta[name="description"]').content = ORIGINAL_DESC;

            if (!fromPopState) {
                history.pushState(null, ORIGINAL_TITLE, window.location.pathname + window.location.search);
            }
        }

        // LIGHTBOX
        function openLightbox(src) {
            const lb = document.getElementById('lightbox');
            document.getElementById('lightbox-img').src = src;
            lb.style.display = 'flex';
        }

        // GERENCIAR NAVEGAÇÃO (Deep Link & Back Button)
        function checkUrlForService() {
            const hash = window.location.hash.replace('#', '');
            const params = new URLSearchParams(window.location.search);
            const serviceParam = params.get('servico');

            const slug = (SERVICES[hash] ? hash : (SERVICES[serviceParam] ? serviceParam : null));
            if (slug) {
                openService(slug, true);
            } else {
                closeService(true);
            }
        }

        window.addEventListener('popstate', checkUrlForService);
        window.addEventListener('load', checkUrlForService);

        // FECHAR NO ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                if (document.getElementById('lightbox').style.display === 'flex') {
                    document.getElementById('lightbox').style.display = 'none';
                } else {
                    closeService();
                }
            }
        });

        // FAQ HOME (Accordion)
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => item.classList.toggle('active'));
        });

        // MENU HAMBÚRGUER (mobile)
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('header nav');
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                mainNav.classList.toggle('active');
            });
            mainNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                });
            });
        }

        // WHATSAPP LINKS PADRÃO + LINKS POR SERVIÇO (Instalação/Manutenção)
        const setupLinks = () => {
            const defaultMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento de segurança eletrônica.");
            document.querySelectorAll('.wa-link-main').forEach(link => {
                link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;
                link.target = "_blank";
                link.rel = "noopener";
            });
            document.querySelectorAll('.wa-link-service').forEach(link => {
                const s = link.getAttribute('data-service');
                const msg = encodeURIComponent(`Olá! Vim pelo site e quero um orçamento de ${s}.`);
                link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
                link.target = "_blank";
                link.rel = "noopener";
            });
        };
        setupLinks();

        // CONTADORES ANIMADOS (restaurado)
        const startCounters = () => {
            document.querySelectorAll('.stat-number').forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const step = Math.max(1, Math.ceil(target / 60));
                const tick = () => {
                    count += step;
                    if (count < target) { counter.innerText = count; requestAnimationFrame(tick); }
                    else { counter.innerText = target + "+"; }
                };
                tick();
            });
        };
        const statsSection = document.querySelector('.stats-grid');
        if (statsSection) {
            const obs = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) { startCounters(); obs.disconnect(); }
            }, { threshold: 0.4 });
            obs.observe(statsSection);
        }

        /*
           DICA PARA TRÁFEGO PAGO:
           Use as URLs abaixo nos anúncios (cada uma abre direto a página do serviço):
           - https://somasafe.com.br/#cameras
           - https://somasafe.com.br/#interfones
           - https://somasafe.com.br/#portoes
           - https://somasafe.com.br/#controle-de-acesso
           - https://somasafe.com.br/#fechaduras
           - https://somasafe.com.br/#cerca-eletrica
           - https://somasafe.com.br/#alarmes
           - https://somasafe.com.br/#cancelas
           (também funciona ?servico=cerca-eletrica, útil quando o Ads adiciona ?gclid=...)

           Para rastrear conversão Google Ads, insira o disparo no clique do botão:
           onclick="gtag('event','conversion', {'send_to': 'AW-XXXXXXXX/XXXXXX'});"
        */

        /* =========================================
           PREMIUM VISUAL EFFECTS
        ========================================= */

        // --- 1. SERVICE CARD 3D TILT (desktop only) ---
        (function () {
            const isTouchOnly = () => window.matchMedia('(hover: none)').matches;

            document.querySelectorAll('.service-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    if (isTouchOnly()) return;
                    const r  = card.getBoundingClientRect();
                    const x  = e.clientX - r.left;
                    const y  = e.clientY - r.top;
                    const rx = ((y - r.height / 2) / (r.height / 2)) * -7;
                    const ry = ((x - r.width  / 2) / (r.width  / 2)) *  7;
                    card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
                    card.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transition = 'transform 0.45s ease, box-shadow 0.3s ease, border-color 0.3s ease';
                    card.style.transform  = '';
                });
            });
        })();

        // --- 2. HERO PARALLAX (desktop, via rAF + scroll) ---
        (function () {
            const hero = document.getElementById('inicio');
            if (!hero) return;
            let ticking = false;

            function update() {
                if (window.innerWidth > 768) {
                    const sy = window.scrollY;
                    if (sy < window.innerHeight * 1.5) {
                        hero.style.backgroundPosition = `right calc(50% + ${sy * 0.22}px)`;
                    }
                }
                ticking = false;
            }

            window.addEventListener('scroll', () => {
                if (!ticking) { requestAnimationFrame(update); ticking = true; }
            }, { passive: true });
        })();

        // --- 3. HERO PARTICLES (canvas, desktop only) ---
        (function () {
            if (window.innerWidth <= 768) return;
            const hero = document.getElementById('inicio');
            if (!hero) return;

            const canvas = document.createElement('canvas');
            canvas.id = 'hero-canvas';
            canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
            hero.insertBefore(canvas, hero.firstChild);

            const ctx = canvas.getContext('2d');
            let W, H;

            function resize() {
                W = canvas.width  = hero.offsetWidth;
                H = canvas.height = hero.offsetHeight;
            }
            resize();
            window.addEventListener('resize', resize, { passive: true });

            const COUNT = 42;
            const pts = Array.from({ length: COUNT }, () => ({
                x  : Math.random() * (W || 1200),
                y  : Math.random() * (H || 700),
                r  : Math.random() * 1.4 + 0.4,
                vx : (Math.random() - 0.5) * 0.22,
                vy : (Math.random() - 0.5) * 0.22,
                a  : Math.random() * 0.22 + 0.07,
                da : (Math.random() > 0.5 ? 1 : -1) * 0.0028
            }));

            function draw() {
                ctx.clearRect(0, 0, W, H);
                pts.forEach(p => {
                    p.x += p.vx; p.y += p.vy;
                    p.a += p.da;
                    if (p.a > 0.32 || p.a < 0.06) p.da *= -1;
                    if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0;
                    if (p.y < 0) p.y = H; else if (p.y > H) p.y = 0;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(224,168,46,${p.a.toFixed(3)})`;
                    ctx.fill();
                });
                requestAnimationFrame(draw);
            }
            draw();
        })();

        // --- 4. STATS 3D RISE (visual, separado dos contadores) ---
        (function () {
            const grid = document.querySelector('.stats-grid');
            if (!grid) return;
            const items = grid.querySelectorAll('.stat-item');

            new IntersectionObserver((entries, obs) => {
                if (!entries[0].isIntersecting) return;
                items.forEach((item, i) => setTimeout(() => item.classList.add('visible'), i * 130));
                obs.disconnect();
            }, { threshold: 0.3 }).observe(grid);
        })();

        // --- 5. SCROLL REVEAL ---
        (function () {
            const targets = document.querySelectorAll(
                'section:not(#inicio):not(#sobre), .diff-bar, .brands-slider, .dual-cta'
            );
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

            targets.forEach(el => {
                const r = el.getBoundingClientRect();
                const alreadyVisible = r.top < window.innerHeight && r.bottom > 0;
                if (!alreadyVisible) el.classList.add('reveal');
                obs.observe(el);
            });
        })();

        // --- 6. BACKDROP BLUR para service overlay ---
        (function () {
            const backdrop = document.createElement('div');
            backdrop.id = 'backdrop-blur';
            document.body.appendChild(backdrop);

            new MutationObserver(() => {
                backdrop.classList.toggle('active', document.body.classList.contains('modal-open'));
            }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
        })();
