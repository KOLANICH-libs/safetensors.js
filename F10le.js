// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Ieee754Float'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Ieee754Float'));
  } else {
    root.F10le = factory(root.KaitaiStream, root.Ieee754Float);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, Ieee754Float) {
/**
 * see the doc for `ieee754_float`.
 * ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ifffffff eeeeeeee seeeeeee
 */

var F10le = (function() {
  function F10le(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F10le.prototype._read = function() {
    this.fracLoLo = this._io.readU4le();
    this.fracLo = this._io.readU2le();
    this.fracMid = this._io.readU1();
    this.integer = this._io.readBitsIntBe(1) != 0;
    this.fracHi = this._io.readBitsIntBe(7);
    this._io.alignToByte();
    this.biasedExponentLo = this._io.readU1();
    this.sign = this._io.readBitsIntBe(1) != 0;
    this.biasedExponentHi = this._io.readBitsIntBe(7);
  }
  Object.defineProperty(F10le.prototype, 'fraction', {
    get: function() {
      if (this._m_fraction !== undefined)
        return this._m_fraction;
      this._m_fraction = ((((((this.fracHi << 8) | this.fracMid) << 16) | this.fracLo) << 32) | this.fracLoLo);
      return this._m_fraction;
    }
  });
  Object.defineProperty(F10le.prototype, 'biasedExponent', {
    get: function() {
      if (this._m_biasedExponent !== undefined)
        return this._m_biasedExponent;
      this._m_biasedExponent = ((this.biasedExponentHi << 8) | this.biasedExponentLo);
      return this._m_biasedExponent;
    }
  });
  Object.defineProperty(F10le.prototype, 'value', {
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

  return F10le;
})();
return F10le;
}));
