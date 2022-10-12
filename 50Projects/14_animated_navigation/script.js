const toggleButton = document.getElementById('toggle')
const navigationBar = document.getElementById('nav')

toggleButton.addEventListener('click', () =>
    navigationBar.classList.toggle('active')
)
