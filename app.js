function getComputerChoice(){
    let choices = ['rock','paper', 'scissors']

    let random_num = Math.floor(Math.random()*3)
    return choices[random_num];    
}

function getHumanChoice(){
    let humanchoice = prompt("enter your choice: ")

    return humanchoice;
    
}



function playGame(){

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice,computerChoice){
        let statement =`your choice is ${humanChoice}
        computer choice is ${computerChoice}`
        let lower_case_human_choice = humanChoice.toLowerCase()
        if (lower_case_human_choice === computerChoice){
            return statement.concat(`
                its a tie you both picked ${humanChoice}`)
        }
        if ((lower_case_human_choice === 'rock' && computerChoice === 'scissors') || 
        (lower_case_human_choice === 'scissors' && computerChoice === 'paper') || 
        (lower_case_human_choice === 'paper' && computerChoice === 'rock')){
            humanScore+=1
            return statement.concat(`
                you win ${humanChoice} beats ${computerChoice}`)

        }else{
            computerScore+=1
            return statement.concat(`
                you lose ${computerChoice} beats ${humanChoice}`)
        }
    /*
    rock beats scissors
    scissors beats paper
    paper beats rock
    */    
}

for (let i=0; i<5; i++){
    console.log('ROUND '.concat(`${i+1}`));
    
    console.log(playRound(getHumanChoice(),getComputerChoice()))
    console.log('computer: '+computerScore, 'you: '+humanScore);
    
}

}

playGame()

