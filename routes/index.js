const express = require('express');
const app = express();
const router = express.Router();
const db = require('../config/db');

// Index
router.get('/', (req, res, next) => {
    db.query("SELECT * FROM unos", (err, result) => {
        if (err) throw err;

        // Rijesenje za place
        var total_rijesenje =  0;
        for (let i = 0; i < result.length; i++) {
            total_rijesenje += Number(result[i].placa);
        }
        const rijesenje_place = total_rijesenje;

        // Rijesenje za stednju
        var total_stednja = 0;
        for (let i = 0; i < result.length; i++) {
            total_stednja += Number(result[i].stednja);
        }
        const rijesenje_stednje = total_stednja;

        res.render('index', { 
            result: result,
            rijesenje_place: rijesenje_place,
            rijesenje_stednje: rijesenje_stednje
        });
    });
});

// Create GET
router.get('/create', (req, res, next) => {
    res.redirect('/');
});

// Create POST
router.post('/create', (req, res, next) => {
    const godina = req.body.godina;
    const mjesec = req.body.mjesec;
    const placa = req.body.placa;
    const stednja = req.body.stednja;

    const sql = `INSERT INTO unos (godina, mjesec, placa, stednja ) VALUES ('${godina}', '${mjesec}', '${placa}', ${stednja} )`;
    db.query(sql, (err, data) => {
        if (err) throw err;
    });
    res.redirect('/');
});

module.exports = router;