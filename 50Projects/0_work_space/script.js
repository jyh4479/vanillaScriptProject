// const main = () => {
//     console.log(arguments);
// }

const main = function () {
    console.log(arguments)
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

main(a, b)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function marry(man, woman) {
    woman.husband = man
    man.wife = woman

    return {
        father: man,
        mother: woman,
    }
}

let family = marry(
    {
        name: 'Jhon',
    },
    {
        name: 'Ann',
    }
)

console.log(family)
