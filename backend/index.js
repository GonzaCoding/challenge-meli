'use strict';

const app = require('./app');
const port = 4000;

app.listen(port, () => {
  console.log(`API Backend Challenge listen on port: ${port}`)
});
