## Step 1 - Install TypeScript Globally:
```bash
npm install -g typescript
```
This command installs TypeScript globally on your machine, allowing you to use the tsc command anywhere.
 
## Step 2 - Initialize a Node.js Project with TypeScript:
```bash
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```


Ensure Docker Desktop for Windows is installed and running.
Open Windows Terminal or any command-line interface.
To download and run the PostgreSQL image for the first time, use:


#docker run --name my-postgres1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres


If the image is already downloaded, you can start the container with:
docker start my-postgres1


To connect to the PostgreSQL instance, use:
#docker exec -it my-postgres1 psql -U postgres -d postgres


Enter the password when prompted to access the PostgreSQL command line interface.

Inside the PostgreSQL CLI, you can list all tables with:

#\dt
