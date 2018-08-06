# REST API WITH EXPRESS FRAMEWORK

REST API to expose CRUD operations over the collection of providers.

## Requirements
- Node v8.10.0
- MongoDB >= 3.4
- bcrypt-nodejs 0.0.3
- body-parser 1.18.3
- express 4.16.3
- jwt-simple 0.5.1
- moment 2.22.2
- mongoose 5.2.6"

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd providers-api
$ npm install 
$ npm start
```

## Structure

A REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT and DELETE. Endpoints should be logically organized around collections and elements, both of which are resources.

The resources we have are users and providers, the urls for collections and elements are shown below:

Endpoint |HTTP Method | CRUD Method | Result
-- | -- |-- |--
`user/register`| POST| CREATE| Create a new user
`user/login`|POST| CREATE | Sign in user
`providers` | GET | READ | Get all providers
`provider/:id` | GET | READ | Get a single provider
`provider/add`| POST | CREATE | Create a new provider
`provider/:id` | PUT | UPDATE | Update a provider
`provider/:id` | DELETE | DELETE | Delete a provider


## Test 
To test the api we can use postman to make the different requests.

First run:
``` sh 
$ npm start  
```

Then we tried any route in postman:
Imagen

Well, fires we must be authenticated, for that we place the `user/register` path with the user's data in the body and the request must be post, send and receive the token.
imagen

ALL providers request must be authenticated with a valid token, otherwise they will be invalid. We must put in the authorization header, `Bearer <YOUR_TOKEN>` and then if you can make any request to the provider routes.
image

## Author

- ***Julian David Martinez Villarreal***

## License

This project is under the license (MIT) - see the file LICENSE.md for details

