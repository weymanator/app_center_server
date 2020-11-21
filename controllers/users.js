const express = require('express');
const models = require('../models');

const router = express.Router();

router.post('/signin',  function(req, res) {
    const params = req.body;
 
    models.Users
        .findAll({ where: { username: params.username, password: params.password } })
        .then(data => {
            if (data.length === 0) res.json({ errmsg: 'No users found' });
            else res.json(data[0]);
        })
        .catch(err => {
            res.json({ errmsg: err.message });
        });
});

module.exports = router;
