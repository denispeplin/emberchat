App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('messages');
});

App.MessagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});

App.ApplicationController = Ember.Controller.extend({
  init: function() {
    this.transitionToRoute('messages');
  }
});

App.MessagesController = Ember.ArrayController.extend({
  actions: {
    create: function() {
      var data = this.getProperties('body');
      this.set('body', '');
      this.store.createRecord('message', data);
    }
  }
});

App.Message = DS.Model.extend({
  body: DS.attr('string')
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Message.FIXTURES = [
]
