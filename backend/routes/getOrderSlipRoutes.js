import express from 'express'
import {getOrderSlip} from "../routesController/orderSlipController.js";



const router = express.Router()


router.route('/:paymentID').get(getOrderSlip)



export default router