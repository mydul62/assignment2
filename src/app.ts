import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRouters } from './app/modules/products/products.route';
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',productRouters)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
