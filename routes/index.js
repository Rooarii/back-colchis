

module.exports =(app)=>{

  // API home page  
  app.use('/', 
    (req, res)=>{
      res.send('Welcome on Colchis API! 👑');
    }
  )
}