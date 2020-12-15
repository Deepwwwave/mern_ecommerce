const express = require('express')
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Evironnement variable or you can say constante
env.config();

//MongoDB connexion
// mongodb+srv//root:<password>@cluster0.t2zq5.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.t2zq5.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected');
});

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello frorm Server'
    }).then(() => {
        console.log('Database connected');
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server is runnig on port ${process.env.PORT}`);
});
