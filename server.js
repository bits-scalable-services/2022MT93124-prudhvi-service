import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

// mongoose
//     .connect('mongodb+srv://scalable_group_15:scalable_group_15@cluster0.oci0nqv.mongodb.net/?retryWrites=true&w=majority')
//     .then(
//         () => {
//             console.log("DB Connected");
//         }
//     )
//     .catch(err => {
//         console.log(err);
//     });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    }
};
// here is the magic
app.use(cors(corsOptions));
import router from "./routes/index.route.js";


app.use('/api', router);



app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,  and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
); 