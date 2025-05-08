#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    name VARCHAR (255 ),
    added TIMESTAMP
);

INSERT INTO messages (text, name, added)
VALUES
('Hi, there!', 'Amando', '2025-05-07 14:30:00'),
('Hellp World!', 'Charles', '2025-02-07 11:30:00'),
('I need some money', 'Isabella', '2025-05-07 14:00:00'),
('Hey, Do you want me to come over?', 'Chris', '2025-02-06 14:30:00'),
('Can we talk?', 'Maria', '2025-05-07 14:30:00'),
('Happy May! Wishing all the best in it.', 'Chris', '2025-05-07 16:30:00');

`

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://oyinade:letsoar@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();