import bcrypt from "bcrypt";
import User from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password || !phone || !role) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered go to login instead",
      });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
