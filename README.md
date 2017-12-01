[![Nest Logo](http://kamilmysliwiec.com/public/nest-logo.png)](http://nestjs.com/)
The [Nest](https://github.com/unlight/nest-typescript-starter) framework starter repository. 

STACK
---
* TypeScript
* ESLint
* Jest
* TypeORM

INSTALLATION
---
```
$ npm install
```

TASKS
---
| Command                | Description                                       |
|:-----------------------|:--------------------------------------------------|
| `npm start`            | Start application                                 |
| `npm run start:dev`    | Start application in development mode             |
| `npm run start:debug`  | Start application in debug mode                   |
| `npm test`             | Run all tests                                     |
| `npm run t`            | Run unit tests                                    |
| `npm run test:w`       | Run unit tests in watch mode                      |
| `npm run tscheck`      | Run TypeScript checks                             |
| `npm run tscheck:w`    | Run TypeScript checks in watch mode               |
| `npm run tsclint`      | Run TypeScript more stricter checks               |
| `npm run tsclint:w`    | Run TypeScript more stricter checks in watch mode |
| `npm run eslint`       | Run ESLint                                        |
| `npm run eslint:w`     | Run ESLint in watch mode                          |
| `npm run eslint:fix`   | Run ESLint in fix mode                            |
| `npm run lint:w`       | Run all linting commands in watch mode            |


SCRIPTS
---
Database seed and migrations example:
```
npx ts-node -F app/scripts seed migrate
```

SETUP ENVIRONMENT (EXAMPLE)
---
```
set CONNECTION_TYPE=mongodb
set CONNECTION_DATABASE=nest-typescript-starter
```

RESOURCES
---
* GDG DevFest 2017 (Presentation) - https://github.com/Caballerog/devfestmalaga2017

PEOPLE
---
- Original Author - [Kamil Myśliwiec](http://kamilmysliwiec.com)
- Website - [http://nestjs.com](http://nestjs.com/)

TODO
---
* Generating migrations
* TypeORM (MySQL, Mongoose)
* Swagger https://github.com/nestjs/swagger
* GraphQL, https://github.com/adrien2p/nestjs-graphql
* https://github.com/pleerock/class-validator
