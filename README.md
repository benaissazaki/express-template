# express-template
A ready to use template for ExpressJS+MongoDB apps

## Project structure
- /
  - app.js: Express app creation (Middleware and routes setup) and MongoDB connection
  - index.js: Server creation and start
  - models/: Mongoose models definition
  - controllers/: Routes definition
  - requests/: HTTP requests for manual testing using VSCode's REST client
  - tests/
  - utils/:
    - config.js
    - logger.js
    - middleware.js
    
## Project setup
- `yarn install`
- Define the following env variables in .env
  - PORT: The port on which the app's server runs
  - MONGODB_URI: The connection string of the database used for development and production
  - TEST_MONGODB_URI: The coneciton string of the database used for automated tests
  - SECRET: The secret string used to sign JSON Web Tokens (MUST BE KEPT SECRET) can be generated using https://randomkeygen.com/ 
  
## Features
 
### MongoDB Database
Using the Mongoose ODM

### User authentication
Using JSON Web Tokens 

### Linting
Using eslint to enforce code style

### Tests
Using Jest and Supertest for unit and integration tests
