import express from 'express';
import cors from 'cors';
import {ethers} from "ethers";
// import PaymentProcess from '../client/src/contracts/PaymentProcessor.json'assert { type: "json" };
import {dbCon} from "./dbCon.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import getOrderSlipRoutes from "./routes/getOrderSlipRoutes.js";
import paymentSchema from "./Schema/paymentSchema.js";

//Test
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
const PaymentProcess = require("../client/src/contracts/PaymentProcessor.json")

dbCon();

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//Routes
app.use("/api/payment", paymentRoutes)
app.use("/api/orders", getOrderSlipRoutes)

//Ether connection
const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545/");
    const networkId = '5777';

    const paymentProcessor = new ethers.Contract(
        PaymentProcess.networks[networkId].address,
        PaymentProcess.abi,
        provider
    )

    paymentProcessor.on('PaymentVerified', async (payer, amount, paymentID, date) => {
        console.log(payer, amount, paymentID, date);
        const payment = await paymentSchema.findOne({id:paymentID});
        if(payment){
            payment.paid = true;
            await payment.save();
        }
    })

}

listenToEvents();

app.listen(5000, () => {
    console.log("Hosted at 5000")
})

