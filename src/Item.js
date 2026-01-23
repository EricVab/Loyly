// Model

export const ItemTypes = {
    WATER: Symbol('WATER'),
    BEER: Symbol('BEER'),
    WOOD: Symbol('WOOD'),
    ICE_CREAM: Symbol('ICE_CREAM'),
    HAT: Symbol('HAT')
};

export const ITEM_CONFIG = {
    [ItemTypes.WATER]: { name: 'Water', cost: 1, buttonDelaySeconds: 1, durationSeconds: 15, playerTickSpeedChange: -1, NPCTickSpeedChange: -1 },
    [ItemTypes.BEER]: { name: 'Beer', cost: 1, buttonDelaySeconds: 1, durationSeconds: 15, playerTickSpeedChange: -1, NPCTickSpeedChange: -1 },
    [ItemTypes.WOOD]: { name: 'Wood', cost: 1, buttonDelaySeconds: 1, durationSeconds: 15, playerTickSpeedChange: +1, NPCTickSpeedChange: +1 },
    // [ItemTypes.ICE_CREAM]: { name: 'Ice Cream', cost: 1, buttonDelaySeconds: 1, durationSeconds: 15},
    [ItemTypes.HAT]: { name: 'Hat', cost: 1, buttonDelaySeconds: 1, durationSeconds: 15, playerDamageMultiplier: 0.2 }
};

class Item {
    constructor(itemType) {
        if (!ITEM_CONFIG[itemType]) {
            throw new Error('Invalid item type');
        }
        this.cost = ITEM_CONFIG[itemType].cost;
        this.buttonDelaySeconds = ITEM_CONFIG[itemType].buttonDelaySeconds || 0;
        this.durationSeconds = ITEM_CONFIG[itemType].durationSeconds || 0;
        this.playerTickSpeedChange = ITEM_CONFIG[itemType].playerTickSpeedChange || 0;
        this.NPCTickSpeedChange = ITEM_CONFIG[itemType].NPCTickSpeedChange || 0;
        this.playerDamageMultiplier = ITEM_CONFIG[itemType].playerDamageMultiplier || 0;
    }

    getCost() {
        return this.cost;
    }

    getButtonDelaySeconds() {
        return this.buttonDelaySeconds;
    }

    getDurationSeconds() {
        return this.durationSeconds;
    }

    getPlayerTickSpeedChange() {
        return this.playerTickSpeedChange;
    }

    getNPCTickSpeedChange() {
        return this.NPCTickSpeedChange;
    }

    getPlayerDamageMultiplier() {
        return this.playerDamageMultiplier;
    }

    // possibility to change base values for higher levels for example
}