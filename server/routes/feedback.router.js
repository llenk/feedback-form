var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/', (req, res) => {
    // inserts new feedback
    let queryText = `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(response => res.sendStatus(200))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    // gets feedback, ordered with newest feedback first
    let queryText = `SELECT * FROM "feedback"
        ORDER BY "id" DESC;`;
    pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

// updates whether something is flagged or not
router.put('/', (req, res) => {
    let queryText = `UPDATE "feedback" SET "flagged"=$1 WHERE "id"=$2;`;
    pool.query(queryText, [!req.body.flagged, req.body.id])
        .then(response => res.sendStatus(200))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router;