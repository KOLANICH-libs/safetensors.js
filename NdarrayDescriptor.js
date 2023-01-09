// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.NdarrayDescriptor = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
/**
 * This is a part of an abstraction layer for multidimensional arrays and tensors, as used in, for example, `numpy`.
 * Using this structure one can specify the shape and item type of an array.
 */

var NdarrayDescriptor = (function() {
  NdarrayDescriptor.Endianness = Object.freeze({
    MACHINE: 0,
    LE: 1,
    BE: 2,

    0: "MACHINE",
    1: "LE",
    2: "BE",
  });

  NdarrayDescriptor.Category = Object.freeze({
    UINT: 0,
    SINT: 1,
    IEEE754: 2,
    STRING: 3,

    0: "UINT",
    1: "SINT",
    2: "IEEE754",
    3: "STRING",
  });

  NdarrayDescriptor.ItemType = Object.freeze({
    U1: 0,
    U2ME: 1,
    U4ME: 2,
    U8ME: 3,
    S1: 8,
    S2ME: 9,
    S4ME: 10,
    S8ME: 11,
    F1: 16,
    F2ME: 17,
    F4ME: 18,
    F8ME: 19,
    F16ME: 20,
    F32ME: 21,
    F10ME: 22,
    F12ME: 23,
    UC1: 25,
    USTR: 26,
    U2LE: 65,
    U4LE: 66,
    U8LE: 67,
    S2LE: 73,
    S4LE: 74,
    S8LE: 75,
    F2LE: 81,
    F4LE: 82,
    F8LE: 83,
    F16LE: 84,
    F32LE: 85,
    F10LE: 86,
    F12LE: 87,
    SC1: 89,
    SSTR: 90,
    U2BE: 129,
    U4BE: 130,
    U8BE: 131,
    S2BE: 137,
    S4BE: 138,
    S8BE: 139,
    F2BE: 145,
    F4BE: 146,
    F8BE: 147,
    F16BE: 148,
    F32BE: 149,
    F10BE: 150,
    F12BE: 151,

    0: "U1",
    1: "U2ME",
    2: "U4ME",
    3: "U8ME",
    8: "S1",
    9: "S2ME",
    10: "S4ME",
    11: "S8ME",
    16: "F1",
    17: "F2ME",
    18: "F4ME",
    19: "F8ME",
    20: "F16ME",
    21: "F32ME",
    22: "F10ME",
    23: "F12ME",
    25: "UC1",
    26: "USTR",
    65: "U2LE",
    66: "U4LE",
    67: "U8LE",
    73: "S2LE",
    74: "S4LE",
    75: "S8LE",
    81: "F2LE",
    82: "F4LE",
    83: "F8LE",
    84: "F16LE",
    85: "F32LE",
    86: "F10LE",
    87: "F12LE",
    89: "SC1",
    90: "SSTR",
    129: "U2BE",
    130: "U4BE",
    131: "U8BE",
    137: "S2BE",
    138: "S4BE",
    139: "S8BE",
    145: "F2BE",
    146: "F4BE",
    147: "F8BE",
    148: "F16BE",
    149: "F32BE",
    150: "F10BE",
    151: "F12BE",
  });

  function NdarrayDescriptor(_io, _parent, _root, itemType, shape) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this.itemType = itemType;
    this.shape = shape;

    this._read();
  }
  NdarrayDescriptor.prototype._read = function() {
  }

  /**
   * used to encode endianness, type and size of a scalar into a value of `item_type`. Then this value can be used in `switch-on.cases`.
   */

  var EncodeType = NdarrayDescriptor.EncodeType = (function() {
    function EncodeType(_io, _parent, _root, endianness, category, log2sizeOrSpecial) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.endianness = endianness;
      this.category = category;
      this.log2sizeOrSpecial = log2sizeOrSpecial;

      this._read();
    }
    EncodeType.prototype._read = function() {
    }
    Object.defineProperty(EncodeType.prototype, 'value', {
      get: function() {
        if (this._m_value !== undefined)
          return this._m_value;
        this._m_value = (((( ((this.log2sizeOrSpecial == 0) && (this.category < 3))  ? 0 : this.endianness) << 6) | (this.category << 3)) | this.log2sizeOrSpecial);
        return this._m_value;
      }
    });

    return EncodeType;
  })();

  /**
   * used to decode endianness, type and size of a scalar from a value of `item_type`. The decoded values can be used to configure native implementations.
   */

  var DecodeType = NdarrayDescriptor.DecodeType = (function() {
    function DecodeType(_io, _parent, _root, value) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.value = value;

      this._read();
    }
    DecodeType.prototype._read = function() {
    }
    Object.defineProperty(DecodeType.prototype, 'category', {
      get: function() {
        if (this._m_category !== undefined)
          return this._m_category;
        this._m_category = ((this.value >>> 3) & 7);
        return this._m_category;
      }
    });
    Object.defineProperty(DecodeType.prototype, 'log2sizeOrSpecial', {
      get: function() {
        if (this._m_log2sizeOrSpecial !== undefined)
          return this._m_log2sizeOrSpecial;
        this._m_log2sizeOrSpecial = (this.value & 7);
        return this._m_log2sizeOrSpecial;
      }
    });
    Object.defineProperty(DecodeType.prototype, 'endianness', {
      get: function() {
        if (this._m_endianness !== undefined)
          return this._m_endianness;
        this._m_endianness = (this.value >>> 6);
        return this._m_endianness;
      }
    });
    Object.defineProperty(DecodeType.prototype, 'size', {
      get: function() {
        if (this._m_size !== undefined)
          return this._m_size;
        if (this.category < 3) {
          this._m_size = (this.log2sizeOrSpecial == 6 ? 10 : (this.log2sizeOrSpecial == 7 ? 12 : (1 << this.log2sizeOrSpecial)));
        }
        return this._m_size;
      }
    });
    Object.defineProperty(DecodeType.prototype, 'special', {
      get: function() {
        if (this._m_special !== undefined)
          return this._m_special;
        if (this.category >= 3) {
          this._m_special = this.log2sizeOrSpecial;
        }
        return this._m_special;
      }
    });

    return DecodeType;
  })();

  return NdarrayDescriptor;
})();
return NdarrayDescriptor;
}));
