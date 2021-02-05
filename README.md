# Wild code school checkpoint 4: back-colchis

## Develop the front-end part of a mobile application:

1. Model an application;

2. Build a static and adaptable web user interface

3. Develop a dynamic web user interface

4. Create a user interface with a content management solution

## Develop the back-end part of a mobile application:

1. Create a database

2. Develop data access components

3. Develop the back-end part of a Web or Mobile Web application

4. Develop and implement components in a content management application

## Project Ressources

[Wireframe](https://www.figma.com/proto/ixpD7mrSXXT5qto8ZvnxeB/mobile?node-id=0%3A3&scaling=min-zoom)

[Product Backlog](https://docs.google.com/spreadsheets/d/1ZhJtQ72x0stmLLW9P8w02vBgRf_rZt6LtFw0oyYC-wg/edit?usp=sharing)

**Conceptual data model**

![Conceptual data model](https://user-images.githubusercontent.com/49068774/107053066-b1de6c80-67ce-11eb-8ba6-15a23181860f.png)

# Setup

Install dependencies and the migration tool :
```sh
yarn 
yarn add -g db-migrate db-migrate-mysql
```
Copy the environnement variables : 
```
cp .env.sample .env
```
This `.env` file allows to change the way the Node server connects to the database, but you probably won't have to change any of those variables unless you want to deploy the app yourself or connect it to a specific DB.

Create the database locally:
1. Open your cli
    ```sh
    mysql -u <user> -p
    ```
2. type your mysql user password:
3. Enter the following command in terminal:
    ```sh
    CREATE DATABASE colchis;
    USE colchis;
    ```
Once all steps finished you can run the app:
```sh
yarn start or 
yarn
```
*PS: once yarn start launch, the the app will connect to the database created previously and will run the migrate-db script to initialize the migrations init and seed*

### Linux (Unbuntu 20.04)

Copy and execute those commands one by one in a terminal and you should be good to go.

### Run the app

Run migration and launch server serparately :

```sh
yarn run migrate-db
yarn run start:server:watch
```
All in once:

```sh
yarn run start
  or
yran start
```
### Run the automated tests

```sh
yarn run test:migrate-db
yarn run test
```

# Database migrations

If, while developping, you must change the structure of the database to fit new requirements, 
you HAVE TO write a database migration script in order for the changes to be propagated 
in contributors local databases but also in the pre-prod/prod environments' DBs.

Here's an exemple of the helper command usage : 
```
NAME=splitNameOnUsers yarn run create-db-migration
```
(Replace the NAME variable value by the name of your change). It will create two SQL files in the `migrations/sqls` folder. One file is executed on the DB when applying changes (migrating up) and the other is run when rolling back changes (migrating down).

To apply the changes that have not yet been synced to the database :
```
yarn run migrate-db
```

## db-migrate documentation

Documentation [here](https://db-migrate.readthedocs.io/en/latest/)


<!-- # API Docs
You can access the docs, available by default at [localhost:5000/api-docs](http://localhost:5000/api-docs).

You can modify the docs by changing the `docs/swagger.yaml` file. -->

# Developpers

<img align="center" alt="Rooarii MANUEL" src="https://avatars.githubusercontent.com/u/49068774?s=460&u=753f9fab32f35716dea83c2bcbde969cc2528b22&v=4" width="38" height="38"><a href="https://github.com/Rooarii">Rooarii MANUEL</a></img>
</br>



