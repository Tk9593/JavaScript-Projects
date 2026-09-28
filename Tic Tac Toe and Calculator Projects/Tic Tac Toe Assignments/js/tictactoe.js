// Keep track of whose turn it is.
let activePlayer = 'X';

// Store moves to check for winning combinations.
let selectedSquares = [];

// Place an X or O in a square.
function placeXOrO(squareNumber) {
    // Check that the square has not already been selected.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);

        // Display the current player's image.
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Store the square number and player.
        selectedSquares.push(squareNumber + activePlayer);

        // Check for a win.
        checkWinConditions();

        // Switch players.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // Play the placement sound.
        audio('./media/place.mp3');

        // Check whether it is the computer's turn.
        if (activePlayer === 'O') {
            disableClick();

            // Wait one second before the computer moves.
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }

        // Indicate that the move was successful.
        return true;
    }

    // Select a random available square for the computer.
    function computersTurn() {
        let success = false;
        let pickASquare;

        while (!success) {
            // Generate a square number from 0 through 8.
            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

// PART 5: Check every possible winning combination.
function checkWinConditions() {
    // X: horizontal rows.
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
    }
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508);
    }

    // X: vertical columns.
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558);
    }

    // X: diagonals.
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
    }

    // O: horizontal rows.
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
    }
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508);
    }

    // O: vertical columns.
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
    }

    // O: diagonals.
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
    }

    // Check for a tie if no winning combination was found.
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');

        // Wait half a second before resetting.
        setTimeout(function () {
            resetGame();
        }, 500);
    }

    // Check whether all three moves are in selectedSquares.
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) {
            return true;
        }
    }
}

// Draw an animated line through the winning squares.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    // Starting and ending coordinates.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop =
            requestAnimationFrame(animateLineDrawing);

        // Clear the previous frame.
        c.clearRect(0, 0, 608, 608);

        // Draw the current length of the line.
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        // Animate horizontal, vertical, and downward diagonal lines.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }

            if (y < y2) {
                y += 10;
            }

            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // Animate the upward diagonal through squares 6, 4, and 2.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }

            if (y > y2) {
                y -= 10;
            }

            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    // Clear the winning line from the canvas.
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    // Temporarily prevent clicking and play the win sound.
    disableClick();
    audio('./media/winGame.mp3');

    // Start drawing the winning line.
    animateLineDrawing();

    // Clear the line and reset after one second.
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000);
}
// Draw an animated line through the winning squares.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    // Starting and ending coordinates.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // Animate the winning line.
    function animateLineDrawing() {
        const animationLoop =
            requestAnimationFrame(animateLineDrawing);

        // Clear the previous frame.
        c.clearRect(0, 0, 608, 608);

        // Draw the line.
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        // Horizontal, vertical, and downward diagonal lines.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }

            if (y < y2) {
                y += 10;
            }

            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // Upward diagonal through squares 6, 4, and 2.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }

            if (y > y2) {
                y -= 10;
            }

            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    // Clear the winning line.
    function clear() {
        const animationLoop = requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);

        cancelAnimationFrame(animationLoop);
    }

    // Disable clicking temporarily.
    disableClick();

    // Play the win sound.
    audio('./media/winGame.mp3');

    // Start the animation.
    animateLineDrawing();

    // Clear the canvas and reset after one second.
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000);
}

// Disable clicking for one second.
function disableClick() {
    document.body.style.pointerEvents = 'none';

    setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

// Play the supplied sound file.
function audio(audioURL) {
    let sound = new Audio(audioURL);
    sound.play();
}

// Disable clicking for one second.
function disableClick() {
    document.body.style.pointerEvents = 'none';

    setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

// Play the supplied sound file.
function audio(audioURL) {
    let sound = new Audio(audioURL);
    sound.play();
}

// Clear all nine squares and remove the stored moves.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }

    selectedSquares = [];
}