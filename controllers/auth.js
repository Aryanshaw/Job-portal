import authSchema from "../models/authSchema.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new authSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    const newSavedUser = await newUser.save();
    if (!newSavedUser) throw Error("Error Creating User");
    return await res
      .status(201)
      .json({ newSavedUser, message: "New user created" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authSchema.findOne({ username }).exec();

    if (!user) return res.status(500).json("Error: User not found");

    if (user.password !== password)
      return res.status(500).json("Error: Incorrect password");

    const { password: _, ...otherDetails } = user.toObject();
    res.status(200).json({ ...otherDetails, message: "login successful" });
  } catch (err) {
    console.error(err);
    return res.status(403).send("Invalid Login");
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await authSchema.find();
    if (!users) throw Error("Unable to fetch users");
    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await authSchema.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    await updateUser.save();
    if (!updateUser) throw Error("Unable to update user");
    return res.status(200).json({ message: "updated the user" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await authSchema.findById(id);
    if (!user) throw Error("No such user exists");
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

export const logoutUser = async (req, res) => {
  return await res.status(200).json({ message: "Logout successful" });
};
