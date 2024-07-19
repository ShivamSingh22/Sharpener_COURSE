const Expense = require('../models/model')

exports.postAddData = async (req, res, next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    try {
        const data = await Expense.create({
            amount: amount,
            description: description,
            category: category
        });
        console.log("Expense Added!");
        res.status(201).json({ newExp: data });
    } catch (err) {
        console.log(err);
    }
};

exports.getDbData = async (req,res,next) =>{
    try {
        const prevData = await Expense.findAll();
        res.status(200).json({ prevData: prevData });
    } catch (err) {
        console.log(err);
    }
}

exports.deleteData = async (req,res,next) => {
    if(req.params.id ==='undefined'){
        console.log('ID is missing');
        return res.status(400).json({err:'ID is missing'});
    }

   try {
    const uId =req.params.id;
    await Expense.destroy({where: {id: uId}});
    res.sendStatus(200); 
   } catch (error) {
    console.log(error);
    res.status(500).json(error);
   }
}