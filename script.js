
document.getElementById("crypto-input").addEventListener("input", function (e) {
    const dropdown = document.getElementById("dropdown-menu");
    if (e.target.value === "/") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

document.getElementById("dropdown-menu").addEventListener("mouseleave", function () {
    this.style.display = "none";
});
