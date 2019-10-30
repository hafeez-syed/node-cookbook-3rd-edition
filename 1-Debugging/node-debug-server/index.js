const express = require('express');
const stylus = require('stylus');
const debug = require('debug')('my-app');
const app = express();


app.get('/', (req, res) => res.send('hey'));

setTimeout(() => { console.log('I waited for you') }, 100);

app.listen(3000, console.log('Server is running on port 3000'));