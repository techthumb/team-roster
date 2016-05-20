import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title:     DS.attr('string'),
  frequency: DS.attr('number'),
  start:     DS.attr('date'),
  isWeekly:  Ember.computed('frequency', function() { return this.get('frequency') === 1; } )
});
