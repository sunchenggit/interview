String.prototype.myTrim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '')
}