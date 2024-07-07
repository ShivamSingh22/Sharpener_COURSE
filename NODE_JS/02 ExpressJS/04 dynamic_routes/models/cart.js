const fs=require('fs');
const path= require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart{

    static addProduct(id, productPrice){
        //fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0
            };

            //if we dont have an error
            if(!err){
                cart=JSON.parse(fileContent);
            }
        //Analyze the cart => Find existing product
        const existingProductIndex= cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];

        let updatedProduct;
         //Add new product/ increase quantity
          
        if(existingProduct){
            //if we got a product with that id i.e, an existing product
            updatedProduct = {...existingProduct};
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products=[...cart.products];
            cart.products[existingProductIndex] = updatedProduct;

        } else{
            //for a new product
            updatedProduct = {id: id,qty:1};
            cart.products=[...cart.products,updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p,JSON.stringify(cart), err => {
            console.log(err);
        })
    });    
    }
}