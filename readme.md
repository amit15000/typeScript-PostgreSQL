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
