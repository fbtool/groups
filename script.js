document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const groupList = document.getElementById('group-list');
    const rows = groupList.querySelectorAll('tr');

    // Search function
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        rows.forEach((row) => {
            const groupName = row.querySelector('td').textContent.toLowerCase();
            if (groupName.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
