const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/tasks', function(req, res) {
    models.Tasks
        .findAll({ where: { user_id: req.user.id } })
        .then(data => res.json(data))
        .catch(err => res.json({ errmsg: err.message }));
});

router.post('/task', function(req, res) {
    const task = req.body;

    if (task.task == null || task.task.trim() == '') {
        res.json({ errmsg: 'No se pudo crear la tarea' });
        return;
    }

    models.Tasks
        .create({ ...task, user_id: req.user.id })
        .then(data => res.json(data))
        .catch(err => res.json({ errmsg: err.message }));
});

module.exports = router;
