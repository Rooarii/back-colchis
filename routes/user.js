const router = require('express').Router();

const { UserService } = require("../services")

router.get("/royalty", async (req,res, next)=>{
  try {
    const royalty = await UserService.getRoyalty()
    res.status(200).json(royalty);
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