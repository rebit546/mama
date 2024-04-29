let links = document.querySelectorAll("header a");
links.forEach(link => {
    link.addEventListener("click", async function (event) {
        event.preventDefault();
        let href = this.href;
        let data = await fetch(href);
        document.querySelector("#container").innerHTML = await data.text();
        window.location.hash = this.getAttribute("data-hash");
    });
});

async function start() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!hash) {
        hash = "about"
    }
    let data = await fetch(`${hash}.html`);
    document.querySelector("#container").innerHTML = await data.text();
}

start();

window.addEventListener("hashchange", function() {
    start();
});

function next(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;

    slides[currentIndex].classList.add('active');
}

setInterval(() => {
    const button1 = document.querySelector('.next1'); 
    const button2 = document.querySelector('.next2'); 
    const button3 = document.querySelector('.next3'); 
    next(button1);
    next(button2);
    next(button3);
    
}, 4000);




