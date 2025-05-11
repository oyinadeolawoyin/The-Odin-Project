#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    description TEXT
);

CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    description TEXT,
    price INTEGER,
    quantity INTEGER,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name, description)
VALUES
('Mystery', 'Full of twist and turns'),
('Romance', 'Like Romeo and Juliet');

INSERT INTO items (name, description, price, quantity, category_id)
VALUES
('Married to the devil''s son', 'Story about a young man who is the devil''s son.', 2, 5, 2),
('Flame', 'A young man believes he is cursed.', 1, 4, 1),
('Storm', 'A young lady who was forced to marry her enemies.', 1, 4, 2),
('The forest night', 'A young lady vampire.', 1, 4, 1);
`;

async function main() {
    console.log("seeding... ");
    const client = new Client({
        connectionString: "postgresql://oyinade:Bunkumi@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!")
}

main();