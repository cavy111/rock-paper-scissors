function getComputerChoice(){
    let choices = ['rock','paper', 'scissors']

    let random_num = Math.floor(Math.random()*3)
    return choices[random_num];    
}

function getHumanChoice(){
    let humanchoice = prompt("enter your choice: ")

    return humanchoice;
    
}



// function playGame(){

    

    

// // for (let i=0; i<5; i++){
// //     console.log('ROUND '.concat(`${i+1}`));
    
// //     console.log(playRound(getHumanChoice(),getComputerChoice()))
// //     console.log('computer: '+computerScore, 'you: '+humanScore);
    
// // }

// }

const comp_choice_display = document.querySelector('.comp-choice')
const user_choice_display = document.querySelector('.user-choice')
const round_statement_display = document.querySelector('.round_statement_display')
const user_score_display = document.querySelector('.user-score')
const comp_score_display = document.querySelector('.comp-score')

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
        let statement =`your choice is ${humanChoice}

        computer choice is ${computerChoice}`
        user_choice_display.textContent=humanChoice
        comp_choice_display.textContent=computerChoice
        let lower_case_human_choice = humanChoice.toLowerCase()
        if (lower_case_human_choice === computerChoice){
            round_statement_display.textContent = `its a tie you both picked ${humanChoice}`
            return statement.concat(`
                its a tie you both picked ${humanChoice}`)
        }
        if ((lower_case_human_choice === 'rock' && computerChoice === 'scissors') || 
        (lower_case_human_choice === 'scissors' && computerChoice === 'paper') || 
        (lower_case_human_choice === 'paper' && computerChoice === 'rock')){
            humanScore+=1
            user_score_display.textContent=humanScore
            if (humanScore >=5){
                alert(`Congratulations You won. Final score you: ${humanScore} - comp: ${computerScore}`)
                humanScore = 0
                computerScore = 0
                comp_choice_display.textContent=''
                user_score_display.textContent=''
                round_statement_display.textContent=''
                comp_score_display.textContent=0
                user_score_display.textContent=0
                return
            }
            round_statement_display.textContent = `you win ${humanChoice} beats ${computerChoice}`
            return statement.concat(`
                you win ${humanChoice} beats ${computerChoice}`)

        }else{
            computerScore+=1
            comp_score_display.textContent=computerScore
            if (computerScore >=5){
                alert(`Better Luck next time You lost. Final score you: ${humanScore} - comp: ${computerScore}`)
                humanScore = 0
                computerScore = 0
                comp_choice_display.textContent=''
                user_score_display.textContent=''
                round_statement_display.textContent=''
                comp_score_display.textContent=0
                user_score_display.textContent=0
                return
            }
             round_statement_display.textContent = `you lose ${computerChoice} beats ${humanChoice}`
            return statement.concat(`
                you lose ${computerChoice} beats ${humanChoice}`)
        }
    /*
    rock beats scissors
    scissors beats paper
    paper beats rock
    */    
}

// playGame()

const btns = document.querySelectorAll('button')
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log(playRound(btn.textContent,getComputerChoice()))
    })    
})



