
const express = require('express')
const morgan = require('morgan')


//set up all variables in the .env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();
console.log(process.env.PORT);

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

//Middleware
app.use(morgan('dev')); //logger
app.use(express.json()); //body parser

//Routes
app.use('/api/user', require('./routes/userRoutes'))

// Use this route to setup the API documentation
app.get('/', (req, res) =>{
    res.send('Welcome')
});

app.listen(PORT, ()=>{
    console.log(`server running ate port : ${PORT}`)
})

