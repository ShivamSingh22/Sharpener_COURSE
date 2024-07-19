const Appointment = require('../models/model');

exports.postAddData = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;

    try {
        const data = await Appointment.create({
            username: username,
            email: email,
            phone: phone
        });
        console.log("Appointment Added!");
        res.status(201).json({ newUser: data });
    } catch (err) {
        console.log(err);
    }
};

exports.getDbData = async (req, res, next) => {
    try {
        const users = await Appointment.findAll();
        res.status(200).json({ users: users });
    } catch (err) {
        console.log(err);
    }
};

exports.deleteData = async (req,res,next) => {
    if(req.params.id ==='undefined'){
        console.log('ID is missing');
        return res.status(400).json({err:'ID is missing'});
    }

   try {
    const uId =req.params.id;
    await Appointment.destroy({where: {id: uId}});
    res.sendStatus(200); 
   } catch (error) {
    console.log(error);
    res.status(500).json(error);
   }
};