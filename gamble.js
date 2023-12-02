var balance = prompt("pila imo kwarta?");

        function getRandomColor() {
            var colors = ['yellow', 'white', 'violet', 'blue', 'red', 'green'];
            var randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        }

        function playGame() {
            var chosenColor;

            while (true) {
                chosenColor = prompt("Choose a color (yellow, white, violet, blue, red, green):");

                if (chosenColor && chosenColor.toLowerCase() === 'yellow' || chosenColor.toLowerCase() === 'white' || chosenColor.toLowerCase() === 'violet' || chosenColor.toLowerCase() === 'blue' || chosenColor.toLowerCase() === 'red' || chosenColor.toLowerCase() === 'green') {
                    break;
                } else {
                    alert("wala sa pili-anan bobo");
                }
            }

            var gameColor = getRandomColor();
            document.getElementById('gameColor').style.backgroundColor = gameColor;

            if (chosenColor.toLowerCase() === gameColor) {
                balance *= 2;
                alert("hayahaya sa boang oi.  balance: " + balance + " pesos.");
            } else {
                balance -= 5;
                alert("bawi lang sunod boss. balance: " + balance + " pesos.");
            }

            updateBalance();
        }

        function updateBalance() {
            document.getElementById('balance').textContent = "Balance: " + balance + " pesos";
        }
