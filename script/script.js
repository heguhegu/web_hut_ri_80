document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.getElementById('toggle-milestones');
    const milestonesContainer = document.getElementById('milestones-container');
    if (toggleButton && milestonesContainer) {
        toggleButton.addEventListener('click', function () {
            if (milestonesContainer.style.display === 'none') {
                milestonesContainer.style.display = 'block';
                toggleButton.textContent = 'Sembunyikan Milestone';
            } else {
                milestonesContainer.style.display = 'none';
                toggleButton.textContent = 'Lihat Milestone Penting';
            }
        });
    }

    // --- KODE BARU UNTUK HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#main-nav ul');

    hamburger.addEventListener('click', () => {
        // Toggle kelas 'active' pada tombol dan menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Opsional: Tutup menu saat link di-klik
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});