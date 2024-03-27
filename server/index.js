const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT || 7001;
// This is your test secret API key.

// middleware
const jwt = require("jsonwebtoken");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaanftr.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//Verify Jwt or Validation of JWT token
const verifyJWT = (req, res, next) => {
  const authoraization = req.headers.authorization;
  if (!authoraization) {
    return res
      .status(401)
      .send({ error: true, message: `Unauthorized Access` });
  }
  const token = authoraization.split(" ")[1];
  // console.log(token);
  //verify token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: `Unauthorized Access` });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    const usersCollection = client.db("bdSolution").collection("users");
    const contactHistory = client.db("bdSolution").collection("contacts");

    //Genarate Jwt token
    app.post("/jwt", async (req, res) => {
      const email = req.body;
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: `7d`,
      });
      // console.log(token)
      res.send({ token });
    });

    //save user to database

    app.put("/users/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };

      const updateDoc = {
        $set: user,
      };

      const result = await usersCollection.updateOne(query, updateDoc, options);

      console.log(result);
      res.send(result);
    });

    //Get All user by email

    app.get("/users/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = usersCollection.find();

      const output = await result.toArray();
      res.send(output);
      // console.log(result);
    });

    //Find Admin user

    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.findOne(query);
      res.send(result);
      // console.log(result);
    });

    /// delete user

    app.delete("/users/:id", verifyJWT, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const remove = await usersCollection.deleteOne(query);
      res.send(remove);
    });

    //contact add to database

    app.post("/contacts", verifyJWT, async (req, res) => {
      const body = req.body;
      const result = await contactHistory.insertOne(body);
      res.send(result);
    });

    //get contact data

    app.get("/contacts", verifyJWT, async (req, res) => {
      const query = req.params.email;
      const contact = contactHistory.find(query);
      const history = await contact.toArray();
      res.send(history);
    });

    /// delete conatact

    app.delete("/contact/:id", verifyJWT, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const remove = await contactHistory.deleteOne(query);
      res.send(remove);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bd-Solution_It Server is running..");
});

app.listen(port, () => {
  console.log(`Bd-Solution_It is running on port ${port}`);
});
