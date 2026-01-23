document.addEventListener('DOMContentLoaded', function() {
    const gameManager = new GameManager();
    const uiController = new UIController(gameManager);
    uiController.initialize();
    // If you have other controllers or managers to initialize, do it here.
});