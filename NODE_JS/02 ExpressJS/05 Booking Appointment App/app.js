const path = require('path');
const cors=require('cors');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();
app.use(cors());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

const appRoutes = require('./routes/routes');
//const shopRoutes = require('./routes/shop');

app.use(bodyParser.json({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));


//app.use('/admin', adminRoutes);
app.use(appRoutes);

//app.use(errorController.get404);

sequelize
.sync()
.then(result => {
    app.listen(8000);
    console.log("Listening on port 8000");
})
.catch(err => {
    console.log(err);
})


