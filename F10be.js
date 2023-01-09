// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Ieee754Float'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Ieee754Float'));
  } else {
    root.F10be = factory(root.KaitaiStream, root.Ieee754Float);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, Ieee754Float) {
/**
 * see the doc for `ieee754_float`.
 */

var F10be = (function() {
  function F10be(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F10be.prototype._read = function() {
    this.sign = this._io.readBitsIntBe(1) != 0;
    this.biasedExponent = this._io.readBitsIntBe(15);
    this.integer = this._io.readBitsIntBe(1) != 0;
    this.fraction = this._io.readBitsIntBe(63);
  }
  Object.defineProperty(F10be.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      var _pos = this._io.pos;
      this._io.seek(0);
      this._m_value = new Ieee754Float(this._io, this, null, ((1 << (15 - 1)) - 1), 63, 15, this.sign, this.biasedExponent, this.fraction);
      this._io.seek(_pos);
      return this._m_value;
    }
  });

  return F10be;
})();
return F10be;
}));
