const CustomError = require("../helpers/CustomError");

module.exports = (req, res, next) => {
  const { firstname, lastname, mail } = req.body;
  let message = `Bad request: missing (${!firstname?' title':''}${!lastname?' artist':''}${!mail? ' mail': ''}) parameters`;
  if (!firstname || !lastname || !mail) {
    throw new CustomError(400, message);
  }
  next();
};