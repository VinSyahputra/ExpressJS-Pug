const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const rootDir = require('./utils/path');

app.set('view engine', 'pug');
app.set('views', 'views');


const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

// app.use((req, res, next)=>{
//     console.log('ini seperti __construct di php');
// next();
// })

// app.use digunakan untuk semua method di http (get,post,patch,del,...)
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// controller /admin
app.use('/admin',adminData.routes);
app.use(shopRoute);

//return 404 status
app.use('/', (req, res, next) => {
    res.status(404).render('404');
});

// server.listen(3000);
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});