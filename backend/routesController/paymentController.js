import asyncHandler from 'express-async-handler'
import PaymentSchema from "../Schema/paymentSchema.js";


const getPaymentID = asyncHandler(async (req, res) => {

    try {
        const paymentID = (Math.random() * 10000).toFixed(0);
        const payment = await new PaymentSchema({
            id:paymentID,
            itemID: req.params.itemID,
            paid: false
        }).save();

        if(payment){
            res.status(201).json(payment)
        }
    } catch (e) {
        console.log(e)
    }
})


export {getPaymentID};