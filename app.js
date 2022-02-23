import express from 'express';
import data from './phones.js';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

// app.use(express.json());
// app.use(cors());

app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// TODO: llamar en el servicio el json y devuelvo
