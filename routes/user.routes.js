const { Router } = require("express");
const { addUser, getUsers, deleteUserById, updateUserById } = require("../controllers/users.controllers")
const router = Router();

router.post("/",addUser);
router.get("/", getUsers);
router.put("/:userId",updateUserById );
router.put("/",updateUserById);
router.delete("/:userId", deleteUserById);
router.delete("/",deleteUserById);

module.exports = router;
