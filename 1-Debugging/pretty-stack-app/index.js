require('cute-stack')();
const express = require('express');
const past = require('./past');
const future = require('./future');
const routes = require('./routes');
const app = express();

app.use(routes);

app.get('/:age', (req, res) => {
    res.send(past(req.params.age, 10) + future(req.params.future, 10))
})

app.listen(3000, console.log('Server is running on port 3000'));