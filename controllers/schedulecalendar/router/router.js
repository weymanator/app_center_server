const {Router} = require('express');
const controller = require('../controllers/agenta.controller');

const router = Router();

router.route('/eventos').get(controller.getAllEventsByDate);
router.route('/evento').post(controller.createEvento)

module.exports = router;