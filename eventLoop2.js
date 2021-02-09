let a = true
let c = 1

setTimeout(() => { a = false }, 10000)

const cb = () => {
    if (a) console.log(c++)
    else clearInterval(id)
}

const id = setInterval(cb, 1000)