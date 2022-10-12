const sounds = ['1', '2', '3', '4', '5', '6']

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)
        song.pause()

        // mp3 시간이 0으로 돌아감.. 이건 무슨 파라미터지..?
        song.currentTime = 0
    })
}
