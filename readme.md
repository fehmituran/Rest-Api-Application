## GoIT Node.js Homework04 Authentication/Authorization

This Rest API is a simple Web API. This API contains a full set of CRUD (Create, Read, Update, Delete) operations for our tasks. MongoDb and Postman was used for this API, Add user authentication/authorization logic using JWT, pagination for the collection of contacts and filter contacts by favorite field

### MongoDb Contact Table
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/contactTable.PNG)


------------------------------------------------------------------------------------------------
### MongoDb User Table
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/userTable.PNG)


------------------------------------------------------------------------------------------------
### @ GET /user/signup
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/addUser.PNG)

------------------------------------------------------------------------------------------------

### @ GET /user/login
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/login.PNG)

------------------------------------------------------------------------------------------------
### @ GET /api/contacts?limit=2&&page=1&&favorite=true
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/paginationFavorite.PNG)

------------------------------------------------------------------------------------------------
### @ GET /user/logout
![GoIT-hw-04](https://github.com/fehmituran/Rest-Api-Application/blob/hw04-auth/img/logout.PNG)

------------------------------------------------------------------------------------------------

## Installation

To run this project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run the following command to install dependencies:

```
npm install
```

## Starting project
- `npm start` &mdash; starts the server in production mode.
- `npm run start:dev` &mdash; starts the server in development mode.

## :computer: Built with

- [nodejs-homework-template](https://github.com/oliverplay/nodejs-homework-template)
- [Node.Js](https://nodejs.org/en)
- [Javascript](https://javascript.info/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)



## :computer: Npm Packages

- [nodemon](https://nodemon.io/)
- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
- [joi](https://joi.dev/)
- [JWT-jsonwebtoken](https://jwt.io/).
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [passport and passport-jwt](https://www.npmjs.com/package/passport)


## :writing_hand: Authors

- [Fehmi Turan](https://github.com/fehmituran)

