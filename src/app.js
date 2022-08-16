const express = require('express');
const path = require('path');
const express = require('express-session');

const mainRouter = require('./routes/main')

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', mainRouter);
app.use(expressSession)

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});

