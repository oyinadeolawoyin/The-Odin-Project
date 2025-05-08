const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    console.log(rows);
    return rows;
}

async function insertMessages(message, user, added) {
    await pool.query(
        "INSERT INTO messages (text, name, added) VALUES ($1, $2, $3)",
        [message, user, added]
    );
}

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

module.exports = {
    getMessages,
    insertMessages,
    getMessageById
}