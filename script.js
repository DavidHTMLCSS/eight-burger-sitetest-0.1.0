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