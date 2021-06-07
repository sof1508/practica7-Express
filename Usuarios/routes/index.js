const express = require('express');
const app = express();
var router = express.Router();

const port = 3001;

app.listen(port, () => {
    console.log('Escuchando en http://localhost:' + port);
});

module.exports = router;