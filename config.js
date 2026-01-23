const CONFIG = {
      STATE: {
        START: 'menu'
      },

      USER: {
        MAX_STAMINA: 100,           // starting & cap for user stamina
        BASE_TICK_SPEED: 3,         // default stamina drain speed [units per second]
        DISPLAY_DECIMALS: 0
      },

      NPC: {
        COUNT: 5,                   // how many NPCs to spawn
        STAMINA_STEPS: [50, 100, 150], // NPC max stamina chosen from these
        BASE_TICK_SPEED: 3,         // NPC drain speed [units per second]
        DISPLAY_DECIMALS: 0
      },

      CLICK: {
        // Ranges for click effects (inclusive bounds)
        USER_REDUCTION_RANGE: [25, 50], // Water — user damage
        NPC_REDUCTION_RANGE: [25, 50],  // Water — per NPC damage
        BIRCH_REDUCTION_RANGE: [9, 18], // Birch — affects targeted NPC only
        BIRCH_AFFECTED_BY_HAT: false    // whether Hat also scales Birch clicks
      },

      SEEDS: {
        USER_CLICK: 12345, // seed for user click randomness (Water)
        NPC_CLICK: 67890,  // seed for NPC click randomness (Water)
        NPC_INIT: 13579,   // seed for picking NPC initial stamina steps
        BIRCH: 24680       // seed for Birch per-NPC (each NPC gets a derived stream)
      },

      EFFECTS: {
        BEER: {
          SPEED_DELTA: -1, // additive change to user tick speed (e.g., -1 => 3/s -> 2/s)
          DURATION_S: 10
        },

        WOOD: {
          SPEED_DELTA: +1, // additive change to tick speed (makes counters drain faster)
          DURATION_S: 10,  // similar duration style to Beer
          AFFECTS_USER: true,
          AFFECTS_NPCS: true
        },

        ICE_CREAM: {
          AMOUNT: 80        // "Ice Cream" button amount
        },

        HAT: {
          REDUCTION_FACTOR: 0.20, // Water damage multiplier while Hat is active
          DURATION_S: 15,
          AFFECTS_USER_ONLY: true
        }
      },

      ECONOMY: {
        STARTING_COINS: 0,
        PERSIST_COINS: false, // if true, store coins in localStorage across reloads
        STORAGE_KEY: 'coins_total'
      },

      ITEMS: {
        WATER: { price: 1 },
        BEER: { price: 1 },
        ICE_CREAM: { price: 1 },
        HAT: { price: 1 },
        WOOD: { price: 1 }
      },

      DELAYS: {
        // "Delay" modifier: disable button after pressing for this many seconds
        WATER: 1,
        BEER: 1,
        ICE_CREAM: 1,
        HAT: 1,
        WOOD: 1,
        BIRCH: 1,
        RESET: 0,
        EXIT: 0
      },

      UI: {
        DISABLE_BUTTONS_AT_ZERO: true
      }
    };