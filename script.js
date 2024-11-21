// script.js

// Ambil elemen navigasi dan tombol toggle
const toggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

// Toggle menu saat tombol diklik
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scroll untuk link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Tutup menu setelah klik di layar kecil
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});
