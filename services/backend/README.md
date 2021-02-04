# Installation

# Migrate

[Docs](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md)

```
migrate create -ext sql -dir migrations -seq create_ideas_table

migrate -database ${POSTGRESQL_URL} -path migrations up

migrate -database ${POSTGRESQL_URL} -path migrations down
```
