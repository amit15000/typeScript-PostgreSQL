import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username, email, password) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    // Connect to the PostgreSQL client
    await client.connect();

    // Create the users table if it doesn't exist
    await createUsersTable();

    // Insert data into the users table
    await insertIntoUsersTable(username, email, password);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await client.end();
  }

  async function createUsersTable() {
    const createQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await client.query(createQuery);
    console.log('Table created successfully');
  }

  async function insertIntoUsersTable(username, email, password) {
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res);
  }
}

// Call the function with sample data
insertData('username5', 'user5@example.com', 'user_password');
