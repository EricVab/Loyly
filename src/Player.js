// Model
const playerId = "me";

class Player {
    // the player is the user, it controls the state of the player like coins, items, current staminaN etc
    constructor(name) {
        this.name = name;
        this.coins = 0;
        this.inventory = {
            WATER: 0,
            BEER: 0,
            ICE_CREAM: 0,
            HAT: 0,
            WOOD: 0
        };
        this.currentStamina = 0;
        this.maxStamina = 100;
    }

    setStaminaToMaxStamina() {
        this.currentStamina = this.maxStamina;
    }

    decreaseCurrentStamina(value) {
        this.currentStamina = Math.max(0, this.currentStamina - value);
    }

    isDefeated() {
        return this.currentStamina <= 0;
    }

    getCurrentStamina() {
        console.log("Getting current stamina:", this.currentStamina);
        return this.currentStamina;
    }
}

