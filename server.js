const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/* const multer = require('multer');
const upload = multer({dest: './upload'}); */

app.get('/api/stockadd', (req, res) => {
    res.send([
        {
            'number' : 1,
            'stockName' : 'qwe',
            'price' : 'qwes'
        },
        {
            'number' : 2,
            'stockName' : 'qwe',
            'price' : 'qwes'
        }
    ]);
});

/* app.use('/number', express.static('./upload'));
app.post("./api/stockadd", upload.single('number'), (req,res) => {
    let sql = 'INSERT INTO NUBER VALUES (null, ?, ?)';
}) */

app.listen(port, () => console.log(`Listenig on port ${port}`));