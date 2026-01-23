class CurrencyManager {
    // manages the currency system of the game, like coins, gems, etc.
    constructor() {
        this.coins = 0;
    }

    addCoins(amount) {
        this.coins += amount;
    }

    spendCoins(amount) {
        if (amount <= this.coins) {
            this.coins -= amount;
            return true;
        }
        return false;
    }

    getCoinBalance() {
        return this.coins;
    }

}