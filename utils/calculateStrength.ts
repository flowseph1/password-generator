export const calculateStrength = (exChangeSlider: number, exChangeBoxes: number) => {
    const strengthLevel = exChangeSlider * exChangeBoxes;

    let currentLevelText = '';

    if (strengthLevel > 81) {
        currentLevelText = 'STRONG';
    }
    if (strengthLevel > 49 && strengthLevel < 81) {
        currentLevelText = 'MEDIUM';
    }
    if (strengthLevel > 24 && strengthLevel < 50) {
        currentLevelText = 'POOR';
    }
    if (strengthLevel > 0 && strengthLevel < 25) {
        currentLevelText = 'WEAK';
    }

    return currentLevelText;
};
