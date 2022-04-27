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
            // 여기서 재귀로 함수를 호출 하는데 다른 언어들과 마찬가지로
            // 뎁스가 깊어지는건지 stack -> queue -> stack 처리로 반복문과 같은 효과를 내는건지 내부적으로 알아볼 필요가 있다.
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})