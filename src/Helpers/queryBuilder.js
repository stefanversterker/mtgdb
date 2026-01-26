function queryBuilder({ cardColor, cardType, searchTerm}) {
    const tokens = [];

    if (searchTerm) {
        tokens.push(searchTerm);
    }

    if (cardColor) {
        tokens.push(`c:${cardColor}`);
    }

    if (cardType) {
        tokens.push(`type:${cardType}`);
    }

    if (!cardType && !cardColor && !searchTerm) {
        tokens.push("game:paper");
    }
    return tokens.join (" ")
}

export default queryBuilder