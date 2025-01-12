// Dropdown functionality for the text box
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('crypto-input');
    const dropdownMenu = document.getElementById('dropdown-menu');

    inputField.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.startsWith('/')) {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!dropdownMenu.contains(e.target) && e.target !== inputField) {
            dropdownMenu.style.display = 'none';
        }
    });

    const dropdownItems = dropdownMenu.querySelectorAll('li');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownItems.forEach(i => i.style.backgroundColor = ''); // Reset other items
            item.style.backgroundColor = '#00bfff'; // Highlight selected
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.menu-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const targetSection = document.querySelector(this.hash);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
