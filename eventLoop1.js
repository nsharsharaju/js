//Will the loop stops after 2 sec?

let a = true
let c = 0

setTimeout(() => {a=false},2000)

while(a) {
    console.log(c++)
}