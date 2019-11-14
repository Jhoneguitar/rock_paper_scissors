let playerScore=0;
let computerScore=0;
const buttons=document.querySelectorAll('button');
const container=document.querySelector('#container');
const resetButton=document.createElement('button');
resetButton.setAttribute('style', 'font-size:20px');
resetButton.innerHTML="Reset Game";
const roundCount=document.querySelector('#round');
let round=0;

		

		function computerPlay(){

			let pcChoice = Math.random();
			let result;
			if (pcChoice<0.3) {
				result="Rock";
				return result;
			}	
			else if (pcChoice>0.3&&pcChoice<0.6) {
				result="Paper";
				return result;
			}		
			else{
				result="Scissors";
			    return result;
			    }
		}
		
		function playRound(playerSelection, computerSelection){

			let playerSel=playerSelection;
			let playerCom=computerSelection;
			round++;
			roundCount.textContent="Round: "+round;
			
			
			//tie
			if (playerSel==playerCom) {
				document.getElementById("result").innerHTML ="This is a tie! <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById("score-human").innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML= "Computer Score: "+ computerScore;
            }
			
			//Rock beats scissors
			if (playerSel=="Rock"&&playerCom=="Paper"){
				computerScore++;
				document.getElementById('result').innerHTML ="You Lose! Paper beats Rock <br> Your selection: "+playerSel+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}
			else if (playerSel=="Rock"&&playerCom=="Scissors") {
				playerScore++;
				document.getElementById('result').innerHTML ="You Won! Rock beats Scissors <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}

			//paper beats rock
			if (playerSel=="Paper"&&playerCom=="Rock") {
				playerScore++;
				document.getElementById('result').innerHTML ="You Won! Paper beats Rock <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}
			else if (playerSel=="Paper"&&playerCom=="Scissors") {
				computerScore++;
				document.getElementById('result').innerHTML ="You Lose! Scissors beats Paper <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}

			//scissors beats paper
			if (playerSel=="Scissors"&&playerCom=="Rock") {
				computerScore++;
				document.getElementById('result').innerHTML ="You Lose! Rock beats Scissors <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}
			else if (playerSel=="Scissors"&&playerCom=="Paper") {
				playerScore++;
				document.getElementById('result').innerHTML ="You Won! Scissors beats Paper <br> Your selection: "+playerSel+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Computer selection: "+playerCom;
                document.getElementById('score-human').innerHTML ="Your Score: "+playerScore;
                document.getElementById("score-pc").innerHTML=" Computer Score: "+ computerScore;
			}

			

			if (playerScore==5) {
				document.getElementById('totalScore').innerHTML="You are the winner";
				buttons.forEach((item)=>{item.disabled=true;});
				container.appendChild(resetButton);
			}
			if (computerScore==5) {
				document.getElementById('totalScore').innerHTML="Computer is the winner";
				buttons.forEach((item)=>{item.disabled=true;});
				container.appendChild(resetButton);
			}
			resetButton.addEventListener('click', ()=>{resetGame()} );

		}


		  
		function resetGame(){
		
			playerScore=0;
			computerScore=0;
			document.getElementById('result').innerHTML="";
			document.getElementById('score-human').innerHTML="";
			document.getElementById('score-pc').innerHTML="";
			document.getElementById('totalScore').innerHTML="";
			container.removeChild(resetButton);
			buttons.forEach((item)=>{item.disabled=false;});
			round=0;
			roundCount.textContent="Round: ";
			
		}

		
		buttons.forEach(function(button){
			button.addEventListener('click', function(){
				const playerSelection=button.id;
				const computerSelection=computerPlay();
				playRound(playerSelection, computerSelection);
			});
		});
