const { RoyaltyModel } =require("../models")

class RoyaltyService {
  static async getAll() {
    const royalty = await RoyaltyModel.getAll();
    return royalty;
  }
}

module.exports = RoyaltyService;