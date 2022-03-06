const splits = document.querySelectorAll('.split')

splits.forEach(split => {
    split.addEventListener('mouseenter', () => {
        split.classList.remove('small')
        split.classList.add('big')
        splits.forEach(removeSplit => {
            if (removeSplit !== split) {
                removeSplit.classList.add('small')
            }
        })
    })

    split.addEventListener('mouseleave', () => {
        splits.forEach(removeSplit => {
            removeSplit.classList.remove('big')
            removeSplit.classList.remove('small')
        })
    })
})