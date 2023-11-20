## Creating database

```
create database schedule;
```

-------------------------------------------------------

## Restoring

Go to \Program Files\PostgreSQL\16\bin throught cmd and paste this:

```
pspl -U postgres -W -h localhost schedule < \dbbackup\restore.sql
```

path is basically the \restore.sql file that comes in \dbbackup folder

------------------------------------------------------

## Configuring db

Go to config.ts file and put your postgres db config

*You got this by default:*

```
    DB_USERNAME="postgres"
    DB_PASSWORD="12345"
    DB="schedule"
    DB_PORT=5432
```