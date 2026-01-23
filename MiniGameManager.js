class MinigameManager {
    // the minigame manager is responsible for managing the state and logic of a minigame
    
    constructor(player) {
        this.player = player;
        this.isActive = false;
        this.NPCList = [];
    }

    start() {
        this.isActive = true;
        this.player.setStaminaToMaxStamina();
        // this.NPCList = NPCList;
        // Initialize minigame state
        return this.player.getCurrentStamina();
    }

    end() {
        this.isActive = false;
        // Clean up minigame state
    }

    throwWater() {
        if (!this.isActive) return;

        this.player.decreaseCurrentStamina(5); // Example value
        return this.player.getCurrentStamina();
    }
    
}