document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const searchInput = document.getElementById('search');
    const groupList = document.getElementById('group-list');
    const groupItems = groupList.getElementsByTagName('li');

    // Load the preferred theme from local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.innerHTML = '🌙';
    } else {
        themeToggleButton.innerHTML = '🌞';
    }

    // Toggle the theme on button click
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.innerHTML = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.innerHTML = '🌞';
            localStorage.setItem('theme', 'light');
        }
    });

    // Search function
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        Array.from(groupItems).forEach((item) => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
