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
console.log(word()) //delete later
    document.getElementById("word").textContent=word()


//Now accepting key inputs
document.onkeyup = function guess (event) {
 if (event.keyCode >=65 && event.keyCode <= 90) { //ensures that only letters are guesses
    
    //if the pressed key is in the solution array
    if (solution.includes(event.key)){            
        console.log("nice")







        
    } 

    //guess not in the word
    else {
        if(gLeft!==1) {  //still have more guesses
            gLeft = gLeft - 1
            document.getElementById('gLeft').textContent='Guesses left: ' + gLeft
            gSoFar = gSoFar + event.key
            document.getElementById('gSoFar').textContent='Guesses so far: ' + gSoFar
        }

        else{ //no more guesses: user lost game
            losses = losses + 1
            console.log("losses: " + losses) //checking if wins is changing to 1
            alert(`Sorry! You're out of guesses!`)
            // restart()
        }
    }







 }
}