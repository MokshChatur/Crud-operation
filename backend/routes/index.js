const newCreateUser = require("./newCreateUser");

module.exports = (router) => {
  newCreateUser(router);
  return router;
};
