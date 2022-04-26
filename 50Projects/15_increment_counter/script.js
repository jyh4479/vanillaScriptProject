const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        // html 해당 element에 지정된 값을 가져옴
        // + 부호로 string 값을 정수로 바꿔줌
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})