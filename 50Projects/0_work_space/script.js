// const main = () => {
//     console.log(arguments);
// }

const main = function () {
    console.log(arguments);

    for (let i = 0; i < arguments.length; i++) {
        arguments[i]()
    }

}

const a = () => {
    console.log(100)
}

const b = () => {
    console.log(200)
}

main(a, b);
