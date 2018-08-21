# MyDiary
[![Build Status](https://travis-ci.org/idmega2000/MyDiary.svg?branch=develop)](https://travis-ci.org/idmega2000/MyDiary) [![Coverage Status](https://coveralls.io/repos/github/idmega2000/MyDiary/badge.svg?branch=develop)](https://coveralls.io/github/idmega2000/MyDiary?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/980ffb812f3100c13f19/maintainability)](https://codeclimate.com/github/idmega2000/MyDiary/maintainability)



MyDiary is an online journal where users can pen down their thoughts and feelings.

## Technologies
1. [Nodejs](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [Postgresql](https://www.postgresql.org/)
4. [Babel](https://babeljs.io/)
5. [Eslint](https://eslint.org/) and [airbnb style guide](https://github.com/airbnb/javascript)
6. [mocha](https://mochajs.org)
 

## How to Install
* Clone repo to your local machine
  git clone https://github.com/idmega2000/MyDiary.git
* install dependencies
	npm install
* Create .env like the .env.sample file, just replace with your own environment variables
* Setup a Postgres database for development and for testing
* Finally start server
	npm run start:dev
* visit `http://localhost:5000`
* To view the User interface, login with email: kelanidris7@gmail.com and password: andela

## Test
* npm run test

### App is Live
View UI template [here](https://idmega2000.github.io/MyDiary/) and
access Api endpoint [here](https://mydiary-idris.herokuapp.com/)

## App Api Documentation
Swagger Api documentation [here](https://mydiary-idris.herokuapp.com/)

|  Functionality     |Http Request   | Api endpoints    |
|  -------------     | ------------- | ---------------- |
| Registration   		 | POST          | /api/v1/auth/signup     |
| Login				    	 | POST          | /api/v1/auth/login      |
| Add entry      		 | POST          | /api/v1/entries         |
| All Entry List 		 | GET           | /api/v1/entries         |
| An entry Detail    | GET           | /api/v1/entries/:id 		 |
| Update an entry  	 | PUT           | /api/v1/entries/:id 		 |
| Delete an entry  	 | DELETE	       | /api/v1/entries/:id		 |

# Author
 Idris Wale Kelani(@idmega2000)
 
