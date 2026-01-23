class NPC {
    constructor(name, maxStamina) {
        this.name = name;
        this.maxStamina = maxStamina;
        this.currentStamina = maxStamina;
    }

    decreaseCurrentStamina(value) {
        this.currentStamina = Math.max(0, this.currentStamina - value);
    }

    isDefeated() {
        return this.currentStamina <= 0;
    }
}