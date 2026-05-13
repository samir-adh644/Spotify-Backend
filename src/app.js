const express = require('express');
const cookieParser=require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')
const albumRoutes = require('./routes/album.routes')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Your React URL (Vite default)
    credentials: true                // Required to allow cookies
}));


app.use('/api/auth',authRoutes)
app.use('/api/music',musicRoutes)
app.use('/api/album',albumRoutes)


module.exports = app;