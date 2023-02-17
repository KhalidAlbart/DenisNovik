window.addEventListener("load", createObserver(), true)

function createObserver() {
    const option = {
        root: null,
        rootMargin: "50px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
    }

    const callback = (entries, observer) => {
        let i = 0
        entries.forEach((entry) => {
            let animationIn = entry.target.attributes["data-in"]?.value
            let animationOut = entry.target.attributes["data-out"]?.value

            if (entry.isIntersecting) {
                entry.target.classList.remove(animationOut)
                entry.target.classList.add(animationIn)
            } else {
                entry.target.classList.remove(animationIn)
                entry.target.classList.add(animationOut)
            }
        })
    }

    const observer = new IntersectionObserver(callback, option)

    const targetElements = document.querySelectorAll(".animate__animated")

    targetElements.forEach(element => {
        observer.observe(element)
    });
}