const connection = require("../db/db")



class User {
  constructor(firstname, lastname, mail, user_image) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.mail = mail;
    this.user_image = user_image;
  }

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
  
  static async createUser(firstname, lastname, mail, user_image, social_class, social_rank ){
    // const user = new User(firstname, lastname, mail, user_image)
    // console.log(user.firstname)

    // querys
    const socialClassIdQuery = `SELECT id FROM social_class WHERE  social_class =?;`;
    const socialRankIdQuery = `SELECT id FROM social_rank WHERE  social_rank =?;`;
    const query = `INSERT INTO user (firstname, lastname, mail, user_image, social_class_id, social_rank_id) VALUES (?,?,?,?,?,?);`;

    const getSocialClassId = async()=>{
      const [{id: socialClassId}] = await connection.query(socialClassIdQuery,[social_class]);
      return {"socialClassId":socialClassId}
    }
    
    const getSocialRankId = async()=>{
      const [{id: socialRankId}] = await connection.query(socialRankIdQuery,[social_rank]);
      return {"socialRankId":socialRankId};
    }

    const result = await Promise.all([getSocialClassId(), getSocialRankId()]);
    console.log(result);
      
    const { socialClassId } = result[0];
    const { socialRankId } = result[1];
    console.log(socialClassId, socialRankId)

    const getIds = async (socialClassId, socialRankId) => {

      const {insertId: id} = await connection.query(query, [firstname, lastname, mail, user_image, socialClassId, socialRankId]);
      return {id, firstname, lastname, mail, user_image, social_class, social_rank};
    }

    return getIds(socialClassId, socialRankId);
    
  }
}

module.exports = User;

