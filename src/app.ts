
import express, { Request, Response }  from "express";




const app =express()
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "welcm to tour mngnt systm backend"
    })
})
export default app