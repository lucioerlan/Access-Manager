const Manager = require('../schema/manager-schema');

const GetAll = async () => {
  return Manager.find().sort([['createdAt', 'descending']]);
};

const Store = async (name, vehicle, phone, ticket_window) => {
  return Manager.create({
    name,
    vehicle,
    phone,
    ticket_window
  });
};

module.exports = {
  GetAll,
  Store,
};
