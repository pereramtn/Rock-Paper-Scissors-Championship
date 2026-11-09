

        // Game Variables
        let playerScore = 0;
        let computerScore = 0;
        let currentRound = 0;

        const totalRounds = 10;

        // Hand Emojis
        const hands = {
            rock: "✊",
            paper: "✋",
            scissors: "✌️"
        };


        // Play Game Function
        function playGame(playerChoice) {

            // Stop after 10 rounds
            if (currentRound >= totalRounds) {
                return;
            }

            // Generate Computer Choice
            let options = ["rock", "paper", "scissors"];

            let computerChoice =
                options[Math.floor(Math.random() * 3)];


            // Increase Round
            currentRound++;


            // Display Hands
            document.getElementById("playerHand").innerHTML =
                hands[playerChoice];

            document.getElementById("computerHand").innerHTML =
                hands[computerChoice];


            // Check Winner
            if (playerChoice === computerChoice) {

                document.getElementById("result").innerHTML =
                    "🤝 It's a Draw!";

                document.getElementById("description").innerHTML =
                    "Both selected " + playerChoice + ".";

            }

            else if (

                (playerChoice === "rock" && computerChoice === "scissors") ||

                (playerChoice === "paper" && computerChoice === "rock") ||

                (playerChoice === "scissors" && computerChoice === "paper")

            ) {

                playerScore++;

                document.getElementById("result").innerHTML =
                    "🏆 You Win This Round!";

                document.getElementById("description").innerHTML =
                    playerChoice + " beats " + computerChoice + ".";

            }

            else {

                computerScore++;

                document.getElementById("result").innerHTML =
                    "😢 Computer Wins This Round!";

                document.getElementById("description").innerHTML =
                    computerChoice + " beats " + playerChoice + ".";

            }


            // Update Score Board
            document.getElementById("playerScore").innerHTML =
                playerScore;

            document.getElementById("computerScore").innerHTML =
                computerScore;


            // Update Rounds
            let remaining = totalRounds - currentRound;

            document.getElementById("roundsLeft").innerHTML =
                remaining;

            document.getElementById("roundText").innerHTML =
                "Round " + currentRound + " / " + totalRounds;


            // Update Progress Bar
            document.getElementById("progressBar").style.width =
                (currentRound / totalRounds * 100) + "%";


            // Finish after 10 rounds
            if (currentRound === totalRounds) {

                finishGame();

            }

        }


        // Final Winner Function
        function finishGame() {

            // Disable Hand Buttons
            document.querySelectorAll(".choice").forEach(function(button) {
                button.disabled = true;
            });


            // Show Final Winner
            let winnerMessage = "";
            let winnerDescription = "";

            if (playerScore > computerScore) {

                winnerMessage = "🏆 YOU ARE THE CHAMPION!";

                winnerDescription =
                    "Congratulations! You won the championship " +
                    playerScore + " - " + computerScore + "!";

            }

            else if (computerScore > playerScore) {

                winnerMessage = "🤖 COMPUTER IS THE CHAMPION!";

                winnerDescription =
                    "Computer won the championship " +
                    computerScore + " - " + playerScore + ".";

            }

            else {

                winnerMessage = "🤝 CHAMPIONSHIP DRAW!";

                winnerDescription =
                    "Both finished with " + playerScore +
                    " points. It's a tie!";

            }


            document.getElementById("winnerMessage").innerHTML =
                winnerMessage;

            document.getElementById("winnerDescription").innerHTML =
                winnerDescription;


            document.getElementById("finalResult").style.display =
                "block";


            document.getElementById("result").innerHTML =
                "🎯 All 10 Rounds Completed!";

            document.getElementById("description").innerHTML =
                "Check the final championship result above.";

        }


        // Restart Game Function
        function restartGame() {

            playerScore = 0;
            computerScore = 0;
            currentRound = 0;


            // Reset Scores
            document.getElementById("playerScore").innerHTML = 0;

            document.getElementById("computerScore").innerHTML = 0;

            document.getElementById("roundsLeft").innerHTML = 10;


            // Reset Progress
            document.getElementById("roundText").innerHTML =
                "Round 0 / 10";

            document.getElementById("progressBar").style.width =
                "0%";


            // Reset Hands
            document.getElementById("playerHand").innerHTML = "❔";

            document.getElementById("computerHand").innerHTML = "❔";


            // Reset Messages
            document.getElementById("result").innerHTML =
                "🎮 Let's Start!";

            document.getElementById("description").innerHTML =
                "Select your hand to play the first round.";


            // Hide Final Result
            document.getElementById("finalResult").style.display =
                "none";


            // Enable Buttons
            document.querySelectorAll(".choice").forEach(function(button) {
                button.disabled = false;
            });

        }
