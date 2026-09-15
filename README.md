# Nature's Medicine API

Herbs, Herbs, and more Herbs! As modern medicine becomes increasingly inaccessible, this API was built as a proof of concept for a comprehensive database of traditional herbal medicine from around the world (e.g. TCM, Ayurvedic medicine, Unani Tibb).

Disclaimer: this is meant to supplement and NOT replace science and western medicine.

**

Visual Demo

**

Based in NestJS, this proof of concept API uses strict typing, organized architecture, and Docker Compose to create a user-friendly database to store the traditional knowledge and simplify access to that knowledge. In order to maintain the integrity of the data, this codebase uses interfaces and entities to create and manage relational tables with the containerized Docker database and volume through a combination of TypeORM Repositories and PostGreSQL. In combination with community collaborations and UX design, this API could aid providers find natural alternatives to various maintainence medications and give patients more options and autonomy over their health.

As a former medical provider, I have come to understand that modern science still has a long way to go and that there are still many case in which traditional medicine far surpasses modern medicine. 

For a live demo, click here!

## The Stack

Language: Javascript/Typescript
Package Manager: npm
Framework: NestJS
Server Runtime: NodeJS
ORM: TypeORM
Database: PostGreSQL
Containerization: Docker

## What This Build Has Taught Me

Making code that is both user and developer-friendly 
Benefits of organized architecture with entities for relational tables
ORM vs crude SQL query
Commenting best practices for readability

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Next Steps

Collaborations with gardening apps for growth integrations
Collaborations with LLMs and herbalists to add personalized instructions for brewing and herb processing.