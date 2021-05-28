const assert = require('assert');
const Manager = require('../../src/schema/manager-schema');

let manager;

describe('Creating ticket', () => {
  it('creates a ticket', (done) => {
    manager = new Manager({
      name: 'Nicolas Kevin Mendes',
      vehicle: 'MHS-2547',
      phone: '31-3597-8545',
      ticket_window: '2',
    });
    manager.save().then(() => {
      assert(!manager.isNew);
      done();
    });
  });
});

describe('Reading Ticket', () => {
  it('performs consultation on mongoDB', (done) => {
    Manager.find().then(() => {
      done();
    });
  });
});
