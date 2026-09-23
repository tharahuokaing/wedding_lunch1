// =====================================================================
// Evening Banquet Core Interface Logic (script.js)
// =====================================================================

/**
 * បើក ឬ បិទបង្ហាញផ្ទាំងកម្មវិធីពិសាភោជនាហារ (Timeline View Container)
 * Toggle Banquet Timeline Program Visibility and Update ARIA State
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleButton = document.querySelector('.btn-program-toggle');

    if (!timeline) return;

    const isCollapsed = timeline.classList.contains('collapsed');

    if (isCollapsed) {
        timeline.classList.remove('collapsed');
        if (toggleButton) {
            toggleButton.setAttribute('aria-expanded', 'true');
        }
    } else {
        timeline.classList.add('collapsed');
        if (toggleButton) {
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    }
}

/**
 * បើកផែនទី Google Maps ទៅកាន់ទីតាំងភោជនីយដ្ឋាន
 * Open Venue Map in a New Window/Tab
 */
function openMap() {
    // ទីតាំងតំណភ្ជាប់ទៅកាន់ផែនទីភោជនីយដ្ឋាន / Restaurant Map Link
    window.open('https://tharahuokaing.github.io/restaurant1/', '_blank', 'noopener,noreferrer');
}

/**
 * ដំណើរការរំកិលអេក្រង់ឡើងទៅផ្នែកខាងលើបង្អស់ (Scroll Back to Top)
 * Smoothly Scroll Page Back to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * តាមដានការ Scroll របស់រមូរអេក្រង់ដើម្បីលាក់/បង្ហាញប៊ូតុង "ត្រឡប់ទៅកំពូល"
 * Scroll Listener for Back-to-Top Button Visibility
 */
window.addEventListener('scroll', function() {
    const topButton = document.getElementById("scrollTopBtn");
    if (topButton) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
});
