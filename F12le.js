// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './F10le'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./F10le'));
  } else {
    root.F12le = factory(root.KaitaiStream, root.F10le);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, F10le) {
/**
 * see the doc for `ieee754_float`.
 */

var F12le = (function() {
  function F12le(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F12le.prototype._read = function() {
    this.f10 = new F10le(this._io, this, null);
    this.garbage = this._io.readU2be();
  }

  return F12le;
})();
return F12le;
}));
