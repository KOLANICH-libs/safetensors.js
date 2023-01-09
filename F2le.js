// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Ieee754Float'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Ieee754Float'));
  } else {
    root.F2le = factory(root.KaitaiStream, root.Ieee754Float);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, Ieee754Float) {
/**
 * See the doc for `ieee754_float`. ffffffff seeeeeff
 */

var F2le = (function() {
  function F2le(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F2le.prototype._read = function() {
    this.fractionLo = this._io.readU1();
    this.sign = this._io.readBitsIntBe(1) != 0;
    this.biasedExponent = this._io.readBitsIntBe(5);
    this.fractionHi = this._io.readBitsIntBe(2);
  }
  Object.defineProperty(F2le.prototype, 'fraction', {
    get: function() {
      if (this._m_fraction !== undefined)
        return this._m_fraction;
      this._m_fraction = ((this.fractionHi << 8) | this.fractionLo);
      return this._m_fraction;
    }
  });
  Object.defineProperty(F2le.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      var _pos = this._io.pos;
      this._io.seek(0);
      this._m_value = new Ieee754Float(this._io, this, null, ((1 << (5 - 1)) - 1), 10, 5, this.sign, this.biasedExponent, this.fraction);
      this._io.seek(_pos);
      return this._m_value;
    }
  });

  return F2le;
})();
return F2le;
}));
