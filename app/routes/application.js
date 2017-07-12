import Ember from "ember";

export default Ember.Route.extend({
  model() {
    console.log("In application model");
  },

  afterModel() {
    console.log("In application afterModel");
  }
});
