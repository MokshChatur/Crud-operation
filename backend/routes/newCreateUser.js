const newUser = require("../controller/newUserController");

module.exports = (newRouter) => {
  newRouter.post("/users_signup", newUser.usersignup);
  newRouter.post("/alluserlist", newUser.UsersList);
  newRouter.put("/update/:id", newUser.update);
  newRouter.post("/delete", newUser.delUserData);
};
