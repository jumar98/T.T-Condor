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

![image](https://user-images.githubusercontent.com/28226268/43695997-7e5adb3a-9901-11e8-805a-eb4f858e2070.png)


Well, first we must be authenticated, for that we place the `user/register` path with the user's data in the body and the request must be post:

![image](https://user-images.githubusercontent.com/28226268/43696077-e1cedb12-9901-11e8-9376-5fb32483d4eb.png)

When you are register, receive the token to access to providers routes:

![image](https://user-images.githubusercontent.com/28226268/43696176-6cebfc34-9902-11e8-9887-5b85c1cc7a49.png)


ALL providers request must be authenticated with a valid token, otherwise they will be invalid. We must put in the authorization header, `Bearer <YOUR_TOKEN>` and then if you can make any request to the provider routes.

We test `/providers` route:

![image](https://user-images.githubusercontent.com/28226268/43696296-ecadc13c-9902-11e8-80e4-be5e122459d8.png)

![image](https://user-images.githubusercontent.com/28226268/43696319-092e5862-9903-11e8-8b0c-912f3f21986a.png)


## Author

- ***Julian David Martinez Villarreal***

## License

This project is under the license (MIT) - see the file LICENSE.md for details

