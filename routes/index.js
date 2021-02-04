const user = require('./user')

module.exports =(app)=>{

  // generic route for users (bellatores, oratores, laboratores)
  app.use('/api', user)

  // API home page  
  app.use('/', 
    (req, res)=>{
      res.send('Welcome on Colchis API! 👑');
    }
  )
}
