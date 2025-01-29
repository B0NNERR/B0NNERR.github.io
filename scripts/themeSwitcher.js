export function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        applySystemTheme()
    }

    // Обработчик события для кнопки
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isDarkTheme = document.body.classList.contains("dark-theme")
    
    if (isDarkTheme) {
        document.body.classList.replace("dark-theme", "light-theme")
        localStorage.setItem('theme', 'light-theme')
    }
    
    if (!isDarkTheme) {
        document.body.classList.replace("light-theme", "dark-theme")
        localStorage.setItem('theme', 'dark-theme')
    }
}

function applySystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
}