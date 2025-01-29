import { initThemeSwitcher } from "./themeSwitcher.js";
import { init as skillProgressInit } from "./skillsProgress.js";


(function initialization() {
    initThemeSwitcher()
    skillProgressInit()
})()

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget?.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});