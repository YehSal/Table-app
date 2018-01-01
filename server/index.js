const express = require('express');

const app = express();

// Dynamic port specification for Heroku depolyment
const PORT = process.env.PORT || 3000;
app.listen(PORT);