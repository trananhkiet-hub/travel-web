
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.querySelector('.eye-icon');
            const eyeOffIcon = document.querySelector('.eye-off-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.style.display = 'none';
                eyeOffIcon.style.display = 'block';
            } else {
                passwordInput.type = 'password';
                eyeIcon.style.display = 'block';
                eyeOffIcon.style.display = 'none';
            }
        }
// 
        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            console.log('Login attempt:', { email, password, remember });
            alert('Login functionality would be implemented here');
        }

        function handleGoogleLogin() {
            console.log('Google login attempt');
            alert('Google login functionality would be implemented here');
        }
        document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("show-page");
});
// 
// hiẹuung click
function randomColor() {
    const colors = [
        '#ff4d4d', '#ffcc00', '#4dff4d',
        '#4dffff', '#4d4dff', '#ff4dff', '#ff884d'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('click', e => {
    const x = e.clientX;
    const y = e.clientY;

    for (let i = 0; i < 14; i++) { // số hạt
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.style.background = randomColor();
        document.body.appendChild(particle);

        particle.style.left = x + 'px';
        particle.style.top  = y + 'px';

        const angle = Math.random() * 2 * Math.PI;
        const distance = 50 + Math.random() * 40; // bán kính tỏa
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.animate([
            { transform: 'translate(0,0) scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0.5)`, opacity: 0 }
        ], {
            duration: 700 + Math.random() * 400,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
});
