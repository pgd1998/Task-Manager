import express from 'express';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors';

connectDB();
const app = express();

// Enable CORS
app.use(cors({
  origin: 'https://www.poorvithgowda.com'
}));

// Middleware to redirect from non-www to www
app.use((req, res, next) => {
  if (req.headers.host === 'poorvithgowda.com') {
    return res.redirect(301, 'https://www.poorvithgowda.com' + req.originalUrl);
  }
  next();
});

//Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.raw());
// app.use(express.text());

//Routes
app.use('/api/tasks',taskRoutes);

const PORT = process.env.PORT || 5000;
console.log('Starting Server...')
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));