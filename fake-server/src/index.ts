import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8010;
app.listen(port, () => console.log(`Listening on http://localhost:${port}...`));
