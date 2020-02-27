<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## STACK

-   TypeScript
-   ESLint
-   Mocha
-   TypeORM
-   Stryker

## INSTALLATION

```
$ npm install
```

## TASKS

| Command              | Description                                              |
| :------------------- | :------------------------------------------------------- |
| `npm start`          | Build and start application                              |
| `npm run dev`        | Start application in development mode with HMR (webpack) |
| `npm run dev:nd`     | Start application in debug mode (node-dev)               |
| `npm run dev:wd`     | Start application in debug mode (webpack)                |
| `npm test`           | Run all tests                                            |
| `npm run test:r`     | Run unit tests                                           |
| `npm run test:w`     | Run unit tests in watch mode                             |
| `npm run tscheck:w`  | Run TypeScript checks in watch mode                      |
| `npm run tsclint:w`  | Run TypeScript more stricter checks in watch mode        |
| `npm run eslint:w`   | Run ESLint in watch mode                                 |
| `npm run eslint:fix` | Run ESLint in fix mode                                   |
| `npm run lint:w`     | Run all linting commands in watch mode                   |
| `npm run test:m`     | Run mutation tests                                       |

## FOLDER STRUCTURE

| Folder/file      | Description                                                                                  |
| :--------------- | :------------------------------------------------------------------------------------------- |
| `src/config.ts`  | Configuration file                                                                           |
| `src/server.ts`  | Main file, starts server                                                                     |
| `src/app`        | Application files: controllers, services, entities, etc. grouped by feature                  |
| `src/components` | Shared components: helpers, decorators, pipes, transformers, interceptors, middlewares, etc. |
| `src/scripts`    | Scripts which runs from cli to support database, cronjob, etc.                               |
| `src/migrations` | TypeORM migrations                                                                           |

## SCRIPTS

Database seed example:

```
npx ts-node src/scripts seed
```

## SETUP ENVIRONMENT (EXAMPLE)

```
set TYPEORM_CONNECTION=mongodb
set TYPEORM_DATABASE=nest-typescript-starter
set TYPEORM_CONNECTION=sqlite
set TYPEORM_DATABASE=test
```

## DEVELOPMENT

-   `npm run dev:wd -- --env.devtool=inline-cheap-source-map` Debug with webpack and HMR (show srouces as transformed code)
-   `node -r ts-node/register/transpile-only --inspect src/database/scripts.ts migrate`

## WEBPACK DEVTOOL SETTING (HMR)

| Value                            | Valid stacktrace | Source updates | Breakpoints | Rebuild | Quality          |
| :------------------------------- | :--------------- | :------------- | :---------- | :------ | :--------------- |
| `cheap-eval-source-map`          | No               | Yes            | No          | ++      | transformed code |
| `cheap-module-source-map`        | Yes              | Yes            | Yes         | -       | original source  |
| `inline-cheap-module-source-map` | Yes              | Yes            | Yes         | -       | original source  |
| `inline-cheap-source-map`        | No               | Yes            | Yes         | o       | transformed code |
| `cheap-source-map`               | No               | Yes            | Yes         | o       | transformed code |
| `inline-source-map`              | Yes              | Yes            | Yes         | --      | original source  |
| `eval-source-map`                | ?                | ?              | ?           | +       | original source  |
| `source-map`                     | Yes              | Yes            | Yes         | --      | original source  |

## RESOURCES

-   https://github.com/nestjs/nest/tree/master/examples
-   GDG DevFest 2017 (Presentation) - https://github.com/Caballerog/devfestmalaga2017
-   Router Module For Nestjs Framework - https://github.com/shekohex/nest-router
-   TypeORM where like expression - https://gitter.im/typeorm/typeorm?at=5a2035af232e79134df08c65
-   Add the most common Express middlewares to your Nest app with one line - https://github.com/wbhob/nest-middlewares
-   Level up your Node.js application with Nest: Angular sugar on the server - http://ng-atl.org/workshops/level-up-your-node-js-application-with-nest-angular-sugar-on-the-server
-   New Stack on the Market to beat them all MANT (MongoDB Angular NestJS TypeScript) - https://github.com/vladotesanovic/mant
-   Microservices example - https://github.com/james7272/nestjs-hybrid-example
-   nest-graphql-apollo - https://github.com/kamilkisiela/nest-graphql-apollo
-   nest-graphql-mongodb - https://github.com/iamclaytonray/nest-graphql-mongodb
-   nestjs-graphql - https://github.com/adrien2p/nestjs-graphql
-   graphql-js/issues/19 - https://github.com/graphql/graphql-js/issues/19
-   graph-type-orm-nest-example - https://github.com/partyka95/graph-type-orm-nest-example
-   nest-mailer - https://github.com/partyka95/nest-mailer
-   ngrx-nest - https://github.com/derekkite/ngrx-nest
-   Simple application demonstrating the basic usage of permissions - https://github.com/rucken/core-nestjs
-   Nest + Sequelize + jwt - https://github.com/adrien2p/nestjs-sequelize-jwt
-   Awesome Nest - https://github.com/juliandavidmr/awesome-nest
-   Learn the nestjs framework in 30 days - https://github.com/m24927605/Nestjs30Days
-   A simple web application - https://github.com/chanlito/simple-todos
-   A collection of useful modules and opinionated to use with Nest framework - https://github.com/chanlito/nestjs-extensions
-   A simple application demonstrating the basic usage of permissions - https://github.com/rucken/core-nestjs
-   Opinionated Framework built on top of NestJS and TypeORM - https://github.com/mentos1386/lynx
-   This is a Bull module for Nest - https://github.com/fwoelffel/nest-bull
-   Hybrid apps have embedded microservices - https://github.com/james7272/nestjs-hybrid-example/
-   I-know-nest repository - https://github.com/cojack/i-know-nest
-   A Bull module for Nest framework - https://github.com/fwoelffel/nest-bull
-   https://github.com/caiya/graphql-nestjs-typeorm
-   Scaffold quickly your next TypeScript API with this opinionated NestJS template crafted for Docker environments - https://github.com/Saluki/nestjs-template
-   Authentication and Authorization example for Nest.js TypeScript Framework - https://github.com/neoteric-eu/nestjs-auth
-   Another example of chiny app - https://github.com/notadd/notadd
-   Another example of nest - https://github.com/bojidaryovchev/nest-angular
-   Blog made with nestJS - https://github.com/bashleigh/nestjs-blog
-   An easiest web app template on top of nest, TypeORM, Next.js and Material UI - https://github.com/saltyshiomix/ark
-   Ever® - On-Demand Commerce Platform (Example Application) - https://github.com/ever-co/ever
-   https://github.com/AryanJ-NYC/nestjs-graphql-tutorial
-   Example prisma2 integration - https://github.com/fivethree-team/nestjs-prisma-starter/tree/prisma2
-   End to end repo testing all core components in this stack - https://github.com/webnoob/quasar-ts-jest-nestjs-apollojs-prisma2
-   graphql-prisma2 with all(okay most of) the required configuration you need - https://github.com/5achinJani/graphql-prisma2

## TODO

-   Prettier
-   Husky
-   Remove gulp
-   TypeORM: Mongoose: Clarify what exactly need todo
-   https://github.com/nestjs/mongoose
-   Health endpoint
