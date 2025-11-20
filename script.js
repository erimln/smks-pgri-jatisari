/**
 * ===========================================
 * JAVASCRIPT UNTUK SMKS PGRI JATISARI
 * =========================================== */

// 1. Setup Menu Navigasi Responsif (Hamburger Menu)
// ==================================================
function setupMenuToggle() {
    // Ambil elemen NAV utama dan tombol toggle berdasarkan ID
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        // Event listener saat tombol hamburger diklik
        menuToggle.addEventListener('click', function() {
            // Menambah/menghapus class 'active' yang akan menampilkan menu
            mainNav.classList.toggle('active'); 
        });
        
        // Event listener untuk menutup menu saat link navigasi di klik (khusus mobile)
        const navLinks = mainNav.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Tutup menu jika sedang aktif
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
}


// 2. Setup Smooth Scrolling (Gulir Mulus)
// ========================================
function setupSmoothScroll() {
    // Pilih semua link internal (yang href-nya dimulai dengan '#')
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Mencegah perilaku default link (meloncat langsung)
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Gunakan scrollIntoView dengan behavior 'smooth'
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Posisikan elemen target di bagian atas viewport
                });
            }
        });
    });
}


// Jalankan semua fungsi setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    setupMenuToggle();
    setupSmoothScroll();
});