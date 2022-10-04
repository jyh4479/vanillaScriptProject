const smallCups = document.querySelectorAll(".cup-small");
const remained = document.querySelector(".remained");
const percentage = document.querySelector(".percentage");
const liters = document.getElementById("liters");

const goalLiter = 2;

smallCups.forEach(smallCup => {
    smallCup.addEventListener("click", (e) => {
        if (smallCup.classList.contains("full")) {
            smallCup.classList.remove("full");
            checkRemained();
        } else {
            smallCup.classList.add("full");
            checkRemained();
        }
    })
})

liters.innerText = `${goalLiter}L`;

const getPercentage = (a, b) => {
    return (a / b) * 100;
}

const getLiter = (a, b) => {
    const percentage = (a / b) * 100;
    return goalLiter - (goalLiter * percentage / 100);
}

const checkRemained = () => {
    const cupCount = smallCups.length;

    let cupWaterCount = 0;

    smallCups.forEach(smallCup => {
        if (smallCup.classList.contains("full")) {
            cupWaterCount++;
        }
    })

    if (cupCount === cupWaterCount) {
        remained.style.display = "none";
    } else {
        remained.style.display = "flex";
    }

    percentage.style.height = `${getPercentage(cupWaterCount, cupCount)}%`;
    percentage.innerText = getPercentage(cupWaterCount, cupCount) === 0 ? "" : `${getPercentage(cupWaterCount, cupCount)}%`;
    liters.innerText = `${getLiter(cupWaterCount, cupCount)}L`;
}

