// ==============================
// SKILL INFORMATION
// ==============================

const skillDetails = {
    html: {
        title: "HTML",
        description:
            "HTML is used to create the structure and content of web pages. I use HTML to organize headings, paragraphs, images, links, sections, and other webpage elements."
    },

    css: {
        title: "CSS",
        description:
            "CSS is used to style web pages. I use CSS to control colors, spacing, layouts, typography, buttons, cards, and responsive designs."
    },

    javascript: {
        title: "JavaScript",
        description:
            "JavaScript adds interaction and functionality to websites. I use it to create interactive elements such as clickable skill cards and dynamic webpage behavior."
    },

    responsive: {
        title: "Responsive Web Design",
        description:
            "Responsive web design allows a website to adjust to different screen sizes. I use flexible layouts and media queries to make websites usable on computers, tablets, and phones."
    },

    uiux: {
        title: "Basic UI/UX Design",
        description:
            "UI/UX design focuses on creating interfaces that are clear, organized, attractive, and easy for users to understand and navigate."
    }
};


// ==============================
// CLICKABLE SKILLS
// ==============================

const skillCards = document.querySelectorAll(".skill-card");
const skillDetailsBox = document.getElementById("skill-details");

skillCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const selectedSkill = card.dataset.skill;
        const skill = skillDetails[selectedSkill];

        skillDetailsBox.innerHTML = `
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;

        skillCards.forEach(function (item) {
            item.classList.remove("active");
        });

        card.classList.add("active");
    });

});


// ==============================
// CURRENT YEAR
// ==============================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});