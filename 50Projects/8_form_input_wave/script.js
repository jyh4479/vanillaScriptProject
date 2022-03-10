const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        // index를 활용해 각각 delay 적용
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        // 문자로 반환하기 위한 join
        .join('')
})