// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Ieee754Float = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
/**
 * An extremily widespread format of floating-point numbers used in most of hardware implementations of floating-point numbers.
 * Unfortunately not all the standardized formats are supported natively in hardware, programming languages and software, especially in old ones. For example Kaitai Struct itself doesn't support anything except `f4` and `f8` natively.
 * This is an implementation of these formats purely in Kaitai Struct. It makes no guarantees of precision, correctness, efficiency or anything else. It is just something that is better than nothing.
 * This file contains common logic converting integers representing different parts of floating point numbers into a floating point number implemented in your language. Typically it is `f8`.
 * In order to use this, parse the parts of your floating point number and create an instance with a `pos` and `type` (at the time of this format creation KS had no support for typed value instances), passing the parsed parts, their bit-sizes and exponent bias as params.
 */

var Ieee754Float = (function() {
  function Ieee754Float(_io, _parent, _root, bias, fractionBitSize, biasedExponentBitSize, sign, biasedExponent, fraction) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this.bias = bias;
    this.fractionBitSize = fractionBitSize;
    this.biasedExponentBitSize = biasedExponentBitSize;
    this.sign = sign;
    this.biasedExponent = biasedExponent;
    this.fraction = fraction;

    this._read();
  }
  Ieee754Float.prototype._read = function() {
  }
  Object.defineProperty(Ieee754Float.prototype, 'isNan', {
    get: function() {
      if (this._m_isNan !== undefined)
        return this._m_isNan;
      this._m_isNan =  ((this.biasedExponentIsSpecial) && (this.fraction != 0)) ;
      return this._m_isNan;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'exponent', {
    get: function() {
      if (this._m_exponent !== undefined)
        return this._m_exponent;
      this._m_exponent = ((this.biasedExponent - this.bias) + (this.isDenorm ? 1 : 0));
      return this._m_exponent;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'isDenorm', {
    get: function() {
      if (this._m_isDenorm !== undefined)
        return this._m_isDenorm;
      this._m_isDenorm = this.biasedExponent == 0;
      return this._m_isDenorm;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'mantissa', {
    get: function() {
      if (this._m_mantissa !== undefined)
        return this._m_mantissa;
      this._m_mantissa = ((this.isDenorm ? 0 : 1) + ((this.fraction * 1) / (1 << this.fractionBitSize)));
      return this._m_mantissa;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'value', {
    get: function() {
      if (this._m_value !== undefined)
        return this._m_value;
      this._m_value = (this.sign ? -(this.modulus) : this.modulus);
      return this._m_value;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'isInf', {
    get: function() {
      if (this._m_isInf !== undefined)
        return this._m_isInf;
      this._m_isInf =  ((this.biasedExponentIsSpecial) && (this.fraction == 0)) ;
      return this._m_isInf;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'onlyOnesBiasedExponent', {
    get: function() {
      if (this._m_onlyOnesBiasedExponent !== undefined)
        return this._m_onlyOnesBiasedExponent;
      this._m_onlyOnesBiasedExponent = ((1 << this.biasedExponentBitSize) - 1);
      return this._m_onlyOnesBiasedExponent;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'pow', {
    get: function() {
      if (this._m_pow !== undefined)
        return this._m_pow;
      this._m_pow = (this.exponent >= 0 ? (1 << this.exponent) : (1 / (1 << -(this.exponent))));
      return this._m_pow;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'biasedExponentIsSpecial', {
    get: function() {
      if (this._m_biasedExponentIsSpecial !== undefined)
        return this._m_biasedExponentIsSpecial;
      this._m_biasedExponentIsSpecial = this.biasedExponent == this.onlyOnesBiasedExponent;
      return this._m_biasedExponentIsSpecial;
    }
  });
  Object.defineProperty(Ieee754Float.prototype, 'modulus', {
    get: function() {
      if (this._m_modulus !== undefined)
        return this._m_modulus;
      this._m_modulus = (this.mantissa * this.pow);
      return this._m_modulus;
    }
  });

  /**
   * Usually (1 << (biased_exponent_bit_size - 1)) - 1, but not always
   */

  return Ieee754Float;
})();
return Ieee754Float;
}));
