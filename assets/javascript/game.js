//word bank
const carbon = [`c`, `a`, `r`, `b`, `o`, `n`]
const oxygen = [`o`, `x`, `y`, `g`, `e`, `n`]
const nitrogen = [`n`, `i`, `t`, `r`, `o`, `g`, `e`, `n`]
const chlorine = [`c`, `h`, `l`, `o`, `r`, `i`, `n`, `e`]
const fluorine = [`f`, `l`, `u`, `o`, `r`, `i`, `n`, `e`]
const plutonium = [`p`, `l`, `u`, `t`, `o`, `n`, `i`, `u`, `m`]
const uranium = [`u`, `r`, `a`, `n`, `i`, `u`, `m`]
const sulfur = [`s`, `u`, `l`, `f`, `u`, `r`]
const helium = [`h`, `e`, `l`, `i`, `u`, `m`]
const hydrogen = [`h`, `y`, `d`, `r`, `o`, `g`, `e`, `n`]
const boron = [`b`, `o`, `r`, `o`, `n`]

const wordbank = [carbon, oxygen, nitrogen, chlorine, plutonium, uranium, sulfur, helium, hydrogen, boron]


//set up initial variables
let wins = 0
let losses = 0
// let random = Math.floor(Math.random() * wordbank.length)
let gLeft = 10
let gSoFar = ``
let solution;
let unsolved;
//DEFINING variables that needa be re-defined upon restarting the game
// let solution = wordbank[random]     //"solution" is the array for the chosen word.
// let unsolved = solution.slice(0)    //"unsolved": independent array of the unsolved characters
// for(let i=0; i<unsolved.length;i++) {
//   unsolved[i] = " __ "
// }
// let word = function stringify() {       //"word" = string of unsolved word sent to HTML.
//   let string = ''
//     for (let i=0; i<unsolved.length; i++) {
//         string = string + unsolved[i]
//       }
//     return string
// }
// document.getElementById("word").textContent=word()
// document.getElementById("gLeft").textContent=`Guesses Left: ${gLeft}`
// document.getElementById("gSoFar").textContent=`Guesses so Far: ${gSoFar}`
let word = function stringify() {       //"word" = string of unsolved word sent to HTML.
          let string = ''
          for (let i=0; i<unsolved.length; i++) {
              string = string + unsolved[i]
          }
        return string
        }
//NEW GAME: RESTART FUNCTION HERE
const restart = function(){
    let random = Math.floor(Math.random() *  wordbank.length)
    solution = wordbank[random]     //"solution" is the array for the chosen word.
    unsolved = solution.slice(0)    //"unsolved": independent array of the unsolved characters
        for(let i=0; i<unsolved.length;i++) {
            unsolved[i] = " __ "
        }        
    gLeft = 10
    gSoFar = ``
document.getElementById("word").textContent=word()
document.getElementById("gLeft").textContent=`Guesses Left: ${gLeft}`
document.getElementById("gSoFar").textContent=`Guesses so Far: ${gSoFar}`
document.getElementById("wins").textContent=`Wins: ${wins}`
document.getElementById("losses").textContent=`Losses: ${losses}`
}
    //defining win-check function:
    let isEqual = function(solution, unsolved) {
        for (let k=0; k<50; k++) {
            if (solution[k]!==unsolved[k])
                return false
        }        
        return true
    }
restart()
//Now accepting key inputs
document.onkeyup = function guess (event) {
 if (event.keyCode >=65 && event.keyCode <= 90) { //ensures that only letters are guesses

    if (solution.includes(event.key)){      //if the pressed key is in the solution array...
        for (let i=0; i<unsolved.length; i++) {
            if (solution[i]===event.key) {
                unsolved[i] = event.key         //changes unsolved array to include letters
                document.getElementById("word").textContent=word()
                    if(isEqual(solution, unsolved)) { //CHECK IF USER WON using function isEqual
                        wins = wins + 1
                        console.log("wins: " + wins) //checking if wins is changing by 1
                        alert("Good job! Let's try another!")
                        restart()
                    }
            }
        }
    } 

    else {  //guess not in the word                                  
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
            restart()
        }
    }
 }
}