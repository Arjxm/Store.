import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        id:String,
        itemID: String,
        paid: Boolean
    }
)

export default mongoose.model('Payment', PaymentSchema)