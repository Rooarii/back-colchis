const router = require('express').Router();

const { RoyaltyService } = require("../services")

router.get("/", async (req,res, next)=>{
  try {
    const royalty = await RoyaltyService.getAll()
    res.status(200).json(royalty);
  } catch (error) {
    console.log(`💀: ${error.message}`)
    next(error);
  }
})

module.exports =router;
