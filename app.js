const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE 

const usersRouter = require("./router/userRouter");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE



app.use("/", usersRouter);


app.listen(process.env.PORT || 3000, function () {
    console.log("Server 3000 running");
  });
  
  //app.use(express.static(publicPath));
  
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));