//word bank
const carbon = [`c`, `a`, `r`, `b`, `o`, `n`]
const oxygen = [`o`, `x`, `y`, `g`, `e`, `n`]
const nitrogen = [`n`, `i`, `t`, `r`, `o`, `g`, `e`, `n`]
const chlorine = [`c`, `h`, `l`, `o`, `r`, `i`, `n`, `e`]

const wordbank = [carbon, oxygen, nitrogen, chlorine]


//set up initial variables
let wins = 0
let losses = 0
let random = Math.floor(Math.random() * wordbank.length)
let gLeft = 10
let gSoFar = ``

//NEW GAME: RESTART FUNCTION HERE

    random = Math.floor(Math.random() *  wordbank.length)
    let solution = wordbank[random]     //"solution" is the array for the chosen word.
    let unsolved = solution.slice(0)    //"unsolved": independent array of the unsolved characters
        for(let i=0; i<unsolved.length;i++) {
            unsolved[i] = "_ "
        }
console.log(solution) //delete later
console.log(unsolved) //delete later
    let word = function stringify() {       //"word" = string of unsolved word sent to HTML.
        let string = ''
        for (let i=0; i<unsolved.length; i++) {
            string = string + unsolved[i]
        }
        return string
        }
console.log(word())
    document.getElementById("word").textContent=word()


