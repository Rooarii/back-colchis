const router = require('express').Router();
// import services
const { UserService } = require("../services")

// import middlewares
const { ValidateUser } = require('../middlewares')

router.get("/royalty", async (req,res, next)=>{
  try {
    const royalty = await UserService.getRoyalty()
    res.status(200).json(royalty);
  } catch (error) {
    console.log(`💀: ${error.message}`)
    next(error);
  }
})

router.get("/bellatores", async (req,res, next)=>{
  try {
    const oratores = await UserService.getAllBellatores()
    res.status(200).json(oratores);
  } catch (error) {
    console.log(`💀: ${error.message}`)
    next(error);
  }
})

router.get("/oratores", async (req,res, next)=>{
  try {
    const oratores = await UserService.getAllOratores()
    res.status(200).json(oratores);
  } catch (error) {
    console.log(`💀: ${error.message}`)
    next(error);
  }
})

router.get("/laboratores", async (req,res, next)=>{
  try {
    const laboratores = await UserService.getAllLaboratores()
    res.status(200).json(laboratores);
  } catch (error) {
    console.log(`💀: ${error.message}`)
    next(error);
  }
})

router.post("/users", ValidateUser, async (req,res, next)=>{
  const { firstname, lastname, mail, user_image, social_class, social_rank } = req.body;
  try {
    const userCreated = await UserService.createUser(firstname, lastname, mail, user_image, social_class, social_rank );
    res.status(201).json(userCreated);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
})


module.exports =router;


/** Enhancements: make try catch generic
 
code 
const tryCatchRoute = (method, res, next) =>{
  let result;
  try {
    const royalty = UserService[method]()
    result = res.status(200).json(royaly);
     } catch (error) {
       console.log(`💀: ${error.message}`)
       next(error);
       result= error.message
     }
     return result;
 }

// app.get(tryCatchWrap((req, res, next) => {}))

// sub user route to get all the royalty
 * 
 */