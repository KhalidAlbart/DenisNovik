window.addEventListener("DOMContentLoaded", () => {
    let toggler = true
    
    createLinks()

    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        const blockNav = document.querySelector(".nav")
        const blockLang = document.querySelector(".lang")
        const parentNode = document.querySelector(".header .container")

        toggler = !toggler

        parentNode.innerHTML = ""
        
        createLinks([...blockNav.children])

        document.querySelector(".hamburger-menu img").src = changeIcon()

        parentNode.classList.toggle("open")

        setTimeout(() => pasteElementsToNode(parentNode, [blockNav, blockLang]), 500)
    })

    function createLinks(links = 0) {
        navLinks = links === 0 ? document.querySelectorAll(".nav__link") : links
        navLinks.forEach(link => 
            link.addEventListener("click", (event) => {
                document.querySelector(".nav__link_active").classList.remove("nav__link_active")
                link.classList.add("nav__link_active")
                document.querySelector(".header .container").classList.remove("open")
                toggler = true
                document.querySelector(".hamburger-menu img").src = changeIcon()
            })
        )
    }

    function changeIcon() {
        const ICON_PATH = "../source/icons/"
        const ICON_OPEN = "menu-open.png"
        const ICON_CLOSE = "menu-close.png"

        const icon = toggler ? ICON_OPEN : ICON_CLOSE

        return ICON_PATH + icon
    }

    function pasteElementsToNode(parentNode, [...children]) {
        children.forEach(childNode => parentNode.appendChild(childNode))
    }
})