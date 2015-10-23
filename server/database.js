module.exports = {
  models: {},

  all: function(modelName) {
    return this._findOrCreateStore(modelName);
  },

  destroy: function(modelName, id) {
    var store = this._findOrCreateStore(modelName);
    var item = this.find(modelName, id);

    if (item) {
      return store.splice(store.indexOf(item), 1);
    } else {
      return null;
    }
  },

  find: function(modelName, id) {
    var store = this._findOrCreateStore(modelName);
    var theId = +id;

    return store.reduce(function(prevValue, item) {
      if (item.id === theId) {
        return item;
      } else {
        return prevValue;
      }
    }, null);
  },

  save: function(modelName, data) {
    var store = this._findOrCreateStore(modelName);
    
    if (data.id) {
      data.id = +data.id;
      data.created_at = (new Date()).toString();
    } else {
      data.id = this._getNextIdForModel(modelName);
    }

    data.updated_at = (new Date()).toString();
    store.push(data);
    return data;
  },

  _findOrCreateStore: function(modelName) {
    if (!this.models[modelName]) {
      this.models[modelName] = [];
    }

    return this.models[modelName];
  },

  _getNextIdForModel: function(modelName) {
    return this.models[modelName].length + 1;
  },
};

