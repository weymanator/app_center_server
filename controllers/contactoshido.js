const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/getcontactoshido', function(req, res){
    models.contactoShido
        .findAll({where: {contactowner: req.user.id}})
        .then(data => res.json(data))
        .catch(err => res.json({errmsg: err.message}))
});

router.post('/newcontactoshido', function(req, res){
    const contactoshido = req.body;

    if(contactoshido.nombre == null || contactoshido.nombre.trim() == ''){
        res.json({errmsg: 'No se ha creado el registro (1)'})
        return;
    }

    if(contactoshido.telefono == null || contactoshido.telefono.trim() == ''){
        res.json({errmsg: 'No se ha creado el registro(2)'})
        return;
    }

    if(contactoshido.email == null || contactoshido.email.trim() == ''){
        res.json({errmsg: 'No se ha creado el registro(3)'})
        return;
    }

    models.contactoShido
        .create({...contactoshido, contactowner: req.user.id })
        .then((data) => res.json(data))
        .catch((err) => res.json({errmsg: err.message}));

});

module.exports = router;