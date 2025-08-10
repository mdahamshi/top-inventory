function h1(a, r) {
  for (var u = 0; u < r.length; u++) {
    const i = r[u];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const o in i)
        if (o !== 'default' && !(o in a)) {
          const f = Object.getOwnPropertyDescriptor(i, o);
          f &&
            Object.defineProperty(
              a,
              o,
              f.get ? f : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === 'childList')
        for (const h of f.addedNodes)
          h.tagName === 'LINK' && h.rel === 'modulepreload' && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = u(o);
    fetch(o.href, f);
  }
})();
function gg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default')
    ? a.default
    : a;
}
var Pc = { exports: {} },
  pi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function p1() {
  if (Ym) return pi;
  Ym = 1;
  var a = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function u(i, o, f) {
    var h = null;
    if (
      (f !== void 0 && (h = '' + f),
      o.key !== void 0 && (h = '' + o.key),
      'key' in o)
    ) {
      f = {};
      for (var m in o) m !== 'key' && (f[m] = o[m]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: a, type: i, key: h, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return ((pi.Fragment = r), (pi.jsx = u), (pi.jsxs = u), pi);
}
var Gm;
function m1() {
  return (Gm || ((Gm = 1), (Pc.exports = p1())), Pc.exports);
}
var P = m1(),
  Xc = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm;
function v1() {
  if (Pm) return Le;
  Pm = 1;
  var a = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    d = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    b = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != 'object'
      ? null
      : ((E = (b && E[b]) || E['@@iterator']),
        typeof E == 'function' ? E : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    T = {};
  function R(E, Y, $) {
    ((this.props = E),
      (this.context = Y),
      (this.refs = T),
      (this.updater = $ || M));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (E, Y) {
      if (typeof E != 'object' && typeof E != 'function' && E != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, E, Y, 'setState');
    }),
    (R.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
    }));
  function O() {}
  O.prototype = R.prototype;
  function B(E, Y, $) {
    ((this.props = E),
      (this.context = Y),
      (this.refs = T),
      (this.updater = $ || M));
  }
  var j = (B.prototype = new O());
  ((j.constructor = B), w(j, R.prototype), (j.isPureReactComponent = !0));
  var J = Array.isArray,
    z = { H: null, A: null, T: null, S: null, V: null },
    A = Object.prototype.hasOwnProperty;
  function Z(E, Y, $, W, ae, ce) {
    return (
      ($ = ce.ref),
      { $$typeof: a, type: E, key: Y, ref: $ !== void 0 ? $ : null, props: ce }
    );
  }
  function te(E, Y) {
    return Z(E.type, Y, void 0, void 0, void 0, E.props);
  }
  function re(E) {
    return typeof E == 'object' && E !== null && E.$$typeof === a;
  }
  function we(E) {
    var Y = { '=': '=0', ':': '=2' };
    return (
      '$' +
      E.replace(/[=:]/g, function ($) {
        return Y[$];
      })
    );
  }
  var De = /\/+/g;
  function Ee(E, Y) {
    return typeof E == 'object' && E !== null && E.key != null
      ? we('' + E.key)
      : Y.toString(36);
  }
  function me() {}
  function le(E) {
    switch (E.status) {
      case 'fulfilled':
        return E.value;
      case 'rejected':
        throw E.reason;
      default:
        switch (
          (typeof E.status == 'string'
            ? E.then(me, me)
            : ((E.status = 'pending'),
              E.then(
                function (Y) {
                  E.status === 'pending' &&
                    ((E.status = 'fulfilled'), (E.value = Y));
                },
                function (Y) {
                  E.status === 'pending' &&
                    ((E.status = 'rejected'), (E.reason = Y));
                }
              )),
          E.status)
        ) {
          case 'fulfilled':
            return E.value;
          case 'rejected':
            throw E.reason;
        }
    }
    throw E;
  }
  function oe(E, Y, $, W, ae) {
    var ce = typeof E;
    (ce === 'undefined' || ce === 'boolean') && (E = null);
    var ie = !1;
    if (E === null) ie = !0;
    else
      switch (ce) {
        case 'bigint':
        case 'string':
        case 'number':
          ie = !0;
          break;
        case 'object':
          switch (E.$$typeof) {
            case a:
            case r:
              ie = !0;
              break;
            case g:
              return ((ie = E._init), oe(ie(E._payload), Y, $, W, ae));
          }
      }
    if (ie)
      return (
        (ae = ae(E)),
        (ie = W === '' ? '.' + Ee(E, 0) : W),
        J(ae)
          ? (($ = ''),
            ie != null && ($ = ie.replace(De, '$&/') + '/'),
            oe(ae, Y, $, '', function (Je) {
              return Je;
            }))
          : ae != null &&
            (re(ae) &&
              (ae = te(
                ae,
                $ +
                  (ae.key == null || (E && E.key === ae.key)
                    ? ''
                    : ('' + ae.key).replace(De, '$&/') + '/') +
                  ie
              )),
            Y.push(ae)),
        1
      );
    ie = 0;
    var ze = W === '' ? '.' : W + ':';
    if (J(E))
      for (var Ae = 0; Ae < E.length; Ae++)
        ((W = E[Ae]), (ce = ze + Ee(W, Ae)), (ie += oe(W, Y, $, ce, ae)));
    else if (((Ae = x(E)), typeof Ae == 'function'))
      for (E = Ae.call(E), Ae = 0; !(W = E.next()).done; )
        ((W = W.value), (ce = ze + Ee(W, Ae++)), (ie += oe(W, Y, $, ce, ae)));
    else if (ce === 'object') {
      if (typeof E.then == 'function') return oe(le(E), Y, $, W, ae);
      throw (
        (Y = String(E)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Y === '[object Object]'
              ? 'object with keys {' + Object.keys(E).join(', ') + '}'
              : Y) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ie;
  }
  function N(E, Y, $) {
    if (E == null) return E;
    var W = [],
      ae = 0;
    return (
      oe(E, W, '', '', function (ce) {
        return Y.call($, ce, ae++);
      }),
      W
    );
  }
  function I(E) {
    if (E._status === -1) {
      var Y = E._result;
      ((Y = Y()),
        Y.then(
          function ($) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = $));
          },
          function ($) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = $));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = Y)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Q =
    typeof reportError == 'function'
      ? reportError
      : function (E) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var Y = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == 'object' &&
                E !== null &&
                typeof E.message == 'string'
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', E);
            return;
          }
          console.error(E);
        };
  function ve() {}
  return (
    (Le.Children = {
      map: N,
      forEach: function (E, Y, $) {
        N(
          E,
          function () {
            Y.apply(this, arguments);
          },
          $
        );
      },
      count: function (E) {
        var Y = 0;
        return (
          N(E, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (E) {
        return (
          N(E, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (E) {
        if (!re(E))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return E;
      },
    }),
    (Le.Component = R),
    (Le.Fragment = u),
    (Le.Profiler = o),
    (Le.PureComponent = B),
    (Le.StrictMode = i),
    (Le.Suspense = d),
    (Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (Le.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return z.H.useMemoCache(E);
      },
    }),
    (Le.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Le.cloneElement = function (E, Y, $) {
      if (E == null)
        throw Error(
          'The argument must be a React element, but you passed ' + E + '.'
        );
      var W = w({}, E.props),
        ae = E.key,
        ce = void 0;
      if (Y != null)
        for (ie in (Y.ref !== void 0 && (ce = void 0),
        Y.key !== void 0 && (ae = '' + Y.key),
        Y))
          !A.call(Y, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && Y.ref === void 0) ||
            (W[ie] = Y[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) W.children = $;
      else if (1 < ie) {
        for (var ze = Array(ie), Ae = 0; Ae < ie; Ae++)
          ze[Ae] = arguments[Ae + 2];
        W.children = ze;
      }
      return Z(E.type, ae, void 0, void 0, ce, W);
    }),
    (Le.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (Le.createElement = function (E, Y, $) {
      var W,
        ae = {},
        ce = null;
      if (Y != null)
        for (W in (Y.key !== void 0 && (ce = '' + Y.key), Y))
          A.call(Y, W) &&
            W !== 'key' &&
            W !== '__self' &&
            W !== '__source' &&
            (ae[W] = Y[W]);
      var ie = arguments.length - 2;
      if (ie === 1) ae.children = $;
      else if (1 < ie) {
        for (var ze = Array(ie), Ae = 0; Ae < ie; Ae++)
          ze[Ae] = arguments[Ae + 2];
        ae.children = ze;
      }
      if (E && E.defaultProps)
        for (W in ((ie = E.defaultProps), ie))
          ae[W] === void 0 && (ae[W] = ie[W]);
      return Z(E, ce, void 0, void 0, null, ae);
    }),
    (Le.createRef = function () {
      return { current: null };
    }),
    (Le.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (Le.isValidElement = re),
    (Le.lazy = function (E) {
      return { $$typeof: g, _payload: { _status: -1, _result: E }, _init: I };
    }),
    (Le.memo = function (E, Y) {
      return { $$typeof: p, type: E, compare: Y === void 0 ? null : Y };
    }),
    (Le.startTransition = function (E) {
      var Y = z.T,
        $ = {};
      z.T = $;
      try {
        var W = E(),
          ae = z.S;
        (ae !== null && ae($, W),
          typeof W == 'object' &&
            W !== null &&
            typeof W.then == 'function' &&
            W.then(ve, Q));
      } catch (ce) {
        Q(ce);
      } finally {
        z.T = Y;
      }
    }),
    (Le.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (Le.use = function (E) {
      return z.H.use(E);
    }),
    (Le.useActionState = function (E, Y, $) {
      return z.H.useActionState(E, Y, $);
    }),
    (Le.useCallback = function (E, Y) {
      return z.H.useCallback(E, Y);
    }),
    (Le.useContext = function (E) {
      return z.H.useContext(E);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (E, Y) {
      return z.H.useDeferredValue(E, Y);
    }),
    (Le.useEffect = function (E, Y, $) {
      var W = z.H;
      if (typeof $ == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return W.useEffect(E, Y);
    }),
    (Le.useId = function () {
      return z.H.useId();
    }),
    (Le.useImperativeHandle = function (E, Y, $) {
      return z.H.useImperativeHandle(E, Y, $);
    }),
    (Le.useInsertionEffect = function (E, Y) {
      return z.H.useInsertionEffect(E, Y);
    }),
    (Le.useLayoutEffect = function (E, Y) {
      return z.H.useLayoutEffect(E, Y);
    }),
    (Le.useMemo = function (E, Y) {
      return z.H.useMemo(E, Y);
    }),
    (Le.useOptimistic = function (E, Y) {
      return z.H.useOptimistic(E, Y);
    }),
    (Le.useReducer = function (E, Y, $) {
      return z.H.useReducer(E, Y, $);
    }),
    (Le.useRef = function (E) {
      return z.H.useRef(E);
    }),
    (Le.useState = function (E) {
      return z.H.useState(E);
    }),
    (Le.useSyncExternalStore = function (E, Y, $) {
      return z.H.useSyncExternalStore(E, Y, $);
    }),
    (Le.useTransition = function () {
      return z.H.useTransition();
    }),
    (Le.version = '19.1.1'),
    Le
  );
}
var Xm;
function Cu() {
  return (Xm || ((Xm = 1), (Xc.exports = v1())), Xc.exports);
}
var S = Cu();
const yg = gg(S),
  $m = h1({ __proto__: null, default: yg }, [S]);
var $c = { exports: {} },
  mi = {},
  Fc = { exports: {} },
  Qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fm;
function g1() {
  return (
    Fm ||
      ((Fm = 1),
      (function (a) {
        function r(N, I) {
          var Q = N.length;
          N.push(I);
          e: for (; 0 < Q; ) {
            var ve = (Q - 1) >>> 1,
              E = N[ve];
            if (0 < o(E, I)) ((N[ve] = I), (N[Q] = E), (Q = ve));
            else break e;
          }
        }
        function u(N) {
          return N.length === 0 ? null : N[0];
        }
        function i(N) {
          if (N.length === 0) return null;
          var I = N[0],
            Q = N.pop();
          if (Q !== I) {
            N[0] = Q;
            e: for (var ve = 0, E = N.length, Y = E >>> 1; ve < Y; ) {
              var $ = 2 * (ve + 1) - 1,
                W = N[$],
                ae = $ + 1,
                ce = N[ae];
              if (0 > o(W, Q))
                ae < E && 0 > o(ce, W)
                  ? ((N[ve] = ce), (N[ae] = Q), (ve = ae))
                  : ((N[ve] = W), (N[$] = Q), (ve = $));
              else if (ae < E && 0 > o(ce, Q))
                ((N[ve] = ce), (N[ae] = Q), (ve = ae));
              else break e;
            }
          }
          return I;
        }
        function o(N, I) {
          var Q = N.sortIndex - I.sortIndex;
          return Q !== 0 ? Q : N.id - I.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            m = h.now();
          a.unstable_now = function () {
            return h.now() - m;
          };
        }
        var d = [],
          p = [],
          g = 1,
          b = null,
          x = 3,
          M = !1,
          w = !1,
          T = !1,
          R = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          B = typeof clearTimeout == 'function' ? clearTimeout : null,
          j = typeof setImmediate < 'u' ? setImmediate : null;
        function J(N) {
          for (var I = u(p); I !== null; ) {
            if (I.callback === null) i(p);
            else if (I.startTime <= N)
              (i(p), (I.sortIndex = I.expirationTime), r(d, I));
            else break;
            I = u(p);
          }
        }
        function z(N) {
          if (((T = !1), J(N), !w))
            if (u(d) !== null) ((w = !0), A || ((A = !0), Ee()));
            else {
              var I = u(p);
              I !== null && oe(z, I.startTime - N);
            }
        }
        var A = !1,
          Z = -1,
          te = 5,
          re = -1;
        function we() {
          return R ? !0 : !(a.unstable_now() - re < te);
        }
        function De() {
          if (((R = !1), A)) {
            var N = a.unstable_now();
            re = N;
            var I = !0;
            try {
              e: {
                ((w = !1), T && ((T = !1), B(Z), (Z = -1)), (M = !0));
                var Q = x;
                try {
                  t: {
                    for (
                      J(N), b = u(d);
                      b !== null && !(b.expirationTime > N && we());

                    ) {
                      var ve = b.callback;
                      if (typeof ve == 'function') {
                        ((b.callback = null), (x = b.priorityLevel));
                        var E = ve(b.expirationTime <= N);
                        if (((N = a.unstable_now()), typeof E == 'function')) {
                          ((b.callback = E), J(N), (I = !0));
                          break t;
                        }
                        (b === u(d) && i(d), J(N));
                      } else i(d);
                      b = u(d);
                    }
                    if (b !== null) I = !0;
                    else {
                      var Y = u(p);
                      (Y !== null && oe(z, Y.startTime - N), (I = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (x = Q), (M = !1));
                }
                I = void 0;
              }
            } finally {
              I ? Ee() : (A = !1);
            }
          }
        }
        var Ee;
        if (typeof j == 'function')
          Ee = function () {
            j(De);
          };
        else if (typeof MessageChannel < 'u') {
          var me = new MessageChannel(),
            le = me.port2;
          ((me.port1.onmessage = De),
            (Ee = function () {
              le.postMessage(null);
            }));
        } else
          Ee = function () {
            O(De, 0);
          };
        function oe(N, I) {
          Z = O(function () {
            N(a.unstable_now());
          }, I);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (a.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (te = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_next = function (N) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = x;
            }
            var Q = x;
            x = I;
            try {
              return N();
            } finally {
              x = Q;
            }
          }),
          (a.unstable_requestPaint = function () {
            R = !0;
          }),
          (a.unstable_runWithPriority = function (N, I) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var Q = x;
            x = N;
            try {
              return I();
            } finally {
              x = Q;
            }
          }),
          (a.unstable_scheduleCallback = function (N, I, Q) {
            var ve = a.unstable_now();
            switch (
              (typeof Q == 'object' && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == 'number' && 0 < Q ? ve + Q : ve))
                : (Q = ve),
              N)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = Q + E),
              (N = {
                id: g++,
                callback: I,
                priorityLevel: N,
                startTime: Q,
                expirationTime: E,
                sortIndex: -1,
              }),
              Q > ve
                ? ((N.sortIndex = Q),
                  r(p, N),
                  u(d) === null &&
                    N === u(p) &&
                    (T ? (B(Z), (Z = -1)) : (T = !0), oe(z, Q - ve)))
                : ((N.sortIndex = E),
                  r(d, N),
                  w || M || ((w = !0), A || ((A = !0), Ee()))),
              N
            );
          }),
          (a.unstable_shouldYield = we),
          (a.unstable_wrapCallback = function (N) {
            var I = x;
            return function () {
              var Q = x;
              x = I;
              try {
                return N.apply(this, arguments);
              } finally {
                x = Q;
              }
            };
          }));
      })(Qc)),
    Qc
  );
}
var Qm;
function y1() {
  return (Qm || ((Qm = 1), (Fc.exports = g1())), Fc.exports);
}
var Zc = { exports: {} },
  Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function b1() {
  if (Zm) return Ht;
  Zm = 1;
  var a = Cu();
  function r(d) {
    var p = 'https://react.dev/errors/' + d;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += '&args[]=' + encodeURIComponent(arguments[g]);
    }
    return (
      'Minified React error #' +
      d +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(r(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function f(d, p, g) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : '' + b,
      children: d,
      containerInfo: p,
      implementation: g,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(d, p) {
    if (d === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Ht.createPortal = function (d, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(r(299));
      return f(d, p, null, g);
    }),
    (Ht.flushSync = function (d) {
      var p = h.T,
        g = i.p;
      try {
        if (((h.T = null), (i.p = 2), d)) return d();
      } finally {
        ((h.T = p), (i.p = g), i.d.f());
      }
    }),
    (Ht.preconnect = function (d, p) {
      typeof d == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == 'string'
                ? p === 'use-credentials'
                  ? p
                  : ''
                : void 0))
          : (p = null),
        i.d.C(d, p));
    }),
    (Ht.prefetchDNS = function (d) {
      typeof d == 'string' && i.d.D(d);
    }),
    (Ht.preinit = function (d, p) {
      if (typeof d == 'string' && p && typeof p.as == 'string') {
        var g = p.as,
          b = m(g, p.crossOrigin),
          x = typeof p.integrity == 'string' ? p.integrity : void 0,
          M = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        g === 'style'
          ? i.d.S(d, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: M,
            })
          : g === 'script' &&
            i.d.X(d, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: M,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (Ht.preinitModule = function (d, p) {
      if (typeof d == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var g = m(p.as, p.crossOrigin);
            i.d.M(d, {
              crossOrigin: g,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(d);
    }),
    (Ht.preload = function (d, p) {
      if (
        typeof d == 'string' &&
        typeof p == 'object' &&
        p !== null &&
        typeof p.as == 'string'
      ) {
        var g = p.as,
          b = m(g, p.crossOrigin);
        i.d.L(d, g, {
          crossOrigin: b,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (Ht.preloadModule = function (d, p) {
      if (typeof d == 'string')
        if (p) {
          var g = m(p.as, p.crossOrigin);
          i.d.m(d, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else i.d.m(d);
    }),
    (Ht.requestFormReset = function (d) {
      i.d.r(d);
    }),
    (Ht.unstable_batchedUpdates = function (d, p) {
      return d(p);
    }),
    (Ht.useFormState = function (d, p, g) {
      return h.H.useFormState(d, p, g);
    }),
    (Ht.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Ht.version = '19.1.1'),
    Ht
  );
}
var Km;
function bg() {
  if (Km) return Zc.exports;
  Km = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), (Zc.exports = b1()), Zc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im;
function S1() {
  if (Im) return mi;
  Im = 1;
  var a = y1(),
    r = Cu(),
    u = bg();
  function i(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e) throw Error(i(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((l = s.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return (m(s), e);
          if (c === l) return (m(s), t);
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) ((n = s), (l = c));
      else {
        for (var v = !1, y = s.child; y; ) {
          if (y === n) {
            ((v = !0), (n = s), (l = c));
            break;
          }
          if (y === l) {
            ((v = !0), (l = s), (n = c));
            break;
          }
          y = y.sibling;
        }
        if (!v) {
          for (y = c.child; y; ) {
            if (y === n) {
              ((v = !0), (n = c), (l = s));
              break;
            }
            if (y === l) {
              ((v = !0), (l = c), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for('react.element'),
    x = Symbol.for('react.transitional.element'),
    M = Symbol.for('react.portal'),
    w = Symbol.for('react.fragment'),
    T = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    O = Symbol.for('react.provider'),
    B = Symbol.for('react.consumer'),
    j = Symbol.for('react.context'),
    J = Symbol.for('react.forward_ref'),
    z = Symbol.for('react.suspense'),
    A = Symbol.for('react.suspense_list'),
    Z = Symbol.for('react.memo'),
    te = Symbol.for('react.lazy'),
    re = Symbol.for('react.activity'),
    we = Symbol.for('react.memo_cache_sentinel'),
    De = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (De && e[De]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var me = Symbol.for('react.client.reference');
  function le(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case w:
        return 'Fragment';
      case R:
        return 'Profiler';
      case T:
        return 'StrictMode';
      case z:
        return 'Suspense';
      case A:
        return 'SuspenseList';
      case re:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case M:
          return 'Portal';
        case j:
          return (e.displayName || 'Context') + '.Provider';
        case B:
          return (e._context.displayName || 'Context') + '.Consumer';
        case J:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Z:
          return (
            (t = e.displayName || null),
            t !== null ? t : le(e.type) || 'Memo'
          );
        case te:
          ((t = e._payload), (e = e._init));
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  var oe = Array.isArray,
    N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    ve = [],
    E = -1;
  function Y(e) {
    return { current: e };
  }
  function $(e) {
    0 > E || ((e.current = ve[E]), (ve[E] = null), E--);
  }
  function W(e, t) {
    (E++, (ve[E] = e.current), (e.current = t));
  }
  var ae = Y(null),
    ce = Y(null),
    ie = Y(null),
    ze = Y(null);
  function Ae(e, t) {
    switch ((W(ie, t), W(ce, e), W(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = vm(t)), (e = gm(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ($(ae), W(ae, e));
  }
  function Je() {
    ($(ae), $(ce), $(ie));
  }
  function at(e) {
    e.memoizedState !== null && W(ze, e);
    var t = ae.current,
      n = gm(t, e.type);
    t !== n && (W(ce, e), W(ae, n));
  }
  function vt(e) {
    (ce.current === e && ($(ae), $(ce)),
      ze.current === e && ($(ze), (si._currentValue = Q)));
  }
  var qt = Object.prototype.hasOwnProperty,
    Jt = a.unstable_scheduleCallback,
    Ot = a.unstable_cancelCallback,
    Xn = a.unstable_shouldYield,
    yl = a.unstable_requestPaint,
    Yt = a.unstable_now,
    $n = a.unstable_getCurrentPriorityLevel,
    On = a.unstable_ImmediatePriority,
    Ct = a.unstable_UserBlockingPriority,
    da = a.unstable_NormalPriority,
    Wt = a.unstable_LowPriority,
    ha = a.unstable_IdlePriority,
    Li = a.log,
    bl = a.unstable_setDisableYieldValue,
    Xt = null,
    ot = null;
  function Mn(e) {
    if (
      (typeof Li == 'function' && bl(e),
      ot && typeof ot.setStrictMode == 'function')
    )
      try {
        ot.setStrictMode(Xt, e);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : ki,
    Bu = Math.log,
    _n = Math.LN2;
  function ki(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Bu(e) / _n) | 0)) | 0);
  }
  var Za = 256,
    Ka = 4194304;
  function Fn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ia(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      c = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~c),
          l !== 0
            ? (s = Fn(l))
            : ((v &= y),
              v !== 0
                ? (s = Fn(v))
                : n || ((n = y & ~e), n !== 0 && (s = Fn(n)))))
        : ((y = l & ~c),
          y !== 0
            ? (s = Fn(y))
            : v !== 0
              ? (s = Fn(v))
              : n || ((n = l & ~e), n !== 0 && (s = Fn(n)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (n = t & -t),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? t
          : s
    );
  }
  function zn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ui(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mr() {
    var e = Za;
    return ((Za <<= 1), (Za & 4194048) === 0 && (Za = 256), e);
  }
  function ji() {
    var e = Ka;
    return ((Ka <<= 1), (Ka & 62914560) === 0 && (Ka = 4194304), e);
  }
  function Rr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ja(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Vi(e, t, n, l, s, c) {
    var v = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      C = e.expirationTimes,
      V = e.hiddenUpdates;
    for (n = v & ~n; 0 < n; ) {
      var X = 31 - Nt(n),
        K = 1 << X;
      ((y[X] = 0), (C[X] = -1));
      var H = V[X];
      if (H !== null)
        for (V[X] = null, X = 0; X < H.length; X++) {
          var q = H[X];
          q !== null && (q.lane &= -536870913);
        }
      n &= ~K;
    }
    (l !== 0 && Wa(e, l, 0),
      c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(v & ~t)));
  }
  function Wa(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Nt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090)));
  }
  function er(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Nt(n),
        s = 1 << l;
      ((s & t) | (e[l] & t) && (e[l] |= t), (n &= ~s));
    }
  }
  function Sl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function xl(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function D() {
    var e = I.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Um(e.type));
  }
  function k(e, t) {
    var n = I.p;
    try {
      return ((I.p = e), t());
    } finally {
      I.p = n;
    }
  }
  var G = Math.random().toString(36).slice(2),
    ee = '__reactFiber$' + G,
    ne = '__reactProps$' + G,
    de = '__reactContainer$' + G,
    ge = '__reactEvents$' + G,
    he = '__reactListeners$' + G,
    Se = '__reactHandles$' + G,
    Me = '__reactResources$' + G,
    pe = '__reactMarker$' + G;
  function ye(e) {
    (delete e[ee], delete e[ne], delete e[ge], delete e[he], delete e[Se]);
  }
  function ke(e) {
    var t = e[ee];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[de] || n[ee])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = xm(e); e !== null; ) {
            if ((n = e[ee])) return n;
            e = xm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ze(e) {
    if ((e = e[ee] || e[de])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ct(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ft(e) {
    var t = e[Me];
    return (
      t ||
        (t = e[Me] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ne(e) {
    e[pe] = !0;
  }
  var We = new Set(),
    Nn = {};
  function en(e, t) {
    (Gt(e, t), Gt(e + 'Capture', t));
  }
  function Gt(e, t) {
    for (Nn[e] = t, e = 0; e < t.length; e++) We.add(t[e]);
  }
  var fn = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Cr = {},
    pa = {};
  function Qn(e) {
    return qt.call(pa, e)
      ? !0
      : qt.call(Cr, e)
        ? !1
        : fn.test(e)
          ? (pa[e] = !0)
          : ((Cr[e] = !0), !1);
  }
  function Zn(e, t, n) {
    if (Qn(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function Kn(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function Ve(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  var bt, tr;
  function dn(e) {
    if (bt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((bt = (t && t[1]) || ''),
          (tr =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      bt +
      e +
      tr
    );
  }
  var ut = !1;
  function ma(e, t) {
    if (!e || ut) return '';
    ut = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (q) {
                  var H = q;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (q) {
                  H = q;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                H = q;
              }
              (K = e()) &&
                typeof K.catch == 'function' &&
                K.catch(function () {});
            }
          } catch (q) {
            if (q && H && typeof q.stack == 'string') return [q.stack, H.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        'name'
      );
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var c = l.DetermineComponentFrameRoot(),
        v = c[0],
        y = c[1];
      if (v && y) {
        var C = v.split(`
`),
          V = y.split(`
`);
        for (
          s = l = 0;
          l < C.length && !C[l].includes('DetermineComponentFrameRoot');

        )
          l++;
        for (; s < V.length && !V[s].includes('DetermineComponentFrameRoot'); )
          s++;
        if (l === C.length || s === V.length)
          for (
            l = C.length - 1, s = V.length - 1;
            1 <= l && 0 <= s && C[l] !== V[s];

          )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (C[l] !== V[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || C[l] !== V[s])) {
                  var X =
                    `
` + C[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      X.includes('<anonymous>') &&
                      (X = X.replace('<anonymous>', e.displayName)),
                    X
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      ((ut = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? dn(n) : '';
  }
  function Hi(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return dn(e.type);
      case 16:
        return dn('Lazy');
      case 13:
        return dn('Suspense');
      case 19:
        return dn('SuspenseList');
      case 0:
      case 15:
        return ma(e.type, !1);
      case 11:
        return ma(e.type.render, !1);
      case 1:
        return ma(e.type, !0);
      case 31:
        return dn('Activity');
      default:
        return '';
    }
  }
  function Bi(e) {
    try {
      var t = '';
      do ((t += Hi(e)), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function hn(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function fd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function uy(e) {
    var t = fd(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var s = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (v) {
            ((l = '' + v), c.call(this, v));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = '' + v;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function qi(e) {
    e._valueTracker || (e._valueTracker = uy(e));
  }
  function dd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = fd(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Yi(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var sy = /[\n"\\]/g;
  function pn(e) {
    return e.replace(sy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function qu(e, t, n, l, s, c, v, y) {
    ((e.name = ''),
      v != null &&
      typeof v != 'function' &&
      typeof v != 'symbol' &&
      typeof v != 'boolean'
        ? (e.type = v)
        : e.removeAttribute('type'),
      t != null
        ? v === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + hn(t))
          : e.value !== '' + hn(t) && (e.value = '' + hn(t))
        : (v !== 'submit' && v !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Yu(e, v, hn(t))
        : n != null
          ? Yu(e, v, hn(n))
          : l != null && e.removeAttribute('value'),
      s == null && c != null && (e.defaultChecked = !!c),
      s != null &&
        (e.checked = s && typeof s != 'function' && typeof s != 'symbol'),
      y != null &&
      typeof y != 'function' &&
      typeof y != 'symbol' &&
      typeof y != 'boolean'
        ? (e.name = '' + hn(y))
        : e.removeAttribute('name'));
  }
  function hd(e, t, n, l, s, c, v, y) {
    if (
      (c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== 'submit' && c !== 'reset') || t != null)) return;
      ((n = n != null ? '' + hn(n) : ''),
        (t = t != null ? '' + hn(t) : n),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? s),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = y ? e.checked : !!l),
      (e.defaultChecked = !!l),
      v != null &&
        typeof v != 'function' &&
        typeof v != 'symbol' &&
        typeof v != 'boolean' &&
        (e.name = v));
  }
  function Yu(e, t, n) {
    (t === 'number' && Yi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Tr(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + hn(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), l && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pd(e, t, n) {
    if (
      t != null &&
      ((t = '' + hn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + hn(n) : '';
  }
  function md(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(i(92));
        if (oe(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = hn(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l));
  }
  function Ar(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function vd(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || cy.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function gd(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(i(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var s in t)
        ((l = t[s]), t.hasOwnProperty(s) && n[s] !== l && vd(e, s, l));
    } else for (var c in t) t.hasOwnProperty(c) && vd(e, c, t[c]);
  }
  function Gu(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var fy = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    dy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gi(e) {
    return dy.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Pu = null;
  function Xu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Dr = null,
    _r = null;
  function yd(e) {
    var t = Ze(e);
    if (t && (e = t.stateNode)) {
      var n = e[ne] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (qu(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + pn('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var s = l[ne] || null;
                if (!s) throw Error(i(90));
                qu(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && dd(l));
          }
          break e;
        case 'textarea':
          pd(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Tr(e, !!n.multiple, t, !1));
      }
    }
  }
  var $u = !1;
  function bd(e, t, n) {
    if ($u) return e(t, n);
    $u = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        (($u = !1),
        (Dr !== null || _r !== null) &&
          (Ao(), Dr && ((t = Dr), (e = _r), (_r = Dr = null), yd(t), e)))
      )
        for (t = 0; t < e.length; t++) yd(e[t]);
    }
  }
  function wl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[ne] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(i(231, t, typeof n));
    return n;
  }
  var In = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Fu = !1;
  if (In)
    try {
      var El = {};
      (Object.defineProperty(El, 'passive', {
        get: function () {
          Fu = !0;
        },
      }),
        window.addEventListener('test', El, El),
        window.removeEventListener('test', El, El));
    } catch {
      Fu = !1;
    }
  var va = null,
    Qu = null,
    Pi = null;
  function Sd() {
    if (Pi) return Pi;
    var e,
      t = Qu,
      n = t.length,
      l,
      s = 'value' in va ? va.value : va.textContent,
      c = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var v = n - e;
    for (l = 1; l <= v && t[n - l] === s[c - l]; l++);
    return (Pi = s.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Xi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $i() {
    return !0;
  }
  function xd() {
    return !1;
  }
  function $t(e) {
    function t(n, l, s, c, v) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = v),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? $i
          : xd),
        (this.isPropagationStopped = xd),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
      }),
      t
    );
  }
  var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fi = $t(nr),
    Ol = g({}, nr, { view: 0, detail: 0 }),
    hy = $t(Ol),
    Zu,
    Ku,
    Ml,
    Qi = g({}, Ol, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ju,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Ml &&
              (Ml && e.type === 'mousemove'
                ? ((Zu = e.screenX - Ml.screenX), (Ku = e.screenY - Ml.screenY))
                : (Ku = Zu = 0),
              (Ml = e)),
            Zu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ku;
      },
    }),
    wd = $t(Qi),
    py = g({}, Qi, { dataTransfer: 0 }),
    my = $t(py),
    vy = g({}, Ol, { relatedTarget: 0 }),
    Iu = $t(vy),
    gy = g({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yy = $t(gy),
    by = g({}, nr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sy = $t(by),
    xy = g({}, nr, { data: 0 }),
    Ed = $t(xy),
    wy = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Ey = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Oy = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function My(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Oy[e])
        ? !!t[e]
        : !1;
  }
  function Ju() {
    return My;
  }
  var Ry = g({}, Ol, {
      key: function (e) {
        if (e.key) {
          var t = wy[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Xi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ey[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ju,
      charCode: function (e) {
        return e.type === 'keypress' ? Xi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Xi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Cy = $t(Ry),
    Ty = g({}, Qi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Od = $t(Ty),
    Ay = g({}, Ol, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ju,
    }),
    Dy = $t(Ay),
    _y = g({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zy = $t(_y),
    Ny = g({}, Qi, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ly = $t(Ny),
    ky = g({}, nr, { newState: 0, oldState: 0 }),
    Uy = $t(ky),
    jy = [9, 13, 27, 32],
    Wu = In && 'CompositionEvent' in window,
    Rl = null;
  In && 'documentMode' in document && (Rl = document.documentMode);
  var Vy = In && 'TextEvent' in window && !Rl,
    Md = In && (!Wu || (Rl && 8 < Rl && 11 >= Rl)),
    Rd = ' ',
    Cd = !1;
  function Td(e, t) {
    switch (e) {
      case 'keyup':
        return jy.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ad(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var zr = !1;
  function Hy(e, t) {
    switch (e) {
      case 'compositionend':
        return Ad(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Cd = !0), Rd);
      case 'textInput':
        return ((e = t.data), e === Rd && Cd ? null : e);
      default:
        return null;
    }
  }
  function By(e, t) {
    if (zr)
      return e === 'compositionend' || (!Wu && Td(e, t))
        ? ((e = Sd()), (Pi = Qu = va = null), (zr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Md && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var qy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Dd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!qy[e.type] : t === 'textarea';
  }
  function _d(e, t, n, l) {
    (Dr ? (_r ? _r.push(l) : (_r = [l])) : (Dr = l),
      (t = ko(t, 'onChange')),
      0 < t.length &&
        ((n = new Fi('onChange', 'change', null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Cl = null,
    Tl = null;
  function Yy(e) {
    fm(e, 0);
  }
  function Zi(e) {
    var t = ct(e);
    if (dd(t)) return e;
  }
  function zd(e, t) {
    if (e === 'change') return t;
  }
  var Nd = !1;
  if (In) {
    var es;
    if (In) {
      var ts = 'oninput' in document;
      if (!ts) {
        var Ld = document.createElement('div');
        (Ld.setAttribute('oninput', 'return;'),
          (ts = typeof Ld.oninput == 'function'));
      }
      es = ts;
    } else es = !1;
    Nd = es && (!document.documentMode || 9 < document.documentMode);
  }
  function kd() {
    Cl && (Cl.detachEvent('onpropertychange', Ud), (Tl = Cl = null));
  }
  function Ud(e) {
    if (e.propertyName === 'value' && Zi(Tl)) {
      var t = [];
      (_d(t, Tl, e, Xu(e)), bd(Yy, t));
    }
  }
  function Gy(e, t, n) {
    e === 'focusin'
      ? (kd(), (Cl = t), (Tl = n), Cl.attachEvent('onpropertychange', Ud))
      : e === 'focusout' && kd();
  }
  function Py(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Zi(Tl);
  }
  function Xy(e, t) {
    if (e === 'click') return Zi(t);
  }
  function $y(e, t) {
    if (e === 'input' || e === 'change') return Zi(t);
  }
  function Fy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var tn = typeof Object.is == 'function' ? Object.is : Fy;
  function Al(e, t) {
    if (tn(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!qt.call(t, s) || !tn(e[s], t[s])) return !1;
    }
    return !0;
  }
  function jd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vd(e, t) {
    var n = jd(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jd(n);
    }
  }
  function Hd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hd(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Yi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Yi(e.document);
    }
    return t;
  }
  function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Qy = In && 'documentMode' in document && 11 >= document.documentMode,
    Nr = null,
    as = null,
    Dl = null,
    rs = !1;
  function qd(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rs ||
      Nr == null ||
      Nr !== Yi(l) ||
      ((l = Nr),
      'selectionStart' in l && ns(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Dl && Al(Dl, l)) ||
        ((Dl = l),
        (l = ko(as, 'onSelect')),
        0 < l.length &&
          ((t = new Fi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Nr))));
  }
  function ar(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Lr = {
      animationend: ar('Animation', 'AnimationEnd'),
      animationiteration: ar('Animation', 'AnimationIteration'),
      animationstart: ar('Animation', 'AnimationStart'),
      transitionrun: ar('Transition', 'TransitionRun'),
      transitionstart: ar('Transition', 'TransitionStart'),
      transitioncancel: ar('Transition', 'TransitionCancel'),
      transitionend: ar('Transition', 'TransitionEnd'),
    },
    ls = {},
    Yd = {};
  In &&
    ((Yd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Lr.animationend.animation,
      delete Lr.animationiteration.animation,
      delete Lr.animationstart.animation),
    'TransitionEvent' in window || delete Lr.transitionend.transition);
  function rr(e) {
    if (ls[e]) return ls[e];
    if (!Lr[e]) return e;
    var t = Lr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Yd) return (ls[e] = t[n]);
    return e;
  }
  var Gd = rr('animationend'),
    Pd = rr('animationiteration'),
    Xd = rr('animationstart'),
    Zy = rr('transitionrun'),
    Ky = rr('transitionstart'),
    Iy = rr('transitioncancel'),
    $d = rr('transitionend'),
    Fd = new Map(),
    is =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  is.push('scrollEnd');
  function Rn(e, t) {
    (Fd.set(e, t), en(t, [e]));
  }
  var Qd = new WeakMap();
  function mn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Qd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Bi(t) }), Qd.set(e, t), t);
    }
    return { value: e, source: t, stack: Bi(t) };
  }
  var vn = [],
    kr = 0,
    os = 0;
  function Ki() {
    for (var e = kr, t = (os = kr = 0); t < e; ) {
      var n = vn[t];
      vn[t++] = null;
      var l = vn[t];
      vn[t++] = null;
      var s = vn[t];
      vn[t++] = null;
      var c = vn[t];
      if (((vn[t++] = null), l !== null && s !== null)) {
        var v = l.pending;
        (v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)),
          (l.pending = s));
      }
      c !== 0 && Zd(n, s, c);
    }
  }
  function Ii(e, t, n, l) {
    ((vn[kr++] = e),
      (vn[kr++] = t),
      (vn[kr++] = n),
      (vn[kr++] = l),
      (os |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function us(e, t, n, l) {
    return (Ii(e, t, n, l), Ji(e));
  }
  function Ur(e, t) {
    return (Ii(e, null, null, t), Ji(e));
  }
  function Zd(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var s = !1, c = e.return; c !== null; )
      ((c.childLanes |= n),
        (l = c.alternate),
        l !== null && (l.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - Nt(n)),
          (e = c.hiddenUpdates),
          (l = e[s]),
          l === null ? (e[s] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        c)
      : null;
  }
  function Ji(e) {
    if (50 < ti) throw ((ti = 0), (pc = null), Error(i(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var jr = {};
  function Jy(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function nn(e, t, n, l) {
    return new Jy(e, t, n, l);
  }
  function ss(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Jn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = nn(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Kd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wi(e, t, n, l, s, c) {
    var v = 0;
    if (((l = e), typeof e == 'function')) ss(e) && (v = 1);
    else if (typeof e == 'string')
      v = e1(e, n, ae.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case re:
          return (
            (e = nn(31, n, t, s)),
            (e.elementType = re),
            (e.lanes = c),
            e
          );
        case w:
          return lr(n.children, s, c, t);
        case T:
          ((v = 8), (s |= 24));
          break;
        case R:
          return (
            (e = nn(12, n, t, s | 2)),
            (e.elementType = R),
            (e.lanes = c),
            e
          );
        case z:
          return ((e = nn(13, n, t, s)), (e.elementType = z), (e.lanes = c), e);
        case A:
          return ((e = nn(19, n, t, s)), (e.elementType = A), (e.lanes = c), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case O:
              case j:
                v = 10;
                break e;
              case B:
                v = 9;
                break e;
              case J:
                v = 11;
                break e;
              case Z:
                v = 14;
                break e;
              case te:
                ((v = 16), (l = null));
                break e;
            }
          ((v = 29),
            (n = Error(i(130, e === null ? 'null' : typeof e, ''))),
            (l = null));
      }
    return (
      (t = nn(v, n, t, s)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = c),
      t
    );
  }
  function lr(e, t, n, l) {
    return ((e = nn(7, e, l, t)), (e.lanes = n), e);
  }
  function cs(e, t, n) {
    return ((e = nn(6, e, null, t)), (e.lanes = n), e);
  }
  function fs(e, t, n) {
    return (
      (t = nn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Vr = [],
    Hr = 0,
    eo = null,
    to = 0,
    gn = [],
    yn = 0,
    ir = null,
    Wn = 1,
    ea = '';
  function or(e, t) {
    ((Vr[Hr++] = to), (Vr[Hr++] = eo), (eo = e), (to = t));
  }
  function Id(e, t, n) {
    ((gn[yn++] = Wn), (gn[yn++] = ea), (gn[yn++] = ir), (ir = e));
    var l = Wn;
    e = ea;
    var s = 32 - Nt(l) - 1;
    ((l &= ~(1 << s)), (n += 1));
    var c = 32 - Nt(t) + s;
    if (30 < c) {
      var v = s - (s % 5);
      ((c = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (s -= v),
        (Wn = (1 << (32 - Nt(t) + s)) | (n << s) | l),
        (ea = c + e));
    } else ((Wn = (1 << c) | (n << s) | l), (ea = e));
  }
  function ds(e) {
    e.return !== null && (or(e, 1), Id(e, 1, 0));
  }
  function hs(e) {
    for (; e === eo; )
      ((eo = Vr[--Hr]), (Vr[Hr] = null), (to = Vr[--Hr]), (Vr[Hr] = null));
    for (; e === ir; )
      ((ir = gn[--yn]),
        (gn[yn] = null),
        (ea = gn[--yn]),
        (gn[yn] = null),
        (Wn = gn[--yn]),
        (gn[yn] = null));
  }
  var Pt = null,
    dt = null,
    Xe = !1,
    ur = null,
    Ln = !1,
    ps = Error(i(519));
  function sr(e) {
    var t = Error(i(418, ''));
    throw (Nl(mn(t, e)), ps);
  }
  function Jd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[ee] = e), (t[ne] = l), n)) {
      case 'dialog':
        (qe('cancel', t), qe('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        qe('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < ai.length; n++) qe(ai[n], t);
        break;
      case 'source':
        qe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (qe('error', t), qe('load', t));
        break;
      case 'details':
        qe('toggle', t);
        break;
      case 'input':
        (qe('invalid', t),
          hd(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          qi(t));
        break;
      case 'select':
        qe('invalid', t);
        break;
      case 'textarea':
        (qe('invalid', t), md(t, l.value, l.defaultValue, l.children), qi(t));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      mm(t.textContent, n)
        ? (l.popover != null && (qe('beforetoggle', t), qe('toggle', t)),
          l.onScroll != null && qe('scroll', t),
          l.onScrollEnd != null && qe('scrollend', t),
          l.onClick != null && (t.onclick = Uo),
          (t = !0))
        : (t = !1),
      t || sr(e));
  }
  function Wd(e) {
    for (Pt = e.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 13:
          Ln = !1;
          return;
        case 27:
        case 3:
          Ln = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function _l(e) {
    if (e !== Pt) return !1;
    if (!Xe) return (Wd(e), (Xe = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== 'form' && n !== 'button') || Dc(e.type, e.memoizedProps))),
        (n = !n)),
      n && dt && sr(e),
      Wd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === '/$')) {
              if (t === 0) {
                dt = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          e = e.nextSibling;
        }
        dt = null;
      }
    } else
      t === 27
        ? ((t = dt), za(e.type) ? ((e = Lc), (Lc = null), (dt = e)) : (dt = t))
        : (dt = Pt ? Tn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function zl() {
    ((dt = Pt = null), (Xe = !1));
  }
  function eh() {
    var e = ur;
    return (
      e !== null &&
        (Zt === null ? (Zt = e) : Zt.push.apply(Zt, e), (ur = null)),
      e
    );
  }
  function Nl(e) {
    ur === null ? (ur = [e]) : ur.push(e);
  }
  var ms = Y(null),
    cr = null,
    ta = null;
  function ga(e, t, n) {
    (W(ms, t._currentValue), (t._currentValue = n));
  }
  function na(e) {
    ((e._currentValue = ms.current), $(ms));
  }
  function vs(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function gs(e, t, n, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var v = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = s;
          for (var C = 0; C < t.length; C++)
            if (y.context === t[C]) {
              ((c.lanes |= n),
                (y = c.alternate),
                y !== null && (y.lanes |= n),
                vs(c.return, n, e),
                l || (v = null));
              break e;
            }
          c = y.next;
        }
      } else if (s.tag === 18) {
        if (((v = s.return), v === null)) throw Error(i(341));
        ((v.lanes |= n),
          (c = v.alternate),
          c !== null && (c.lanes |= n),
          vs(v, n, e),
          (v = null));
      } else v = s.child;
      if (v !== null) v.return = s;
      else
        for (v = s; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (((s = v.sibling), s !== null)) {
            ((s.return = v.return), (v = s));
            break;
          }
          v = v.return;
        }
      s = v;
    }
  }
  function Ll(e, t, n, l) {
    e = null;
    for (var s = t, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var v = s.alternate;
        if (v === null) throw Error(i(387));
        if (((v = v.memoizedProps), v !== null)) {
          var y = s.type;
          tn(s.pendingProps.value, v.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (s === ze.current) {
        if (((v = s.alternate), v === null)) throw Error(i(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(si) : (e = [si]));
      }
      s = s.return;
    }
    (e !== null && gs(t, e, n, l), (t.flags |= 262144));
  }
  function no(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!tn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function fr(e) {
    ((cr = e),
      (ta = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Vt(e) {
    return th(cr, e);
  }
  function ao(e, t) {
    return (cr === null && fr(e), th(e, t));
  }
  function th(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), ta === null)) {
      if (e === null) throw Error(i(308));
      ((ta = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ta = ta.next = t;
    return n;
  }
  var Wy =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    eb = a.unstable_scheduleCallback,
    tb = a.unstable_NormalPriority,
    Mt = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ys() {
    return { controller: new Wy(), data: new Map(), refCount: 0 };
  }
  function kl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        eb(tb, function () {
          e.controller.abort();
        }));
  }
  var Ul = null,
    bs = 0,
    Br = 0,
    qr = null;
  function nb(e, t) {
    if (Ul === null) {
      var n = (Ul = []);
      ((bs = 0),
        (Br = xc()),
        (qr = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (bs++, t.then(nh, nh), t);
  }
  function nh() {
    if (--bs === 0 && Ul !== null) {
      qr !== null && (qr.status = 'fulfilled');
      var e = Ul;
      ((Ul = null), (Br = 0), (qr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ab(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (l.status = 'rejected', l.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      l
    );
  }
  var ah = N.S;
  N.S = function (e, t) {
    (typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      nb(e, t),
      ah !== null && ah(e, t));
  };
  var dr = Y(null);
  function Ss() {
    var e = dr.current;
    return e !== null ? e : lt.pooledCache;
  }
  function ro(e, t) {
    t === null ? W(dr, dr.current) : W(dr, t.pool);
  }
  function rh() {
    var e = Ss();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var jl = Error(i(460)),
    lh = Error(i(474)),
    lo = Error(i(542)),
    xs = { then: function () {} };
  function ih(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function io() {}
  function oh(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(io, io), (t = n)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), sh(e), e);
      default:
        if (typeof t.status == 'string') t.then(io, io);
        else {
          if (((e = lt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var s = t;
                  ((s.status = 'fulfilled'), (s.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var s = t;
                  ((s.status = 'rejected'), (s.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), sh(e), e);
        }
        throw ((Vl = t), jl);
    }
  }
  var Vl = null;
  function uh() {
    if (Vl === null) throw Error(i(459));
    var e = Vl;
    return ((Vl = null), e);
  }
  function sh(e) {
    if (e === jl || e === lo) throw Error(i(483));
  }
  var ya = !1;
  function ws(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Es(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ba(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Sa(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ke & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (l.pending = t),
        (t = Ji(e)),
        Zd(e, null, n),
        t
      );
    }
    return (Ii(e, l, t, n), Ji(e));
  }
  function Hl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), er(e, n));
    }
  }
  function Os(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var v = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = v) : (c = c.next = v), (n = n.next));
        } while (n !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Ms = !1;
  function Bl() {
    if (Ms) {
      var e = qr;
      if (e !== null) throw e;
    }
  }
  function ql(e, t, n, l) {
    Ms = !1;
    var s = e.updateQueue;
    ya = !1;
    var c = s.firstBaseUpdate,
      v = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var C = y,
        V = C.next;
      ((C.next = null), v === null ? (c = V) : (v.next = V), (v = C));
      var X = e.alternate;
      X !== null &&
        ((X = X.updateQueue),
        (y = X.lastBaseUpdate),
        y !== v &&
          (y === null ? (X.firstBaseUpdate = V) : (y.next = V),
          (X.lastBaseUpdate = C)));
    }
    if (c !== null) {
      var K = s.baseState;
      ((v = 0), (X = V = C = null), (y = c));
      do {
        var H = y.lane & -536870913,
          q = H !== y.lane;
        if (q ? (Ge & H) === H : (l & H) === H) {
          (H !== 0 && H === Br && (Ms = !0),
            X !== null &&
              (X = X.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var _e = e,
              Re = y;
            H = t;
            var nt = n;
            switch (Re.tag) {
              case 1:
                if (((_e = Re.payload), typeof _e == 'function')) {
                  K = _e.call(nt, K, H);
                  break e;
                }
                K = _e;
                break e;
              case 3:
                _e.flags = (_e.flags & -65537) | 128;
              case 0:
                if (
                  ((_e = Re.payload),
                  (H = typeof _e == 'function' ? _e.call(nt, K, H) : _e),
                  H == null)
                )
                  break e;
                K = g({}, K, H);
                break e;
              case 2:
                ya = !0;
            }
          }
          ((H = y.callback),
            H !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = s.callbacks),
              q === null ? (s.callbacks = [H]) : q.push(H)));
        } else
          ((q = {
            lane: H,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            X === null ? ((V = X = q), (C = K)) : (X = X.next = q),
            (v |= H));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((q = y),
            (y = q.next),
            (q.next = null),
            (s.lastBaseUpdate = q),
            (s.shared.pending = null));
        }
      } while (!0);
      (X === null && (C = K),
        (s.baseState = C),
        (s.firstBaseUpdate = V),
        (s.lastBaseUpdate = X),
        c === null && (s.shared.lanes = 0),
        (Ta |= v),
        (e.lanes = v),
        (e.memoizedState = K));
    }
  }
  function ch(e, t) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(t);
  }
  function fh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) ch(n[e], t);
  }
  var Yr = Y(null),
    oo = Y(0);
  function dh(e, t) {
    ((e = sa), W(oo, e), W(Yr, t), (sa = e | t.baseLanes));
  }
  function Rs() {
    (W(oo, sa), W(Yr, Yr.current));
  }
  function Cs() {
    ((sa = oo.current), $(Yr), $(oo));
  }
  var xa = 0,
    je = null,
    et = null,
    St = null,
    uo = !1,
    Gr = !1,
    hr = !1,
    so = 0,
    Yl = 0,
    Pr = null,
    rb = 0;
  function gt() {
    throw Error(i(321));
  }
  function Ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!tn(e[n], t[n])) return !1;
    return !0;
  }
  function As(e, t, n, l, s, c) {
    return (
      (xa = c),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? Zh : Kh),
      (hr = !1),
      (c = n(l, s)),
      (hr = !1),
      Gr && (c = ph(t, n, l, s)),
      hh(e),
      c
    );
  }
  function hh(e) {
    N.H = vo;
    var t = et !== null && et.next !== null;
    if (((xa = 0), (St = et = je = null), (uo = !1), (Yl = 0), (Pr = null), t))
      throw Error(i(300));
    e === null ||
      Tt ||
      ((e = e.dependencies), e !== null && no(e) && (Tt = !0));
  }
  function ph(e, t, n, l) {
    je = e;
    var s = 0;
    do {
      if ((Gr && (Pr = null), (Yl = 0), (Gr = !1), 25 <= s))
        throw Error(i(301));
      if (((s += 1), (St = et = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((N.H = fb), (c = t(n, l)));
    } while (Gr);
    return c;
  }
  function lb() {
    var e = N.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Gl(t) : t),
      (e = e.useState()[0]),
      (et !== null ? et.memoizedState : null) !== e && (je.flags |= 1024),
      t
    );
  }
  function Ds() {
    var e = so !== 0;
    return ((so = 0), e);
  }
  function _s(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function zs(e) {
    if (uo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      uo = !1;
    }
    ((xa = 0), (St = et = je = null), (Gr = !1), (Yl = so = 0), (Pr = null));
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (St === null ? (je.memoizedState = St = e) : (St = St.next = e), St);
  }
  function xt() {
    if (et === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = St === null ? je.memoizedState : St.next;
    if (t !== null) ((St = t), (et = e));
    else {
      if (e === null)
        throw je.alternate === null ? Error(i(467)) : Error(i(310));
      ((et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        St === null ? (je.memoizedState = St = e) : (St = St.next = e));
    }
    return St;
  }
  function Ns() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gl(e) {
    var t = Yl;
    return (
      (Yl += 1),
      Pr === null && (Pr = []),
      (e = oh(Pr, e, t)),
      (t = je),
      (St === null ? t.memoizedState : St.next) === null &&
        ((t = t.alternate),
        (N.H = t === null || t.memoizedState === null ? Zh : Kh)),
      e
    );
  }
  function co(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Gl(e);
      if (e.$$typeof === j) return Vt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Ls(e) {
    var t = null,
      n = je.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = je.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Ns()), (je.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = we;
    return (t.index++, n);
  }
  function aa(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function fo(e) {
    var t = xt();
    return ks(t, et, e);
  }
  function ks(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = n;
    var s = e.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (s !== null) {
        var v = s.next;
        ((s.next = c.next), (c.next = v));
      }
      ((t.baseQueue = s = c), (l.pending = null));
    }
    if (((c = e.baseState), s === null)) e.memoizedState = c;
    else {
      t = s.next;
      var y = (v = null),
        C = null,
        V = t,
        X = !1;
      do {
        var K = V.lane & -536870913;
        if (K !== V.lane ? (Ge & K) === K : (xa & K) === K) {
          var H = V.revertLane;
          if (H === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: V.action,
                  hasEagerState: V.hasEagerState,
                  eagerState: V.eagerState,
                  next: null,
                }),
              K === Br && (X = !0));
          else if ((xa & H) === H) {
            ((V = V.next), H === Br && (X = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: V.revertLane,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null,
            }),
              C === null ? ((y = C = K), (v = c)) : (C = C.next = K),
              (je.lanes |= H),
              (Ta |= H));
          ((K = V.action),
            hr && n(c, K),
            (c = V.hasEagerState ? V.eagerState : n(c, K)));
        } else
          ((H = {
            lane: K,
            revertLane: V.revertLane,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          }),
            C === null ? ((y = C = H), (v = c)) : (C = C.next = H),
            (je.lanes |= K),
            (Ta |= K));
        V = V.next;
      } while (V !== null && V !== t);
      if (
        (C === null ? (v = c) : (C.next = y),
        !tn(c, e.memoizedState) && ((Tt = !0), X && ((n = qr), n !== null)))
      )
        throw n;
      ((e.memoizedState = c),
        (e.baseState = v),
        (e.baseQueue = C),
        (l.lastRenderedState = c));
    }
    return (s === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Us(e) {
    var t = xt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      s = n.pending,
      c = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var v = (s = s.next);
      do ((c = e(c, v.action)), (v = v.next));
      while (v !== s);
      (tn(c, t.memoizedState) || (Tt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, l];
  }
  function mh(e, t, n) {
    var l = je,
      s = xt(),
      c = Xe;
    if (c) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var v = !tn((et || s).memoizedState, n);
    (v && ((s.memoizedState = n), (Tt = !0)), (s = s.queue));
    var y = yh.bind(null, l, s, e);
    if (
      (Pl(2048, 8, y, [e]),
      s.getSnapshot !== t || v || (St !== null && St.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Xr(9, ho(), gh.bind(null, l, s, n, t), null),
        lt === null)
      )
        throw Error(i(349));
      c || (xa & 124) !== 0 || vh(l, t, n);
    }
    return n;
  }
  function vh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = Ns()), (je.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function gh(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), bh(t) && Sh(e));
  }
  function yh(e, t, n) {
    return n(function () {
      bh(t) && Sh(e);
    });
  }
  function bh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !tn(e, n);
    } catch {
      return !0;
    }
  }
  function Sh(e) {
    var t = Ur(e, 2);
    t !== null && un(t, e, 2);
  }
  function js(e) {
    var t = Ft();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), hr)) {
        Mn(!0);
        try {
          n();
        } finally {
          Mn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: e,
      }),
      t
    );
  }
  function xh(e, t, n, l) {
    return ((e.baseState = n), ks(e, et, typeof l == 'function' ? l : aa));
  }
  function ib(e, t, n, l, s) {
    if (mo(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          c.listeners.push(v);
        },
      };
      (N.T !== null ? n(!0) : (c.isTransition = !1),
        l(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), wh(t, c))
          : ((c.next = n.next), (t.pending = n.next = c)));
    }
  }
  function wh(e, t) {
    var n = t.action,
      l = t.payload,
      s = e.state;
    if (t.isTransition) {
      var c = N.T,
        v = {};
      N.T = v;
      try {
        var y = n(s, l),
          C = N.S;
        (C !== null && C(v, y), Eh(e, t, y));
      } catch (V) {
        Vs(e, t, V);
      } finally {
        N.T = c;
      }
    } else
      try {
        ((c = n(s, l)), Eh(e, t, c));
      } catch (V) {
        Vs(e, t, V);
      }
  }
  function Eh(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Oh(e, t, l);
          },
          function (l) {
            return Vs(e, t, l);
          }
        )
      : Oh(e, t, n);
  }
  function Oh(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Mh(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), wh(e, n))));
  }
  function Vs(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Mh(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Mh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Rh(e, t) {
    return t;
  }
  function Ch(e, t) {
    if (Xe) {
      var n = lt.formState;
      if (n !== null) {
        e: {
          var l = je;
          if (Xe) {
            if (dt) {
              t: {
                for (var s = dt, c = Ln; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (((s = Tn(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((c = s.data), (s = c === 'F!' || c === 'F' ? s : null));
              }
              if (s) {
                ((dt = Tn(s.nextSibling)), (l = s.data === 'F!'));
                break e;
              }
            }
            sr(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Ft()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rh,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = $h.bind(null, je, l)),
      (l.dispatch = n),
      (l = js(!1)),
      (c = Gs.bind(null, je, !1, l.queue)),
      (l = Ft()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = s),
      (n = ib.bind(null, je, s, c, n)),
      (s.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Th(e) {
    var t = xt();
    return Ah(t, et, e);
  }
  function Ah(e, t, n) {
    if (
      ((t = ks(e, t, Rh)[0]),
      (e = fo(aa)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = Gl(t);
      } catch (v) {
        throw v === jl ? lo : v;
      }
    else l = t;
    t = xt();
    var s = t.queue,
      c = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((je.flags |= 2048), Xr(9, ho(), ob.bind(null, s, n), null)),
      [l, c, e]
    );
  }
  function ob(e, t) {
    e.action = t;
  }
  function Dh(e) {
    var t = xt(),
      n = et;
    if (n !== null) return Ah(t, n, e);
    (xt(), (t = t.memoizedState), (n = xt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Xr(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = je.updateQueue),
      t === null && ((t = Ns()), (je.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function ho() {
    return { destroy: void 0, resource: void 0 };
  }
  function _h() {
    return xt().memoizedState;
  }
  function po(e, t, n, l) {
    var s = Ft();
    ((l = l === void 0 ? null : l),
      (je.flags |= e),
      (s.memoizedState = Xr(1 | t, ho(), n, l)));
  }
  function Pl(e, t, n, l) {
    var s = xt();
    l = l === void 0 ? null : l;
    var c = s.memoizedState.inst;
    et !== null && l !== null && Ts(l, et.memoizedState.deps)
      ? (s.memoizedState = Xr(t, c, n, l))
      : ((je.flags |= e), (s.memoizedState = Xr(1 | t, c, n, l)));
  }
  function zh(e, t) {
    po(8390656, 8, e, t);
  }
  function Nh(e, t) {
    Pl(2048, 8, e, t);
  }
  function Lh(e, t) {
    return Pl(4, 2, e, t);
  }
  function kh(e, t) {
    return Pl(4, 4, e, t);
  }
  function Uh(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function jh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Pl(4, 4, Uh.bind(null, t, e), n));
  }
  function Hs() {}
  function Vh(e, t) {
    var n = xt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Ts(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Hh(e, t) {
    var n = xt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Ts(t, l[1])) return l[0];
    if (((l = e()), hr)) {
      Mn(!0);
      try {
        e();
      } finally {
        Mn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function Bs(e, t, n) {
    return n === void 0 || (xa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Yp()), (je.lanes |= e), (Ta |= e), n);
  }
  function Bh(e, t, n, l) {
    return tn(n, t)
      ? n
      : Yr.current !== null
        ? ((e = Bs(e, n, l)), tn(e, t) || (Tt = !0), e)
        : (xa & 42) === 0
          ? ((Tt = !0), (e.memoizedState = n))
          : ((e = Yp()), (je.lanes |= e), (Ta |= e), t);
  }
  function qh(e, t, n, l, s) {
    var c = I.p;
    I.p = c !== 0 && 8 > c ? c : 8;
    var v = N.T,
      y = {};
    ((N.T = y), Gs(e, !1, t, n));
    try {
      var C = s(),
        V = N.S;
      if (
        (V !== null && V(y, C),
        C !== null && typeof C == 'object' && typeof C.then == 'function')
      ) {
        var X = ab(C, l);
        Xl(e, t, X, on(e));
      } else Xl(e, t, l, on(e));
    } catch (K) {
      Xl(e, t, { then: function () {}, status: 'rejected', reason: K }, on());
    } finally {
      ((I.p = c), (N.T = v));
    }
  }
  function ub() {}
  function qs(e, t, n, l) {
    if (e.tag !== 5) throw Error(i(476));
    var s = Yh(e).queue;
    qh(
      e,
      s,
      t,
      Q,
      n === null
        ? ub
        : function () {
            return (Gh(e), n(l));
          }
    );
  }
  function Yh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: Q,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: aa,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Gh(e) {
    var t = Yh(e).next.queue;
    Xl(e, t, {}, on());
  }
  function Ys() {
    return Vt(si);
  }
  function Ph() {
    return xt().memoizedState;
  }
  function Xh() {
    return xt().memoizedState;
  }
  function sb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = on();
          e = ba(n);
          var l = Sa(t, e, n);
          (l !== null && (un(l, t, n), Hl(l, t, n)),
            (t = { cache: ys() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function cb(e, t, n) {
    var l = on();
    ((n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mo(e)
        ? Fh(t, n)
        : ((n = us(e, t, n, l)), n !== null && (un(n, e, l), Qh(n, t, l))));
  }
  function $h(e, t, n) {
    var l = on();
    Xl(e, t, n, l);
  }
  function Xl(e, t, n, l) {
    var s = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mo(e)) Fh(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var v = t.lastRenderedState,
            y = c(v, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), tn(y, v)))
            return (Ii(e, t, s, 0), lt === null && Ki(), !1);
        } catch {
        } finally {
        }
      if (((n = us(e, t, s, l)), n !== null))
        return (un(n, e, l), Qh(n, t, l), !0);
    }
    return !1;
  }
  function Gs(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: xc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mo(e))
    ) {
      if (t) throw Error(i(479));
    } else ((t = us(e, n, l, 2)), t !== null && un(t, e, 2));
  }
  function mo(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function Fh(e, t) {
    Gr = uo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Qh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), er(e, n));
    }
  }
  var vo = {
      readContext: Vt,
      use: co,
      useCallback: gt,
      useContext: gt,
      useEffect: gt,
      useImperativeHandle: gt,
      useLayoutEffect: gt,
      useInsertionEffect: gt,
      useMemo: gt,
      useReducer: gt,
      useRef: gt,
      useState: gt,
      useDebugValue: gt,
      useDeferredValue: gt,
      useTransition: gt,
      useSyncExternalStore: gt,
      useId: gt,
      useHostTransitionStatus: gt,
      useFormState: gt,
      useActionState: gt,
      useOptimistic: gt,
      useMemoCache: gt,
      useCacheRefresh: gt,
    },
    Zh = {
      readContext: Vt,
      use: co,
      useCallback: function (e, t) {
        return ((Ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Vt,
      useEffect: zh,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          po(4194308, 4, Uh.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return po(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        po(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ft();
        t = t === void 0 ? null : t;
        var l = e();
        if (hr) {
          Mn(!0);
          try {
            e();
          } finally {
            Mn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = Ft();
        if (n !== void 0) {
          var s = n(t);
          if (hr) {
            Mn(!0);
            try {
              n(t);
            } finally {
              Mn(!1);
            }
          }
        } else s = t;
        return (
          (l.memoizedState = l.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (l.queue = e),
          (e = e.dispatch = cb.bind(null, je, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = js(e);
        var t = e.queue,
          n = $h.bind(null, je, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Hs,
      useDeferredValue: function (e, t) {
        var n = Ft();
        return Bs(n, e, t);
      },
      useTransition: function () {
        var e = js(!1);
        return (
          (e = qh.bind(null, je, e.queue, !0, !1)),
          (Ft().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = je,
          s = Ft();
        if (Xe) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), lt === null)) throw Error(i(349));
          (Ge & 124) !== 0 || vh(l, t, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (s.queue = c),
          zh(yh.bind(null, l, c, e), [e]),
          (l.flags |= 2048),
          Xr(9, ho(), gh.bind(null, l, c, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ft(),
          t = lt.identifierPrefix;
        if (Xe) {
          var n = ea,
            l = Wn;
          ((n = (l & ~(1 << (32 - Nt(l) - 1))).toString(32) + n),
            (t = '«' + t + 'R' + n),
            (n = so++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '»'));
        } else ((n = rb++), (t = '«' + t + 'r' + n.toString(32) + '»'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ys,
      useFormState: Ch,
      useActionState: Ch,
      useOptimistic: function (e) {
        var t = Ft();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Gs.bind(null, je, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Ls,
      useCacheRefresh: function () {
        return (Ft().memoizedState = sb.bind(null, je));
      },
    },
    Kh = {
      readContext: Vt,
      use: co,
      useCallback: Vh,
      useContext: Vt,
      useEffect: Nh,
      useImperativeHandle: jh,
      useInsertionEffect: Lh,
      useLayoutEffect: kh,
      useMemo: Hh,
      useReducer: fo,
      useRef: _h,
      useState: function () {
        return fo(aa);
      },
      useDebugValue: Hs,
      useDeferredValue: function (e, t) {
        var n = xt();
        return Bh(n, et.memoizedState, e, t);
      },
      useTransition: function () {
        var e = fo(aa)[0],
          t = xt().memoizedState;
        return [typeof e == 'boolean' ? e : Gl(e), t];
      },
      useSyncExternalStore: mh,
      useId: Ph,
      useHostTransitionStatus: Ys,
      useFormState: Th,
      useActionState: Th,
      useOptimistic: function (e, t) {
        var n = xt();
        return xh(n, et, e, t);
      },
      useMemoCache: Ls,
      useCacheRefresh: Xh,
    },
    fb = {
      readContext: Vt,
      use: co,
      useCallback: Vh,
      useContext: Vt,
      useEffect: Nh,
      useImperativeHandle: jh,
      useInsertionEffect: Lh,
      useLayoutEffect: kh,
      useMemo: Hh,
      useReducer: Us,
      useRef: _h,
      useState: function () {
        return Us(aa);
      },
      useDebugValue: Hs,
      useDeferredValue: function (e, t) {
        var n = xt();
        return et === null ? Bs(n, e, t) : Bh(n, et.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Us(aa)[0],
          t = xt().memoizedState;
        return [typeof e == 'boolean' ? e : Gl(e), t];
      },
      useSyncExternalStore: mh,
      useId: Ph,
      useHostTransitionStatus: Ys,
      useFormState: Dh,
      useActionState: Dh,
      useOptimistic: function (e, t) {
        var n = xt();
        return et !== null
          ? xh(n, et, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Ls,
      useCacheRefresh: Xh,
    },
    $r = null,
    $l = 0;
  function go(e) {
    var t = $l;
    return (($l += 1), $r === null && ($r = []), oh($r, e, t));
  }
  function Fl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function yo(e, t) {
    throw t.$$typeof === b
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ));
  }
  function Ih(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Jh(e) {
    function t(L, _) {
      if (e) {
        var U = L.deletions;
        U === null ? ((L.deletions = [_]), (L.flags |= 16)) : U.push(_);
      }
    }
    function n(L, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(L, _), (_ = _.sibling));
      return null;
    }
    function l(L) {
      for (var _ = new Map(); L !== null; )
        (L.key !== null ? _.set(L.key, L) : _.set(L.index, L), (L = L.sibling));
      return _;
    }
    function s(L, _) {
      return ((L = Jn(L, _)), (L.index = 0), (L.sibling = null), L);
    }
    function c(L, _, U) {
      return (
        (L.index = U),
        e
          ? ((U = L.alternate),
            U !== null
              ? ((U = U.index), U < _ ? ((L.flags |= 67108866), _) : U)
              : ((L.flags |= 67108866), _))
          : ((L.flags |= 1048576), _)
      );
    }
    function v(L) {
      return (e && L.alternate === null && (L.flags |= 67108866), L);
    }
    function y(L, _, U, F) {
      return _ === null || _.tag !== 6
        ? ((_ = cs(U, L.mode, F)), (_.return = L), _)
        : ((_ = s(_, U)), (_.return = L), _);
    }
    function C(L, _, U, F) {
      var fe = U.type;
      return fe === w
        ? X(L, _, U.props.children, F, U.key)
        : _ !== null &&
            (_.elementType === fe ||
              (typeof fe == 'object' &&
                fe !== null &&
                fe.$$typeof === te &&
                Ih(fe) === _.type))
          ? ((_ = s(_, U.props)), Fl(_, U), (_.return = L), _)
          : ((_ = Wi(U.type, U.key, U.props, null, L.mode, F)),
            Fl(_, U),
            (_.return = L),
            _);
    }
    function V(L, _, U, F) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== U.containerInfo ||
        _.stateNode.implementation !== U.implementation
        ? ((_ = fs(U, L.mode, F)), (_.return = L), _)
        : ((_ = s(_, U.children || [])), (_.return = L), _);
    }
    function X(L, _, U, F, fe) {
      return _ === null || _.tag !== 7
        ? ((_ = lr(U, L.mode, F, fe)), (_.return = L), _)
        : ((_ = s(_, U)), (_.return = L), _);
    }
    function K(L, _, U) {
      if (
        (typeof _ == 'string' && _ !== '') ||
        typeof _ == 'number' ||
        typeof _ == 'bigint'
      )
        return ((_ = cs('' + _, L.mode, U)), (_.return = L), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case x:
            return (
              (U = Wi(_.type, _.key, _.props, null, L.mode, U)),
              Fl(U, _),
              (U.return = L),
              U
            );
          case M:
            return ((_ = fs(_, L.mode, U)), (_.return = L), _);
          case te:
            var F = _._init;
            return ((_ = F(_._payload)), K(L, _, U));
        }
        if (oe(_) || Ee(_))
          return ((_ = lr(_, L.mode, U, null)), (_.return = L), _);
        if (typeof _.then == 'function') return K(L, go(_), U);
        if (_.$$typeof === j) return K(L, ao(L, _), U);
        yo(L, _);
      }
      return null;
    }
    function H(L, _, U, F) {
      var fe = _ !== null ? _.key : null;
      if (
        (typeof U == 'string' && U !== '') ||
        typeof U == 'number' ||
        typeof U == 'bigint'
      )
        return fe !== null ? null : y(L, _, '' + U, F);
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case x:
            return U.key === fe ? C(L, _, U, F) : null;
          case M:
            return U.key === fe ? V(L, _, U, F) : null;
          case te:
            return ((fe = U._init), (U = fe(U._payload)), H(L, _, U, F));
        }
        if (oe(U) || Ee(U)) return fe !== null ? null : X(L, _, U, F, null);
        if (typeof U.then == 'function') return H(L, _, go(U), F);
        if (U.$$typeof === j) return H(L, _, ao(L, U), F);
        yo(L, U);
      }
      return null;
    }
    function q(L, _, U, F, fe) {
      if (
        (typeof F == 'string' && F !== '') ||
        typeof F == 'number' ||
        typeof F == 'bigint'
      )
        return ((L = L.get(U) || null), y(_, L, '' + F, fe));
      if (typeof F == 'object' && F !== null) {
        switch (F.$$typeof) {
          case x:
            return (
              (L = L.get(F.key === null ? U : F.key) || null),
              C(_, L, F, fe)
            );
          case M:
            return (
              (L = L.get(F.key === null ? U : F.key) || null),
              V(_, L, F, fe)
            );
          case te:
            var He = F._init;
            return ((F = He(F._payload)), q(L, _, U, F, fe));
        }
        if (oe(F) || Ee(F))
          return ((L = L.get(U) || null), X(_, L, F, fe, null));
        if (typeof F.then == 'function') return q(L, _, U, go(F), fe);
        if (F.$$typeof === j) return q(L, _, U, ao(_, F), fe);
        yo(_, F);
      }
      return null;
    }
    function _e(L, _, U, F) {
      for (
        var fe = null, He = null, be = _, Ce = (_ = 0), Dt = null;
        be !== null && Ce < U.length;
        Ce++
      ) {
        be.index > Ce ? ((Dt = be), (be = null)) : (Dt = be.sibling);
        var Pe = H(L, be, U[Ce], F);
        if (Pe === null) {
          be === null && (be = Dt);
          break;
        }
        (e && be && Pe.alternate === null && t(L, be),
          (_ = c(Pe, _, Ce)),
          He === null ? (fe = Pe) : (He.sibling = Pe),
          (He = Pe),
          (be = Dt));
      }
      if (Ce === U.length) return (n(L, be), Xe && or(L, Ce), fe);
      if (be === null) {
        for (; Ce < U.length; Ce++)
          ((be = K(L, U[Ce], F)),
            be !== null &&
              ((_ = c(be, _, Ce)),
              He === null ? (fe = be) : (He.sibling = be),
              (He = be)));
        return (Xe && or(L, Ce), fe);
      }
      for (be = l(be); Ce < U.length; Ce++)
        ((Dt = q(be, L, Ce, U[Ce], F)),
          Dt !== null &&
            (e &&
              Dt.alternate !== null &&
              be.delete(Dt.key === null ? Ce : Dt.key),
            (_ = c(Dt, _, Ce)),
            He === null ? (fe = Dt) : (He.sibling = Dt),
            (He = Dt)));
      return (
        e &&
          be.forEach(function (ja) {
            return t(L, ja);
          }),
        Xe && or(L, Ce),
        fe
      );
    }
    function Re(L, _, U, F) {
      if (U == null) throw Error(i(151));
      for (
        var fe = null,
          He = null,
          be = _,
          Ce = (_ = 0),
          Dt = null,
          Pe = U.next();
        be !== null && !Pe.done;
        Ce++, Pe = U.next()
      ) {
        be.index > Ce ? ((Dt = be), (be = null)) : (Dt = be.sibling);
        var ja = H(L, be, Pe.value, F);
        if (ja === null) {
          be === null && (be = Dt);
          break;
        }
        (e && be && ja.alternate === null && t(L, be),
          (_ = c(ja, _, Ce)),
          He === null ? (fe = ja) : (He.sibling = ja),
          (He = ja),
          (be = Dt));
      }
      if (Pe.done) return (n(L, be), Xe && or(L, Ce), fe);
      if (be === null) {
        for (; !Pe.done; Ce++, Pe = U.next())
          ((Pe = K(L, Pe.value, F)),
            Pe !== null &&
              ((_ = c(Pe, _, Ce)),
              He === null ? (fe = Pe) : (He.sibling = Pe),
              (He = Pe)));
        return (Xe && or(L, Ce), fe);
      }
      for (be = l(be); !Pe.done; Ce++, Pe = U.next())
        ((Pe = q(be, L, Ce, Pe.value, F)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              be.delete(Pe.key === null ? Ce : Pe.key),
            (_ = c(Pe, _, Ce)),
            He === null ? (fe = Pe) : (He.sibling = Pe),
            (He = Pe)));
      return (
        e &&
          be.forEach(function (d1) {
            return t(L, d1);
          }),
        Xe && or(L, Ce),
        fe
      );
    }
    function nt(L, _, U, F) {
      if (
        (typeof U == 'object' &&
          U !== null &&
          U.type === w &&
          U.key === null &&
          (U = U.props.children),
        typeof U == 'object' && U !== null)
      ) {
        switch (U.$$typeof) {
          case x:
            e: {
              for (var fe = U.key; _ !== null; ) {
                if (_.key === fe) {
                  if (((fe = U.type), fe === w)) {
                    if (_.tag === 7) {
                      (n(L, _.sibling),
                        (F = s(_, U.props.children)),
                        (F.return = L),
                        (L = F));
                      break e;
                    }
                  } else if (
                    _.elementType === fe ||
                    (typeof fe == 'object' &&
                      fe !== null &&
                      fe.$$typeof === te &&
                      Ih(fe) === _.type)
                  ) {
                    (n(L, _.sibling),
                      (F = s(_, U.props)),
                      Fl(F, U),
                      (F.return = L),
                      (L = F));
                    break e;
                  }
                  n(L, _);
                  break;
                } else t(L, _);
                _ = _.sibling;
              }
              U.type === w
                ? ((F = lr(U.props.children, L.mode, F, U.key)),
                  (F.return = L),
                  (L = F))
                : ((F = Wi(U.type, U.key, U.props, null, L.mode, F)),
                  Fl(F, U),
                  (F.return = L),
                  (L = F));
            }
            return v(L);
          case M:
            e: {
              for (fe = U.key; _ !== null; ) {
                if (_.key === fe)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === U.containerInfo &&
                    _.stateNode.implementation === U.implementation
                  ) {
                    (n(L, _.sibling),
                      (F = s(_, U.children || [])),
                      (F.return = L),
                      (L = F));
                    break e;
                  } else {
                    n(L, _);
                    break;
                  }
                else t(L, _);
                _ = _.sibling;
              }
              ((F = fs(U, L.mode, F)), (F.return = L), (L = F));
            }
            return v(L);
          case te:
            return ((fe = U._init), (U = fe(U._payload)), nt(L, _, U, F));
        }
        if (oe(U)) return _e(L, _, U, F);
        if (Ee(U)) {
          if (((fe = Ee(U)), typeof fe != 'function')) throw Error(i(150));
          return ((U = fe.call(U)), Re(L, _, U, F));
        }
        if (typeof U.then == 'function') return nt(L, _, go(U), F);
        if (U.$$typeof === j) return nt(L, _, ao(L, U), F);
        yo(L, U);
      }
      return (typeof U == 'string' && U !== '') ||
        typeof U == 'number' ||
        typeof U == 'bigint'
        ? ((U = '' + U),
          _ !== null && _.tag === 6
            ? (n(L, _.sibling), (F = s(_, U)), (F.return = L), (L = F))
            : (n(L, _), (F = cs(U, L.mode, F)), (F.return = L), (L = F)),
          v(L))
        : n(L, _);
    }
    return function (L, _, U, F) {
      try {
        $l = 0;
        var fe = nt(L, _, U, F);
        return (($r = null), fe);
      } catch (be) {
        if (be === jl || be === lo) throw be;
        var He = nn(29, be, null, L.mode);
        return ((He.lanes = F), (He.return = L), He);
      } finally {
      }
    };
  }
  var Fr = Jh(!0),
    Wh = Jh(!1),
    bn = Y(null),
    kn = null;
  function wa(e) {
    var t = e.alternate;
    (W(Rt, Rt.current & 1),
      W(bn, e),
      kn === null &&
        (t === null || Yr.current !== null || t.memoizedState !== null) &&
        (kn = e));
  }
  function ep(e) {
    if (e.tag === 22) {
      if ((W(Rt, Rt.current), W(bn, e), kn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (kn = e);
      }
    } else Ea();
  }
  function Ea() {
    (W(Rt, Rt.current), W(bn, bn.current));
  }
  function ra(e) {
    ($(bn), kn === e && (kn = null), $(Rt));
  }
  var Rt = Y(0);
  function bo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || Nc(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Ps(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : g({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Xs = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = on(),
        s = ba(l);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = Sa(e, s, l)),
        t !== null && (un(t, e, l), Hl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = on(),
        s = ba(l);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Sa(e, s, l)),
        t !== null && (un(t, e, l), Hl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = on(),
        l = ba(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Sa(e, l, n)),
        t !== null && (un(t, e, n), Hl(t, e, n)));
    },
  };
  function tp(e, t, n, l, s, c, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, c, v)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Al(n, l) || !Al(s, c)
          : !0
    );
  }
  function np(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Xs.enqueueReplaceState(t, t.state, null));
  }
  function pr(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = g({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  var So =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function ap(e) {
    So(e);
  }
  function rp(e) {
    console.error(e);
  }
  function lp(e) {
    So(e);
  }
  function xo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ip(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function $s(e, t, n) {
    return (
      (n = ba(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        xo(e, t);
      }),
      n
    );
  }
  function op(e) {
    return ((e = ba(e)), (e.tag = 3), e);
  }
  function up(e, t, n, l) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == 'function') {
      var c = l.value;
      ((e.payload = function () {
        return s(c);
      }),
        (e.callback = function () {
          ip(t, n, l);
        }));
    }
    var v = n.stateNode;
    v !== null &&
      typeof v.componentDidCatch == 'function' &&
      (e.callback = function () {
        (ip(t, n, l),
          typeof s != 'function' &&
            (Aa === null ? (Aa = new Set([this])) : Aa.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: y !== null ? y : '',
        });
      });
  }
  function db(e, t, n, l, s) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ll(t, n, s, !0),
        (n = bn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              kn === null ? vc() : n.alternate === null && ht === 0 && (ht = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              l === xs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  yc(e, l, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === xs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  yc(e, l, s)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return (yc(e, l, s), vc(), !1);
    }
    if (Xe)
      return (
        (t = bn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            l !== ps && ((e = Error(i(422), { cause: l })), Nl(mn(e, n))))
          : (l !== ps && ((t = Error(i(423), { cause: l })), Nl(mn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (l = mn(l, n)),
            (s = $s(e.stateNode, l, s)),
            Os(e, s),
            ht !== 4 && (ht = 2)),
        !1
      );
    var c = Error(i(520), { cause: l });
    if (
      ((c = mn(c, n)),
      ei === null ? (ei = [c]) : ei.push(c),
      ht !== 4 && (ht = 2),
      t === null)
    )
      return !0;
    ((l = mn(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = s & -s),
            (n.lanes |= e),
            (e = $s(n.stateNode, l, e)),
            Os(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (c !== null &&
                  typeof c.componentDidCatch == 'function' &&
                  (Aa === null || !Aa.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = op(s)),
              up(s, e, n, l),
              Os(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var sp = Error(i(461)),
    Tt = !1;
  function Lt(e, t, n, l) {
    t.child = e === null ? Wh(t, null, n, l) : Fr(t, e.child, n, l);
  }
  function cp(e, t, n, l, s) {
    n = n.render;
    var c = t.ref;
    if ('ref' in l) {
      var v = {};
      for (var y in l) y !== 'ref' && (v[y] = l[y]);
    } else v = l;
    return (
      fr(t),
      (l = As(e, t, n, v, c, s)),
      (y = Ds()),
      e !== null && !Tt
        ? (_s(e, t, s), la(e, t, s))
        : (Xe && y && ds(t), (t.flags |= 1), Lt(e, t, l, s), t.child)
    );
  }
  function fp(e, t, n, l, s) {
    if (e === null) {
      var c = n.type;
      return typeof c == 'function' &&
        !ss(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), dp(e, t, c, l, s))
        : ((e = Wi(n.type, null, l, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !ec(e, s))) {
      var v = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Al), n(v, l) && e.ref === t.ref)
      )
        return la(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = Jn(c, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function dp(e, t, n, l, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Al(c, l) && e.ref === t.ref)
        if (((Tt = !1), (t.pendingProps = l = c), ec(e, s)))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else return ((t.lanes = e.lanes), la(e, t, s));
    }
    return Fs(e, t, n, l, s);
  }
  function hp(e, t, n) {
    var l = t.pendingProps,
      s = l.children,
      c = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((l = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (s = t.child = e.child, c = 0; s !== null; )
            ((c = c | s.lanes | s.childLanes), (s = s.sibling));
          t.childLanes = c & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return pp(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ro(t, c !== null ? c.cachePool : null),
          c !== null ? dh(t, c) : Rs(),
          ep(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          pp(e, t, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (ro(t, c.cachePool), dh(t, c), Ea(), (t.memoizedState = null))
        : (e !== null && ro(t, null), Rs(), Ea());
    return (Lt(e, t, s, n), t.child);
  }
  function pp(e, t, n, l) {
    var s = Ss();
    return (
      (s = s === null ? null : { parent: Mt._currentValue, pool: s }),
      (t.memoizedState = { baseLanes: n, cachePool: s }),
      e !== null && ro(t, null),
      Rs(),
      ep(t),
      e !== null && Ll(e, t, l, !0),
      null
    );
  }
  function wo(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Fs(e, t, n, l, s) {
    return (
      fr(t),
      (n = As(e, t, n, l, void 0, s)),
      (l = Ds()),
      e !== null && !Tt
        ? (_s(e, t, s), la(e, t, s))
        : (Xe && l && ds(t), (t.flags |= 1), Lt(e, t, n, s), t.child)
    );
  }
  function mp(e, t, n, l, s, c) {
    return (
      fr(t),
      (t.updateQueue = null),
      (n = ph(t, l, n, s)),
      hh(e),
      (l = Ds()),
      e !== null && !Tt
        ? (_s(e, t, c), la(e, t, c))
        : (Xe && l && ds(t), (t.flags |= 1), Lt(e, t, n, c), t.child)
    );
  }
  function vp(e, t, n, l, s) {
    if ((fr(t), t.stateNode === null)) {
      var c = jr,
        v = n.contextType;
      (typeof v == 'object' && v !== null && (c = Vt(v)),
        (c = new n(l, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Xs),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = l),
        (c.state = t.memoizedState),
        (c.refs = {}),
        ws(t),
        (v = n.contextType),
        (c.context = typeof v == 'object' && v !== null ? Vt(v) : jr),
        (c.state = t.memoizedState),
        (v = n.getDerivedStateFromProps),
        typeof v == 'function' && (Ps(t, n, v, l), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function' ||
          (typeof c.UNSAFE_componentWillMount != 'function' &&
            typeof c.componentWillMount != 'function') ||
          ((v = c.state),
          typeof c.componentWillMount == 'function' && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == 'function' &&
            c.UNSAFE_componentWillMount(),
          v !== c.state && Xs.enqueueReplaceState(c, c.state, null),
          ql(t, l, c, s),
          Bl(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps,
        C = pr(n, y);
      c.props = C;
      var V = c.context,
        X = n.contextType;
      ((v = jr), typeof X == 'object' && X !== null && (v = Vt(X)));
      var K = n.getDerivedStateFromProps;
      ((X =
        typeof K == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function'),
        (y = t.pendingProps !== y),
        X ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((y || V !== v) && np(t, c, l, v)),
        (ya = !1));
      var H = t.memoizedState;
      ((c.state = H),
        ql(t, l, c, s),
        Bl(),
        (V = t.memoizedState),
        y || H !== V || ya
          ? (typeof K == 'function' && (Ps(t, n, K, l), (V = t.memoizedState)),
            (C = ya || tp(t, n, C, l, H, V, v))
              ? (X ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = V)),
            (c.props = l),
            (c.state = V),
            (c.context = v),
            (l = C))
          : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((c = t.stateNode),
        Es(e, t),
        (v = t.memoizedProps),
        (X = pr(n, v)),
        (c.props = X),
        (K = t.pendingProps),
        (H = c.context),
        (V = n.contextType),
        (C = jr),
        typeof V == 'object' && V !== null && (C = Vt(V)),
        (y = n.getDerivedStateFromProps),
        (V =
          typeof y == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function') ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((v !== K || H !== C) && np(t, c, l, C)),
        (ya = !1),
        (H = t.memoizedState),
        (c.state = H),
        ql(t, l, c, s),
        Bl());
      var q = t.memoizedState;
      v !== K ||
      H !== q ||
      ya ||
      (e !== null && e.dependencies !== null && no(e.dependencies))
        ? (typeof y == 'function' && (Ps(t, n, y, l), (q = t.memoizedState)),
          (X =
            ya ||
            tp(t, n, X, l, H, q, C) ||
            (e !== null && e.dependencies !== null && no(e.dependencies)))
            ? (V ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' &&
                  c.componentWillUpdate(l, q, C),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(l, q, C)),
              typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (v === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (v === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = q)),
          (c.props = l),
          (c.state = q),
          (c.context = C),
          (l = X))
        : (typeof c.componentDidUpdate != 'function' ||
            (v === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (v === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      wo(e, t),
      (l = (t.flags & 128) !== 0),
      c || l
        ? ((c = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != 'function'
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Fr(t, e.child, null, s)),
              (t.child = Fr(t, null, n, s)))
            : Lt(e, t, n, s),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = la(e, t, s)),
      e
    );
  }
  function gp(e, t, n, l) {
    return (zl(), (t.flags |= 256), Lt(e, t, n, l), t.child);
  }
  var Qs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Zs(e) {
    return { baseLanes: e, cachePool: rh() };
  }
  function Ks(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Sn), e);
  }
  function yp(e, t, n) {
    var l = t.pendingProps,
      s = !1,
      c = (t.flags & 128) !== 0,
      v;
    if (
      ((v = c) ||
        (v =
          e !== null && e.memoizedState === null ? !1 : (Rt.current & 2) !== 0),
      v && ((s = !0), (t.flags &= -129)),
      (v = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Xe) {
        if ((s ? wa(t) : Ea(), Xe)) {
          var y = dt,
            C;
          if ((C = y)) {
            e: {
              for (C = y, y = Ln; C.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((C = Tn(C.nextSibling)), C === null)) {
                  y = null;
                  break e;
                }
              }
              y = C;
            }
            y !== null
              ? ((t.memoizedState = {
                  dehydrated: y,
                  treeContext: ir !== null ? { id: Wn, overflow: ea } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (C = nn(18, null, null, 0)),
                (C.stateNode = y),
                (C.return = t),
                (t.child = C),
                (Pt = t),
                (dt = null),
                (C = !0))
              : (C = !1);
          }
          C || sr(t);
        }
        if (
          ((y = t.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return (Nc(y) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        ra(t);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        s
          ? (Ea(),
            (s = t.mode),
            (y = Eo({ mode: 'hidden', children: y }, s)),
            (l = lr(l, s, n, null)),
            (y.return = t),
            (l.return = t),
            (y.sibling = l),
            (t.child = y),
            (s = t.child),
            (s.memoizedState = Zs(n)),
            (s.childLanes = Ks(e, v, n)),
            (t.memoizedState = Qs),
            l)
          : (wa(t), Is(t, y))
      );
    }
    if (
      ((C = e.memoizedState), C !== null && ((y = C.dehydrated), y !== null))
    ) {
      if (c)
        t.flags & 256
          ? (wa(t), (t.flags &= -257), (t = Js(e, t, n)))
          : t.memoizedState !== null
            ? (Ea(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ea(),
              (s = l.fallback),
              (y = t.mode),
              (l = Eo({ mode: 'visible', children: l.children }, y)),
              (s = lr(s, y, n, null)),
              (s.flags |= 2),
              (l.return = t),
              (s.return = t),
              (l.sibling = s),
              (t.child = l),
              Fr(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Zs(n)),
              (l.childLanes = Ks(e, v, n)),
              (t.memoizedState = Qs),
              (t = s));
      else if ((wa(t), Nc(y))) {
        if (((v = y.nextSibling && y.nextSibling.dataset), v)) var V = v.dgst;
        ((v = V),
          (l = Error(i(419))),
          (l.stack = ''),
          (l.digest = v),
          Nl({ value: l, source: null, stack: null }),
          (t = Js(e, t, n)));
      } else if (
        (Tt || Ll(e, t, n, !1), (v = (n & e.childLanes) !== 0), Tt || v)
      ) {
        if (
          ((v = lt),
          v !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Sl(l)),
            (l = (l & (v.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== C.retryLane))
        )
          throw ((C.retryLane = l), Ur(e, l), un(v, e, l), sp);
        (y.data === '$?' || vc(), (t = Js(e, t, n)));
      } else
        y.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = C.treeContext),
            (dt = Tn(y.nextSibling)),
            (Pt = t),
            (Xe = !0),
            (ur = null),
            (Ln = !1),
            e !== null &&
              ((gn[yn++] = Wn),
              (gn[yn++] = ea),
              (gn[yn++] = ir),
              (Wn = e.id),
              (ea = e.overflow),
              (ir = t)),
            (t = Is(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Ea(),
        (s = l.fallback),
        (y = t.mode),
        (C = e.child),
        (V = C.sibling),
        (l = Jn(C, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = C.subtreeFlags & 65011712),
        V !== null ? (s = Jn(V, s)) : ((s = lr(s, y, n, null)), (s.flags |= 2)),
        (s.return = t),
        (l.return = t),
        (l.sibling = s),
        (t.child = l),
        (l = s),
        (s = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = Zs(n))
          : ((C = y.cachePool),
            C !== null
              ? ((V = Mt._currentValue),
                (C = C.parent !== V ? { parent: V, pool: V } : C))
              : (C = rh()),
            (y = { baseLanes: y.baseLanes | n, cachePool: C })),
        (s.memoizedState = y),
        (s.childLanes = Ks(e, v, n)),
        (t.memoizedState = Qs),
        l)
      : (wa(t),
        (n = e.child),
        (e = n.sibling),
        (n = Jn(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((v = t.deletions),
          v === null ? ((t.deletions = [e]), (t.flags |= 16)) : v.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Is(e, t) {
    return (
      (t = Eo({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Eo(e, t) {
    return (
      (e = nn(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Js(e, t, n) {
    return (
      Fr(t, e.child, null, n),
      (e = Is(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bp(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), vs(e.return, t, n));
  }
  function Ws(e, t, n, l, s) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: s,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = n),
        (c.tailMode = s));
  }
  function Sp(e, t, n) {
    var l = t.pendingProps,
      s = l.revealOrder,
      c = l.tail;
    if ((Lt(e, t, l.children, n), (l = Rt.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bp(e, n, t);
          else if (e.tag === 19) bp(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((W(Rt, l), s)) {
      case 'forwards':
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && bo(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ws(t, !1, s, n, c));
        break;
      case 'backwards':
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && bo(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        Ws(t, !0, n, null, c);
        break;
      case 'together':
        Ws(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function la(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ta |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ll(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Jn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function ec(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && no(e)));
  }
  function hb(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ae(t, t.stateNode.containerInfo),
          ga(t, Mt, e.memoizedState.cache),
          zl());
        break;
      case 27:
      case 5:
        at(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        ga(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (wa(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? yp(e, t, n)
              : (wa(t), (e = la(e, t, n)), e !== null ? e.sibling : null);
        wa(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Ll(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (l) return Sp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          W(Rt, Rt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), hp(e, t, n));
      case 24:
        ga(t, Mt, e.memoizedState.cache);
    }
    return la(e, t, n);
  }
  function xp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Tt = !0;
      else {
        if (!ec(e, n) && (t.flags & 128) === 0) return ((Tt = !1), hb(e, t, n));
        Tt = (e.flags & 131072) !== 0;
      }
    else ((Tt = !1), Xe && (t.flags & 1048576) !== 0 && Id(t, to, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            s = l._init;
          if (((l = s(l._payload)), (t.type = l), typeof l == 'function'))
            ss(l)
              ? ((e = pr(l, e)), (t.tag = 1), (t = vp(null, t, l, e, n)))
              : ((t.tag = 0), (t = Fs(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((s = l.$$typeof), s === J)) {
                ((t.tag = 11), (t = cp(null, t, l, e, n)));
                break e;
              } else if (s === Z) {
                ((t.tag = 14), (t = fp(null, t, l, e, n)));
                break e;
              }
            }
            throw ((t = le(l) || l), Error(i(306, t, '')));
          }
        }
        return t;
      case 0:
        return Fs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (s = pr(l, t.pendingProps)), vp(e, t, l, s, n));
      case 3:
        e: {
          if ((Ae(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          ((s = c.element), Es(e, t), ql(t, l, null, n));
          var v = t.memoizedState;
          if (
            ((l = v.cache),
            ga(t, Mt, l),
            l !== c.cache && gs(t, [Mt], n, !0),
            Bl(),
            (l = v.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: l, isDehydrated: !1, cache: v.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = gp(e, t, l, n);
              break e;
            } else if (l !== s) {
              ((s = mn(Error(i(424)), t)), Nl(s), (t = gp(e, t, l, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                dt = Tn(e.firstChild),
                  Pt = t,
                  Xe = !0,
                  ur = null,
                  Ln = !0,
                  n = Wh(t, null, l, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((zl(), l === s)) {
              t = la(e, t, n);
              break e;
            }
            Lt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          wo(e, t),
          e === null
            ? (n = Mm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Xe ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = jo(ie.current).createElement(n)),
                (l[ee] = t),
                (l[ne] = e),
                Ut(l, n, e),
                Ne(l),
                (t.stateNode = l))
            : (t.memoizedState = Mm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          at(t),
          e === null &&
            Xe &&
            ((l = t.stateNode = wm(t.type, t.pendingProps, ie.current)),
            (Pt = t),
            (Ln = !0),
            (s = dt),
            za(t.type) ? ((Lc = s), (dt = Tn(l.firstChild))) : (dt = s)),
          Lt(e, t, t.pendingProps.children, n),
          wo(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Xe &&
            ((s = l = dt) &&
              ((l = qb(l, t.type, t.pendingProps, Ln)),
              l !== null
                ? ((t.stateNode = l),
                  (Pt = t),
                  (dt = Tn(l.firstChild)),
                  (Ln = !1),
                  (s = !0))
                : (s = !1)),
            s || sr(t)),
          at(t),
          (s = t.type),
          (c = t.pendingProps),
          (v = e !== null ? e.memoizedProps : null),
          (l = c.children),
          Dc(s, c) ? (l = null) : v !== null && Dc(s, v) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = As(e, t, lb, null, null, n)), (si._currentValue = s)),
          wo(e, t),
          Lt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Xe &&
            ((e = n = dt) &&
              ((n = Yb(n, t.pendingProps, Ln)),
              n !== null
                ? ((t.stateNode = n), (Pt = t), (dt = null), (e = !0))
                : (e = !1)),
            e || sr(t)),
          null
        );
      case 13:
        return yp(e, t, n);
      case 4:
        return (
          Ae(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Fr(t, null, l, n)) : Lt(e, t, l, n),
          t.child
        );
      case 11:
        return cp(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Lt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Lt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Lt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          ga(t, t.type, l.value),
          Lt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (l = t.pendingProps.children),
          fr(t),
          (s = Vt(s)),
          (l = l(s)),
          (t.flags |= 1),
          Lt(e, t, l, n),
          t.child
        );
      case 14:
        return fp(e, t, t.type, t.pendingProps, n);
      case 15:
        return dp(e, t, t.type, t.pendingProps, n);
      case 19:
        return Sp(e, t, n);
      case 31:
        return (
          (l = t.pendingProps),
          (n = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((n = Eo(l, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Jn(e.child, l)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return hp(e, t, n);
      case 24:
        return (
          fr(t),
          (l = Vt(Mt)),
          e === null
            ? ((s = Ss()),
              s === null &&
                ((s = lt),
                (c = ys()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= n),
                (s = c)),
              (t.memoizedState = { parent: l, cache: s }),
              ws(t),
              ga(t, Mt, s))
            : ((e.lanes & n) !== 0 && (Es(e, t), ql(t, null, null, n), Bl()),
              (s = e.memoizedState),
              (c = t.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  ga(t, Mt, l))
                : ((l = c.cache),
                  ga(t, Mt, l),
                  l !== s.cache && gs(t, [Mt], n, !0))),
          Lt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function ia(e) {
    e.flags |= 4;
  }
  function wp(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Dm(t))) {
      if (
        ((t = bn.current),
        t !== null &&
          ((Ge & 4194048) === Ge
            ? kn !== null
            : ((Ge & 62914560) !== Ge && (Ge & 536870912) === 0) || t !== kn))
      )
        throw ((Vl = xs), lh);
      e.flags |= 8192;
    }
  }
  function Oo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ji() : 536870912), (e.lanes |= t), (Ir |= t)));
  }
  function Ql(e, t) {
    if (!Xe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function pb(e, t, n) {
    var l = t.pendingProps;
    switch ((hs(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (st(t), null);
      case 1:
        return (st(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          na(Mt),
          Je(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (_l(t)
              ? ia(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), eh())),
          st(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (ia(t),
              n !== null ? (st(t), wp(t, n)) : (st(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (ia(t), st(t), wp(t, n))
                : (st(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && ia(t), st(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (vt(t), (n = ie.current));
        var s = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && ia(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (st(t), null);
          }
          ((e = ae.current),
            _l(t) ? Jd(t) : ((e = wm(s, l, n)), (t.stateNode = e), ia(t)));
        }
        return (st(t), null);
      case 5:
        if ((vt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && ia(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (st(t), null);
          }
          if (((e = ae.current), _l(t))) Jd(t);
          else {
            switch (((s = jo(ie.current)), e)) {
              case 1:
                e = s.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                e = s.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    e = s.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    e = s.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n
                    );
                    break;
                  case 'script':
                    ((e = s.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      typeof l.is == 'string'
                        ? s.createElement('select', { is: l.is })
                        : s.createElement('select')),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? s.createElement(n, { is: l.is })
                        : s.createElement(n);
                }
            }
            ((e[ee] = t), (e[ne] = l));
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                ((s.child.return = s), (s = s.child));
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t) break e;
                s = s.return;
              }
              ((s.sibling.return = s.return), (s = s.sibling));
            }
            t.stateNode = e;
            e: switch ((Ut(e, n, l), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ia(t);
          }
        }
        return (st(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && ia(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(i(166));
          if (((e = ie.current), _l(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (s = Pt),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            ((e[ee] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                mm(e.nodeValue, n)
              )),
              e || sr(t));
          } else
            ((e = jo(e).createTextNode(l)), (e[ee] = t), (t.stateNode = e));
        }
        return (st(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = _l(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(i(317));
              s[ee] = t;
            } else
              (zl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (st(t), (s = !1));
          } else
            ((s = eh()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (ra(t), t) : (ra(t), null);
        }
        if ((ra(t), (t.flags & 128) !== 0)) return ((t.lanes = n), t);
        if (
          ((n = l !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          ((l = t.child),
            (s = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (s = l.alternate.memoizedState.cachePool.pool));
          var c = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (c = l.memoizedState.cachePool.pool),
            c !== s && (l.flags |= 2048));
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          Oo(t, t.updateQueue),
          st(t),
          null
        );
      case 4:
        return (Je(), e === null && Mc(t.stateNode.containerInfo), st(t), null);
      case 10:
        return (na(t.type), st(t), null);
      case 19:
        if (($(Rt), (s = t.memoizedState), s === null)) return (st(t), null);
        if (((l = (t.flags & 128) !== 0), (c = s.rendering), c === null))
          if (l) Ql(s, !1);
          else {
            if (ht !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = bo(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Ql(s, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Oo(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (Kd(n, e), (n = n.sibling));
                  return (W(Rt, (Rt.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Yt() > Co &&
              ((t.flags |= 128), (l = !0), Ql(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = bo(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Oo(t, e),
                Ql(s, !0),
                s.tail === null &&
                  s.tailMode === 'hidden' &&
                  !c.alternate &&
                  !Xe)
              )
                return (st(t), null);
            } else
              2 * Yt() - s.renderingStartTime > Co &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), Ql(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = s.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (s.last = c));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Yt()),
            (t.sibling = null),
            (e = Rt.current),
            W(Rt, l ? (e & 1) | 2 : e & 1),
            t)
          : (st(t), null);
      case 22:
      case 23:
        return (
          ra(t),
          Cs(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : st(t),
          (n = t.updateQueue),
          n !== null && Oo(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && $(dr),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          na(Mt),
          st(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function mb(e, t) {
    switch ((hs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          na(Mt),
          Je(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (vt(t), null);
      case 13:
        if (
          (ra(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          zl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ($(Rt), null);
      case 4:
        return (Je(), null);
      case 10:
        return (na(t.type), null);
      case 22:
      case 23:
        return (
          ra(t),
          Cs(),
          e !== null && $(dr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (na(Mt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ep(e, t) {
    switch ((hs(t), t.tag)) {
      case 3:
        (na(Mt), Je());
        break;
      case 26:
      case 27:
      case 5:
        vt(t);
        break;
      case 4:
        Je();
        break;
      case 13:
        ra(t);
        break;
      case 19:
        $(Rt);
        break;
      case 10:
        na(t.type);
        break;
      case 22:
      case 23:
        (ra(t), Cs(), e !== null && $(dr));
        break;
      case 24:
        na(Mt);
    }
  }
  function Zl(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create,
              v = n.inst;
            ((l = c()), (v.destroy = l));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      rt(t, t.return, y);
    }
  }
  function Oa(e, t, n) {
    try {
      var l = t.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst,
              y = v.destroy;
            if (y !== void 0) {
              ((v.destroy = void 0), (s = t));
              var C = n,
                V = y;
              try {
                V();
              } catch (X) {
                rt(s, C, X);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (X) {
      rt(t, t.return, X);
    }
  }
  function Op(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        fh(t, n);
      } catch (l) {
        rt(e, e.return, l);
      }
    }
  }
  function Mp(e, t, n) {
    ((n.props = pr(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      rt(e, t, l);
    }
  }
  function Kl(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (s) {
      rt(e, t, s);
    }
  }
  function Un(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (s) {
          rt(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (s) {
          rt(e, t, s);
        }
      else n.current = null;
  }
  function Rp(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (s) {
      rt(e, e.return, s);
    }
  }
  function tc(e, t, n) {
    try {
      var l = e.stateNode;
      (Ub(l, e.type, n, t), (l[ne] = t));
    } catch (s) {
      rt(e, e.return, s);
    }
  }
  function Cp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && za(e.type)) ||
      e.tag === 4
    );
  }
  function nc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && za(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ac(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === 'HTML'
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Uo)));
    else if (
      l !== 4 &&
      (l === 27 && za(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ac(e, t, n), e = e.sibling; e !== null; )
        (ac(e, t, n), (e = e.sibling));
  }
  function Mo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && za(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Mo(e, t, n), e = e.sibling; e !== null; )
        (Mo(e, t, n), (e = e.sibling));
  }
  function Tp(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (Ut(t, l, n), (t[ee] = e), (t[ne] = n));
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  var oa = !1,
    yt = !1,
    rc = !1,
    Ap = typeof WeakSet == 'function' ? WeakSet : Set,
    At = null;
  function vb(e, t) {
    if (((e = e.containerInfo), (Tc = Go), (e = Bd(e)), ns(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break e;
            }
            var v = 0,
              y = -1,
              C = -1,
              V = 0,
              X = 0,
              K = e,
              H = null;
            t: for (;;) {
              for (
                var q;
                K !== n || (s !== 0 && K.nodeType !== 3) || (y = v + s),
                  K !== c || (l !== 0 && K.nodeType !== 3) || (C = v + l),
                  K.nodeType === 3 && (v += K.nodeValue.length),
                  (q = K.firstChild) !== null;

              )
                ((H = K), (K = q));
              for (;;) {
                if (K === e) break t;
                if (
                  (H === n && ++V === s && (y = v),
                  H === c && ++X === l && (C = v),
                  (q = K.nextSibling) !== null)
                )
                  break;
                ((K = H), (H = K.parentNode));
              }
              K = q;
            }
            n = y === -1 || C === -1 ? null : { start: y, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ac = { focusedElem: e, selectionRange: n }, Go = !1, At = t;
      At !== null;

    )
      if (
        ((t = At), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (At = e));
      else
        for (; At !== null; ) {
          switch (((t = At), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (n = t),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = n.stateNode));
                try {
                  var _e = pr(n.type, s, n.elementType === n.type);
                  ((e = l.getSnapshotBeforeUpdate(_e, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Re) {
                  rt(n, n.return, Re);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  zc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      zc(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (At = e));
            break;
          }
          At = t.return;
        }
  }
  function Dp(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Ma(e, n), l & 4 && Zl(5, n));
        break;
      case 1:
        if ((Ma(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (v) {
              rt(n, n.return, v);
            }
          else {
            var s = pr(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              rt(n, n.return, v);
            }
          }
        (l & 64 && Op(n), l & 512 && Kl(n, n.return));
        break;
      case 3:
        if ((Ma(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            fh(e, t);
          } catch (v) {
            rt(n, n.return, v);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Tp(n);
      case 26:
      case 5:
        (Ma(e, n), t === null && l & 4 && Rp(n), l & 512 && Kl(n, n.return));
        break;
      case 12:
        Ma(e, n);
        break;
      case 13:
        (Ma(e, n),
          l & 4 && Np(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Mb.bind(null, n)), Gb(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || oa), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || yt), (s = oa));
          var c = yt;
          ((oa = l),
            (yt = t) && !c ? Ra(e, n, (n.subtreeFlags & 8772) !== 0) : Ma(e, n),
            (oa = s),
            (yt = c));
        }
        break;
      case 30:
        break;
      default:
        Ma(e, n);
    }
  }
  function _p(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), _p(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ye(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var it = null,
    Qt = !1;
  function ua(e, t, n) {
    for (n = n.child; n !== null; ) (zp(e, t, n), (n = n.sibling));
  }
  function zp(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == 'function')
      try {
        ot.onCommitFiberUnmount(Xt, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (yt || Un(n, t),
          ua(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        yt || Un(n, t);
        var l = it,
          s = Qt;
        (za(n.type) && ((it = n.stateNode), (Qt = !1)),
          ua(e, t, n),
          li(n.stateNode),
          (it = l),
          (Qt = s));
        break;
      case 5:
        yt || Un(n, t);
      case 6:
        if (
          ((l = it),
          (s = Qt),
          (it = null),
          ua(e, t, n),
          (it = l),
          (Qt = s),
          it !== null)
        )
          if (Qt)
            try {
              (it.nodeType === 9
                ? it.body
                : it.nodeName === 'HTML'
                  ? it.ownerDocument.body
                  : it
              ).removeChild(n.stateNode);
            } catch (c) {
              rt(n, t, c);
            }
          else
            try {
              it.removeChild(n.stateNode);
            } catch (c) {
              rt(n, t, c);
            }
        break;
      case 18:
        it !== null &&
          (Qt
            ? ((e = it),
              Sm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              hi(e))
            : Sm(it, n.stateNode));
        break;
      case 4:
        ((l = it),
          (s = Qt),
          (it = n.stateNode.containerInfo),
          (Qt = !0),
          ua(e, t, n),
          (it = l),
          (Qt = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (yt || Oa(2, n, t), yt || Oa(4, n, t), ua(e, t, n));
        break;
      case 1:
        (yt ||
          (Un(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == 'function' && Mp(n, t, l)),
          ua(e, t, n));
        break;
      case 21:
        ua(e, t, n);
        break;
      case 22:
        ((yt = (l = yt) || n.memoizedState !== null), ua(e, t, n), (yt = l));
        break;
      default:
        ua(e, t, n);
    }
  }
  function Np(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        hi(e);
      } catch (n) {
        rt(t, t.return, n);
      }
  }
  function gb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Ap()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ap()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function lc(e, t) {
    var n = gb(e);
    t.forEach(function (l) {
      var s = Rb.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(s, s));
    });
  }
  function an(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l],
          c = e,
          v = t,
          y = v;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (za(y.type)) {
                ((it = y.stateNode), (Qt = !1));
                break e;
              }
              break;
            case 5:
              ((it = y.stateNode), (Qt = !1));
              break e;
            case 3:
            case 4:
              ((it = y.stateNode.containerInfo), (Qt = !0));
              break e;
          }
          y = y.return;
        }
        if (it === null) throw Error(i(160));
        (zp(c, v, s),
          (it = null),
          (Qt = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Lp(t, e), (t = t.sibling));
  }
  var Cn = null;
  function Lp(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (an(t, e),
          rn(e),
          l & 4 && (Oa(3, e, e.return), Zl(3, e), Oa(5, e, e.return)));
        break;
      case 1:
        (an(t, e),
          rn(e),
          l & 512 && (yt || n === null || Un(n, n.return)),
          l & 64 &&
            oa &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var s = Cn;
        if (
          (an(t, e),
          rn(e),
          l & 512 && (yt || n === null || Un(n, n.return)),
          l & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (l) {
                    case 'title':
                      ((c = s.getElementsByTagName('title')[0]),
                        (!c ||
                          c[pe] ||
                          c[ee] ||
                          c.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          c.hasAttribute('itemprop')) &&
                          ((c = s.createElement(l)),
                          s.head.insertBefore(
                            c,
                            s.querySelector('head > title')
                          )),
                        Ut(c, l, n),
                        (c[ee] = e),
                        Ne(c),
                        (l = c));
                      break e;
                    case 'link':
                      var v = Tm('link', 'href', s).get(l + (n.href || ''));
                      if (v) {
                        for (var y = 0; y < v.length; y++)
                          if (
                            ((c = v[y]),
                            c.getAttribute('href') ===
                              (n.href == null || n.href === ''
                                ? null
                                : n.href) &&
                              c.getAttribute('rel') ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute('title') ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(l)),
                        Ut(c, l, n),
                        s.head.appendChild(c));
                      break;
                    case 'meta':
                      if (
                        (v = Tm('meta', 'content', s).get(
                          l + (n.content || '')
                        ))
                      ) {
                        for (y = 0; y < v.length; y++)
                          if (
                            ((c = v[y]),
                            c.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              c.getAttribute('name') ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute('charset') ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(l)),
                        Ut(c, l, n),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  ((c[ee] = e), Ne(c), (l = c));
                }
                e.stateNode = l;
              } else Am(s, e.type, e.stateNode);
            else e.stateNode = Cm(s, l, e.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                l === null
                  ? Am(s, e.type, e.stateNode)
                  : Cm(s, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                tc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (an(t, e),
          rn(e),
          l & 512 && (yt || n === null || Un(n, n.return)),
          n !== null && l & 4 && tc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (an(t, e),
          rn(e),
          l & 512 && (yt || n === null || Un(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            Ar(s, '');
          } catch (q) {
            rt(e, e.return, q);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), tc(e, s, n !== null ? n.memoizedProps : s)),
          l & 1024 && (rc = !0));
        break;
      case 6:
        if ((an(t, e), rn(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (q) {
            rt(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Bo = null),
          (s = Cn),
          (Cn = Vo(t.containerInfo)),
          an(t, e),
          (Cn = s),
          rn(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            hi(t.containerInfo);
          } catch (q) {
            rt(e, e.return, q);
          }
        rc && ((rc = !1), kp(e));
        break;
      case 4:
        ((l = Cn),
          (Cn = Vo(e.stateNode.containerInfo)),
          an(t, e),
          rn(e),
          (Cn = l));
        break;
      case 12:
        (an(t, e), rn(e));
        break;
      case 13:
        (an(t, e),
          rn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (fc = Yt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), lc(e, l))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null,
          V = oa,
          X = yt;
        if (
          ((oa = V || s),
          (yt = X || C),
          an(t, e),
          (yt = X),
          (oa = V),
          rn(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || C || oa || yt || mr(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                C = n = t;
                try {
                  if (((c = C.stateNode), s))
                    ((v = c.style),
                      typeof v.setProperty == 'function'
                        ? v.setProperty('display', 'none', 'important')
                        : (v.display = 'none'));
                  else {
                    y = C.stateNode;
                    var K = C.memoizedProps.style,
                      H =
                        K != null && K.hasOwnProperty('display')
                          ? K.display
                          : null;
                    y.style.display =
                      H == null || typeof H == 'boolean' ? '' : ('' + H).trim();
                  }
                } catch (q) {
                  rt(C, C.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = s ? '' : C.memoizedProps;
                } catch (q) {
                  rt(C, C.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), lc(e, n))));
        break;
      case 19:
        (an(t, e),
          rn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), lc(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (an(t, e), rn(e));
    }
  }
  function rn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Cp(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              c = nc(e);
            Mo(e, c, s);
            break;
          case 5:
            var v = n.stateNode;
            n.flags & 32 && (Ar(v, ''), (n.flags &= -33));
            var y = nc(e);
            Mo(e, y, v);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo,
              V = nc(e);
            ac(e, V, C);
            break;
          default:
            throw Error(i(161));
        }
      } catch (X) {
        rt(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function kp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (kp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Ma(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Dp(e, t.alternate, t), (t = t.sibling));
  }
  function mr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Oa(4, t, t.return), mr(t));
          break;
        case 1:
          Un(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Mp(t, t.return, n),
            mr(t));
          break;
        case 27:
          li(t.stateNode);
        case 26:
        case 5:
          (Un(t, t.return), mr(t));
          break;
        case 22:
          t.memoizedState === null && mr(t);
          break;
        case 30:
          mr(t);
          break;
        default:
          mr(t);
      }
      e = e.sibling;
    }
  }
  function Ra(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        s = e,
        c = t,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Ra(s, c, n), Zl(4, c));
          break;
        case 1:
          if (
            (Ra(s, c, n),
            (l = c),
            (s = l.stateNode),
            typeof s.componentDidMount == 'function')
          )
            try {
              s.componentDidMount();
            } catch (V) {
              rt(l, l.return, V);
            }
          if (((l = c), (s = l.updateQueue), s !== null)) {
            var y = l.stateNode;
            try {
              var C = s.shared.hiddenCallbacks;
              if (C !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)
                  ch(C[s], y);
            } catch (V) {
              rt(l, l.return, V);
            }
          }
          (n && v & 64 && Op(c), Kl(c, c.return));
          break;
        case 27:
          Tp(c);
        case 26:
        case 5:
          (Ra(s, c, n), n && l === null && v & 4 && Rp(c), Kl(c, c.return));
          break;
        case 12:
          Ra(s, c, n);
          break;
        case 13:
          (Ra(s, c, n), n && v & 4 && Np(s, c));
          break;
        case 22:
          (c.memoizedState === null && Ra(s, c, n), Kl(c, c.return));
          break;
        case 30:
          break;
        default:
          Ra(s, c, n);
      }
      t = t.sibling;
    }
  }
  function ic(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && kl(n)));
  }
  function oc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && kl(e)));
  }
  function jn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Up(e, t, n, l), (t = t.sibling));
  }
  function Up(e, t, n, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jn(e, t, n, l), s & 2048 && Zl(9, t));
        break;
      case 1:
        jn(e, t, n, l);
        break;
      case 3:
        (jn(e, t, n, l),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && kl(e))));
        break;
      case 12:
        if (s & 2048) {
          (jn(e, t, n, l), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              v = c.id,
              y = c.onPostCommit;
            typeof y == 'function' &&
              y(
                v,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              );
          } catch (C) {
            rt(t, t.return, C);
          }
        } else jn(e, t, n, l);
        break;
      case 13:
        jn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (v = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? jn(e, t, n, l)
              : Il(e, t)
            : c._visibility & 2
              ? jn(e, t, n, l)
              : ((c._visibility |= 2),
                Qr(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          s & 2048 && ic(v, t));
        break;
      case 24:
        (jn(e, t, n, l), s & 2048 && oc(t.alternate, t));
        break;
      default:
        jn(e, t, n, l);
    }
  }
  function Qr(e, t, n, l, s) {
    for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        v = t,
        y = n,
        C = l,
        V = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (Qr(c, v, y, C, s), Zl(8, v));
          break;
        case 23:
          break;
        case 22:
          var X = v.stateNode;
          (v.memoizedState !== null
            ? X._visibility & 2
              ? Qr(c, v, y, C, s)
              : Il(c, v)
            : ((X._visibility |= 2), Qr(c, v, y, C, s)),
            s && V & 2048 && ic(v.alternate, v));
          break;
        case 24:
          (Qr(c, v, y, C, s), s && V & 2048 && oc(v.alternate, v));
          break;
        default:
          Qr(c, v, y, C, s);
      }
      t = t.sibling;
    }
  }
  function Il(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          s = l.flags;
        switch (l.tag) {
          case 22:
            (Il(n, l), s & 2048 && ic(l.alternate, l));
            break;
          case 24:
            (Il(n, l), s & 2048 && oc(l.alternate, l));
            break;
          default:
            Il(n, l);
        }
        t = t.sibling;
      }
  }
  var Jl = 8192;
  function Zr(e) {
    if (e.subtreeFlags & Jl)
      for (e = e.child; e !== null; ) (jp(e), (e = e.sibling));
  }
  function jp(e) {
    switch (e.tag) {
      case 26:
        (Zr(e),
          e.flags & Jl &&
            e.memoizedState !== null &&
            n1(Cn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Zr(e);
        break;
      case 3:
      case 4:
        var t = Cn;
        ((Cn = Vo(e.stateNode.containerInfo)), Zr(e), (Cn = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Jl), (Jl = 16777216), Zr(e), (Jl = t))
            : Zr(e));
        break;
      default:
        Zr(e);
    }
  }
  function Vp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Wl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), Bp(l, e));
        }
      Vp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Hp(e), (e = e.sibling));
  }
  function Hp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Wl(e), e.flags & 2048 && Oa(9, e, e.return));
        break;
      case 3:
        Wl(e);
        break;
      case 12:
        Wl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ro(e))
          : Wl(e);
        break;
      default:
        Wl(e);
    }
  }
  function Ro(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), Bp(l, e));
        }
      Vp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Oa(8, t, t.return), Ro(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Ro(t)));
          break;
        default:
          Ro(t);
      }
      e = e.sibling;
    }
  }
  function Bp(e, t) {
    for (; At !== null; ) {
      var n = At;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          kl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (At = l));
      else
        e: for (n = e; At !== null; ) {
          l = At;
          var s = l.sibling,
            c = l.return;
          if ((_p(l), l === n)) {
            At = null;
            break e;
          }
          if (s !== null) {
            ((s.return = c), (At = s));
            break e;
          }
          At = c;
        }
    }
  }
  var yb = {
      getCacheForType: function (e) {
        var t = Vt(Mt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
    },
    bb = typeof WeakMap == 'function' ? WeakMap : Map,
    Ke = 0,
    lt = null,
    Be = null,
    Ge = 0,
    Ie = 0,
    ln = null,
    Ca = !1,
    Kr = !1,
    uc = !1,
    sa = 0,
    ht = 0,
    Ta = 0,
    vr = 0,
    sc = 0,
    Sn = 0,
    Ir = 0,
    ei = null,
    Zt = null,
    cc = !1,
    fc = 0,
    Co = 1 / 0,
    To = null,
    Aa = null,
    kt = 0,
    Da = null,
    Jr = null,
    Wr = 0,
    dc = 0,
    hc = null,
    qp = null,
    ti = 0,
    pc = null;
  function on() {
    if ((Ke & 2) !== 0 && Ge !== 0) return Ge & -Ge;
    if (N.T !== null) {
      var e = Br;
      return e !== 0 ? e : xc();
    }
    return D();
  }
  function Yp() {
    Sn === 0 && (Sn = (Ge & 536870912) === 0 || Xe ? Mr() : 536870912);
    var e = bn.current;
    return (e !== null && (e.flags |= 32), Sn);
  }
  function un(e, t, n) {
    (((e === lt && (Ie === 2 || Ie === 9)) || e.cancelPendingCommit !== null) &&
      (el(e, 0), _a(e, Ge, Sn, !1)),
      Ja(e, n),
      ((Ke & 2) === 0 || e !== lt) &&
        (e === lt &&
          ((Ke & 2) === 0 && (vr |= n), ht === 4 && _a(e, Ge, Sn, !1)),
        Vn(e)));
  }
  function Gp(e, t, n) {
    if ((Ke & 6) !== 0) throw Error(i(327));
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || zn(e, t),
      s = l ? wb(e, t) : gc(e, t, !0),
      c = l;
    do {
      if (s === 0) {
        Kr && !l && _a(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), c && !Sb(n))) {
          ((s = gc(e, t, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var v = 0;
          else
            ((v = e.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            t = v;
            e: {
              var y = e;
              s = ei;
              var C = y.current.memoizedState.isDehydrated;
              if ((C && (el(y, v).flags |= 256), (v = gc(y, v, !1)), v !== 2)) {
                if (uc && !C) {
                  ((y.errorRecoveryDisabledLanes |= c), (vr |= c), (s = 4));
                  break e;
                }
                ((c = Zt),
                  (Zt = s),
                  c !== null &&
                    (Zt === null ? (Zt = c) : Zt.push.apply(Zt, c)));
              }
              s = v;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (el(e, 0), _a(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (c = s), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              _a(l, t, Sn, !Ca);
              break e;
            case 2:
              Zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((s = fc + 300 - Yt()), 10 < s)) {
            if ((_a(l, t, Sn, !Ca), Ia(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = ym(
              Pp.bind(null, l, n, Zt, To, cc, t, Sn, vr, Ir, Ca, c, 2, -0, 0),
              s
            );
            break e;
          }
          Pp(l, n, Zt, To, cc, t, Sn, vr, Ir, Ca, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Vn(e);
  }
  function Pp(e, t, n, l, s, c, v, y, C, V, X, K, H, q) {
    if (
      ((e.timeoutHandle = -1),
      (K = t.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((ui = { stylesheets: null, count: 0, unsuspend: t1 }),
        jp(t),
        (K = a1()),
        K !== null))
    ) {
      ((e.cancelPendingCommit = K(
        Ip.bind(null, e, t, c, n, l, s, v, y, C, X, 1, H, q)
      )),
        _a(e, c, v, !V));
      return;
    }
    Ip(e, t, c, n, l, s, v, y, C);
  }
  function Sb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var s = n[l],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!tn(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function _a(e, t, n, l) {
    ((t &= ~sc),
      (t &= ~vr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var c = 31 - Nt(s),
        v = 1 << c;
      ((l[c] = -1), (s &= ~v));
    }
    n !== 0 && Wa(e, n, t);
  }
  function Ao() {
    return (Ke & 6) === 0 ? (ni(0), !1) : !0;
  }
  function mc() {
    if (Be !== null) {
      if (Ie === 0) var e = Be.return;
      else ((e = Be), (ta = cr = null), zs(e), ($r = null), ($l = 0), (e = Be));
      for (; e !== null; ) (Ep(e.alternate, e), (e = e.return));
      Be = null;
    }
  }
  function el(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Vb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      mc(),
      (lt = e),
      (Be = n = Jn(e.current, null)),
      (Ge = t),
      (Ie = 0),
      (ln = null),
      (Ca = !1),
      (Kr = zn(e, t)),
      (uc = !1),
      (Ir = Sn = sc = vr = Ta = ht = 0),
      (Zt = ei = null),
      (cc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var s = 31 - Nt(l),
          c = 1 << s;
        ((t |= e[s]), (l &= ~c));
      }
    return ((sa = t), Ki(), n);
  }
  function Xp(e, t) {
    ((je = null),
      (N.H = vo),
      t === jl || t === lo
        ? ((t = uh()), (Ie = 3))
        : t === lh
          ? ((t = uh()), (Ie = 4))
          : (Ie =
              t === sp
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (ln = t),
      Be === null && ((ht = 1), xo(e, mn(t, e.current))));
  }
  function $p() {
    var e = N.H;
    return ((N.H = vo), e === null ? vo : e);
  }
  function Fp() {
    var e = N.A;
    return ((N.A = yb), e);
  }
  function vc() {
    ((ht = 4),
      Ca || ((Ge & 4194048) !== Ge && bn.current !== null) || (Kr = !0),
      ((Ta & 134217727) === 0 && (vr & 134217727) === 0) ||
        lt === null ||
        _a(lt, Ge, Sn, !1));
  }
  function gc(e, t, n) {
    var l = Ke;
    Ke |= 2;
    var s = $p(),
      c = Fp();
    ((lt !== e || Ge !== t) && ((To = null), el(e, t)), (t = !1));
    var v = ht;
    e: do
      try {
        if (Ie !== 0 && Be !== null) {
          var y = Be,
            C = ln;
          switch (Ie) {
            case 8:
              (mc(), (v = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bn.current === null && (t = !0);
              var V = Ie;
              if (((Ie = 0), (ln = null), tl(e, y, C, V), n && Kr)) {
                v = 0;
                break e;
              }
              break;
            default:
              ((V = Ie), (Ie = 0), (ln = null), tl(e, y, C, V));
          }
        }
        (xb(), (v = ht));
        break;
      } catch (X) {
        Xp(e, X);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ta = cr = null),
      (Ke = l),
      (N.H = s),
      (N.A = c),
      Be === null && ((lt = null), (Ge = 0), Ki()),
      v
    );
  }
  function xb() {
    for (; Be !== null; ) Qp(Be);
  }
  function wb(e, t) {
    var n = Ke;
    Ke |= 2;
    var l = $p(),
      s = Fp();
    lt !== e || Ge !== t
      ? ((To = null), (Co = Yt() + 500), el(e, t))
      : (Kr = zn(e, t));
    e: do
      try {
        if (Ie !== 0 && Be !== null) {
          t = Be;
          var c = ln;
          t: switch (Ie) {
            case 1:
              ((Ie = 0), (ln = null), tl(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (ih(c)) {
                ((Ie = 0), (ln = null), Zp(t));
                break;
              }
              ((t = function () {
                ((Ie !== 2 && Ie !== 9) || lt !== e || (Ie = 7), Vn(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              ih(c)
                ? ((Ie = 0), (ln = null), Zp(t))
                : ((Ie = 0), (ln = null), tl(e, t, c, 7));
              break;
            case 5:
              var v = null;
              switch (Be.tag) {
                case 26:
                  v = Be.memoizedState;
                case 5:
                case 27:
                  var y = Be;
                  if (!v || Dm(v)) {
                    ((Ie = 0), (ln = null));
                    var C = y.sibling;
                    if (C !== null) Be = C;
                    else {
                      var V = y.return;
                      V !== null ? ((Be = V), Do(V)) : (Be = null);
                    }
                    break t;
                  }
              }
              ((Ie = 0), (ln = null), tl(e, t, c, 5));
              break;
            case 6:
              ((Ie = 0), (ln = null), tl(e, t, c, 6));
              break;
            case 8:
              (mc(), (ht = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        Eb();
        break;
      } catch (X) {
        Xp(e, X);
      }
    while (!0);
    return (
      (ta = cr = null),
      (N.H = l),
      (N.A = s),
      (Ke = n),
      Be !== null ? 0 : ((lt = null), (Ge = 0), Ki(), ht)
    );
  }
  function Eb() {
    for (; Be !== null && !Xn(); ) Qp(Be);
  }
  function Qp(e) {
    var t = xp(e.alternate, e, sa);
    ((e.memoizedProps = e.pendingProps), t === null ? Do(e) : (Be = t));
  }
  function Zp(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = mp(n, t, t.pendingProps, t.type, void 0, Ge);
        break;
      case 11:
        t = mp(n, t, t.pendingProps, t.type.render, t.ref, Ge);
        break;
      case 5:
        zs(t);
      default:
        (Ep(n, t), (t = Be = Kd(t, sa)), (t = xp(n, t, sa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Do(e) : (Be = t));
  }
  function tl(e, t, n, l) {
    ((ta = cr = null), zs(t), ($r = null), ($l = 0));
    var s = t.return;
    try {
      if (db(e, s, t, n, Ge)) {
        ((ht = 1), xo(e, mn(n, e.current)), (Be = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Be = s), c);
      ((ht = 1), xo(e, mn(n, e.current)), (Be = null));
      return;
    }
    t.flags & 32768
      ? (Xe || l === 1
          ? (e = !0)
          : Kr || (Ge & 536870912) !== 0
            ? (e = !1)
            : ((Ca = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = bn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Kp(t, e))
      : Do(t);
  }
  function Do(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Kp(t, Ca);
        return;
      }
      e = t.return;
      var n = pb(t.alternate, t, sa);
      if (n !== null) {
        Be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function Kp(e, t) {
    do {
      var n = mb(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Be = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Be = e;
        return;
      }
      Be = e = n;
    } while (e !== null);
    ((ht = 6), (Be = null));
  }
  function Ip(e, t, n, l, s, c, v, y, C) {
    e.cancelPendingCommit = null;
    do _o();
    while (kt !== 0);
    if ((Ke & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= os),
        Vi(e, n, c, v, y, C),
        e === lt && ((Be = lt = null), (Ge = 0)),
        (Jr = t),
        (Da = e),
        (Wr = n),
        (dc = c),
        (hc = s),
        (qp = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Cb(da, function () {
              return (nm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = N.T), (N.T = null), (s = I.p), (I.p = 2), (v = Ke), (Ke |= 4));
        try {
          vb(e, t, n);
        } finally {
          ((Ke = v), (I.p = s), (N.T = l));
        }
      }
      ((kt = 1), Jp(), Wp(), em());
    }
  }
  function Jp() {
    if (kt === 1) {
      kt = 0;
      var e = Da,
        t = Jr,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = N.T), (N.T = null));
        var l = I.p;
        I.p = 2;
        var s = Ke;
        Ke |= 4;
        try {
          Lp(t, e);
          var c = Ac,
            v = Bd(e.containerInfo),
            y = c.focusedElem,
            C = c.selectionRange;
          if (
            v !== y &&
            y &&
            y.ownerDocument &&
            Hd(y.ownerDocument.documentElement, y)
          ) {
            if (C !== null && ns(y)) {
              var V = C.start,
                X = C.end;
              if ((X === void 0 && (X = V), 'selectionStart' in y))
                ((y.selectionStart = V),
                  (y.selectionEnd = Math.min(X, y.value.length)));
              else {
                var K = y.ownerDocument || document,
                  H = (K && K.defaultView) || window;
                if (H.getSelection) {
                  var q = H.getSelection(),
                    _e = y.textContent.length,
                    Re = Math.min(C.start, _e),
                    nt = C.end === void 0 ? Re : Math.min(C.end, _e);
                  !q.extend && Re > nt && ((v = nt), (nt = Re), (Re = v));
                  var L = Vd(y, Re),
                    _ = Vd(y, nt);
                  if (
                    L &&
                    _ &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== L.node ||
                      q.anchorOffset !== L.offset ||
                      q.focusNode !== _.node ||
                      q.focusOffset !== _.offset)
                  ) {
                    var U = K.createRange();
                    (U.setStart(L.node, L.offset),
                      q.removeAllRanges(),
                      Re > nt
                        ? (q.addRange(U), q.extend(_.node, _.offset))
                        : (U.setEnd(_.node, _.offset), q.addRange(U)));
                  }
                }
              }
            }
            for (K = [], q = y; (q = q.parentNode); )
              q.nodeType === 1 &&
                K.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (
              typeof y.focus == 'function' && y.focus(), y = 0;
              y < K.length;
              y++
            ) {
              var F = K[y];
              ((F.element.scrollLeft = F.left), (F.element.scrollTop = F.top));
            }
          }
          ((Go = !!Tc), (Ac = Tc = null));
        } finally {
          ((Ke = s), (I.p = l), (N.T = n));
        }
      }
      ((e.current = t), (kt = 2));
    }
  }
  function Wp() {
    if (kt === 2) {
      kt = 0;
      var e = Da,
        t = Jr,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = N.T), (N.T = null));
        var l = I.p;
        I.p = 2;
        var s = Ke;
        Ke |= 4;
        try {
          Dp(e, t.alternate, t);
        } finally {
          ((Ke = s), (I.p = l), (N.T = n));
        }
      }
      kt = 3;
    }
  }
  function em() {
    if (kt === 4 || kt === 3) {
      ((kt = 0), yl());
      var e = Da,
        t = Jr,
        n = Wr,
        l = qp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (kt = 5)
        : ((kt = 0), (Jr = Da = null), tm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Aa = null),
        xl(n),
        (t = t.stateNode),
        ot && typeof ot.onCommitFiberRoot == 'function')
      )
        try {
          ot.onCommitFiberRoot(Xt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = N.T), (s = I.p), (I.p = 2), (N.T = null));
        try {
          for (var c = e.onRecoverableError, v = 0; v < l.length; v++) {
            var y = l[v];
            c(y.value, { componentStack: y.stack });
          }
        } finally {
          ((N.T = t), (I.p = s));
        }
      }
      ((Wr & 3) !== 0 && _o(),
        Vn(e),
        (s = e.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? e === pc
            ? ti++
            : ((ti = 0), (pc = e))
          : (ti = 0),
        ni(0));
    }
  }
  function tm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), kl(t)));
  }
  function _o(e) {
    return (Jp(), Wp(), em(), nm());
  }
  function nm() {
    if (kt !== 5) return !1;
    var e = Da,
      t = dc;
    dc = 0;
    var n = xl(Wr),
      l = N.T,
      s = I.p;
    try {
      ((I.p = 32 > n ? 32 : n), (N.T = null), (n = hc), (hc = null));
      var c = Da,
        v = Wr;
      if (((kt = 0), (Jr = Da = null), (Wr = 0), (Ke & 6) !== 0))
        throw Error(i(331));
      var y = Ke;
      if (
        ((Ke |= 4),
        Hp(c.current),
        Up(c, c.current, v, n),
        (Ke = y),
        ni(0, !1),
        ot && typeof ot.onPostCommitFiberRoot == 'function')
      )
        try {
          ot.onPostCommitFiberRoot(Xt, c);
        } catch {}
      return !0;
    } finally {
      ((I.p = s), (N.T = l), tm(e, t));
    }
  }
  function am(e, t, n) {
    ((t = mn(n, t)),
      (t = $s(e.stateNode, t, 2)),
      (e = Sa(e, t, 2)),
      e !== null && (Ja(e, 2), Vn(e)));
  }
  function rt(e, t, n) {
    if (e.tag === 3) am(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          am(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Aa === null || !Aa.has(l)))
          ) {
            ((e = mn(n, e)),
              (n = op(2)),
              (l = Sa(t, n, 2)),
              l !== null && (up(n, l, t, e), Ja(l, 2), Vn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function yc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new bb();
      var s = new Set();
      l.set(t, s);
    } else ((s = l.get(t)), s === void 0 && ((s = new Set()), l.set(t, s)));
    s.has(n) ||
      ((uc = !0), s.add(n), (e = Ob.bind(null, e, t, n)), t.then(e, e));
  }
  function Ob(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      lt === e &&
        (Ge & n) === n &&
        (ht === 4 || (ht === 3 && (Ge & 62914560) === Ge && 300 > Yt() - fc)
          ? (Ke & 2) === 0 && el(e, 0)
          : (sc |= n),
        Ir === Ge && (Ir = 0)),
      Vn(e));
  }
  function rm(e, t) {
    (t === 0 && (t = ji()), (e = Ur(e, t)), e !== null && (Ja(e, t), Vn(e)));
  }
  function Mb(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), rm(e, n));
  }
  function Rb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (l !== null && l.delete(t), rm(e, n));
  }
  function Cb(e, t) {
    return Jt(e, t);
  }
  var zo = null,
    nl = null,
    bc = !1,
    No = !1,
    Sc = !1,
    gr = 0;
  function Vn(e) {
    (e !== nl &&
      e.next === null &&
      (nl === null ? (zo = nl = e) : (nl = nl.next = e)),
      (No = !0),
      bc || ((bc = !0), Ab()));
  }
  function ni(e, t) {
    if (!Sc && No) {
      Sc = !0;
      do
        for (var n = !1, l = zo; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var v = l.suspendedLanes,
                y = l.pingedLanes;
              ((c = (1 << (31 - Nt(42 | e) + 1)) - 1),
                (c &= s & ~(v & ~y)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), um(l, c));
          } else
            ((c = Ge),
              (c = Ia(
                l,
                l === lt ? c : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (c & 3) === 0 || zn(l, c) || ((n = !0), um(l, c)));
          l = l.next;
        }
      while (n);
      Sc = !1;
    }
  }
  function Tb() {
    lm();
  }
  function lm() {
    No = bc = !1;
    var e = 0;
    gr !== 0 && (jb() && (e = gr), (gr = 0));
    for (var t = Yt(), n = null, l = zo; l !== null; ) {
      var s = l.next,
        c = im(l, t);
      (c === 0
        ? ((l.next = null),
          n === null ? (zo = s) : (n.next = s),
          s === null && (nl = n))
        : ((n = l), (e !== 0 || (c & 3) !== 0) && (No = !0)),
        (l = s));
    }
    ni(e);
  }
  function im(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var v = 31 - Nt(c),
        y = 1 << v,
        C = s[v];
      (C === -1
        ? ((y & n) === 0 || (y & l) !== 0) && (s[v] = Ui(y, t))
        : C <= t && (e.expiredLanes |= y),
        (c &= ~y));
    }
    if (
      ((t = lt),
      (n = Ge),
      (n = Ia(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Ie === 2 || Ie === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Ot(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || zn(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Ot(l), xl(n))) {
        case 2:
        case 8:
          n = Ct;
          break;
        case 32:
          n = da;
          break;
        case 268435456:
          n = ha;
          break;
        default:
          n = da;
      }
      return (
        (l = om.bind(null, e)),
        (n = Jt(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Ot(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function om(e, t) {
    if (kt !== 0 && kt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (_o() && e.callbackNode !== n) return null;
    var l = Ge;
    return (
      (l = Ia(
        e,
        e === lt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Gp(e, l, t),
          im(e, Yt()),
          e.callbackNode != null && e.callbackNode === n
            ? om.bind(null, e)
            : null)
    );
  }
  function um(e, t) {
    if (_o()) return null;
    Gp(e, t, !0);
  }
  function Ab() {
    Hb(function () {
      (Ke & 6) !== 0 ? Jt(On, Tb) : lm();
    });
  }
  function xc() {
    return (gr === 0 && (gr = Mr()), gr);
  }
  function sm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Gi('' + e);
  }
  function cm(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Db(e, t, n, l, s) {
    if (t === 'submit' && n && n.stateNode === s) {
      var c = sm((s[ne] || null).action),
        v = l.submitter;
      v &&
        ((t = (t = v[ne] || null)
          ? sm(t.formAction)
          : v.getAttribute('formAction')),
        t !== null && ((c = t), (v = null)));
      var y = new Fi('action', 'action', null, l, s);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (gr !== 0) {
                  var C = v ? cm(s, v) : new FormData(s);
                  qs(
                    n,
                    { pending: !0, data: C, method: s.method, action: c },
                    null,
                    C
                  );
                }
              } else
                typeof c == 'function' &&
                  (y.preventDefault(),
                  (C = v ? cm(s, v) : new FormData(s)),
                  qs(
                    n,
                    { pending: !0, data: C, method: s.method, action: c },
                    c,
                    C
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var wc = 0; wc < is.length; wc++) {
    var Ec = is[wc],
      _b = Ec.toLowerCase(),
      zb = Ec[0].toUpperCase() + Ec.slice(1);
    Rn(_b, 'on' + zb);
  }
  (Rn(Gd, 'onAnimationEnd'),
    Rn(Pd, 'onAnimationIteration'),
    Rn(Xd, 'onAnimationStart'),
    Rn('dblclick', 'onDoubleClick'),
    Rn('focusin', 'onFocus'),
    Rn('focusout', 'onBlur'),
    Rn(Zy, 'onTransitionRun'),
    Rn(Ky, 'onTransitionStart'),
    Rn(Iy, 'onTransitionCancel'),
    Rn($d, 'onTransitionEnd'),
    Gt('onMouseEnter', ['mouseout', 'mouseover']),
    Gt('onMouseLeave', ['mouseout', 'mouseover']),
    Gt('onPointerEnter', ['pointerout', 'pointerover']),
    Gt('onPointerLeave', ['pointerout', 'pointerover']),
    en(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    en(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    en('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    en(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    en(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    en(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var ai =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Nb = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(ai)
    );
  function fm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        s = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var y = l[v],
              C = y.instance,
              V = y.currentTarget;
            if (((y = y.listener), C !== c && s.isPropagationStopped()))
              break e;
            ((c = y), (s.currentTarget = V));
            try {
              c(s);
            } catch (X) {
              So(X);
            }
            ((s.currentTarget = null), (c = C));
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((y = l[v]),
              (C = y.instance),
              (V = y.currentTarget),
              (y = y.listener),
              C !== c && s.isPropagationStopped())
            )
              break e;
            ((c = y), (s.currentTarget = V));
            try {
              c(s);
            } catch (X) {
              So(X);
            }
            ((s.currentTarget = null), (c = C));
          }
      }
    }
  }
  function qe(e, t) {
    var n = t[ge];
    n === void 0 && (n = t[ge] = new Set());
    var l = e + '__bubble';
    n.has(l) || (dm(t, e, 2, !1), n.add(l));
  }
  function Oc(e, t, n) {
    var l = 0;
    (t && (l |= 4), dm(n, e, l, t));
  }
  var Lo = '_reactListening' + Math.random().toString(36).slice(2);
  function Mc(e) {
    if (!e[Lo]) {
      ((e[Lo] = !0),
        We.forEach(function (n) {
          n !== 'selectionchange' && (Nb.has(n) || Oc(n, !1, e), Oc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Lo] || ((t[Lo] = !0), Oc('selectionchange', !1, t));
    }
  }
  function dm(e, t, n, l) {
    switch (Um(t)) {
      case 2:
        var s = i1;
        break;
      case 8:
        s = o1;
        break;
      default:
        s = Hc;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !Fu ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (s = !0),
      l
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function Rc(e, t, n, l, s) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var y = l.stateNode.containerInfo;
          if (y === s) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var C = v.tag;
              if ((C === 3 || C === 4) && v.stateNode.containerInfo === s)
                return;
              v = v.return;
            }
          for (; y !== null; ) {
            if (((v = ke(y)), v === null)) return;
            if (((C = v.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              l = c = v;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    bd(function () {
      var V = c,
        X = Xu(n),
        K = [];
      e: {
        var H = Fd.get(e);
        if (H !== void 0) {
          var q = Fi,
            _e = e;
          switch (e) {
            case 'keypress':
              if (Xi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              q = Cy;
              break;
            case 'focusin':
              ((_e = 'focus'), (q = Iu));
              break;
            case 'focusout':
              ((_e = 'blur'), (q = Iu));
              break;
            case 'beforeblur':
            case 'afterblur':
              q = Iu;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              q = wd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              q = my;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              q = Dy;
              break;
            case Gd:
            case Pd:
            case Xd:
              q = yy;
              break;
            case $d:
              q = zy;
              break;
            case 'scroll':
            case 'scrollend':
              q = hy;
              break;
            case 'wheel':
              q = Ly;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              q = Sy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              q = Od;
              break;
            case 'toggle':
            case 'beforetoggle':
              q = Uy;
          }
          var Re = (t & 4) !== 0,
            nt = !Re && (e === 'scroll' || e === 'scrollend'),
            L = Re ? (H !== null ? H + 'Capture' : null) : H;
          Re = [];
          for (var _ = V, U; _ !== null; ) {
            var F = _;
            if (
              ((U = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                U === null ||
                L === null ||
                ((F = wl(_, L)), F != null && Re.push(ri(_, F, U))),
              nt)
            )
              break;
            _ = _.return;
          }
          0 < Re.length &&
            ((H = new q(H, _e, null, n, X)),
            K.push({ event: H, listeners: Re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((H = e === 'mouseover' || e === 'pointerover'),
            (q = e === 'mouseout' || e === 'pointerout'),
            H &&
              n !== Pu &&
              (_e = n.relatedTarget || n.fromElement) &&
              (ke(_e) || _e[de]))
          )
            break e;
          if (
            (q || H) &&
            ((H =
              X.window === X
                ? X
                : (H = X.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            q
              ? ((_e = n.relatedTarget || n.toElement),
                (q = V),
                (_e = _e ? ke(_e) : null),
                _e !== null &&
                  ((nt = f(_e)),
                  (Re = _e.tag),
                  _e !== nt || (Re !== 5 && Re !== 27 && Re !== 6)) &&
                  (_e = null))
              : ((q = null), (_e = V)),
            q !== _e)
          ) {
            if (
              ((Re = wd),
              (F = 'onMouseLeave'),
              (L = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Re = Od),
                (F = 'onPointerLeave'),
                (L = 'onPointerEnter'),
                (_ = 'pointer')),
              (nt = q == null ? H : ct(q)),
              (U = _e == null ? H : ct(_e)),
              (H = new Re(F, _ + 'leave', q, n, X)),
              (H.target = nt),
              (H.relatedTarget = U),
              (F = null),
              ke(X) === V &&
                ((Re = new Re(L, _ + 'enter', _e, n, X)),
                (Re.target = U),
                (Re.relatedTarget = nt),
                (F = Re)),
              (nt = F),
              q && _e)
            )
              t: {
                for (Re = q, L = _e, _ = 0, U = Re; U; U = al(U)) _++;
                for (U = 0, F = L; F; F = al(F)) U++;
                for (; 0 < _ - U; ) ((Re = al(Re)), _--);
                for (; 0 < U - _; ) ((L = al(L)), U--);
                for (; _--; ) {
                  if (Re === L || (L !== null && Re === L.alternate)) break t;
                  ((Re = al(Re)), (L = al(L)));
                }
                Re = null;
              }
            else Re = null;
            (q !== null && hm(K, H, q, Re, !1),
              _e !== null && nt !== null && hm(K, nt, _e, Re, !0));
          }
        }
        e: {
          if (
            ((H = V ? ct(V) : window),
            (q = H.nodeName && H.nodeName.toLowerCase()),
            q === 'select' || (q === 'input' && H.type === 'file'))
          )
            var fe = zd;
          else if (Dd(H))
            if (Nd) fe = $y;
            else {
              fe = Py;
              var He = Gy;
            }
          else
            ((q = H.nodeName),
              !q ||
              q.toLowerCase() !== 'input' ||
              (H.type !== 'checkbox' && H.type !== 'radio')
                ? V && Gu(V.elementType) && (fe = zd)
                : (fe = Xy));
          if (fe && (fe = fe(e, V))) {
            _d(K, fe, n, X);
            break e;
          }
          (He && He(e, H, V),
            e === 'focusout' &&
              V &&
              H.type === 'number' &&
              V.memoizedProps.value != null &&
              Yu(H, 'number', H.value));
        }
        switch (((He = V ? ct(V) : window), e)) {
          case 'focusin':
            (Dd(He) || He.contentEditable === 'true') &&
              ((Nr = He), (as = V), (Dl = null));
            break;
          case 'focusout':
            Dl = as = Nr = null;
            break;
          case 'mousedown':
            rs = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((rs = !1), qd(K, n, X));
            break;
          case 'selectionchange':
            if (Qy) break;
          case 'keydown':
          case 'keyup':
            qd(K, n, X);
        }
        var be;
        if (Wu)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ce = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ce = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ce = 'onCompositionUpdate';
                break e;
            }
            Ce = void 0;
          }
        else
          zr
            ? Td(e, n) && (Ce = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (Ce = 'onCompositionStart');
        (Ce &&
          (Md &&
            n.locale !== 'ko' &&
            (zr || Ce !== 'onCompositionStart'
              ? Ce === 'onCompositionEnd' && zr && (be = Sd())
              : ((va = X),
                (Qu = 'value' in va ? va.value : va.textContent),
                (zr = !0))),
          (He = ko(V, Ce)),
          0 < He.length &&
            ((Ce = new Ed(Ce, e, null, n, X)),
            K.push({ event: Ce, listeners: He }),
            be
              ? (Ce.data = be)
              : ((be = Ad(n)), be !== null && (Ce.data = be)))),
          (be = Vy ? Hy(e, n) : By(e, n)) &&
            ((Ce = ko(V, 'onBeforeInput')),
            0 < Ce.length &&
              ((He = new Ed('onBeforeInput', 'beforeinput', null, n, X)),
              K.push({ event: He, listeners: Ce }),
              (He.data = be))),
          Db(K, e, V, n, X));
      }
      fm(K, t);
    });
  }
  function ri(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ko(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var s = e,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = wl(e, n)),
          s != null && l.unshift(ri(e, s, c)),
          (s = wl(e, t)),
          s != null && l.push(ri(e, s, c))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function al(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function hm(e, t, n, l, s) {
    for (var c = t._reactName, v = []; n !== null && n !== l; ) {
      var y = n,
        C = y.alternate,
        V = y.stateNode;
      if (((y = y.tag), C !== null && C === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        V === null ||
        ((C = V),
        s
          ? ((V = wl(n, c)), V != null && v.unshift(ri(n, V, C)))
          : s || ((V = wl(n, c)), V != null && v.push(ri(n, V, C)))),
        (n = n.return));
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var Lb = /\r\n?/g,
    kb = /\u0000|\uFFFD/g;
  function pm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Lb,
        `
`
      )
      .replace(kb, '');
  }
  function mm(e, t) {
    return ((t = pm(t)), pm(e) === t);
  }
  function Uo() {}
  function tt(e, t, n, l, s, c) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Ar(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') &&
            t !== 'body' &&
            Ar(e, '' + l);
        break;
      case 'className':
        Kn(e, 'class', l);
        break;
      case 'tabIndex':
        Kn(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Kn(e, n, l);
        break;
      case 'style':
        gd(e, l, c);
        break;
      case 'data':
        if (t !== 'object') {
          Kn(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'symbol' ||
          typeof l == 'boolean'
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = Gi('' + l)), e.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && tt(e, t, 'name', s.name, s, null),
                tt(e, t, 'formEncType', s.formEncType, s, null),
                tt(e, t, 'formMethod', s.formMethod, s, null),
                tt(e, t, 'formTarget', s.formTarget, s, null))
              : (tt(e, t, 'encType', s.encType, s, null),
                tt(e, t, 'method', s.method, s, null),
                tt(e, t, 'target', s.target, s, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = Gi('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Uo);
        break;
      case 'onScroll':
        l != null && qe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && qe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'boolean' ||
          typeof l == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((n = Gi('' + l)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '' + l)
          : e.removeAttribute(n);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 &&
              l != null &&
              typeof l != 'function' &&
              typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null &&
        typeof l != 'function' &&
        typeof l != 'symbol' &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        (qe('beforetoggle', e), qe('toggle', e), Zn(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Ve(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Ve(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Ve(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Ve(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Zn(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== 'o' && n[0] !== 'O') ||
          (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = fy.get(n) || n), Zn(e, n, l));
    }
  }
  function Cc(e, t, n, l, s, c) {
    switch (n) {
      case 'style':
        gd(e, l, c);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Ar(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Ar(e, '' + l);
        break;
      case 'onScroll':
        l != null && qe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && qe('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Uo);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Nn.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((s = n.endsWith('Capture')),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (c = e[ne] || null),
              (c = c != null ? c[n] : null),
              typeof c == 'function' && e.removeEventListener(t, c, s),
              typeof l == 'function')
            ) {
              (typeof c != 'function' &&
                c !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, s));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, '')
                : Zn(e, n, l);
          }
    }
  }
  function Ut(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (qe('error', e), qe('load', e));
        var l = !1,
          s = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var v = n[c];
            if (v != null)
              switch (c) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  s = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, t));
                default:
                  tt(e, t, c, v, n, null);
              }
          }
        (s && tt(e, t, 'srcSet', n.srcSet, n, null),
          l && tt(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        qe('invalid', e);
        var y = (c = v = s = null),
          C = null,
          V = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var X = n[l];
            if (X != null)
              switch (l) {
                case 'name':
                  s = X;
                  break;
                case 'type':
                  v = X;
                  break;
                case 'checked':
                  C = X;
                  break;
                case 'defaultChecked':
                  V = X;
                  break;
                case 'value':
                  c = X;
                  break;
                case 'defaultValue':
                  y = X;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (X != null) throw Error(i(137, t));
                  break;
                default:
                  tt(e, t, l, X, n, null);
              }
          }
        (hd(e, c, y, C, V, v, s, !1), qi(e));
        return;
      case 'select':
        (qe('invalid', e), (l = v = c = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case 'value':
                c = y;
                break;
              case 'defaultValue':
                v = y;
                break;
              case 'multiple':
                l = y;
              default:
                tt(e, t, s, y, n, null);
            }
        ((t = c),
          (n = v),
          (e.multiple = !!l),
          t != null ? Tr(e, !!l, t, !1) : n != null && Tr(e, !!l, n, !0));
        return;
      case 'textarea':
        (qe('invalid', e), (c = s = l = null));
        for (v in n)
          if (n.hasOwnProperty(v) && ((y = n[v]), y != null))
            switch (v) {
              case 'value':
                l = y;
                break;
              case 'defaultValue':
                s = y;
                break;
              case 'children':
                c = y;
                break;
              case 'dangerouslySetInnerHTML':
                if (y != null) throw Error(i(91));
                break;
              default:
                tt(e, t, v, y, n, null);
            }
        (md(e, l, s, c), qi(e));
        return;
      case 'option':
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case 'selected':
                e.selected =
                  l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                tt(e, t, C, l, n, null);
            }
        return;
      case 'dialog':
        (qe('beforetoggle', e),
          qe('toggle', e),
          qe('cancel', e),
          qe('close', e));
        break;
      case 'iframe':
      case 'object':
        qe('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < ai.length; l++) qe(ai[l], e);
        break;
      case 'image':
        (qe('error', e), qe('load', e));
        break;
      case 'details':
        qe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (qe('error', e), qe('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (V in n)
          if (n.hasOwnProperty(V) && ((l = n[V]), l != null))
            switch (V) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, t));
              default:
                tt(e, t, V, l, n, null);
            }
        return;
      default:
        if (Gu(t)) {
          for (X in n)
            n.hasOwnProperty(X) &&
              ((l = n[X]), l !== void 0 && Cc(e, t, X, l, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((l = n[y]), l != null && tt(e, t, y, l, n, null));
  }
  function Ub(e, t, n, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var s = null,
          c = null,
          v = null,
          y = null,
          C = null,
          V = null,
          X = null;
        for (q in n) {
          var K = n[q];
          if (n.hasOwnProperty(q) && K != null)
            switch (q) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                C = K;
              default:
                l.hasOwnProperty(q) || tt(e, t, q, null, l, K);
            }
        }
        for (var H in l) {
          var q = l[H];
          if (((K = n[H]), l.hasOwnProperty(H) && (q != null || K != null)))
            switch (H) {
              case 'type':
                c = q;
                break;
              case 'name':
                s = q;
                break;
              case 'checked':
                V = q;
                break;
              case 'defaultChecked':
                X = q;
                break;
              case 'value':
                v = q;
                break;
              case 'defaultValue':
                y = q;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (q != null) throw Error(i(137, t));
                break;
              default:
                q !== K && tt(e, t, H, q, l, K);
            }
        }
        qu(e, v, y, C, V, X, c, s);
        return;
      case 'select':
        q = v = y = H = null;
        for (c in n)
          if (((C = n[c]), n.hasOwnProperty(c) && C != null))
            switch (c) {
              case 'value':
                break;
              case 'multiple':
                q = C;
              default:
                l.hasOwnProperty(c) || tt(e, t, c, null, l, C);
            }
        for (s in l)
          if (
            ((c = l[s]),
            (C = n[s]),
            l.hasOwnProperty(s) && (c != null || C != null))
          )
            switch (s) {
              case 'value':
                H = c;
                break;
              case 'defaultValue':
                y = c;
                break;
              case 'multiple':
                v = c;
              default:
                c !== C && tt(e, t, s, c, l, C);
            }
        ((t = y),
          (n = v),
          (l = q),
          H != null
            ? Tr(e, !!n, H, !1)
            : !!l != !!n &&
              (t != null ? Tr(e, !!n, t, !0) : Tr(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        q = H = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !l.hasOwnProperty(y))
          )
            switch (y) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                tt(e, t, y, null, l, s);
            }
        for (v in l)
          if (
            ((s = l[v]),
            (c = n[v]),
            l.hasOwnProperty(v) && (s != null || c != null))
          )
            switch (v) {
              case 'value':
                H = s;
                break;
              case 'defaultValue':
                q = s;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== c && tt(e, t, v, s, l, c);
            }
        pd(e, H, q);
        return;
      case 'option':
        for (var _e in n)
          if (
            ((H = n[_e]),
            n.hasOwnProperty(_e) && H != null && !l.hasOwnProperty(_e))
          )
            switch (_e) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                tt(e, t, _e, null, l, H);
            }
        for (C in l)
          if (
            ((H = l[C]),
            (q = n[C]),
            l.hasOwnProperty(C) && H !== q && (H != null || q != null))
          )
            switch (C) {
              case 'selected':
                e.selected =
                  H && typeof H != 'function' && typeof H != 'symbol';
                break;
              default:
                tt(e, t, C, H, l, q);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Re in n)
          ((H = n[Re]),
            n.hasOwnProperty(Re) &&
              H != null &&
              !l.hasOwnProperty(Re) &&
              tt(e, t, Re, null, l, H));
        for (V in l)
          if (
            ((H = l[V]),
            (q = n[V]),
            l.hasOwnProperty(V) && H !== q && (H != null || q != null))
          )
            switch (V) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (H != null) throw Error(i(137, t));
                break;
              default:
                tt(e, t, V, H, l, q);
            }
        return;
      default:
        if (Gu(t)) {
          for (var nt in n)
            ((H = n[nt]),
              n.hasOwnProperty(nt) &&
                H !== void 0 &&
                !l.hasOwnProperty(nt) &&
                Cc(e, t, nt, void 0, l, H));
          for (X in l)
            ((H = l[X]),
              (q = n[X]),
              !l.hasOwnProperty(X) ||
                H === q ||
                (H === void 0 && q === void 0) ||
                Cc(e, t, X, H, l, q));
          return;
        }
    }
    for (var L in n)
      ((H = n[L]),
        n.hasOwnProperty(L) &&
          H != null &&
          !l.hasOwnProperty(L) &&
          tt(e, t, L, null, l, H));
    for (K in l)
      ((H = l[K]),
        (q = n[K]),
        !l.hasOwnProperty(K) ||
          H === q ||
          (H == null && q == null) ||
          tt(e, t, K, H, l, q));
  }
  var Tc = null,
    Ac = null;
  function jo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function gm(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Dc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _c = null;
  function jb() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === _c
        ? !1
        : ((_c = e), !0)
      : ((_c = null), !1);
  }
  var ym = typeof setTimeout == 'function' ? setTimeout : void 0,
    Vb = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    bm = typeof Promise == 'function' ? Promise : void 0,
    Hb =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof bm < 'u'
          ? function (e) {
              return bm.resolve(null).then(e).catch(Bb);
            }
          : ym;
  function Bb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function za(e) {
    return e === 'head';
  }
  function Sm(e, t) {
    var n = t,
      l = 0,
      s = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === '/$')) {
          if (0 < l && 8 > l) {
            n = l;
            var v = e.ownerDocument;
            if ((n & 1 && li(v.documentElement), n & 2 && li(v.body), n & 4))
              for (n = v.head, li(n), v = n.firstChild; v; ) {
                var y = v.nextSibling,
                  C = v.nodeName;
                (v[pe] ||
                  C === 'SCRIPT' ||
                  C === 'STYLE' ||
                  (C === 'LINK' && v.rel.toLowerCase() === 'stylesheet') ||
                  n.removeChild(v),
                  (v = y));
              }
          }
          if (s === 0) {
            (e.removeChild(c), hi(t));
            return;
          }
          s--;
        } else
          n === '$' || n === '$?' || n === '$!'
            ? s++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = c;
    } while (n);
    hi(t);
  }
  function zc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (zc(n), ye(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function qb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[pe])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((c = e.getAttribute('rel')),
                c === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                c !== s.rel ||
                e.getAttribute('href') !==
                  (s.href == null || s.href === '' ? null : s.href) ||
                e.getAttribute('crossorigin') !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute('title') !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((c = e.getAttribute('src')),
                (c !== (s.src == null ? null : s.src) ||
                  e.getAttribute('type') !== (s.type == null ? null : s.type) ||
                  e.getAttribute('crossorigin') !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var c = s.name == null ? null : '' + s.name;
        if (s.type === 'hidden' && e.getAttribute('name') === c) return e;
      } else return e;
      if (((e = Tn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Yb(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = Tn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Nc(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    );
  }
  function Gb(e, t) {
    var n = e.ownerDocument;
    if (e.data !== '$?' || n.readyState === 'complete') t();
    else {
      var l = function () {
        (t(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var Lc = null;
  function xm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function wm(e, t, n) {
    switch (((t = jo(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function li(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ye(e);
  }
  var xn = new Map(),
    Em = new Set();
  function Vo(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ca = I.d;
  I.d = { f: Pb, r: Xb, D: $b, C: Fb, L: Qb, m: Zb, X: Ib, S: Kb, M: Jb };
  function Pb() {
    var e = ca.f(),
      t = Ao();
    return e || t;
  }
  function Xb(e) {
    var t = Ze(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Gh(t) : ca.r(e);
  }
  var rl = typeof document > 'u' ? null : document;
  function Om(e, t, n) {
    var l = rl;
    if (l && typeof t == 'string' && t) {
      var s = pn(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == 'string' && (s += '[crossorigin="' + n + '"]'),
        Em.has(s) ||
          (Em.add(s),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(s) === null &&
            ((t = l.createElement('link')),
            Ut(t, 'link', e),
            Ne(t),
            l.head.appendChild(t))));
    }
  }
  function $b(e) {
    (ca.D(e), Om('dns-prefetch', e, null));
  }
  function Fb(e, t) {
    (ca.C(e, t), Om('preconnect', e, t));
  }
  function Qb(e, t, n) {
    ca.L(e, t, n);
    var l = rl;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + pn(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + pn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' &&
            (s += '[imagesizes="' + pn(n.imageSizes) + '"]'))
        : (s += '[href="' + pn(e) + '"]');
      var c = s;
      switch (t) {
        case 'style':
          c = ll(e);
          break;
        case 'script':
          c = il(e);
      }
      xn.has(c) ||
        ((e = g(
          {
            rel: 'preload',
            href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        xn.set(c, e),
        l.querySelector(s) !== null ||
          (t === 'style' && l.querySelector(ii(c))) ||
          (t === 'script' && l.querySelector(oi(c))) ||
          ((t = l.createElement('link')),
          Ut(t, 'link', e),
          Ne(t),
          l.head.appendChild(t)));
    }
  }
  function Zb(e, t) {
    ca.m(e, t);
    var n = rl;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        s =
          'link[rel="modulepreload"][as="' + pn(l) + '"][href="' + pn(e) + '"]',
        c = s;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          c = il(e);
      }
      if (
        !xn.has(c) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)),
        xn.set(c, e),
        n.querySelector(s) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(oi(c))) return;
        }
        ((l = n.createElement('link')),
          Ut(l, 'link', e),
          Ne(l),
          n.head.appendChild(l));
      }
    }
  }
  function Kb(e, t, n) {
    ca.S(e, t, n);
    var l = rl;
    if (l && e) {
      var s = ft(l).hoistableStyles,
        c = ll(e);
      t = t || 'default';
      var v = s.get(c);
      if (!v) {
        var y = { loading: 0, preload: null };
        if ((v = l.querySelector(ii(c)))) y.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = xn.get(c)) && kc(e, n));
          var C = (v = l.createElement('link'));
          (Ne(C),
            Ut(C, 'link', e),
            (C._p = new Promise(function (V, X) {
              ((C.onload = V), (C.onerror = X));
            })),
            C.addEventListener('load', function () {
              y.loading |= 1;
            }),
            C.addEventListener('error', function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ho(v, t, l));
        }
        ((v = { type: 'stylesheet', instance: v, count: 1, state: y }),
          s.set(c, v));
      }
    }
  }
  function Ib(e, t) {
    ca.X(e, t);
    var n = rl;
    if (n && e) {
      var l = ft(n).hoistableScripts,
        s = il(e),
        c = l.get(s);
      c ||
        ((c = n.querySelector(oi(s))),
        c ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = xn.get(s)) && Uc(e, t),
          (c = n.createElement('script')),
          Ne(c),
          Ut(c, 'link', e),
          n.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        l.set(s, c));
    }
  }
  function Jb(e, t) {
    ca.M(e, t);
    var n = rl;
    if (n && e) {
      var l = ft(n).hoistableScripts,
        s = il(e),
        c = l.get(s);
      c ||
        ((c = n.querySelector(oi(s))),
        c ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = xn.get(s)) && Uc(e, t),
          (c = n.createElement('script')),
          Ne(c),
          Ut(c, 'link', e),
          n.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        l.set(s, c));
    }
  }
  function Mm(e, t, n, l) {
    var s = (s = ie.current) ? Vo(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = ll(n.href)),
            (n = ft(s).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: 'style', instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = ll(n.href);
          var c = ft(s).hoistableStyles,
            v = c.get(e);
          if (
            (v ||
              ((s = s.ownerDocument || s),
              (v = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, v),
              (c = s.querySelector(ii(e))) &&
                !c._p &&
                ((v.instance = c), (v.state.loading = 5)),
              xn.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                xn.set(e, n),
                c || Wb(s, e, n, v.state))),
            t && l === null)
          )
            throw Error(i(528, ''));
          return v;
        }
        if (t && l !== null) throw Error(i(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = il(n)),
              (n = ft(s).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function ll(e) {
    return 'href="' + pn(e) + '"';
  }
  function ii(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Rm(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Wb(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        Ut(t, 'link', n),
        Ne(t),
        e.head.appendChild(t));
  }
  function il(e) {
    return '[src="' + pn(e) + '"]';
  }
  function oi(e) {
    return 'script[async]' + e;
  }
  function Cm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + pn(n.href) + '"]');
          if (l) return ((t.instance = l), Ne(l), l);
          var s = g({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Ne(l),
            Ut(l, 'style', s),
            Ho(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          s = ll(n.href);
          var c = e.querySelector(ii(s));
          if (c) return ((t.state.loading |= 4), (t.instance = c), Ne(c), c);
          ((l = Rm(n)),
            (s = xn.get(s)) && kc(l, s),
            (c = (e.ownerDocument || e).createElement('link')),
            Ne(c));
          var v = c;
          return (
            (v._p = new Promise(function (y, C) {
              ((v.onload = y), (v.onerror = C));
            })),
            Ut(c, 'link', l),
            (t.state.loading |= 4),
            Ho(c, n.precedence, e),
            (t.instance = c)
          );
        case 'script':
          return (
            (c = il(n.src)),
            (s = e.querySelector(oi(c)))
              ? ((t.instance = s), Ne(s), s)
              : ((l = n),
                (s = xn.get(c)) && ((l = g({}, n)), Uc(l, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement('script')),
                Ne(s),
                Ut(s, 'link', l),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Ho(l, n.precedence, e));
    return t.instance;
  }
  function Ho(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = l.length ? l[l.length - 1] : null,
        c = s,
        v = 0;
      v < l.length;
      v++
    ) {
      var y = l[v];
      if (y.dataset.precedence === t) c = y;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function kc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Uc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Bo = null;
  function Tm(e, t, n) {
    if (Bo === null) {
      var l = new Map(),
        s = (Bo = new Map());
      s.set(n, l);
    } else ((s = Bo), (l = s.get(n)), l || ((l = new Map()), s.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var c = n[s];
      if (
        !(
          c[pe] ||
          c[ee] ||
          (e === 'link' && c.getAttribute('rel') === 'stylesheet')
        ) &&
        c.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var v = c.getAttribute(t) || '';
        v = e + v;
        var y = l.get(v);
        y ? y.push(c) : l.set(v, [c]);
      }
    }
    return l;
  }
  function Am(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === 'title' ? e.querySelector('head > title') : null
      ));
  }
  function e1(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled),
              typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Dm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var ui = null;
  function t1() {}
  function n1(e, t, n) {
    if (ui === null) throw Error(i(475));
    var l = ui;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var s = ll(n.href),
          c = e.querySelector(ii(s));
        if (c) {
          ((e = c._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = qo.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = c),
            Ne(c));
          return;
        }
        ((c = e.ownerDocument || e),
          (n = Rm(n)),
          (s = xn.get(s)) && kc(n, s),
          (c = c.createElement('link')),
          Ne(c));
        var v = c;
        ((v._p = new Promise(function (y, C) {
          ((v.onload = y), (v.onerror = C));
        })),
          Ut(c, 'link', n),
          (t.instance = c));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = qo.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function a1() {
    if (ui === null) throw Error(i(475));
    var e = ui;
    return (
      e.stylesheets && e.count === 0 && jc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && jc(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function qo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Yo = null;
  function jc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Yo = new Map()),
        t.forEach(r1, e),
        (Yo = null),
        qo.call(e)));
  }
  function r1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Yo.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Yo.set(e, n));
        for (
          var s = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var v = s[c];
          (v.nodeName === 'LINK' || v.getAttribute('media') !== 'not all') &&
            (n.set(v.dataset.precedence, v), (l = v));
        }
        l && n.set(null, l);
      }
      ((s = t.instance),
        (v = s.getAttribute('data-precedence')),
        (c = n.get(v) || l),
        c === l && n.set(null, s),
        n.set(v, s),
        this.count++,
        (l = qo.bind(this)),
        s.addEventListener('load', l),
        s.addEventListener('error', l),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var si = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function l1(e, t, n, l, s, c, v, y) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Rr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Rr(0)),
      (this.hiddenUpdates = Rr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function _m(e, t, n, l, s, c, v, y, C, V, X, K) {
    return (
      (e = new l1(e, t, n, v, y, C, V, K)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = nn(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = ys()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: l, isDehydrated: n, cache: t }),
      ws(c),
      e
    );
  }
  function zm(e) {
    return e ? ((e = jr), e) : jr;
  }
  function Nm(e, t, n, l, s, c) {
    ((s = zm(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = ba(t)),
      (l.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (n = Sa(e, l, t)),
      n !== null && (un(n, e, t), Hl(n, e, t)));
  }
  function Lm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vc(e, t) {
    (Lm(e, t), (e = e.alternate) && Lm(e, t));
  }
  function km(e) {
    if (e.tag === 13) {
      var t = Ur(e, 67108864);
      (t !== null && un(t, e, 67108864), Vc(e, 67108864));
    }
  }
  var Go = !0;
  function i1(e, t, n, l) {
    var s = N.T;
    N.T = null;
    var c = I.p;
    try {
      ((I.p = 2), Hc(e, t, n, l));
    } finally {
      ((I.p = c), (N.T = s));
    }
  }
  function o1(e, t, n, l) {
    var s = N.T;
    N.T = null;
    var c = I.p;
    try {
      ((I.p = 8), Hc(e, t, n, l));
    } finally {
      ((I.p = c), (N.T = s));
    }
  }
  function Hc(e, t, n, l) {
    if (Go) {
      var s = Bc(l);
      if (s === null) (Rc(e, t, l, Po, n), jm(e, l));
      else if (s1(s, e, t, n, l)) l.stopPropagation();
      else if ((jm(e, l), t & 4 && -1 < u1.indexOf(e))) {
        for (; s !== null; ) {
          var c = Ze(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var v = Fn(c.pendingLanes);
                  if (v !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; v; ) {
                      var C = 1 << (31 - Nt(v));
                      ((y.entanglements[1] |= C), (v &= ~C));
                    }
                    (Vn(c), (Ke & 6) === 0 && ((Co = Yt() + 500), ni(0)));
                  }
                }
                break;
              case 13:
                ((y = Ur(c, 2)), y !== null && un(y, c, 2), Ao(), Vc(c, 2));
            }
          if (((c = Bc(l)), c === null && Rc(e, t, l, Po, n), c === s)) break;
          s = c;
        }
        s !== null && l.stopPropagation();
      } else Rc(e, t, l, null, n);
    }
  }
  function Bc(e) {
    return ((e = Xu(e)), qc(e));
  }
  var Po = null;
  function qc(e) {
    if (((Po = null), (e = ke(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Po = e), null);
  }
  function Um(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch ($n()) {
          case On:
            return 2;
          case Ct:
            return 8;
          case da:
          case Wt:
            return 32;
          case ha:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yc = !1,
    Na = null,
    La = null,
    ka = null,
    ci = new Map(),
    fi = new Map(),
    Ua = [],
    u1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function jm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Na = null;
        break;
      case 'dragenter':
      case 'dragleave':
        La = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ka = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ci.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        fi.delete(t.pointerId);
    }
  }
  function di(e, t, n, l, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = Ze(t)), t !== null && km(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function s1(e, t, n, l, s) {
    switch (t) {
      case 'focusin':
        return ((Na = di(Na, e, t, n, l, s)), !0);
      case 'dragenter':
        return ((La = di(La, e, t, n, l, s)), !0);
      case 'mouseover':
        return ((ka = di(ka, e, t, n, l, s)), !0);
      case 'pointerover':
        var c = s.pointerId;
        return (ci.set(c, di(ci.get(c) || null, e, t, n, l, s)), !0);
      case 'gotpointercapture':
        return (
          (c = s.pointerId),
          fi.set(c, di(fi.get(c) || null, e, t, n, l, s)),
          !0
        );
    }
    return !1;
  }
  function Vm(e) {
    var t = ke(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              k(e.priority, function () {
                if (n.tag === 13) {
                  var l = on();
                  l = Sl(l);
                  var s = Ur(n, l);
                  (s !== null && un(s, n, l), Vc(n, l));
                }
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Pu = l), n.target.dispatchEvent(l), (Pu = null));
      } else return ((t = Ze(n)), t !== null && km(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Hm(e, t, n) {
    Xo(e) && n.delete(t);
  }
  function c1() {
    ((Yc = !1),
      Na !== null && Xo(Na) && (Na = null),
      La !== null && Xo(La) && (La = null),
      ka !== null && Xo(ka) && (ka = null),
      ci.forEach(Hm),
      fi.forEach(Hm));
  }
  function $o(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Yc ||
        ((Yc = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, c1)));
  }
  var Fo = null;
  function Bm(e) {
    Fo !== e &&
      ((Fo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Fo === e && (Fo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            s = e[t + 2];
          if (typeof l != 'function') {
            if (qc(l || n) === null) continue;
            break;
          }
          var c = Ze(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            qs(c, { pending: !0, data: s, method: n.method, action: l }, l, s));
        }
      }));
  }
  function hi(e) {
    function t(C) {
      return $o(C, e);
    }
    (Na !== null && $o(Na, e),
      La !== null && $o(La, e),
      ka !== null && $o(ka, e),
      ci.forEach(t),
      fi.forEach(t));
    for (var n = 0; n < Ua.length; n++) {
      var l = Ua[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ua.length && ((n = Ua[0]), n.blockedOn === null); )
      (Vm(n), n.blockedOn === null && Ua.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var s = n[l],
          c = n[l + 1],
          v = s[ne] || null;
        if (typeof c == 'function') v || Bm(n);
        else if (v) {
          var y = null;
          if (c && c.hasAttribute('formAction')) {
            if (((s = c), (v = c[ne] || null))) y = v.formAction;
            else if (qc(s) !== null) continue;
          } else y = v.action;
          (typeof y == 'function' ? (n[l + 1] = y) : (n.splice(l, 3), (l -= 3)),
            Bm(n));
        }
      }
  }
  function Gc(e) {
    this._internalRoot = e;
  }
  ((Qo.prototype.render = Gc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current,
        l = on();
      Nm(n, l, e, t, null, null);
    }),
    (Qo.prototype.unmount = Gc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Nm(e.current, 2, null, e, null, null), Ao(), (t[de] = null));
        }
      }));
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = D();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ua.length && t !== 0 && t < Ua[n].priority; n++);
      (Ua.splice(n, 0, e), n === 0 && Vm(e));
    }
  };
  var qm = r.version;
  if (qm !== '19.1.1') throw Error(i(527, qm, '19.1.1'));
  I.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (
      (e = d(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var f1 = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber)
      try {
        ((Xt = Zo.inject(f1)), (ot = Zo));
      } catch {}
  }
  return (
    (mi.createRoot = function (e, t) {
      if (!o(e)) throw Error(i(299));
      var n = !1,
        l = '',
        s = ap,
        c = rp,
        v = lp,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (v = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (y = t.unstable_transitionCallbacks)),
        (t = _m(e, 1, !1, null, null, n, l, s, c, v, y, null)),
        (e[de] = t.current),
        Mc(e),
        new Gc(t)
      );
    }),
    (mi.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(i(299));
      var l = !1,
        s = '',
        c = ap,
        v = rp,
        y = lp,
        C = null,
        V = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (v = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (C = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (V = n.formState)),
        (t = _m(e, 1, !0, t, n ?? null, l, s, c, v, y, C, V)),
        (t.context = zm(null)),
        (n = t.current),
        (l = on()),
        (l = Sl(l)),
        (s = ba(l)),
        (s.callback = null),
        Sa(n, s, l),
        (n = l),
        (t.current.lanes = n),
        Ja(t, n),
        Vn(t),
        (e[de] = t.current),
        Mc(e),
        new Qo(t)
      );
    }),
    (mi.version = '19.1.1'),
    mi
  );
}
var Jm;
function x1() {
  if (Jm) return $c.exports;
  Jm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return (a(), ($c.exports = S1()), $c.exports);
}
var w1 = x1();
const Sg = S.createContext({ appName: 'My App' });
function E1({ children: a }) {
  const r = 'SaraBooks',
    u = S.useMemo(() => ({ appName: r }), []);
  return P.jsx(Sg.Provider, { value: u, children: a });
}
const jf = () => S.useContext(Sg);
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var xg = (a) => {
    throw TypeError(a);
  },
  O1 = (a, r, u) => r.has(a) || xg('Cannot ' + u),
  Kc = (a, r, u) => (
    O1(a, r, 'read from private field'),
    u ? u.call(a) : r.get(a)
  ),
  M1 = (a, r, u) =>
    r.has(a)
      ? xg('Cannot add the same private member more than once')
      : r instanceof WeakSet
        ? r.add(a)
        : r.set(a, u),
  Wm = 'popstate';
function R1(a = {}) {
  function r(i, o) {
    let { pathname: f, search: h, hash: m } = i.location;
    return Ei(
      '',
      { pathname: f, search: h, hash: m },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function u(i, o) {
    return typeof o == 'string' ? o : Ya(o);
  }
  return T1(r, u, null, a);
}
function Ue(a, r) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(r);
}
function Et(a, r) {
  if (!a) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function C1() {
  return Math.random().toString(36).substring(2, 10);
}
function ev(a, r) {
  return { usr: a.state, key: a.key, idx: r };
}
function Ei(a, r, u = null, i) {
  return {
    pathname: typeof a == 'string' ? a : a.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Ga(r) : r),
    state: u,
    key: (r && r.key) || i || C1(),
  };
}
function Ya({ pathname: a = '/', search: r = '', hash: u = '' }) {
  return (
    r && r !== '?' && (a += r.charAt(0) === '?' ? r : '?' + r),
    u && u !== '#' && (a += u.charAt(0) === '#' ? u : '#' + u),
    a
  );
}
function Ga(a) {
  let r = {};
  if (a) {
    let u = a.indexOf('#');
    u >= 0 && ((r.hash = a.substring(u)), (a = a.substring(0, u)));
    let i = a.indexOf('?');
    (i >= 0 && ((r.search = a.substring(i)), (a = a.substring(0, i))),
      a && (r.pathname = a));
  }
  return r;
}
function T1(a, r, u, i = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = i,
    h = o.history,
    m = 'POP',
    d = null,
    p = g();
  p == null && ((p = 0), h.replaceState({ ...h.state, idx: p }, ''));
  function g() {
    return (h.state || { idx: null }).idx;
  }
  function b() {
    m = 'POP';
    let R = g(),
      O = R == null ? null : R - p;
    ((p = R), d && d({ action: m, location: T.location, delta: O }));
  }
  function x(R, O) {
    m = 'PUSH';
    let B = Ei(T.location, R, O);
    p = g() + 1;
    let j = ev(B, p),
      J = T.createHref(B);
    try {
      h.pushState(j, '', J);
    } catch (z) {
      if (z instanceof DOMException && z.name === 'DataCloneError') throw z;
      o.location.assign(J);
    }
    f && d && d({ action: m, location: T.location, delta: 1 });
  }
  function M(R, O) {
    m = 'REPLACE';
    let B = Ei(T.location, R, O);
    p = g();
    let j = ev(B, p),
      J = T.createHref(B);
    (h.replaceState(j, '', J),
      f && d && d({ action: m, location: T.location, delta: 0 }));
  }
  function w(R) {
    return wg(R);
  }
  let T = {
    get action() {
      return m;
    },
    get location() {
      return a(o, h);
    },
    listen(R) {
      if (d) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Wm, b),
        (d = R),
        () => {
          (o.removeEventListener(Wm, b), (d = null));
        }
      );
    },
    createHref(R) {
      return r(o, R);
    },
    createURL: w,
    encodeLocation(R) {
      let O = w(R);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: x,
    replace: M,
    go(R) {
      return h.go(R);
    },
  };
  return T;
}
function wg(a, r = !1) {
  let u = 'http://localhost';
  (typeof window < 'u' &&
    (u =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    Ue(u, 'No window.location.(origin|href) available to create URL'));
  let i = typeof a == 'string' ? a : Ya(a);
  return (
    (i = i.replace(/ $/, '%20')),
    !r && i.startsWith('//') && (i = u + i),
    new URL(i, u)
  );
}
var xi,
  tv = class {
    constructor(a) {
      if ((M1(this, xi, new Map()), a)) for (let [r, u] of a) this.set(r, u);
    }
    get(a) {
      if (Kc(this, xi).has(a)) return Kc(this, xi).get(a);
      if (a.defaultValue !== void 0) return a.defaultValue;
      throw new Error('No value found for context');
    }
    set(a, r) {
      Kc(this, xi).set(a, r);
    }
  };
xi = new WeakMap();
var A1 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function D1(a) {
  return A1.has(a);
}
var _1 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
]);
function z1(a) {
  return _1.has(a);
}
function N1(a) {
  return a.index === !0;
}
function Oi(a, r, u = [], i = {}, o = !1) {
  return a.map((f, h) => {
    let m = [...u, String(h)],
      d = typeof f.id == 'string' ? f.id : m.join('-');
    if (
      (Ue(
        f.index !== !0 || !f.children,
        'Cannot specify children on an index route'
      ),
      Ue(
        o || !i[d],
        `Found a route id collision on id "${d}".  Route id's must be globally unique within Data Router usages`
      ),
      N1(f))
    ) {
      let p = { ...f, ...r(f), id: d };
      return ((i[d] = p), p);
    } else {
      let p = { ...f, ...r(f), id: d, children: void 0 };
      return (
        (i[d] = p),
        f.children && (p.children = Oi(f.children, r, m, i, o)),
        p
      );
    }
  });
}
function qa(a, r, u = '/') {
  return ou(a, r, u, !1);
}
function ou(a, r, u, i) {
  let o = typeof r == 'string' ? Ga(r) : r,
    f = En(o.pathname || '/', u);
  if (f == null) return null;
  let h = Eg(a);
  k1(h);
  let m = null;
  for (let d = 0; m == null && d < h.length; ++d) {
    let p = $1(f);
    m = P1(h[d], p, i);
  }
  return m;
}
function L1(a, r) {
  let { route: u, pathname: i, params: o } = a;
  return { id: u.id, pathname: i, params: o, data: r[u.id], handle: u.handle };
}
function Eg(a, r = [], u = [], i = '') {
  let o = (f, h, m) => {
    let d = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    d.relativePath.startsWith('/') &&
      (Ue(
        d.relativePath.startsWith(i),
        `Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (d.relativePath = d.relativePath.slice(i.length)));
    let p = qn([i, d.relativePath]),
      g = u.concat(d);
    (f.children &&
      f.children.length > 0 &&
      (Ue(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      Eg(f.children, r, g, p)),
      !(f.path == null && !f.index) &&
        r.push({ path: p, score: Y1(p, f.index), routesMeta: g }));
  };
  return (
    a.forEach((f, h) => {
      if (f.path === '' || !f.path?.includes('?')) o(f, h);
      else for (let m of Og(f.path)) o(f, h, m);
    }),
    r
  );
}
function Og(a) {
  let r = a.split('/');
  if (r.length === 0) return [];
  let [u, ...i] = r,
    o = u.endsWith('?'),
    f = u.replace(/\?$/, '');
  if (i.length === 0) return o ? [f, ''] : [f];
  let h = Og(i.join('/')),
    m = [];
  return (
    m.push(...h.map((d) => (d === '' ? f : [f, d].join('/')))),
    o && m.push(...h),
    m.map((d) => (a.startsWith('/') && d === '' ? '/' : d))
  );
}
function k1(a) {
  a.sort((r, u) =>
    r.score !== u.score
      ? u.score - r.score
      : G1(
          r.routesMeta.map((i) => i.childrenIndex),
          u.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var U1 = /^:[\w-]+$/,
  j1 = 3,
  V1 = 2,
  H1 = 1,
  B1 = 10,
  q1 = -2,
  nv = (a) => a === '*';
function Y1(a, r) {
  let u = a.split('/'),
    i = u.length;
  return (
    u.some(nv) && (i += q1),
    r && (i += V1),
    u
      .filter((o) => !nv(o))
      .reduce((o, f) => o + (U1.test(f) ? j1 : f === '' ? H1 : B1), i)
  );
}
function G1(a, r) {
  return a.length === r.length && a.slice(0, -1).every((i, o) => i === r[o])
    ? a[a.length - 1] - r[r.length - 1]
    : 0;
}
function P1(a, r, u = !1) {
  let { routesMeta: i } = a,
    o = {},
    f = '/',
    h = [];
  for (let m = 0; m < i.length; ++m) {
    let d = i[m],
      p = m === i.length - 1,
      g = f === '/' ? r : r.slice(f.length) || '/',
      b = vu(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: p },
        g
      ),
      x = d.route;
    if (
      (!b &&
        p &&
        u &&
        !i[i.length - 1].route.index &&
        (b = vu(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
          g
        )),
      !b)
    )
      return null;
    (Object.assign(o, b.params),
      h.push({
        params: o,
        pathname: qn([f, b.pathname]),
        pathnameBase: K1(qn([f, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== '/' && (f = qn([f, b.pathnameBase])));
  }
  return h;
}
function vu(a, r) {
  typeof a == 'string' && (a = { path: a, caseSensitive: !1, end: !0 });
  let [u, i] = X1(a.path, a.caseSensitive, a.end),
    o = r.match(u);
  if (!o) return null;
  let f = o[0],
    h = f.replace(/(.)\/+$/, '$1'),
    m = o.slice(1);
  return {
    params: i.reduce((p, { paramName: g, isOptional: b }, x) => {
      if (g === '*') {
        let w = m[x] || '';
        h = f.slice(0, f.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const M = m[x];
      return (
        b && !M ? (p[g] = void 0) : (p[g] = (M || '').replace(/%2F/g, '/')),
        p
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: a,
  };
}
function X1(a, r = !1, u = !0) {
  Et(
    a === '*' || !a.endsWith('*') || a.endsWith('/*'),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, '/*')}".`
  );
  let i = [],
    o =
      '^' +
      a
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, m, d) => (
            i.push({ paramName: m, isOptional: d != null }),
            d ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    a.endsWith('*')
      ? (i.push({ paramName: '*' }),
        (o += a === '*' || a === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : u
        ? (o += '\\/*$')
        : a !== '' && a !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, r ? void 0 : 'i'), i]
  );
}
function $1(a) {
  try {
    return a
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      Et(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      a
    );
  }
}
function En(a, r) {
  if (r === '/') return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase())) return null;
  let u = r.endsWith('/') ? r.length - 1 : r.length,
    i = a.charAt(u);
  return i && i !== '/' ? null : a.slice(u) || '/';
}
function F1({ basename: a, pathname: r }) {
  return r === '/' ? a : qn([a, r]);
}
function Q1(a, r = '/') {
  let {
    pathname: u,
    search: i = '',
    hash: o = '',
  } = typeof a == 'string' ? Ga(a) : a;
  return {
    pathname: u ? (u.startsWith('/') ? u : Z1(u, r)) : r,
    search: I1(i),
    hash: J1(o),
  };
}
function Z1(a, r) {
  let u = r.replace(/\/+$/, '').split('/');
  return (
    a.split('/').forEach((o) => {
      o === '..' ? u.length > 1 && u.pop() : o !== '.' && u.push(o);
    }),
    u.length > 1 ? u.join('/') : '/'
  );
}
function Ic(a, r, u, i) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Mg(a) {
  return a.filter(
    (r, u) => u === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function Vf(a) {
  let r = Mg(a);
  return r.map((u, i) => (i === r.length - 1 ? u.pathname : u.pathnameBase));
}
function Hf(a, r, u, i = !1) {
  let o;
  typeof a == 'string'
    ? (o = Ga(a))
    : ((o = { ...a }),
      Ue(
        !o.pathname || !o.pathname.includes('?'),
        Ic('?', 'pathname', 'search', o)
      ),
      Ue(
        !o.pathname || !o.pathname.includes('#'),
        Ic('#', 'pathname', 'hash', o)
      ),
      Ue(!o.search || !o.search.includes('#'), Ic('#', 'search', 'hash', o)));
  let f = a === '' || o.pathname === '',
    h = f ? '/' : o.pathname,
    m;
  if (h == null) m = u;
  else {
    let b = r.length - 1;
    if (!i && h.startsWith('..')) {
      let x = h.split('/');
      for (; x[0] === '..'; ) (x.shift(), (b -= 1));
      o.pathname = x.join('/');
    }
    m = b >= 0 ? r[b] : '/';
  }
  let d = Q1(o, m),
    p = h && h !== '/' && h.endsWith('/'),
    g = (f || h === '.') && u.endsWith('/');
  return (!d.pathname.endsWith('/') && (p || g) && (d.pathname += '/'), d);
}
var qn = (a) => a.join('/').replace(/\/\/+/g, '/'),
  K1 = (a) => a.replace(/\/+$/, '').replace(/^\/*/, '/'),
  I1 = (a) => (!a || a === '?' ? '' : a.startsWith('?') ? a : '?' + a),
  J1 = (a) => (!a || a === '#' ? '' : a.startsWith('#') ? a : '#' + a),
  gu = class {
    constructor(a, r, u, i = !1) {
      ((this.status = a),
        (this.statusText = r || ''),
        (this.internal = i),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u));
    }
  };
function Mi(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.internal == 'boolean' &&
    'data' in a
  );
}
var Rg = ['POST', 'PUT', 'PATCH', 'DELETE'],
  W1 = new Set(Rg),
  eS = ['GET', ...Rg],
  tS = new Set(eS),
  nS = new Set([301, 302, 303, 307, 308]),
  aS = new Set([307, 308]),
  Jc = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rS = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  vi = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  lS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bf = (a) => lS.test(a),
  iS = (a) => ({ hasErrorBoundary: !!a.hasErrorBoundary }),
  Cg = 'remix-router-transitions',
  Tg = Symbol('ResetLoaderData');
function oS(a) {
  const r = a.window ? a.window : typeof window < 'u' ? window : void 0,
    u =
      typeof r < 'u' &&
      typeof r.document < 'u' &&
      typeof r.document.createElement < 'u';
  Ue(
    a.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i = a.hydrationRouteProperties || [],
    o = a.mapRouteProperties || iS,
    f = {},
    h = Oi(a.routes, o, void 0, f),
    m,
    d = a.basename || '/',
    p = a.dataStrategy || dS,
    g = { unstable_middleware: !1, ...a.future },
    b = null,
    x = new Set(),
    M = null,
    w = null,
    T = null,
    R = a.hydrationData != null,
    O = qa(h, a.history.location, d),
    B = !1,
    j = null,
    J;
  if (O == null && !a.patchRoutesOnNavigation) {
    let D = wn(404, { pathname: a.history.location.pathname }),
      { matches: k, route: G } = pv(h);
    ((J = !0), (O = k), (j = { [G.id]: D }));
  } else if (
    (O &&
      !a.hydrationData &&
      Wa(O, h, a.history.location.pathname).active &&
      (O = null),
    O)
  )
    if (O.some((D) => D.route.lazy)) J = !1;
    else if (!O.some((D) => D.route.loader)) J = !0;
    else {
      let D = a.hydrationData ? a.hydrationData.loaderData : null,
        k = a.hydrationData ? a.hydrationData.errors : null;
      if (k) {
        let G = O.findIndex((ee) => k[ee.route.id] !== void 0);
        J = O.slice(0, G + 1).every((ee) => !bf(ee.route, D, k));
      } else J = O.every((G) => !bf(G.route, D, k));
    }
  else {
    ((J = !1), (O = []));
    let D = Wa(null, h, a.history.location.pathname);
    D.active && D.matches && ((B = !0), (O = D.matches));
  }
  let z,
    A = {
      historyAction: a.history.action,
      location: a.history.location,
      matches: O,
      initialized: J,
      navigation: Jc,
      restoreScrollPosition: a.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
      actionData: (a.hydrationData && a.hydrationData.actionData) || null,
      errors: (a.hydrationData && a.hydrationData.errors) || j,
      fetchers: new Map(),
      blockers: new Map(),
    },
    Z = 'POP',
    te = !1,
    re,
    we = !1,
    De = new Map(),
    Ee = null,
    me = !1,
    le = !1,
    oe = new Set(),
    N = new Map(),
    I = 0,
    Q = -1,
    ve = new Map(),
    E = new Set(),
    Y = new Map(),
    $ = new Map(),
    W = new Set(),
    ae = new Map(),
    ce,
    ie = null;
  function ze() {
    if (
      ((b = a.history.listen(({ action: D, location: k, delta: G }) => {
        if (ce) {
          (ce(), (ce = void 0));
          return;
        }
        Et(
          ae.size === 0 || G != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let ee = Ui({
          currentLocation: A.location,
          nextLocation: k,
          historyAction: D,
        });
        if (ee && G != null) {
          let ne = new Promise((de) => {
            ce = de;
          });
          (a.history.go(G * -1),
            zn(ee, {
              state: 'blocked',
              location: k,
              proceed() {
                (zn(ee, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  ne.then(() => a.history.go(G)));
              },
              reset() {
                let de = new Map(A.blockers);
                (de.set(ee, vi), at({ blockers: de }));
              },
            }));
          return;
        }
        return Ot(D, k);
      })),
      u)
    ) {
      ES(r, De);
      let D = () => OS(r, De);
      (r.addEventListener('pagehide', D),
        (Ee = () => r.removeEventListener('pagehide', D)));
    }
    return (
      A.initialized || Ot('POP', A.location, { initialHydration: !0 }),
      z
    );
  }
  function Ae() {
    (b && b(),
      Ee && Ee(),
      x.clear(),
      re && re.abort(),
      A.fetchers.forEach((D, k) => Nt(k)),
      A.blockers.forEach((D, k) => Ia(k)));
  }
  function Je(D) {
    return (x.add(D), () => x.delete(D));
  }
  function at(D, k = {}) {
    (D.matches &&
      (D.matches = D.matches.map((ne) => {
        let de = f[ne.route.id],
          ge = ne.route;
        return ge.element !== de.element ||
          ge.errorElement !== de.errorElement ||
          ge.hydrateFallbackElement !== de.hydrateFallbackElement
          ? { ...ne, route: de }
          : ne;
      })),
      (A = { ...A, ...D }));
    let G = [],
      ee = [];
    (A.fetchers.forEach((ne, de) => {
      ne.state === 'idle' && (W.has(de) ? G.push(de) : ee.push(de));
    }),
      W.forEach((ne) => {
        !A.fetchers.has(ne) && !N.has(ne) && G.push(ne);
      }),
      [...x].forEach((ne) =>
        ne(A, {
          deletedFetchers: G,
          viewTransitionOpts: k.viewTransitionOpts,
          flushSync: k.flushSync === !0,
        })
      ),
      G.forEach((ne) => Nt(ne)),
      ee.forEach((ne) => A.fetchers.delete(ne)));
  }
  function vt(D, k, { flushSync: G } = {}) {
    let ee =
        A.actionData != null &&
        A.navigation.formMethod != null &&
        Kt(A.navigation.formMethod) &&
        A.navigation.state === 'loading' &&
        D.state?._isRedirect !== !0,
      ne;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (ne = k.actionData)
        : (ne = null)
      : ee
        ? (ne = A.actionData)
        : (ne = null);
    let de = k.loaderData
        ? dv(A.loaderData, k.loaderData, k.matches || [], k.errors)
        : A.loaderData,
      ge = A.blockers;
    ge.size > 0 && ((ge = new Map(ge)), ge.forEach((pe, ye) => ge.set(ye, vi)));
    let he = me ? !1 : Vi(D, k.matches || A.matches),
      Se =
        te === !0 ||
        (A.navigation.formMethod != null &&
          Kt(A.navigation.formMethod) &&
          D.state?._isRedirect !== !0);
    (m && ((h = m), (m = void 0)),
      me ||
        Z === 'POP' ||
        (Z === 'PUSH'
          ? a.history.push(D, D.state)
          : Z === 'REPLACE' && a.history.replace(D, D.state)));
    let Me;
    if (Z === 'POP') {
      let pe = De.get(A.location.pathname);
      pe && pe.has(D.pathname)
        ? (Me = { currentLocation: A.location, nextLocation: D })
        : De.has(D.pathname) &&
          (Me = { currentLocation: D, nextLocation: A.location });
    } else if (we) {
      let pe = De.get(A.location.pathname);
      (pe
        ? pe.add(D.pathname)
        : ((pe = new Set([D.pathname])), De.set(A.location.pathname, pe)),
        (Me = { currentLocation: A.location, nextLocation: D }));
    }
    (at(
      {
        ...k,
        actionData: ne,
        loaderData: de,
        historyAction: Z,
        location: D,
        initialized: !0,
        navigation: Jc,
        revalidation: 'idle',
        restoreScrollPosition: he,
        preventScrollReset: Se,
        blockers: ge,
      },
      { viewTransitionOpts: Me, flushSync: G === !0 }
    ),
      (Z = 'POP'),
      (te = !1),
      (we = !1),
      (me = !1),
      (le = !1),
      ie?.resolve(),
      (ie = null));
  }
  async function qt(D, k) {
    if (typeof D == 'number') {
      a.history.go(D);
      return;
    }
    let G = yf(A.location, A.matches, d, D, k?.fromRouteId, k?.relative),
      { path: ee, submission: ne, error: de } = av(!1, G, k),
      ge = A.location,
      he = Ei(A.location, ee, k && k.state);
    he = { ...he, ...a.history.encodeLocation(he) };
    let Se = k && k.replace != null ? k.replace : void 0,
      Me = 'PUSH';
    Se === !0
      ? (Me = 'REPLACE')
      : Se === !1 ||
        (ne != null &&
          Kt(ne.formMethod) &&
          ne.formAction === A.location.pathname + A.location.search &&
          (Me = 'REPLACE'));
    let pe =
        k && 'preventScrollReset' in k ? k.preventScrollReset === !0 : void 0,
      ye = (k && k.flushSync) === !0,
      ke = Ui({ currentLocation: ge, nextLocation: he, historyAction: Me });
    if (ke) {
      zn(ke, {
        state: 'blocked',
        location: he,
        proceed() {
          (zn(ke, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: he,
          }),
            qt(D, k));
        },
        reset() {
          let Ze = new Map(A.blockers);
          (Ze.set(ke, vi), at({ blockers: Ze }));
        },
      });
      return;
    }
    await Ot(Me, he, {
      submission: ne,
      pendingError: de,
      preventScrollReset: pe,
      replace: k && k.replace,
      enableViewTransition: k && k.viewTransition,
      flushSync: ye,
    });
  }
  function Jt() {
    (ie || (ie = MS()), bl(), at({ revalidation: 'loading' }));
    let D = ie.promise;
    return A.navigation.state === 'submitting'
      ? D
      : A.navigation.state === 'idle'
        ? (Ot(A.historyAction, A.location, {
            startUninterruptedRevalidation: !0,
          }),
          D)
        : (Ot(Z || A.historyAction, A.navigation.location, {
            overrideNavigation: A.navigation,
            enableViewTransition: we === !0,
          }),
          D);
  }
  async function Ot(D, k, G) {
    (re && re.abort(),
      (re = null),
      (Z = D),
      (me = (G && G.startUninterruptedRevalidation) === !0),
      Ja(A.location, A.matches),
      (te = (G && G.preventScrollReset) === !0),
      (we = (G && G.enableViewTransition) === !0));
    let ee = m || h,
      ne = G && G.overrideNavigation,
      de =
        G?.initialHydration && A.matches && A.matches.length > 0 && !B
          ? A.matches
          : qa(ee, k, d),
      ge = (G && G.flushSync) === !0;
    if (
      de &&
      A.initialized &&
      !le &&
      yS(A.location, k) &&
      !(G && G.submission && Kt(G.submission.formMethod))
    ) {
      vt(k, { matches: de }, { flushSync: ge });
      return;
    }
    let he = Wa(de, ee, k.pathname);
    if ((he.active && he.matches && (de = he.matches), !de)) {
      let { error: ft, notFoundMatches: Ne, route: We } = Mr(k.pathname);
      vt(
        k,
        { matches: Ne, loaderData: {}, errors: { [We.id]: ft } },
        { flushSync: ge }
      );
      return;
    }
    re = new AbortController();
    let Se = sl(a.history, k, re.signal, G && G.submission),
      Me = new tv(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      pe;
    if (G && G.pendingError)
      pe = [Sr(de).route.id, { type: 'error', error: G.pendingError }];
    else if (G && G.submission && Kt(G.submission.formMethod)) {
      let ft = await Xn(
        Se,
        k,
        G.submission,
        de,
        Me,
        he.active,
        G && G.initialHydration === !0,
        { replace: G.replace, flushSync: ge }
      );
      if (ft.shortCircuited) return;
      if (ft.pendingActionResult) {
        let [Ne, We] = ft.pendingActionResult;
        if (sn(We) && Mi(We.error) && We.error.status === 404) {
          ((re = null),
            vt(k, {
              matches: ft.matches,
              loaderData: {},
              errors: { [Ne]: We.error },
            }));
          return;
        }
      }
      ((de = ft.matches || de),
        (pe = ft.pendingActionResult),
        (ne = Wc(k, G.submission)),
        (ge = !1),
        (he.active = !1),
        (Se = sl(a.history, Se.url, Se.signal)));
    }
    let {
      shortCircuited: ye,
      matches: ke,
      loaderData: Ze,
      errors: ct,
    } = await yl(
      Se,
      k,
      de,
      Me,
      he.active,
      ne,
      G && G.submission,
      G && G.fetcherSubmission,
      G && G.replace,
      G && G.initialHydration === !0,
      ge,
      pe
    );
    ye ||
      ((re = null),
      vt(k, { matches: ke || de, ...hv(pe), loaderData: Ze, errors: ct }));
  }
  async function Xn(D, k, G, ee, ne, de, ge, he = {}) {
    bl();
    let Se = xS(k, G);
    if ((at({ navigation: Se }, { flushSync: he.flushSync === !0 }), de)) {
      let ye = await er(ee, k.pathname, D.signal);
      if (ye.type === 'aborted') return { shortCircuited: !0 };
      if (ye.type === 'error') {
        let ke = Sr(ye.partialMatches).route.id;
        return {
          matches: ye.partialMatches,
          pendingActionResult: [ke, { type: 'error', error: ye.error }],
        };
      } else if (ye.matches) ee = ye.matches;
      else {
        let { notFoundMatches: ke, error: Ze, route: ct } = Mr(k.pathname);
        return {
          matches: ke,
          pendingActionResult: [ct.id, { type: 'error', error: Ze }],
        };
      }
    }
    let Me,
      pe = uu(ee, k);
    if (!pe.route.action && !pe.route.lazy)
      Me = {
        type: 'error',
        error: wn(405, {
          method: D.method,
          pathname: k.pathname,
          routeId: pe.route.id,
        }),
      };
    else {
      let ye = fl(o, f, D, ee, pe, ge ? [] : i, ne),
        ke = await ha(D, ye, ne, null);
      if (((Me = ke[pe.route.id]), !Me)) {
        for (let Ze of ee)
          if (ke[Ze.route.id]) {
            Me = ke[Ze.route.id];
            break;
          }
      }
      if (D.signal.aborted) return { shortCircuited: !0 };
    }
    if (xr(Me)) {
      let ye;
      return (
        he && he.replace != null
          ? (ye = he.replace)
          : (ye =
              sv(Me.response.headers.get('Location'), new URL(D.url), d) ===
              A.location.pathname + A.location.search),
        await Wt(D, Me, !0, { submission: G, replace: ye }),
        { shortCircuited: !0 }
      );
    }
    if (sn(Me)) {
      let ye = Sr(ee, pe.route.id);
      return (
        (he && he.replace) !== !0 && (Z = 'PUSH'),
        { matches: ee, pendingActionResult: [ye.route.id, Me, pe.route.id] }
      );
    }
    return { matches: ee, pendingActionResult: [pe.route.id, Me] };
  }
  async function yl(D, k, G, ee, ne, de, ge, he, Se, Me, pe, ye) {
    let ke = de || Wc(k, ge),
      Ze = ge || he || vv(ke),
      ct = !me && !Me;
    if (ne) {
      if (ct) {
        let bt = Yt(ye);
        at(
          { navigation: ke, ...(bt !== void 0 ? { actionData: bt } : {}) },
          { flushSync: pe }
        );
      }
      let Ve = await er(G, k.pathname, D.signal);
      if (Ve.type === 'aborted') return { shortCircuited: !0 };
      if (Ve.type === 'error') {
        let bt = Sr(Ve.partialMatches).route.id;
        return {
          matches: Ve.partialMatches,
          loaderData: {},
          errors: { [bt]: Ve.error },
        };
      } else if (Ve.matches) G = Ve.matches;
      else {
        let { error: bt, notFoundMatches: tr, route: dn } = Mr(k.pathname);
        return { matches: tr, loaderData: {}, errors: { [dn.id]: bt } };
      }
    }
    let ft = m || h,
      { dsMatches: Ne, revalidatingFetchers: We } = rv(
        D,
        ee,
        o,
        f,
        a.history,
        A,
        G,
        Ze,
        k,
        Me ? [] : i,
        Me === !0,
        le,
        oe,
        W,
        Y,
        E,
        ft,
        d,
        a.patchRoutesOnNavigation != null,
        ye
      );
    if (
      ((Q = ++I),
      !a.dataStrategy && !Ne.some((Ve) => Ve.shouldLoad) && We.length === 0)
    ) {
      let Ve = Za();
      return (
        vt(
          k,
          {
            matches: G,
            loaderData: {},
            errors: ye && sn(ye[1]) ? { [ye[0]]: ye[1].error } : null,
            ...hv(ye),
            ...(Ve ? { fetchers: new Map(A.fetchers) } : {}),
          },
          { flushSync: pe }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ct) {
      let Ve = {};
      if (!ne) {
        Ve.navigation = ke;
        let bt = Yt(ye);
        bt !== void 0 && (Ve.actionData = bt);
      }
      (We.length > 0 && (Ve.fetchers = $n(We)), at(Ve, { flushSync: pe }));
    }
    We.forEach((Ve) => {
      (_n(Ve.key), Ve.controller && N.set(Ve.key, Ve.controller));
    });
    let Nn = () => We.forEach((Ve) => _n(Ve.key));
    re && re.signal.addEventListener('abort', Nn);
    let { loaderResults: en, fetcherResults: Gt } = await Li(Ne, We, D, ee);
    if (D.signal.aborted) return { shortCircuited: !0 };
    (re && re.signal.removeEventListener('abort', Nn),
      We.forEach((Ve) => N.delete(Ve.key)));
    let fn = Ko(en);
    if (fn)
      return (
        await Wt(D, fn.result, !0, { replace: Se }),
        { shortCircuited: !0 }
      );
    if (((fn = Ko(Gt)), fn))
      return (
        E.add(fn.key),
        await Wt(D, fn.result, !0, { replace: Se }),
        { shortCircuited: !0 }
      );
    let { loaderData: Cr, errors: pa } = fv(A, G, en, ye, We, Gt);
    Me && A.errors && (pa = { ...A.errors, ...pa });
    let Qn = Za(),
      Zn = Ka(Q),
      Kn = Qn || Zn || We.length > 0;
    return {
      matches: G,
      loaderData: Cr,
      errors: pa,
      ...(Kn ? { fetchers: new Map(A.fetchers) } : {}),
    };
  }
  function Yt(D) {
    if (D && !sn(D[1])) return { [D[0]]: D[1].data };
    if (A.actionData)
      return Object.keys(A.actionData).length === 0 ? null : A.actionData;
  }
  function $n(D) {
    return (
      D.forEach((k) => {
        let G = A.fetchers.get(k.key),
          ee = gi(void 0, G ? G.data : void 0);
        A.fetchers.set(k.key, ee);
      }),
      new Map(A.fetchers)
    );
  }
  async function On(D, k, G, ee) {
    _n(D);
    let ne = (ee && ee.flushSync) === !0,
      de = m || h,
      ge = yf(A.location, A.matches, d, G, k, ee?.relative),
      he = qa(de, ge, d),
      Se = Wa(he, de, ge);
    if ((Se.active && Se.matches && (he = Se.matches), !he)) {
      ot(D, k, wn(404, { pathname: ge }), { flushSync: ne });
      return;
    }
    let { path: Me, submission: pe, error: ye } = av(!0, ge, ee);
    if (ye) {
      ot(D, k, ye, { flushSync: ne });
      return;
    }
    let ke = new tv(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      Ze = (ee && ee.preventScrollReset) === !0;
    if (pe && Kt(pe.formMethod)) {
      await Ct(D, k, Me, he, ke, Se.active, ne, Ze, pe);
      return;
    }
    (Y.set(D, { routeId: k, path: Me }),
      await da(D, k, Me, he, ke, Se.active, ne, Ze, pe));
  }
  async function Ct(D, k, G, ee, ne, de, ge, he, Se) {
    (bl(), Y.delete(D));
    let Me = A.fetchers.get(D);
    Xt(D, wS(Se, Me), { flushSync: ge });
    let pe = new AbortController(),
      ye = sl(a.history, G, pe.signal, Se);
    if (de) {
      let ut = await er(ee, new URL(ye.url).pathname, ye.signal, D);
      if (ut.type === 'aborted') return;
      if (ut.type === 'error') {
        ot(D, k, ut.error, { flushSync: ge });
        return;
      } else if (ut.matches) ee = ut.matches;
      else {
        ot(D, k, wn(404, { pathname: G }), { flushSync: ge });
        return;
      }
    }
    let ke = uu(ee, G);
    if (!ke.route.action && !ke.route.lazy) {
      let ut = wn(405, { method: Se.formMethod, pathname: G, routeId: k });
      ot(D, k, ut, { flushSync: ge });
      return;
    }
    N.set(D, pe);
    let Ze = I,
      ct = fl(o, f, ye, ee, ke, i, ne),
      Ne = (await ha(ye, ct, ne, D))[ke.route.id];
    if (ye.signal.aborted) {
      N.get(D) === pe && N.delete(D);
      return;
    }
    if (W.has(D)) {
      if (xr(Ne) || sn(Ne)) {
        Xt(D, Ha(void 0));
        return;
      }
    } else {
      if (xr(Ne))
        if ((N.delete(D), Q > Ze)) {
          Xt(D, Ha(void 0));
          return;
        } else
          return (
            E.add(D),
            Xt(D, gi(Se)),
            Wt(ye, Ne, !1, { fetcherSubmission: Se, preventScrollReset: he })
          );
      if (sn(Ne)) {
        ot(D, k, Ne.error);
        return;
      }
    }
    let We = A.navigation.location || A.location,
      Nn = sl(a.history, We, pe.signal),
      en = m || h,
      Gt =
        A.navigation.state !== 'idle'
          ? qa(en, A.navigation.location, d)
          : A.matches;
    Ue(Gt, "Didn't find any matches after fetcher action");
    let fn = ++I;
    ve.set(D, fn);
    let Cr = gi(Se, Ne.data);
    A.fetchers.set(D, Cr);
    let { dsMatches: pa, revalidatingFetchers: Qn } = rv(
      Nn,
      ne,
      o,
      f,
      a.history,
      A,
      Gt,
      Se,
      We,
      i,
      !1,
      le,
      oe,
      W,
      Y,
      E,
      en,
      d,
      a.patchRoutesOnNavigation != null,
      [ke.route.id, Ne]
    );
    (Qn.filter((ut) => ut.key !== D).forEach((ut) => {
      let ma = ut.key,
        Hi = A.fetchers.get(ma),
        Bi = gi(void 0, Hi ? Hi.data : void 0);
      (A.fetchers.set(ma, Bi),
        _n(ma),
        ut.controller && N.set(ma, ut.controller));
    }),
      at({ fetchers: new Map(A.fetchers) }));
    let Zn = () => Qn.forEach((ut) => _n(ut.key));
    pe.signal.addEventListener('abort', Zn);
    let { loaderResults: Kn, fetcherResults: Ve } = await Li(pa, Qn, Nn, ne);
    if (pe.signal.aborted) return;
    if (
      (pe.signal.removeEventListener('abort', Zn),
      ve.delete(D),
      N.delete(D),
      Qn.forEach((ut) => N.delete(ut.key)),
      A.fetchers.has(D))
    ) {
      let ut = Ha(Ne.data);
      A.fetchers.set(D, ut);
    }
    let bt = Ko(Kn);
    if (bt) return Wt(Nn, bt.result, !1, { preventScrollReset: he });
    if (((bt = Ko(Ve)), bt))
      return (E.add(bt.key), Wt(Nn, bt.result, !1, { preventScrollReset: he }));
    let { loaderData: tr, errors: dn } = fv(A, Gt, Kn, void 0, Qn, Ve);
    (Ka(fn),
      A.navigation.state === 'loading' && fn > Q
        ? (Ue(Z, 'Expected pending action'),
          re && re.abort(),
          vt(A.navigation.location, {
            matches: Gt,
            loaderData: tr,
            errors: dn,
            fetchers: new Map(A.fetchers),
          }))
        : (at({
            errors: dn,
            loaderData: dv(A.loaderData, tr, Gt, dn),
            fetchers: new Map(A.fetchers),
          }),
          (le = !1)));
  }
  async function da(D, k, G, ee, ne, de, ge, he, Se) {
    let Me = A.fetchers.get(D);
    Xt(D, gi(Se, Me ? Me.data : void 0), { flushSync: ge });
    let pe = new AbortController(),
      ye = sl(a.history, G, pe.signal);
    if (de) {
      let We = await er(ee, new URL(ye.url).pathname, ye.signal, D);
      if (We.type === 'aborted') return;
      if (We.type === 'error') {
        ot(D, k, We.error, { flushSync: ge });
        return;
      } else if (We.matches) ee = We.matches;
      else {
        ot(D, k, wn(404, { pathname: G }), { flushSync: ge });
        return;
      }
    }
    let ke = uu(ee, G);
    N.set(D, pe);
    let Ze = I,
      ct = fl(o, f, ye, ee, ke, i, ne),
      Ne = (await ha(ye, ct, ne, D))[ke.route.id];
    if ((N.get(D) === pe && N.delete(D), !ye.signal.aborted)) {
      if (W.has(D)) {
        Xt(D, Ha(void 0));
        return;
      }
      if (xr(Ne))
        if (Q > Ze) {
          Xt(D, Ha(void 0));
          return;
        } else {
          (E.add(D), await Wt(ye, Ne, !1, { preventScrollReset: he }));
          return;
        }
      if (sn(Ne)) {
        ot(D, k, Ne.error);
        return;
      }
      Xt(D, Ha(Ne.data));
    }
  }
  async function Wt(
    D,
    k,
    G,
    {
      submission: ee,
      fetcherSubmission: ne,
      preventScrollReset: de,
      replace: ge,
    } = {}
  ) {
    k.response.headers.has('X-Remix-Revalidate') && (le = !0);
    let he = k.response.headers.get('Location');
    (Ue(he, 'Expected a Location header on the redirect Response'),
      (he = sv(he, new URL(D.url), d)));
    let Se = Ei(A.location, he, { _isRedirect: !0 });
    if (u) {
      let ct = !1;
      if (k.response.headers.has('X-Remix-Reload-Document')) ct = !0;
      else if (Bf(he)) {
        const ft = wg(he, !0);
        ct = ft.origin !== r.location.origin || En(ft.pathname, d) == null;
      }
      if (ct) {
        ge ? r.location.replace(he) : r.location.assign(he);
        return;
      }
    }
    re = null;
    let Me =
        ge === !0 || k.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      { formMethod: pe, formAction: ye, formEncType: ke } = A.navigation;
    !ee && !ne && pe && ye && ke && (ee = vv(A.navigation));
    let Ze = ee || ne;
    if (aS.has(k.response.status) && Ze && Kt(Ze.formMethod))
      await Ot(Me, Se, {
        submission: { ...Ze, formAction: he },
        preventScrollReset: de || te,
        enableViewTransition: G ? we : void 0,
      });
    else {
      let ct = Wc(Se, ee);
      await Ot(Me, Se, {
        overrideNavigation: ct,
        fetcherSubmission: ne,
        preventScrollReset: de || te,
        enableViewTransition: G ? we : void 0,
      });
    }
  }
  async function ha(D, k, G, ee) {
    let ne,
      de = {};
    try {
      ne = await hS(p, D, k, ee, G, !1);
    } catch (ge) {
      return (
        k
          .filter((he) => he.shouldLoad)
          .forEach((he) => {
            de[he.route.id] = { type: 'error', error: ge };
          }),
        de
      );
    }
    if (D.signal.aborted) return de;
    for (let [ge, he] of Object.entries(ne))
      if (bS(he)) {
        let Se = he.result;
        de[ge] = { type: 'redirect', response: vS(Se, D, ge, k, d) };
      } else de[ge] = await mS(he);
    return de;
  }
  async function Li(D, k, G, ee) {
    let ne = ha(G, D, ee, null),
      de = Promise.all(
        k.map(async (Se) => {
          if (Se.matches && Se.match && Se.request && Se.controller) {
            let pe = (await ha(Se.request, Se.matches, ee, Se.key))[
              Se.match.route.id
            ];
            return { [Se.key]: pe };
          } else
            return Promise.resolve({
              [Se.key]: {
                type: 'error',
                error: wn(404, { pathname: Se.path }),
              },
            });
        })
      ),
      ge = await ne,
      he = (await de).reduce((Se, Me) => Object.assign(Se, Me), {});
    return { loaderResults: ge, fetcherResults: he };
  }
  function bl() {
    ((le = !0),
      Y.forEach((D, k) => {
        (N.has(k) && oe.add(k), _n(k));
      }));
  }
  function Xt(D, k, G = {}) {
    (A.fetchers.set(D, k),
      at(
        { fetchers: new Map(A.fetchers) },
        { flushSync: (G && G.flushSync) === !0 }
      ));
  }
  function ot(D, k, G, ee = {}) {
    let ne = Sr(A.matches, k);
    (Nt(D),
      at(
        { errors: { [ne.route.id]: G }, fetchers: new Map(A.fetchers) },
        { flushSync: (ee && ee.flushSync) === !0 }
      ));
  }
  function Mn(D) {
    return (
      $.set(D, ($.get(D) || 0) + 1),
      W.has(D) && W.delete(D),
      A.fetchers.get(D) || rS
    );
  }
  function Nt(D) {
    let k = A.fetchers.get(D);
    (N.has(D) && !(k && k.state === 'loading' && ve.has(D)) && _n(D),
      Y.delete(D),
      ve.delete(D),
      E.delete(D),
      W.delete(D),
      oe.delete(D),
      A.fetchers.delete(D));
  }
  function Bu(D) {
    let k = ($.get(D) || 0) - 1;
    (k <= 0 ? ($.delete(D), W.add(D)) : $.set(D, k),
      at({ fetchers: new Map(A.fetchers) }));
  }
  function _n(D) {
    let k = N.get(D);
    k && (k.abort(), N.delete(D));
  }
  function ki(D) {
    for (let k of D) {
      let G = Mn(k),
        ee = Ha(G.data);
      A.fetchers.set(k, ee);
    }
  }
  function Za() {
    let D = [],
      k = !1;
    for (let G of E) {
      let ee = A.fetchers.get(G);
      (Ue(ee, `Expected fetcher: ${G}`),
        ee.state === 'loading' && (E.delete(G), D.push(G), (k = !0)));
    }
    return (ki(D), k);
  }
  function Ka(D) {
    let k = [];
    for (let [G, ee] of ve)
      if (ee < D) {
        let ne = A.fetchers.get(G);
        (Ue(ne, `Expected fetcher: ${G}`),
          ne.state === 'loading' && (_n(G), ve.delete(G), k.push(G)));
      }
    return (ki(k), k.length > 0);
  }
  function Fn(D, k) {
    let G = A.blockers.get(D) || vi;
    return (ae.get(D) !== k && ae.set(D, k), G);
  }
  function Ia(D) {
    (A.blockers.delete(D), ae.delete(D));
  }
  function zn(D, k) {
    let G = A.blockers.get(D) || vi;
    Ue(
      (G.state === 'unblocked' && k.state === 'blocked') ||
        (G.state === 'blocked' && k.state === 'blocked') ||
        (G.state === 'blocked' && k.state === 'proceeding') ||
        (G.state === 'blocked' && k.state === 'unblocked') ||
        (G.state === 'proceeding' && k.state === 'unblocked'),
      `Invalid blocker state transition: ${G.state} -> ${k.state}`
    );
    let ee = new Map(A.blockers);
    (ee.set(D, k), at({ blockers: ee }));
  }
  function Ui({ currentLocation: D, nextLocation: k, historyAction: G }) {
    if (ae.size === 0) return;
    ae.size > 1 && Et(!1, 'A router only supports one blocker at a time');
    let ee = Array.from(ae.entries()),
      [ne, de] = ee[ee.length - 1],
      ge = A.blockers.get(ne);
    if (
      !(ge && ge.state === 'proceeding') &&
      de({ currentLocation: D, nextLocation: k, historyAction: G })
    )
      return ne;
  }
  function Mr(D) {
    let k = wn(404, { pathname: D }),
      G = m || h,
      { matches: ee, route: ne } = pv(G);
    return { notFoundMatches: ee, route: ne, error: k };
  }
  function ji(D, k, G) {
    if (((M = D), (T = k), (w = G || null), !R && A.navigation === Jc)) {
      R = !0;
      let ee = Vi(A.location, A.matches);
      ee != null && at({ restoreScrollPosition: ee });
    }
    return () => {
      ((M = null), (T = null), (w = null));
    };
  }
  function Rr(D, k) {
    return (
      (w &&
        w(
          D,
          k.map((ee) => L1(ee, A.loaderData))
        )) ||
      D.key
    );
  }
  function Ja(D, k) {
    if (M && T) {
      let G = Rr(D, k);
      M[G] = T();
    }
  }
  function Vi(D, k) {
    if (M) {
      let G = Rr(D, k),
        ee = M[G];
      if (typeof ee == 'number') return ee;
    }
    return null;
  }
  function Wa(D, k, G) {
    if (a.patchRoutesOnNavigation)
      if (D) {
        if (Object.keys(D[0].params).length > 0)
          return { active: !0, matches: ou(k, G, d, !0) };
      } else return { active: !0, matches: ou(k, G, d, !0) || [] };
    return { active: !1, matches: null };
  }
  async function er(D, k, G, ee) {
    if (!a.patchRoutesOnNavigation) return { type: 'success', matches: D };
    let ne = D;
    for (;;) {
      let de = m == null,
        ge = m || h,
        he = f;
      try {
        await a.patchRoutesOnNavigation({
          signal: G,
          path: k,
          matches: ne,
          fetcherKey: ee,
          patch: (pe, ye) => {
            G.aborted || lv(pe, ye, ge, he, o, !1);
          },
        });
      } catch (pe) {
        return { type: 'error', error: pe, partialMatches: ne };
      } finally {
        de && !G.aborted && (h = [...h]);
      }
      if (G.aborted) return { type: 'aborted' };
      let Se = qa(ge, k, d);
      if (Se) return { type: 'success', matches: Se };
      let Me = ou(ge, k, d, !0);
      if (
        !Me ||
        (ne.length === Me.length &&
          ne.every((pe, ye) => pe.route.id === Me[ye].route.id))
      )
        return { type: 'success', matches: null };
      ne = Me;
    }
  }
  function Sl(D) {
    ((f = {}), (m = Oi(D, o, void 0, f)));
  }
  function xl(D, k, G = !1) {
    let ee = m == null;
    (lv(D, k, m || h, f, o, G), ee && ((h = [...h]), at({})));
  }
  return (
    (z = {
      get basename() {
        return d;
      },
      get future() {
        return g;
      },
      get state() {
        return A;
      },
      get routes() {
        return h;
      },
      get window() {
        return r;
      },
      initialize: ze,
      subscribe: Je,
      enableScrollRestoration: ji,
      navigate: qt,
      fetch: On,
      revalidate: Jt,
      createHref: (D) => a.history.createHref(D),
      encodeLocation: (D) => a.history.encodeLocation(D),
      getFetcher: Mn,
      deleteFetcher: Bu,
      dispose: Ae,
      getBlocker: Fn,
      deleteBlocker: Ia,
      patchRoutes: xl,
      _internalFetchControllers: N,
      _internalSetRoutes: Sl,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(D) {
        at(D);
      },
    }),
    z
  );
}
function uS(a) {
  return (
    a != null &&
    (('formData' in a && a.formData != null) ||
      ('body' in a && a.body !== void 0))
  );
}
function yf(a, r, u, i, o, f) {
  let h, m;
  if (o) {
    h = [];
    for (let p of r)
      if ((h.push(p), p.route.id === o)) {
        m = p;
        break;
      }
  } else ((h = r), (m = r[r.length - 1]));
  let d = Hf(i || '.', Vf(h), En(a.pathname, u) || a.pathname, f === 'path');
  if (
    (i == null && ((d.search = a.search), (d.hash = a.hash)),
    (i == null || i === '' || i === '.') && m)
  ) {
    let p = qf(d.search);
    if (m.route.index && !p)
      d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index';
    else if (!m.route.index && p) {
      let g = new URLSearchParams(d.search),
        b = g.getAll('index');
      (g.delete('index'),
        b.filter((M) => M).forEach((M) => g.append('index', M)));
      let x = g.toString();
      d.search = x ? `?${x}` : '';
    }
  }
  return (
    u !== '/' && (d.pathname = F1({ basename: u, pathname: d.pathname })),
    Ya(d)
  );
}
function av(a, r, u) {
  if (!u || !uS(u)) return { path: r };
  if (u.formMethod && !SS(u.formMethod))
    return { path: r, error: wn(405, { method: u.formMethod }) };
  let i = () => ({ path: r, error: wn(400, { type: 'invalid-body' }) }),
    f = (u.formMethod || 'get').toUpperCase(),
    h = Lg(r);
  if (u.body !== void 0) {
    if (u.formEncType === 'text/plain') {
      if (!Kt(f)) return i();
      let b =
        typeof u.body == 'string'
          ? u.body
          : u.body instanceof FormData || u.body instanceof URLSearchParams
            ? Array.from(u.body.entries()).reduce(
                (x, [M, w]) => `${x}${M}=${w}
`,
                ''
              )
            : String(u.body);
      return {
        path: r,
        submission: {
          formMethod: f,
          formAction: h,
          formEncType: u.formEncType,
          formData: void 0,
          json: void 0,
          text: b,
        },
      };
    } else if (u.formEncType === 'application/json') {
      if (!Kt(f)) return i();
      try {
        let b = typeof u.body == 'string' ? JSON.parse(u.body) : u.body;
        return {
          path: r,
          submission: {
            formMethod: f,
            formAction: h,
            formEncType: u.formEncType,
            formData: void 0,
            json: b,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Ue(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let m, d;
  if (u.formData) ((m = xf(u.formData)), (d = u.formData));
  else if (u.body instanceof FormData) ((m = xf(u.body)), (d = u.body));
  else if (u.body instanceof URLSearchParams) ((m = u.body), (d = cv(m)));
  else if (u.body == null) ((m = new URLSearchParams()), (d = new FormData()));
  else
    try {
      ((m = new URLSearchParams(u.body)), (d = cv(m)));
    } catch {
      return i();
    }
  let p = {
    formMethod: f,
    formAction: h,
    formEncType: (u && u.formEncType) || 'application/x-www-form-urlencoded',
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (Kt(p.formMethod)) return { path: r, submission: p };
  let g = Ga(r);
  return (
    a && g.search && qf(g.search) && m.append('index', ''),
    (g.search = `?${m}`),
    { path: Ya(g), submission: p }
  );
}
function rv(a, r, u, i, o, f, h, m, d, p, g, b, x, M, w, T, R, O, B, j) {
  let J = j ? (sn(j[1]) ? j[1].error : j[1].data) : void 0,
    z = o.createURL(f.location),
    A = o.createURL(d),
    Z;
  if (g && f.errors) {
    let me = Object.keys(f.errors)[0];
    Z = h.findIndex((le) => le.route.id === me);
  } else if (j && sn(j[1])) {
    let me = j[0];
    Z = h.findIndex((le) => le.route.id === me) - 1;
  }
  let te = j ? j[1].statusCode : void 0,
    re = te && te >= 400,
    we = {
      currentUrl: z,
      currentParams: f.matches[0]?.params || {},
      nextUrl: A,
      nextParams: h[0].params,
      ...m,
      actionResult: J,
      actionStatus: te,
    },
    De = h.map((me, le) => {
      let { route: oe } = me,
        N = null;
      if (
        (Z != null && le > Z
          ? (N = !1)
          : oe.lazy
            ? (N = !0)
            : oe.loader == null
              ? (N = !1)
              : g
                ? (N = bf(oe, f.loaderData, f.errors))
                : sS(f.loaderData, f.matches[le], me) && (N = !0),
        N !== null)
      )
        return Sf(u, i, a, me, p, r, N);
      let I = re
          ? !1
          : b ||
            z.pathname + z.search === A.pathname + A.search ||
            z.search !== A.search ||
            cS(f.matches[le], me),
        Q = { ...we, defaultShouldRevalidate: I },
        ve = yu(me, Q);
      return Sf(u, i, a, me, p, r, ve, Q);
    }),
    Ee = [];
  return (
    w.forEach((me, le) => {
      if (g || !h.some(($) => $.route.id === me.routeId) || M.has(le)) return;
      let oe = f.fetchers.get(le),
        N = oe && oe.state !== 'idle' && oe.data === void 0,
        I = qa(R, me.path, O);
      if (!I) {
        if (B && N) return;
        Ee.push({
          key: le,
          routeId: me.routeId,
          path: me.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (T.has(le)) return;
      let Q = uu(I, me.path),
        ve = new AbortController(),
        E = sl(o, me.path, ve.signal),
        Y = null;
      if (x.has(le)) (x.delete(le), (Y = fl(u, i, E, I, Q, p, r)));
      else if (N) b && (Y = fl(u, i, E, I, Q, p, r));
      else {
        let $ = { ...we, defaultShouldRevalidate: re ? !1 : b };
        yu(Q, $) && (Y = fl(u, i, E, I, Q, p, r, $));
      }
      Y &&
        Ee.push({
          key: le,
          routeId: me.routeId,
          path: me.path,
          matches: Y,
          match: Q,
          request: E,
          controller: ve,
        });
    }),
    { dsMatches: De, revalidatingFetchers: Ee }
  );
}
function bf(a, r, u) {
  if (a.lazy) return !0;
  if (!a.loader) return !1;
  let i = r != null && a.id in r,
    o = u != null && u[a.id] !== void 0;
  return !i && o
    ? !1
    : typeof a.loader == 'function' && a.loader.hydrate === !0
      ? !0
      : !i && !o;
}
function sS(a, r, u) {
  let i = !r || u.route.id !== r.route.id,
    o = !a.hasOwnProperty(u.route.id);
  return i || o;
}
function cS(a, r) {
  let u = a.route.path;
  return (
    a.pathname !== r.pathname ||
    (u != null && u.endsWith('*') && a.params['*'] !== r.params['*'])
  );
}
function yu(a, r) {
  if (a.route.shouldRevalidate) {
    let u = a.route.shouldRevalidate(r);
    if (typeof u == 'boolean') return u;
  }
  return r.defaultShouldRevalidate;
}
function lv(a, r, u, i, o, f) {
  let h;
  if (a) {
    let p = i[a];
    (Ue(p, `No route found to patch children into: routeId = ${a}`),
      p.children || (p.children = []),
      (h = p.children));
  } else h = u;
  let m = [],
    d = [];
  if (
    (r.forEach((p) => {
      let g = h.find((b) => Ag(p, b));
      g ? d.push({ existingRoute: g, newRoute: p }) : m.push(p);
    }),
    m.length > 0)
  ) {
    let p = Oi(m, o, [a || '_', 'patch', String(h?.length || '0')], i);
    h.push(...p);
  }
  if (f && d.length > 0)
    for (let p = 0; p < d.length; p++) {
      let { existingRoute: g, newRoute: b } = d[p],
        x = g,
        [M] = Oi([b], o, [], {}, !0);
      Object.assign(x, {
        element: M.element ? M.element : x.element,
        errorElement: M.errorElement ? M.errorElement : x.errorElement,
        hydrateFallbackElement: M.hydrateFallbackElement
          ? M.hydrateFallbackElement
          : x.hydrateFallbackElement,
      });
    }
}
function Ag(a, r) {
  return 'id' in a && 'id' in r && a.id === r.id
    ? !0
    : a.index === r.index &&
        a.path === r.path &&
        a.caseSensitive === r.caseSensitive
      ? (!a.children || a.children.length === 0) &&
        (!r.children || r.children.length === 0)
        ? !0
        : a.children.every((u, i) => r.children?.some((o) => Ag(u, o)))
      : !1;
}
var iv = new WeakMap(),
  Dg = ({ key: a, route: r, manifest: u, mapRouteProperties: i }) => {
    let o = u[r.id];
    if (
      (Ue(o, 'No route found in manifest'),
      !o.lazy || typeof o.lazy != 'object')
    )
      return;
    let f = o.lazy[a];
    if (!f) return;
    let h = iv.get(o);
    h || ((h = {}), iv.set(o, h));
    let m = h[a];
    if (m) return m;
    let d = (async () => {
      let p = D1(a),
        b = o[a] !== void 0 && a !== 'hasErrorBoundary';
      if (p)
        (Et(
          !p,
          'Route property ' +
            a +
            ' is not a supported lazy route property. This property will be ignored.'
        ),
          (h[a] = Promise.resolve()));
      else if (b)
        Et(
          !1,
          `Route "${o.id}" has a static property "${a}" defined. The lazy property will be ignored.`
        );
      else {
        let x = await f();
        x != null && (Object.assign(o, { [a]: x }), Object.assign(o, i(o)));
      }
      typeof o.lazy == 'object' &&
        ((o.lazy[a] = void 0),
        Object.values(o.lazy).every((x) => x === void 0) && (o.lazy = void 0));
    })();
    return ((h[a] = d), d);
  },
  ov = new WeakMap();
function fS(a, r, u, i, o) {
  let f = u[a.id];
  if ((Ue(f, 'No route found in manifest'), !a.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof a.lazy == 'function') {
    let g = ov.get(f);
    if (g) return { lazyRoutePromise: g, lazyHandlerPromise: g };
    let b = (async () => {
      Ue(typeof a.lazy == 'function', 'No lazy route function found');
      let x = await a.lazy(),
        M = {};
      for (let w in x) {
        let T = x[w];
        if (T === void 0) continue;
        let R = z1(w),
          B = f[w] !== void 0 && w !== 'hasErrorBoundary';
        R
          ? Et(
              !R,
              'Route property ' +
                w +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.'
            )
          : B
            ? Et(
                !B,
                `Route "${f.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`
              )
            : (M[w] = T);
      }
      (Object.assign(f, M), Object.assign(f, { ...i(f), lazy: void 0 }));
    })();
    return (
      ov.set(f, b),
      b.catch(() => {}),
      { lazyRoutePromise: b, lazyHandlerPromise: b }
    );
  }
  let h = Object.keys(a.lazy),
    m = [],
    d;
  for (let g of h) {
    if (o && o.includes(g)) continue;
    let b = Dg({ key: g, route: a, manifest: u, mapRouteProperties: i });
    b && (m.push(b), g === r && (d = b));
  }
  let p = m.length > 0 ? Promise.all(m).then(() => {}) : void 0;
  return (
    p?.catch(() => {}),
    d?.catch(() => {}),
    { lazyRoutePromise: p, lazyHandlerPromise: d }
  );
}
async function uv(a) {
  let r = a.matches.filter((o) => o.shouldLoad),
    u = {};
  return (
    (await Promise.all(r.map((o) => o.resolve()))).forEach((o, f) => {
      u[r[f].route.id] = o;
    }),
    u
  );
}
async function dS(a) {
  return a.matches.some((r) => r.route.unstable_middleware)
    ? _g(
        a,
        !1,
        () => uv(a),
        (r, u) => ({ [u]: { type: 'error', result: r } })
      )
    : uv(a);
}
async function _g(a, r, u, i) {
  let { matches: o, request: f, params: h, context: m } = a,
    d = { handlerResult: void 0 };
  try {
    let p = o.flatMap((b) =>
        b.route.unstable_middleware
          ? b.route.unstable_middleware.map((x) => [b.route.id, x])
          : []
      ),
      g = await zg({ request: f, params: h, context: m }, p, r, d, u);
    return r ? g : d.handlerResult;
  } catch (p) {
    if (!d.middlewareError) throw p;
    let g = await i(d.middlewareError.error, d.middlewareError.routeId);
    return d.handlerResult ? Object.assign(d.handlerResult, g) : g;
  }
}
async function zg(a, r, u, i, o, f = 0) {
  let { request: h } = a;
  if (h.signal.aborted)
    throw h.signal.reason
      ? h.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${h.method} ${h.url}`
        );
  let m = r[f];
  if (!m) return ((i.handlerResult = await o()), i.handlerResult);
  let [d, p] = m,
    g = !1,
    b,
    x = async () => {
      if (g) throw new Error('You may only call `next()` once per middleware');
      ((g = !0), await zg(a, r, u, i, o, f + 1));
    };
  try {
    let M = await p(
      { request: a.request, params: a.params, context: a.context },
      x
    );
    return g ? (M === void 0 ? b : M) : x();
  } catch (M) {
    throw (
      i.middlewareError
        ? i.middlewareError.error !== M &&
          (i.middlewareError = { routeId: d, error: M })
        : (i.middlewareError = { routeId: d, error: M }),
      M
    );
  }
}
function Ng(a, r, u, i, o) {
  let f = Dg({
      key: 'unstable_middleware',
      route: i.route,
      manifest: r,
      mapRouteProperties: a,
    }),
    h = fS(i.route, Kt(u.method) ? 'action' : 'loader', r, a, o);
  return {
    middleware: f,
    route: h.lazyRoutePromise,
    handler: h.lazyHandlerPromise,
  };
}
function Sf(a, r, u, i, o, f, h, m = null) {
  let d = !1,
    p = Ng(a, r, u, i, o);
  return {
    ...i,
    _lazyPromises: p,
    shouldLoad: h,
    unstable_shouldRevalidateArgs: m,
    unstable_shouldCallHandler(g) {
      return (
        (d = !0),
        m
          ? typeof g == 'boolean'
            ? yu(i, { ...m, defaultShouldRevalidate: g })
            : yu(i, m)
          : h
      );
    },
    resolve(g) {
      return d || h || (g && !Kt(u.method) && (i.route.lazy || i.route.loader))
        ? pS({
            request: u,
            match: i,
            lazyHandlerPromise: p?.handler,
            lazyRoutePromise: p?.route,
            handlerOverride: g,
            scopedContext: f,
          })
        : Promise.resolve({ type: 'data', result: void 0 });
    },
  };
}
function fl(a, r, u, i, o, f, h, m = null) {
  return i.map((d) =>
    d.route.id !== o.route.id
      ? {
          ...d,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: m,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Ng(a, r, u, d, f),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : Sf(a, r, u, d, f, h, !0, m)
  );
}
async function hS(a, r, u, i, o, f) {
  u.some((p) => p._lazyPromises?.middleware) &&
    (await Promise.all(u.map((p) => p._lazyPromises?.middleware)));
  let h = { request: r, params: u[0].params, context: o, matches: u },
    d = await a({
      ...h,
      fetcherKey: i,
      unstable_runClientMiddleware: (p) => {
        let g = h;
        return _g(
          g,
          !1,
          () =>
            p({
              ...g,
              fetcherKey: i,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler'
                );
              },
            }),
          (b, x) => ({ [x]: { type: 'error', result: b } })
        );
      },
    });
  try {
    await Promise.all(
      u.flatMap((p) => [p._lazyPromises?.handler, p._lazyPromises?.route])
    );
  } catch {}
  return d;
}
async function pS({
  request: a,
  match: r,
  lazyHandlerPromise: u,
  lazyRoutePromise: i,
  handlerOverride: o,
  scopedContext: f,
}) {
  let h,
    m,
    d = Kt(a.method),
    p = d ? 'action' : 'loader',
    g = (b) => {
      let x,
        M = new Promise((R, O) => (x = O));
      ((m = () => x()), a.signal.addEventListener('abort', m));
      let w = (R) =>
          typeof b != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${r.route.id}]`
                )
              )
            : b(
                { request: a, params: r.params, context: f },
                ...(R !== void 0 ? [R] : [])
              ),
        T = (async () => {
          try {
            return { type: 'data', result: await (o ? o((O) => w(O)) : w()) };
          } catch (R) {
            return { type: 'error', result: R };
          }
        })();
      return Promise.race([T, M]);
    };
  try {
    let b = d ? r.route.action : r.route.loader;
    if (u || i)
      if (b) {
        let x,
          [M] = await Promise.all([
            g(b).catch((w) => {
              x = w;
            }),
            u,
            i,
          ]);
        if (x !== void 0) throw x;
        h = M;
      } else {
        await u;
        let x = d ? r.route.action : r.route.loader;
        if (x) [h] = await Promise.all([g(x), i]);
        else if (p === 'action') {
          let M = new URL(a.url),
            w = M.pathname + M.search;
          throw wn(405, { method: a.method, pathname: w, routeId: r.route.id });
        } else return { type: 'data', result: void 0 };
      }
    else if (b) h = await g(b);
    else {
      let x = new URL(a.url),
        M = x.pathname + x.search;
      throw wn(404, { pathname: M });
    }
  } catch (b) {
    return { type: 'error', result: b };
  } finally {
    m && a.signal.removeEventListener('abort', m);
  }
  return h;
}
async function mS(a) {
  let { result: r, type: u } = a;
  if (kg(r)) {
    let i;
    try {
      let o = r.headers.get('Content-Type');
      o && /\bapplication\/json\b/.test(o)
        ? r.body == null
          ? (i = null)
          : (i = await r.json())
        : (i = await r.text());
    } catch (o) {
      return { type: 'error', error: o };
    }
    return u === 'error'
      ? {
          type: 'error',
          error: new gu(r.status, r.statusText, i),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: 'data', data: i, statusCode: r.status, headers: r.headers };
  }
  return u === 'error'
    ? mv(r)
      ? r.data instanceof Error
        ? {
            type: 'error',
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: new gu(r.init?.status || 500, void 0, r.data),
            statusCode: Mi(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: 'error', error: r, statusCode: Mi(r) ? r.status : void 0 }
    : mv(r)
      ? {
          type: 'data',
          data: r.data,
          statusCode: r.init?.status,
          headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: 'data', data: r };
}
function vS(a, r, u, i, o) {
  let f = a.headers.get('Location');
  if (
    (Ue(
      f,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !Bf(f))
  ) {
    let h = i.slice(0, i.findIndex((m) => m.route.id === u) + 1);
    ((f = yf(new URL(r.url), h, o, f)), a.headers.set('Location', f));
  }
  return a;
}
function sv(a, r, u) {
  if (Bf(a)) {
    let i = a,
      o = i.startsWith('//') ? new URL(r.protocol + i) : new URL(i),
      f = En(o.pathname, u) != null;
    if (o.origin === r.origin && f) return o.pathname + o.search + o.hash;
  }
  return a;
}
function sl(a, r, u, i) {
  let o = a.createURL(Lg(r)).toString(),
    f = { signal: u };
  if (i && Kt(i.formMethod)) {
    let { formMethod: h, formEncType: m } = i;
    ((f.method = h.toUpperCase()),
      m === 'application/json'
        ? ((f.headers = new Headers({ 'Content-Type': m })),
          (f.body = JSON.stringify(i.json)))
        : m === 'text/plain'
          ? (f.body = i.text)
          : m === 'application/x-www-form-urlencoded' && i.formData
            ? (f.body = xf(i.formData))
            : (f.body = i.formData));
  }
  return new Request(o, f);
}
function xf(a) {
  let r = new URLSearchParams();
  for (let [u, i] of a.entries())
    r.append(u, typeof i == 'string' ? i : i.name);
  return r;
}
function cv(a) {
  let r = new FormData();
  for (let [u, i] of a.entries()) r.append(u, i);
  return r;
}
function gS(a, r, u, i = !1, o = !1) {
  let f = {},
    h = null,
    m,
    d = !1,
    p = {},
    g = u && sn(u[1]) ? u[1].error : void 0;
  return (
    a.forEach((b) => {
      if (!(b.route.id in r)) return;
      let x = b.route.id,
        M = r[x];
      if (
        (Ue(!xr(M), 'Cannot handle redirect results in processLoaderData'),
        sn(M))
      ) {
        let w = M.error;
        if ((g !== void 0 && ((w = g), (g = void 0)), (h = h || {}), o))
          h[x] = w;
        else {
          let T = Sr(a, x);
          h[T.route.id] == null && (h[T.route.id] = w);
        }
        (i || (f[x] = Tg),
          d || ((d = !0), (m = Mi(M.error) ? M.error.status : 500)),
          M.headers && (p[x] = M.headers));
      } else
        ((f[x] = M.data),
          M.statusCode && M.statusCode !== 200 && !d && (m = M.statusCode),
          M.headers && (p[x] = M.headers));
    }),
    g !== void 0 && u && ((h = { [u[0]]: g }), u[2] && (f[u[2]] = void 0)),
    { loaderData: f, errors: h, statusCode: m || 200, loaderHeaders: p }
  );
}
function fv(a, r, u, i, o, f) {
  let { loaderData: h, errors: m } = gS(r, u, i);
  return (
    o
      .filter((d) => !d.matches || d.matches.some((p) => p.shouldLoad))
      .forEach((d) => {
        let { key: p, match: g, controller: b } = d,
          x = f[p];
        if (
          (Ue(x, 'Did not find corresponding fetcher result'),
          !(b && b.signal.aborted))
        )
          if (sn(x)) {
            let M = Sr(a.matches, g?.route.id);
            ((m && m[M.route.id]) || (m = { ...m, [M.route.id]: x.error }),
              a.fetchers.delete(p));
          } else if (xr(x)) Ue(!1, 'Unhandled fetcher revalidation redirect');
          else {
            let M = Ha(x.data);
            a.fetchers.set(p, M);
          }
      }),
    { loaderData: h, errors: m }
  );
}
function dv(a, r, u, i) {
  let o = Object.entries(r)
    .filter(([, f]) => f !== Tg)
    .reduce((f, [h, m]) => ((f[h] = m), f), {});
  for (let f of u) {
    let h = f.route.id;
    if (
      (!r.hasOwnProperty(h) &&
        a.hasOwnProperty(h) &&
        f.route.loader &&
        (o[h] = a[h]),
      i && i.hasOwnProperty(h))
    )
      break;
  }
  return o;
}
function hv(a) {
  return a
    ? sn(a[1])
      ? { actionData: {} }
      : { actionData: { [a[0]]: a[1].data } }
    : {};
}
function Sr(a, r) {
  return (
    (r ? a.slice(0, a.findIndex((i) => i.route.id === r) + 1) : [...a])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || a[0]
  );
}
function pv(a) {
  let r =
    a.length === 1
      ? a[0]
      : a.find((u) => u.index || !u.path || u.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: r }],
    route: r,
  };
}
function wn(
  a,
  { pathname: r, routeId: u, method: i, type: o, message: f } = {}
) {
  let h = 'Unknown Server Error',
    m = 'Unknown @remix-run/router error';
  return (
    a === 400
      ? ((h = 'Bad Request'),
        i && r && u
          ? (m = `You made a ${i} request to "${r}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
          : o === 'invalid-body' && (m = 'Unable to encode submission body'))
      : a === 403
        ? ((h = 'Forbidden'), (m = `Route "${u}" does not match URL "${r}"`))
        : a === 404
          ? ((h = 'Not Found'), (m = `No route matches URL "${r}"`))
          : a === 405 &&
            ((h = 'Method Not Allowed'),
            i && r && u
              ? (m = `You made a ${i.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
              : i && (m = `Invalid request method "${i.toUpperCase()}"`)),
    new gu(a || 500, h, new Error(m), !0)
  );
}
function Ko(a) {
  let r = Object.entries(a);
  for (let u = r.length - 1; u >= 0; u--) {
    let [i, o] = r[u];
    if (xr(o)) return { key: i, result: o };
  }
}
function Lg(a) {
  let r = typeof a == 'string' ? Ga(a) : a;
  return Ya({ ...r, hash: '' });
}
function yS(a, r) {
  return a.pathname !== r.pathname || a.search !== r.search
    ? !1
    : a.hash === ''
      ? r.hash !== ''
      : a.hash === r.hash
        ? !0
        : r.hash !== '';
}
function bS(a) {
  return kg(a.result) && nS.has(a.result.status);
}
function sn(a) {
  return a.type === 'error';
}
function xr(a) {
  return (a && a.type) === 'redirect';
}
function mv(a) {
  return (
    typeof a == 'object' &&
    a != null &&
    'type' in a &&
    'data' in a &&
    'init' in a &&
    a.type === 'DataWithResponseInit'
  );
}
function kg(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.headers == 'object' &&
    typeof a.body < 'u'
  );
}
function SS(a) {
  return tS.has(a.toUpperCase());
}
function Kt(a) {
  return W1.has(a.toUpperCase());
}
function qf(a) {
  return new URLSearchParams(a).getAll('index').some((r) => r === '');
}
function uu(a, r) {
  let u = typeof r == 'string' ? Ga(r).search : r.search;
  if (a[a.length - 1].route.index && qf(u || '')) return a[a.length - 1];
  let i = Mg(a);
  return i[i.length - 1];
}
function vv(a) {
  let {
    formMethod: r,
    formAction: u,
    formEncType: i,
    text: o,
    formData: f,
    json: h,
  } = a;
  if (!(!r || !u || !i)) {
    if (o != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (f != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: i,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (h !== void 0)
      return {
        formMethod: r,
        formAction: u,
        formEncType: i,
        formData: void 0,
        json: h,
        text: void 0,
      };
  }
}
function Wc(a, r) {
  return r
    ? {
        state: 'loading',
        location: a,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: 'loading',
        location: a,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xS(a, r) {
  return {
    state: 'submitting',
    location: a,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function gi(a, r) {
  return a
    ? {
        state: 'loading',
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
        data: r,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function wS(a, r) {
  return {
    state: 'submitting',
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
    data: r ? r.data : void 0,
  };
}
function Ha(a) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: a,
  };
}
function ES(a, r) {
  try {
    let u = a.sessionStorage.getItem(Cg);
    if (u) {
      let i = JSON.parse(u);
      for (let [o, f] of Object.entries(i || {}))
        f && Array.isArray(f) && r.set(o, new Set(f || []));
    }
  } catch {}
}
function OS(a, r) {
  if (r.size > 0) {
    let u = {};
    for (let [i, o] of r) u[i] = [...o];
    try {
      a.sessionStorage.setItem(Cg, JSON.stringify(u));
    } catch (i) {
      Et(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function MS() {
  let a,
    r,
    u = new Promise((i, o) => {
      ((a = async (f) => {
        i(f);
        try {
          await u;
        } catch {}
      }),
        (r = async (f) => {
          o(f);
          try {
            await u;
          } catch {}
        }));
    });
  return { promise: u, resolve: a, reject: r };
}
var Er = S.createContext(null);
Er.displayName = 'DataRouter';
var Di = S.createContext(null);
Di.displayName = 'DataRouterState';
S.createContext(!1);
var Yf = S.createContext({ isTransitioning: !1 });
Yf.displayName = 'ViewTransition';
var Ug = S.createContext(new Map());
Ug.displayName = 'Fetchers';
var RS = S.createContext(null);
RS.displayName = 'Await';
var Gn = S.createContext(null);
Gn.displayName = 'Navigation';
var Tu = S.createContext(null);
Tu.displayName = 'Location';
var Dn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Dn.displayName = 'Route';
var Gf = S.createContext(null);
Gf.displayName = 'RouteError';
function CS(a, { relative: r } = {}) {
  Ue(
    _i(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: u, navigator: i } = S.useContext(Gn),
    { hash: o, pathname: f, search: h } = zi(a, { relative: r }),
    m = f;
  return (
    u !== '/' && (m = f === '/' ? u : qn([u, f])),
    i.createHref({ pathname: m, search: h, hash: o })
  );
}
function _i() {
  return S.useContext(Tu) != null;
}
function Pa() {
  return (
    Ue(
      _i(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    S.useContext(Tu).location
  );
}
var jg =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Vg(a) {
  S.useContext(Gn).static || S.useLayoutEffect(a);
}
function Au() {
  let { isDataRoute: a } = S.useContext(Dn);
  return a ? YS() : TS();
}
function TS() {
  Ue(
    _i(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let a = S.useContext(Er),
    { basename: r, navigator: u } = S.useContext(Gn),
    { matches: i } = S.useContext(Dn),
    { pathname: o } = Pa(),
    f = JSON.stringify(Vf(i)),
    h = S.useRef(!1);
  return (
    Vg(() => {
      h.current = !0;
    }),
    S.useCallback(
      (d, p = {}) => {
        if ((Et(h.current, jg), !h.current)) return;
        if (typeof d == 'number') {
          u.go(d);
          return;
        }
        let g = Hf(d, JSON.parse(f), o, p.relative === 'path');
        (a == null &&
          r !== '/' &&
          (g.pathname = g.pathname === '/' ? r : qn([r, g.pathname])),
          (p.replace ? u.replace : u.push)(g, p.state, p));
      },
      [r, u, f, o, a]
    )
  );
}
var AS = S.createContext(null);
function DS(a) {
  let r = S.useContext(Dn).outlet;
  return r && S.createElement(AS.Provider, { value: a }, r);
}
function _S() {
  let { matches: a } = S.useContext(Dn),
    r = a[a.length - 1];
  return r ? r.params : {};
}
function zi(a, { relative: r } = {}) {
  let { matches: u } = S.useContext(Dn),
    { pathname: i } = Pa(),
    o = JSON.stringify(Vf(u));
  return S.useMemo(() => Hf(a, JSON.parse(o), i, r === 'path'), [a, o, i, r]);
}
function zS(a, r, u, i) {
  Ue(
    _i(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: o } = S.useContext(Gn),
    { matches: f } = S.useContext(Dn),
    h = f[f.length - 1],
    m = h ? h.params : {},
    d = h ? h.pathname : '/',
    p = h ? h.pathnameBase : '/',
    g = h && h.route;
  {
    let O = (g && g.path) || '';
    qg(
      d,
      !g || O.endsWith('*') || O.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === '/' ? '*' : `${O}/*`}">.`
    );
  }
  let b = Pa(),
    x;
  x = b;
  let M = x.pathname || '/',
    w = M;
  if (p !== '/') {
    let O = p.replace(/^\//, '').split('/');
    w = '/' + M.replace(/^\//, '').split('/').slice(O.length).join('/');
  }
  let T = qa(a, { pathname: w });
  return (
    Et(
      g || T != null,
      `No routes matched location "${x.pathname}${x.search}${x.hash}" `
    ),
    Et(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    jS(
      T &&
        T.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, m, O.params),
            pathname: qn([
              p,
              o.encodeLocation
                ? o.encodeLocation(O.pathname).pathname
                : O.pathname,
            ]),
            pathnameBase:
              O.pathnameBase === '/'
                ? p
                : qn([
                    p,
                    o.encodeLocation
                      ? o.encodeLocation(O.pathnameBase).pathname
                      : O.pathnameBase,
                  ]),
          })
        ),
      f,
      u,
      i
    )
  );
}
function NS() {
  let a = Bg(),
    r = Mi(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    u = a instanceof Error ? a.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: i },
    f = { padding: '2px 4px', backgroundColor: i },
    h = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', a),
    (h = S.createElement(
      S.Fragment,
      null,
      S.createElement('p', null, '💿 Hey developer 👋'),
      S.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        S.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        S.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement('h2', null, 'Unexpected Application Error!'),
      S.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      u ? S.createElement('pre', { style: o }, u) : null,
      h
    )
  );
}
var LS = S.createElement(NS, null),
  kS = class extends S.Component {
    constructor(a) {
      (super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        }));
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, r) {
      return r.location !== a.location ||
        (r.revalidation !== 'idle' && a.revalidation === 'idle')
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : r.error,
            location: r.location,
            revalidation: a.revalidation || r.revalidation,
          };
    }
    componentDidCatch(a, r) {
      console.error(
        'React Router caught the following error during render',
        a,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? S.createElement(
            Dn.Provider,
            { value: this.props.routeContext },
            S.createElement(Gf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function US({ routeContext: a, match: r, children: u }) {
  let i = S.useContext(Er);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    S.createElement(Dn.Provider, { value: a }, u)
  );
}
function jS(a, r = [], u = null, i = null) {
  if (a == null) {
    if (!u) return null;
    if (u.errors) a = u.matches;
    else if (r.length === 0 && !u.initialized && u.matches.length > 0)
      a = u.matches;
    else return null;
  }
  let o = a,
    f = u?.errors;
  if (f != null) {
    let d = o.findIndex((p) => p.route.id && f?.[p.route.id] !== void 0);
    (Ue(
      d >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, d + 1))));
  }
  let h = !1,
    m = -1;
  if (u)
    for (let d = 0; d < o.length; d++) {
      let p = o[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = d),
        p.route.id)
      ) {
        let { loaderData: g, errors: b } = u,
          x =
            p.route.loader &&
            !g.hasOwnProperty(p.route.id) &&
            (!b || b[p.route.id] === void 0);
        if (p.route.lazy || x) {
          ((h = !0), m >= 0 ? (o = o.slice(0, m + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((d, p, g) => {
    let b,
      x = !1,
      M = null,
      w = null;
    u &&
      ((b = f && p.route.id ? f[p.route.id] : void 0),
      (M = p.route.errorElement || LS),
      h &&
        (m < 0 && g === 0
          ? (qg(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (x = !0),
            (w = null))
          : m === g &&
            ((x = !0), (w = p.route.hydrateFallbackElement || null))));
    let T = r.concat(o.slice(0, g + 1)),
      R = () => {
        let O;
        return (
          b
            ? (O = M)
            : x
              ? (O = w)
              : p.route.Component
                ? (O = S.createElement(p.route.Component, null))
                : p.route.element
                  ? (O = p.route.element)
                  : (O = d),
          S.createElement(US, {
            match: p,
            routeContext: { outlet: d, matches: T, isDataRoute: u != null },
            children: O,
          })
        );
      };
    return u && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? S.createElement(kS, {
          location: u.location,
          revalidation: u.revalidation,
          component: M,
          error: b,
          children: R(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : R();
  }, null);
}
function Pf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function VS(a) {
  let r = S.useContext(Er);
  return (Ue(r, Pf(a)), r);
}
function Hg(a) {
  let r = S.useContext(Di);
  return (Ue(r, Pf(a)), r);
}
function HS(a) {
  let r = S.useContext(Dn);
  return (Ue(r, Pf(a)), r);
}
function Xf(a) {
  let r = HS(a),
    u = r.matches[r.matches.length - 1];
  return (
    Ue(
      u.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function BS() {
  return Xf('useRouteId');
}
function qS() {
  return Hg('useNavigation').navigation;
}
function Bg() {
  let a = S.useContext(Gf),
    r = Hg('useRouteError'),
    u = Xf('useRouteError');
  return a !== void 0 ? a : r.errors?.[u];
}
function YS() {
  let { router: a } = VS('useNavigate'),
    r = Xf('useNavigate'),
    u = S.useRef(!1);
  return (
    Vg(() => {
      u.current = !0;
    }),
    S.useCallback(
      async (o, f = {}) => {
        (Et(u.current, jg),
          u.current &&
            (typeof o == 'number'
              ? a.navigate(o)
              : await a.navigate(o, { fromRouteId: r, ...f })));
      },
      [a, r]
    )
  );
}
var gv = {};
function qg(a, r, u) {
  !r && !gv[a] && ((gv[a] = !0), Et(!1, u));
}
var yv = {};
function bv(a, r) {
  !a && !yv[r] && ((yv[r] = !0), console.warn(r));
}
function GS(a) {
  let r = {
    hasErrorBoundary:
      a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null,
  };
  return (
    a.Component &&
      (a.element &&
        Et(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(r, {
        element: S.createElement(a.Component),
        Component: void 0,
      })),
    a.HydrateFallback &&
      (a.hydrateFallbackElement &&
        Et(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(r, {
        hydrateFallbackElement: S.createElement(a.HydrateFallback),
        HydrateFallback: void 0,
      })),
    a.ErrorBoundary &&
      (a.errorElement &&
        Et(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(r, {
        errorElement: S.createElement(a.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var PS = ['HydrateFallback', 'hydrateFallbackElement'],
  XS = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((a, r) => {
          ((this.resolve = (u) => {
            this.status === 'pending' && ((this.status = 'resolved'), a(u));
          }),
            (this.reject = (u) => {
              this.status === 'pending' && ((this.status = 'rejected'), r(u));
            }));
        })));
    }
  };
function $S({ router: a, flushSync: r }) {
  let [u, i] = S.useState(a.state),
    [o, f] = S.useState(),
    [h, m] = S.useState({ isTransitioning: !1 }),
    [d, p] = S.useState(),
    [g, b] = S.useState(),
    [x, M] = S.useState(),
    w = S.useRef(new Map()),
    T = S.useCallback(
      (j, { deletedFetchers: J, flushSync: z, viewTransitionOpts: A }) => {
        (j.fetchers.forEach((te, re) => {
          te.data !== void 0 && w.current.set(re, te.data);
        }),
          J.forEach((te) => w.current.delete(te)),
          bv(
            z === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let Z =
          a.window != null &&
          a.window.document != null &&
          typeof a.window.document.startViewTransition == 'function';
        if (
          (bv(
            A == null || Z,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !A || !Z)
        ) {
          r && z ? r(() => i(j)) : S.startTransition(() => i(j));
          return;
        }
        if (r && z) {
          r(() => {
            (g && (d && d.resolve(), g.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: A.currentLocation,
                nextLocation: A.nextLocation,
              }));
          });
          let te = a.window.document.startViewTransition(() => {
            r(() => i(j));
          });
          (te.finished.finally(() => {
            r(() => {
              (p(void 0), b(void 0), f(void 0), m({ isTransitioning: !1 }));
            });
          }),
            r(() => b(te)));
          return;
        }
        g
          ? (d && d.resolve(),
            g.skipTransition(),
            M({
              state: j,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation,
            }))
          : (f(j),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation,
            }));
      },
      [a.window, r, g, d]
    );
  (S.useLayoutEffect(() => a.subscribe(T), [a, T]),
    S.useEffect(() => {
      h.isTransitioning && !h.flushSync && p(new XS());
    }, [h]),
    S.useEffect(() => {
      if (d && o && a.window) {
        let j = o,
          J = d.promise,
          z = a.window.document.startViewTransition(async () => {
            (S.startTransition(() => i(j)), await J);
          });
        (z.finished.finally(() => {
          (p(void 0), b(void 0), f(void 0), m({ isTransitioning: !1 }));
        }),
          b(z));
      }
    }, [o, d, a.window]),
    S.useEffect(() => {
      d && o && u.location.key === o.location.key && d.resolve();
    }, [d, g, u.location, o]),
    S.useEffect(() => {
      !h.isTransitioning &&
        x &&
        (f(x.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        M(void 0));
    }, [h.isTransitioning, x]));
  let R = S.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (j) => a.navigate(j),
        push: (j, J, z) =>
          a.navigate(j, {
            state: J,
            preventScrollReset: z?.preventScrollReset,
          }),
        replace: (j, J, z) =>
          a.navigate(j, {
            replace: !0,
            state: J,
            preventScrollReset: z?.preventScrollReset,
          }),
      }),
      [a]
    ),
    O = a.basename || '/',
    B = S.useMemo(
      () => ({ router: a, navigator: R, static: !1, basename: O }),
      [a, R, O]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      Er.Provider,
      { value: B },
      S.createElement(
        Di.Provider,
        { value: u },
        S.createElement(
          Ug.Provider,
          { value: w.current },
          S.createElement(
            Yf.Provider,
            { value: h },
            S.createElement(
              KS,
              {
                basename: O,
                location: u.location,
                navigationType: u.historyAction,
                navigator: R,
              },
              S.createElement(FS, {
                routes: a.routes,
                future: a.future,
                state: u,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var FS = S.memo(QS);
function QS({ routes: a, future: r, state: u }) {
  return zS(a, void 0, u, r);
}
function ZS(a) {
  return DS(a.context);
}
function Ba(a) {
  Ue(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function KS({
  basename: a = '/',
  children: r = null,
  location: u,
  navigationType: i = 'POP',
  navigator: o,
  static: f = !1,
}) {
  Ue(
    !_i(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let h = a.replace(/^\/*/, '/'),
    m = S.useMemo(
      () => ({ basename: h, navigator: o, static: f, future: {} }),
      [h, o, f]
    );
  typeof u == 'string' && (u = Ga(u));
  let {
      pathname: d = '/',
      search: p = '',
      hash: g = '',
      state: b = null,
      key: x = 'default',
    } = u,
    M = S.useMemo(() => {
      let w = En(d, h);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: g, state: b, key: x },
            navigationType: i,
          };
    }, [h, d, p, g, b, x, i]);
  return (
    Et(
      M != null,
      `<Router basename="${h}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    M == null
      ? null
      : S.createElement(
          Gn.Provider,
          { value: m },
          S.createElement(Tu.Provider, { children: r, value: M })
        )
  );
}
function wf(a, r = []) {
  let u = [];
  return (
    S.Children.forEach(a, (i, o) => {
      if (!S.isValidElement(i)) return;
      let f = [...r, o];
      if (i.type === S.Fragment) {
        u.push.apply(u, wf(i.props.children, f));
        return;
      }
      (Ue(
        i.type === Ba,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ue(
          !i.props.index || !i.props.children,
          'An index route cannot have child routes.'
        ));
      let h = {
        id: i.props.id || f.join('-'),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      (i.props.children && (h.children = wf(i.props.children, f)), u.push(h));
    }),
    u
  );
}
var IS = wf,
  su = 'get',
  cu = 'application/x-www-form-urlencoded';
function Du(a) {
  return a != null && typeof a.tagName == 'string';
}
function JS(a) {
  return Du(a) && a.tagName.toLowerCase() === 'button';
}
function WS(a) {
  return Du(a) && a.tagName.toLowerCase() === 'form';
}
function ex(a) {
  return Du(a) && a.tagName.toLowerCase() === 'input';
}
function tx(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function nx(a, r) {
  return a.button === 0 && (!r || r === '_self') && !tx(a);
}
var Io = null;
function ax() {
  if (Io === null)
    try {
      (new FormData(document.createElement('form'), 0), (Io = !1));
    } catch {
      Io = !0;
    }
  return Io;
}
var rx = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function ef(a) {
  return a != null && !rx.has(a)
    ? (Et(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`
      ),
      null)
    : a;
}
function lx(a, r) {
  let u, i, o, f, h;
  if (WS(a)) {
    let m = a.getAttribute('action');
    ((i = m ? En(m, r) : null),
      (u = a.getAttribute('method') || su),
      (o = ef(a.getAttribute('enctype')) || cu),
      (f = new FormData(a)));
  } else if (JS(a) || (ex(a) && (a.type === 'submit' || a.type === 'image'))) {
    let m = a.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let d = a.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((i = d ? En(d, r) : null),
      (u = a.getAttribute('formmethod') || m.getAttribute('method') || su),
      (o =
        ef(a.getAttribute('formenctype')) ||
        ef(m.getAttribute('enctype')) ||
        cu),
      (f = new FormData(m, a)),
      !ax())
    ) {
      let { name: p, type: g, value: b } = a;
      if (g === 'image') {
        let x = p ? `${p}.` : '';
        (f.append(`${x}x`, '0'), f.append(`${x}y`, '0'));
      } else p && f.append(p, b);
    }
  } else {
    if (Du(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((u = su), (i = null), (o = cu), (h = a));
  }
  return (
    f && o === 'text/plain' && ((h = f), (f = void 0)),
    { action: i, method: u.toLowerCase(), encType: o, formData: f, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function $f(a, r) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(r);
}
function ix(a, r, u) {
  let i =
    typeof a == 'string'
      ? new URL(
          a,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : a;
  return (
    i.pathname === '/'
      ? (i.pathname = `_root.${u}`)
      : r && En(i.pathname, r) === '/'
        ? (i.pathname = `${r.replace(/\/$/, '')}/_root.${u}`)
        : (i.pathname = `${i.pathname.replace(/\/$/, '')}.${u}`),
    i
  );
}
async function ox(a, r) {
  if (a.id in r) return r[a.id];
  try {
    let u = await import(a.module);
    return ((r[a.id] = u), u);
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function ux(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === 'preload' &&
        typeof a.imageSrcSet == 'string' &&
        typeof a.imageSizes == 'string'
      : typeof a.rel == 'string' && typeof a.href == 'string';
}
async function sx(a, r, u) {
  let i = await Promise.all(
    a.map(async (o) => {
      let f = r.routes[o.route.id];
      if (f) {
        let h = await ox(f, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return hx(
    i
      .flat(1)
      .filter(ux)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet'
          ? { ...o, rel: 'prefetch', as: 'style' }
          : { ...o, rel: 'prefetch' }
      )
  );
}
function Sv(a, r, u, i, o, f) {
  let h = (d, p) => (u[p] ? d.route.id !== u[p].route.id : !0),
    m = (d, p) =>
      u[p].pathname !== d.pathname ||
      (u[p].route.path?.endsWith('*') && u[p].params['*'] !== d.params['*']);
  return f === 'assets'
    ? r.filter((d, p) => h(d, p) || m(d, p))
    : f === 'data'
      ? r.filter((d, p) => {
          let g = i.routes[d.route.id];
          if (!g || !g.hasLoader) return !1;
          if (h(d, p) || m(d, p)) return !0;
          if (d.route.shouldRevalidate) {
            let b = d.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: u[0]?.params || {},
              nextUrl: new URL(a, window.origin),
              nextParams: d.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == 'boolean') return b;
          }
          return !0;
        })
      : [];
}
function cx(a, r, { includeHydrateFallback: u } = {}) {
  return fx(
    a
      .map((i) => {
        let o = r.routes[i.route.id];
        if (!o) return [];
        let f = [o.module];
        return (
          o.clientActionModule && (f = f.concat(o.clientActionModule)),
          o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)),
          u &&
            o.hydrateFallbackModule &&
            (f = f.concat(o.hydrateFallbackModule)),
          o.imports && (f = f.concat(o.imports)),
          f
        );
      })
      .flat(1)
  );
}
function fx(a) {
  return [...new Set(a)];
}
function dx(a) {
  let r = {},
    u = Object.keys(a).sort();
  for (let i of u) r[i] = a[i];
  return r;
}
function hx(a, r) {
  let u = new Set();
  return (
    new Set(r),
    a.reduce((i, o) => {
      let f = JSON.stringify(dx(o));
      return (u.has(f) || (u.add(f), i.push({ key: f, link: o })), i);
    }, [])
  );
}
function Yg() {
  let a = S.useContext(Er);
  return (
    $f(
      a,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    a
  );
}
function px() {
  let a = S.useContext(Di);
  return (
    $f(
      a,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    a
  );
}
var Ff = S.createContext(void 0);
Ff.displayName = 'FrameworkContext';
function Gg() {
  let a = S.useContext(Ff);
  return (
    $f(a, 'You must render this element inside a <HydratedRouter> element'),
    a
  );
}
function mx(a, r) {
  let u = S.useContext(Ff),
    [i, o] = S.useState(!1),
    [f, h] = S.useState(!1),
    {
      onFocus: m,
      onBlur: d,
      onMouseEnter: p,
      onMouseLeave: g,
      onTouchStart: b,
    } = r,
    x = S.useRef(null);
  (S.useEffect(() => {
    if ((a === 'render' && h(!0), a === 'viewport')) {
      let T = (O) => {
          O.forEach((B) => {
            h(B.isIntersecting);
          });
        },
        R = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        x.current && R.observe(x.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [a]),
    S.useEffect(() => {
      if (i) {
        let T = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [i]));
  let M = () => {
      o(!0);
    },
    w = () => {
      (o(!1), h(!1));
    };
  return u
    ? a !== 'intent'
      ? [f, x, {}]
      : [
          f,
          x,
          {
            onFocus: yi(m, M),
            onBlur: yi(d, w),
            onMouseEnter: yi(p, M),
            onMouseLeave: yi(g, w),
            onTouchStart: yi(b, M),
          },
        ]
    : [!1, x, {}];
}
function yi(a, r) {
  return (u) => {
    (a && a(u), u.defaultPrevented || r(u));
  };
}
function vx({ page: a, ...r }) {
  let { router: u } = Yg(),
    i = S.useMemo(() => qa(u.routes, a, u.basename), [u.routes, a, u.basename]);
  return i ? S.createElement(yx, { page: a, matches: i, ...r }) : null;
}
function gx(a) {
  let { manifest: r, routeModules: u } = Gg(),
    [i, o] = S.useState([]);
  return (
    S.useEffect(() => {
      let f = !1;
      return (
        sx(a, r, u).then((h) => {
          f || o(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, r, u]),
    i
  );
}
function yx({ page: a, matches: r, ...u }) {
  let i = Pa(),
    { manifest: o, routeModules: f } = Gg(),
    { basename: h } = Yg(),
    { loaderData: m, matches: d } = px(),
    p = S.useMemo(() => Sv(a, r, d, o, i, 'data'), [a, r, d, o, i]),
    g = S.useMemo(() => Sv(a, r, d, o, i, 'assets'), [a, r, d, o, i]),
    b = S.useMemo(() => {
      if (a === i.pathname + i.search + i.hash) return [];
      let w = new Set(),
        T = !1;
      if (
        (r.forEach((O) => {
          let B = o.routes[O.route.id];
          !B ||
            !B.hasLoader ||
            ((!p.some((j) => j.route.id === O.route.id) &&
              O.route.id in m &&
              f[O.route.id]?.shouldRevalidate) ||
            B.hasClientLoader
              ? (T = !0)
              : w.add(O.route.id));
        }),
        w.size === 0)
      )
        return [];
      let R = ix(a, h, 'data');
      return (
        T &&
          w.size > 0 &&
          R.searchParams.set(
            '_routes',
            r
              .filter((O) => w.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [h, m, i, o, p, r, a, f]),
    x = S.useMemo(() => cx(g, o), [g, o]),
    M = gx(g);
  return S.createElement(
    S.Fragment,
    null,
    b.map((w) =>
      S.createElement('link', {
        key: w,
        rel: 'prefetch',
        as: 'fetch',
        href: w,
        ...u,
      })
    ),
    x.map((w) =>
      S.createElement('link', { key: w, rel: 'modulepreload', href: w, ...u })
    ),
    M.map(({ key: w, link: T }) => S.createElement('link', { key: w, ...T }))
  );
}
function bx(...a) {
  return (r) => {
    a.forEach((u) => {
      typeof u == 'function' ? u(r) : u != null && (u.current = r);
    });
  };
}
var Pg =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Pg && (window.__reactRouterVersion = '7.7.1');
} catch {}
function Sx(a, r) {
  return oS({
    basename: r?.basename,
    unstable_getContext: r?.unstable_getContext,
    future: r?.future,
    history: R1({ window: r?.window }),
    hydrationData: xx(),
    routes: a,
    mapRouteProperties: GS,
    hydrationRouteProperties: PS,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
  }).initialize();
}
function xx() {
  let a = window?.__staticRouterHydrationData;
  return (a && a.errors && (a = { ...a, errors: wx(a.errors) }), a);
}
function wx(a) {
  if (!a) return null;
  let r = Object.entries(a),
    u = {};
  for (let [i, o] of r)
    if (o && o.__type === 'RouteErrorResponse')
      u[i] = new gu(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let f = window[o.__subType];
        if (typeof f == 'function')
          try {
            let h = new f(o.message);
            ((h.stack = ''), (u[i] = h));
          } catch {}
      }
      if (u[i] == null) {
        let f = new Error(o.message);
        ((f.stack = ''), (u[i] = f));
      }
    } else u[i] = o;
  return u;
}
var Xg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _u = S.forwardRef(function (
    {
      onClick: r,
      discover: u = 'render',
      prefetch: i = 'none',
      relative: o,
      reloadDocument: f,
      replace: h,
      state: m,
      target: d,
      to: p,
      preventScrollReset: g,
      viewTransition: b,
      ...x
    },
    M
  ) {
    let { basename: w } = S.useContext(Gn),
      T = typeof p == 'string' && Xg.test(p),
      R,
      O = !1;
    if (typeof p == 'string' && T && ((R = p), Pg))
      try {
        let re = new URL(window.location.href),
          we = p.startsWith('//') ? new URL(re.protocol + p) : new URL(p),
          De = En(we.pathname, w);
        we.origin === re.origin && De != null
          ? (p = De + we.search + we.hash)
          : (O = !0);
      } catch {
        Et(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let B = CS(p, { relative: o }),
      [j, J, z] = mx(i, x),
      A = Rx(p, {
        replace: h,
        state: m,
        target: d,
        preventScrollReset: g,
        relative: o,
        viewTransition: b,
      });
    function Z(re) {
      (r && r(re), re.defaultPrevented || A(re));
    }
    let te = S.createElement('a', {
      ...x,
      ...z,
      href: R || B,
      onClick: O || f ? r : Z,
      ref: bx(M, J),
      target: d,
      'data-discover': !T && u === 'render' ? 'true' : void 0,
    });
    return j && !T
      ? S.createElement(S.Fragment, null, te, S.createElement(vx, { page: B }))
      : te;
  });
_u.displayName = 'Link';
var Ex = S.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: u = !1,
    className: i = '',
    end: o = !1,
    style: f,
    to: h,
    viewTransition: m,
    children: d,
    ...p
  },
  g
) {
  let b = zi(h, { relative: p.relative }),
    x = Pa(),
    M = S.useContext(Di),
    { navigator: w, basename: T } = S.useContext(Gn),
    R = M != null && _x(b) && m === !0,
    O = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname,
    B = x.pathname,
    j =
      M && M.navigation && M.navigation.location
        ? M.navigation.location.pathname
        : null;
  (u ||
    ((B = B.toLowerCase()),
    (j = j ? j.toLowerCase() : null),
    (O = O.toLowerCase())),
    j && T && (j = En(j, T) || j));
  const J = O !== '/' && O.endsWith('/') ? O.length - 1 : O.length;
  let z = B === O || (!o && B.startsWith(O) && B.charAt(J) === '/'),
    A =
      j != null &&
      (j === O || (!o && j.startsWith(O) && j.charAt(O.length) === '/')),
    Z = { isActive: z, isPending: A, isTransitioning: R },
    te = z ? r : void 0,
    re;
  typeof i == 'function'
    ? (re = i(Z))
    : (re = [
        i,
        z ? 'active' : null,
        A ? 'pending' : null,
        R ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let we = typeof f == 'function' ? f(Z) : f;
  return S.createElement(
    _u,
    {
      ...p,
      'aria-current': te,
      className: re,
      ref: g,
      style: we,
      to: h,
      viewTransition: m,
    },
    typeof d == 'function' ? d(Z) : d
  );
});
Ex.displayName = 'NavLink';
var Ox = S.forwardRef(
  (
    {
      discover: a = 'render',
      fetcherKey: r,
      navigate: u,
      reloadDocument: i,
      replace: o,
      state: f,
      method: h = su,
      action: m,
      onSubmit: d,
      relative: p,
      preventScrollReset: g,
      viewTransition: b,
      ...x
    },
    M
  ) => {
    let w = Ax(),
      T = Dx(m, { relative: p }),
      R = h.toLowerCase() === 'get' ? 'get' : 'post',
      O = typeof m == 'string' && Xg.test(m),
      B = (j) => {
        if ((d && d(j), j.defaultPrevented)) return;
        j.preventDefault();
        let J = j.nativeEvent.submitter,
          z = J?.getAttribute('formmethod') || h;
        w(J || j.currentTarget, {
          fetcherKey: r,
          method: z,
          navigate: u,
          replace: o,
          state: f,
          relative: p,
          preventScrollReset: g,
          viewTransition: b,
        });
      };
    return S.createElement('form', {
      ref: M,
      method: R,
      action: T,
      onSubmit: i ? d : B,
      ...x,
      'data-discover': !O && a === 'render' ? 'true' : void 0,
    });
  }
);
Ox.displayName = 'Form';
function Mx(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $g(a) {
  let r = S.useContext(Er);
  return (Ue(r, Mx(a)), r);
}
function Rx(
  a,
  {
    target: r,
    replace: u,
    state: i,
    preventScrollReset: o,
    relative: f,
    viewTransition: h,
  } = {}
) {
  let m = Au(),
    d = Pa(),
    p = zi(a, { relative: f });
  return S.useCallback(
    (g) => {
      if (nx(g, r)) {
        g.preventDefault();
        let b = u !== void 0 ? u : Ya(d) === Ya(p);
        m(a, {
          replace: b,
          state: i,
          preventScrollReset: o,
          relative: f,
          viewTransition: h,
        });
      }
    },
    [d, m, p, u, i, r, a, o, f, h]
  );
}
var Cx = 0,
  Tx = () => `__${String(++Cx)}__`;
function Ax() {
  let { router: a } = $g('useSubmit'),
    { basename: r } = S.useContext(Gn),
    u = BS();
  return S.useCallback(
    async (i, o = {}) => {
      let { action: f, method: h, encType: m, formData: d, body: p } = lx(i, r);
      if (o.navigate === !1) {
        let g = o.fetcherKey || Tx();
        await a.fetch(g, u, o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: p,
          formMethod: o.method || h,
          formEncType: o.encType || m,
          flushSync: o.flushSync,
        });
      } else
        await a.navigate(o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: p,
          formMethod: o.method || h,
          formEncType: o.encType || m,
          replace: o.replace,
          state: o.state,
          fromRouteId: u,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [a, r, u]
  );
}
function Dx(a, { relative: r } = {}) {
  let { basename: u } = S.useContext(Gn),
    i = S.useContext(Dn);
  Ue(i, 'useFormAction must be used inside a RouteContext');
  let [o] = i.matches.slice(-1),
    f = { ...zi(a || '.', { relative: r }) },
    h = Pa();
  if (a == null) {
    f.search = h.search;
    let m = new URLSearchParams(f.search),
      d = m.getAll('index');
    if (d.some((g) => g === '')) {
      (m.delete('index'),
        d.filter((b) => b).forEach((b) => m.append('index', b)));
      let g = m.toString();
      f.search = g ? `?${g}` : '';
    }
  }
  return (
    (!a || a === '.') &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    u !== '/' && (f.pathname = f.pathname === '/' ? u : qn([u, f.pathname])),
    Ya(f)
  );
}
function _x(a, { relative: r } = {}) {
  let u = S.useContext(Yf);
  Ue(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = $g('useViewTransitionState'),
    o = zi(a, { relative: r });
  if (!u.isTransitioning) return !1;
  let f = En(u.currentLocation.pathname, i) || u.currentLocation.pathname,
    h = En(u.nextLocation.pathname, i) || u.nextLocation.pathname;
  return vu(o.pathname, h) != null || vu(o.pathname, f) != null;
}
var Fg = bg();
function zx(a) {
  return S.createElement($S, { flushSync: Fg.flushSync, ...a });
}
function xv() {
  const a = Bg();
  return (
    console.error(a),
    P.jsxs('div', {
      className: 'error-page',
      children: [
        P.jsx('h1', { children: '404' }),
        P.jsxs('p', {
          className: 'error-message',
          children: [' ', P.jsx('i', { children: a.statusText || a.message })],
        }),
        P.jsx('p', {
          className: 'error-subtext',
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        P.jsx(_u, {
          to: '/',
          className: 'link-btn primary',
          children: 'Go Home',
        }),
      ],
    })
  );
}
function pt(a, r) {
  const u = r.split('.');
  let i = a;
  for (const o of u) {
    if (typeof i == 'boolean' || typeof i == 'string') return i;
    if (i == null || typeof i != 'object') return;
    i = i[o];
  }
  return i;
}
function Nx(a) {
  const { theme: r, clearTheme: u, applyTheme: i, ...o } = a;
  return o;
}
function Xa(a, r) {
  let u = Nx(a);
  return (r && (u = { ...r, ...a }), u);
}
const $a = {
  defaultMerge: Symbol('deepmerge-ts: default merge'),
  skip: Symbol('deepmerge-ts: skip'),
};
$a.defaultMerge;
function Lx(a, r) {
  return r;
}
function kx(a, r) {
  return a.filter((u) => u !== void 0);
}
var wv;
(function (a) {
  ((a[(a.NOT = 0)] = 'NOT'),
    (a[(a.RECORD = 1)] = 'RECORD'),
    (a[(a.ARRAY = 2)] = 'ARRAY'),
    (a[(a.SET = 3)] = 'SET'),
    (a[(a.MAP = 4)] = 'MAP'),
    (a[(a.OTHER = 5)] = 'OTHER'));
})(wv || (wv = {}));
function Ev(a) {
  return typeof a != 'object' || a === null
    ? 0
    : Array.isArray(a)
      ? 2
      : Vx(a)
        ? 1
        : a instanceof Set
          ? 3
          : a instanceof Map
            ? 4
            : 5;
}
function Ux(a) {
  const r = new Set();
  for (const u of a)
    for (const i of [...Object.keys(u), ...Object.getOwnPropertySymbols(u)])
      r.add(i);
  return r;
}
function jx(a, r) {
  return (
    typeof a == 'object' && Object.prototype.propertyIsEnumerable.call(a, r)
  );
}
function Qg(a) {
  let r = 0,
    u = a[0]?.[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return {
        next() {
          do {
            if (u === void 0) return { done: !0, value: void 0 };
            const i = u.next();
            if (i.done === !0) {
              ((r += 1), (u = a[r]?.[Symbol.iterator]()));
              continue;
            }
            return { done: !1, value: i.value };
          } while (!0);
        },
      };
    },
  };
}
const Ov = ['[object Object]', '[object Module]'];
function Vx(a) {
  if (!Ov.includes(Object.prototype.toString.call(a))) return !1;
  const { constructor: r } = a;
  if (r === void 0) return !0;
  const u = r.prototype;
  return !(
    u === null ||
    typeof u != 'object' ||
    !Ov.includes(Object.prototype.toString.call(u)) ||
    !u.hasOwnProperty('isPrototypeOf')
  );
}
function Hx(a, r, u) {
  const i = {};
  for (const o of Ux(a)) {
    const f = [];
    for (const d of a) jx(d, o) && f.push(d[o]);
    if (f.length === 0) continue;
    const h = r.metaDataUpdater(u, { key: o, parents: a }),
      m = Kg(f, r, h);
    m !== $a.skip &&
      (o === '__proto__'
        ? Object.defineProperty(i, o, {
            value: m,
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (i[o] = m));
  }
  return i;
}
function Bx(a) {
  return a.flat();
}
function qx(a) {
  return new Set(Qg(a));
}
function Yx(a) {
  return new Map(Qg(a));
}
function Gx(a) {
  return a.at(-1);
}
const Jo = {
  mergeRecords: Hx,
  mergeArrays: Bx,
  mergeSets: qx,
  mergeMaps: Yx,
  mergeOthers: Gx,
};
function Px(...a) {
  return Zg({})(...a);
}
function Zg(a, r) {
  const u = Xx(a, i);
  function i(...o) {
    return Kg(o, u, r);
  }
  return i;
}
function Xx(a, r) {
  return {
    defaultMergeFunctions: Jo,
    mergeFunctions: {
      ...Jo,
      ...Object.fromEntries(
        Object.entries(a)
          .filter(([u, i]) => Object.hasOwn(Jo, u))
          .map(([u, i]) => (i === !1 ? [u, Jo.mergeOthers] : [u, i]))
      ),
    },
    metaDataUpdater: a.metaDataUpdater ?? Lx,
    deepmerge: r,
    useImplicitDefaultMerging: a.enableImplicitDefaultMerging ?? !1,
    filterValues: a.filterValues === !1 ? void 0 : (a.filterValues ?? kx),
    actions: $a,
  };
}
function Kg(a, r, u) {
  const i = r.filterValues?.(a, u) ?? a;
  if (i.length === 0) return;
  if (i.length === 1) return tf(i, r, u);
  const o = Ev(i[0]);
  if (o !== 0 && o !== 5) {
    for (let f = 1; f < i.length; f++) if (Ev(i[f]) !== o) return tf(i, r, u);
  }
  switch (o) {
    case 1:
      return $x(i, r, u);
    case 2:
      return Fx(i, r, u);
    case 3:
      return Qx(i, r, u);
    case 4:
      return Zx(i, r, u);
    default:
      return tf(i, r, u);
  }
}
function $x(a, r, u) {
  const i = r.mergeFunctions.mergeRecords(a, r, u);
  return i === $a.defaultMerge ||
    (r.useImplicitDefaultMerging &&
      i === void 0 &&
      r.mergeFunctions.mergeRecords !== r.defaultMergeFunctions.mergeRecords)
    ? r.defaultMergeFunctions.mergeRecords(a, r, u)
    : i;
}
function Fx(a, r, u) {
  const i = r.mergeFunctions.mergeArrays(a, r, u);
  return i === $a.defaultMerge ||
    (r.useImplicitDefaultMerging &&
      i === void 0 &&
      r.mergeFunctions.mergeArrays !== r.defaultMergeFunctions.mergeArrays)
    ? r.defaultMergeFunctions.mergeArrays(a)
    : i;
}
function Qx(a, r, u) {
  const i = r.mergeFunctions.mergeSets(a, r, u);
  return i === $a.defaultMerge ||
    (r.useImplicitDefaultMerging &&
      i === void 0 &&
      r.mergeFunctions.mergeSets !== r.defaultMergeFunctions.mergeSets)
    ? r.defaultMergeFunctions.mergeSets(a)
    : i;
}
function Zx(a, r, u) {
  const i = r.mergeFunctions.mergeMaps(a, r, u);
  return i === $a.defaultMerge ||
    (r.useImplicitDefaultMerging &&
      i === void 0 &&
      r.mergeFunctions.mergeMaps !== r.defaultMergeFunctions.mergeMaps)
    ? r.defaultMergeFunctions.mergeMaps(a)
    : i;
}
function tf(a, r, u) {
  const i = r.mergeFunctions.mergeOthers(a, r, u);
  return i === $a.defaultMerge ||
    (r.useImplicitDefaultMerging &&
      i === void 0 &&
      r.mergeFunctions.mergeOthers !== r.defaultMergeFunctions.mergeOthers)
    ? r.defaultMergeFunctions.mergeOthers(a)
    : i;
}
function fu(a) {
  var r, u, i;
  if (Array.isArray(a)) {
    for (u = Array((r = a.length)); r--; )
      u[r] = (i = a[r]) && typeof i == 'object' ? fu(i) : i;
    return u;
  }
  if (Object.prototype.toString.call(a) === '[object Object]') {
    u = {};
    for (r in a)
      r === '__proto__'
        ? Object.defineProperty(u, r, {
            value: fu(a[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (u[r] = (i = a[r]) && typeof i == 'object' ? fu(i) : i);
    return u;
  }
  return a;
}
const Qf = { dark: void 0, prefix: void 0, version: void 0 };
function Kx() {
  return Qf.dark;
}
function Ig() {
  return Qf.prefix;
}
function Jg() {
  return Qf.version;
}
function Ix(a) {
  return Zg({
    mergeOthers: (r, u) => {
      if (r.some((i) => typeof i == 'string')) {
        const i = r.filter((h) => typeof h == 'string'),
          o = new Set(),
          f = [];
        for (const h of i) {
          const m = [...new Set(h.split(/\s+/))];
          f.push(m.filter((d) => !o.has(d)).join(' '));
          for (const d of m) o.add(d);
        }
        return a(f);
      }
      return u.actions.defaultMerge;
    },
  });
}
function Ef(a, r) {
  if (a === r) return !0;
  if (a && r && typeof a == 'object' && typeof r == 'object') {
    if (a.constructor !== r.constructor) return !1;
    if (Array.isArray(a))
      return a.length !== r.length ? !1 : a.every((i, o) => Ef(i, r[o]));
    if (a.constructor === RegExp)
      return a.source === r.source && a.flags === r.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === r.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === r.toString();
    const u = Object.keys(a);
    return u.length !== Object.keys(r).length
      ? !1
      : u.every(
          (i) => Object.prototype.hasOwnProperty.call(r, i) && Ef(a[i], r[i])
        );
  }
  return a !== a && r !== r;
}
const Zf = '-',
  Jx = (a) => {
    const r = e2(a),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: i } = a;
    return {
      getClassGroupId: (h) => {
        const m = h.split(Zf);
        return (m[0] === '' && m.length !== 1 && m.shift(), Wg(m, r) || Wx(h));
      },
      getConflictingClassGroupIds: (h, m) => {
        const d = u[h] || [];
        return m && i[h] ? [...d, ...i[h]] : d;
      },
    };
  },
  Wg = (a, r) => {
    if (a.length === 0) return r.classGroupId;
    const u = a[0],
      i = r.nextPart.get(u),
      o = i ? Wg(a.slice(1), i) : void 0;
    if (o) return o;
    if (r.validators.length === 0) return;
    const f = a.join(Zf);
    return r.validators.find(({ validator: h }) => h(f))?.classGroupId;
  },
  Mv = /^\[(.+)\]$/,
  Wx = (a) => {
    if (Mv.test(a)) {
      const r = Mv.exec(a)[1],
        u = r?.substring(0, r.indexOf(':'));
      if (u) return 'arbitrary..' + u;
    }
  },
  e2 = (a) => {
    const { theme: r, classGroups: u } = a,
      i = { nextPart: new Map(), validators: [] };
    for (const o in u) Of(u[o], i, o, r);
    return i;
  },
  Of = (a, r, u, i) => {
    a.forEach((o) => {
      if (typeof o == 'string') {
        const f = o === '' ? r : Rv(r, o);
        f.classGroupId = u;
        return;
      }
      if (typeof o == 'function') {
        if (t2(o)) {
          Of(o(i), r, u, i);
          return;
        }
        r.validators.push({ validator: o, classGroupId: u });
        return;
      }
      Object.entries(o).forEach(([f, h]) => {
        Of(h, Rv(r, f), u, i);
      });
    });
  },
  Rv = (a, r) => {
    let u = a;
    return (
      r.split(Zf).forEach((i) => {
        (u.nextPart.has(i) ||
          u.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(i)));
      }),
      u
    );
  },
  t2 = (a) => a.isThemeGetter,
  n2 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      u = new Map(),
      i = new Map();
    const o = (f, h) => {
      (u.set(f, h), r++, r > a && ((r = 0), (i = u), (u = new Map())));
    };
    return {
      get(f) {
        let h = u.get(f);
        if (h !== void 0) return h;
        if ((h = i.get(f)) !== void 0) return (o(f, h), h);
      },
      set(f, h) {
        u.has(f) ? u.set(f, h) : o(f, h);
      },
    };
  },
  Mf = '!',
  Rf = ':',
  a2 = Rf.length,
  r2 = (a) => {
    const { prefix: r, experimentalParseClassName: u } = a;
    let i = (o) => {
      const f = [];
      let h = 0,
        m = 0,
        d = 0,
        p;
      for (let w = 0; w < o.length; w++) {
        let T = o[w];
        if (h === 0 && m === 0) {
          if (T === Rf) {
            (f.push(o.slice(d, w)), (d = w + a2));
            continue;
          }
          if (T === '/') {
            p = w;
            continue;
          }
        }
        T === '[' ? h++ : T === ']' ? h-- : T === '(' ? m++ : T === ')' && m--;
      }
      const g = f.length === 0 ? o : o.substring(d),
        b = l2(g),
        x = b !== g,
        M = p && p > d ? p - d : void 0;
      return {
        modifiers: f,
        hasImportantModifier: x,
        baseClassName: b,
        maybePostfixModifierPosition: M,
      };
    };
    if (r) {
      const o = r + Rf,
        f = i;
      i = (h) =>
        h.startsWith(o)
          ? f(h.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: h,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (u) {
      const o = i;
      i = (f) => u({ className: f, parseClassName: o });
    }
    return i;
  },
  l2 = (a) =>
    a.endsWith(Mf)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Mf)
        ? a.substring(1)
        : a,
  i2 = (a) => {
    const r = Object.fromEntries(a.orderSensitiveModifiers.map((i) => [i, !0]));
    return (i) => {
      if (i.length <= 1) return i;
      const o = [];
      let f = [];
      return (
        i.forEach((h) => {
          h[0] === '[' || r[h] ? (o.push(...f.sort(), h), (f = [])) : f.push(h);
        }),
        o.push(...f.sort()),
        o
      );
    };
  },
  o2 = (a) => ({
    cache: n2(a.cacheSize),
    parseClassName: r2(a),
    sortModifiers: i2(a),
    ...Jx(a),
  }),
  u2 = /\s+/,
  s2 = (a, r) => {
    const {
        parseClassName: u,
        getClassGroupId: i,
        getConflictingClassGroupIds: o,
        sortModifiers: f,
      } = r,
      h = [],
      m = a.trim().split(u2);
    let d = '';
    for (let p = m.length - 1; p >= 0; p -= 1) {
      const g = m[p],
        {
          isExternal: b,
          modifiers: x,
          hasImportantModifier: M,
          baseClassName: w,
          maybePostfixModifierPosition: T,
        } = u(g);
      if (b) {
        d = g + (d.length > 0 ? ' ' + d : d);
        continue;
      }
      let R = !!T,
        O = i(R ? w.substring(0, T) : w);
      if (!O) {
        if (!R) {
          d = g + (d.length > 0 ? ' ' + d : d);
          continue;
        }
        if (((O = i(w)), !O)) {
          d = g + (d.length > 0 ? ' ' + d : d);
          continue;
        }
        R = !1;
      }
      const B = f(x).join(':'),
        j = M ? B + Mf : B,
        J = j + O;
      if (h.includes(J)) continue;
      h.push(J);
      const z = o(O, R);
      for (let A = 0; A < z.length; ++A) {
        const Z = z[A];
        h.push(j + Z);
      }
      d = g + (d.length > 0 ? ' ' + d : d);
    }
    return d;
  };
function c2() {
  let a = 0,
    r,
    u,
    i = '';
  for (; a < arguments.length; )
    (r = arguments[a++]) && (u = e0(r)) && (i && (i += ' '), (i += u));
  return i;
}
const e0 = (a) => {
  if (typeof a == 'string') return a;
  let r,
    u = '';
  for (let i = 0; i < a.length; i++)
    a[i] && (r = e0(a[i])) && (u && (u += ' '), (u += r));
  return u;
};
function Cv(a, ...r) {
  let u,
    i,
    o,
    f = h;
  function h(d) {
    const p = r.reduce((g, b) => b(g), a());
    return ((u = o2(p)), (i = u.cache.get), (o = u.cache.set), (f = m), m(d));
  }
  function m(d) {
    const p = i(d);
    if (p) return p;
    const g = s2(d, u);
    return (o(d, g), g);
  }
  return function () {
    return f(c2.apply(null, arguments));
  };
}
const _t = (a) => {
    const r = (u) => u[a] || [];
    return ((r.isThemeGetter = !0), r);
  },
  t0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  n0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  f2 = /^\d+\/\d+$/,
  d2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  h2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  p2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  m2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  v2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ol = (a) => f2.test(a),
  Ye = (a) => !!a && !Number.isNaN(Number(a)),
  yr = (a) => !!a && Number.isInteger(Number(a)),
  Tv = (a) => a.endsWith('%') && Ye(a.slice(0, -1)),
  Va = (a) => d2.test(a),
  g2 = () => !0,
  y2 = (a) => h2.test(a) && !p2.test(a),
  Kf = () => !1,
  b2 = (a) => m2.test(a),
  S2 = (a) => v2.test(a),
  x2 = (a) => !ue(a) && !se(a),
  w2 = (a) => ml(a, l0, Kf),
  ue = (a) => t0.test(a),
  br = (a) => ml(a, i0, y2),
  nf = (a) => ml(a, N2, Ye),
  E2 = (a) => ml(a, a0, Kf),
  O2 = (a) => ml(a, r0, S2),
  M2 = (a) => ml(a, Kf, b2),
  se = (a) => n0.test(a),
  Wo = (a) => vl(a, i0),
  R2 = (a) => vl(a, L2),
  C2 = (a) => vl(a, a0),
  T2 = (a) => vl(a, l0),
  A2 = (a) => vl(a, r0),
  D2 = (a) => vl(a, k2, !0),
  ml = (a, r, u) => {
    const i = t0.exec(a);
    return i ? (i[1] ? r(i[1]) : u(i[2])) : !1;
  },
  vl = (a, r, u = !1) => {
    const i = n0.exec(a);
    return i ? (i[1] ? r(i[1]) : u) : !1;
  },
  a0 = (a) => a === 'position',
  _2 = new Set(['image', 'url']),
  r0 = (a) => _2.has(a),
  z2 = new Set(['length', 'size', 'percentage']),
  l0 = (a) => z2.has(a),
  i0 = (a) => a === 'length',
  N2 = (a) => a === 'number',
  L2 = (a) => a === 'family-name',
  k2 = (a) => a === 'shadow',
  Av = () => {
    const a = _t('color'),
      r = _t('font'),
      u = _t('text'),
      i = _t('font-weight'),
      o = _t('tracking'),
      f = _t('leading'),
      h = _t('breakpoint'),
      m = _t('container'),
      d = _t('spacing'),
      p = _t('radius'),
      g = _t('shadow'),
      b = _t('inset-shadow'),
      x = _t('drop-shadow'),
      M = _t('blur'),
      w = _t('perspective'),
      T = _t('aspect'),
      R = _t('ease'),
      O = _t('animate'),
      B = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      j = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      J = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      z = () => ['auto', 'contain', 'none'],
      A = () => [ol, 'px', 'full', 'auto', se, ue, d],
      Z = () => [yr, 'none', 'subgrid', se, ue],
      te = () => ['auto', { span: ['full', yr, se, ue] }, se, ue],
      re = () => [yr, 'auto', se, ue],
      we = () => ['auto', 'min', 'max', 'fr', se, ue],
      De = () => [se, ue, d],
      Ee = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
      ],
      me = () => ['start', 'end', 'center', 'stretch'],
      le = () => [se, ue, d],
      oe = () => ['px', ...le()],
      N = () => ['px', 'auto', ...le()],
      I = () => [
        ol,
        'auto',
        'px',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        se,
        ue,
        d,
      ],
      Q = () => [a, se, ue],
      ve = () => [Tv, br],
      E = () => ['', 'none', 'full', p, se, ue],
      Y = () => ['', Ye, Wo, br],
      $ = () => ['solid', 'dashed', 'dotted', 'double'],
      W = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      ae = () => ['', 'none', M, se, ue],
      ce = () => [
        'center',
        'top',
        'top-right',
        'right',
        'bottom-right',
        'bottom',
        'bottom-left',
        'left',
        'top-left',
        se,
        ue,
      ],
      ie = () => ['none', Ye, se, ue],
      ze = () => ['none', Ye, se, ue],
      Ae = () => [Ye, se, ue],
      Je = () => [ol, 'full', 'px', se, ue, d];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Va],
        breakpoint: [Va],
        color: [g2],
        container: [Va],
        'drop-shadow': [Va],
        ease: ['in', 'out', 'in-out'],
        font: [x2],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [Va],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [Va],
        shadow: [Va],
        spacing: [Ye],
        text: [Va],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', ol, ue, se, T] }],
        container: ['container'],
        columns: [{ columns: [Ye, ue, se, m] }],
        'break-after': [{ 'break-after': B() }],
        'break-before': [{ 'break-before': B() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: [...j(), ue, se] }],
        overflow: [{ overflow: J() }],
        'overflow-x': [{ 'overflow-x': J() }],
        'overflow-y': [{ 'overflow-y': J() }],
        overscroll: [{ overscroll: z() }],
        'overscroll-x': [{ 'overscroll-x': z() }],
        'overscroll-y': [{ 'overscroll-y': z() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: A() }],
        'inset-x': [{ 'inset-x': A() }],
        'inset-y': [{ 'inset-y': A() }],
        start: [{ start: A() }],
        end: [{ end: A() }],
        top: [{ top: A() }],
        right: [{ right: A() }],
        bottom: [{ bottom: A() }],
        left: [{ left: A() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [yr, 'auto', se, ue] }],
        basis: [{ basis: [ol, 'full', 'auto', se, ue, m, d] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [Ye, ol, 'auto', 'initial', 'none', ue] }],
        grow: [{ grow: ['', Ye, se, ue] }],
        shrink: [{ shrink: ['', Ye, se, ue] }],
        order: [{ order: [yr, 'first', 'last', 'none', se, ue] }],
        'grid-cols': [{ 'grid-cols': Z() }],
        'col-start-end': [{ col: te() }],
        'col-start': [{ 'col-start': re() }],
        'col-end': [{ 'col-end': re() }],
        'grid-rows': [{ 'grid-rows': Z() }],
        'row-start-end': [{ row: te() }],
        'row-start': [{ 'row-start': re() }],
        'row-end': [{ 'row-end': re() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': we() }],
        'auto-rows': [{ 'auto-rows': we() }],
        gap: [{ gap: De() }],
        'gap-x': [{ 'gap-x': De() }],
        'gap-y': [{ 'gap-y': De() }],
        'justify-content': [{ justify: [...Ee(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...me(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...me()] }],
        'align-content': [{ content: ['normal', ...Ee()] }],
        'align-items': [{ items: [...me(), 'baseline'] }],
        'align-self': [{ self: ['auto', ...me(), 'baseline'] }],
        'place-content': [{ 'place-content': Ee() }],
        'place-items': [{ 'place-items': [...me(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...me()] }],
        p: [{ p: oe() }],
        px: [{ px: oe() }],
        py: [{ py: oe() }],
        ps: [{ ps: oe() }],
        pe: [{ pe: oe() }],
        pt: [{ pt: oe() }],
        pr: [{ pr: oe() }],
        pb: [{ pb: oe() }],
        pl: [{ pl: oe() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        'space-x': [{ 'space-x': le() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': le() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: I() }],
        w: [{ w: [m, 'screen', ...I()] }],
        'min-w': [{ 'min-w': [m, 'screen', 'none', ...I()] }],
        'max-w': [
          { 'max-w': [m, 'screen', 'none', 'prose', { screen: [h] }, ...I()] },
        ],
        h: [{ h: ['screen', ...I()] }],
        'min-h': [{ 'min-h': ['screen', 'none', ...I()] }],
        'max-h': [{ 'max-h': ['screen', ...I()] }],
        'font-size': [{ text: ['base', u, Wo, br] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [i, se, nf] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Tv,
              ue,
            ],
          },
        ],
        'font-family': [{ font: [R2, ue, r] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [o, se, ue] }],
        'line-clamp': [{ 'line-clamp': [Ye, 'none', se, nf] }],
        leading: [{ leading: [se, ue, f, d] }],
        'list-image': [{ 'list-image': ['none', se, ue] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', se, ue] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: Q() }],
        'text-color': [{ text: Q() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...$(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [Ye, 'from-font', 'auto', se, br] },
        ],
        'text-decoration-color': [{ decoration: Q() }],
        'underline-offset': [{ 'underline-offset': [Ye, 'auto', se, ue] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: ['px', ...le()] }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              se,
              ue,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', se, ue] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...j(), C2, E2] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', T2, w2] }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  yr,
                  se,
                  ue,
                ],
                radial: ['', se, ue],
                conic: [yr, se, ue],
              },
              A2,
              O2,
            ],
          },
        ],
        'bg-color': [{ bg: Q() }],
        'gradient-from-pos': [{ from: ve() }],
        'gradient-via-pos': [{ via: ve() }],
        'gradient-to-pos': [{ to: ve() }],
        'gradient-from': [{ from: Q() }],
        'gradient-via': [{ via: Q() }],
        'gradient-to': [{ to: Q() }],
        rounded: [{ rounded: E() }],
        'rounded-s': [{ 'rounded-s': E() }],
        'rounded-e': [{ 'rounded-e': E() }],
        'rounded-t': [{ 'rounded-t': E() }],
        'rounded-r': [{ 'rounded-r': E() }],
        'rounded-b': [{ 'rounded-b': E() }],
        'rounded-l': [{ 'rounded-l': E() }],
        'rounded-ss': [{ 'rounded-ss': E() }],
        'rounded-se': [{ 'rounded-se': E() }],
        'rounded-ee': [{ 'rounded-ee': E() }],
        'rounded-es': [{ 'rounded-es': E() }],
        'rounded-tl': [{ 'rounded-tl': E() }],
        'rounded-tr': [{ 'rounded-tr': E() }],
        'rounded-br': [{ 'rounded-br': E() }],
        'rounded-bl': [{ 'rounded-bl': E() }],
        'border-w': [{ border: Y() }],
        'border-w-x': [{ 'border-x': Y() }],
        'border-w-y': [{ 'border-y': Y() }],
        'border-w-s': [{ 'border-s': Y() }],
        'border-w-e': [{ 'border-e': Y() }],
        'border-w-t': [{ 'border-t': Y() }],
        'border-w-r': [{ 'border-r': Y() }],
        'border-w-b': [{ 'border-b': Y() }],
        'border-w-l': [{ 'border-l': Y() }],
        'divide-x': [{ 'divide-x': Y() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': Y() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...$(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...$(), 'hidden', 'none'] }],
        'border-color': [{ border: Q() }],
        'border-color-x': [{ 'border-x': Q() }],
        'border-color-y': [{ 'border-y': Q() }],
        'border-color-s': [{ 'border-s': Q() }],
        'border-color-e': [{ 'border-e': Q() }],
        'border-color-t': [{ 'border-t': Q() }],
        'border-color-r': [{ 'border-r': Q() }],
        'border-color-b': [{ 'border-b': Q() }],
        'border-color-l': [{ 'border-l': Q() }],
        'divide-color': [{ divide: Q() }],
        'outline-style': [{ outline: [...$(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [Ye, se, ue] }],
        'outline-w': [{ outline: ['', Ye, Wo, br] }],
        'outline-color': [{ outline: [a] }],
        shadow: [{ shadow: ['', 'none', g, D2, M2] }],
        'shadow-color': [{ shadow: Q() }],
        'inset-shadow': [{ 'inset-shadow': ['none', se, ue, b] }],
        'inset-shadow-color': [{ 'inset-shadow': Q() }],
        'ring-w': [{ ring: Y() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: Q() }],
        'ring-offset-w': [{ 'ring-offset': [Ye, br] }],
        'ring-offset-color': [{ 'ring-offset': Q() }],
        'inset-ring-w': [{ 'inset-ring': Y() }],
        'inset-ring-color': [{ 'inset-ring': Q() }],
        opacity: [{ opacity: [Ye, se, ue] }],
        'mix-blend': [{ 'mix-blend': [...W(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': W() }],
        filter: [{ filter: ['', 'none', se, ue] }],
        blur: [{ blur: ae() }],
        brightness: [{ brightness: [Ye, se, ue] }],
        contrast: [{ contrast: [Ye, se, ue] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', x, se, ue] }],
        grayscale: [{ grayscale: ['', Ye, se, ue] }],
        'hue-rotate': [{ 'hue-rotate': [Ye, se, ue] }],
        invert: [{ invert: ['', Ye, se, ue] }],
        saturate: [{ saturate: [Ye, se, ue] }],
        sepia: [{ sepia: ['', Ye, se, ue] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', se, ue] }],
        'backdrop-blur': [{ 'backdrop-blur': ae() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [Ye, se, ue] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [Ye, se, ue] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Ye, se, ue] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Ye, se, ue] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', Ye, se, ue] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [Ye, se, ue] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Ye, se, ue] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', Ye, se, ue] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': le() }],
        'border-spacing-x': [{ 'border-spacing-x': le() }],
        'border-spacing-y': [{ 'border-spacing-y': le() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              '',
              'all',
              'colors',
              'opacity',
              'shadow',
              'transform',
              'none',
              se,
              ue,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [Ye, 'initial', se, ue] }],
        ease: [{ ease: ['linear', 'initial', R, se, ue] }],
        delay: [{ delay: [Ye, se, ue] }],
        animate: [{ animate: ['none', O, se, ue] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [w, se, ue] }],
        'perspective-origin': [{ 'perspective-origin': ce() }],
        rotate: [{ rotate: ie() }],
        'rotate-x': [{ 'rotate-x': ie() }],
        'rotate-y': [{ 'rotate-y': ie() }],
        'rotate-z': [{ 'rotate-z': ie() }],
        scale: [{ scale: ze() }],
        'scale-x': [{ 'scale-x': ze() }],
        'scale-y': [{ 'scale-y': ze() }],
        'scale-z': [{ 'scale-z': ze() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: Ae() }],
        'skew-x': [{ 'skew-x': Ae() }],
        'skew-y': [{ 'skew-y': Ae() }],
        transform: [{ transform: [se, ue, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: ce() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: Je() }],
        'translate-x': [{ 'translate-x': Je() }],
        'translate-y': [{ 'translate-y': Je() }],
        'translate-z': [{ 'translate-z': Je() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: Q() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: Q() }],
        'color-scheme': [
          {
            scheme: [
              'normal',
              'dark',
              'light',
              'light-dark',
              'only-dark',
              'only-light',
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              se,
              ue,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': le() }],
        'scroll-mx': [{ 'scroll-mx': le() }],
        'scroll-my': [{ 'scroll-my': le() }],
        'scroll-ms': [{ 'scroll-ms': le() }],
        'scroll-me': [{ 'scroll-me': le() }],
        'scroll-mt': [{ 'scroll-mt': le() }],
        'scroll-mr': [{ 'scroll-mr': le() }],
        'scroll-mb': [{ 'scroll-mb': le() }],
        'scroll-ml': [{ 'scroll-ml': le() }],
        'scroll-p': [{ 'scroll-p': le() }],
        'scroll-px': [{ 'scroll-px': le() }],
        'scroll-py': [{ 'scroll-py': le() }],
        'scroll-ps': [{ 'scroll-ps': le() }],
        'scroll-pe': [{ 'scroll-pe': le() }],
        'scroll-pt': [{ 'scroll-pt': le() }],
        'scroll-pr': [{ 'scroll-pr': le() }],
        'scroll-pb': [{ 'scroll-pb': le() }],
        'scroll-pl': [{ 'scroll-pl': le() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          {
            'will-change': ['auto', 'scroll', 'contents', 'transform', se, ue],
          },
        ],
        fill: [{ fill: ['none', ...Q()] }],
        'stroke-w': [{ stroke: [Ye, Wo, br, nf] }],
        stroke: [{ stroke: ['none', ...Q()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': [
          'translate',
          'translate-x',
          'translate-y',
          'translate-z',
        ],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        'before',
        'after',
        'placeholder',
        'file',
        'marker',
        'selection',
        'first-line',
        'first-letter',
        'backdrop',
        '*',
        '**',
      ],
    };
  },
  U2 = (
    a,
    {
      cacheSize: r,
      prefix: u,
      experimentalParseClassName: i,
      extend: o = {},
      override: f = {},
    }
  ) => (
    wi(a, 'cacheSize', r),
    wi(a, 'prefix', u),
    wi(a, 'experimentalParseClassName', i),
    eu(a.theme, f.theme),
    eu(a.classGroups, f.classGroups),
    eu(a.conflictingClassGroups, f.conflictingClassGroups),
    eu(a.conflictingClassGroupModifiers, f.conflictingClassGroupModifiers),
    wi(a, 'orderSensitiveModifiers', f.orderSensitiveModifiers),
    tu(a.theme, o.theme),
    tu(a.classGroups, o.classGroups),
    tu(a.conflictingClassGroups, o.conflictingClassGroups),
    tu(a.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers),
    o0(a, o, 'orderSensitiveModifiers'),
    a
  ),
  wi = (a, r, u) => {
    u !== void 0 && (a[r] = u);
  },
  eu = (a, r) => {
    if (r) for (const u in r) wi(a, u, r[u]);
  },
  tu = (a, r) => {
    if (r) for (const u in r) o0(a, r, u);
  },
  o0 = (a, r, u) => {
    const i = r[u];
    i !== void 0 && (a[u] = a[u] ? a[u].concat(i) : i);
  },
  j2 = (a, ...r) =>
    typeof a == 'function' ? Cv(Av, a, ...r) : Cv(() => U2(Av(), a), ...r),
  Dv = new Map();
function An(...a) {
  const r = Ig(),
    u = Jg(),
    i = `${r}.${u}`,
    o = Dv.get(i);
  if (o) return o(...a);
  const f = j2({
    extend: {
      classGroups: {
        'bg-image': [
          'bg-arrow-down-icon',
          'bg-check-icon',
          'bg-dash-icon',
          'bg-dot-icon',
        ],
        shadow: ['shadow-sm-light'],
      },
    },
    prefix: r,
  });
  return (Dv.set(i, f), f(...a));
}
function Fa(...a) {
  return V2(() => H2(...a), a);
}
function V2(a, r) {
  const u = S.useRef(),
    i = S.useRef();
  return (
    (!u.current || !Ef(u.current, r)) && ((u.current = r), (i.current = a())),
    i.current
  );
}
function H2([a, ...r], u, i) {
  const o = Kx(),
    f = Ig(),
    h = Jg(),
    m = r?.length ? r?.filter((x) => x !== void 0) : void 0,
    d = u?.length ? u?.filter((x) => x !== void 0) : void 0,
    p = i?.length ? i?.filter((x) => x !== void 0) : void 0,
    g = d?.length || o === !1 || h === 4 || f ? fu(a) : a;
  if (d?.length) {
    const x = Cf(g, !1);
    let M = !1;
    for (const w of d) (w && (M = !0), B2(x, w));
    M && Y2(g, x);
  }
  let b = g;
  if ((m?.length && (b = Ix(An)(g, ...m)), p?.length && m?.length)) {
    const x = Cf(g, 'merge');
    let M = !1;
    for (const w of p) (w !== 'merge' && (M = !0), q2(x, w));
    M && G2(b, Px(g, ...r), x);
  }
  return b;
}
function B2(a, r) {
  function u(i, o) {
    if (typeof o == 'boolean')
      if (typeof i == 'object' && i !== null)
        for (const f in i) i[f] = u(i[f], o);
      else return o;
    if (typeof o == 'object' && o !== null)
      for (const f in o) i[f] = u(i[f], o[f]);
    return i;
  }
  u(a, r);
}
function q2(a, r) {
  function u(i, o) {
    if (typeof o == 'string')
      if (typeof i == 'object' && i !== null)
        for (const f in i) i[f] = u(i[f], o);
      else return o;
    if (typeof o == 'object' && o !== null)
      for (const f in o) i[f] = u(i[f], o[f]);
    return i;
  }
  u(a, r);
}
function Y2(a, r) {
  function u(i, o) {
    if (o === !0)
      if (typeof i == 'object' && i !== null)
        for (const f in i) i[f] = u(i[f], o);
      else return '';
    if (typeof o == 'object' && o !== null)
      for (const f in o) i[f] = u(i[f], o[f]);
    return i;
  }
  u(a, r);
}
function G2(a, r, u) {
  function i(o, f, h) {
    if (h === 'replace')
      if (typeof o == 'object' && o !== null)
        for (const m in o) o[m] = i(o[m], f[m], h);
      else return f;
    if (typeof h == 'object' && h !== null)
      for (const m in h) o[m] = i(o[m], f[m], h[m]);
    return o;
  }
  i(a, r, u);
}
function Cf(a, r) {
  if (a === null || typeof a != 'object') return r;
  const u = {};
  for (const i in a) u[i] = Cf(a[i], r);
  return u;
}
const P2 = S.createContext(void 0);
function Qa() {
  return S.useContext(P2) ?? {};
}
const u0 = S.forwardRef(
  ({ children: a, as: r, href: u, type: i = 'button', ...o }, f) => {
    const h = r || (u ? 'a' : 'button');
    return S.createElement(h, { ref: f, href: u, type: i, ...o }, a);
  }
);
u0.displayName = 'ButtonBase';
const X2 = S.createContext(void 0);
function $2() {
  return S.useContext(X2);
}
const F2 = {
    base: 'relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4',
    disabled: 'pointer-events-none opacity-50',
    fullSized: 'w-full',
    grouped:
      'rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2',
    pill: 'rounded-full',
    size: {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-5 text-sm',
      lg: 'h-12 px-5 text-base',
      xl: 'h-[52px] px-6 text-base',
    },
    color: {
      default:
        'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      alternative:
        'border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700',
      blue: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      cyan: 'bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800',
      dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      gray: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
      green:
        'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      indigo:
        'bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800',
      light:
        'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      lime: 'bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800',
      pink: 'bg-pink-700 text-white hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800',
      purple:
        'bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
      red: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
      teal: 'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800',
      yellow:
        'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
    },
    outlineColor: {
      default:
        'border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800',
      blue: 'border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800',
      cyan: 'border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-cyan-800',
      dark: 'border border-gray-800 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800',
      gray: 'border border-gray-700 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800',
      green:
        'border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-600 dark:text-green-500 dark:hover:border-green-700 dark:hover:bg-green-700 dark:hover:text-white dark:focus:ring-green-800',
      indigo:
        'border border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:ring-indigo-300 dark:border-indigo-600 dark:text-indigo-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-white dark:focus:ring-indigo-800',
      lime: 'border border-lime-700 text-lime-700 hover:border-lime-800 hover:bg-lime-800 hover:text-white focus:ring-lime-300 dark:border-lime-600 dark:text-lime-500 dark:hover:border-lime-700 dark:hover:bg-lime-700 dark:hover:text-white dark:focus:ring-lime-800',
      pink: 'border border-pink-700 text-pink-700 hover:border-pink-800 hover:bg-pink-800 hover:text-white focus:ring-pink-300 dark:border-pink-600 dark:text-pink-500 dark:hover:border-pink-700 dark:hover:bg-pink-700 dark:hover:text-white dark:focus:ring-pink-800',
      purple:
        'border border-purple-700 text-purple-700 hover:border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-purple-300 dark:border-purple-600 dark:text-purple-400 dark:hover:border-purple-700 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-800',
      red: 'border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:border-red-700 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800',
      teal: 'border border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-300 dark:border-teal-600 dark:text-teal-400 dark:hover:border-teal-700 dark:hover:bg-teal-700 dark:hover:text-white dark:focus:ring-teal-800',
      yellow:
        'border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900',
    },
  },
  If = S.forwardRef((a, r) => {
    const u = Qa(),
      i = Fa(
        [F2, u.theme?.button, a.theme],
        [pt(u.clearTheme, 'button'), a.clearTheme],
        [pt(u.applyTheme, 'button'), a.applyTheme]
      ),
      {
        children: o,
        className: f,
        color: h = 'default',
        disabled: m,
        fullSized: d,
        outline: p,
        pill: g,
        size: b = 'md',
        ...x
      } = Xa(a, u.props?.button),
      M = $2(),
      w = M?.outline ?? p,
      T = M?.pill ?? g;
    return P.jsx(u0, {
      ref: r,
      disabled: m,
      className: An(
        i.base,
        i.size[b],
        T && i.pill,
        m && i.disabled,
        d && i.fullSized,
        w ? i.outlineColor[h] : i.color[h],
        M && i.grouped,
        f
      ),
      ...x,
      children: o,
    });
  });
If.displayName = 'Button';
function zu() {
  return typeof window < 'u';
}
function s0(a) {
  return f0(a) ? (a.nodeName || '').toLowerCase() : '#document';
}
function fa(a) {
  var r;
  return (
    (a == null || (r = a.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function c0(a) {
  var r;
  return (r = (f0(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function f0(a) {
  return zu() ? a instanceof Node || a instanceof fa(a).Node : !1;
}
function Q2(a) {
  return zu() ? a instanceof Element || a instanceof fa(a).Element : !1;
}
function Jf(a) {
  return zu() ? a instanceof HTMLElement || a instanceof fa(a).HTMLElement : !1;
}
function _v(a) {
  return !zu() || typeof ShadowRoot > 'u'
    ? !1
    : a instanceof ShadowRoot || a instanceof fa(a).ShadowRoot;
}
const Z2 = new Set(['inline', 'contents']);
function d0(a) {
  const { overflow: r, overflowX: u, overflowY: i, display: o } = Wf(a);
  return /auto|scroll|overlay|hidden|clip/.test(r + i + u) && !Z2.has(o);
}
function K2() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
const I2 = new Set(['html', 'body', '#document']);
function J2(a) {
  return I2.has(s0(a));
}
function Wf(a) {
  return fa(a).getComputedStyle(a);
}
function W2(a) {
  if (s0(a) === 'html') return a;
  const r = a.assignedSlot || a.parentNode || (_v(a) && a.host) || c0(a);
  return _v(r) ? r.host : r;
}
function h0(a) {
  const r = W2(a);
  return J2(r)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : Jf(r) && d0(r)
      ? r
      : h0(r);
}
function bu(a, r, u) {
  var i;
  (r === void 0 && (r = []), u === void 0 && (u = !0));
  const o = h0(a),
    f = o === ((i = a.ownerDocument) == null ? void 0 : i.body),
    h = fa(o);
  if (f) {
    const m = Tf(h);
    return r.concat(
      h,
      h.visualViewport || [],
      d0(o) ? o : [],
      m && u ? bu(m) : []
    );
  }
  return r.concat(o, bu(o, [], u));
}
function Tf(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const ew = Math.min,
  tw = Math.max,
  Su = Math.round,
  nu = Math.floor,
  xu = (a) => ({ x: a, y: a });
function nw(a) {
  const { x: r, y: u, width: i, height: o } = a;
  return {
    width: i,
    height: o,
    top: u,
    left: r,
    right: r + i,
    bottom: u + o,
    x: r,
    y: u,
  };
}
function aw(a) {
  const r = Wf(a);
  let u = parseFloat(r.width) || 0,
    i = parseFloat(r.height) || 0;
  const o = Jf(a),
    f = o ? a.offsetWidth : u,
    h = o ? a.offsetHeight : i,
    m = Su(u) !== f || Su(i) !== h;
  return (m && ((u = f), (i = h)), { width: u, height: i, $: m });
}
function ed(a) {
  return Q2(a) ? a : a.contextElement;
}
function zv(a) {
  const r = ed(a);
  if (!Jf(r)) return xu(1);
  const u = r.getBoundingClientRect(),
    { width: i, height: o, $: f } = aw(r);
  let h = (f ? Su(u.width) : u.width) / i,
    m = (f ? Su(u.height) : u.height) / o;
  return (
    (!h || !Number.isFinite(h)) && (h = 1),
    (!m || !Number.isFinite(m)) && (m = 1),
    { x: h, y: m }
  );
}
const rw = xu(0);
function lw(a) {
  const r = fa(a);
  return !K2() || !r.visualViewport
    ? rw
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function iw(a, r, u) {
  return !1;
}
function Nv(a, r, u, i) {
  r === void 0 && (r = !1);
  const o = a.getBoundingClientRect(),
    f = ed(a);
  let h = xu(1);
  r && (h = zv(a));
  const m = iw() ? lw(f) : xu(0);
  let d = (o.left + m.x) / h.x,
    p = (o.top + m.y) / h.y,
    g = o.width / h.x,
    b = o.height / h.y;
  if (f) {
    const x = fa(f),
      M = i;
    let w = x,
      T = Tf(w);
    for (; T && i && M !== w; ) {
      const R = zv(T),
        O = T.getBoundingClientRect(),
        B = Wf(T),
        j = O.left + (T.clientLeft + parseFloat(B.paddingLeft)) * R.x,
        J = O.top + (T.clientTop + parseFloat(B.paddingTop)) * R.y;
      ((d *= R.x),
        (p *= R.y),
        (g *= R.x),
        (b *= R.y),
        (d += j),
        (p += J),
        (w = fa(T)),
        (T = Tf(w)));
    }
  }
  return nw({ width: g, height: b, x: d, y: p });
}
function p0(a, r) {
  return (
    a.x === r.x && a.y === r.y && a.width === r.width && a.height === r.height
  );
}
function ow(a, r) {
  let u = null,
    i;
  const o = c0(a);
  function f() {
    var m;
    (clearTimeout(i), (m = u) == null || m.disconnect(), (u = null));
  }
  function h(m, d) {
    (m === void 0 && (m = !1), d === void 0 && (d = 1), f());
    const p = a.getBoundingClientRect(),
      { left: g, top: b, width: x, height: M } = p;
    if ((m || r(), !x || !M)) return;
    const w = nu(b),
      T = nu(o.clientWidth - (g + x)),
      R = nu(o.clientHeight - (b + M)),
      O = nu(g),
      j = {
        rootMargin: -w + 'px ' + -T + 'px ' + -R + 'px ' + -O + 'px',
        threshold: tw(0, ew(1, d)) || 1,
      };
    let J = !0;
    function z(A) {
      const Z = A[0].intersectionRatio;
      if (Z !== d) {
        if (!J) return h();
        Z
          ? h(!1, Z)
          : (i = setTimeout(() => {
              h(!1, 1e-7);
            }, 1e3));
      }
      (Z === 1 && !p0(p, a.getBoundingClientRect()) && h(), (J = !1));
    }
    try {
      u = new IntersectionObserver(z, { ...j, root: o.ownerDocument });
    } catch {
      u = new IntersectionObserver(z, j);
    }
    u.observe(a);
  }
  return (h(!0), f);
}
function uw(a, r, u, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: f = !0,
      elementResize: h = typeof ResizeObserver == 'function',
      layoutShift: m = typeof IntersectionObserver == 'function',
      animationFrame: d = !1,
    } = i,
    p = ed(a),
    g = o || f ? [...(p ? bu(p) : []), ...bu(r)] : [];
  g.forEach((O) => {
    (o && O.addEventListener('scroll', u, { passive: !0 }),
      f && O.addEventListener('resize', u));
  });
  const b = p && m ? ow(p, u) : null;
  let x = -1,
    M = null;
  h &&
    ((M = new ResizeObserver((O) => {
      let [B] = O;
      (B &&
        B.target === p &&
        M &&
        (M.unobserve(r),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var j;
          (j = M) == null || j.observe(r);
        }))),
        u());
    })),
    p && !d && M.observe(p),
    M.observe(r));
  let w,
    T = d ? Nv(a) : null;
  d && R();
  function R() {
    const O = Nv(a);
    (T && !p0(T, O) && u(), (T = O), (w = requestAnimationFrame(R)));
  }
  return (
    u(),
    () => {
      var O;
      (g.forEach((B) => {
        (o && B.removeEventListener('scroll', u),
          f && B.removeEventListener('resize', u));
      }),
        b?.(),
        (O = M) == null || O.disconnect(),
        (M = null),
        d && cancelAnimationFrame(w));
    }
  );
}
const sw = {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
      },
      input: {
        base: 'block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-xs',
          md: 'p-2.5 text-sm',
          lg: 'p-4 sm:text-base',
        },
        colors: {
          gray: 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500',
          info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
        },
        withRightIcon: { on: 'pr-10', off: '' },
        withIcon: { on: 'pl-10', off: '' },
        withAddon: { on: 'rounded-r-lg', off: 'rounded-lg' },
        withShadow: { on: 'shadow-sm dark:shadow-sm-light', off: '' },
      },
    },
  },
  m0 = S.forwardRef((a, r) => {
    const u = Qa(),
      i = Fa(
        [sw, u.theme?.textInput, a.theme],
        [pt(u.clearTheme, 'textInput'), a.clearTheme],
        [pt(u.applyTheme, 'textInput'), a.applyTheme]
      ),
      {
        addon: o,
        className: f,
        color: h = 'gray',
        icon: m,
        rightIcon: d,
        shadow: p,
        sizing: g = 'md',
        type: b = 'text',
        ...x
      } = Xa(a, u.props?.textInput);
    return P.jsxs('div', {
      className: An(i.base, f),
      children: [
        o && P.jsx('span', { className: i.addon, children: o }),
        P.jsxs('div', {
          className: i.field.base,
          children: [
            m &&
              P.jsx('div', {
                className: i.field.icon.base,
                children: P.jsx(m, { className: i.field.icon.svg }),
              }),
            d &&
              P.jsx('div', {
                'data-testid': 'right-icon',
                className: i.field.rightIcon.base,
                children: P.jsx(d, { className: i.field.rightIcon.svg }),
              }),
            P.jsx('input', {
              className: An(
                i.field.input.base,
                i.field.input.colors[h],
                i.field.input.sizes[g],
                i.field.input.withIcon[m ? 'on' : 'off'],
                i.field.input.withRightIcon[d ? 'on' : 'off'],
                i.field.input.withAddon[o ? 'on' : 'off'],
                i.field.input.withShadow[p ? 'on' : 'off']
              ),
              type: b,
              ...x,
              ref: r,
            }),
          ],
        }),
      ],
    });
  });
m0.displayName = 'TextInput';
const cw = {
    root: {
      base: 'text-sm font-medium',
      disabled: 'opacity-50',
      colors: {
        default: 'text-gray-900 dark:text-white',
        info: 'text-cyan-500 dark:text-cyan-600',
        failure: 'text-red-700 dark:text-red-500',
        warning: 'text-yellow-500 dark:text-yellow-600',
        success: 'text-green-700 dark:text-green-500',
      },
    },
  },
  Af = S.forwardRef((a, r) => {
    const u = Qa(),
      i = Fa(
        [cw, u.theme?.label, a.theme],
        [pt(u.clearTheme, 'label'), a.clearTheme],
        [pt(u.applyTheme, 'label'), a.applyTheme]
      ),
      {
        className: o,
        color: f = 'default',
        disabled: h = !1,
        ...m
      } = Xa(a, u.props?.label);
    return P.jsx('label', {
      ref: r,
      className: An(i.root.base, i.root.colors[f], h && i.root.disabled, o),
      'data-testid': 'flowbite-label',
      ...m,
    });
  });
Af.displayName = 'Label';
const v0 = S.createContext(void 0);
function td() {
  const a = S.useContext(v0);
  if (!a)
    throw new Error(
      'useNavBarContext should be used within the NavbarContext provider!'
    );
  return a;
}
const Nu = {
    root: {
      base: 'bg-white px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800',
      rounded: { on: 'rounded', off: '' },
      bordered: { on: 'border', off: '' },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: { on: '', off: 'container' },
      },
    },
    brand: { base: 'flex items-center' },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: { on: 'hidden', off: '' },
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0',
      active: {
        on: 'bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white',
        off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
      icon: 'h-6 w-6 shrink-0',
      title: 'sr-only',
    },
  },
  g0 = S.forwardRef((a, r) => {
    const u = Qa(),
      i = Fa(
        [Nu, u.theme?.navbar, a.theme],
        [pt(u.clearTheme, 'navbar'), a.clearTheme],
        [pt(u.applyTheme, 'navbar'), a.applyTheme]
      ),
      {
        border: o,
        children: f,
        className: h,
        fluid: m = !1,
        menuOpen: d,
        rounded: p,
        ...g
      } = Xa(a, u.props?.navbar),
      [b, x] = S.useState(d);
    return P.jsx(v0.Provider, {
      value: {
        theme: a.theme,
        clearTheme: a.clearTheme,
        applyTheme: a.applyTheme,
        isOpen: b,
        setIsOpen: x,
      },
      children: P.jsx('nav', {
        ref: r,
        className: An(
          i.root.base,
          i.root.bordered[o ? 'on' : 'off'],
          i.root.rounded[p ? 'on' : 'off'],
          h
        ),
        ...g,
        children: P.jsx('div', {
          className: An(
            i.root.inner.base,
            i.root.inner.fluid[m ? 'on' : 'off']
          ),
          children: f,
        }),
      }),
    });
  });
g0.displayName = 'Navbar';
const y0 = S.forwardRef((a, r) => {
  const { theme: u, clearTheme: i, applyTheme: o } = td(),
    f = Qa(),
    h = Fa(
      [Nu.brand, f.theme?.navbar?.brand, u?.brand, a.theme],
      [pt(f.clearTheme, 'navbar.brand'), pt(i, 'brand'), a.clearTheme],
      [pt(f.applyTheme, 'navbar.brand'), pt(o, 'brand'), a.applyTheme]
    ),
    { as: m = 'a', className: d, ...p } = Xa(a, f.props?.navbarBrand);
  return P.jsx(m, { ref: r, className: An(h.base, d), ...p });
});
y0.displayName = 'NavbarBrand';
const b0 = S.forwardRef((a, r) => {
  const { theme: u, clearTheme: i, applyTheme: o, isOpen: f } = td(),
    h = Qa(),
    m = Fa(
      [Nu.collapse, h.theme?.navbar?.collapse, u?.collapse, a.theme],
      [pt(h.clearTheme, 'navbar.collapse'), pt(i, 'collapse'), a.clearTheme],
      [pt(h.applyTheme, 'navbar.collapse'), pt(o, 'collapse'), a.applyTheme]
    ),
    { children: d, className: p, ...g } = Xa(a, h.props?.navbarCollapse);
  return P.jsx('div', {
    ref: r,
    'data-testid': 'flowbite-navbar-collapse',
    className: An(m.base, m.hidden[f ? 'off' : 'on'], p),
    ...g,
    children: P.jsx('ul', { className: m.list, children: d }),
  });
});
b0.displayName = 'NavbarCollapse';
const S0 = S.forwardRef((a, r) =>
  P.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    stroke: 'currentColor',
    strokeWidth: 0,
    viewBox: '0 0 448 512',
    ref: r,
    ...a,
    children: P.jsx('path', {
      stroke: 'none',
      d: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
    }),
  })
);
S0.displayName = 'BarsIcon';
const x0 = S.forwardRef((a, r) => {
  const {
      theme: u,
      clearTheme: i,
      applyTheme: o,
      isOpen: f,
      setIsOpen: h,
    } = td(),
    m = Qa(),
    d = Fa(
      [Nu.toggle, m.theme?.navbar?.toggle, u?.toggle, a.theme],
      [pt(m.clearTheme, 'navbar.toggle'), pt(i, 'toggle'), a.clearTheme],
      [pt(m.applyTheme, 'navbar.toggle'), pt(o, 'toggle'), a.applyTheme]
    ),
    { barIcon: p = S0, className: g, ...b } = Xa(a, m.props?.navbarToggle);
  function x() {
    h(!f);
  }
  return P.jsxs('button', {
    ref: r,
    'data-testid': 'flowbite-navbar-toggle',
    onClick: x,
    className: An(d.base, g),
    ...b,
    children: [
      P.jsx('span', { className: d.title, children: 'Open main menu' }),
      P.jsx(p, { 'aria-hidden': !0, className: d.icon }),
    ],
  });
});
x0.displayName = 'NavbarToggle';
const fw = {
    base: 'block w-full rounded-lg border p-2.5 text-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
    colors: {
      gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500',
      info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
      failure:
        'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
      warning:
        'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
      success:
        'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    },
    withShadow: { on: 'shadow-sm dark:shadow-sm-light', off: '' },
  },
  w0 = S.forwardRef((a, r) => {
    const u = Qa(),
      i = Fa(
        [fw, u.theme?.textarea, a.theme],
        [pt(u.clearTheme, 'textarea'), a.clearTheme],
        [pt(u.applyTheme, 'textarea'), a.applyTheme]
      ),
      {
        className: o,
        color: f = 'gray',
        shadow: h,
        ...m
      } = Xa(a, u.props?.textarea);
    return P.jsx('textarea', {
      ref: r,
      className: An(i.base, i.colors[f], i.withShadow[h ? 'on' : 'off'], o),
      ...m,
    });
  });
w0.displayName = 'Textarea';
const Lu = async (a) => {
    if (!a.ok) throw new Error(await a.text());
    return a.json();
  },
  Lv = (a) => fetch(a, { mode: 'cors' }).then(Lu),
  dw = (a, r) => fetch(`${a}/${r}`, { mode: 'cors' }).then(Lu),
  hw = (a, r) =>
    fetch(a, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(r),
    }).then(Lu),
  pw = (a, r, u) =>
    fetch(`${a}/${r}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(u),
    }).then(Lu),
  mw = (a, r) =>
    fetch(`${a}/${r}`, { method: 'DELETE', mode: 'cors' }).then((u) => {
      if (!u.ok) throw new Error('Delete failed');
      return !0;
    });
function hl(a) {
  const [r, u] = S.useState([]),
    [i, o] = S.useState(null),
    [f, h] = S.useState(!1),
    [m, d] = S.useState(null),
    p = S.useCallback(async () => {
      h(!0);
      try {
        const T = await Lv(a);
        return (u(T), d(null), T);
      } catch (T) {
        d(T.message);
      } finally {
        h(!1);
      }
    }, [a]),
    g = S.useCallback(
      async (T) => {
        h(!0);
        try {
          const R = await Lv(`${a}?search=${encodeURIComponent(T)}`);
          return (d(null), R);
        } catch (R) {
          throw (d(R.message), R);
        } finally {
          h(!1);
        }
      },
      [a]
    ),
    b = S.useCallback(
      async (T) => {
        h(!0);
        try {
          const R = await dw(a, T);
          return (o(R), d(null), R);
        } catch (R) {
          d(R.message);
        } finally {
          h(!1);
        }
      },
      [a]
    ),
    x = S.useCallback(
      async (T) => {
        h(!0);
        try {
          const R = await hw(a, T);
          return (u((O) => [...O, R]), R);
        } catch (R) {
          throw (d(R.message), R);
        } finally {
          h(!1);
        }
      },
      [a]
    ),
    M = S.useCallback(
      async (T, R) => {
        h(!0);
        try {
          const O = await pw(a, T, R);
          return (u((B) => B.map((j) => (j.id === T ? O : j))), O);
        } catch (O) {
          throw (d(O.message), O);
        } finally {
          h(!1);
        }
      },
      [a]
    ),
    w = S.useCallback(
      async (T) => {
        h(!0);
        try {
          (await mw(a, T), u((R) => R.filter((O) => O.id !== T)));
        } catch (R) {
          throw (d(R.message), R);
        } finally {
          h(!1);
        }
      },
      [a]
    );
  return {
    data: r,
    item: i,
    loading: f,
    error: m,
    load: p,
    loadOne: b,
    create: x,
    update: M,
    remove: w,
    search: g,
  };
}
function vw(a = 'light') {
  const [r, u] = S.useState(() => localStorage.getItem('theme') || a);
  S.useEffect(() => {
    (r === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark'),
      localStorage.setItem('theme', r));
  }, [r]);
  const i = S.useCallback(() => {
    u((o) => (o === 'light' ? 'dark' : 'light'));
  }, []);
  return { theme: r, setTheme: u, toggleTheme: i };
}
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gw = (a) => a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  yw = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, u, i) =>
      i ? i.toUpperCase() : u.toLowerCase()
    ),
  kv = (a) => {
    const r = yw(a);
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  E0 = (...a) =>
    a
      .filter((r, u, i) => !!r && r.trim() !== '' && i.indexOf(r) === u)
      .join(' ')
      .trim(),
  bw = (a) => {
    for (const r in a)
      if (r.startsWith('aria-') || r === 'role' || r === 'title') return !0;
  };
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Sw = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = S.forwardRef(
  (
    {
      color: a = 'currentColor',
      size: r = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: i,
      className: o = '',
      children: f,
      iconNode: h,
      ...m
    },
    d
  ) =>
    S.createElement(
      'svg',
      {
        ref: d,
        ...Sw,
        width: r,
        height: r,
        stroke: a,
        strokeWidth: i ? (Number(u) * 24) / Number(r) : u,
        className: E0('lucide', o),
        ...(!f && !bw(m) && { 'aria-hidden': 'true' }),
        ...m,
      },
      [
        ...h.map(([p, g]) => S.createElement(p, g)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Or = (a, r) => {
  const u = S.forwardRef(({ className: i, ...o }, f) =>
    S.createElement(xw, {
      ref: f,
      iconNode: r,
      className: E0(`lucide-${gw(kv(a))}`, `lucide-${a}`, i),
      ...o,
    })
  );
  return ((u.displayName = kv(a)), u);
};
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ww = [
    [
      'rect',
      {
        width: '18',
        height: '18',
        x: '3',
        y: '3',
        rx: '2',
        ry: '2',
        key: '1m3agn',
      },
    ],
    ['polyline', { points: '11 3 11 11 14 8 17 11 17 3', key: '1wcwz3' }],
  ],
  Ew = Or('album', ww);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ow = [
    ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }],
  ],
  Mw = Or('message-circle', Ow);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rw = [
    [
      'path',
      {
        d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
        key: 'kfwtm',
      },
    ],
  ],
  Cw = Or('moon', Rw);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = [
    [
      'path',
      {
        d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
        key: '1c8476',
      },
    ],
    ['path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' }],
    ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
  ],
  Aw = Or('save', Tw);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dw = [
    [
      'path',
      {
        d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
        key: '1m0v6g',
      },
    ],
    [
      'path',
      {
        d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
        key: 'ohrbg2',
      },
    ],
  ],
  _w = Or('square-pen', Dw);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zw = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  Nw = Or('sun', zw);
/**
 * @license lucide-react v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lw = [
    ['path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', key: 'miytrc' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
    ['path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', key: 'e791ji' }],
  ],
  kw = Or('trash', Lw),
  Uw = [{ id: 'books/new', text: 'New Book' }];
function jw() {
  const { appName: a } = jf(),
    { theme: r, toggleTheme: u } = vw();
  return P.jsxs(g0, {
    className: 'sticky z-5 shadow-md flex  top-0',
    children: [
      P.jsxs(y0, {
        href: '/',
        children: [
          P.jsx(Ew, { className: 'size-10 mr-5 stroke-primary' }),
          P.jsx('span', {
            className:
              'self-center text-primary  whitespace-nowrap text-2xl font-semibold ',
            children: a,
          }),
        ],
      }),
      P.jsxs('div', {
        className: 'flex md:order-2  gap-4 items-center justify-end',
        children: [
          P.jsx('span', {
            onClick: u,
            className: 'clickable',
            children:
              r === 'dark'
                ? P.jsx(Cw, { className: 'dark:stroke-white stroke-2' })
                : P.jsx(Nw, { className: 'dark:stroke-white stroke-2' }),
          }),
          P.jsx(x0, {}),
        ],
      }),
      P.jsx(b0, {
        children: Uw.map((i) =>
          P.jsx(
            _u,
            {
              className:
                'block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white dark:text-white',
              to: `/${i.id === 'home' ? '#' : i.id}`,
              children: i.text,
            },
            i.id
          )
        ),
      }),
    ],
  });
}
function Vw({ left: a, right: r, children: u }) {
  return P.jsxs('footer', {
    className:
      'mt-auto justify-center flex p-2 bg-white dark:text-white dark:bg-primaryDark',
    children: [
      a && P.jsx('div', { children: a }),
      P.jsx('div', { children: u }),
      r && P.jsx('div', { children: r }),
    ],
  });
}
function Hw() {
  return P.jsx('div', {
    className: 'global-loading-backdrop',
    children: P.jsxs('div', {
      className: 'global-loading-col',
      children: [
        P.jsx('div', { className: 'spinner' }),
        P.jsx('p', { children: 'Loading...' }),
      ],
    }),
  });
}
function Bw(a = '') {
  return `${a ? a + '-' : ''}${crypto.randomUUID().slice(0, 8)}`;
}
function qw({
  title: a = 'This Website',
  site: r = 'https://sarawebs.com',
  company: u = 'SaraWebs',
  year: i = new Date().getFullYear(),
} = {}) {
  const o = document.querySelector('footer');
  if (!o) return;
  const f = document.createElement('div'),
    h = document.createElement('p');
  ((h.style.textAlign = 'center'),
    (h.innerHTML = `
    ${a} © ${i}<br>
    Built with ❤️ by 
    <a href="${r}" target="_blank" rel="noopener" style="color:#207de9;text-decoration:none;">${u}</a>
  `),
    f.appendChild(h),
    o.appendChild(f));
}
function Yw(a, r, u) {
  const i = [];
  for (let o = 0; o < a; o++) {
    i[o] = [];
    for (let f = 0; f < r; f++) u(i[o], o, f);
  }
  return i;
}
function nd(a) {
  const r = [
      '#8e1330',
      '#8a6c1d',
      '#406555',
      '#7c0e45',
      '#8d1978',
      '#181770',
      '#cc38d7',
      '#47504e',
      '#0fa080',
      '#0f64a0',
      '#460fa0',
      '#a00f65',
      '#a00f24',
      '#0f94a0',
      '#0fa067',
      '#0fa03c',
      '#38a00f',
      '#a09d0f',
      '#a0670f',
      '#a0370f',
      '#a00f0f',
      '#2b634d',
      '#2b4c63',
      '#2e6bc6',
      '#1992d4',
    ],
    u = Array.isArray(a) && a.length > 0 ? a : r;
  return u[Math.floor(Math.random() * u.length)];
}
class Ri {
  constructor(r) {
    this.el = document.createElement(r);
  }
  addClass(...r) {
    return (this.el.classList.add(...r), this);
  }
  setId(r) {
    return ((this.el.id = r), this);
  }
  setText(r) {
    return ((this.el.textContent = r), this);
  }
  setAttr(r, u) {
    return (this.el.setAttribute(r, u), this);
  }
  on(r, u) {
    return (this.el.addEventListener(r, u), this);
  }
  append(r) {
    return (this.el.appendChild(r instanceof Ri ? r.build() : r), this);
  }
  build() {
    return this.el;
  }
}
function Gw({ labelText: a, inputType: r, id: u, name: i, required: o = !1 }) {
  const f = new Ri('label').setAttr('for', u).setText(a),
    h = new Ri('input').setAttr('type', r).setAttr('id', u).setAttr('name', i);
  return (o && h.setAttr('required', ''), [f, h]);
}
class Pw {
  constructor(r, u = (...i) => fetch(...i)) {
    ((this.apiKey = r),
      (this.httpClient = u),
      (this.apiEndpoint = 'https://api.linkpreview.net/'));
  }
  buildUrl(r) {
    const u = encodeURIComponent(r);
    return `${this.apiEndpoint}?key=${this.apiKey}&q=${u}`;
  }
  async fetchPreview(r) {
    const u = this.buildUrl(r);
    try {
      const i = await this.httpClient(u);
      if (!i.ok) throw new Error(`Request failed with status ${i.status}`);
      const o = await i.json();
      return this.parseResponse(o);
    } catch (i) {
      throw (console.error('LinkPreviewFetcher error:', i), i);
    }
  }
  parseResponse(r) {
    return {
      title: r.title || '',
      description: r.description || '',
      image: r.image || '',
      url: r.url || '',
    };
  }
}
const Xw = {
  generateID: Bw,
  addCopyRight: qw,
  createBoard: Yw,
  getRandomColor: nd,
  ElementBuilder: Ri,
  labelAndInput: Gw,
  LinkPreviewFetcher: Pw,
};
typeof window < 'u' && (window.sb = Xw);
function $w({ appName: a, year: r = new Date().getFullYear() }) {
  return P.jsx('div', {
    className: 'text-center',
    children: P.jsxs('p', {
      children: [
        a,
        ' © ',
        r,
        P.jsx('br', {}),
        'Built with ❤️ by',
        ' ',
        P.jsx('a', {
          className: 'dark:text-primary text-primary',
          href: 'https://sarawebs.com',
          target: '_blank',
          rel: 'noopener',
          children: 'SaraWebs',
        }),
      ],
    }),
  });
}
const Fw = [
  '345 75% 31%',
  '43 66% 32%',
  '163 23% 32%',
  '331 77% 27%',
  '320 70% 32%',
  '291 61% 53%',
  '165 7% 30%',
  '168 79% 36%',
  '200 81% 34%',
  '257 81% 34%',
  '327 81% 34%',
  '348 81% 34%',
  '187 81% 34%',
  '160 81% 34%',
  '150 81% 34%',
  '110 81% 34%',
  '58 81% 34%',
  '38 81% 34%',
  '24 81% 34%',
  '0 81% 34%',
  '218 64% 48%',
  '201 76% 47%',
];
function Qw() {
  const { appName: a } = jf();
  Pa();
  const u = qS().state === 'loading';
  return (
    S.useEffect(() => {
      document.documentElement.style.setProperty('--primary', nd(Fw));
    }, []),
    P.jsxs(P.Fragment, {
      children: [
        P.jsx(jw, {}),
        P.jsx('main', {
          className: 'dark:text-white ',
          children: P.jsxs('div', {
            className: 'wrap',
            children: [u && P.jsx(Hw, {}), !u && P.jsx(ZS, {})],
          }),
        }),
        P.jsx(Vw, { children: P.jsx($w, { appName: a }) }),
      ],
    })
  );
}
const af = '/api/v1',
  ku = {
    books: `${af}/books`,
    authors: `${af}/authors`,
    categories: `${af}/categories`,
  };
var rf = { exports: {} },
  lf,
  Uv;
function Zw() {
  if (Uv) return lf;
  Uv = 1;
  var a = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return ((lf = a), lf);
}
var of, jv;
function Kw() {
  if (jv) return of;
  jv = 1;
  var a = Zw();
  function r() {}
  function u() {}
  return (
    (u.resetWarningCache = r),
    (of = function () {
      function i(h, m, d, p, g, b) {
        if (b !== a) {
          var x = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((x.name = 'Invariant Violation'), x);
        }
      }
      i.isRequired = i;
      function o() {
        return i;
      }
      var f = {
        array: i,
        bigint: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: o,
        element: i,
        elementType: i,
        instanceOf: o,
        node: i,
        objectOf: o,
        oneOf: o,
        oneOfType: o,
        shape: o,
        exact: o,
        checkPropTypes: u,
        resetWarningCache: r,
      };
      return ((f.PropTypes = f), f);
    }),
    of
  );
}
var Vv;
function Iw() {
  return (Vv || ((Vv = 1), (rf.exports = Kw()())), rf.exports);
}
var uf, Hv;
function Jw() {
  return (
    Hv ||
      ((Hv = 1),
      (uf = (function (a) {
        var r = {};
        function u(i) {
          if (r[i]) return r[i].exports;
          var o = (r[i] = { i, l: !1, exports: {} });
          return (a[i].call(o.exports, o, o.exports, u), (o.l = !0), o.exports);
        }
        return (
          (u.m = a),
          (u.c = r),
          (u.d = function (i, o, f) {
            u.o(i, o) ||
              Object.defineProperty(i, o, { enumerable: !0, get: f });
          }),
          (u.r = function (i) {
            (typeof Symbol < 'u' &&
              Symbol.toStringTag &&
              Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(i, '__esModule', { value: !0 }));
          }),
          (u.t = function (i, o) {
            if (
              (1 & o && (i = u(i)),
              8 & o || (4 & o && typeof i == 'object' && i && i.__esModule))
            )
              return i;
            var f = Object.create(null);
            if (
              (u.r(f),
              Object.defineProperty(f, 'default', { enumerable: !0, value: i }),
              2 & o && typeof i != 'string')
            )
              for (var h in i)
                u.d(
                  f,
                  h,
                  function (m) {
                    return i[m];
                  }.bind(null, h)
                );
            return f;
          }),
          (u.n = function (i) {
            var o =
              i && i.__esModule
                ? function () {
                    return i.default;
                  }
                : function () {
                    return i;
                  };
            return (u.d(o, 'a', o), o);
          }),
          (u.o = function (i, o) {
            return Object.prototype.hasOwnProperty.call(i, o);
          }),
          (u.p = ''),
          u((u.s = 2))
        );
      })([
        function (a, r) {
          a.exports = Iw();
        },
        function (a, r) {
          a.exports = Cu();
        },
        function (a, r, u) {
          u.r(r);
          var i = u(1),
            o = u(0),
            f = function () {
              return (f =
                Object.assign ||
                function (w) {
                  for (var T, R = 1, O = arguments.length; R < O; R++)
                    for (var B in (T = arguments[R]))
                      Object.prototype.hasOwnProperty.call(T, B) &&
                        (w[B] = T[B]);
                  return w;
                }).apply(this, arguments);
            },
            h = function (w, T) {
              var R = {};
              for (var O in w)
                Object.prototype.hasOwnProperty.call(w, O) &&
                  T.indexOf(O) < 0 &&
                  (R[O] = w[O]);
              if (
                w != null &&
                typeof Object.getOwnPropertySymbols == 'function'
              ) {
                var B = 0;
                for (O = Object.getOwnPropertySymbols(w); B < O.length; B++)
                  T.indexOf(O[B]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(w, O[B]) &&
                    (R[O[B]] = w[O[B]]);
              }
              return R;
            },
            m = 0,
            d = i.forwardRef(function (w, T) {
              var R = w.title,
                O = R === void 0 ? null : R,
                B = w.description,
                j = B === void 0 ? null : B,
                J = w.size,
                z = J === void 0 ? null : J,
                A = w.color,
                Z = A === void 0 ? 'currentColor' : A,
                te = w.horizontal,
                re = te === void 0 ? null : te,
                we = w.vertical,
                De = we === void 0 ? null : we,
                Ee = w.rotate,
                me = Ee === void 0 ? null : Ee,
                le = w.spin,
                oe = le === void 0 ? null : le,
                N = w.style,
                I = N === void 0 ? {} : N,
                Q = w.children,
                ve = h(w, [
                  'title',
                  'description',
                  'size',
                  'color',
                  'horizontal',
                  'vertical',
                  'rotate',
                  'spin',
                  'style',
                  'children',
                ]);
              m++;
              var E,
                Y = oe !== null && oe,
                $ = i.Children.map(Q, function (ie) {
                  var ze = ie;
                  Y !== !0 && (Y = (oe === null ? ze.props.spin : oe) === !0);
                  var Ae = ze.props.size;
                  typeof z == 'number' &&
                    typeof ze.props.size == 'number' &&
                    (Ae = ze.props.size / z);
                  var Je = {
                    size: Ae,
                    color: Z === null ? ze.props.color : Z,
                    horizontal: re === null ? ze.props.horizontal : re,
                    vertical: De === null ? ze.props.vertical : De,
                    rotate: me === null ? ze.props.rotate : me,
                    spin: oe === null ? ze.props.spin : oe,
                    inStack: !0,
                  };
                  return i.cloneElement(ze, Je);
                });
              z !== null &&
                (I.width = typeof z == 'string' ? z : 1.5 * z + 'rem');
              var W,
                ae = 'stack_labelledby_' + m,
                ce = 'stack_describedby_' + m;
              if (O) E = j ? ae + ' ' + ce : ae;
              else if (((W = 'presentation'), j))
                throw new Error(
                  'title attribute required when description is set'
                );
              return i.createElement(
                'svg',
                f(
                  {
                    ref: T,
                    viewBox: '0 0 24 24',
                    style: I,
                    role: W,
                    'aria-labelledby': E,
                  },
                  ve
                ),
                O && i.createElement('title', { id: ae }, O),
                j && i.createElement('desc', { id: ce }, j),
                Y &&
                  i.createElement(
                    'style',
                    null,
                    '@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }',
                    '@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }'
                  ),
                $
              );
            });
          ((d.displayName = 'Stack'),
            (d.propTypes = {
              size: o.oneOfType([o.number, o.string]),
              color: o.string,
              horizontal: o.bool,
              vertical: o.bool,
              rotate: o.number,
              spin: o.oneOfType([o.bool, o.number]),
              children: o.oneOfType([o.arrayOf(o.node), o.node]).isRequired,
              className: o.string,
              style: o.object,
            }),
            (d.defaultProps = {
              size: null,
              color: null,
              horizontal: null,
              vertical: null,
              rotate: null,
              spin: null,
            }));
          var p = d;
          (u.d(r, 'Icon', function () {
            return M;
          }),
            u.d(r, 'Stack', function () {
              return p;
            }));
          var g = function () {
              return (g =
                Object.assign ||
                function (w) {
                  for (var T, R = 1, O = arguments.length; R < O; R++)
                    for (var B in (T = arguments[R]))
                      Object.prototype.hasOwnProperty.call(T, B) &&
                        (w[B] = T[B]);
                  return w;
                }).apply(this, arguments);
            },
            b = function (w, T) {
              var R = {};
              for (var O in w)
                Object.prototype.hasOwnProperty.call(w, O) &&
                  T.indexOf(O) < 0 &&
                  (R[O] = w[O]);
              if (
                w != null &&
                typeof Object.getOwnPropertySymbols == 'function'
              ) {
                var B = 0;
                for (O = Object.getOwnPropertySymbols(w); B < O.length; B++)
                  T.indexOf(O[B]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(w, O[B]) &&
                    (R[O[B]] = w[O[B]]);
              }
              return R;
            },
            x = 0,
            M = i.forwardRef(function (w, T) {
              var R = w.path,
                O = w.id,
                B = O === void 0 ? ++x : O,
                j = w.title,
                J = j === void 0 ? null : j,
                z = w.description,
                A = z === void 0 ? null : z,
                Z = w.size,
                te = Z === void 0 ? null : Z,
                re = w.color,
                we = re === void 0 ? 'currentColor' : re,
                De = w.horizontal,
                Ee = De !== void 0 && De,
                me = w.vertical,
                le = me !== void 0 && me,
                oe = w.rotate,
                N = oe === void 0 ? 0 : oe,
                I = w.spin,
                Q = I !== void 0 && I,
                ve = w.style,
                E = ve === void 0 ? {} : ve,
                Y = w.inStack,
                $ = Y !== void 0 && Y,
                W = b(w, [
                  'path',
                  'id',
                  'title',
                  'description',
                  'size',
                  'color',
                  'horizontal',
                  'vertical',
                  'rotate',
                  'spin',
                  'style',
                  'inStack',
                ]),
                ae = {},
                ce = [];
              (te !== null &&
                ($
                  ? ce.push('scale(' + te + ')')
                  : ((E.width = typeof te == 'string' ? te : 1.5 * te + 'rem'),
                    (E.height = E.width))),
                Ee && ce.push('scaleX(-1)'),
                le && ce.push('scaleY(-1)'),
                N !== 0 && ce.push('rotate(' + N + 'deg)'),
                we !== null && (ae.fill = we));
              var ie = i.createElement(
                  'path',
                  g({ d: R, style: ae }, $ ? W : {})
                ),
                ze = ie;
              ce.length > 0 &&
                ((E.transform = ce.join(' ')),
                (E.transformOrigin = 'center'),
                $ &&
                  (ze = i.createElement(
                    'g',
                    { style: E },
                    ie,
                    i.createElement('rect', {
                      width: '24',
                      height: '24',
                      fill: 'transparent',
                    })
                  )));
              var Ae,
                Je = ze,
                at = Q === !0 || typeof Q != 'number' ? 2 : Q,
                vt = !$ && (Ee || le);
              if (
                (at < 0 && (vt = !vt),
                Q &&
                  (Je = i.createElement(
                    'g',
                    {
                      style: {
                        animation:
                          'spin' +
                          (vt ? '-inverse' : '') +
                          ' linear ' +
                          Math.abs(at) +
                          's infinite',
                        transformOrigin: 'center',
                      },
                    },
                    ze,
                    !(Ee || le || N !== 0) &&
                      i.createElement('rect', {
                        width: '24',
                        height: '24',
                        fill: 'transparent',
                      })
                  )),
                $)
              )
                return Je;
              var qt,
                Jt = 'icon_labelledby_' + B,
                Ot = 'icon_describedby_' + B;
              if (J) Ae = A ? Jt + ' ' + Ot : Jt;
              else if (((qt = 'presentation'), A))
                throw new Error(
                  'title attribute required when description is set'
                );
              return i.createElement(
                'svg',
                g(
                  {
                    ref: T,
                    viewBox: '0 0 24 24',
                    style: E,
                    role: qt,
                    'aria-labelledby': Ae,
                  },
                  W
                ),
                J && i.createElement('title', { id: Jt }, J),
                A && i.createElement('desc', { id: Ot }, A),
                !$ &&
                  Q &&
                  (vt
                    ? i.createElement(
                        'style',
                        null,
                        '@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }'
                      )
                    : i.createElement(
                        'style',
                        null,
                        '@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }'
                      )),
                Je
              );
            });
          ((M.displayName = 'Icon'),
            (M.propTypes = {
              path: o.string.isRequired,
              size: o.oneOfType([o.number, o.string]),
              color: o.string,
              horizontal: o.bool,
              vertical: o.bool,
              rotate: o.number,
              spin: o.oneOfType([o.bool, o.number]),
              style: o.object,
              inStack: o.bool,
              className: o.string,
            }),
            (M.defaultProps = {
              size: null,
              color: 'currentColor',
              horizontal: !1,
              vertical: !1,
              rotate: 0,
              spin: !1,
            }),
            (r.default = M));
        },
      ]))),
    uf
  );
}
var Ww = Jw();
const Bv = gg(Ww);
var qv =
    'M5.81,2C4.83,2.09 4,3 4,4V20C4,21.05 4.95,22 6,22H18C19.05,22 20,21.05 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6C5.94,2 5.87,2 5.81,2M12,13H13A1,1 0 0,1 14,14V18H13V16H12V18H11V14A1,1 0 0,1 12,13M12,14V15H13V14H12M15,15H18V16L16,19H18V20H15V19L17,16H15V15Z',
  eE =
    'M16.5 17.25L19.36 18.94L18.61 20.16L15 18V13H16.5V17.25M23 17C23 20.87 19.87 24 16 24C14.09 24 12.37 23.24 11.11 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V11.26C21.81 12.53 23 14.62 23 17M21 17C21 14.24 18.76 12 16 12S11 14.24 11 17 13.24 22 16 22 21 19.76 21 17Z',
  tE =
    'M18.68 2.12L12 8.8V2H18C18.24 2 18.46 2.05 18.68 2.12M9.5 7.5L7 9V2H6C4.89 2 4 2.9 4 4V16.8L11.88 8.93L9.5 7.5M21.61 1.73L1.89 21.46L3.16 22.73L4.54 21.35C4.9 21.75 5.42 22 6 22H18C19.11 22 20 21.11 20 20V5.89L22.89 3L21.61 1.73Z';
const nE = yg.memo(function ({ book: r, update: u, remove: i }) {
  const o = Au(),
    f = ['unread', 'reading', 'read'];
  console.log('Render Book:', r.id);
  const m = { unread: qv, reading: eE, read: tE }[r.status] || qv,
    d = async () => {
      const b = f.indexOf(r.status),
        x = f[(b + 1) % f.length],
        M = {
          ...r,
          status: x,
          authors: r.authors ? r.authors.map((w) => w.id) : [],
        };
      await u(r.id, M);
    },
    p = () => {
      window.confirm(`Are you sure you want to delete "${r.title}"?`) &&
        i(r.id);
    },
    g = S.useMemo(() => nd(), [r.id]);
  return P.jsxs('div', {
    className:
      'border-l-8 border-primary card h-full flex flex-col justify-between',
    children: [
      P.jsx('header', {
        className: 'text-2xl font-bold flex items-center gap-2',
        children: r.title,
      }),
      P.jsx('p', { children: r.description }),
      P.jsxs('p', {
        children: [
          P.jsx('strong', { children: 'Category:' }),
          ' ',
          r.category?.name,
        ],
      }),
      P.jsx('h3', { className: 'font-bold', children: 'Authors:' }),
      P.jsx('ul', {
        className: 'list-disc pl-5',
        children: r.authors?.map((b) =>
          P.jsx('li', { children: b.name }, b.id)
        ),
      }),
      P.jsxs('p', {
        children: [P.jsx('strong', { children: 'Status:' }), ' ', r.status],
      }),
      P.jsx('div', {
        children: P.jsx(Bv, {
          color: g,
          title: `Status: ${r.status}`,
          path: m,
        }),
      }),
      P.jsx('footer', {
        children: P.jsxs('div', {
          className: 'flex gap-4 justify-end',
          children: [
            P.jsx('span', {
              title: 'Edit',
              className: 'clickable',
              children: P.jsx(_w, {
                className: 'dark:stroke-white clickable',
                onClick: () => o(`/books/${r.id}/edit`),
              }),
            }),
            P.jsx('span', {
              title: 'Delete',
              className: 'clickable',
              children: P.jsx(kw, {
                className: 'dark:stroke-white clickable',
                onClick: p,
              }),
            }),
            P.jsx('span', {
              title: `Status: ${r.status}`,
              className: 'clickable',
              children: P.jsx(Bv, {
                onClick: d,
                title: `Status: ${r.status}`,
                path: m,
                size: 1,
              }),
            }),
          ],
        }),
      }),
    ],
  });
});
function O0() {
  const {
    data: a,
    load: r,
    remove: u,
    update: i,
    loading: o,
    error: f,
  } = hl(ku.books);
  S.useEffect(() => {
    r();
  }, []);
  const h = async (m, d) => {
    const p = window.scrollY;
    (await i(m, d), window.scrollTo(0, p));
  };
  return o
    ? P.jsx('p', { children: 'Loading...' })
    : f
      ? P.jsx('p', { style: { color: 'red' }, children: f })
      : P.jsx('ul', {
          className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3',
          children: a.map((m) =>
            P.jsx(
              'li',
              {
                className: 'h-full',
                children: P.jsx(nE, { book: m, update: h, remove: u }),
              },
              m.id
            )
          ),
        });
}
function aE() {
  const { appName: a } = jf(),
    [r, u] = S.useState(!1),
    i = Au();
  return P.jsxs('div', {
    className: 'flex flex-col gap-2',
    children: [
      P.jsxs('h1', {
        className: 'text-4xl font-bold mb-4 text-primary',
        children: ['Welcome to the ', a],
      }),
      P.jsx('section', {
        children: P.jsxs('div', {
          className: 'flex mb-20  flex-col  gap-4 mx-auto ',
          children: [
            P.jsx('h2', { children: 'Books' }),
            P.jsx('button', {
              onClick: () => i('/books/new'),
              children: '+ Add Book',
            }),
            P.jsx(O0, {}),
          ],
        }),
      }),
      P.jsx('section', {
        className: ' dark:text-white ',
        children: P.jsxs('h2', {
          children: [
            'Visit',
            ' ',
            P.jsx('a', {
              'aria-label': 'Git Repo',
              href: 'https://github.com/mdahamshi/top-basic-msg-full',
              children: 'Git Repo',
            }),
            ' ',
            'for more information',
          ],
        }),
      }),
      P.jsx(If, {
        className:
          'fixed bottom-4 p-0 right-4 z-50 shadow-lg bg-primary text-white hover:bg-primary/70 w-14 h-14 rounded-full flex items-center justify-center',
        onClick: () => {
          location.pathname !== '/new' &&
            (window.history.replaceState(null, '', '/new'), u(!0));
        },
        children: P.jsx(Mw, { size: 24, strokeWidth: 3 }),
      }),
    ],
  });
}
function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var r = 1; r < arguments.length; r++) {
            var u = arguments[r];
            for (var i in u) ({}).hasOwnProperty.call(u, i) && (a[i] = u[i]);
          }
          return a;
        }),
    Te.apply(null, arguments)
  );
}
function wr(a) {
  '@babel/helpers - typeof';
  return (
    (wr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    wr(a)
  );
}
function rE(a, r) {
  if (wr(a) != 'object' || !a) return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var i = u.call(a, r);
    if (wr(i) != 'object') return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(a);
}
function M0(a) {
  var r = rE(a, 'string');
  return wr(r) == 'symbol' ? r : r + '';
}
function cl(a, r, u) {
  return (
    (r = M0(r)) in a
      ? Object.defineProperty(a, r, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[r] = u),
    a
  );
}
function Yv(a, r) {
  var u = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    (r &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      u.push.apply(u, i));
  }
  return u;
}
function xe(a) {
  for (var r = 1; r < arguments.length; r++) {
    var u = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Yv(Object(u), !0).forEach(function (i) {
          cl(a, i, u[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
        : Yv(Object(u)).forEach(function (i) {
            Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(u, i));
          });
  }
  return a;
}
function lE(a, r) {
  if (!(a instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function Gv(a, r) {
  for (var u = 0; u < r.length; u++) {
    var i = r[u];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(a, M0(i.key), i));
  }
}
function iE(a, r, u) {
  return (
    r && Gv(a.prototype, r),
    u && Gv(a, u),
    Object.defineProperty(a, 'prototype', { writable: !1 }),
    a
  );
}
function Df(a, r) {
  return (
    (Df = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, i) {
          return ((u.__proto__ = i), u);
        }),
    Df(a, r)
  );
}
function oE(a, r) {
  if (typeof r != 'function' && r !== null)
    throw new TypeError('Super expression must either be null or a function');
  ((a.prototype = Object.create(r && r.prototype, {
    constructor: { value: a, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(a, 'prototype', { writable: !1 }),
    r && Df(a, r));
}
function wu(a) {
  return (
    (wu = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    wu(a)
  );
}
function R0() {
  try {
    var a = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (R0 = function () {
    return !!a;
  })();
}
function uE(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function sE(a, r) {
  if (r && (wr(r) == 'object' || typeof r == 'function')) return r;
  if (r !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return uE(a);
}
function cE(a) {
  var r = R0();
  return function () {
    var u,
      i = wu(a);
    if (r) {
      var o = wu(this).constructor;
      u = Reflect.construct(i, arguments, o);
    } else u = i.apply(this, arguments);
    return sE(this, u);
  };
}
function _f(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var u = 0, i = Array(r); u < r; u++) i[u] = a[u];
  return i;
}
function fE(a) {
  if (Array.isArray(a)) return _f(a);
}
function dE(a) {
  if (
    (typeof Symbol < 'u' && a[Symbol.iterator] != null) ||
    a['@@iterator'] != null
  )
    return Array.from(a);
}
function C0(a, r) {
  if (a) {
    if (typeof a == 'string') return _f(a, r);
    var u = {}.toString.call(a).slice(8, -1);
    return (
      u === 'Object' && a.constructor && (u = a.constructor.name),
      u === 'Map' || u === 'Set'
        ? Array.from(a)
        : u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          ? _f(a, r)
          : void 0
    );
  }
}
function hE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ad(a) {
  return fE(a) || dE(a) || C0(a) || hE();
}
function pE(a) {
  if (a.sheet) return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a) return document.styleSheets[r];
}
function mE(a) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', a.key),
    a.nonce !== void 0 && r.setAttribute('nonce', a.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var vE = (function () {
    function a(u) {
      var i = this;
      ((this._insertTag = function (o) {
        var f;
        (i.tags.length === 0
          ? i.insertionPoint
            ? (f = i.insertionPoint.nextSibling)
            : i.prepend
              ? (f = i.container.firstChild)
              : (f = i.before)
          : (f = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(o, f),
          i.tags.push(o));
      }),
        (this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = u.nonce),
        (this.key = u.key),
        (this.container = u.container),
        (this.prepend = u.prepend),
        (this.insertionPoint = u.insertionPoint),
        (this.before = null));
    }
    var r = a.prototype;
    return (
      (r.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (r.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(mE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = pE(o);
          try {
            f.insertRule(i, f.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (r.flush = function () {
        (this.tags.forEach(function (i) {
          var o;
          return (o = i.parentNode) == null ? void 0 : o.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      a
    );
  })(),
  Bt = '-ms-',
  Eu = '-moz-',
  $e = '-webkit-',
  T0 = 'comm',
  rd = 'rule',
  ld = 'decl',
  gE = '@import',
  A0 = '@keyframes',
  yE = '@layer',
  bE = Math.abs,
  Uu = String.fromCharCode,
  SE = Object.assign;
function xE(a, r) {
  return jt(a, 0) ^ 45
    ? (((((((r << 2) ^ jt(a, 0)) << 2) ^ jt(a, 1)) << 2) ^ jt(a, 2)) << 2) ^
        jt(a, 3)
    : 0;
}
function D0(a) {
  return a.trim();
}
function wE(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function Fe(a, r, u) {
  return a.replace(r, u);
}
function zf(a, r) {
  return a.indexOf(r);
}
function jt(a, r) {
  return a.charCodeAt(r) | 0;
}
function Ci(a, r, u) {
  return a.slice(r, u);
}
function Hn(a) {
  return a.length;
}
function id(a) {
  return a.length;
}
function au(a, r) {
  return (r.push(a), a);
}
function EE(a, r) {
  return a.map(r).join('');
}
var ju = 1,
  pl = 1,
  _0 = 0,
  It = 0,
  wt = 0,
  gl = '';
function Vu(a, r, u, i, o, f, h) {
  return {
    value: a,
    root: r,
    parent: u,
    type: i,
    props: o,
    children: f,
    line: ju,
    column: pl,
    length: h,
    return: '',
  };
}
function bi(a, r) {
  return SE(Vu('', null, null, '', null, null, 0), a, { length: -a.length }, r);
}
function OE() {
  return wt;
}
function ME() {
  return (
    (wt = It > 0 ? jt(gl, --It) : 0),
    pl--,
    wt === 10 && ((pl = 1), ju--),
    wt
  );
}
function cn() {
  return (
    (wt = It < _0 ? jt(gl, It++) : 0),
    pl++,
    wt === 10 && ((pl = 1), ju++),
    wt
  );
}
function Yn() {
  return jt(gl, It);
}
function du() {
  return It;
}
function Ni(a, r) {
  return Ci(gl, a, r);
}
function Ti(a) {
  switch (a) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function z0(a) {
  return ((ju = pl = 1), (_0 = Hn((gl = a))), (It = 0), []);
}
function N0(a) {
  return ((gl = ''), a);
}
function hu(a) {
  return D0(Ni(It - 1, Nf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function RE(a) {
  for (; (wt = Yn()) && wt < 33; ) cn();
  return Ti(a) > 2 || Ti(wt) > 3 ? '' : ' ';
}
function CE(a, r) {
  for (
    ;
    --r &&
    cn() &&
    !(wt < 48 || wt > 102 || (wt > 57 && wt < 65) || (wt > 70 && wt < 97));

  );
  return Ni(a, du() + (r < 6 && Yn() == 32 && cn() == 32));
}
function Nf(a) {
  for (; cn(); )
    switch (wt) {
      case a:
        return It;
      case 34:
      case 39:
        a !== 34 && a !== 39 && Nf(wt);
        break;
      case 40:
        a === 41 && Nf(a);
        break;
      case 92:
        cn();
        break;
    }
  return It;
}
function TE(a, r) {
  for (; cn() && a + wt !== 57; ) if (a + wt === 84 && Yn() === 47) break;
  return '/*' + Ni(r, It - 1) + '*' + Uu(a === 47 ? a : cn());
}
function AE(a) {
  for (; !Ti(Yn()); ) cn();
  return Ni(a, It);
}
function DE(a) {
  return N0(pu('', null, null, null, [''], (a = z0(a)), 0, [0], a));
}
function pu(a, r, u, i, o, f, h, m, d) {
  for (
    var p = 0,
      g = 0,
      b = h,
      x = 0,
      M = 0,
      w = 0,
      T = 1,
      R = 1,
      O = 1,
      B = 0,
      j = '',
      J = o,
      z = f,
      A = i,
      Z = j;
    R;

  )
    switch (((w = B), (B = cn()))) {
      case 40:
        if (w != 108 && jt(Z, b - 1) == 58) {
          zf((Z += Fe(hu(B), '&', '&\f')), '&\f') != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Z += hu(B);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Z += RE(w);
        break;
      case 92:
        Z += CE(du() - 1, 7);
        continue;
      case 47:
        switch (Yn()) {
          case 42:
          case 47:
            au(_E(TE(cn(), du()), r, u), d);
            break;
          default:
            Z += '/';
        }
        break;
      case 123 * T:
        m[p++] = Hn(Z) * O;
      case 125 * T:
      case 59:
      case 0:
        switch (B) {
          case 0:
          case 125:
            R = 0;
          case 59 + g:
            (O == -1 && (Z = Fe(Z, /\f/g, '')),
              M > 0 &&
                Hn(Z) - b &&
                au(
                  M > 32
                    ? Xv(Z + ';', i, u, b - 1)
                    : Xv(Fe(Z, ' ', '') + ';', i, u, b - 2),
                  d
                ));
            break;
          case 59:
            Z += ';';
          default:
            if (
              (au((A = Pv(Z, r, u, p, g, o, m, j, (J = []), (z = []), b)), f),
              B === 123)
            )
              if (g === 0) pu(Z, r, A, A, J, f, b, m, z);
              else
                switch (x === 99 && jt(Z, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pu(
                      a,
                      A,
                      A,
                      i && au(Pv(a, A, A, 0, 0, o, m, j, o, (J = []), b), z),
                      o,
                      z,
                      b,
                      m,
                      i ? J : z
                    );
                    break;
                  default:
                    pu(Z, A, A, A, [''], z, 0, m, z);
                }
        }
        ((p = g = M = 0), (T = O = 1), (j = Z = ''), (b = h));
        break;
      case 58:
        ((b = 1 + Hn(Z)), (M = w));
      default:
        if (T < 1) {
          if (B == 123) --T;
          else if (B == 125 && T++ == 0 && ME() == 125) continue;
        }
        switch (((Z += Uu(B)), B * T)) {
          case 38:
            O = g > 0 ? 1 : ((Z += '\f'), -1);
            break;
          case 44:
            ((m[p++] = (Hn(Z) - 1) * O), (O = 1));
            break;
          case 64:
            (Yn() === 45 && (Z += hu(cn())),
              (x = Yn()),
              (g = b = Hn((j = Z += AE(du())))),
              B++);
            break;
          case 45:
            w === 45 && Hn(Z) == 2 && (T = 0);
        }
    }
  return f;
}
function Pv(a, r, u, i, o, f, h, m, d, p, g) {
  for (
    var b = o - 1, x = o === 0 ? f : [''], M = id(x), w = 0, T = 0, R = 0;
    w < i;
    ++w
  )
    for (var O = 0, B = Ci(a, b + 1, (b = bE((T = h[w])))), j = a; O < M; ++O)
      (j = D0(T > 0 ? x[O] + ' ' + B : Fe(B, /&\f/g, x[O]))) && (d[R++] = j);
  return Vu(a, r, u, o === 0 ? rd : m, d, p, g);
}
function _E(a, r, u) {
  return Vu(a, r, u, T0, Uu(OE()), Ci(a, 2, -2), 0);
}
function Xv(a, r, u, i) {
  return Vu(a, r, u, ld, Ci(a, 0, i), Ci(a, i + 1, -1), i);
}
function dl(a, r) {
  for (var u = '', i = id(a), o = 0; o < i; o++) u += r(a[o], o, a, r) || '';
  return u;
}
function zE(a, r, u, i) {
  switch (a.type) {
    case yE:
      if (a.children.length) break;
    case gE:
    case ld:
      return (a.return = a.return || a.value);
    case T0:
      return '';
    case A0:
      return (a.return = a.value + '{' + dl(a.children, i) + '}');
    case rd:
      a.value = a.props.join(',');
  }
  return Hn((u = dl(a.children, i)))
    ? (a.return = a.value + '{' + u + '}')
    : '';
}
function NE(a) {
  var r = id(a);
  return function (u, i, o, f) {
    for (var h = '', m = 0; m < r; m++) h += a[m](u, i, o, f) || '';
    return h;
  };
}
function LE(a) {
  return function (r) {
    r.root || ((r = r.return) && a(r));
  };
}
function kE(a) {
  var r = Object.create(null);
  return function (u) {
    return (r[u] === void 0 && (r[u] = a(u)), r[u]);
  };
}
var UE = function (r, u, i) {
    for (
      var o = 0, f = 0;
      (o = f), (f = Yn()), o === 38 && f === 12 && (u[i] = 1), !Ti(f);

    )
      cn();
    return Ni(r, It);
  },
  jE = function (r, u) {
    var i = -1,
      o = 44;
    do
      switch (Ti(o)) {
        case 0:
          (o === 38 && Yn() === 12 && (u[i] = 1), (r[i] += UE(It - 1, u, i)));
          break;
        case 2:
          r[i] += hu(o);
          break;
        case 4:
          if (o === 44) {
            ((r[++i] = Yn() === 58 ? '&\f' : ''), (u[i] = r[i].length));
            break;
          }
        default:
          r[i] += Uu(o);
      }
    while ((o = cn()));
    return r;
  },
  VE = function (r, u) {
    return N0(jE(z0(r), u));
  },
  $v = new WeakMap(),
  HE = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var u = r.value,
          i = r.parent,
          o = r.column === i.column && r.line === i.line;
        i.type !== 'rule';

      )
        if (((i = i.parent), !i)) return;
      if (
        !(r.props.length === 1 && u.charCodeAt(0) !== 58 && !$v.get(i)) &&
        !o
      ) {
        $v.set(r, !0);
        for (
          var f = [], h = VE(u, f), m = i.props, d = 0, p = 0;
          d < h.length;
          d++
        )
          for (var g = 0; g < m.length; g++, p++)
            r.props[p] = f[d] ? h[d].replace(/&\f/g, m[g]) : m[g] + ' ' + h[d];
      }
    }
  },
  BE = function (r) {
    if (r.type === 'decl') {
      var u = r.value;
      u.charCodeAt(0) === 108 &&
        u.charCodeAt(2) === 98 &&
        ((r.return = ''), (r.value = ''));
    }
  };
function L0(a, r) {
  switch (xE(a, r)) {
    case 5103:
      return $e + 'print-' + a + a;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $e + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + a + Eu + a + Bt + a + a;
    case 6828:
    case 4268:
      return $e + a + Bt + a + a;
    case 6165:
      return $e + a + Bt + 'flex-' + a + a;
    case 5187:
      return (
        $e + a + Fe(a, /(\w+).+(:[^]+)/, $e + 'box-$1$2' + Bt + 'flex-$1$2') + a
      );
    case 5443:
      return $e + a + Bt + 'flex-item-' + Fe(a, /flex-|-self/, '') + a;
    case 4675:
      return (
        $e +
        a +
        Bt +
        'flex-line-pack' +
        Fe(a, /align-content|flex-|-self/, '') +
        a
      );
    case 5548:
      return $e + a + Bt + Fe(a, 'shrink', 'negative') + a;
    case 5292:
      return $e + a + Bt + Fe(a, 'basis', 'preferred-size') + a;
    case 6060:
      return (
        $e +
        'box-' +
        Fe(a, '-grow', '') +
        $e +
        a +
        Bt +
        Fe(a, 'grow', 'positive') +
        a
      );
    case 4554:
      return $e + Fe(a, /([^-])(transform)/g, '$1' + $e + '$2') + a;
    case 6187:
      return (
        Fe(
          Fe(Fe(a, /(zoom-|grab)/, $e + '$1'), /(image-set)/, $e + '$1'),
          a,
          ''
        ) + a
      );
    case 5495:
    case 3959:
      return Fe(a, /(image-set\([^]*)/, $e + '$1$`$1');
    case 4968:
      return (
        Fe(
          Fe(a, /(.+:)(flex-)?(.*)/, $e + 'box-pack:$3' + Bt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        $e +
        a +
        a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Fe(a, /(.+)-inline(.+)/, $e + '$1$2') + a;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Hn(a) - 1 - r > 6)
        switch (jt(a, r + 1)) {
          case 109:
            if (jt(a, r + 4) !== 45) break;
          case 102:
            return (
              Fe(
                a,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  $e +
                  '$2-$3$1' +
                  Eu +
                  (jt(a, r + 3) == 108 ? '$3' : '$2-$3')
              ) + a
            );
          case 115:
            return ~zf(a, 'stretch')
              ? L0(Fe(a, 'stretch', 'fill-available'), r) + a
              : a;
        }
      break;
    case 4949:
      if (jt(a, r + 1) !== 115) break;
    case 6444:
      switch (jt(a, Hn(a) - 3 - (~zf(a, '!important') && 10))) {
        case 107:
          return Fe(a, ':', ':' + $e) + a;
        case 101:
          return (
            Fe(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                $e +
                (jt(a, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                $e +
                '$2$3$1' +
                Bt +
                '$2box$3'
            ) + a
          );
      }
      break;
    case 5936:
      switch (jt(a, r + 11)) {
        case 114:
          return $e + a + Bt + Fe(a, /[svh]\w+-[tblr]{2}/, 'tb') + a;
        case 108:
          return $e + a + Bt + Fe(a, /[svh]\w+-[tblr]{2}/, 'tb-rl') + a;
        case 45:
          return $e + a + Bt + Fe(a, /[svh]\w+-[tblr]{2}/, 'lr') + a;
      }
      return $e + a + Bt + a + a;
  }
  return a;
}
var qE = function (r, u, i, o) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case ld:
          r.return = L0(r.value, r.length);
          break;
        case A0:
          return dl([bi(r, { value: Fe(r.value, '@', '@' + $e) })], o);
        case rd:
          if (r.length)
            return EE(r.props, function (f) {
              switch (wE(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return dl(
                    [bi(r, { props: [Fe(f, /:(read-\w+)/, ':' + Eu + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return dl(
                    [
                      bi(r, {
                        props: [Fe(f, /:(plac\w+)/, ':' + $e + 'input-$1')],
                      }),
                      bi(r, { props: [Fe(f, /:(plac\w+)/, ':' + Eu + '$1')] }),
                      bi(r, { props: [Fe(f, /:(plac\w+)/, Bt + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  YE = [qE],
  GE = function (r) {
    var u = r.key;
    if (u === 'css') {
      var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(i, function (T) {
        var R = T.getAttribute('data-emotion');
        R.indexOf(' ') !== -1 &&
          (document.head.appendChild(T), T.setAttribute('data-s', ''));
      });
    }
    var o = r.stylisPlugins || YE,
      f = {},
      h,
      m = [];
    ((h = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + u + ' "]'),
        function (T) {
          for (
            var R = T.getAttribute('data-emotion').split(' '), O = 1;
            O < R.length;
            O++
          )
            f[R[O]] = !0;
          m.push(T);
        }
      ));
    var d,
      p = [HE, BE];
    {
      var g,
        b = [
          zE,
          LE(function (T) {
            g.insert(T);
          }),
        ],
        x = NE(p.concat(o, b)),
        M = function (R) {
          return dl(DE(R), x);
        };
      d = function (R, O, B, j) {
        ((g = B),
          M(R ? R + '{' + O.styles + '}' : O.styles),
          j && (w.inserted[O.name] = !0));
      };
    }
    var w = {
      key: u,
      sheet: new vE({
        key: u,
        container: h,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: f,
      registered: {},
      insert: d,
    };
    return (w.sheet.hydrate(m), w);
  },
  sf = { exports: {} },
  Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fv;
function PE() {
  if (Fv) return Qe;
  Fv = 1;
  var a = typeof Symbol == 'function' && Symbol.for,
    r = a ? Symbol.for('react.element') : 60103,
    u = a ? Symbol.for('react.portal') : 60106,
    i = a ? Symbol.for('react.fragment') : 60107,
    o = a ? Symbol.for('react.strict_mode') : 60108,
    f = a ? Symbol.for('react.profiler') : 60114,
    h = a ? Symbol.for('react.provider') : 60109,
    m = a ? Symbol.for('react.context') : 60110,
    d = a ? Symbol.for('react.async_mode') : 60111,
    p = a ? Symbol.for('react.concurrent_mode') : 60111,
    g = a ? Symbol.for('react.forward_ref') : 60112,
    b = a ? Symbol.for('react.suspense') : 60113,
    x = a ? Symbol.for('react.suspense_list') : 60120,
    M = a ? Symbol.for('react.memo') : 60115,
    w = a ? Symbol.for('react.lazy') : 60116,
    T = a ? Symbol.for('react.block') : 60121,
    R = a ? Symbol.for('react.fundamental') : 60117,
    O = a ? Symbol.for('react.responder') : 60118,
    B = a ? Symbol.for('react.scope') : 60119;
  function j(z) {
    if (typeof z == 'object' && z !== null) {
      var A = z.$$typeof;
      switch (A) {
        case r:
          switch (((z = z.type), z)) {
            case d:
            case p:
            case i:
            case f:
            case o:
            case b:
              return z;
            default:
              switch (((z = z && z.$$typeof), z)) {
                case m:
                case g:
                case w:
                case M:
                case h:
                  return z;
                default:
                  return A;
              }
          }
        case u:
          return A;
      }
    }
  }
  function J(z) {
    return j(z) === p;
  }
  return (
    (Qe.AsyncMode = d),
    (Qe.ConcurrentMode = p),
    (Qe.ContextConsumer = m),
    (Qe.ContextProvider = h),
    (Qe.Element = r),
    (Qe.ForwardRef = g),
    (Qe.Fragment = i),
    (Qe.Lazy = w),
    (Qe.Memo = M),
    (Qe.Portal = u),
    (Qe.Profiler = f),
    (Qe.StrictMode = o),
    (Qe.Suspense = b),
    (Qe.isAsyncMode = function (z) {
      return J(z) || j(z) === d;
    }),
    (Qe.isConcurrentMode = J),
    (Qe.isContextConsumer = function (z) {
      return j(z) === m;
    }),
    (Qe.isContextProvider = function (z) {
      return j(z) === h;
    }),
    (Qe.isElement = function (z) {
      return typeof z == 'object' && z !== null && z.$$typeof === r;
    }),
    (Qe.isForwardRef = function (z) {
      return j(z) === g;
    }),
    (Qe.isFragment = function (z) {
      return j(z) === i;
    }),
    (Qe.isLazy = function (z) {
      return j(z) === w;
    }),
    (Qe.isMemo = function (z) {
      return j(z) === M;
    }),
    (Qe.isPortal = function (z) {
      return j(z) === u;
    }),
    (Qe.isProfiler = function (z) {
      return j(z) === f;
    }),
    (Qe.isStrictMode = function (z) {
      return j(z) === o;
    }),
    (Qe.isSuspense = function (z) {
      return j(z) === b;
    }),
    (Qe.isValidElementType = function (z) {
      return (
        typeof z == 'string' ||
        typeof z == 'function' ||
        z === i ||
        z === p ||
        z === f ||
        z === o ||
        z === b ||
        z === x ||
        (typeof z == 'object' &&
          z !== null &&
          (z.$$typeof === w ||
            z.$$typeof === M ||
            z.$$typeof === h ||
            z.$$typeof === m ||
            z.$$typeof === g ||
            z.$$typeof === R ||
            z.$$typeof === O ||
            z.$$typeof === B ||
            z.$$typeof === T))
      );
    }),
    (Qe.typeOf = j),
    Qe
  );
}
var Qv;
function XE() {
  return (Qv || ((Qv = 1), (sf.exports = PE())), sf.exports);
}
var cf, Zv;
function $E() {
  if (Zv) return cf;
  Zv = 1;
  var a = XE(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    u = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    o = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  ((f[a.ForwardRef] = i), (f[a.Memo] = o));
  function h(w) {
    return a.isMemo(w) ? o : f[w.$$typeof] || r;
  }
  var m = Object.defineProperty,
    d = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    b = Object.getPrototypeOf,
    x = Object.prototype;
  function M(w, T, R) {
    if (typeof T != 'string') {
      if (x) {
        var O = b(T);
        O && O !== x && M(w, O, R);
      }
      var B = d(T);
      p && (B = B.concat(p(T)));
      for (var j = h(w), J = h(T), z = 0; z < B.length; ++z) {
        var A = B[z];
        if (!u[A] && !(R && R[A]) && !(J && J[A]) && !(j && j[A])) {
          var Z = g(T, A);
          try {
            m(w, A, Z);
          } catch {}
        }
      }
    }
    return w;
  }
  return ((cf = M), cf);
}
$E();
var FE = !0;
function QE(a, r, u) {
  var i = '';
  return (
    u.split(' ').forEach(function (o) {
      a[o] !== void 0 ? r.push(a[o] + ';') : o && (i += o + ' ');
    }),
    i
  );
}
var k0 = function (r, u, i) {
    var o = r.key + '-' + u.name;
    (i === !1 || FE === !1) &&
      r.registered[o] === void 0 &&
      (r.registered[o] = u.styles);
  },
  ZE = function (r, u, i) {
    k0(r, u, i);
    var o = r.key + '-' + u.name;
    if (r.inserted[u.name] === void 0) {
      var f = u;
      do (r.insert(u === f ? '.' + o : '', f, r.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function KE(a) {
  for (var r = 0, u, i = 0, o = a.length; o >= 4; ++i, o -= 4)
    ((u =
      (a.charCodeAt(i) & 255) |
      ((a.charCodeAt(++i) & 255) << 8) |
      ((a.charCodeAt(++i) & 255) << 16) |
      ((a.charCodeAt(++i) & 255) << 24)),
      (u = (u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)),
      (u ^= u >>> 24),
      (r =
        ((u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16))));
  switch (o) {
    case 3:
      r ^= (a.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(i + 1) & 255) << 8;
    case 1:
      ((r ^= a.charCodeAt(i) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var IE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  JE = /[A-Z]|^ms/g,
  WE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  U0 = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Kv = function (r) {
    return r != null && typeof r != 'boolean';
  },
  ff = kE(function (a) {
    return U0(a) ? a : a.replace(JE, '-$&').toLowerCase();
  }),
  Iv = function (r, u) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof u == 'string')
          return u.replace(WE, function (i, o, f) {
            return ((Bn = { name: o, styles: f, next: Bn }), o);
          });
    }
    return IE[r] !== 1 && !U0(r) && typeof u == 'number' && u !== 0
      ? u + 'px'
      : u;
  };
function Ai(a, r, u) {
  if (u == null) return '';
  var i = u;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof u) {
    case 'boolean':
      return '';
    case 'object': {
      var o = u;
      if (o.anim === 1)
        return ((Bn = { name: o.name, styles: o.styles, next: Bn }), o.name);
      var f = u;
      if (f.styles !== void 0) {
        var h = f.next;
        if (h !== void 0)
          for (; h !== void 0; )
            ((Bn = { name: h.name, styles: h.styles, next: Bn }), (h = h.next));
        var m = f.styles + ';';
        return m;
      }
      return eO(a, r, u);
    }
    case 'function': {
      if (a !== void 0) {
        var d = Bn,
          p = u(a);
        return ((Bn = d), Ai(a, r, p));
      }
      break;
    }
  }
  var g = u;
  return g;
}
function eO(a, r, u) {
  var i = '';
  if (Array.isArray(u))
    for (var o = 0; o < u.length; o++) i += Ai(a, r, u[o]) + ';';
  else
    for (var f in u) {
      var h = u[f];
      if (typeof h != 'object') {
        var m = h;
        Kv(m) && (i += ff(f) + ':' + Iv(f, m) + ';');
      } else if (Array.isArray(h) && typeof h[0] == 'string' && r == null)
        for (var d = 0; d < h.length; d++)
          Kv(h[d]) && (i += ff(f) + ':' + Iv(f, h[d]) + ';');
      else {
        var p = Ai(a, r, h);
        switch (f) {
          case 'animation':
          case 'animationName': {
            i += ff(f) + ':' + p + ';';
            break;
          }
          default:
            i += f + '{' + p + '}';
        }
      }
    }
  return i;
}
var Jv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Bn;
function j0(a, r, u) {
  if (
    a.length === 1 &&
    typeof a[0] == 'object' &&
    a[0] !== null &&
    a[0].styles !== void 0
  )
    return a[0];
  var i = !0,
    o = '';
  Bn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) ((i = !1), (o += Ai(u, r, f)));
  else {
    var h = f;
    o += h[0];
  }
  for (var m = 1; m < a.length; m++)
    if (((o += Ai(u, r, a[m])), i)) {
      var d = f;
      o += d[m];
    }
  Jv.lastIndex = 0;
  for (var p = '', g; (g = Jv.exec(o)) !== null; ) p += '-' + g[1];
  var b = KE(o) + p;
  return { name: b, styles: o, next: Bn };
}
var tO = function (r) {
    return r();
  },
  nO = $m.useInsertionEffect ? $m.useInsertionEffect : !1,
  aO = nO || tO,
  V0 = S.createContext(typeof HTMLElement < 'u' ? GE({ key: 'css' }) : null);
V0.Provider;
var rO = function (r) {
    return S.forwardRef(function (u, i) {
      var o = S.useContext(V0);
      return r(u, o, i);
    });
  },
  lO = S.createContext({}),
  od = {}.hasOwnProperty,
  Lf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  iO = function (r, u) {
    var i = {};
    for (var o in u) od.call(u, o) && (i[o] = u[o]);
    return ((i[Lf] = r), i);
  },
  oO = function (r) {
    var u = r.cache,
      i = r.serialized,
      o = r.isStringTag;
    return (
      k0(u, i, o),
      aO(function () {
        return ZE(u, i, o);
      }),
      null
    );
  },
  uO = rO(function (a, r, u) {
    var i = a.css;
    typeof i == 'string' && r.registered[i] !== void 0 && (i = r.registered[i]);
    var o = a[Lf],
      f = [i],
      h = '';
    typeof a.className == 'string'
      ? (h = QE(r.registered, f, a.className))
      : a.className != null && (h = a.className + ' ');
    var m = j0(f, void 0, S.useContext(lO));
    h += r.key + '-' + m.name;
    var d = {};
    for (var p in a) od.call(a, p) && p !== 'css' && p !== Lf && (d[p] = a[p]);
    return (
      (d.className = h),
      u && (d.ref = u),
      S.createElement(
        S.Fragment,
        null,
        S.createElement(oO, {
          cache: r,
          serialized: m,
          isStringTag: typeof o == 'string',
        }),
        S.createElement(o, d)
      )
    );
  }),
  sO = uO,
  Oe = function (r, u) {
    var i = arguments;
    if (u == null || !od.call(u, 'css'))
      return S.createElement.apply(void 0, i);
    var o = i.length,
      f = new Array(o);
    ((f[0] = sO), (f[1] = iO(r, u)));
    for (var h = 2; h < o; h++) f[h] = i[h];
    return S.createElement.apply(null, f);
  };
(function (a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(Oe || (Oe = {}));
function ud() {
  for (var a = arguments.length, r = new Array(a), u = 0; u < a; u++)
    r[u] = arguments[u];
  return j0(r);
}
function cO() {
  var a = ud.apply(void 0, arguments),
    r = 'animation-' + a.name;
  return {
    name: r,
    styles: '@keyframes ' + r + '{' + a.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
function fO(a) {
  if (Array.isArray(a)) return a;
}
function dO(a, r) {
  var u =
    a == null
      ? null
      : (typeof Symbol < 'u' && a[Symbol.iterator]) || a['@@iterator'];
  if (u != null) {
    var i,
      o,
      f,
      h,
      m = [],
      d = !0,
      p = !1;
    try {
      if (((f = (u = u.call(a)).next), r === 0)) {
        if (Object(u) !== u) return;
        d = !1;
      } else
        for (
          ;
          !(d = (i = f.call(u)).done) && (m.push(i.value), m.length !== r);
          d = !0
        );
    } catch (g) {
      ((p = !0), (o = g));
    } finally {
      try {
        if (!d && u.return != null && ((h = u.return()), Object(h) !== h))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return m;
  }
}
function hO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zt(a, r) {
  return fO(a) || dO(a, r) || C0(a, r) || hO();
}
function pO(a, r) {
  if (a == null) return {};
  var u = {};
  for (var i in a)
    if ({}.hasOwnProperty.call(a, i)) {
      if (r.indexOf(i) !== -1) continue;
      u[i] = a[i];
    }
  return u;
}
function Pn(a, r) {
  if (a == null) return {};
  var u,
    i,
    o = pO(a, r);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (i = 0; i < f.length; i++)
      ((u = f[i]),
        r.indexOf(u) === -1 &&
          {}.propertyIsEnumerable.call(a, u) &&
          (o[u] = a[u]));
  }
  return o;
}
function mO(a, r) {
  return (
    r || (r = a.slice(0)),
    Object.freeze(
      Object.defineProperties(a, { raw: { value: Object.freeze(r) } })
    )
  );
}
var kf = S.useLayoutEffect,
  vO = [
    'className',
    'clearValue',
    'cx',
    'getStyles',
    'getClassNames',
    'getValue',
    'hasValue',
    'isMulti',
    'isRtl',
    'options',
    'selectOption',
    'selectProps',
    'setValue',
    'theme',
  ],
  Ou = function () {};
function gO(a, r) {
  return r ? (r[0] === '-' ? a + r : a + '__' + r) : a;
}
function yO(a, r) {
  for (
    var u = arguments.length, i = new Array(u > 2 ? u - 2 : 0), o = 2;
    o < u;
    o++
  )
    i[o - 2] = arguments[o];
  var f = [].concat(i);
  if (r && a)
    for (var h in r) r.hasOwnProperty(h) && r[h] && f.push(''.concat(gO(a, h)));
  return f
    .filter(function (m) {
      return m;
    })
    .map(function (m) {
      return String(m).trim();
    })
    .join(' ');
}
var Wv = function (r) {
    return TO(r)
      ? r.filter(Boolean)
      : wr(r) === 'object' && r !== null
        ? [r]
        : [];
  },
  H0 = function (r) {
    (r.className,
      r.clearValue,
      r.cx,
      r.getStyles,
      r.getClassNames,
      r.getValue,
      r.hasValue,
      r.isMulti,
      r.isRtl,
      r.options,
      r.selectOption,
      r.selectProps,
      r.setValue,
      r.theme);
    var u = Pn(r, vO);
    return xe({}, u);
  },
  mt = function (r, u, i) {
    var o = r.cx,
      f = r.getStyles,
      h = r.getClassNames,
      m = r.className;
    return { css: f(u, r), className: o(i ?? {}, h(u, r), m) };
  };
function bO(a, r, u) {
  if (u) {
    var i = u(a, r);
    if (typeof i == 'string') return i;
  }
  return a;
}
function Hu(a) {
  return [document.documentElement, document.body, window].indexOf(a) > -1;
}
function SO(a) {
  return Hu(a) ? window.innerHeight : a.clientHeight;
}
function B0(a) {
  return Hu(a) ? window.pageYOffset : a.scrollTop;
}
function Mu(a, r) {
  if (Hu(a)) {
    window.scrollTo(0, r);
    return;
  }
  a.scrollTop = r;
}
function xO(a) {
  var r = getComputedStyle(a),
    u = r.position === 'absolute',
    i = /(auto|scroll)/;
  if (r.position === 'fixed') return document.documentElement;
  for (var o = a; (o = o.parentElement); )
    if (
      ((r = getComputedStyle(o)),
      !(u && r.position === 'static') &&
        i.test(r.overflow + r.overflowY + r.overflowX))
    )
      return o;
  return document.documentElement;
}
function wO(a, r, u, i) {
  return u * ((a = a / i - 1) * a * a + 1) + r;
}
function ru(a, r) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ou,
    o = B0(a),
    f = r - o,
    h = 10,
    m = 0;
  function d() {
    m += h;
    var p = wO(m, o, f, u);
    (Mu(a, p), m < u ? window.requestAnimationFrame(d) : i(a));
  }
  d();
}
function eg(a, r) {
  var u = a.getBoundingClientRect(),
    i = r.getBoundingClientRect(),
    o = r.offsetHeight / 3;
  i.bottom + o > u.bottom
    ? Mu(
        a,
        Math.min(
          r.offsetTop + r.clientHeight - a.offsetHeight + o,
          a.scrollHeight
        )
      )
    : i.top - o < u.top && Mu(a, Math.max(r.offsetTop - o, 0));
}
function EO(a) {
  var r = a.getBoundingClientRect();
  return {
    bottom: r.bottom,
    height: r.height,
    left: r.left,
    right: r.right,
    top: r.top,
    width: r.width,
  };
}
function tg() {
  try {
    return (document.createEvent('TouchEvent'), !0);
  } catch {
    return !1;
  }
}
function OO() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var q0 = !1,
  MO = {
    get passive() {
      return (q0 = !0);
    },
  },
  lu = typeof window < 'u' ? window : {};
lu.addEventListener &&
  lu.removeEventListener &&
  (lu.addEventListener('p', Ou, MO), lu.removeEventListener('p', Ou, !1));
var RO = q0;
function CO(a) {
  return a != null;
}
function TO(a) {
  return Array.isArray(a);
}
function iu(a, r, u) {
  return a ? r : u;
}
var AO = function (r) {
    for (
      var u = arguments.length, i = new Array(u > 1 ? u - 1 : 0), o = 1;
      o < u;
      o++
    )
      i[o - 1] = arguments[o];
    var f = Object.entries(r).filter(function (h) {
      var m = zt(h, 1),
        d = m[0];
      return !i.includes(d);
    });
    return f.reduce(function (h, m) {
      var d = zt(m, 2),
        p = d[0],
        g = d[1];
      return ((h[p] = g), h);
    }, {});
  },
  DO = ['children', 'innerProps'],
  _O = ['children', 'innerProps'];
function zO(a) {
  var r = a.maxHeight,
    u = a.menuEl,
    i = a.minHeight,
    o = a.placement,
    f = a.shouldScroll,
    h = a.isFixedPosition,
    m = a.controlHeight,
    d = xO(u),
    p = { placement: 'bottom', maxHeight: r };
  if (!u || !u.offsetParent) return p;
  var g = d.getBoundingClientRect(),
    b = g.height,
    x = u.getBoundingClientRect(),
    M = x.bottom,
    w = x.height,
    T = x.top,
    R = u.offsetParent.getBoundingClientRect(),
    O = R.top,
    B = h ? window.innerHeight : SO(d),
    j = B0(d),
    J = parseInt(getComputedStyle(u).marginBottom, 10),
    z = parseInt(getComputedStyle(u).marginTop, 10),
    A = O - z,
    Z = B - T,
    te = A + j,
    re = b - j - T,
    we = M - B + j + J,
    De = j + T - z,
    Ee = 160;
  switch (o) {
    case 'auto':
    case 'bottom':
      if (Z >= w) return { placement: 'bottom', maxHeight: r };
      if (re >= w && !h)
        return (f && ru(d, we, Ee), { placement: 'bottom', maxHeight: r });
      if ((!h && re >= i) || (h && Z >= i)) {
        f && ru(d, we, Ee);
        var me = h ? Z - J : re - J;
        return { placement: 'bottom', maxHeight: me };
      }
      if (o === 'auto' || h) {
        var le = r,
          oe = h ? A : te;
        return (
          oe >= i && (le = Math.min(oe - J - m, r)),
          { placement: 'top', maxHeight: le }
        );
      }
      if (o === 'bottom')
        return (f && Mu(d, we), { placement: 'bottom', maxHeight: r });
      break;
    case 'top':
      if (A >= w) return { placement: 'top', maxHeight: r };
      if (te >= w && !h)
        return (f && ru(d, De, Ee), { placement: 'top', maxHeight: r });
      if ((!h && te >= i) || (h && A >= i)) {
        var N = r;
        return (
          ((!h && te >= i) || (h && A >= i)) && (N = h ? A - z : te - z),
          f && ru(d, De, Ee),
          { placement: 'top', maxHeight: N }
        );
      }
      return { placement: 'bottom', maxHeight: r };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return p;
}
function NO(a) {
  var r = { bottom: 'top', top: 'bottom' };
  return a ? r[a] : 'bottom';
}
var Y0 = function (r) {
    return r === 'auto' ? 'bottom' : r;
  },
  LO = function (r, u) {
    var i,
      o = r.placement,
      f = r.theme,
      h = f.borderRadius,
      m = f.spacing,
      d = f.colors;
    return xe(
      ((i = { label: 'menu' }),
      cl(i, NO(o), '100%'),
      cl(i, 'position', 'absolute'),
      cl(i, 'width', '100%'),
      cl(i, 'zIndex', 1),
      i),
      u
        ? {}
        : {
            backgroundColor: d.neutral0,
            borderRadius: h,
            boxShadow:
              '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
            marginBottom: m.menuGutter,
            marginTop: m.menuGutter,
          }
    );
  },
  G0 = S.createContext(null),
  kO = function (r) {
    var u = r.children,
      i = r.minMenuHeight,
      o = r.maxMenuHeight,
      f = r.menuPlacement,
      h = r.menuPosition,
      m = r.menuShouldScrollIntoView,
      d = r.theme,
      p = S.useContext(G0) || {},
      g = p.setPortalPlacement,
      b = S.useRef(null),
      x = S.useState(o),
      M = zt(x, 2),
      w = M[0],
      T = M[1],
      R = S.useState(null),
      O = zt(R, 2),
      B = O[0],
      j = O[1],
      J = d.spacing.controlHeight;
    return (
      kf(
        function () {
          var z = b.current;
          if (z) {
            var A = h === 'fixed',
              Z = m && !A,
              te = zO({
                maxHeight: o,
                menuEl: z,
                minHeight: i,
                placement: f,
                shouldScroll: Z,
                isFixedPosition: A,
                controlHeight: J,
              });
            (T(te.maxHeight), j(te.placement), g?.(te.placement));
          }
        },
        [o, f, h, m, i, g, J]
      ),
      u({
        ref: b,
        placerProps: xe(xe({}, r), {}, { placement: B || Y0(f), maxHeight: w }),
      })
    );
  },
  UO = function (r) {
    var u = r.children,
      i = r.innerRef,
      o = r.innerProps;
    return Oe('div', Te({}, mt(r, 'menu', { menu: !0 }), { ref: i }, o), u);
  },
  jO = UO,
  VO = function (r, u) {
    var i = r.maxHeight,
      o = r.theme.spacing.baseUnit;
    return xe(
      {
        maxHeight: i,
        overflowY: 'auto',
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
      },
      u ? {} : { paddingBottom: o, paddingTop: o }
    );
  },
  HO = function (r) {
    var u = r.children,
      i = r.innerProps,
      o = r.innerRef,
      f = r.isMulti;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'menuList', { 'menu-list': !0, 'menu-list--is-multi': f }),
        { ref: o },
        i
      ),
      u
    );
  },
  P0 = function (r, u) {
    var i = r.theme,
      o = i.spacing.baseUnit,
      f = i.colors;
    return xe(
      { textAlign: 'center' },
      u
        ? {}
        : {
            color: f.neutral40,
            padding: ''.concat(o * 2, 'px ').concat(o * 3, 'px'),
          }
    );
  },
  BO = P0,
  qO = P0,
  YO = function (r) {
    var u = r.children,
      i = u === void 0 ? 'No options' : u,
      o = r.innerProps,
      f = Pn(r, DO);
    return Oe(
      'div',
      Te(
        {},
        mt(
          xe(xe({}, f), {}, { children: i, innerProps: o }),
          'noOptionsMessage',
          { 'menu-notice': !0, 'menu-notice--no-options': !0 }
        ),
        o
      ),
      i
    );
  },
  GO = function (r) {
    var u = r.children,
      i = u === void 0 ? 'Loading...' : u,
      o = r.innerProps,
      f = Pn(r, _O);
    return Oe(
      'div',
      Te(
        {},
        mt(
          xe(xe({}, f), {}, { children: i, innerProps: o }),
          'loadingMessage',
          { 'menu-notice': !0, 'menu-notice--loading': !0 }
        ),
        o
      ),
      i
    );
  },
  PO = function (r) {
    var u = r.rect,
      i = r.offset,
      o = r.position;
    return { left: u.left, position: o, top: i, width: u.width, zIndex: 1 };
  },
  XO = function (r) {
    var u = r.appendTo,
      i = r.children,
      o = r.controlElement,
      f = r.innerProps,
      h = r.menuPlacement,
      m = r.menuPosition,
      d = S.useRef(null),
      p = S.useRef(null),
      g = S.useState(Y0(h)),
      b = zt(g, 2),
      x = b[0],
      M = b[1],
      w = S.useMemo(function () {
        return { setPortalPlacement: M };
      }, []),
      T = S.useState(null),
      R = zt(T, 2),
      O = R[0],
      B = R[1],
      j = S.useCallback(
        function () {
          if (o) {
            var Z = EO(o),
              te = m === 'fixed' ? 0 : window.pageYOffset,
              re = Z[x] + te;
            (re !== O?.offset ||
              Z.left !== O?.rect.left ||
              Z.width !== O?.rect.width) &&
              B({ offset: re, rect: Z });
          }
        },
        [o, m, x, O?.offset, O?.rect.left, O?.rect.width]
      );
    kf(
      function () {
        j();
      },
      [j]
    );
    var J = S.useCallback(
      function () {
        (typeof p.current == 'function' && (p.current(), (p.current = null)),
          o &&
            d.current &&
            (p.current = uw(o, d.current, j, {
              elementResize: 'ResizeObserver' in window,
            })));
      },
      [o, j]
    );
    kf(
      function () {
        J();
      },
      [J]
    );
    var z = S.useCallback(
      function (Z) {
        ((d.current = Z), J());
      },
      [J]
    );
    if ((!u && m !== 'fixed') || !O) return null;
    var A = Oe(
      'div',
      Te(
        { ref: z },
        mt(
          xe(xe({}, r), {}, { offset: O.offset, position: m, rect: O.rect }),
          'menuPortal',
          { 'menu-portal': !0 }
        ),
        f
      ),
      i
    );
    return Oe(G0.Provider, { value: w }, u ? Fg.createPortal(A, u) : A);
  },
  $O = function (r) {
    var u = r.isDisabled,
      i = r.isRtl;
    return {
      label: 'container',
      direction: i ? 'rtl' : void 0,
      pointerEvents: u ? 'none' : void 0,
      position: 'relative',
    };
  },
  FO = function (r) {
    var u = r.children,
      i = r.innerProps,
      o = r.isDisabled,
      f = r.isRtl;
    return Oe(
      'div',
      Te({}, mt(r, 'container', { '--is-disabled': o, '--is-rtl': f }), i),
      u
    );
  },
  QO = function (r, u) {
    var i = r.theme.spacing,
      o = r.isMulti,
      f = r.hasValue,
      h = r.selectProps.controlShouldRenderValue;
    return xe(
      {
        alignItems: 'center',
        display: o && f && h ? 'flex' : 'grid',
        flex: 1,
        flexWrap: 'wrap',
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        overflow: 'hidden',
      },
      u
        ? {}
        : {
            padding: ''
              .concat(i.baseUnit / 2, 'px ')
              .concat(i.baseUnit * 2, 'px'),
          }
    );
  },
  ZO = function (r) {
    var u = r.children,
      i = r.innerProps,
      o = r.isMulti,
      f = r.hasValue;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'valueContainer', {
          'value-container': !0,
          'value-container--is-multi': o,
          'value-container--has-value': f,
        }),
        i
      ),
      u
    );
  },
  KO = function () {
    return {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'flex',
      flexShrink: 0,
    };
  },
  IO = function (r) {
    var u = r.children,
      i = r.innerProps;
    return Oe(
      'div',
      Te({}, mt(r, 'indicatorsContainer', { indicators: !0 }), i),
      u
    );
  },
  ng,
  JO = ['size'],
  WO = ['innerProps', 'isRtl', 'size'],
  eM = {
    name: '8mmkcg',
    styles:
      'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0',
  },
  X0 = function (r) {
    var u = r.size,
      i = Pn(r, JO);
    return Oe(
      'svg',
      Te(
        {
          height: u,
          width: u,
          viewBox: '0 0 20 20',
          'aria-hidden': 'true',
          focusable: 'false',
          css: eM,
        },
        i
      )
    );
  },
  sd = function (r) {
    return Oe(
      X0,
      Te({ size: 20 }, r),
      Oe('path', {
        d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z',
      })
    );
  },
  $0 = function (r) {
    return Oe(
      X0,
      Te({ size: 20 }, r),
      Oe('path', {
        d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z',
      })
    );
  },
  F0 = function (r, u) {
    var i = r.isFocused,
      o = r.theme,
      f = o.spacing.baseUnit,
      h = o.colors;
    return xe(
      {
        label: 'indicatorContainer',
        display: 'flex',
        transition: 'color 150ms',
      },
      u
        ? {}
        : {
            color: i ? h.neutral60 : h.neutral20,
            padding: f * 2,
            ':hover': { color: i ? h.neutral80 : h.neutral40 },
          }
    );
  },
  tM = F0,
  nM = function (r) {
    var u = r.children,
      i = r.innerProps;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'dropdownIndicator', { indicator: !0, 'dropdown-indicator': !0 }),
        i
      ),
      u || Oe($0, null)
    );
  },
  aM = F0,
  rM = function (r) {
    var u = r.children,
      i = r.innerProps;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'clearIndicator', { indicator: !0, 'clear-indicator': !0 }),
        i
      ),
      u || Oe(sd, null)
    );
  },
  lM = function (r, u) {
    var i = r.isDisabled,
      o = r.theme,
      f = o.spacing.baseUnit,
      h = o.colors;
    return xe(
      { label: 'indicatorSeparator', alignSelf: 'stretch', width: 1 },
      u
        ? {}
        : {
            backgroundColor: i ? h.neutral10 : h.neutral20,
            marginBottom: f * 2,
            marginTop: f * 2,
          }
    );
  },
  iM = function (r) {
    var u = r.innerProps;
    return Oe(
      'span',
      Te({}, u, mt(r, 'indicatorSeparator', { 'indicator-separator': !0 }))
    );
  },
  oM = cO(
    ng ||
      (ng = mO([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  uM = function (r, u) {
    var i = r.isFocused,
      o = r.size,
      f = r.theme,
      h = f.colors,
      m = f.spacing.baseUnit;
    return xe(
      {
        label: 'loadingIndicator',
        display: 'flex',
        transition: 'color 150ms',
        alignSelf: 'center',
        fontSize: o,
        lineHeight: 1,
        marginRight: o,
        textAlign: 'center',
        verticalAlign: 'middle',
      },
      u ? {} : { color: i ? h.neutral60 : h.neutral20, padding: m * 2 }
    );
  },
  df = function (r) {
    var u = r.delay,
      i = r.offset;
    return Oe('span', {
      css: ud(
        {
          animation: ''
            .concat(oM, ' 1s ease-in-out ')
            .concat(u, 'ms infinite;'),
          backgroundColor: 'currentColor',
          borderRadius: '1em',
          display: 'inline-block',
          marginLeft: i ? '1em' : void 0,
          height: '1em',
          verticalAlign: 'top',
          width: '1em',
        },
        '',
        ''
      ),
    });
  },
  sM = function (r) {
    var u = r.innerProps,
      i = r.isRtl,
      o = r.size,
      f = o === void 0 ? 4 : o,
      h = Pn(r, WO);
    return Oe(
      'div',
      Te(
        {},
        mt(
          xe(xe({}, h), {}, { innerProps: u, isRtl: i, size: f }),
          'loadingIndicator',
          { indicator: !0, 'loading-indicator': !0 }
        ),
        u
      ),
      Oe(df, { delay: 0, offset: i }),
      Oe(df, { delay: 160, offset: !0 }),
      Oe(df, { delay: 320, offset: !i })
    );
  },
  cM = function (r, u) {
    var i = r.isDisabled,
      o = r.isFocused,
      f = r.theme,
      h = f.colors,
      m = f.borderRadius,
      d = f.spacing;
    return xe(
      {
        label: 'control',
        alignItems: 'center',
        cursor: 'default',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minHeight: d.controlHeight,
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms',
      },
      u
        ? {}
        : {
            backgroundColor: i ? h.neutral5 : h.neutral0,
            borderColor: i ? h.neutral10 : o ? h.primary : h.neutral20,
            borderRadius: m,
            borderStyle: 'solid',
            borderWidth: 1,
            boxShadow: o ? '0 0 0 1px '.concat(h.primary) : void 0,
            '&:hover': { borderColor: o ? h.primary : h.neutral30 },
          }
    );
  },
  fM = function (r) {
    var u = r.children,
      i = r.isDisabled,
      o = r.isFocused,
      f = r.innerRef,
      h = r.innerProps,
      m = r.menuIsOpen;
    return Oe(
      'div',
      Te(
        { ref: f },
        mt(r, 'control', {
          control: !0,
          'control--is-disabled': i,
          'control--is-focused': o,
          'control--menu-is-open': m,
        }),
        h,
        { 'aria-disabled': i || void 0 }
      ),
      u
    );
  },
  dM = fM,
  hM = ['data'],
  pM = function (r, u) {
    var i = r.theme.spacing;
    return u
      ? {}
      : { paddingBottom: i.baseUnit * 2, paddingTop: i.baseUnit * 2 };
  },
  mM = function (r) {
    var u = r.children,
      i = r.cx,
      o = r.getStyles,
      f = r.getClassNames,
      h = r.Heading,
      m = r.headingProps,
      d = r.innerProps,
      p = r.label,
      g = r.theme,
      b = r.selectProps;
    return Oe(
      'div',
      Te({}, mt(r, 'group', { group: !0 }), d),
      Oe(
        h,
        Te({}, m, {
          selectProps: b,
          theme: g,
          getStyles: o,
          getClassNames: f,
          cx: i,
        }),
        p
      ),
      Oe('div', null, u)
    );
  },
  vM = function (r, u) {
    var i = r.theme,
      o = i.colors,
      f = i.spacing;
    return xe(
      { label: 'group', cursor: 'default', display: 'block' },
      u
        ? {}
        : {
            color: o.neutral40,
            fontSize: '75%',
            fontWeight: 500,
            marginBottom: '0.25em',
            paddingLeft: f.baseUnit * 3,
            paddingRight: f.baseUnit * 3,
            textTransform: 'uppercase',
          }
    );
  },
  gM = function (r) {
    var u = H0(r);
    u.data;
    var i = Pn(u, hM);
    return Oe('div', Te({}, mt(r, 'groupHeading', { 'group-heading': !0 }), i));
  },
  yM = mM,
  bM = ['innerRef', 'isDisabled', 'isHidden', 'inputClassName'],
  SM = function (r, u) {
    var i = r.isDisabled,
      o = r.value,
      f = r.theme,
      h = f.spacing,
      m = f.colors;
    return xe(
      xe(
        {
          visibility: i ? 'hidden' : 'visible',
          transform: o ? 'translateZ(0)' : '',
        },
        xM
      ),
      u
        ? {}
        : {
            margin: h.baseUnit / 2,
            paddingBottom: h.baseUnit / 2,
            paddingTop: h.baseUnit / 2,
            color: m.neutral80,
          }
    );
  },
  Q0 = {
    gridArea: '1 / 2',
    font: 'inherit',
    minWidth: '2px',
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  xM = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': xe(
      {
        content: 'attr(data-value) " "',
        visibility: 'hidden',
        whiteSpace: 'pre',
      },
      Q0
    ),
  },
  wM = function (r) {
    return xe(
      {
        label: 'input',
        color: 'inherit',
        background: 0,
        opacity: r ? 0 : 1,
        width: '100%',
      },
      Q0
    );
  },
  EM = function (r) {
    var u = r.cx,
      i = r.value,
      o = H0(r),
      f = o.innerRef,
      h = o.isDisabled,
      m = o.isHidden,
      d = o.inputClassName,
      p = Pn(o, bM);
    return Oe(
      'div',
      Te({}, mt(r, 'input', { 'input-container': !0 }), {
        'data-value': i || '',
      }),
      Oe(
        'input',
        Te(
          { className: u({ input: !0 }, d), ref: f, style: wM(m), disabled: h },
          p
        )
      )
    );
  },
  OM = EM,
  MM = function (r, u) {
    var i = r.theme,
      o = i.spacing,
      f = i.borderRadius,
      h = i.colors;
    return xe(
      { label: 'multiValue', display: 'flex', minWidth: 0 },
      u
        ? {}
        : {
            backgroundColor: h.neutral10,
            borderRadius: f / 2,
            margin: o.baseUnit / 2,
          }
    );
  },
  RM = function (r, u) {
    var i = r.theme,
      o = i.borderRadius,
      f = i.colors,
      h = r.cropWithEllipsis;
    return xe(
      {
        overflow: 'hidden',
        textOverflow: h || h === void 0 ? 'ellipsis' : void 0,
        whiteSpace: 'nowrap',
      },
      u
        ? {}
        : {
            borderRadius: o / 2,
            color: f.neutral80,
            fontSize: '85%',
            padding: 3,
            paddingLeft: 6,
          }
    );
  },
  CM = function (r, u) {
    var i = r.theme,
      o = i.spacing,
      f = i.borderRadius,
      h = i.colors,
      m = r.isFocused;
    return xe(
      { alignItems: 'center', display: 'flex' },
      u
        ? {}
        : {
            borderRadius: f / 2,
            backgroundColor: m ? h.dangerLight : void 0,
            paddingLeft: o.baseUnit,
            paddingRight: o.baseUnit,
            ':hover': { backgroundColor: h.dangerLight, color: h.danger },
          }
    );
  },
  Z0 = function (r) {
    var u = r.children,
      i = r.innerProps;
    return Oe('div', i, u);
  },
  TM = Z0,
  AM = Z0;
function DM(a) {
  var r = a.children,
    u = a.innerProps;
  return Oe('div', Te({ role: 'button' }, u), r || Oe(sd, { size: 14 }));
}
var _M = function (r) {
    var u = r.children,
      i = r.components,
      o = r.data,
      f = r.innerProps,
      h = r.isDisabled,
      m = r.removeProps,
      d = r.selectProps,
      p = i.Container,
      g = i.Label,
      b = i.Remove;
    return Oe(
      p,
      {
        data: o,
        innerProps: xe(
          xe(
            {},
            mt(r, 'multiValue', {
              'multi-value': !0,
              'multi-value--is-disabled': h,
            })
          ),
          f
        ),
        selectProps: d,
      },
      Oe(
        g,
        {
          data: o,
          innerProps: xe(
            {},
            mt(r, 'multiValueLabel', { 'multi-value__label': !0 })
          ),
          selectProps: d,
        },
        u
      ),
      Oe(b, {
        data: o,
        innerProps: xe(
          xe({}, mt(r, 'multiValueRemove', { 'multi-value__remove': !0 })),
          {},
          { 'aria-label': 'Remove '.concat(u || 'option') },
          m
        ),
        selectProps: d,
      })
    );
  },
  zM = _M,
  NM = function (r, u) {
    var i = r.isDisabled,
      o = r.isFocused,
      f = r.isSelected,
      h = r.theme,
      m = h.spacing,
      d = h.colors;
    return xe(
      {
        label: 'option',
        cursor: 'default',
        display: 'block',
        fontSize: 'inherit',
        width: '100%',
        userSelect: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      },
      u
        ? {}
        : {
            backgroundColor: f ? d.primary : o ? d.primary25 : 'transparent',
            color: i ? d.neutral20 : f ? d.neutral0 : 'inherit',
            padding: ''
              .concat(m.baseUnit * 2, 'px ')
              .concat(m.baseUnit * 3, 'px'),
            ':active': {
              backgroundColor: i ? void 0 : f ? d.primary : d.primary50,
            },
          }
    );
  },
  LM = function (r) {
    var u = r.children,
      i = r.isDisabled,
      o = r.isFocused,
      f = r.isSelected,
      h = r.innerRef,
      m = r.innerProps;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'option', {
          option: !0,
          'option--is-disabled': i,
          'option--is-focused': o,
          'option--is-selected': f,
        }),
        { ref: h, 'aria-disabled': i },
        m
      ),
      u
    );
  },
  kM = LM,
  UM = function (r, u) {
    var i = r.theme,
      o = i.spacing,
      f = i.colors;
    return xe(
      { label: 'placeholder', gridArea: '1 / 1 / 2 / 3' },
      u
        ? {}
        : {
            color: f.neutral50,
            marginLeft: o.baseUnit / 2,
            marginRight: o.baseUnit / 2,
          }
    );
  },
  jM = function (r) {
    var u = r.children,
      i = r.innerProps;
    return Oe('div', Te({}, mt(r, 'placeholder', { placeholder: !0 }), i), u);
  },
  VM = jM,
  HM = function (r, u) {
    var i = r.isDisabled,
      o = r.theme,
      f = o.spacing,
      h = o.colors;
    return xe(
      {
        label: 'singleValue',
        gridArea: '1 / 1 / 2 / 3',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      u
        ? {}
        : {
            color: i ? h.neutral40 : h.neutral80,
            marginLeft: f.baseUnit / 2,
            marginRight: f.baseUnit / 2,
          }
    );
  },
  BM = function (r) {
    var u = r.children,
      i = r.isDisabled,
      o = r.innerProps;
    return Oe(
      'div',
      Te(
        {},
        mt(r, 'singleValue', {
          'single-value': !0,
          'single-value--is-disabled': i,
        }),
        o
      ),
      u
    );
  },
  qM = BM,
  YM = {
    ClearIndicator: rM,
    Control: dM,
    DropdownIndicator: nM,
    DownChevron: $0,
    CrossIcon: sd,
    Group: yM,
    GroupHeading: gM,
    IndicatorsContainer: IO,
    IndicatorSeparator: iM,
    Input: OM,
    LoadingIndicator: sM,
    Menu: jO,
    MenuList: HO,
    MenuPortal: XO,
    LoadingMessage: GO,
    NoOptionsMessage: YO,
    MultiValue: zM,
    MultiValueContainer: TM,
    MultiValueLabel: AM,
    MultiValueRemove: DM,
    Option: kM,
    Placeholder: VM,
    SelectContainer: FO,
    SingleValue: qM,
    ValueContainer: ZO,
  },
  GM = function (r) {
    return xe(xe({}, YM), r.components);
  },
  ag =
    Number.isNaN ||
    function (r) {
      return typeof r == 'number' && r !== r;
    };
function PM(a, r) {
  return !!(a === r || (ag(a) && ag(r)));
}
function XM(a, r) {
  if (a.length !== r.length) return !1;
  for (var u = 0; u < a.length; u++) if (!PM(a[u], r[u])) return !1;
  return !0;
}
function $M(a, r) {
  r === void 0 && (r = XM);
  var u = null;
  function i() {
    for (var o = [], f = 0; f < arguments.length; f++) o[f] = arguments[f];
    if (u && u.lastThis === this && r(o, u.lastArgs)) return u.lastResult;
    var h = a.apply(this, o);
    return ((u = { lastResult: h, lastArgs: o, lastThis: this }), h);
  }
  return (
    (i.clear = function () {
      u = null;
    }),
    i
  );
}
var FM = {
    name: '7pg0cj-a11yText',
    styles:
      'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap',
  },
  QM = function (r) {
    return Oe('span', Te({ css: FM }, r));
  },
  rg = QM,
  ZM = {
    guidance: function (r) {
      var u = r.isSearchable,
        i = r.isMulti,
        o = r.tabSelectsValue,
        f = r.context,
        h = r.isInitialFocus;
      switch (f) {
        case 'menu':
          return 'Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu'.concat(
            o ? ', press Tab to select the option and exit the menu' : '',
            '.'
          );
        case 'input':
          return h
            ? ''
                .concat(r['aria-label'] || 'Select', ' is focused ')
                .concat(
                  u ? ',type to refine list' : '',
                  ', press Down to open the menu, '
                )
                .concat(i ? ' press left to focus selected values' : '')
            : '';
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function (r) {
      var u = r.action,
        i = r.label,
        o = i === void 0 ? '' : i,
        f = r.labels,
        h = r.isDisabled;
      switch (u) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return 'option '.concat(o, ', deselected.');
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return 'option'
            .concat(f.length > 1 ? 's' : '', ' ')
            .concat(f.join(','), ', selected.');
        case 'select-option':
          return h
            ? 'option '.concat(o, ' is disabled. Select another option.')
            : 'option '.concat(o, ', selected.');
        default:
          return '';
      }
    },
    onFocus: function (r) {
      var u = r.context,
        i = r.focused,
        o = r.options,
        f = r.label,
        h = f === void 0 ? '' : f,
        m = r.selectValue,
        d = r.isDisabled,
        p = r.isSelected,
        g = r.isAppleDevice,
        b = function (T, R) {
          return T && T.length
            ? ''.concat(T.indexOf(R) + 1, ' of ').concat(T.length)
            : '';
        };
      if (u === 'value' && m)
        return 'value '.concat(h, ' focused, ').concat(b(m, i), '.');
      if (u === 'menu' && g) {
        var x = d ? ' disabled' : '',
          M = ''.concat(p ? ' selected' : '').concat(x);
        return ''.concat(h).concat(M, ', ').concat(b(o, i), '.');
      }
      return '';
    },
    onFilter: function (r) {
      var u = r.inputValue,
        i = r.resultsMessage;
      return ''.concat(i).concat(u ? ' for search term ' + u : '', '.');
    },
  },
  KM = function (r) {
    var u = r.ariaSelection,
      i = r.focusedOption,
      o = r.focusedValue,
      f = r.focusableOptions,
      h = r.isFocused,
      m = r.selectValue,
      d = r.selectProps,
      p = r.id,
      g = r.isAppleDevice,
      b = d.ariaLiveMessages,
      x = d.getOptionLabel,
      M = d.inputValue,
      w = d.isMulti,
      T = d.isOptionDisabled,
      R = d.isSearchable,
      O = d.menuIsOpen,
      B = d.options,
      j = d.screenReaderStatus,
      J = d.tabSelectsValue,
      z = d.isLoading,
      A = d['aria-label'],
      Z = d['aria-live'],
      te = S.useMemo(
        function () {
          return xe(xe({}, ZM), b || {});
        },
        [b]
      ),
      re = S.useMemo(
        function () {
          var oe = '';
          if (u && te.onChange) {
            var N = u.option,
              I = u.options,
              Q = u.removedValue,
              ve = u.removedValues,
              E = u.value,
              Y = function (Ae) {
                return Array.isArray(Ae) ? null : Ae;
              },
              $ = Q || N || Y(E),
              W = $ ? x($) : '',
              ae = I || ve || void 0,
              ce = ae ? ae.map(x) : [],
              ie = xe({ isDisabled: $ && T($, m), label: W, labels: ce }, u);
            oe = te.onChange(ie);
          }
          return oe;
        },
        [u, te, T, m, x]
      ),
      we = S.useMemo(
        function () {
          var oe = '',
            N = i || o,
            I = !!(i && m && m.includes(i));
          if (N && te.onFocus) {
            var Q = {
              focused: N,
              label: x(N),
              isDisabled: T(N, m),
              isSelected: I,
              options: f,
              context: N === i ? 'menu' : 'value',
              selectValue: m,
              isAppleDevice: g,
            };
            oe = te.onFocus(Q);
          }
          return oe;
        },
        [i, o, x, T, te, f, m, g]
      ),
      De = S.useMemo(
        function () {
          var oe = '';
          if (O && B.length && !z && te.onFilter) {
            var N = j({ count: f.length });
            oe = te.onFilter({ inputValue: M, resultsMessage: N });
          }
          return oe;
        },
        [f, M, O, te, B, j, z]
      ),
      Ee = u?.action === 'initial-input-focus',
      me = S.useMemo(
        function () {
          var oe = '';
          if (te.guidance) {
            var N = o ? 'value' : O ? 'menu' : 'input';
            oe = te.guidance({
              'aria-label': A,
              context: N,
              isDisabled: i && T(i, m),
              isMulti: w,
              isSearchable: R,
              tabSelectsValue: J,
              isInitialFocus: Ee,
            });
          }
          return oe;
        },
        [A, i, o, w, T, R, O, te, m, J, Ee]
      ),
      le = Oe(
        S.Fragment,
        null,
        Oe('span', { id: 'aria-selection' }, re),
        Oe('span', { id: 'aria-focused' }, we),
        Oe('span', { id: 'aria-results' }, De),
        Oe('span', { id: 'aria-guidance' }, me)
      );
    return Oe(
      S.Fragment,
      null,
      Oe(rg, { id: p }, Ee && le),
      Oe(
        rg,
        {
          'aria-live': Z,
          'aria-atomic': 'false',
          'aria-relevant': 'additions text',
          role: 'log',
        },
        h && !Ee && le
      )
    );
  },
  IM = KM,
  Uf = [
    { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
    { base: 'AA', letters: 'Ꜳ' },
    { base: 'AE', letters: 'ÆǼǢ' },
    { base: 'AO', letters: 'Ꜵ' },
    { base: 'AU', letters: 'Ꜷ' },
    { base: 'AV', letters: 'ꜸꜺ' },
    { base: 'AY', letters: 'Ꜽ' },
    { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
    { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
    { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
    { base: 'DZ', letters: 'ǱǄ' },
    { base: 'Dz', letters: 'ǲǅ' },
    { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
    { base: 'F', letters: 'FⒻＦḞƑꝻ' },
    { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
    { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
    { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
    { base: 'J', letters: 'JⒿＪĴɈ' },
    { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
    { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
    { base: 'LJ', letters: 'Ǉ' },
    { base: 'Lj', letters: 'ǈ' },
    { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
    { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
    { base: 'NJ', letters: 'Ǌ' },
    { base: 'Nj', letters: 'ǋ' },
    { base: 'O', letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' },
    { base: 'OI', letters: 'Ƣ' },
    { base: 'OO', letters: 'Ꝏ' },
    { base: 'OU', letters: 'Ȣ' },
    { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
    { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
    { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
    { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
    { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
    { base: 'TZ', letters: 'Ꜩ' },
    { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
    { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
    { base: 'VY', letters: 'Ꝡ' },
    { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
    { base: 'X', letters: 'XⓍＸẊẌ' },
    { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
    { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
    { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
    { base: 'aa', letters: 'ꜳ' },
    { base: 'ae', letters: 'æǽǣ' },
    { base: 'ao', letters: 'ꜵ' },
    { base: 'au', letters: 'ꜷ' },
    { base: 'av', letters: 'ꜹꜻ' },
    { base: 'ay', letters: 'ꜽ' },
    { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
    { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
    { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
    { base: 'dz', letters: 'ǳǆ' },
    { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
    { base: 'f', letters: 'fⓕｆḟƒꝼ' },
    { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
    { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
    { base: 'hv', letters: 'ƕ' },
    { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
    { base: 'j', letters: 'jⓙｊĵǰɉ' },
    { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
    { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
    { base: 'lj', letters: 'ǉ' },
    { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
    { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
    { base: 'nj', letters: 'ǌ' },
    { base: 'o', letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ' },
    { base: 'oi', letters: 'ƣ' },
    { base: 'ou', letters: 'ȣ' },
    { base: 'oo', letters: 'ꝏ' },
    { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
    { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
    { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
    { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
    { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
    { base: 'tz', letters: 'ꜩ' },
    { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
    { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
    { base: 'vy', letters: 'ꝡ' },
    { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
    { base: 'x', letters: 'xⓧｘẋẍ' },
    { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
    { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' },
  ],
  JM = new RegExp(
    '[' +
      Uf.map(function (a) {
        return a.letters;
      }).join('') +
      ']',
    'g'
  ),
  K0 = {};
for (var hf = 0; hf < Uf.length; hf++)
  for (var pf = Uf[hf], mf = 0; mf < pf.letters.length; mf++)
    K0[pf.letters[mf]] = pf.base;
var I0 = function (r) {
    return r.replace(JM, function (u) {
      return K0[u];
    });
  },
  WM = $M(I0),
  lg = function (r) {
    return r.replace(/^\s+|\s+$/g, '');
  },
  eR = function (r) {
    return ''.concat(r.label, ' ').concat(r.value);
  },
  tR = function (r) {
    return function (u, i) {
      if (u.data.__isNew__) return !0;
      var o = xe(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: eR,
            trim: !0,
            matchFrom: 'any',
          },
          r
        ),
        f = o.ignoreCase,
        h = o.ignoreAccents,
        m = o.stringify,
        d = o.trim,
        p = o.matchFrom,
        g = d ? lg(i) : i,
        b = d ? lg(m(u)) : m(u);
      return (
        f && ((g = g.toLowerCase()), (b = b.toLowerCase())),
        h && ((g = WM(g)), (b = I0(b))),
        p === 'start' ? b.substr(0, g.length) === g : b.indexOf(g) > -1
      );
    };
  },
  nR = ['innerRef'];
function aR(a) {
  var r = a.innerRef,
    u = Pn(a, nR),
    i = AO(u, 'onExited', 'in', 'enter', 'exit', 'appear');
  return Oe(
    'input',
    Te({ ref: r }, i, {
      css: ud(
        {
          label: 'dummyInput',
          background: 0,
          border: 0,
          caretColor: 'transparent',
          fontSize: 'inherit',
          gridArea: '1 / 1 / 2 / 3',
          outline: 0,
          padding: 0,
          width: 1,
          color: 'transparent',
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(.01)',
        },
        '',
        ''
      ),
    })
  );
}
var rR = function (r) {
  (r.cancelable && r.preventDefault(), r.stopPropagation());
};
function lR(a) {
  var r = a.isEnabled,
    u = a.onBottomArrive,
    i = a.onBottomLeave,
    o = a.onTopArrive,
    f = a.onTopLeave,
    h = S.useRef(!1),
    m = S.useRef(!1),
    d = S.useRef(0),
    p = S.useRef(null),
    g = S.useCallback(
      function (R, O) {
        if (p.current !== null) {
          var B = p.current,
            j = B.scrollTop,
            J = B.scrollHeight,
            z = B.clientHeight,
            A = p.current,
            Z = O > 0,
            te = J - z - j,
            re = !1;
          (te > O && h.current && (i && i(R), (h.current = !1)),
            Z && m.current && (f && f(R), (m.current = !1)),
            Z && O > te
              ? (u && !h.current && u(R),
                (A.scrollTop = J),
                (re = !0),
                (h.current = !0))
              : !Z &&
                -O > j &&
                (o && !m.current && o(R),
                (A.scrollTop = 0),
                (re = !0),
                (m.current = !0)),
            re && rR(R));
        }
      },
      [u, i, o, f]
    ),
    b = S.useCallback(
      function (R) {
        g(R, R.deltaY);
      },
      [g]
    ),
    x = S.useCallback(function (R) {
      d.current = R.changedTouches[0].clientY;
    }, []),
    M = S.useCallback(
      function (R) {
        var O = d.current - R.changedTouches[0].clientY;
        g(R, O);
      },
      [g]
    ),
    w = S.useCallback(
      function (R) {
        if (R) {
          var O = RO ? { passive: !1 } : !1;
          (R.addEventListener('wheel', b, O),
            R.addEventListener('touchstart', x, O),
            R.addEventListener('touchmove', M, O));
        }
      },
      [M, x, b]
    ),
    T = S.useCallback(
      function (R) {
        R &&
          (R.removeEventListener('wheel', b, !1),
          R.removeEventListener('touchstart', x, !1),
          R.removeEventListener('touchmove', M, !1));
      },
      [M, x, b]
    );
  return (
    S.useEffect(
      function () {
        if (r) {
          var R = p.current;
          return (
            w(R),
            function () {
              T(R);
            }
          );
        }
      },
      [r, w, T]
    ),
    function (R) {
      p.current = R;
    }
  );
}
var ig = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
  og = {
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
  };
function ug(a) {
  a.cancelable && a.preventDefault();
}
function sg(a) {
  a.stopPropagation();
}
function cg() {
  var a = this.scrollTop,
    r = this.scrollHeight,
    u = a + this.offsetHeight;
  a === 0 ? (this.scrollTop = 1) : u === r && (this.scrollTop = a - 1);
}
function fg() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var dg = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Si = 0,
  ul = { capture: !1, passive: !1 };
function iR(a) {
  var r = a.isEnabled,
    u = a.accountForScrollbars,
    i = u === void 0 ? !0 : u,
    o = S.useRef({}),
    f = S.useRef(null),
    h = S.useCallback(
      function (d) {
        if (dg) {
          var p = document.body,
            g = p && p.style;
          if (
            (i &&
              ig.forEach(function (w) {
                var T = g && g[w];
                o.current[w] = T;
              }),
            i && Si < 1)
          ) {
            var b = parseInt(o.current.paddingRight, 10) || 0,
              x = document.body ? document.body.clientWidth : 0,
              M = window.innerWidth - x + b || 0;
            (Object.keys(og).forEach(function (w) {
              var T = og[w];
              g && (g[w] = T);
            }),
              g && (g.paddingRight = ''.concat(M, 'px')));
          }
          (p &&
            fg() &&
            (p.addEventListener('touchmove', ug, ul),
            d &&
              (d.addEventListener('touchstart', cg, ul),
              d.addEventListener('touchmove', sg, ul))),
            (Si += 1));
        }
      },
      [i]
    ),
    m = S.useCallback(
      function (d) {
        if (dg) {
          var p = document.body,
            g = p && p.style;
          ((Si = Math.max(Si - 1, 0)),
            i &&
              Si < 1 &&
              ig.forEach(function (b) {
                var x = o.current[b];
                g && (g[b] = x);
              }),
            p &&
              fg() &&
              (p.removeEventListener('touchmove', ug, ul),
              d &&
                (d.removeEventListener('touchstart', cg, ul),
                d.removeEventListener('touchmove', sg, ul))));
        }
      },
      [i]
    );
  return (
    S.useEffect(
      function () {
        if (r) {
          var d = f.current;
          return (
            h(d),
            function () {
              m(d);
            }
          );
        }
      },
      [r, h, m]
    ),
    function (d) {
      f.current = d;
    }
  );
}
var oR = function (r) {
    var u = r.target;
    return (
      u.ownerDocument.activeElement && u.ownerDocument.activeElement.blur()
    );
  },
  uR = {
    name: '1kfdb0e',
    styles: 'position:fixed;left:0;bottom:0;right:0;top:0',
  };
function sR(a) {
  var r = a.children,
    u = a.lockEnabled,
    i = a.captureEnabled,
    o = i === void 0 ? !0 : i,
    f = a.onBottomArrive,
    h = a.onBottomLeave,
    m = a.onTopArrive,
    d = a.onTopLeave,
    p = lR({
      isEnabled: o,
      onBottomArrive: f,
      onBottomLeave: h,
      onTopArrive: m,
      onTopLeave: d,
    }),
    g = iR({ isEnabled: u }),
    b = function (M) {
      (p(M), g(M));
    };
  return Oe(S.Fragment, null, u && Oe('div', { onClick: oR, css: uR }), r(b));
}
var cR = {
    name: '1a0ro4n-requiredInput',
    styles:
      'label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%',
  },
  fR = function (r) {
    var u = r.name,
      i = r.onFocus;
    return Oe('input', {
      required: !0,
      name: u,
      tabIndex: -1,
      'aria-hidden': 'true',
      onFocus: i,
      css: cR,
      value: '',
      onChange: function () {},
    });
  },
  dR = fR;
function cd(a) {
  var r;
  return typeof window < 'u' && window.navigator != null
    ? a.test(
        ((r = window.navigator.userAgentData) === null || r === void 0
          ? void 0
          : r.platform) || window.navigator.platform
      )
    : !1;
}
function hR() {
  return cd(/^iPhone/i);
}
function J0() {
  return cd(/^Mac/i);
}
function pR() {
  return cd(/^iPad/i) || (J0() && navigator.maxTouchPoints > 1);
}
function mR() {
  return hR() || pR();
}
function vR() {
  return J0() || mR();
}
var gR = function (r) {
    return r.label;
  },
  yR = function (r) {
    return r.label;
  },
  bR = function (r) {
    return r.value;
  },
  SR = function (r) {
    return !!r.isDisabled;
  },
  xR = {
    clearIndicator: aM,
    container: $O,
    control: cM,
    dropdownIndicator: tM,
    group: pM,
    groupHeading: vM,
    indicatorsContainer: KO,
    indicatorSeparator: lM,
    input: SM,
    loadingIndicator: uM,
    loadingMessage: qO,
    menu: LO,
    menuList: VO,
    menuPortal: PO,
    multiValue: MM,
    multiValueLabel: RM,
    multiValueRemove: CM,
    noOptionsMessage: BO,
    option: NM,
    placeholder: UM,
    singleValue: HM,
    valueContainer: QO,
  },
  wR = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)',
  },
  ER = 4,
  W0 = 4,
  OR = 38,
  MR = W0 * 2,
  RR = { baseUnit: W0, controlHeight: OR, menuGutter: MR },
  vf = { borderRadius: ER, colors: wR, spacing: RR },
  CR = {
    'aria-live': 'polite',
    backspaceRemovesValue: !0,
    blurInputOnSelect: tg(),
    captureMenuScroll: !tg(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: tR(),
    formatGroupLabel: gR,
    getOptionLabel: yR,
    getOptionValue: bR,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: SR,
    loadingMessage: function () {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !OO(),
    noOptionsMessage: function () {
      return 'No options';
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function (r) {
      var u = r.count;
      return ''.concat(u, ' result').concat(u !== 1 ? 's' : '', ' available');
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function hg(a, r, u, i) {
  var o = ny(a, r, u),
    f = ay(a, r, u),
    h = ty(a, r),
    m = Ru(a, r);
  return {
    type: 'option',
    data: r,
    isDisabled: o,
    isSelected: f,
    label: h,
    value: m,
    index: i,
  };
}
function mu(a, r) {
  return a.options
    .map(function (u, i) {
      if ('options' in u) {
        var o = u.options
          .map(function (h, m) {
            return hg(a, h, r, m);
          })
          .filter(function (h) {
            return mg(a, h);
          });
        return o.length > 0
          ? { type: 'group', data: u, options: o, index: i }
          : void 0;
      }
      var f = hg(a, u, r, i);
      return mg(a, f) ? f : void 0;
    })
    .filter(CO);
}
function ey(a) {
  return a.reduce(function (r, u) {
    return (
      u.type === 'group'
        ? r.push.apply(
            r,
            ad(
              u.options.map(function (i) {
                return i.data;
              })
            )
          )
        : r.push(u.data),
      r
    );
  }, []);
}
function pg(a, r) {
  return a.reduce(function (u, i) {
    return (
      i.type === 'group'
        ? u.push.apply(
            u,
            ad(
              i.options.map(function (o) {
                return {
                  data: o.data,
                  id: ''.concat(r, '-').concat(i.index, '-').concat(o.index),
                };
              })
            )
          )
        : u.push({ data: i.data, id: ''.concat(r, '-').concat(i.index) }),
      u
    );
  }, []);
}
function TR(a, r) {
  return ey(mu(a, r));
}
function mg(a, r) {
  var u = a.inputValue,
    i = u === void 0 ? '' : u,
    o = r.data,
    f = r.isSelected,
    h = r.label,
    m = r.value;
  return (!ly(a) || !f) && ry(a, { label: h, value: m, data: o }, i);
}
function AR(a, r) {
  var u = a.focusedValue,
    i = a.selectValue,
    o = i.indexOf(u);
  if (o > -1) {
    var f = r.indexOf(u);
    if (f > -1) return u;
    if (o < r.length) return r[o];
  }
  return null;
}
function DR(a, r) {
  var u = a.focusedOption;
  return u && r.indexOf(u) > -1 ? u : r[0];
}
var gf = function (r, u) {
    var i,
      o =
        (i = r.find(function (f) {
          return f.data === u;
        })) === null || i === void 0
          ? void 0
          : i.id;
    return o || null;
  },
  ty = function (r, u) {
    return r.getOptionLabel(u);
  },
  Ru = function (r, u) {
    return r.getOptionValue(u);
  };
function ny(a, r, u) {
  return typeof a.isOptionDisabled == 'function'
    ? a.isOptionDisabled(r, u)
    : !1;
}
function ay(a, r, u) {
  if (u.indexOf(r) > -1) return !0;
  if (typeof a.isOptionSelected == 'function') return a.isOptionSelected(r, u);
  var i = Ru(a, r);
  return u.some(function (o) {
    return Ru(a, o) === i;
  });
}
function ry(a, r, u) {
  return a.filterOption ? a.filterOption(r, u) : !0;
}
var ly = function (r) {
    var u = r.hideSelectedOptions,
      i = r.isMulti;
    return u === void 0 ? i : u;
  },
  _R = 1,
  iy = (function (a) {
    oE(u, a);
    var r = cE(u);
    function u(i) {
      var o;
      if (
        (lE(this, u),
        (o = r.call(this, i)),
        (o.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: '',
          isAppleDevice: !1,
        }),
        (o.blockOptionHover = !1),
        (o.isComposing = !1),
        (o.commonProps = void 0),
        (o.initialTouchX = 0),
        (o.initialTouchY = 0),
        (o.openAfterFocus = !1),
        (o.scrollToFocusedOptionOnUpdate = !1),
        (o.userIsDragging = void 0),
        (o.controlRef = null),
        (o.getControlRef = function (d) {
          o.controlRef = d;
        }),
        (o.focusedOptionRef = null),
        (o.getFocusedOptionRef = function (d) {
          o.focusedOptionRef = d;
        }),
        (o.menuListRef = null),
        (o.getMenuListRef = function (d) {
          o.menuListRef = d;
        }),
        (o.inputRef = null),
        (o.getInputRef = function (d) {
          o.inputRef = d;
        }),
        (o.focus = o.focusInput),
        (o.blur = o.blurInput),
        (o.onChange = function (d, p) {
          var g = o.props,
            b = g.onChange,
            x = g.name;
          ((p.name = x), o.ariaOnChange(d, p), b(d, p));
        }),
        (o.setValue = function (d, p, g) {
          var b = o.props,
            x = b.closeMenuOnSelect,
            M = b.isMulti,
            w = b.inputValue;
          (o.onInputChange('', { action: 'set-value', prevInputValue: w }),
            x &&
              (o.setState({ inputIsHiddenAfterUpdate: !M }), o.onMenuClose()),
            o.setState({ clearFocusValueOnUpdate: !0 }),
            o.onChange(d, { action: p, option: g }));
        }),
        (o.selectOption = function (d) {
          var p = o.props,
            g = p.blurInputOnSelect,
            b = p.isMulti,
            x = p.name,
            M = o.state.selectValue,
            w = b && o.isOptionSelected(d, M),
            T = o.isOptionDisabled(d, M);
          if (w) {
            var R = o.getOptionValue(d);
            o.setValue(
              M.filter(function (O) {
                return o.getOptionValue(O) !== R;
              }),
              'deselect-option',
              d
            );
          } else if (!T)
            b
              ? o.setValue([].concat(ad(M), [d]), 'select-option', d)
              : o.setValue(d, 'select-option');
          else {
            o.ariaOnChange(d, { action: 'select-option', option: d, name: x });
            return;
          }
          g && o.blurInput();
        }),
        (o.removeValue = function (d) {
          var p = o.props.isMulti,
            g = o.state.selectValue,
            b = o.getOptionValue(d),
            x = g.filter(function (w) {
              return o.getOptionValue(w) !== b;
            }),
            M = iu(p, x, x[0] || null);
          (o.onChange(M, { action: 'remove-value', removedValue: d }),
            o.focusInput());
        }),
        (o.clearValue = function () {
          var d = o.state.selectValue;
          o.onChange(iu(o.props.isMulti, [], null), {
            action: 'clear',
            removedValues: d,
          });
        }),
        (o.popValue = function () {
          var d = o.props.isMulti,
            p = o.state.selectValue,
            g = p[p.length - 1],
            b = p.slice(0, p.length - 1),
            x = iu(d, b, b[0] || null);
          g && o.onChange(x, { action: 'pop-value', removedValue: g });
        }),
        (o.getFocusedOptionId = function (d) {
          return gf(o.state.focusableOptionsWithIds, d);
        }),
        (o.getFocusableOptionsWithIds = function () {
          return pg(mu(o.props, o.state.selectValue), o.getElementId('option'));
        }),
        (o.getValue = function () {
          return o.state.selectValue;
        }),
        (o.cx = function () {
          for (var d = arguments.length, p = new Array(d), g = 0; g < d; g++)
            p[g] = arguments[g];
          return yO.apply(void 0, [o.props.classNamePrefix].concat(p));
        }),
        (o.getOptionLabel = function (d) {
          return ty(o.props, d);
        }),
        (o.getOptionValue = function (d) {
          return Ru(o.props, d);
        }),
        (o.getStyles = function (d, p) {
          var g = o.props.unstyled,
            b = xR[d](p, g);
          b.boxSizing = 'border-box';
          var x = o.props.styles[d];
          return x ? x(b, p) : b;
        }),
        (o.getClassNames = function (d, p) {
          var g, b;
          return (g = (b = o.props.classNames)[d]) === null || g === void 0
            ? void 0
            : g.call(b, p);
        }),
        (o.getElementId = function (d) {
          return ''.concat(o.state.instancePrefix, '-').concat(d);
        }),
        (o.getComponents = function () {
          return GM(o.props);
        }),
        (o.buildCategorizedOptions = function () {
          return mu(o.props, o.state.selectValue);
        }),
        (o.getCategorizedOptions = function () {
          return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
        }),
        (o.buildFocusableOptions = function () {
          return ey(o.buildCategorizedOptions());
        }),
        (o.getFocusableOptions = function () {
          return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
        }),
        (o.ariaOnChange = function (d, p) {
          o.setState({ ariaSelection: xe({ value: d }, p) });
        }),
        (o.onMenuMouseDown = function (d) {
          d.button === 0 &&
            (d.stopPropagation(), d.preventDefault(), o.focusInput());
        }),
        (o.onMenuMouseMove = function (d) {
          o.blockOptionHover = !1;
        }),
        (o.onControlMouseDown = function (d) {
          if (!d.defaultPrevented) {
            var p = o.props.openMenuOnClick;
            (o.state.isFocused
              ? o.props.menuIsOpen
                ? d.target.tagName !== 'INPUT' &&
                  d.target.tagName !== 'TEXTAREA' &&
                  o.onMenuClose()
                : p && o.openMenu('first')
              : (p && (o.openAfterFocus = !0), o.focusInput()),
              d.target.tagName !== 'INPUT' &&
                d.target.tagName !== 'TEXTAREA' &&
                d.preventDefault());
          }
        }),
        (o.onDropdownIndicatorMouseDown = function (d) {
          if (
            !(d && d.type === 'mousedown' && d.button !== 0) &&
            !o.props.isDisabled
          ) {
            var p = o.props,
              g = p.isMulti,
              b = p.menuIsOpen;
            (o.focusInput(),
              b
                ? (o.setState({ inputIsHiddenAfterUpdate: !g }),
                  o.onMenuClose())
                : o.openMenu('first'),
              d.preventDefault());
          }
        }),
        (o.onClearIndicatorMouseDown = function (d) {
          (d && d.type === 'mousedown' && d.button !== 0) ||
            (o.clearValue(),
            d.preventDefault(),
            (o.openAfterFocus = !1),
            d.type === 'touchend'
              ? o.focusInput()
              : setTimeout(function () {
                  return o.focusInput();
                }));
        }),
        (o.onScroll = function (d) {
          typeof o.props.closeMenuOnScroll == 'boolean'
            ? d.target instanceof HTMLElement &&
              Hu(d.target) &&
              o.props.onMenuClose()
            : typeof o.props.closeMenuOnScroll == 'function' &&
              o.props.closeMenuOnScroll(d) &&
              o.props.onMenuClose();
        }),
        (o.onCompositionStart = function () {
          o.isComposing = !0;
        }),
        (o.onCompositionEnd = function () {
          o.isComposing = !1;
        }),
        (o.onTouchStart = function (d) {
          var p = d.touches,
            g = p && p.item(0);
          g &&
            ((o.initialTouchX = g.clientX),
            (o.initialTouchY = g.clientY),
            (o.userIsDragging = !1));
        }),
        (o.onTouchMove = function (d) {
          var p = d.touches,
            g = p && p.item(0);
          if (g) {
            var b = Math.abs(g.clientX - o.initialTouchX),
              x = Math.abs(g.clientY - o.initialTouchY),
              M = 5;
            o.userIsDragging = b > M || x > M;
          }
        }),
        (o.onTouchEnd = function (d) {
          o.userIsDragging ||
            (o.controlRef &&
              !o.controlRef.contains(d.target) &&
              o.menuListRef &&
              !o.menuListRef.contains(d.target) &&
              o.blurInput(),
            (o.initialTouchX = 0),
            (o.initialTouchY = 0));
        }),
        (o.onControlTouchEnd = function (d) {
          o.userIsDragging || o.onControlMouseDown(d);
        }),
        (o.onClearIndicatorTouchEnd = function (d) {
          o.userIsDragging || o.onClearIndicatorMouseDown(d);
        }),
        (o.onDropdownIndicatorTouchEnd = function (d) {
          o.userIsDragging || o.onDropdownIndicatorMouseDown(d);
        }),
        (o.handleInputChange = function (d) {
          var p = o.props.inputValue,
            g = d.currentTarget.value;
          (o.setState({ inputIsHiddenAfterUpdate: !1 }),
            o.onInputChange(g, { action: 'input-change', prevInputValue: p }),
            o.props.menuIsOpen || o.onMenuOpen());
        }),
        (o.onInputFocus = function (d) {
          (o.props.onFocus && o.props.onFocus(d),
            o.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (o.openAfterFocus || o.props.openMenuOnFocus) &&
              o.openMenu('first'),
            (o.openAfterFocus = !1));
        }),
        (o.onInputBlur = function (d) {
          var p = o.props.inputValue;
          if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
            o.inputRef.focus();
            return;
          }
          (o.props.onBlur && o.props.onBlur(d),
            o.onInputChange('', { action: 'input-blur', prevInputValue: p }),
            o.onMenuClose(),
            o.setState({ focusedValue: null, isFocused: !1 }));
        }),
        (o.onOptionHover = function (d) {
          if (!(o.blockOptionHover || o.state.focusedOption === d)) {
            var p = o.getFocusableOptions(),
              g = p.indexOf(d);
            o.setState({
              focusedOption: d,
              focusedOptionId: g > -1 ? o.getFocusedOptionId(d) : null,
            });
          }
        }),
        (o.shouldHideSelectedOptions = function () {
          return ly(o.props);
        }),
        (o.onValueInputFocus = function (d) {
          (d.preventDefault(), d.stopPropagation(), o.focus());
        }),
        (o.onKeyDown = function (d) {
          var p = o.props,
            g = p.isMulti,
            b = p.backspaceRemovesValue,
            x = p.escapeClearsValue,
            M = p.inputValue,
            w = p.isClearable,
            T = p.isDisabled,
            R = p.menuIsOpen,
            O = p.onKeyDown,
            B = p.tabSelectsValue,
            j = p.openMenuOnFocus,
            J = o.state,
            z = J.focusedOption,
            A = J.focusedValue,
            Z = J.selectValue;
          if (!T && !(typeof O == 'function' && (O(d), d.defaultPrevented))) {
            switch (((o.blockOptionHover = !0), d.key)) {
              case 'ArrowLeft':
                if (!g || M) return;
                o.focusValue('previous');
                break;
              case 'ArrowRight':
                if (!g || M) return;
                o.focusValue('next');
                break;
              case 'Delete':
              case 'Backspace':
                if (M) return;
                if (A) o.removeValue(A);
                else {
                  if (!b) return;
                  g ? o.popValue() : w && o.clearValue();
                }
                break;
              case 'Tab':
                if (
                  o.isComposing ||
                  d.shiftKey ||
                  !R ||
                  !B ||
                  !z ||
                  (j && o.isOptionSelected(z, Z))
                )
                  return;
                o.selectOption(z);
                break;
              case 'Enter':
                if (d.keyCode === 229) break;
                if (R) {
                  if (!z || o.isComposing) return;
                  o.selectOption(z);
                  break;
                }
                return;
              case 'Escape':
                R
                  ? (o.setState({ inputIsHiddenAfterUpdate: !1 }),
                    o.onInputChange('', {
                      action: 'menu-close',
                      prevInputValue: M,
                    }),
                    o.onMenuClose())
                  : w && x && o.clearValue();
                break;
              case ' ':
                if (M) return;
                if (!R) {
                  o.openMenu('first');
                  break;
                }
                if (!z) return;
                o.selectOption(z);
                break;
              case 'ArrowUp':
                R ? o.focusOption('up') : o.openMenu('last');
                break;
              case 'ArrowDown':
                R ? o.focusOption('down') : o.openMenu('first');
                break;
              case 'PageUp':
                if (!R) return;
                o.focusOption('pageup');
                break;
              case 'PageDown':
                if (!R) return;
                o.focusOption('pagedown');
                break;
              case 'Home':
                if (!R) return;
                o.focusOption('first');
                break;
              case 'End':
                if (!R) return;
                o.focusOption('last');
                break;
              default:
                return;
            }
            d.preventDefault();
          }
        }),
        (o.state.instancePrefix =
          'react-select-' + (o.props.instanceId || ++_R)),
        (o.state.selectValue = Wv(i.value)),
        i.menuIsOpen && o.state.selectValue.length)
      ) {
        var f = o.getFocusableOptionsWithIds(),
          h = o.buildFocusableOptions(),
          m = h.indexOf(o.state.selectValue[0]);
        ((o.state.focusableOptionsWithIds = f),
          (o.state.focusedOption = h[m]),
          (o.state.focusedOptionId = gf(f, h[m])));
      }
      return o;
    }
    return (
      iE(
        u,
        [
          {
            key: 'componentDidMount',
            value: function () {
              (this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener('scroll', this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  eg(this.menuListRef, this.focusedOptionRef),
                vR() && this.setState({ isAppleDevice: !0 }));
            },
          },
          {
            key: 'componentDidUpdate',
            value: function (o) {
              var f = this.props,
                h = f.isDisabled,
                m = f.menuIsOpen,
                d = this.state.isFocused;
              (((d && !h && o.isDisabled) || (d && m && !o.menuIsOpen)) &&
                this.focusInput(),
                d && h && !o.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !d &&
                    !h &&
                    o.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (eg(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1)));
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              (this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener('scroll', this.onScroll, !0));
            },
          },
          {
            key: 'onMenuOpen',
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: 'onMenuClose',
            value: function () {
              (this.onInputChange('', {
                action: 'menu-close',
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose());
            },
          },
          {
            key: 'onInputChange',
            value: function (o, f) {
              this.props.onInputChange(o, f);
            },
          },
          {
            key: 'focusInput',
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: 'blurInput',
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: 'openMenu',
            value: function (o) {
              var f = this,
                h = this.state,
                m = h.selectValue,
                d = h.isFocused,
                p = this.buildFocusableOptions(),
                g = o === 'first' ? 0 : p.length - 1;
              if (!this.props.isMulti) {
                var b = p.indexOf(m[0]);
                b > -1 && (g = b);
              }
              ((this.scrollToFocusedOptionOnUpdate = !(d && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: p[g],
                    focusedOptionId: this.getFocusedOptionId(p[g]),
                  },
                  function () {
                    return f.onMenuOpen();
                  }
                ));
            },
          },
          {
            key: 'focusValue',
            value: function (o) {
              var f = this.state,
                h = f.selectValue,
                m = f.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var d = h.indexOf(m);
                m || (d = -1);
                var p = h.length - 1,
                  g = -1;
                if (h.length) {
                  switch (o) {
                    case 'previous':
                      d === 0 ? (g = 0) : d === -1 ? (g = p) : (g = d - 1);
                      break;
                    case 'next':
                      d > -1 && d < p && (g = d + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: g !== -1,
                    focusedValue: h[g],
                  });
                }
              }
            },
          },
          {
            key: 'focusOption',
            value: function () {
              var o =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : 'first',
                f = this.props.pageSize,
                h = this.state.focusedOption,
                m = this.getFocusableOptions();
              if (m.length) {
                var d = 0,
                  p = m.indexOf(h);
                (h || (p = -1),
                  o === 'up'
                    ? (d = p > 0 ? p - 1 : m.length - 1)
                    : o === 'down'
                      ? (d = (p + 1) % m.length)
                      : o === 'pageup'
                        ? ((d = p - f), d < 0 && (d = 0))
                        : o === 'pagedown'
                          ? ((d = p + f),
                            d > m.length - 1 && (d = m.length - 1))
                          : o === 'last' && (d = m.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: m[d],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(m[d]),
                  }));
              }
            },
          },
          {
            key: 'getTheme',
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == 'function'
                  ? this.props.theme(vf)
                  : xe(xe({}, vf), this.props.theme)
                : vf;
            },
          },
          {
            key: 'getCommonProps',
            value: function () {
              var o = this.clearValue,
                f = this.cx,
                h = this.getStyles,
                m = this.getClassNames,
                d = this.getValue,
                p = this.selectOption,
                g = this.setValue,
                b = this.props,
                x = b.isMulti,
                M = b.isRtl,
                w = b.options,
                T = this.hasValue();
              return {
                clearValue: o,
                cx: f,
                getStyles: h,
                getClassNames: m,
                getValue: d,
                hasValue: T,
                isMulti: x,
                isRtl: M,
                options: w,
                selectOption: p,
                selectProps: b,
                setValue: g,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: 'hasValue',
            value: function () {
              var o = this.state.selectValue;
              return o.length > 0;
            },
          },
          {
            key: 'hasOptions',
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: 'isClearable',
            value: function () {
              var o = this.props,
                f = o.isClearable,
                h = o.isMulti;
              return f === void 0 ? h : f;
            },
          },
          {
            key: 'isOptionDisabled',
            value: function (o, f) {
              return ny(this.props, o, f);
            },
          },
          {
            key: 'isOptionSelected',
            value: function (o, f) {
              return ay(this.props, o, f);
            },
          },
          {
            key: 'filterOption',
            value: function (o, f) {
              return ry(this.props, o, f);
            },
          },
          {
            key: 'formatOptionLabel',
            value: function (o, f) {
              if (typeof this.props.formatOptionLabel == 'function') {
                var h = this.props.inputValue,
                  m = this.state.selectValue;
                return this.props.formatOptionLabel(o, {
                  context: f,
                  inputValue: h,
                  selectValue: m,
                });
              } else return this.getOptionLabel(o);
            },
          },
          {
            key: 'formatGroupLabel',
            value: function (o) {
              return this.props.formatGroupLabel(o);
            },
          },
          {
            key: 'startListeningComposition',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  'compositionstart',
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  'compositionend',
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: 'stopListeningComposition',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  'compositionstart',
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  'compositionend',
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: 'startListeningToTouch',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('touchstart', this.onTouchStart, !1),
                document.addEventListener('touchmove', this.onTouchMove, !1),
                document.addEventListener('touchend', this.onTouchEnd, !1));
            },
          },
          {
            key: 'stopListeningToTouch',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('touchstart', this.onTouchStart),
                document.removeEventListener('touchmove', this.onTouchMove),
                document.removeEventListener('touchend', this.onTouchEnd));
            },
          },
          {
            key: 'renderInput',
            value: function () {
              var o = this.props,
                f = o.isDisabled,
                h = o.isSearchable,
                m = o.inputId,
                d = o.inputValue,
                p = o.tabIndex,
                g = o.form,
                b = o.menuIsOpen,
                x = o.required,
                M = this.getComponents(),
                w = M.Input,
                T = this.state,
                R = T.inputIsHidden,
                O = T.ariaSelection,
                B = this.commonProps,
                j = m || this.getElementId('input'),
                J = xe(
                  xe(
                    xe(
                      {
                        'aria-autocomplete': 'list',
                        'aria-expanded': b,
                        'aria-haspopup': !0,
                        'aria-errormessage': this.props['aria-errormessage'],
                        'aria-invalid': this.props['aria-invalid'],
                        'aria-label': this.props['aria-label'],
                        'aria-labelledby': this.props['aria-labelledby'],
                        'aria-required': x,
                        role: 'combobox',
                        'aria-activedescendant': this.state.isAppleDevice
                          ? void 0
                          : this.state.focusedOptionId || '',
                      },
                      b && { 'aria-controls': this.getElementId('listbox') }
                    ),
                    !h && { 'aria-readonly': !0 }
                  ),
                  this.hasValue()
                    ? O?.action === 'initial-input-focus' && {
                        'aria-describedby': this.getElementId('live-region'),
                      }
                    : { 'aria-describedby': this.getElementId('placeholder') }
                );
              return h
                ? S.createElement(
                    w,
                    Te(
                      {},
                      B,
                      {
                        autoCapitalize: 'none',
                        autoComplete: 'off',
                        autoCorrect: 'off',
                        id: j,
                        innerRef: this.getInputRef,
                        isDisabled: f,
                        isHidden: R,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: 'false',
                        tabIndex: p,
                        form: g,
                        type: 'text',
                        value: d,
                      },
                      J
                    )
                  )
                : S.createElement(
                    aR,
                    Te(
                      {
                        id: j,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Ou,
                        onFocus: this.onInputFocus,
                        disabled: f,
                        tabIndex: p,
                        inputMode: 'none',
                        form: g,
                        value: '',
                      },
                      J
                    )
                  );
            },
          },
          {
            key: 'renderPlaceholderOrValue',
            value: function () {
              var o = this,
                f = this.getComponents(),
                h = f.MultiValue,
                m = f.MultiValueContainer,
                d = f.MultiValueLabel,
                p = f.MultiValueRemove,
                g = f.SingleValue,
                b = f.Placeholder,
                x = this.commonProps,
                M = this.props,
                w = M.controlShouldRenderValue,
                T = M.isDisabled,
                R = M.isMulti,
                O = M.inputValue,
                B = M.placeholder,
                j = this.state,
                J = j.selectValue,
                z = j.focusedValue,
                A = j.isFocused;
              if (!this.hasValue() || !w)
                return O
                  ? null
                  : S.createElement(
                      b,
                      Te({}, x, {
                        key: 'placeholder',
                        isDisabled: T,
                        isFocused: A,
                        innerProps: { id: this.getElementId('placeholder') },
                      }),
                      B
                    );
              if (R)
                return J.map(function (te, re) {
                  var we = te === z,
                    De = ''
                      .concat(o.getOptionLabel(te), '-')
                      .concat(o.getOptionValue(te));
                  return S.createElement(
                    h,
                    Te({}, x, {
                      components: { Container: m, Label: d, Remove: p },
                      isFocused: we,
                      isDisabled: T,
                      key: De,
                      index: re,
                      removeProps: {
                        onClick: function () {
                          return o.removeValue(te);
                        },
                        onTouchEnd: function () {
                          return o.removeValue(te);
                        },
                        onMouseDown: function (me) {
                          me.preventDefault();
                        },
                      },
                      data: te,
                    }),
                    o.formatOptionLabel(te, 'value')
                  );
                });
              if (O) return null;
              var Z = J[0];
              return S.createElement(
                g,
                Te({}, x, { data: Z, isDisabled: T }),
                this.formatOptionLabel(Z, 'value')
              );
            },
          },
          {
            key: 'renderClearIndicator',
            value: function () {
              var o = this.getComponents(),
                f = o.ClearIndicator,
                h = this.commonProps,
                m = this.props,
                d = m.isDisabled,
                p = m.isLoading,
                g = this.state.isFocused;
              if (!this.isClearable() || !f || d || !this.hasValue() || p)
                return null;
              var b = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                'aria-hidden': 'true',
              };
              return S.createElement(
                f,
                Te({}, h, { innerProps: b, isFocused: g })
              );
            },
          },
          {
            key: 'renderLoadingIndicator',
            value: function () {
              var o = this.getComponents(),
                f = o.LoadingIndicator,
                h = this.commonProps,
                m = this.props,
                d = m.isDisabled,
                p = m.isLoading,
                g = this.state.isFocused;
              if (!f || !p) return null;
              var b = { 'aria-hidden': 'true' };
              return S.createElement(
                f,
                Te({}, h, { innerProps: b, isDisabled: d, isFocused: g })
              );
            },
          },
          {
            key: 'renderIndicatorSeparator',
            value: function () {
              var o = this.getComponents(),
                f = o.DropdownIndicator,
                h = o.IndicatorSeparator;
              if (!f || !h) return null;
              var m = this.commonProps,
                d = this.props.isDisabled,
                p = this.state.isFocused;
              return S.createElement(
                h,
                Te({}, m, { isDisabled: d, isFocused: p })
              );
            },
          },
          {
            key: 'renderDropdownIndicator',
            value: function () {
              var o = this.getComponents(),
                f = o.DropdownIndicator;
              if (!f) return null;
              var h = this.commonProps,
                m = this.props.isDisabled,
                d = this.state.isFocused,
                p = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  'aria-hidden': 'true',
                };
              return S.createElement(
                f,
                Te({}, h, { innerProps: p, isDisabled: m, isFocused: d })
              );
            },
          },
          {
            key: 'renderMenu',
            value: function () {
              var o = this,
                f = this.getComponents(),
                h = f.Group,
                m = f.GroupHeading,
                d = f.Menu,
                p = f.MenuList,
                g = f.MenuPortal,
                b = f.LoadingMessage,
                x = f.NoOptionsMessage,
                M = f.Option,
                w = this.commonProps,
                T = this.state.focusedOption,
                R = this.props,
                O = R.captureMenuScroll,
                B = R.inputValue,
                j = R.isLoading,
                J = R.loadingMessage,
                z = R.minMenuHeight,
                A = R.maxMenuHeight,
                Z = R.menuIsOpen,
                te = R.menuPlacement,
                re = R.menuPosition,
                we = R.menuPortalTarget,
                De = R.menuShouldBlockScroll,
                Ee = R.menuShouldScrollIntoView,
                me = R.noOptionsMessage,
                le = R.onMenuScrollToTop,
                oe = R.onMenuScrollToBottom;
              if (!Z) return null;
              var N = function (W, ae) {
                  var ce = W.type,
                    ie = W.data,
                    ze = W.isDisabled,
                    Ae = W.isSelected,
                    Je = W.label,
                    at = W.value,
                    vt = T === ie,
                    qt = ze
                      ? void 0
                      : function () {
                          return o.onOptionHover(ie);
                        },
                    Jt = ze
                      ? void 0
                      : function () {
                          return o.selectOption(ie);
                        },
                    Ot = ''.concat(o.getElementId('option'), '-').concat(ae),
                    Xn = {
                      id: Ot,
                      onClick: Jt,
                      onMouseMove: qt,
                      onMouseOver: qt,
                      tabIndex: -1,
                      role: 'option',
                      'aria-selected': o.state.isAppleDevice ? void 0 : Ae,
                    };
                  return S.createElement(
                    M,
                    Te({}, w, {
                      innerProps: Xn,
                      data: ie,
                      isDisabled: ze,
                      isSelected: Ae,
                      key: Ot,
                      label: Je,
                      type: ce,
                      value: at,
                      isFocused: vt,
                      innerRef: vt ? o.getFocusedOptionRef : void 0,
                    }),
                    o.formatOptionLabel(W.data, 'menu')
                  );
                },
                I;
              if (this.hasOptions())
                I = this.getCategorizedOptions().map(function ($) {
                  if ($.type === 'group') {
                    var W = $.data,
                      ae = $.options,
                      ce = $.index,
                      ie = ''.concat(o.getElementId('group'), '-').concat(ce),
                      ze = ''.concat(ie, '-heading');
                    return S.createElement(
                      h,
                      Te({}, w, {
                        key: ie,
                        data: W,
                        options: ae,
                        Heading: m,
                        headingProps: { id: ze, data: $.data },
                        label: o.formatGroupLabel($.data),
                      }),
                      $.options.map(function (Ae) {
                        return N(Ae, ''.concat(ce, '-').concat(Ae.index));
                      })
                    );
                  } else if ($.type === 'option')
                    return N($, ''.concat($.index));
                });
              else if (j) {
                var Q = J({ inputValue: B });
                if (Q === null) return null;
                I = S.createElement(b, w, Q);
              } else {
                var ve = me({ inputValue: B });
                if (ve === null) return null;
                I = S.createElement(x, w, ve);
              }
              var E = {
                  minMenuHeight: z,
                  maxMenuHeight: A,
                  menuPlacement: te,
                  menuPosition: re,
                  menuShouldScrollIntoView: Ee,
                },
                Y = S.createElement(kO, Te({}, w, E), function ($) {
                  var W = $.ref,
                    ae = $.placerProps,
                    ce = ae.placement,
                    ie = ae.maxHeight;
                  return S.createElement(
                    d,
                    Te({}, w, E, {
                      innerRef: W,
                      innerProps: {
                        onMouseDown: o.onMenuMouseDown,
                        onMouseMove: o.onMenuMouseMove,
                      },
                      isLoading: j,
                      placement: ce,
                    }),
                    S.createElement(
                      sR,
                      {
                        captureEnabled: O,
                        onTopArrive: le,
                        onBottomArrive: oe,
                        lockEnabled: De,
                      },
                      function (ze) {
                        return S.createElement(
                          p,
                          Te({}, w, {
                            innerRef: function (Je) {
                              (o.getMenuListRef(Je), ze(Je));
                            },
                            innerProps: {
                              role: 'listbox',
                              'aria-multiselectable': w.isMulti,
                              id: o.getElementId('listbox'),
                            },
                            isLoading: j,
                            maxHeight: ie,
                            focusedOption: T,
                          }),
                          I
                        );
                      }
                    )
                  );
                });
              return we || re === 'fixed'
                ? S.createElement(
                    g,
                    Te({}, w, {
                      appendTo: we,
                      controlElement: this.controlRef,
                      menuPlacement: te,
                      menuPosition: re,
                    }),
                    Y
                  )
                : Y;
            },
          },
          {
            key: 'renderFormField',
            value: function () {
              var o = this,
                f = this.props,
                h = f.delimiter,
                m = f.isDisabled,
                d = f.isMulti,
                p = f.name,
                g = f.required,
                b = this.state.selectValue;
              if (g && !this.hasValue() && !m)
                return S.createElement(dR, {
                  name: p,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!p || m))
                if (d)
                  if (h) {
                    var x = b
                      .map(function (T) {
                        return o.getOptionValue(T);
                      })
                      .join(h);
                    return S.createElement('input', {
                      name: p,
                      type: 'hidden',
                      value: x,
                    });
                  } else {
                    var M =
                      b.length > 0
                        ? b.map(function (T, R) {
                            return S.createElement('input', {
                              key: 'i-'.concat(R),
                              name: p,
                              type: 'hidden',
                              value: o.getOptionValue(T),
                            });
                          })
                        : S.createElement('input', {
                            name: p,
                            type: 'hidden',
                            value: '',
                          });
                    return S.createElement('div', null, M);
                  }
                else {
                  var w = b[0] ? this.getOptionValue(b[0]) : '';
                  return S.createElement('input', {
                    name: p,
                    type: 'hidden',
                    value: w,
                  });
                }
            },
          },
          {
            key: 'renderLiveRegion',
            value: function () {
              var o = this.commonProps,
                f = this.state,
                h = f.ariaSelection,
                m = f.focusedOption,
                d = f.focusedValue,
                p = f.isFocused,
                g = f.selectValue,
                b = this.getFocusableOptions();
              return S.createElement(
                IM,
                Te({}, o, {
                  id: this.getElementId('live-region'),
                  ariaSelection: h,
                  focusedOption: m,
                  focusedValue: d,
                  isFocused: p,
                  selectValue: g,
                  focusableOptions: b,
                  isAppleDevice: this.state.isAppleDevice,
                })
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var o = this.getComponents(),
                f = o.Control,
                h = o.IndicatorsContainer,
                m = o.SelectContainer,
                d = o.ValueContainer,
                p = this.props,
                g = p.className,
                b = p.id,
                x = p.isDisabled,
                M = p.menuIsOpen,
                w = this.state.isFocused,
                T = (this.commonProps = this.getCommonProps());
              return S.createElement(
                m,
                Te({}, T, {
                  className: g,
                  innerProps: { id: b, onKeyDown: this.onKeyDown },
                  isDisabled: x,
                  isFocused: w,
                }),
                this.renderLiveRegion(),
                S.createElement(
                  f,
                  Te({}, T, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: x,
                    isFocused: w,
                    menuIsOpen: M,
                  }),
                  S.createElement(
                    d,
                    Te({}, T, { isDisabled: x }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  S.createElement(
                    h,
                    Te({}, T, { isDisabled: x }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (o, f) {
              var h = f.prevProps,
                m = f.clearFocusValueOnUpdate,
                d = f.inputIsHiddenAfterUpdate,
                p = f.ariaSelection,
                g = f.isFocused,
                b = f.prevWasFocused,
                x = f.instancePrefix,
                M = o.options,
                w = o.value,
                T = o.menuIsOpen,
                R = o.inputValue,
                O = o.isMulti,
                B = Wv(w),
                j = {};
              if (
                h &&
                (w !== h.value ||
                  M !== h.options ||
                  T !== h.menuIsOpen ||
                  R !== h.inputValue)
              ) {
                var J = T ? TR(o, B) : [],
                  z = T ? pg(mu(o, B), ''.concat(x, '-option')) : [],
                  A = m ? AR(f, B) : null,
                  Z = DR(f, J),
                  te = gf(z, Z);
                j = {
                  selectValue: B,
                  focusedOption: Z,
                  focusedOptionId: te,
                  focusableOptionsWithIds: z,
                  focusedValue: A,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var re =
                  d != null && o !== h
                    ? { inputIsHidden: d, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                we = p,
                De = g && b;
              return (
                g &&
                  !De &&
                  ((we = {
                    value: iu(O, B, B[0] || null),
                    options: B,
                    action: 'initial-input-focus',
                  }),
                  (De = !b)),
                p?.action === 'initial-input-focus' && (we = null),
                xe(
                  xe(xe({}, j), re),
                  {},
                  { prevProps: o, ariaSelection: we, prevWasFocused: De }
                )
              );
            },
          },
        ]
      ),
      u
    );
  })(S.Component);
iy.defaultProps = CR;
var zR = [
  'defaultInputValue',
  'defaultMenuIsOpen',
  'defaultValue',
  'inputValue',
  'menuIsOpen',
  'onChange',
  'onInputChange',
  'onMenuClose',
  'onMenuOpen',
  'value',
];
function NR(a) {
  var r = a.defaultInputValue,
    u = r === void 0 ? '' : r,
    i = a.defaultMenuIsOpen,
    o = i === void 0 ? !1 : i,
    f = a.defaultValue,
    h = f === void 0 ? null : f,
    m = a.inputValue,
    d = a.menuIsOpen,
    p = a.onChange,
    g = a.onInputChange,
    b = a.onMenuClose,
    x = a.onMenuOpen,
    M = a.value,
    w = Pn(a, zR),
    T = S.useState(m !== void 0 ? m : u),
    R = zt(T, 2),
    O = R[0],
    B = R[1],
    j = S.useState(d !== void 0 ? d : o),
    J = zt(j, 2),
    z = J[0],
    A = J[1],
    Z = S.useState(M !== void 0 ? M : h),
    te = zt(Z, 2),
    re = te[0],
    we = te[1],
    De = S.useCallback(
      function (Q, ve) {
        (typeof p == 'function' && p(Q, ve), we(Q));
      },
      [p]
    ),
    Ee = S.useCallback(
      function (Q, ve) {
        var E;
        (typeof g == 'function' && (E = g(Q, ve)), B(E !== void 0 ? E : Q));
      },
      [g]
    ),
    me = S.useCallback(
      function () {
        (typeof x == 'function' && x(), A(!0));
      },
      [x]
    ),
    le = S.useCallback(
      function () {
        (typeof b == 'function' && b(), A(!1));
      },
      [b]
    ),
    oe = m !== void 0 ? m : O,
    N = d !== void 0 ? d : z,
    I = M !== void 0 ? M : re;
  return xe(
    xe({}, w),
    {},
    {
      inputValue: oe,
      menuIsOpen: N,
      onChange: De,
      onInputChange: Ee,
      onMenuClose: le,
      onMenuOpen: me,
      value: I,
    }
  );
}
var LR = [
  'defaultOptions',
  'cacheOptions',
  'loadOptions',
  'options',
  'isLoading',
  'onInputChange',
  'filterOption',
];
function kR(a) {
  var r = a.defaultOptions,
    u = r === void 0 ? !1 : r,
    i = a.cacheOptions,
    o = i === void 0 ? !1 : i,
    f = a.loadOptions;
  a.options;
  var h = a.isLoading,
    m = h === void 0 ? !1 : h,
    d = a.onInputChange,
    p = a.filterOption,
    g = p === void 0 ? null : p,
    b = Pn(a, LR),
    x = b.inputValue,
    M = S.useRef(void 0),
    w = S.useRef(!1),
    T = S.useState(Array.isArray(u) ? u : void 0),
    R = zt(T, 2),
    O = R[0],
    B = R[1],
    j = S.useState(typeof x < 'u' ? x : ''),
    J = zt(j, 2),
    z = J[0],
    A = J[1],
    Z = S.useState(u === !0),
    te = zt(Z, 2),
    re = te[0],
    we = te[1],
    De = S.useState(void 0),
    Ee = zt(De, 2),
    me = Ee[0],
    le = Ee[1],
    oe = S.useState([]),
    N = zt(oe, 2),
    I = N[0],
    Q = N[1],
    ve = S.useState(!1),
    E = zt(ve, 2),
    Y = E[0],
    $ = E[1],
    W = S.useState({}),
    ae = zt(W, 2),
    ce = ae[0],
    ie = ae[1],
    ze = S.useState(void 0),
    Ae = zt(ze, 2),
    Je = Ae[0],
    at = Ae[1],
    vt = S.useState(void 0),
    qt = zt(vt, 2),
    Jt = qt[0],
    Ot = qt[1];
  (o !== Jt && (ie({}), Ot(o)),
    u !== Je && (B(Array.isArray(u) ? u : void 0), at(u)),
    S.useEffect(function () {
      return (
        (w.current = !0),
        function () {
          w.current = !1;
        }
      );
    }, []));
  var Xn = S.useCallback(
    function ($n, On) {
      if (!f) return On();
      var Ct = f($n, On);
      Ct &&
        typeof Ct.then == 'function' &&
        Ct.then(On, function () {
          return On();
        });
    },
    [f]
  );
  S.useEffect(function () {
    u === !0 &&
      Xn(z, function ($n) {
        w.current && (B($n || []), we(!!M.current));
      });
  }, []);
  var yl = S.useCallback(
      function ($n, On) {
        var Ct = bO($n, On, d);
        if (!Ct) {
          ((M.current = void 0), A(''), le(''), Q([]), we(!1), $(!1));
          return;
        }
        if (o && ce[Ct]) (A(Ct), le(Ct), Q(ce[Ct]), we(!1), $(!1));
        else {
          var da = (M.current = {});
          (A(Ct),
            we(!0),
            $(!me),
            Xn(Ct, function (Wt) {
              w &&
                da === M.current &&
                ((M.current = void 0),
                we(!1),
                le(Ct),
                Q(Wt || []),
                $(!1),
                ie(Wt ? xe(xe({}, ce), {}, cl({}, Ct, Wt)) : ce));
            }));
        }
      },
      [o, Xn, me, ce, d]
    ),
    Yt = Y ? [] : z && me ? I : O || [];
  return xe(
    xe({}, b),
    {},
    { options: Yt, isLoading: re || m, onInputChange: yl, filterOption: g }
  );
}
var UR = S.forwardRef(function (a, r) {
    var u = kR(a),
      i = NR(u);
    return S.createElement(iy, Te({ ref: r }, i));
  }),
  oy = UR;
const jR = {
  control: (a, r) => ({
    ...a,
    borderColor: 'hsl(var(--primary))',
    '&:hover': { borderColor: 'hsl(var(--primary))' },
    outline: 'none',
    boxShadow: r.isFocused ? '0 0 0 1px hsl(var(--primary))' : 'none',
  }),
  option: (a, r) => ({
    ...a,
    backgroundColor: r.isActive
      ? 'hsl(var(--primary) / 0.4)'
      : r.isFocused
        ? 'hsl(var(--primary) / 0.3)'
        : 'white',
    color: 'inherit',
    ':active': { backgroundColor: 'hsl(var(--primary) / 0.4)' },
  }),
  singleValue: (a) => ({ ...a, color: 'inherit' }),
};
function VR({
  value: a,
  onChange: r,
  placeholder: u = 'Search and select category...',
}) {
  const i = hl(ku.categories),
    o = async (f = '') =>
      (await i.search(f)).map((m) => ({ value: m.id, label: m.name }));
  return P.jsx(oy, {
    cacheOptions: !0,
    defaultOptions: !0,
    loadOptions: o,
    value: a,
    onChange: r,
    styles: jR,
    placeholder: u,
  });
}
const HR = {
  control: (a, r) => ({
    ...a,
    borderColor: 'hsl(var(--primary))',
    '&:hover': { borderColor: 'hsl(var(--primary))' },
    outline: 'none',
    boxShadow: r.isFocused ? '0 0 0 1px hsl(var(--primary))' : 'none',
  }),
  option: (a, r) => ({
    ...a,
    backgroundColor: r.isActive
      ? 'hsl(var(--primary) / 0.4)'
      : r.isFocused
        ? 'hsl(var(--primary) / 0.3)'
        : 'white',
    color: 'inherit',
    ':active': { backgroundColor: 'hsl(var(--primary) / 0.4)' },
  }),
  singleValue: (a) => ({ ...a, color: 'inherit' }),
};
function BR({
  value: a = [],
  onChange: r,
  placeholder: u = 'Search and select author...',
}) {
  const i = hl(ku.authors),
    o = async (f = '') =>
      (await i.search(f)).map((m) => ({ value: m.id, label: m.name }));
  return P.jsx(oy, {
    isMulti: !0,
    cacheOptions: !0,
    styles: HR,
    defaultOptions: !0,
    loadOptions: o,
    value: a,
    onChange: r,
    placeholder: u,
  });
}
function vg() {
  const { id: a } = _S(),
    r = !!a,
    u = Au(),
    { loadOne: i, create: o, update: f, loading: h, error: m } = hl(ku.books),
    [d, p] = S.useState({
      title: '',
      description: '',
      category_id: null,
      category: null,
    });
  S.useEffect(() => {
    let b = !0;
    return (
      r &&
        i(a).then((x) => {
          b && x && p(x);
        }),
      () => {
        b = !1;
      }
    );
  }, [r, a]);
  const g = async (b) => {
    if ((b.preventDefault(), !d.category_id)) {
      alert('Please select a category.');
      return;
    }
    const x = {
      title: d.title,
      description: d.description,
      category_id: d.category_id,
      status: d.status,
      authors: d.authors ? d.authors.map((M) => M.id) : [],
    };
    try {
      r ? await f(a, x) : await o(x);
    } catch (M) {
      console.error(M);
    } finally {
      u('/');
    }
  };
  return h && r
    ? P.jsx('p', { children: 'Loading...' })
    : m
      ? P.jsx('p', { style: { color: 'red' }, children: m })
      : r && !d.title
        ? P.jsx('p', { children: 'Loading book data...' })
        : P.jsxs('div', {
            className: 'card ',
            children: [
              P.jsxs('h2', {
                className: 'text-2xl font-bold mb-4',
                children: [r ? 'Edit' : 'Add', ' Book'],
              }),
              P.jsxs('form', {
                className: 'space-y-6',
                onSubmit: g,
                children: [
                  P.jsxs('div', {
                    children: [
                      P.jsx(Af, { htmlFor: 'title', value: 'Book title' }),
                      P.jsx(m0, {
                        id: 'title',
                        type: 'text',
                        value: d.title,
                        onChange: (b) =>
                          p((x) => ({ ...x, title: b.target.value })),
                        required: !0,
                        placeholder: 'Enter book title',
                      }),
                    ],
                  }),
                  P.jsxs('div', {
                    children: [
                      P.jsx(Af, {
                        htmlFor: 'description',
                        value: 'Description',
                      }),
                      P.jsx(w0, {
                        id: 'description',
                        rows: 4,
                        value: d.description,
                        onChange: (b) =>
                          p((x) => ({ ...x, description: b.target.value })),
                        required: !0,
                        placeholder: 'Enter a short description',
                      }),
                    ],
                  }),
                  P.jsx(VR, {
                    value: d.category
                      ? { value: d.category.id, label: d.category.name }
                      : null,
                    onChange: (b) =>
                      p((x) => ({
                        ...x,
                        category_id: b ? b.value : null,
                        category: b ? { id: b.value, name: b.label } : null,
                      })),
                  }),
                  P.jsx(BR, {
                    value:
                      d.authors?.map((b) => ({ value: b.id, label: b.name })) ||
                      [],
                    onChange: (b) =>
                      p((x) => ({
                        ...x,
                        authors: b.map((M) => ({ id: M.value, name: M.label })),
                      })),
                  }),
                  P.jsx('div', {
                    className: 'w-full flex justify-end',
                    children: P.jsxs(If, {
                      type: 'submit',
                      className: 'btn-primary',
                      disabled: h,
                      children: [
                        r ? 'Update' : 'Create',
                        ' ',
                        P.jsx(Aw, { className: 'ml-2' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
}
const qR = IS(
    P.jsx(Ba, {
      path: '/',
      element: P.jsx(Qw, {}),
      children: P.jsxs(Ba, {
        errorElement: P.jsx(xv, {}),
        children: [
          P.jsx(Ba, { index: !0, element: P.jsx(aE, {}) }),
          P.jsx(Ba, { path: '/books', element: P.jsx(O0, {}) }),
          P.jsx(Ba, { path: '/books/new', element: P.jsx(vg, {}) }),
          P.jsx(Ba, { path: '/books/:id/edit', element: P.jsx(vg, {}) }),
          P.jsx(Ba, { path: '*', element: P.jsx(xv, {}) }),
        ],
      }),
    })
  ),
  YR = S.createContext();
function GR({ children: a }) {
  const r = hl('/categories'),
    u = hl('/authors');
  return (
    S.useEffect(() => {
      (r.load(), u.load());
    }, []),
    P.jsx(YR.Provider, {
      value: {
        categories: r.data,
        authors: u.data,
        categoriesLoading: r.loading,
        authorsLoading: u.loading,
        categoriesError: r.error,
        authorsError: u.error,
        createCategory: r.create,
        updateCategory: r.update,
        deleteCategory: r.remove,
        createAuthor: u.create,
        updateAuthor: u.update,
        deleteAuthor: u.remove,
        searchCategory: r.search,
        searchAuthors: u.search,
      },
      children: a,
    })
  );
}
const PR = Sx(qR);
w1.createRoot(document.getElementById('root')).render(
  P.jsx(S.StrictMode, {
    children: P.jsx(E1, {
      children: P.jsx(GR, { children: P.jsx(zx, { router: PR }) }),
    }),
  })
);
