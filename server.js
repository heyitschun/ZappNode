const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');

const app = express();

// Passport Config
app.use(passport.initialize());
require('./config/passport')(passport);

// Connect MongoDB
connectDB();

// Initialize MiddleWare
app.use(express.json({ extentend: false }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API Running..'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
