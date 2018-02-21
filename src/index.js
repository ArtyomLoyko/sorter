class Sorter {
  constructor() {
    this._arr = [];
    this._compareFunction = function(a, b) {
      return a - b;
    };
  }

  add(element) {
    this._arr.push(element);
  }

  at(index) {
    return this._arr[index];
  }

  get length() {
    return this._arr.length;
  }

  toArray() {
    return this._arr;
  }

  sort(indices) {
    this._sortingElements = [];

    for(var i = 0; i < indices.length; i++) {
      this._sortingElements.push(this._arr[indices[i]]);
      delete this._arr[indices[i]];
    };

    this._sortingElements.sort(this._compareFunction);

    for(var i = 0; i < this._arr.length; i++) {
      if(!this._arr[i]) {
        this._arr[i] = this._sortingElements.splice(0, 1)[0];
      };
    };
  }

  setComparator(compareFunction) {
    this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;
