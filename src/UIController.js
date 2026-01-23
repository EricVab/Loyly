// View

class UIController {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.minigameManager = this.gameManager.getMinigameManager();
        console.log('UIController initialized');
    }
    
    initialize() {
        this.bindElements();
        this.attachEventListeners();
        this.setupGameEventListeners();
    }
    
    bindElements() {
        // Get references to DOM elements
        this.startGameBtn = document.getElementById('start-game-btn');
        this.throwWaterBtn = document.getElementById('throw-water-btn');
    }
    
    attachEventListeners() {
        // User clicks "Start Game" button
        this.startGameBtn.addEventListener('click', () => {
            this.handleStartGame();
        });
        
        // User clicks "Throw Water" button (in minigame)
        this.throwWaterBtn.addEventListener('click', () => {
            this.handleThrowWater();
        });
    }
    
    handleStartGame() {
        // Tell GameManager to start the rock-watering minigame
        const playerStamina = this.gameManager.startMinigame();
        this.updatePlayerStamina(playerStamina);
        // Show the game UI
        // this.showMinigameUI(this.minigameManager);
    }
    
    handleThrowWater() {
        // Tell the current minigame to perform the action
        if (this.minigameManager.isActive) {
            const playerStamina = this.minigameManager.throwWater();
            // Optionally handle the effect (e.g., update UI)
            this.updatePlayerStamina(playerStamina);
        }
    }
    
    setupGameEventListeners() {
        // Listen to events from GameManager/Minigames       
        this.gameManager.on('minigameStarted', (minigame) => {
            console.log('Minigame started:', minigame.name);
        });
        
        this.gameManager.on('minigameEnded', (result) => {
            this.showMinigameResults(result);
            this.minigameManager = null;
        });
    }
    
    showMinigameResults(result) {
        alert(`Game over! You earned ${result.coinsEarned} coins!`);
        this.throwWaterBtn.style.display = 'none';
        this.startGameBtn.style.display = 'block';
    }

    updatePlayerStamina(stamina) {
        // Update the UI to reflect the player's current stamina
        const staminaDisplay = document.getElementById('me');
        staminaDisplay.textContent = stamina;
    }
}