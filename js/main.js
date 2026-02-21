document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.command h3').forEach(heading => {
        heading.querySelectorAll('*').forEach(node => {
            const placeholder = `<${node.tagName.toLowerCase()}>`;
            node.replaceWith(document.createTextNode(placeholder));
        });
    });

    document.querySelectorAll('.command p').forEach(paragraph => {
        if (paragraph.innerHTML.includes('</b>')) {
            paragraph.innerHTML = paragraph.innerHTML.replace(/<\/b>/g, '</strong>');
        }
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            if (themeToggle) {
                themeToggle.textContent = 'Light mode';
                themeToggle.setAttribute('aria-pressed', 'true');
            }
            return;
        }

        body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = 'Dark mode';
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    };

    applyTheme(savedTheme || (prefersDark ? 'dark-mode' : 'light-mode'));

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
            applyTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    const filterContainer = document.querySelector('.filter-container');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        const categories = document.querySelectorAll('.command-category');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                categories.forEach(cat => {
                    if (category === 'all' || cat.getAttribute('data-category') === category) {
                        cat.hidden = false;
                    } else {
                        cat.hidden = true;
                    }
                });
            });
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        const grid = document.getElementById('tech-grid');
        if (grid) {
            const cards = Array.from(grid.getElementsByClassName('card'));

            searchInput.addEventListener('input', () => {
                const filter = searchInput.value.trim().toLowerCase();

                cards.forEach(card => {
                    const label = card.querySelector('h3')?.textContent?.toLowerCase() || '';
                    const visible = label.includes(filter);
                    card.hidden = !visible;
                });
            });
        }
    }

    const commandContainers = document.querySelectorAll('.command-container');
    commandContainers.forEach(container => {
        const codeBlock = container.querySelector('pre');
        if (!codeBlock) {
            return;
        }

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.type = 'button';
        copyBtn.setAttribute('aria-label', 'Copy command to clipboard');
        container.appendChild(copyBtn);

        copyBtn.addEventListener('click', async () => {
            const code = codeBlock.innerText;
            try {
                await navigator.clipboard.writeText(code);
                copyBtn.textContent = 'Copied';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 1600);
            } catch (err) {
                copyBtn.textContent = 'Failed';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 1600);
                console.error('Failed to copy text:', err);
            }
        });
    });

    document.querySelectorAll('footer p').forEach(paragraph => {
        if (paragraph.textContent && paragraph.textContent.includes('Technical Command Reference')) {
            const currentYear = new Date().getFullYear();
            paragraph.textContent = `© ${currentYear} Technical Command Reference`;
        }
    });
});
