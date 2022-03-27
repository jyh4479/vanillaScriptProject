// 내가 생각한 js 동작 --> 왜 안되는지 생각해보기 (해결)
const faqList = document.querySelectorAll(".faq");

faqList.forEach(faq => {
    //css 선언은 class를 . 으로 붙일 수 있지만 js에서 하위 class pick은 떨어뜨려서 해야함
    const open = faq.querySelector(".faq-toggle .fa-chevron-down");
    const close = faq.querySelector(".faq-toggle .fa-times");

    open.addEventListener("click", () => {
        faq.classList.add("active");
    })
    close.addEventListener("click", () => {
        faq.classList.remove("active");
    })

})

// 강의 js 동작