import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title()     { return faker.lorem.word(); },
  frequency() { return faker.helpers.randomize([1, 2]); },
  start()     { return faker.date.recent(); },
});
