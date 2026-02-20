document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const inscripcionBtn = document.querySelector('#inscripciones button');
    if (inscripcionBtn) {
        inscripcionBtn.addEventListener('click', function() {
            alert('¡Gracias por tu interés! Pronto te contactaremos para completar tu inscripción.');
        });
    }

    const loginForm = document.querySelector('#usuario form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('input[type="text"]').value;
            if (username) {
                alert('Bienvenido/a, ' + username + '! Esta es una página de demostración.');
            } else {
                alert('Por favor ingresa tu nombre de usuario.');
            }
        });
    }

});