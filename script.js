function playGame(gameId) {
    // Simulating loading the game content
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = `<iframe src="game${gameId}.html" width="800" height="600"></iframe>`;
  }
  