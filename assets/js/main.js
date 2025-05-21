document.addEventListener('DOMContentLoaded', function () {
    initAccessibilityFeatures();
    initMobileMenu();
    setupEventListeners();
});

function initAccessibilityFeatures() {
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const largeText = localStorage.getItem('largeText') === 'true';

    if (highContrast) {
        document.body.classList.add('high-contrast');
    }
    if (largeText) {
        document.body.classList.add('large-text');
    }

    const contrastToggle = document.getElementById('contrast-toggle');
    const textSizeToggle = document.getElementById('text-size-toggle');

    if (contrastToggle) {
        contrastToggle.checked = highContrast;
        contrastToggle.addEventListener('change', function () {
            document.body.classList.toggle('high-contrast');
            localStorage.setItem('highContrast', this.checked);
        });
    }

    if (textSizeToggle) {
        textSizeToggle.checked = largeText;
        textSizeToggle.addEventListener('change', function () {
            document.body.classList.toggle('large-text');
            localStorage.setItem('largeText', this.checked);
        });
    }
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('nav ul');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

function setupEventListeners() {
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('tipo');
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
        if (userType === 'candidato') {
            showCandidateFields();
        } else if (userType === 'empresa') {
            showCompanyFields();
        }
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContact);
    }

    const cvForm = document.getElementById('cv-form');
    if (cvForm) {
        cvForm.addEventListener('submit', handleCVSubmission);
    }

    const jobForm = document.getElementById('job-form');
    if (jobForm) {
        jobForm.addEventListener('submit', handleJobPosting);
    }
}

function handleRegistration(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());

    if (validateRegistrationData(userData)) {
        console.log('Registration data:', userData);
        showMessage('success', 'Cadastro realizado com sucesso! Redirecionando para o login...');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());

    if (validateLoginData(loginData)) {
        console.log('Login data:', loginData);
        showMessage('success', 'Login realizado com sucesso! Redirecionando para o dashboard...');
        setTimeout(() => {
            const userType = 'candidato';
            window.location.href = `dashboard-${userType}.html`;
        }, 2000);
    }
}

function handleContact(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData.entries());

    console.log('Contact data:', contactData);
    showMessage('success', 'Mensagem enviada com sucesso! Em breve entraremos em contato.');

    setTimeout(() => {
        window.location.href = '../../index.html';
    }, 2500);
}

function handleCVSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const cvData = Object.fromEntries(formData.entries());

    console.log('CV data:', cvData);
    showMessage('success', 'Currículo enviado com sucesso!');

    setTimeout(() => {
        showAIRecommendations();
    }, 1500);
}

function handleJobPosting(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jobData = Object.fromEntries(formData.entries());

    console.log('Job posting data:', jobData);

    showMessage('success', 'Vaga publicada com sucesso!');

    setTimeout(() => {
        showCandidateMatches();
    }, 1500);
}

