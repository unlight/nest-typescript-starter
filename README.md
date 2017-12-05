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
set TYPEORM_CONNECTION=mongodb
set TYPEORM_DATABASE=nest-typescript-starter
set TYPEORM_CONNECTION=sqlite
set TYPEORM_DATABASE=test
```

RESOURCES
---
* GDG DevFest 2017 (Presentation) - https://github.com/Caballerog/devfestmalaga2017
* Router Module For Nestjs Framework - https://github.com/shekohex/nest-router
* TypeORM where like expression - https://gitter.im/typeorm/typeorm?at=5a2035af232e79134df08c65
* Add the most common Express middlewares to your Nest app with one line - https://github.com/wbhob/nest-middlewares
* Level up your Node.js application with Nest: Angular sugar on the server - http://ng-atl.org/workshops/level-up-your-node-js-application-with-nest-angular-sugar-on-the-server

PEOPLE
---
- Original Author - [Kamil Myśliwiec](http://kamilmysliwiec.com)
- Website - [http://nestjs.com](http://nestjs.com/)

TODO
---
* WebSockets
* Authentication using JSON Web Tokens
* GraphQL, https://github.com/adrien2p/nestjs-graphql
* TypeORM: Mongoose: Clarify what exactly need todo
* Generating migrations https://github.com/typeorm/typeorm/issues/1304
