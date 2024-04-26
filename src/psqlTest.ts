import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "mysecretpassword",
});
// Async function to insert data into a table
async function insertData(username, email, password) {
  try {
    // Connect to the PostgreSQL client
    await client.connect();

    // Create the users table if it doesn't exist
    await createUsersTable();

    // Insert data into the users table
    await insertIntoUsersTable(username, email, password);
  } catch (error) {
    console.error("Error:", error);
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
    console.log("Table created successfully");
  }

  async function insertIntoUsersTable(username, email, password) {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res);
  }
}

// Call the function with sample data
// insertData('username2', 'amitmaurya15000@gmail.com', '123123123');

const getUser = async (email: String) => {
  try {
    await client.connect();
    const inserQuery = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const res = await client.query(inserQuery, values);

    if (res.rows.length > 0) {
      console.log("User found", res.rows[0]);
      return res.rows[0];
    } else {
      console.log("No user found with Email Id : ", email);
      return null;
    }
  } catch (error) {
    console.error("Error during fetching user:", error);
    throw error;
  } finally {
    await client.end();
  }
};

async function createAddressTable() {
  try {
    await client.connect();
    const createQuery = `CREATE TABLE IF NOT EXISTS addresses(
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      city VARCHAR(100) NOT NULL,
      country VARCHAR(50) NOT NULL,
      street VARCHAR(200) NOT NULL,
      pincode VARCHAR(6),
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) `;
    await client.query(createQuery);
    console.log("Table created successfully");
  } catch (error) {
    console.log("Error while creating table", error);
    throw error;
  } finally {
    await client.end();
  }
}

async function insertAddress(user_id, city, country, street, pincode) {
  try {
    await client.connect();

    const inserQuery = `INSERT INTO addresses(user_id,city,country,street,pincode) VALUES ($1,$2,$3,$4,$5)`;
    const values = [user_id, city, country, street, pincode];
    const res = await client.query(inserQuery, values);
    console.log("Insertion success:", res);
  } catch (error) {
    console.log("Error in inserting data", error);
    throw error;
  } finally {
    await client.end();
  }
}

// getUser("amitmaurya15000@gmail.com");
// createAddressTable();

insertAddress(3, "Ghaziabad", "India", "Sanchi Street", 201009);
