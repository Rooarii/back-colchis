const royalty = require('./royalty')

const router = require('express').Router();

module.exports =(app)=>{

  app.use('/api/royalty', royalty)

  // API home page  
  app.use('/', 
    (req, res)=>{
      res.send('Welcome on Colchis API! 👑');
    }
  )
}

// router.use('/api', royalty )

// module.exports = router;