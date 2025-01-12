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
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#00bfff';
            item.style.color = '#000';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
            item.style.color = '#fff';
        });
        item.addEventListener('click', () => {
            dropdownItems.forEach(i => i.style.backgroundColor = ''); // Reset others
            item.style.backgroundColor = '#00bfff'; // Highlight selected
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.menu-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Button and Hover Effects
const buttons = document.querySelectorAll('.cta-button, .menu-button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 0 15px #00bfff';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});
