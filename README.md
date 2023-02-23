<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This is the solution for the SDE Intern - Backend assignment for Finmo. This project primararily uses TypeScript and NestJS.

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
```
## List of routes avaiable:-

```bash
BASE_URL = "https://finmo-backend-y5zi.vercel.app"
Alternate BASE_URL = "http://194.195.116.249:3000/"

POST /parking_lot - Initialise a parking lot. Can be initialised only once.
PATCH /parking_lot - Increment the slots of parking lot.
POST /park - Park a car in the slot. Provide the details of car in the body.
GET /park/status - Fetch the details of the cars parked in the parking slots.
GET /park/details - Fetch the slots details of the cars parked.
GET /registration_numbers/:color - Fetch the registration number of cars with particular color.
GET /slot_numbers/:color - Fetch the parking slot numbers of cars with particular color.
POST /park/clear - Free the parking slot either by passing registration number or slot number.
```

## Live Deployments:-
```bash
BASE_URL = "https://finmo-backend-y5zi.vercel.app"
Alternate BASE_URL = "http://194.195.116.249:3000/"
```

## Author Details
Name - Ravi Ujjwal
LinkedIn - https://www.linkedin.com/in/ravi-ujjwal/
Email = ravi.ujjwal2000@gmail.com