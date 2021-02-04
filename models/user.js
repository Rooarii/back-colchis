const connection = require("../db/db")

class Royalty {

  // function that allows to get all the royalty
  static async getRoyalty(){
    const query = 
    `
    SELECT 
      u.firstname, u.lastname, u.mail, u.user_image, 
      sc.social_class, sr.social_rank
    FROM user u
    JOIN social_class sc ON sc.id= u.social_class_id 
    JOIN social_rank sr ON sr.id = u.social_rank_id
    WHERE sr.social_rank = "King" OR sr.social_rank = "Queen" OR sr.social_rank = "Prince" OR sr.social_rank = "Princess"; 
    `;
    const [result] = await connection.query(query)
    return result;
  }

  // function that allows to get all the oratores (nobles) except the royalty
  static async getAllOratores(){
    const query = 
    `
    SELECT 
      u.firstname, u.lastname, u.mail, u.user_image, 
      sc.social_class, sr.social_rank
    FROM user u
    JOIN social_class sc ON sc.id= u.social_class_id 
    JOIN social_rank sr ON sr.id = u.social_rank_id
    WHERE sc.social_class = "Bellatores"  
    AND sr.social_rank != "King" AND sr.social_rank != "Queen" AND sr.social_rank != "Prince" AND sr.social_rank != "Princess";
    `;
    const [result] = await connection.query(query)
    return result;
  }

  // function that allows to get all the laboratores (nobles) except the royalty
  static async getAllLaboratores(){
    const query = 
    `
    SELECT 
      u.firstname, u.lastname, u.mail, u.user_image, 
      sc.social_class, sr.social_rank
    FROM user u
    JOIN social_class sc ON sc.id= u.social_class_id 
    JOIN social_rank sr ON sr.id = u.social_rank_id
    WHERE sc.social_class = "Laboratores";
    `;
    const [result] = await connection.query(query)
    return result;
  }
  
}

module.exports = Royalty;