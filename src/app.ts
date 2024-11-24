import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRouters } from './app/modules/products/products.route';
import { orderRoutes } from './app/modules/order/order.route';
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products',productRouters)
app.use('/api/orders',orderRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
