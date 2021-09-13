
        const elts = document.querySelectorAll(".nav-container > a")
        elts.forEach(ele => {
            ele.addEventListener("click", () => {
                document.querySelectorAll(".nav-container > a").forEach(a => 
                    a.classList.remove("active-link"))
                ele.classList.add("active-link")
            })
        } )
