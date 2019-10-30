const express = require('express');
const stylus = require('stylus');
const debug = require('debug')('my-app');
const app = express();


app.get('/some.css', (req, res) => {
    debug('css requested');
    const css = stylus(`
        bodycolor: black
    `)
    res.send(css);
})

app.listen(3000, console.log('Server is running on port 3000'));