const Stripe = require("stripe")(process.env.stripe_Secret)
const { v4: uuidv4 } = require('uuid');

// const uuid = uuidv4();

const payment = async (req, res) => {
    console.log('1234',req.body);
    const token= req.body.token.id
    const amount=50000

    const idempotencykey = uuidv4()
 
     const customer=await Stripe.customers.create({
        email:"manukrishnan@gmail.com",
        source: token,
    // }).then((customer)=>{})
    // Stripe.charges.create({
    //         amount : amount*100,
    //         currency:'INR',
    //         customer:customer.id,
    //         receipt_email:"manukrishnan@gmail.com"
    //     },{idempotencykey})
    //     console.log('lkj',payment);

    //     stripe.customers.create({
    //         email: req.body.stripeEmail,
    //         source: req.body.stripeToken,
            name: 'Gourav Hammad',
            address: {
                line1: 'TC 9/4 Old MES colony',
                postal_code: '452331',
                city: 'Indore',
                state: 'Madhya Pradesh',
                country: 'India',
            }
        })
        .then((customer) => {
        
            return Stripe.charges.create({
                amount: 2500,     // Charging Rs 25
                description: 'Web Development Product',
                currency: 'INR',
                customer: customer.id
            });
        })
        .then((charge) => {
            console.log('plooooo',charge);
            res.send("Success")  // If no error occurs
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });

 }
 
 module.exports = {
     payment
 }