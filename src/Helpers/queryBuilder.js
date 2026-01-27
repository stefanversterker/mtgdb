function queryBuilder({ cardColor, cardType, searchTerm, cmcRange}) {
    const tokens = [];
    const [minCmc, maxCmc] = cmcRange;

    if (searchTerm) {
        tokens.push(searchTerm);
    }

    if (cardColor) {
        tokens.push(`c:${cardColor}`);
    }

    if (cardType) {
        tokens.push(`type:${cardType}`);
    }

    if (minCmc > 0) {
        tokens.push(`cmc>=${cmcRange[0]}`)
    }

    if (maxCmc < 16) {
        tokens.push(`cmc<=${cmcRange[1]}`)
    }

    if (!cardType && !cardColor && !searchTerm && cmcRange[0] === 0 && cmcRange[1] === 16) {
        tokens.push("game:paper");
    }
    return tokens.join (" ")
}

export default queryBuilder