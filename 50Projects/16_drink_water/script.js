// 동작만 보고 작성한 로직

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

    // display none이면 layout이 없어지므로 사용자가 봤을때 물이 자연스럽게 차오르지 않음
    // visibility를 쓰고 height를 0으로 주면서 물이 자연스럽게 차오르도록 구현
    if (cupCount === cupWaterCount) {
        remained.style.visibility = "hidden";
    } else {
        remained.style.visibility = "visible";
        remained.style.height = '0';
    }

    percentage.style.height = `${getPercentage(cupWaterCount, cupCount)}%`;
    percentage.innerText = getPercentage(cupWaterCount, cupCount) === 0 ? "" : `${getPercentage(cupWaterCount, cupCount)}%`;
    liters.innerText = `${getLiter(cupWaterCount, cupCount)}L`;
}

// 강의 제공 로직

