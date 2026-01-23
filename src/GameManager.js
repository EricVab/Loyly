// Controller

class GameManager extends EventEmitter {
    // the game manager is the central coordinator of the game state and logic and of minigames

    constructor() {
        super();
        this.player = new Player("You");
        // this.currencyManager = new CurrencyManager();

        this.minigame = new MinigameManager(this.player);
    }

    startMinigame() {
        // NPCList = this.generateNPCsForMinigame();
        this.minigame.start();
        return this.player.getCurrentStamina();
    }

    endMinigame() {
        this.minigame.end();
    }

    getMinigameManager() {
        return this.minigame;
    }

    generateNPCsForMinigame() {
        // Generate and return a list of NPCs for the minigame
        let npc1 = new NPC("Rock 1");
        let npc2 = new NPC("Rock 2");
        return [npc1, npc2];
    }
    
}