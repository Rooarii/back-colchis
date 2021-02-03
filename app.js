/* import packages
 */
const express=require("express");
const cors = require('cors');

/* import .env variables
 */
require("dotenv").config();
const { SERVER_PORT }=process.env
// PS: require("dotenv").config() to enable below destructuration

/* declare application*/
const app=express()

/* setup pre-middlewares 
 */

app.use(cors());
app.use(express.json());
// PS: express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 

app.use(express.urlencoded({extended:true}))
// PS: express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays

/* require routes
 */
require('./routes')(app);

/* handle errors
 */
// app.use(
//   (err, req, res, next)=>{
    
//   }
// )

/* listen application 
 */

app.listen(SERVER_PORT, () => {
  console.log(`👑 Colchis Server is runing on http://localhost:${SERVER_PORT} !`);
});