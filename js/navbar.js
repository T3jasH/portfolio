
        const elts = document.querySelectorAll(".nav-container > a")
        console.log(elts)
        elts.forEach(ele => {
            ele.addEventListener("click", () => {
                console.log("clicked")
                document.querySelectorAll(".nav-container > a").forEach(a => 
                    a.classList.remove("active-link"))
                ele.classList.add("active-link")
            })
        } )
