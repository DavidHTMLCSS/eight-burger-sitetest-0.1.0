// Check screen for smartphones

window.addEventListener('load', function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            header {
                flex-direction: column;
                align-items: stretch;
                padding: 15px 10px;
            }

            .order-button {
                display: block;
                position: absolute;
                padding: 5px 15px;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 999;
            }

            .logo_nav {
                width: 60px;
                padding: 0;
            }

            nav {
                display: none;
                position: absolute;
                top: 100%;
                right: 0;
                background-color: red;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }

            nav ul {
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
            }

            nav ul li {
                padding: 5px 0;
            }

            .menu-toggle {
                display: block;
            }

            .menu-toggle.active + nav {
                display: flex;
                flex-direction: column;
            }

            .menu-toggle.active .bar:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }

            .menu-toggle.active .bar:nth-child(2) {
                opacity: 0;
            }

            .menu-toggle.active .bar:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }

            button {
                padding: 8px 25px;
            }
        `;
        document.head.append(style);
    }
});

// navigation button for smartphones
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

document.querySelector('.order-button').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
    }
});