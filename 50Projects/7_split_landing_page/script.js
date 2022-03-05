// const split = document.querySelector('.split')
const splits = document.querySelectorAll('.split')

splits.forEach(split => {
    split.addEventListener('mouseover', () => {
        split.classList.remove('small')
        split.classList.add('big')
    })

    // split.addEventListener('mouseout', () => {
    //     split.classList.remove('big')
    //     split.classList.add('small')
    // })
})

// splits.addEventListener('mouseover', () => {
//     console.log('1')
// })

// window.addEventListener('ho')