const models = require("../../../models");

/**Nuestros controladores */
const controllers = {
  getAllEventsByDate(req, res) {
    const { date } = req.query;
    const { id } = req.user;


    models.agenda
      .findAll({ where: { id_user: id, fecha: date } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({msg: err.message}));
  },
  createEvento(req, res) {
    const {id} = req.user;
    const { evento, detalles, date } = req.body;
    const { day, month, year } = date;

    const fecha = `${year}-${month}-${day}`;

    models.agenda
      .create({ evento, detalles, fecha, status: false, id_user: id })
      .then((data) => res.json(data))
      .catch((err) => res.json({ errmsg: err.message }));
  },
};

module.exports = controllers;
