import express from "express"
import { userAuth } from "../middlewares/userAuth.js";
import { getAllPayments, getPaymentDetails, newPayment, updatePaymentStatus } from "../controllers/paymentController.js";
import { managerAuth } from "../middlewares/managerAuth.js";

const router = express.Router()

// Create New Payment
router.post("/new-payment",userAuth,newPayment)

// Get Payment Details
router.get("/payment-details/:id",getPaymentDetails)

// Update Payment Status
router.put("/update-payment-status",managerAuth,updatePaymentStatus)

// Get All Payments
router.get("/all-payments",managerAuth,getAllPayments)


export { router as paymentRouter };