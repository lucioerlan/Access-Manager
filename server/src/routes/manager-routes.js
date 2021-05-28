const router = require('express').Router();

const ManagerController = require('../controllers/manager-controller');

const managerController = new ManagerController();

router
  .get('/get-all-ticket', managerController.index)
  .post('/store-ticket', managerController.store);

module.exports = router;
