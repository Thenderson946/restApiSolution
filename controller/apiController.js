const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  editUser,
} = require("../routes/apis/restApis");
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const uploader = require("../middleware/uploader"); // Make sure this exists if needed

// Middleware: Allow all access control
router.use((req, res, next) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers",
  });
  next();
});

// GET all users
router.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// GET user by ID
router.get("/:userid", async (req, res) => {
  try {
    const result = await getUser(req.params.userid);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// POST: Create user
router.post("/", uploader.single("image"), async (req, res) => {
  const { name, email, gender, status } = req.body;
  const user = new User(name, email, gender, status);

  try {
    const result = await createUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// PUT: Update user
router.put("/:userid", async (req, res) => {
  const { name, email, gender, status } = req.body;
  const updatedUser = { name, email, gender, status };

  try {
    const result = await editUser(req.params.userid, updatedUser);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// DELETE: Remove user
router.delete("/:userid", async (req, res) => {
  try {
    const result = await deleteUser(req.params.userid);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
