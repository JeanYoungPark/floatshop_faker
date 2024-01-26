import express from 'express';
import cors from 'cors';
import { initializeData } from './myModule/dataModule.js';

export const app = express();
const port = 3001;

/* front 주소 */
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

initializeData();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});