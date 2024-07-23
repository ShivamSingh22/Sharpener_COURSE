const cors=require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const bookRoutes = require('./routes/bookRoute');

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(bookRoutes);

sequelize
.sync()
.then(result => {
    app.listen(3000);
    console.log("Listening on port 3000");
})
.catch(err => {
    console.log(err);
})


