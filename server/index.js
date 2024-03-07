require(`dotenv`).config();

const morgan = require("morgan");
//To helps you set up server
const express = require("express");

//making easy for create schema and conection to mongodb
const mongoose = require("mongoose");
//password hashing
const bcript = require("bcrypt");
//helps to data to json
const bodyParser = require("body-parser");
//conect to schema
const User = require("./myModel/userSchema");

const jwt = require("jsonwebtoken");

//helps to error free between database and api creation
const cors = require("cors");

//conect to express

const app = express();

//conect to mongodb

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaanftr.mongodb.net/bdSolution?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(7001, () => {
      console.log(`Server is listening at 7001`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Middleware for authentication
const authenticateUser = (req, res, next) => {
  // Check if authentication token or session data is present in request headers or cookies
  const token = req.headers.authorization; // Example: "Bearer <token>"
  // Verify the token or session data
  if (token) {
    // If using JWT, verify and decode the token
    jwt.verify(
      token.split(" ")[1],
      process.env.JWT_TOKEN,
      (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "Unauthorized" });
        } else {
          // Extract user ID from the decoded token
          req.userId = decodedToken.userId;
          next(); // Proceed to the next middleware or route handler
        }
      }
    );
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Define a route
app.get("/", (req, res) => {
  res.send("Server is connecting at port 7001!");
});

//user registration
//post register

app.post("/register", authenticateUser, async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const hashedPassword = await bcript.hash(password, 10);
    const newUser = new User({ email, userName, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//Get register user

app.get("/register", authenticateUser, async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to find the user" });
  }
});

//Post Login

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcript.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1hr",
    });
    /// At first i did not send the token to the server that's why in application token are showing undefine
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// Route handler to fetch user information
app.get("/user/profile", authenticateUser, (req, res) => {
  const userId = req.userId;
  // Use userId to query the MongoDB database for user information
  User.findById(userId)
    .then((user) => {
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
