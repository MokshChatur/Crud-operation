const newCreateModel = require("../model/newUser.model");
const { validationResult } = require("express-validator");

exports.usersignup = (req, res, next) => {
  console.log("hello new users", req.body);
  const errors = validationResult(req);
  newCreateModel
    .findOne({
      title: req.body.title,
    })
    .then((user) => {
      if (user) {
        return res.status(401).json({
          message: "title already exist",
        });
      }
      var usersignup = newCreateModel.create({
        title: req.body.title,
        desc: req.body.desc,
        catDesc: req.body.catDesc,
      });
      if (usersignup) {
        return res.status(200).json({
          success: true,
          message: "User Registered Successfully",
          data: req.body,
        });
      }
      if (!usersignup) {
        res.send("Error");
      }
    });
};

exports.UsersList = async (req, res) => {
  console.log(res.body);
  try {
    // Adding Pagination
    const limitValue = req.body.limit || 5;
    const skipValue = req.body.skip || 0;

    const User = await newCreateModel
      .find()

      .skip(skipValue)
      .limit(limitValue);

    if (User) {
      return res.status(200).json({
        success: true,
        message: "User Data Fetched Successfully",
        body: User,
      });
    }
    if (!User) {
      res.send("User is not found");
    }
  } catch (e) {
    console.log(e);
  }
};

exports.update = async (req, res, next) => {
  const errors = validationResult(req);

  var profile = await newCreateModel
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          catDesc: req.body.catDesc,
        },
      },
      { new: true }
    )
    .then((result) => {
      console.log("update", result);
      res.status(200).json({
        message: "id updated",
        data: result,
      });
    })
    .catch((err) => [
      res.status(404).json({
        message: "errors",
        error: err,
      }),
    ]);
};

exports.delUserData = async (req, res) => {
  let { id } = req.body;

  let existingUser;
  try {
    console.log("firstdataID", id);
    existingUser = await newCreateModel
      .findOneAndDelete({ _id: id })
      .then(() => {
        res.status(200).json({
          message: "User Deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  } catch {
    let error = "{ Error! Something went wrong. }";
    return res.status(400).json({ errors: error });
  }
};
