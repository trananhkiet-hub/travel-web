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