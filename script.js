// Copy to Clipboard Functionality
const copyBtn = document.getElementById('copy-btn');
const contractAddressElement = document.getElementById('contract-address');
const tooltip = document.querySelector('.copied-tooltip');

if (copyBtn && contractAddressElement && tooltip) {
    const contractAddress = contractAddressElement.innerText;
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
            tooltip.classList.add('show');
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy address: ', err);
        });
    });
}

// Particle Aura Generator
const particlesContainer = document.getElementById('particles');
const particleCount = 60; // Slightly denser for better aura visuals

if (particlesContainer) {
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');

    // Random styling properties
    const size = Math.random() * 6 + 2; // 2px to 8px
    const posX = Math.random() * 100; // vw
    const posY = Math.random() * 100; // vh
    const duration = Math.random() * 12 + 6; // 6s to 18s
    const delay = Math.random() * 6; // 0s to 6s

    // Golden / Aura Orange colors
    const colors = ['#ffd23f', '#ff9f1c', '#ffe169', '#ffca3a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    particle.style.position = 'absolute';
    particle.style.left = `${posX}vw`;
    particle.style.top = `${posY}vh`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = randomColor;
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 ${size * 2.5}px ${randomColor}, 0 0 ${size * 5}px rgba(255, 210, 63, 0.4)`;
    particle.style.opacity = '0';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `floatUp ${duration}s ease-in-out infinite ${delay}s`;

    particlesContainer.appendChild(particle);
}

// Inject keyframes dynamically for floating animations
const styleSheet = document.createElement('style');
styleSheet.innerText = `
@keyframes floatUp {
    0% { 
        transform: translateY(0) scale(1) translateX(0); 
        opacity: 0; 
    }
    15% { 
        opacity: 0.7; 
        transform: translateY(-15vh) scale(1.3) translateX(10px); 
    }
    50% { 
        transform: translateY(-50vh) scale(1) translateX(-15px); 
    }
    85% { 
        opacity: 0.7; 
        transform: translateY(-85vh) scale(0.8) translateX(10px); 
    }
    100% { 
        transform: translateY(-100vh) scale(1.1) translateX(0); 
        opacity: 0; 
    }
}
`;
document.head.appendChild(styleSheet);

// Smooth navigation linking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
