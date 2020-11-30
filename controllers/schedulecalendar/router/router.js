const {Router} = require('express');
const controller = require('../controllers/agenta.controller');

const router = Router();

router.route('/eventos').get(controller.getAllEventsByDate);
router.route('/evento').post(controller.createEvento);
router.route('/eventoO').get(controller.getOneEvent);
router.route('/eventoD').delete(controller.deleteEvent);
router.route('/eventoU').put(controller.updateEvent)




module.exports = router;