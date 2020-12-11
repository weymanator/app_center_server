### Getting Started

Download or clone this repo, then type in your terminal.

```bash
npm install

# or if are usign yarn

yarn
```

Note: You must be placed at the root folder of the project before you type the command.

Add a new folder at the root directory of the project called `config` with a file `config.json` inside it with the following format

```json
{
  "development": {
    "username": "your_local_user_name_for_mysql",
    "password": "your_local_password_for_mysql",
    "database": "the_name_of_the_target_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
      # same as development
  },
  "production": {
      # same as development
  }
}

```

Ensure you have setup a blank dabase in your local then

```bash
npx sequelize db:migrate
```

You are done to complete the challenge!
