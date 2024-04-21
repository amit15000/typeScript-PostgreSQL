"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    database: 'mytestdb',
    user: 'postgres',
    password: 'mysecretpassword',
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
            console.log("Table 'users' created successfully.");
        }
        catch (err) {
            console.error('Error during table creation:', err);
        }
        finally {
            yield client.end();
        }
    });
}
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const queryText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
            const res = yield client.query(queryText, [username, email, password]);
            console.log("Data inserted successfully:", res.rows[0]);
        }
        catch (err) {
            console.error('Error during data insertion:', err);
        }
        finally {
            yield client.end();
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createTable();
        yield insertData("Amit", "15000amitkumar@gmail.com", "xyz");
    });
}
main().catch(console.error);
