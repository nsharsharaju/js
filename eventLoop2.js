let a = true
let c = 1

setTimeout(() => { a = false }, 10000)

const id = setInterval(() => {
    if (a) console.log(c++)
    else clearInterval(id)
}, 1000)