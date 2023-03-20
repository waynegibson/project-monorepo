# project-monorepro

This monorepo is used to mock, test and implement nodejs projects.

## Apps

- @project/cdk-workmail-export
- @project/marketing-website

## Packages

- @project/tsconfig
- @project/eslint-config-antfu
- @project/prisma-orm

### Database

We use [Prisma](https://prisma.io/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, we offer a [`compose.yml`](https://docs.docker.com/compose/) file to deploy a Postgres server locally with a new database named `amce` (To change this update the `POSTGRES_DB` environment variable in the `compose.yml` file and also the `.env` file):

```bash
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access the database.

```bash
cp .env.example .env
```

To add the necessary tables to your databse, you need to create and deploy the prisma schema migrations. This can be done using [Prisma Migrate](https://www.prisma.io/migrate).

Run this command when working in development mode.

```bash
pnpm migrate:dev
pnpm generate
```
then seed the database with dummy data

```bash
pnpm seed
```
Run this command when pushing to production.

```bash
pnpm migrate:deploy
```
To reset the database and have it seed the database.

```bash
pnpm prisma migrate reset
```

## General commands 

### Upgrade packages

```console
pnpm upgrade --latest
```
```console
pnpm upgrade --latest --filter @project/eslint-config-antfu
```
```console
pnpm upgrade --latest --filter @project/marketing-website
```
```console
pnpm upgrade --latest --filter @project/prisma-orm
```
### Server process

To kill a server process after the server was left running when the terminal is closed.

```console
npx kill-port --port <NUMBER>
```
or to kill multiple ports

```console
npx kill-port --port <NUMBER>,<NUMBER>,<NUMBER>
```

## Contributors

- [Wayne Gibson](https://github.com/waynegibson)

## License

The project is distributed under the [MIT](https://github.com/waynegibson/project-monorepo/blob/main/LICENSE) license.
