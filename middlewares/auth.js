const models = require('../models');
const jwt = require('jsonwebtoken');

const unauthorized = {
    errmsg: 'Usuario no autorizado',
    code: 0,
};

module.exports = function Auth(req, res, next) {
    if (req.headers.authorization == null) {
        res.json(unauthorized);
        return;
    }

    const verify = /^Bearer (.+)$/;

    if (!verify.test(req.headers.authorization)) {
        res.json(unauthorized);
        return;
    }

    const [match, token] = req.headers.authorization.match(verify);

    let user;
    
    try {
        user = jwt.verify(token, 'hola');
    } catch (err) {
        user = void 0;
    }

    if (user == null) {
        res.json(unauthorized);
        return;
    }

    models.Users
        .findByPk(user.id)
        .then(data => {
            if (data == null) throw unauthorized;
            req.user = data;
            next();
        })
        .catch(err => {
            if (err.code != null) res.json(err);
            else res.json({ errmsg: err.message });
        });
}