function validateRegistrationData(data) {
    let isValid = true;
    const errors = [];

    if (!data.nome || data.nome.trim() === '') {
        errors.push('Nome é obrigatório');
        isValid = false;
    }
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Email inválido');
        isValid = false;
    }
    if (!data.senha || data.senha.length < 6) {
        errors.push('Senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }
    if (data.senha !== data.confirmarSenha) {
        errors.push('As senhas não coincidem');
        isValid = false;
    }
    if (!isValid) {
        showMessage('error', errors.join('<br>'));
    }
    return isValid;
}

function validateLoginData(data) {
    let isValid = true;
    const errors = [];

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Email inválido');
        isValid = false;
    }
    if (!data.senha) {
        errors.push('Senha é obrigatória');
        isValid = false;
    }
    if (!isValid) {
        showMessage('error', errors.join('<br>'));
    }
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(type, message) {
    let messageElement = document.getElementById('message-container');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message-container';
        document.body.appendChild(messageElement);
    }
    messageElement.innerHTML = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = 'block';

    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

function showCandidateFields() {
    const candidateFields = document.getElementById('candidate-fields');
    const companyFields = document.getElementById('company-fields');

    if (candidateFields && companyFields) {
        candidateFields.style.display = 'block';
        companyFields.style.display = 'none';
    }
}

function showCompanyFields() {
    const candidateFields = document.getElementById('candidate-fields');
    const companyFields = document.getElementById('company-fields');

    if (candidateFields && companyFields) {
        candidateFields.style.display = 'none';
        companyFields.style.display = 'block';
    }
}

function showAIRecommendations() {
    const recommendationsContainer = document.getElementById('ai-recommendations');

    if (recommendationsContainer) {
        const recommendations = [
            {
                title: 'Desenvolvedor Front-end',
                company: 'TechSolutions',
                location: 'São Paulo, SP',
                match: 95
            },
            {
                title: 'UX/UI Designer',
                company: 'Creative Agency',
                location: 'Rio de Janeiro, RJ',
                match: 87
            },
            {
                title: 'Analista de Marketing Digital',
                company: 'E-commerce Brasil',
                location: 'Curitiba, PR',
                match: 82
            }
        ];
        let html = '<h3>Vagas Recomendadas para Você</h3>';
        html += '<div class="recommendations-grid">';
        recommendations.forEach(job => {
            html += `
                <div class="recommendation-card">
                    <div class="match-badge">${job.match}% Match</div>
                    <h4>${job.title}</h4>
                    <p class="company">${job.company}</p>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                    <button class="btn btn-primary">Candidatar-se</button>
                </div>
            `;
        });
        html += '</div>';
        recommendationsContainer.innerHTML = html;
        recommendationsContainer.style.display = 'block';
    }
}

function showCandidateMatches() {
    const matchesContainer = document.getElementById('candidate-matches');

    if (matchesContainer) {
        const candidates = [
            {
                name: 'João Silva',
                title: 'Desenvolvedor Full Stack',
                skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
                match: 92
            },
            {
                name: 'Maria Oliveira',
                title: 'Front-end Developer',
                skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
                match: 88
            },
            {
                name: 'Pedro Santos',
                title: 'UX Designer',
                skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
                match: 85
            }
        ];
        let html = '<h3>Candidatos Recomendados para sua Vaga</h3>';
        html += '<div class="candidates-grid">';
        candidates.forEach(candidate => {
            html += `
                <div class="candidate-card">
                    <div class="match-badge">${candidate.match}% Match</div>
                    <div class="candidate-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <h4>${candidate.name}</h4>
                    <p class="title">${candidate.title}</p>
                    <div class="skills">
                        ${candidate.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                    <button class="btn btn-primary">Ver Perfil</button>
                </div>
            `;
        });
        html += '</div>';
        matchesContainer.innerHTML = html;
        matchesContainer.style.display = 'block';
    }
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                localStorage.setItem('userLatitude', latitude);
                localStorage.setItem('userLongitude', longitude);

                initMap(latitude, longitude);
                findNearbyJobs(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                showMessage('error', 'Não foi possível obter sua localização. Algumas funcionalidades podem ser limitadas.');
            }
        );
    } else {
        showMessage('error', 'Geolocalização não é suportada pelo seu navegador. Algumas funcionalidades podem ser limitadas.');
    }
}

function initMap(latitude, longitude) {
    const mapContainer = document.getElementById('location-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="map-placeholder">
                <i class="fas fa-map-marked-alt"></i>
                <p>Mapa seria carregado aqui com coordenadas:</p>
                <p>Latitude: ${latitude}, Longitude: ${longitude}</p>
            </div>
        `;
    }
}

function findNearbyJobs(latitude, longitude) {
    const nearbyJobsContainer = document.getElementById('nearby-jobs');

    if (nearbyJobsContainer) {
        nearbyJobsContainer.innerHTML = '<p>Buscando vagas próximas...</p>';
        setTimeout(() => {
            const nearbyJobs = [
                {
                    title: 'Assistente Administrativo',
                    company: 'Empresa Local',
                    distance: '1.2 km',
                    salary: 'R$ 2.500,00'
                },
                {
                    title: 'Vendedor',
                    company: 'Loja do Centro',
                    distance: '3.5 km',
                    salary: 'R$ 2.000,00 + comissão'
                },
                {
                    title: 'Recepcionista',
                    company: 'Hotel Central',
                    distance: '5.0 km',
                    salary: 'R$ 1.800,00'
                }
            ];
            let html = '<h3>Vagas Próximas a Você</h3>';
            html += '<div class="nearby-jobs-grid">';
            nearbyJobs.forEach(job => {
                html += `
                    <div class="job-card">
                        <h4>${job.title}</h4>
                        <p class="company">${job.company}</p>
                        <p class="distance"><i class="fas fa-walking"></i> ${job.distance}</p>
                        <p class="salary"><i class="fas fa-money-bill-wave"></i> ${job.salary}</p>
                        <button class="btn btn-secondary">Ver Detalhes</button>
                    </div>
                `;
            });
            html += '</div>';
            nearbyJobsContainer.innerHTML = html;
        }, 1500);
    }
}

if (document.querySelector('[data-needs-location="true"]')) {
    getUserLocation();
}