const path = require('path');
const cors=require('cors');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();
app.use(cors());


const appRoutes = require('./routes/routes');

app.use(bodyParser.json({ extended: false }));

app.use(appRoutes);

//app.use(errorController.get404);

sequelize
.sync()
.then(result => {
    app.listen(7000);
    console.log("Listening on port 7000");
})
.catch(err => {
    console.log(err);
})


