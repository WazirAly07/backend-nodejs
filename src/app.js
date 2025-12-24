
import  exprees  from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 
import e from 'express';

const app = exprees();
app.use(cors({
    origin: process.env.origin || 'http://localhost:3000',
    credentials: true 
}));
app.use(exprees.json({limit: '50kb'}));
app.use(exprees.urlencoded({extended: true, limit: '50kb'}));
 app.use(exprees.static('public'));
 app.use(cookieParser());

 import userRoutes from './routes/users.js';
app.use('/api/v1/users', userRoutes);
 
export default app;