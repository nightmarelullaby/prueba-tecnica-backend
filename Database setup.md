#### Creating database

```
create database schedule;
```

#### Restoring

Go to \Program Files\PostgreSQL\16\bin throught cmd and paste this:

```
pspl -U postgres -W -h localhost schedule < \path
```

path is basically the \restore.sql file that comes in \dbbackup folder