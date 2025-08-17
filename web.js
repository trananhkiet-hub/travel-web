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
