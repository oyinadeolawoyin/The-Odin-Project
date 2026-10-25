#! /usr/bin/env node
require('dotenv').config({ path: '../.env' });

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS profiles (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  firstname VARCHAR ( 255 ),
  lastname VARCHAR ( 255 ),
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  admin BOOLEAN DEFAULT FALSE,
  membership BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  content TEXT,
  date TIMESTAMP,
  profile_id INTEGER,
  FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

`;


async function main() {
  console.log("seeding...");
  
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    // Force IPv4
    host: 'db.jnhwdfuwxbgxrxvtoxaj.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: process.env.DB_PASSWORD || 'anhRPMIkY5HeoCW4'
  });
  
  try {
    await client.connect();
    console.log("✅ Connected to database");
    await client.query(SQL);
    console.log("✅ Tables created successfully!");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();
