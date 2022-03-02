const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    // innerHeight 현재 브라우저의 높이 ( / 5 * 4 는 좀 더 알아봐야함)
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // getBoundingClientRect 현재 viewport와 객체의 상대적인 값
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

window.addEventListener('scroll', checkBoxes)

//초기 화면을 위한 첫 실행 --> 그 후 scroll 이벤트가 있으면 계속 실행함
checkBoxes()


