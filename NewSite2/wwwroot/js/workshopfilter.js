document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#filter-buttons [data-filter]');
    const cards = document.querySelectorAll('[data-category]');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = btn.getAttribute('data-filter');

            // Reset button styles
            buttons.forEach(function (b) {
                b.classList.remove('btn-primary');
                b.classList.add('btn-outline-primary');
            });

            // Highlight the clicked button
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');

            // Show/hide cards
            cards.forEach(function (card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = '';   // show
                } else {
                    card.style.display = 'none'; // hide
                }
            });
        });
    });
});
