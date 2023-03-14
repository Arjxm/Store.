import express from 'express'
import {getPaymentID} from "../routesController/paymentController.js";


const router = express.Router()


router.route('/:itemID').get(getPaymentID)



export default router