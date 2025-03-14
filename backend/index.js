const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./configs/db.mongo.conn");
const userRouter = require("./routers/user.routers");
const productRouter = require("./routers/product.routes");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const { logger } = require("./middlewares/auth.middleware");

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger);

// ✅ Enable CORS
server.use(
  cors({
    // origin: "*", // Allow frontend to access the API
    origin: "http://localhost:5173", //Production  Value
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  })
);

// Configure session middleware

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/usersDB",
      collectionName: "sessions",
    }),
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 }, // 1 hour
  })
);



server.use("/api/user", userRouter);
server.use("/api/product", productRouter);

connectDB();
server.listen(PORT, () => {
  console.log(`Server is ON and Running http://${HOST}:${PORT} 😁✅`);
});
