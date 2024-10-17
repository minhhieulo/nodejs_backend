const express = require('express')
const app = express()
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;
// config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended: true })) //for form data

//config template engine 
configViewEngine(app);

// khai bao route
app.use('/',webRoutes );




//simple query 
// connection.query(
//   'select * from Users' ,
//   function (err, results,fields){
//     console.log(results);
//   }
// );


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})