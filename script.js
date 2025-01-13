// Script for S.U.S AI Website

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

        // Add hover effects to dropdown items
        const dropdownItems = dropdownMenu.querySelectorAll("li");
        dropdownItems.forEach((item) => {
            item.addEventListener("mouseenter", () => item.style.backgroundColor = "var(--primary-glow)");
            item.addEventListener("mouseleave", () => item.style.backgroundColor = "");
        });
    }

    // Navigation Highlighting
    const navLinks = document.querySelectorAll(".menu-button");
    const currentPage = location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
