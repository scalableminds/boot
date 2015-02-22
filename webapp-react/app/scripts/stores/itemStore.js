import alt from '../alt';
import ItemActions from '../actions/itemActions';

var todoStore = alt.createStore(class TodoStore {
  constructor() {
    this.bindActions(ItemActions);
    this.myData = {};
  }

  onCreate(text) {
    // ...
  }

  static isSomething() {
    // ...
  }
})

module.exports = todoStore