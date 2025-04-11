// Mouse Trails Effect //

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    // Adjust for potential offset issues
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    setTimeout(() => {
        trail.style.opacity = "0";
        setTimeout(() => trail.remove(), 300);
    }, 100);
});

// Typing effects on Home Tab //

const roles = ["Frontend Designer ", "Web Designer ", "UI/UX Designer ", "Web Developer ", "Software Tester "];
const typingSpeed = 100; // Typing speed in ms
const erasingSpeed = 50; // Erasing speed in ms
const delayBetweenWords = 1000; // Pause between words

let textElement = document.getElementById("animated-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentRole = roles[roleIndex];
    if (isDeleting) {
        textElement.innerText = currentRole.substring(0, charIndex--);
    } else {
        textElement.innerText = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

// Main Script //

document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // 🛠️ New: Close navbar when clicking a menu link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active"); // Hide navbar
            menuIcon.classList.remove("bx-x"); // Remove menu icon toggle
        });
    });
});

// Sending User Queries using Mailto //

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Ir61jweimSsRTRyAa"); // Replace with your EmailJS Public Key

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        };

        emailjs.send("service_9fkfzko", "YOUR_TEMPLATE_ID", templateParams)
            .then(response => {
                document.getElementById("responseMessage").innerText = "Email sent successfully!";
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch(error => {
                document.getElementById("responseMessage").innerText = "Error sending message.";
                console.error("FAILED...", error);
            });
    });
});




