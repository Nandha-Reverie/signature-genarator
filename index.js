const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const port = 5002
const router = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', router)


app.listen(port, () => {
    console.log('====================================');
    console.log(`Server started at port ${port}`);
    console.log('====================================');
})