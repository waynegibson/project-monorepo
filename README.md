# project-monorepro

This monorepo is used to mock, test and implement nodejs projects.

## Apps

- @project/cdk-workmail-export

## Packages

- @project/tsconfig
- @project/eslint-config-antfu

### Database

We use [Prisma](https://prisma.io/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, we offer a [`compose.yml`](https://docs.docker.com/compose/) file to deploy a Postgres server locally with a new database named `turborepo` (To change this update the `MYSQL_DATABASE` environment variable in the `compose.yml` file):

```bash
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access.

```bash
cp .env.example .env
```

If you added a custom database name for local development, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```bash
pnpm prisma migrate dev
```
To reset the database and have it seed the database.

```bash
pnpm prisma migrate reset
```

## Contributors

- [Wayne Gibson](https://github.com/waynegibson)

## License

The project is distributed under the [MIT](https://github.com/waynegibson/project-monorepo/blob/main/LICENSE) license.