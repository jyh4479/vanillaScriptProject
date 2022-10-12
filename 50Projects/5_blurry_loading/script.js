const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

// function sleep(ms) {
//     return new Promise((r) => setTimeout(r, ms));
// }
//
// const blurring = async () => {
//     while (load <= 100) {
//         console.log(load)
//         await sleep(30)
//
//         bg.style.filter = `blur(${100 - load}px)`
//         loadText.style.opacity = `${1 - (load / 100)}`
//
//         loadText.innerHTML = `${load}%`
//
//         load++
//     }
// }
//
// blurring().then(r => r)

const blurring = () => {
    load++
    console.log(load)
    if (load >= 100) clearInterval(interval)

    bg.style.filter = `blur(${100 - load}px)`
    loadText.style.opacity = `${1 - load / 100}`

    loadText.innerHTML = `${load}%`
}

let interval = setInterval(blurring, 30)

let test = 0
while (test < 100) {
    console.log(`a${test++}`)
}
