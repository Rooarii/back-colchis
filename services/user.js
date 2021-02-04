const { UserModel } =require("../models")

class UserService {

  static async getRoyalty() {
    const royalty = await UserModel.getRoyalty();
    return royalty;
  }

  static async getAllOratores() {
    const oratores = await UserModel.getAllOratores();
    return oratores;
  }

  static async getAllLaboratores() {
    const laboratores = await UserModel.getAllLaboratores();
    return laboratores;
  }

  static async createUser(firstname, lastname, mail, user_image, social_class, social_rank ) {
    const userCreated = await UserModel.createUser(firstname, lastname, mail, user_image, social_class, social_rank );
    return userCreated;
  }

}

module.exports = UserService;