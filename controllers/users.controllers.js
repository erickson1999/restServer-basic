const addUser = (req, res) => {
  const { name, lastName, age } = req.body;
  res.status(201).json({
    msg: "add User",
    name,
    lastName,
    age,
  });
};
const getUsers = (req, res) => {
  const { page = "1", limit = "10" } = req.query;
  res.status(200).json({ msg: " List of users", page, limit });
};
const updateUserById = (req, res) => {
  if (req.params.userId === undefined) {
    res.json({ msg: "I did not send an id" });
  } else if (isNaN(req.params.userId)) {
    res.status(400).json({ msg: "the id can only be a number" });
  } else if (req.params.userId) {
    res
      .status(201)
      .json({ msg: `User with id ${req.params.userId} successfully updated` });
  } else {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const deleteUserById = (req, res) => {
  if (req.params.userId === undefined) {
    res.status(400).json({ msg: `I did not send an id` });
  } else if (isNaN(req.params.userId)) {
    res.status(400).json({ msg: "the id can only be a number" });
  } else if (req.params.userId) {
    res
      .status(200)
      .json({ msg: `User with id ${req.params.userId} successfully removed ` });
  } else {
    res.status(500).json({ msg: `Internal server Error` });
  }
};
module.exports = {
  addUser,
  getUsers,
  updateUserById,
  deleteUserById,
};
