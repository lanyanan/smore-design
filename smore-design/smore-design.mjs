import { shallowRef as de, defineComponent as pe, useCssVars as ye, unref as ve, resolveComponent as ge, openBlock as he, createBlock as be, mergeProps as me, withCtx as _e, renderSlot as Oe } from "vue";
const je = {
  fontColor1: "#fff",
  boderColor1: "#000"
}, C = de(je), F = () => ({
  theme: C,
  changeTheme: (t) => {
    C.value = t;
  }
});
function Te(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var u = Function.bind.apply(t, o);
        return new u();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var j = {}, S = {}, we = {
  get exports() {
    return S;
  },
  set exports(e) {
    S = e;
  }
};
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(we);
var m = {};
function E(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function R(e, t, r) {
  return t && E(e.prototype, t), r && E(e, r), e;
}
function P() {
  return (P = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function L(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function $(e, t) {
  if (e == null)
    return {};
  var r, n, o = {}, u = Object.keys(e);
  for (n = 0; n < u.length; n++)
    t.indexOf(r = u[n]) >= 0 || (o[r] = e[r]);
  return o;
}
function N(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var z = Object.prototype, Y = z.toString, Pe = z.hasOwnProperty, I = /^\s*function (\w+)/;
function A(e) {
  var t, r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    var n = r.toString().match(I);
    return n ? n[1] : "";
  }
  return "";
}
var b = function(e) {
  var t, r;
  return N(e) !== !1 && typeof (t = e.constructor) == "function" && N(r = t.prototype) !== !1 && r.hasOwnProperty("isPrototypeOf") !== !1;
}, J = function(e) {
  return e;
}, l = J;
if (process.env.NODE_ENV !== "production") {
  var xe = typeof console < "u";
  l = xe ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : J;
}
var T = function(e, t) {
  return Pe.call(e, t);
}, ke = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, _ = Array.isArray || function(e) {
  return Y.call(e) === "[object Array]";
}, O = function(e) {
  return Y.call(e) === "[object Function]";
}, x = function(e) {
  return b(e) && T(e, "_vueTypes_name");
}, U = function(e) {
  return b(e) && (T(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return T(e, t);
  }));
};
function V(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function h(e, t, r) {
  var n;
  r === void 0 && (r = !1);
  var o = !0, u = "";
  n = b(e) ? e : { type: e };
  var f = x(n) ? n._vueTypes_name + " - " : "";
  if (U(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0)
      return o;
    _(n.type) ? (o = n.type.some(function(a) {
      return h(a, t, !0) === !0;
    }), u = n.type.map(function(a) {
      return A(a);
    }).join(" or ")) : o = (u = A(n)) === "Array" ? _(t) : u === "Object" ? b(t) : u === "String" || u === "Number" || u === "Boolean" || u === "Function" ? function(a) {
      if (a == null)
        return "";
      var y = a.constructor.toString().match(I);
      return y ? y[1] : "";
    }(t) === u : t instanceof n.type;
  }
  if (!o) {
    var s = f + 'value "' + t + '" should be of type "' + u + '"';
    return r === !1 ? (l(s), !1) : s;
  }
  if (T(n, "validator") && O(n.validator)) {
    var i = l, c = [];
    if (l = function(a) {
      c.push(a);
    }, o = n.validator(t), l = i, !o) {
      var p = (c.length > 1 ? "* " : "") + c.join(`
* `);
      return c.length = 0, r === !1 ? (l(p), o) : p;
    }
  }
  return o;
}
function d(e, t) {
  var r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? O(o) || h(this, o, !0) === !0 ? (this.default = _(o) ? function() {
      return [].concat(o);
    } : b(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (l(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), n = r.validator;
  return O(n) && (r.validator = V(n, r)), r;
}
function v(e, t) {
  var r = d(e, t);
  return Object.defineProperty(r, "validate", { value: function(n) {
    return O(this.validator) && l(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = V(n, this), this;
  } });
}
function q(e, t, r) {
  var n, o, u = (n = t, o = {}, Object.getOwnPropertyNames(n).forEach(function(a) {
    o[a] = Object.getOwnPropertyDescriptor(n, a);
  }), Object.defineProperties({}, o));
  if (u._vueTypes_name = e, !b(r))
    return u;
  var f, s, i = r.validator, c = $(r, ["validator"]);
  if (O(i)) {
    var p = u.validator;
    p && (p = (s = (f = p).__original) !== null && s !== void 0 ? s : f), u.validator = V(p ? function(a) {
      return p.call(this, a) && i.call(this, a);
    } : i, u);
  }
  return Object.assign(u, c);
}
function k(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var G = function() {
  return v("any", {});
}, H = function() {
  return v("function", { type: Function });
}, K = function() {
  return v("boolean", { type: Boolean });
}, Q = function() {
  return v("string", { type: String });
}, W = function() {
  return v("number", { type: Number });
}, X = function() {
  return v("array", { type: Array });
}, Z = function() {
  return v("object", { type: Object });
}, ee = function() {
  return d("integer", { type: Number, validator: function(e) {
    return ke(e);
  } });
}, te = function() {
  return d("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function ne(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return d(e.name || "<<anonymous function>>", { validator: function(r) {
    var n = e(r);
    return n || l(this._vueTypes_name + " - " + t), n;
  } });
}
function re(e) {
  if (!_(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', r = e.reduce(function(n, o) {
    if (o != null) {
      var u = o.constructor;
      n.indexOf(u) === -1 && n.push(u);
    }
    return n;
  }, []);
  return d("oneOf", { type: r.length > 0 ? r : void 0, validator: function(n) {
    var o = e.indexOf(n) !== -1;
    return o || l(t), o;
  } });
}
function oe(e) {
  if (!_(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, r = [], n = 0; n < e.length; n += 1) {
    var o = e[n];
    if (U(o)) {
      if (x(o) && o._vueTypes_name === "oneOf") {
        r = r.concat(o.type);
        continue;
      }
      if (O(o.validator) && (t = !0), o.type !== !0 && o.type) {
        r = r.concat(o.type);
        continue;
      }
    }
    r.push(o);
  }
  return r = r.filter(function(u, f) {
    return r.indexOf(u) === f;
  }), d("oneOfType", t ? { type: r, validator: function(u) {
    var f = [], s = e.some(function(i) {
      var c = h(x(i) && i._vueTypes_name === "oneOf" ? i.type || null : i, u, !0);
      return typeof c == "string" && f.push(c), c === !0;
    });
    return s || l("oneOfType - provided value does not match any of the " + f.length + ` passed-in validators:
` + k(f.join(`
`))), s;
  } } : { type: r });
}
function ue(e) {
  return d("arrayOf", { type: Array, validator: function(t) {
    var r, n = t.every(function(o) {
      return (r = h(e, o, !0)) === !0;
    });
    return n || l(`arrayOf - value validation error:
` + k(r)), n;
  } });
}
function ie(e) {
  return d("instanceOf", { type: e });
}
function ae(e) {
  return d("objectOf", { type: Object, validator: function(t) {
    var r, n = Object.keys(t).every(function(o) {
      return (r = h(e, t[o], !0)) === !0;
    });
    return n || l(`objectOf - value validation error:
` + k(r)), n;
  } });
}
function fe(e) {
  var t = Object.keys(e), r = t.filter(function(o) {
    var u;
    return !!(!((u = e[o]) === null || u === void 0) && u.required);
  }), n = d("shape", { type: Object, validator: function(o) {
    var u = this;
    if (!b(o))
      return !1;
    var f = Object.keys(o);
    if (r.length > 0 && r.some(function(i) {
      return f.indexOf(i) === -1;
    })) {
      var s = r.filter(function(i) {
        return f.indexOf(i) === -1;
      });
      return l(s.length === 1 ? 'shape - required property "' + s[0] + '" is not defined.' : 'shape - required properties "' + s.join('", "') + '" are not defined.'), !1;
    }
    return f.every(function(i) {
      if (t.indexOf(i) === -1)
        return u._vueTypes_isLoose === !0 || (l('shape - shape definition does not include a "' + i + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var c = h(e[i], o[i], !0);
      return typeof c == "string" && l('shape - "' + i + `" property validation error:
 ` + k(c)), c === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
var g = function() {
  function e() {
  }
  return e.extend = function(t) {
    var r = this;
    if (_(t))
      return t.forEach(function(a) {
        return r.extend(a);
      }), this;
    var n = t.name, o = t.validate, u = o !== void 0 && o, f = t.getter, s = f !== void 0 && f, i = $(t, ["name", "validate", "getter"]);
    if (T(this, n))
      throw new TypeError('[VueTypes error]: Type "' + n + '" already defined');
    var c, p = i.type;
    return x(p) ? (delete i.type, Object.defineProperty(this, n, s ? { get: function() {
      return q(n, p, i);
    } } : { value: function() {
      var a, y = q(n, p, i);
      return y.validator && (y.validator = (a = y.validator).bind.apply(a, [y].concat([].slice.call(arguments)))), y;
    } })) : (c = s ? { get: function() {
      var a = Object.assign({}, i);
      return u ? v(n, a) : d(n, a);
    }, enumerable: !0 } : { value: function() {
      var a, y, w = Object.assign({}, i);
      return a = u ? v(n, w) : d(n, w), w.validator && (a.validator = (y = w.validator).bind.apply(y, [a].concat([].slice.call(arguments)))), a;
    }, enumerable: !0 }, Object.defineProperty(this, n, c));
  }, R(e, null, [{ key: "any", get: function() {
    return G();
  } }, { key: "func", get: function() {
    return H().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return K().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Q().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return W().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return X().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Z().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return ee().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return te();
  } }]), e;
}();
function ce(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(r) {
    function n() {
      return r.apply(this, arguments) || this;
    }
    return L(n, r), R(n, null, [{ key: "sensibleDefaults", get: function() {
      return P({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? P({}, o !== !0 ? o : e) : {};
    } }]), n;
  }(g)).defaults = P({}, e), t;
}
g.defaults = {}, g.custom = ne, g.oneOf = re, g.instanceOf = ie, g.oneOfType = oe, g.arrayOf = ue, g.objectOf = ae, g.shape = fe, g.utils = { validate: function(e, t) {
  return h(t, e, !0) === !0;
}, toType: function(e, t, r) {
  return r === void 0 && (r = !1), r ? v(e, t) : d(e, t);
} };
var Se = function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return L(t, e), t;
}(ce());
const qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  any: G,
  array: X,
  arrayOf: ue,
  bool: K,
  createTypes: ce,
  custom: ne,
  default: Se,
  fromType: q,
  func: H,
  instanceOf: ie,
  integer: ee,
  number: W,
  object: Z,
  objectOf: ae,
  oneOf: re,
  oneOfType: oe,
  shape: fe,
  string: Q,
  symbol: te,
  toType: d,
  toValidableType: v,
  validateType: h
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ Te(qe);
var M;
function Ve() {
  if (M)
    return m;
  M = 1, Object.defineProperty(m, "__esModule", {
    value: !0
  }), m.default = void 0, m.withUndefined = r;
  var e = Be, t = (0, e.createTypes)({
    func: void 0,
    bool: void 0,
    string: void 0,
    number: void 0,
    array: void 0,
    object: void 0,
    integer: void 0
  });
  t.extend([{
    name: "looseBool",
    getter: !0,
    type: Boolean,
    default: void 0
  }, {
    name: "style",
    getter: !0,
    type: [String, Object],
    default: void 0
  }, {
    name: "VueNode",
    getter: !0,
    type: null
  }]);
  function r(o) {
    return o.default = void 0, o;
  }
  var n = t;
  return m.default = n, m;
}
var Ce = S;
Object.defineProperty(j, "__esModule", {
  value: !0
});
j.buttonProps = void 0;
j.convertLegacyProps = Ne;
var se = j.default = void 0, Ee = Ce(Ve());
function Ne(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
var le = function() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function() {
        return !1;
      }
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: Ee.default.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
j.buttonProps = le;
var Ae = le;
se = j.default = Ae;
const Me = /* @__PURE__ */ pe({
  __name: "index",
  props: {
    ...se()
  },
  setup(e) {
    const t = e;
    ye((o) => ({
      f8981730: ve(r).fontColor1
    }));
    const { theme: r } = F(), n = () => {
      switch (t.type) {
        case "primary":
          return "s-primary";
        default:
          return "";
      }
    };
    return (o, u) => {
      const f = ge("a-button");
      return he(), be(f, me(o.$props, {
        class: n()
      }), {
        default: _e(() => [
          Oe(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const De = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, B = /* @__PURE__ */ De(Me, [["__scopeId", "data-v-585d9c1e"]]);
B.install = (e) => (e.component("s-button", B), e);
const D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: B
}, Symbol.toStringTag, { value: "Module" })), Fe = (e) => (Object.keys(D).forEach((t) => {
  const r = D[t];
  r.install && e.use(r);
}), e), { changeTheme: Re } = F(), $e = (e) => {
  Re(e);
}, ze = {
  install: Fe
};
export {
  B as Button,
  ze as default,
  $e as updateTheme
};
