import alt from '../alt';

class ItemActions {
  constructor() {
    this.generateActions(
      'create',
      'updateText'
    )
  }
}

module.exports = alt.createActions(ItemActions)