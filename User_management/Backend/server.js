import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './router/userRouter.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = process.env.PORT || 5000;
connectDB();
const app = express();

// Serving static files
// app.use(express.static(path.join(path.resolve())));
// const __dirname = path.resolve();

// const uploadsDir = path.join(__dirname, '../uploads');
// if(!fs.existsSync(uploadsDir)){
//   fs.mkdirSync(uploadsDir);
// }



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


if(process.env.NODE_ENV === 'production'){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'Frontend/dist')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html')));
}else{
  app.get('/', (req, res) => res.send('Server is ready'));
}



app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
