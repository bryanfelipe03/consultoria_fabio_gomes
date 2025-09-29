
tailwind.config = {
    theme: {
    extend: {
    colors: {
    neon: '#FDFF00',
    dark: '#0a0a0a',
},
fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            title: ['Oswald', 'sans-serif'],
            },
        }
    }
}
function enviarMensagemForm(event) {
event.preventDefault();
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const mensagem = document.getElementById('mensagem').value;
const numero = '5511999999999'; // Número do personal
const texto = `Mensagem de ${nome} (${email}): ${mensagem}`;
const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;
window.open(url, '_blank');
}
function enviarWhatsApp(mensagem) {
const numero = '5511999999999'; // Coloque o número do personal com código do país
const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
window.open(url, '_blank');
}
    // Mobile menu toggle
    const menuButton = document.querySelector('header button');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.querySelector('#mobileMenu button');
    
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });
    
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('flex');
        mobileMenu.classList.add('hidden');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (mobileMenu.classList.contains('flex')) {
                mobileMenu.classList.remove('flex');
                mobileMenu.classList.add('hidden');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would normally send the form data to your server
        // For demo purposes, we'll just show an alert
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });

