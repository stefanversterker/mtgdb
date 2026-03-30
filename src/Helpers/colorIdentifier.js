function colorIdentifier(deckData) {
    const colors = new Set();
    deckData.forEach((card) => {
        if (!card.color_identity) return;
        card.color_identity.forEach((color) => {
            colors.add(color)
        })
    })
    return Array.from(colors);
}


export default colorIdentifier