const Util = require('../utils/Utils');
const { GetAll, Store } = require('../models/manager-models');

const util = new Util();

/**
 * The ManagerController.
 *
 * @method index Get all tickets
 * @method store Insert tickets
 */

class ManagerController {
  async index(req, res) {
    try {
      const data = await GetAll();

      if (data) {
        util.setSuccess(200, data);
      } else {
        util.setError(400, 'no data!');
      }

      return util.send(res);
    } catch (err) {
      util.setError(500, err.message);
      return util.send(res);
    }
  }

  async store(req, res) {
    try {
      const { name, vehicle, phone, ticket_window } = req.body;

      const data = await Store(name, vehicle, phone, ticket_window);

      if (data) {
        util.setSuccess(200, data);
      }

      req.io.emit('notification', data);
      return util.send(res);
    } catch (err) {
      util.setError(500, err.message);
      return util.send(res);
    }
  }
}

module.exports = ManagerController;
