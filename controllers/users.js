const express = require('express');
const models = require('../models');
const jwt = require('jsonwebtoken');

const router = express.Router();

function filterUser(user) {
    const filtered = {};
    const keys = Object.keys(user);
    keys.forEach((key) => {
        if (key === 'password') return;
        filtered[key] = user[key];
    });
    return filtered;
}

router.get('/users/getinfo', function(req, res) {
    res.json(filterUser(req.user.toJSON()));
});

router.post('/signin', function(req, res) {
    const params = req.body;
    models.Users
        .findAll({ where: { username: params.username, password: params.password } })
        .then(data => {
            if (data.length === 0) res.json({ errmsg: 'No users found' });
            else {
                const filtered = filterUser(data[0].toJSON());

                filtered.token = jwt.sign({ id: filtered.id }, 'hola', { expiresIn: 60 * 60 * 24 });

                res.json(filtered);
            }
        })
        .catch(err => {
            res.json({ errmsg: err.message });
        });
});

module.exports = router;
