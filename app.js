const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use('/api',routes);



app.listen(process.env.port || 3001, () => console.log('listen on port 3001'));