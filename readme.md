## Setting up PostgreSQL with Docker on Windows

### Prerequisites
1. Ensure Docker Desktop for Windows is installed and running.

### Steps to Set Up PostgreSQL
1. Open Windows Terminal or any command-line interface.
2. Run the following command to download and run the PostgreSQL image for the first time:

    ```bash
    docker run --name my-postgres1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    ```

    This command will download the PostgreSQL image if it's not already downloaded, create a container named `my-postgres1`, set the PostgreSQL password to `mysecretpassword`, and map port `5432` on the host to port `5432` in the container.

3. If the image is already downloaded and you want to start the container, use the following command:

    ```bash
    docker start my-postgres1
    ```

### Accessing PostgreSQL
1. To connect to the PostgreSQL instance, use the following command:

    ```bash
    docker exec -it my-postgres1 psql -U postgres -d postgres
    ```

    You'll be prompted to enter the password (`mysecretpassword`) to access the PostgreSQL command-line interface.

2. Inside the PostgreSQL CLI, you can execute various commands. Here are some advanced commands you can use:

    - List all tables:
    
        ```sql
        \dt
        ```

    - Create a new database:
    
        ```sql
        CREATE DATABASE mydatabase;
        ```

    - Connect to a specific database:
    
        ```sql
        \c mydatabase;
        ```

    - Show all databases:
    
        ```sql
        \l
        ```

    - Quit PostgreSQL CLI:
    
        ```sql
        \q
        ```

Feel free to explore more PostgreSQL commands and functionalities as needed.

- Important
# "User" is a reserved keyword in PostgreSQL. To reference a table with a reserved keyword name, you need to use double quotes around the table name. Let's try the command again:

```bash
INSERT INTO "User" (email, "firstName", "lastName", password, phone) 
VALUES ('example@email.com', 'John', 'Doe', 'password123', '1234567890');
```
