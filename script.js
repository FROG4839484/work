/* General Styles */
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    background-image: radial-gradient(white 1px, transparent 1px),
                      radial-gradient(white 2px, transparent 2px),
                      radial-gradient(white 3px, transparent 3px);
    background-size: 150px 150px, 300px 300px, 600px 600px;
    background-position: 0px 0px, 75px 75px, 150px 150px;
    color: #fff;
}

/* Header */
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: black;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}

.logo-container img {
    height: 50px;
    width: auto;
}

.menu-button {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.menu-button:hover {
    background-color: #00bfff;
    color: #000;
    transform: scale(1.05);
}

/* Hero Section */
#hero {
    padding: 150px 20px;
    text-align: center;
    background-color: transparent;
}

.heading {
    font-family: 'Luckiest Guy', cursive;
    font-size: 3rem;
    margin: 20px 0;
    color: white;
    text-shadow: 0 0 10px #00bfff;
    transition: transform 0.3s ease;
}

.heading:hover {
    transform: scale(1.05);
}

.subheading {
    font-family: 'Luckiest Guy', cursive;
    font-size: 1.8rem;
    font-weight: bold; /* Bold subheadings */
    color: #fff;
    margin: 10px 0;
    text-shadow: 0 0 5px #00bfff;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.subheading:hover {
    transform: scale(1.03);
    opacity: 0.9;
}

/* Enlarged Text Sections */
.content p {
    font-size: 3rem; /* Tripled text size */
    line-height: 1.5; /* Adjusted line height for readability */
    color: #fff;
    margin-bottom: 20px;
}

/* Input Container */
.input-container {
    position: relative;
    margin-top: 30px;
    width: 80%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto; /* Center alignment */
}

#crypto-input {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 5px;
    box-shadow: 0 0 10px #00bfff;
    background-color: transparent;
    color: #fff;
    outline: none;
}

#dropdown-menu {
    position: absolute;
    top: 60px;
    width: 100%;
    background-color: #222;
    border-radius: 5px;
    border: 2px solid #00bfff;
    box-shadow: 0 0 10px #00bfff;
    padding: 10px;
    display: none;
}

/* Dropdown Menu Items */
#dropdown-menu li {
    padding: 10px;
    cursor: pointer;
    list-style: none;
}

#dropdown-menu li:hover {
    background-color: #00bfff;
    color: #000;
}

/* Buttons and CTA */
.cta-button {
    margin-top: 20px;
    padding: 15px 25px;
    font-size: 1.2rem;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #00bfff;
    color: #000;
    transform: scale(1.05);
}

/* Section Content */
.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
    padding: 0 50px;
    text-align: left;
}

.section-image {
    flex: 0.3; /* Reduced size */
    max-width: 250px; /* Half of the original size */
    border: 2px solid #00bfff; /* Maintains proportional border */
    border-radius: 10px;
    box-shadow: 0 0 10px #00bfff;
    transition: transform 0.3s ease;
}

.section-image:hover {
    transform: scale(1.05);
}

/* Tools Section */
.tools-section {
    text-align: center;
    padding: 50px 0;
}

.tools-box-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.tool-box {
    flex: 1;
    margin: 0 10px;
    padding: 20px;
    border: 2px solid #00bfff;
    border-radius: 10px;
    background-color: transparent;
    text-align: center;
    box-shadow: 0 0 10px #00bfff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tool-box:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #00bfff;
}

/* Footer */
footer {
    margin-top: 50px;
    padding: 30px;
    background-color: #fff;
    border-radius: 25px;
    text-align: center;
}

.footer-logo {
    width: 50px;
    margin-bottom: 10px;
}

.social-icons a img {
    width: 30px;
    margin: 0 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icons a img:hover {
    transform: scale(1.2);
    box-shadow: 0 0 10px #00bfff;
}
