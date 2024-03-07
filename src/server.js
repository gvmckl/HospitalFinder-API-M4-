import express from "express";
import {userRoute} from './routes/users.routes.js';
import {hospitalRoute} from './routes/hospital.routes.js';
import cors from "cors";

export const app = express();
const port = 3636;

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(hospitalRoute);

app.listen(port, async () => {
    console.log(`Servidor tá funcionando port ${port}`)
    
});