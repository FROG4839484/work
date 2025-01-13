document.addEventListener("DOMContentLoaded", () => {
    // Theme Application
    const bodyClass = document.body.classList.contains("red-theme") ? "red-theme" : "blue-theme";
    document.documentElement.style.setProperty("--primary-glow", bodyClass === "red-theme" ? "#ff4500" : "#00bfff");

    // Dropdown Menu Functionality
    const cryptoInput = document.getElementById("crypto-input");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (cryptoInput && dropdownMenu) {
        cryptoInput.addEventListener("input", (e) => {
            if (e.target.value.includes("/")) {
                const rect = cryptoInput.getBoundingClientRect();
                dropdownMenu.style.width = `${rect.width}px`;
                dropdownMenu.style.left = `${rect.left + window.scrollX}px`;
                dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
                dropdownMenu.style.display = "block";
            } else {
                dropdownMenu.style.display = "none";
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!dropdownMenu.contains(e.target) && e.target !== cryptoInput) {
                dropdownMenu.style.display = "none";
            }
        });
    }

    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener("click", () => {
            navMenu.classList.toggle("visible");
        });
    }
});
