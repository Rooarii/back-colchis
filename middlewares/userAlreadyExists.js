const CustomError = require("../helpers/CustomError");

module.exports = (req, res, next) => {
  const { firstname, lastname, mail } = req.body;
  let message = `${!firstname}${!lastname} has already an account with thefollwing mail: ${!mail? ' mail': ''}`;
  if (!firstname || !lastname || !mail) {
    throw new CustomError(400, message);
  }
  next();
};