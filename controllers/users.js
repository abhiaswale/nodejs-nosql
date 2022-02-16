const User = require("../model/user");

exports.getAddUsers = (req, res, next) => {
  res.render("users/add-user-form", {
    editing: false,
  });
};

exports.addUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.emailId;
  const user = new User({
    username: name,
    emailId: email,
  });
  user
    .save()
    .then((resp) => {
      //   console.log(resp);
      console.log("USER ADDED SUCCESSFULLY");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render("users/users-list", {
        prods: users,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditUser = (req, res, next) => {
  const edit = req.query.edit;
  if (!edit) {
    res.redirect("/");
  }
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      res.render("users/add-user-form", {
        editing: edit,
        user: user,
      });
    })
    .catch();
};

exports.postUpdateUser = (req, res, next) => {
  const userId = req.body.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.emailId;
  User.findById(userId)
    .then((user) => {
      user.username = updatedName;
      user.emailId = updatedEmail;
      return user.save();
    })
    .then(() => {
      console.log("UPDATED USER SUCCESSFULLY");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      res.render("users/user-detail", {
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  console.log(userId);
  User.findByIdAndDelete(userId)
    .then((result) => {
      console.log(result);
    })
    .then(() => {
      console.log("DELETED SUCCESSFULLYs");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};
