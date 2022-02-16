const express = require("express");

const router = express.Router();

const userController = require("../controllers/users");

router.get("/", userController.getAddUsers);

router.post("/add-user", userController.addUser); //CREATE

router.get("/users", userController.getUsers); //READ

router.get("/users/edit-user/:userId", userController.getEditUser);

router.post("/update-user", userController.postUpdateUser); //UPDATE

router.get("/users/:userId", userController.getUser);

router.post("/delete-user", userController.deleteUser); //DELETE

module.exports = router;
