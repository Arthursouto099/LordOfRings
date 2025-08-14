import { Router } from "express";
import PersonagemController from "../controllers/PersonagemController";



const userRouter: Router = Router()

userRouter.post("/", PersonagemController.createPersonagem)
userRouter.put("/:id", PersonagemController.updatePersonagem)
userRouter.get("/", PersonagemController.getPersonagens)
userRouter.get("/:id", PersonagemController.getPersonagem)
userRouter.delete("/:id", PersonagemController.deletePersonagem)



export default userRouter