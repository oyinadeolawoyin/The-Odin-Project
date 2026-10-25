const charactersService = require("../service/charactersService");

async function characters(req, res) {
    try {
        const characters = await charactersService.fetchCharacters();
        res.status(200).json({ characters: characters });
    } catch(error) {
        res.status(500).json({ message: error.message || "Something went wrong."});
    }
}

module.exports = {
    characters
}