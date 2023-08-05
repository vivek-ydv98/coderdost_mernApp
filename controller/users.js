const fs = require("fs");
const Users = JSON.parse(
  fs.readFileSync(process.cwd() + "/user.json", "utf-8")
);

exports.createUser = (req, res) => {
  const newdata = req.body;
  Users.push(newdata);
  res.json(Users);
};
exports.getAllUser = (req, res) => {
  res.json(Users);
};
exports.getSingleUser = (req, res) => {
  const data = Users.find((p) => p.id === +req.params.id);
  res.json(data);
};
exports.updateUserObject = (req, res) => {
  const index = Users.findIndex((p) => p.id == req.params.id);
  Users.splice(index, 1, { id: req.params.id, ...req.body });
  res.status(201).json(Users);
};
exports.updateUserValue = (req, res) => {
  const index = Users.findIndex((p) => p.id == req.params.id);
  const data = Users[index];
  Users.splice(index, 1, { ...data, ...req.body });
  res.status(201).json(Users);
};
exports.deleteUser = (req, res) => {
  const index = Users.findIndex((p) => p.id == req.params.id);
  Users.splice(index, 1);
  res.json(Users);
};
