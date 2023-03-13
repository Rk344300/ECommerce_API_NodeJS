# ECommerce_API_NodeJS

# Tech Stack
NodeJS , ExpressJS, MongoDB

Overview :
- Designed an API for an ecommerce platform admin to manage product inventory

# Routes
base route :/products

GET : 
 - "/"
 
 POST :
  - "/create"
  - "/:id"
  - "/:id/update_quantity"
  
  # Run Locally
   Clone the Project
   
   https://github.com/Rk344300/ECommerce_API_NodeJS
   
   install the nodemodules from package.json:

   ```npm install```
   
   finally start it on your local server

   ```npm start```
   
# Folder Structure

.
├── config
│   └── mongoose.js
├── controllers
│   └── productController.js
├── models
│   └── products.js
├── routes
│   └── project.js
├── gitignore
├── index.js
├── package-lock.json
└── package.json

walkthrough:
- config folder contains the configurations of mongoose

- controllers contains all the code which executes for a particular route

- models folder has  productschema 

- routes folder has all the routes

- root index file contains the express server setup

basic flow : a route is called > and passes to controller functions >
controller executes code as per the route > response returned (in postman)
