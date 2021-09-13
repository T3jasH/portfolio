const fadeIn = new IntersectionObserver((entries, fadeIn) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fadeIn")
        }
    })
})

const toggleDownArrow = new IntersectionObserver((entries, toggleDownArrow) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.setAttribute("style", "opacity: 1;")
        }
        else{
            entry.target.setAttribute("style", "opacity: 0;")
        }
    })
}, {rootMargin : "-60% 0px 0px 0px"})

const slideIn = new IntersectionObserver((entries, slideIn) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.setAttribute("style", "transform: translateX(0); transform: translateY(0); opacity: 1;")
        }
    })
}, {rootMargin : "-30% 0px 0px 0px", threshold: 0.5})

const levelUp = new IntersectionObserver((entries, levelUp) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("level")
        }
    })
}, {rootMargin : "-30% 0px 0px 0px", threshold: 0.5})

document.onreadystatechange = () => {
    if(document.readyState === "interactive"){
        const cards = document.querySelectorAll(".card")
        cards.forEach(card => {
            fadeIn.observe(card)
        })
        const imgContainer = document.querySelector(".img-container")
        const textSection = document.querySelector(".text-section")
        slideIn.observe(imgContainer)
        slideIn.observe(textSection)
        document.querySelectorAll("input").forEach(input => slideIn.observe(input))
        document.querySelectorAll(".skill > span")
            .forEach(span => {
                levelUp.observe(span)
            })
        slideIn.observe(document.querySelector("textarea"))

    }
}