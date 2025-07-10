import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/modules/config/env";




let server : Server;



const startServer = async () => {


    try {
       
        await mongoose.connect(envVars.DB_URL)
        console.log("connect DB!!!");

        server = app.listen(5000, () => {
            console.log(`Server in port listn port ${envVars.PORT}`);

        })
    }
    catch (error) {
        console.log(error);
    }
}

startServer()

// const shutdown = (reason: string, error?: unknown) => {
//   console.log(`⚠️ ${reason}`);
//   if (error) console.error(error);
//   if (server) {
//     server.close(() => {
//       console.log("💥 Server closed.");
//       process.exit(1);
//     });
//   } else {
//     process.exit(1);
//   }
// };
// process.on("SIGINT", () => shutdown("SIGINT received"));
// process.on("SIGTERM", () => shutdown("SIGTERM received"));
// process.on("unhandledRejection", (err) => shutdown("Unhandled Rejection", err));
// process.on("uncaughtException", (err) => shutdown("Uncaught Exception", err));

// //unhandle error server handle
process.on("unhandleRjection",(err)=>{
    console.log("unhmdle server shutting down",err);
    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }
    process.exit(1)
})
process.on("unhandleException",(err)=>{
    console.log("unhmdle  excepserver shutting down",err);
    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }
    process.exit(1)
})
process.on("SIGTERM",()=>{
    console.log("sigterm signal recv  excepserver shutting down");
    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }
    process.exit(1)
})
process.on("SIGINT",()=>{
    console.log("sigint signal server shutting down");
    if(server){
        server.close(()=>{
            process.exit(1)
        });
    }
    process.exit(1)
})
//unhandle rejection errror


// Promise.reject(new Error("I forget catch promise"))


//unhandle exception error
// throw new Error("i forgot handle local eror")

 

