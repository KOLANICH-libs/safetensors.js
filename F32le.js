// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Ieee754Float'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Ieee754Float'));
  } else {
    root.F32le = factory(root.KaitaiStream, root.Ieee754Float);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, Ieee754Float) {
/**
 * see the doc for `ieee754_float`.
 */

var F32le = (function() {
  function F32le(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  F32le.prototype._read = function() {
    this.fracLoLo = this._io.readU4le();
    this.fracLo = this._io.readU8le();
    this.fracMedLo = this._io.readU8le();
    this.fracMedHi = this._io.readU8le();
    this.fracHi = this._io.readU1();
    this.biasedExponentLo = this._io.readBitsIntBe(4);
    this.fracHiHi = this._io.readBitsIntBe(4);
    this._io.alignToByte();
    this.biasedExponentMe = this._io.readU1();
    this.sign = this._io.readBitsIntBe(1) != 0;
    this.biasedExponentHi = this._io.readBitsIntBe(7);
  }
  Object.defineProperty(F32le.prototype, 'fraction', {
    get: function() {
      if (this._m_fraction !== undefined)
        return this._m_fraction;
      this._m_fraction = ((((((((((this.fracHiHi << 8) | this.fracHi) << 64) | this.fracMedHi) << 64) | this.fracMedLo) << 64) | this.fracLo) << 32) | this.fracLoLo);
      return this._m_fraction;
    }
  });
  Object.defineProperty(F32le.prototype, 'biasedExponent', {
    get: function() {
      if (this._m_biasedExponent !== undefined)
        return this._m_biasedExponent;
      this._m_biasedExponent = ((((this.biasedExponentHi << 8) | this.biasedExponentMe) << 4) | this.biasedExponentLo);
      return this._m_biasedExponent;
    }
  });
  Object.defineProperty(F32le.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      var _pos = this._io.pos;
      this._io.seek(0);
      this._m_value = new Ieee754Float(this._io, this, null, ((1 << (19 - 1)) - 1), 236, 19, this.sign, this.biasedExponent, this.fraction);
      this._io.seek(_pos);
      return this._m_value;
    }
  });

  return F32le;
})();
return F32le;
}));
