const express = require('express')
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');

// Evironnement variable or you can say constante
env.config();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello frorm Server'
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
