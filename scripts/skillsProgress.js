export function init() {
    const skillWrappers = document.querySelectorAll(".section-skills_info")

    skillWrappers.forEach(function (e) {
        const progressTitle = e.querySelector(".section-skills_progress-title")
        const dataPercent = e.dataset.skillPercent
        progressTitle.textContent = dataPercent ? dataPercent + "%" : null
        e.style.gridTemplateColumns = `${dataPercent || 0}%`
    })
}