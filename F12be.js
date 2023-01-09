// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './F10be'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./F10be'));
  } else {
    root.F12be = factory(root.KaitaiStream, root.F10be);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, F10be) {
/**
 * see the doc for `ieee754_float`.
 */

var F12be = (function() {
  function F12be(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F12be.prototype._read = function() {
    this.garbage = this._io.readU2be();
    this.f10 = new F10be(this._io, this, null);
  }

  return F12be;
})();
return F12be;
}));
