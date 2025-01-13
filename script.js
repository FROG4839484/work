document.addEventListener("DOMContentLoaded", () => {
    // Theme Setup
    const bodyClass = document.body.classList.contains("red-theme") ? "red-theme" : "blue-theme";
    document.documentElement.style.setProperty("--primary-glow", bodyClass === "red-theme" ? "#ff4500" : "#00bfff");

    // Dropdown Menu Logic
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
    }

    // Glitch Animation for Tools Section
    const glitchBoxes = document.querySelectorAll(".glitch-box");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-glitch");
            }
        });
    }, { threshold: 0.2 });

    glitchBoxes.forEach((box) => observer.observe(box));
});
