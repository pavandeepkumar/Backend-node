
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: './.env'
});
connectDB()
.then(()=>
{
    app.listen(process.env.PORT||8000, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
})
.catch(error => {
    console.log("Error while connecting to database", error)
})

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on('error',
//             (error) => {
//                 console.log(error);
//                 throw error
//             })

//         app.listen(process.env.PORT, () => {
//             console.log(`Listening on port ${process.env.PORT}`)
//         })
//     }

//     catch (error) {
//         console.log(error)
//     }
// }
// )()