const models = require('../models');

module.exports = function Auth(req, res, next) {
    if (req.headers.authorization == null) {
        res.json({ errmsg: 'Usuario no autorizado' });
        return;
    }

    models.Users
        .findByPk(req.headers.authorization)
        .then(data => {
            if (data == null) throw Error('Usuario no autorizado');
            req.user = data;
            next();
        })
        .catch(err => {
            res.json({ errmsg: err.message });
        });
}
