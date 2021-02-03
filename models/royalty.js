const connection = require("../db/db")

class Royalty {
  static async getAll(){
    const query = 
    `
    SELECT 
      u.firstname, u.lastname, u.mail, u.user_image, 
      sc.social_class, sr.social_rank
    FROM user u
    JOIN social_class sc ON sc.id= u.social_class_id 
    JOIN social_rank sr ON sr.id = u.social_rank_id
    WHERE sr.social_rank = "King" OR sr.social_rank = "Queen" OR sr.social_rank = "Princess" OR sr.social_rank = "Princess";
    `;
    const [result] = await connection.query(query)
    return result;
  }

}

module.exports = Royalty;