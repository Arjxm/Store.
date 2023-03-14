import asyncHandler from "express-async-handler";
import paymentSchema from "../Schema/paymentSchema.js";

const getOrderSlip = asyncHandler(async (req, res) => {
    try{
        const payment = await paymentSchema.findOne({id: req.params.paymentID});
        if(payment && payment.paid === true){
            res.status(200).json({message:payment.itemID})
            await paymentSchema.updateOne({id:req.params.paymentID}, {
                paid: true
            })
        }

       else{
            res.status(400).json({message:"payment not completed "})
        }
    }catch (e){
        console.log(e)
    }
})

export {getOrderSlip}