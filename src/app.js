window.onload = () => {
    const desktopPattern = document.querySelector(".desktop-pattern .pattern");
    const desktopCopy = document.querySelector(".desktop-pattern .logo");
    setTimeout(() => {
        desktopPattern.classList.add("pattern--fadeOut");
        desktopCopy.classList.add("logo--fadeIn");
    }, 1500);

    const mobilePatterns = document.querySelectorAll(".mobile-pattern .pattern");
    const mobileCopy = document.querySelector(".mobile-pattern .logo");
    setTimeout(() => {
        mobilePatterns.forEach(pattern => {
            pattern.classList.add("pattern--fadeOut");
        });
        mobileCopy.classList.add("logo--fadeIn");
    }, 1500)
}