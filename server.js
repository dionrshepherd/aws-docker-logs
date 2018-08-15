'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    console.log('console from within the response');
    console.error('error from within the response');
    console.debug('debug from within the response');
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} as a log`);
console.error('THIS IS AN ERROR');
console.debug('this is a debug');