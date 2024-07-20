const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//this is a middleware so it will only get registered first on npm start and thus the sequelize step 
//to create a new user would be run first and this middleware will run only when this gets triggered for a request
app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user =>{
        req.user= user;//adding a new field to our req object
        //also this is a sequelize object comes bundled with sequelize methods as used in controller/admin

        next();
    })
    .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete : 'CASCADE'});
User.hasMany(Product);
 
sequelize
.sync()
.then(result => { 
    return User.findByPk(1);
}).then(user => {
    if(!user){
        return User.create({name: 'Shivam',email:'sjk@123.com'});
    }
    return user;
})
.then(user => {
    console.log(user);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})


