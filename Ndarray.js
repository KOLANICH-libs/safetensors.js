// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './F10le', './F2le', './F16le', './F16be', './F1', './F32le', './F12be', './F12le', './F10be', './F2be', './F32be'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./F10le'), require('./F2le'), require('./F16le'), require('./F16be'), require('./F1'), require('./F32le'), require('./F12be'), require('./F12le'), require('./F10be'), require('./F2be'), require('./F32be'));
  } else {
    root.Ndarray = factory(root.KaitaiStream, root.F10le, root.F2le, root.F16le, root.F16be, root.F1, root.F32le, root.F12be, root.F12le, root.F10be, root.F2be, root.F32be);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream, F10le, F2le, F16le, F16be, F1, F32le, F12be, F12le, F10be, F2be, F32be) {
/**
 * This is a part of an abstraction layer for multidimensional arrays and tensors, as used in, for example, `numpy`.
 * Configure it with an `ndarray_descriptor`, and parse with it a buffer.
 */

var Ndarray = (function() {
  function Ndarray(_io, _parent, _root, descriptor) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;
    this.descriptor = descriptor;

    this._read();
  }
  Ndarray.prototype._read = function() {
    this.dataInitial = new NdarrayInternal(this._io, this, this._root, -1);
  }

  var Array = Ndarray.Array = (function() {
    function Array(_io, _parent, _root, idx) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.idx = idx;

      this._read();
    }
    Array.prototype._read = function() {
      this.data = [];
      for (var i = 0; i < this._root.descriptor.shape[this.idx]; i++) {
        switch (this._root.descriptor.itemType) {
        case NdarrayDescriptor.ItemType.F32LE:
          this.data.push(new F32le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.U2LE:
          this.data.push(this._io.readU2le());
          break;
        case NdarrayDescriptor.ItemType.F12ME:
          this.data.push(new F12le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.U2BE:
          this.data.push(this._io.readU2be());
          break;
        case NdarrayDescriptor.ItemType.F12LE:
          this.data.push(new F12le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F2LE:
          this.data.push(new F2le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.S4ME:
          this.data.push(this._io.readS4le());
          break;
        case NdarrayDescriptor.ItemType.S2ME:
          this.data.push(this._io.readS2le());
          break;
        case NdarrayDescriptor.ItemType.U4ME:
          this.data.push(this._io.readU4le());
          break;
        case NdarrayDescriptor.ItemType.U8LE:
          this.data.push(this._io.readU8le());
          break;
        case NdarrayDescriptor.ItemType.F10ME:
          this.data.push(new F10le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.SC1:
          this.data.push(this._io.readS1());
          break;
        case NdarrayDescriptor.ItemType.F2ME:
          this.data.push(new F2le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F8ME:
          this.data.push(this._io.readF8le());
          break;
        case NdarrayDescriptor.ItemType.F12BE:
          this.data.push(new F12be(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F8BE:
          this.data.push(this._io.readF8be());
          break;
        case NdarrayDescriptor.ItemType.U4BE:
          this.data.push(this._io.readU4be());
          break;
        case NdarrayDescriptor.ItemType.F16LE:
          this.data.push(new F16le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F10LE:
          this.data.push(new F10le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.S4LE:
          this.data.push(this._io.readS4le());
          break;
        case NdarrayDescriptor.ItemType.S2LE:
          this.data.push(this._io.readS2le());
          break;
        case NdarrayDescriptor.ItemType.F10BE:
          this.data.push(new F10be(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F32BE:
          this.data.push(new F32be(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.S8LE:
          this.data.push(this._io.readS8le());
          break;
        case NdarrayDescriptor.ItemType.U1:
          this.data.push(this._io.readU1());
          break;
        case NdarrayDescriptor.ItemType.S8BE:
          this.data.push(this._io.readS8be());
          break;
        case NdarrayDescriptor.ItemType.S4BE:
          this.data.push(this._io.readS4be());
          break;
        case NdarrayDescriptor.ItemType.F4LE:
          this.data.push(this._io.readF4le());
          break;
        case NdarrayDescriptor.ItemType.F8LE:
          this.data.push(this._io.readF8le());
          break;
        case NdarrayDescriptor.ItemType.U4LE:
          this.data.push(this._io.readU4le());
          break;
        case NdarrayDescriptor.ItemType.U8ME:
          this.data.push(this._io.readU8le());
          break;
        case NdarrayDescriptor.ItemType.F2BE:
          this.data.push(new F2be(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F16ME:
          this.data.push(new F16le(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F4BE:
          this.data.push(this._io.readF4be());
          break;
        case NdarrayDescriptor.ItemType.U8BE:
          this.data.push(this._io.readU8be());
          break;
        case NdarrayDescriptor.ItemType.S2BE:
          this.data.push(this._io.readS2be());
          break;
        case NdarrayDescriptor.ItemType.S1:
          this.data.push(this._io.readS1());
          break;
        case NdarrayDescriptor.ItemType.S8ME:
          this.data.push(this._io.readS8le());
          break;
        case NdarrayDescriptor.ItemType.F1:
          this.data.push(new F1(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.U2ME:
          this.data.push(this._io.readU2le());
          break;
        case NdarrayDescriptor.ItemType.F16BE:
          this.data.push(new F16be(this._io, this, null));
          break;
        case NdarrayDescriptor.ItemType.F4ME:
          this.data.push(this._io.readF4le());
          break;
        case NdarrayDescriptor.ItemType.F32ME:
          this.data.push(new F32le(this._io, this, null));
          break;
        }
      }
    }

    return Array;
  })();

  var NdarrayInternal = Ndarray.NdarrayInternal = (function() {
    function NdarrayInternal(_io, _parent, _root, idx) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.idx = idx;

      this._read();
    }
    NdarrayInternal.prototype._read = function() {
      this.data = [];
      for (var i = 0; i < (this.idx >= 0 ? this._root.descriptor.shape[this.idx] : 1); i++) {
        switch (this.idx == this._root.dimsM2) {
        case false:
          this.data.push(new NdarrayInternal(this._io, this, this._root, (this.idx + 1)));
          break;
        case true:
          this.data.push(new Array(this._io, this, this._root, this.idx));
          break;
        }
      }
    }

    return NdarrayInternal;
  })();
  Object.defineProperty(Ndarray.prototype, 'dimsM2', {
    get: function() {
      if (this._m_dimsM2 !== undefined)
        return this._m_dimsM2;
      this._m_dimsM2 = (this._root.descriptor.shape.length - 2);
      return this._m_dimsM2;
    }
  });
  Object.defineProperty(Ndarray.prototype, 'data', {
    get: function() {
      if (this._m_data !== undefined)
        return this._m_data;
      this._m_data = this.dataInitial.data[0].data;
      return this._m_data;
    }
  });

  return Ndarray;
})();
return Ndarray;
}));
