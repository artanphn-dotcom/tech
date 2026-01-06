document.addEventListener('DOMContentLoaded', () => {
    // Theme switcher
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });

    // Category filter on detail pages
    const filterContainer = document.querySelector('.filter-container');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        const categories = document.querySelectorAll('.command-category');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                // Update button active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter categories
                categories.forEach(cat => {
                    if (category === 'all' || cat.getAttribute('data-category') === category) {
                        cat.style.display = 'block';
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            let filter = searchInput.value.toUpperCase();
            let grid = document.getElementById('tech-grid');
            let cards = grid.getElementsByClassName('card');

            for (let i = 0; i < cards.length; i++) {
                let h3 = cards[i].getElementsByTagName('h3')[0];
                if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        });
    }

    // Copy to clipboard
    const commandContainers = document.querySelectorAll('.command-container');
    commandContainers.forEach(container => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        container.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            const code = container.querySelector('pre').innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
