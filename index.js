module.exports = (pipeName = 'do') => {
  Object.prototype[pipeName] = function (fn, ...args) {
    return fn.call(this, ...args)
  }
}
