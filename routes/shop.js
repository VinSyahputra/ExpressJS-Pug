const path = require('path');
const express = require('express');

const adminData = require('./admin');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('shop.js',adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, '/views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});
module.exports = router;