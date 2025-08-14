import { Router } from "express";
import userRouter from "./user-routes";



const router: Router = Router()

router.use("/character", userRouter )



export default router