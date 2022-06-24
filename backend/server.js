const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(require('./routers/router'));

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
