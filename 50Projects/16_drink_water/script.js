const smallCups = document.querySelectorAll(".cup-small");

smallCups.forEach(smallCup => {
    smallCup.addEventListener("click", (e) => {
        if (smallCup.classList.contains("full")) {
            smallCup.classList.remove("full");
        } else {
            smallCup.classList.add("full");
        }
    })
})