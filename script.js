function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning, I'm AxlTavi 👋";
    } else if (hours < 18) {
        greeting = "Good Afternoon, I'm AxlTavi 👋";
    } else {
        greeting = "Good Evening, I'm AxlTavi 👋";
    }

    greetingElement.textContent = greeting;
}

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const skillLevel = bar.getAttribute("data-skill-level");
            bar.style.width = skillLevel; 
        });
    }

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < triggerBottom) {
                animateProgressBars();
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

