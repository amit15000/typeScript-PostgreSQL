import { Client } from 'pg';


const client = new Client({
    //hell not working
    host: 'localhost',
    port: 5432,
    database: 'mytestdb',
    user: 'postgres',
    password: 'mysecretpassword',
});

async function createTable() {
    try {
        await client.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Table 'users' created successfully.");
    } catch (err) {
        console.error('Error during table creation:', err);
    } finally {
        await client.end();
    }
}

async function insertData(username, email, password) {
    try {
        await client.connect();
        const queryText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const res = await client.query(queryText, [username, email, password]);
        console.log("Data inserted successfully:", res.rows[0]);
    } catch (err) {
        console.error('Error during data insertion:', err);
    } finally {
        await client.end();
    }
}

async function main() {
    await createTable();
    await insertData("Amit", "15000amitkumar@gmail.com", "xyz");
}

main().catch(console.error);
