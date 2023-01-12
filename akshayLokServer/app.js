const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");


//importing routes
const User = require('./routes/Users')


//DB CONNECTION
mongoose.connect(
    'mongodb://127.0.0.1:27017/akshayLok' ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("connected to mondo db server");
    }
  );




//port
const PORT = process.env.PORT || 8080;

//app Initialization
const app = express();

//universal middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
    cors({
      origin : '*',
    })
  );


app.use('/api/v1/user', User)


app.listen(PORT, () => {
    console.log(`istening at port ${PORT} `);
  });

