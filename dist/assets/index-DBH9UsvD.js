(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = o(c);
    fetch(c.href, h);
  }
})();
var zu = { exports: {} },
  gl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm;
function Hb() {
  if (Pm) return gl;
  Pm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(r, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: a, type: r, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (gl.Fragment = l), (gl.jsx = o), (gl.jsxs = o), gl;
}
var Jm;
function qb() {
  return Jm || ((Jm = 1), (zu.exports = Hb())), zu.exports;
}
var w = qb(),
  Vu = { exports: {} },
  ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fm;
function Gb() {
  if (Fm) return ot;
  Fm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (b && S[b]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    L = {};
  function Y(S, U, Q) {
    (this.props = S),
      (this.context = U),
      (this.refs = L),
      (this.updater = Q || C);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (S, U) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, U, "setState");
    }),
    (Y.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function Z() {}
  Z.prototype = Y.prototype;
  function $(S, U, Q) {
    (this.props = S),
      (this.context = U),
      (this.refs = L),
      (this.updater = Q || C);
  }
  var X = ($.prototype = new Z());
  (X.constructor = $), B(X, Y.prototype), (X.isPureReactComponent = !0);
  var lt = Array.isArray,
    k = { H: null, A: null, T: null, S: null, V: null },
    nt = Object.prototype.hasOwnProperty;
  function rt(S, U, Q, G, P, dt) {
    return (
      (Q = dt.ref),
      { $$typeof: a, type: S, key: U, ref: Q !== void 0 ? Q : null, props: dt }
    );
  }
  function q(S, U) {
    return rt(S.type, U, void 0, void 0, void 0, S.props);
  }
  function pt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function Ut(S) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (Q) {
        return U[Q];
      })
    );
  }
  var Zt = /\/+/g;
  function Ot(S, U) {
    return typeof S == "object" && S !== null && S.key != null
      ? Ut("" + S.key)
      : U.toString(36);
  }
  function Re() {}
  function ce(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Re, Re)
            : ((S.status = "pending"),
              S.then(
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = U));
                },
                function (U) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = U));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Ct(S, U, Q, G, P) {
    var dt = typeof S;
    (dt === "undefined" || dt === "boolean") && (S = null);
    var st = !1;
    if (S === null) st = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case l:
              st = !0;
              break;
            case v:
              return (st = S._init), Ct(st(S._payload), U, Q, G, P);
          }
      }
    if (st)
      return (
        (P = P(S)),
        (st = G === "" ? "." + Ot(S, 0) : G),
        lt(P)
          ? ((Q = ""),
            st != null && (Q = st.replace(Zt, "$&/") + "/"),
            Ct(P, U, Q, "", function (ge) {
              return ge;
            }))
          : P != null &&
            (pt(P) &&
              (P = q(
                P,
                Q +
                  (P.key == null || (S && S.key === P.key)
                    ? ""
                    : ("" + P.key).replace(Zt, "$&/") + "/") +
                  st
              )),
            U.push(P)),
        1
      );
    st = 0;
    var vt = G === "" ? "." : G + ":";
    if (lt(S))
      for (var Dt = 0; Dt < S.length; Dt++)
        (G = S[Dt]), (dt = vt + Ot(G, Dt)), (st += Ct(G, U, Q, dt, P));
    else if (((Dt = A(S)), typeof Dt == "function"))
      for (S = Dt.call(S), Dt = 0; !(G = S.next()).done; )
        (G = G.value), (dt = vt + Ot(G, Dt++)), (st += Ct(G, U, Q, dt, P));
    else if (dt === "object") {
      if (typeof S.then == "function") return Ct(ce(S), U, Q, G, P);
      throw (
        ((U = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return st;
  }
  function z(S, U, Q) {
    if (S == null) return S;
    var G = [],
      P = 0;
    return (
      Ct(S, G, "", "", function (dt) {
        return U.call(Q, dt, P++);
      }),
      G
    );
  }
  function H(S) {
    if (S._status === -1) {
      var U = S._result;
      (U = U()),
        U.then(
          function (Q) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = Q));
          },
          function (Q) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = Q));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = U));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var _ =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function yt() {}
  return (
    (ot.Children = {
      map: z,
      forEach: function (S, U, Q) {
        z(
          S,
          function () {
            U.apply(this, arguments);
          },
          Q
        );
      },
      count: function (S) {
        var U = 0;
        return (
          z(S, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (S) {
        return (
          z(S, function (U) {
            return U;
          }) || []
        );
      },
      only: function (S) {
        if (!pt(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (ot.Component = Y),
    (ot.Fragment = o),
    (ot.Profiler = c),
    (ot.PureComponent = $),
    (ot.StrictMode = r),
    (ot.Suspense = y),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return k.H.useMemoCache(S);
      },
    }),
    (ot.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ot.cloneElement = function (S, U, Q) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var G = B({}, S.props),
        P = S.key,
        dt = void 0;
      if (U != null)
        for (st in (U.ref !== void 0 && (dt = void 0),
        U.key !== void 0 && (P = "" + U.key),
        U))
          !nt.call(U, st) ||
            st === "key" ||
            st === "__self" ||
            st === "__source" ||
            (st === "ref" && U.ref === void 0) ||
            (G[st] = U[st]);
      var st = arguments.length - 2;
      if (st === 1) G.children = Q;
      else if (1 < st) {
        for (var vt = Array(st), Dt = 0; Dt < st; Dt++)
          vt[Dt] = arguments[Dt + 2];
        G.children = vt;
      }
      return rt(S.type, P, void 0, void 0, dt, G);
    }),
    (ot.createContext = function (S) {
      return (
        (S = {
          $$typeof: f,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: h, _context: S }),
        S
      );
    }),
    (ot.createElement = function (S, U, Q) {
      var G,
        P = {},
        dt = null;
      if (U != null)
        for (G in (U.key !== void 0 && (dt = "" + U.key), U))
          nt.call(U, G) &&
            G !== "key" &&
            G !== "__self" &&
            G !== "__source" &&
            (P[G] = U[G]);
      var st = arguments.length - 2;
      if (st === 1) P.children = Q;
      else if (1 < st) {
        for (var vt = Array(st), Dt = 0; Dt < st; Dt++)
          vt[Dt] = arguments[Dt + 2];
        P.children = vt;
      }
      if (S && S.defaultProps)
        for (G in ((st = S.defaultProps), st))
          P[G] === void 0 && (P[G] = st[G]);
      return rt(S, dt, void 0, void 0, null, P);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (S) {
      return { $$typeof: m, render: S };
    }),
    (ot.isValidElement = pt),
    (ot.lazy = function (S) {
      return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: H };
    }),
    (ot.memo = function (S, U) {
      return { $$typeof: p, type: S, compare: U === void 0 ? null : U };
    }),
    (ot.startTransition = function (S) {
      var U = k.T,
        Q = {};
      k.T = Q;
      try {
        var G = S(),
          P = k.S;
        P !== null && P(Q, G),
          typeof G == "object" &&
            G !== null &&
            typeof G.then == "function" &&
            G.then(yt, _);
      } catch (dt) {
        _(dt);
      } finally {
        k.T = U;
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (ot.use = function (S) {
      return k.H.use(S);
    }),
    (ot.useActionState = function (S, U, Q) {
      return k.H.useActionState(S, U, Q);
    }),
    (ot.useCallback = function (S, U) {
      return k.H.useCallback(S, U);
    }),
    (ot.useContext = function (S) {
      return k.H.useContext(S);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (S, U) {
      return k.H.useDeferredValue(S, U);
    }),
    (ot.useEffect = function (S, U, Q) {
      var G = k.H;
      if (typeof Q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return G.useEffect(S, U);
    }),
    (ot.useId = function () {
      return k.H.useId();
    }),
    (ot.useImperativeHandle = function (S, U, Q) {
      return k.H.useImperativeHandle(S, U, Q);
    }),
    (ot.useInsertionEffect = function (S, U) {
      return k.H.useInsertionEffect(S, U);
    }),
    (ot.useLayoutEffect = function (S, U) {
      return k.H.useLayoutEffect(S, U);
    }),
    (ot.useMemo = function (S, U) {
      return k.H.useMemo(S, U);
    }),
    (ot.useOptimistic = function (S, U) {
      return k.H.useOptimistic(S, U);
    }),
    (ot.useReducer = function (S, U, Q) {
      return k.H.useReducer(S, U, Q);
    }),
    (ot.useRef = function (S) {
      return k.H.useRef(S);
    }),
    (ot.useState = function (S) {
      return k.H.useState(S);
    }),
    (ot.useSyncExternalStore = function (S, U, Q) {
      return k.H.useSyncExternalStore(S, U, Q);
    }),
    (ot.useTransition = function () {
      return k.H.useTransition();
    }),
    (ot.version = "19.1.0"),
    ot
  );
}
var Wm;
function Sc() {
  return Wm || ((Wm = 1), (Vu.exports = Gb())), Vu.exports;
}
var K = Sc(),
  Nu = { exports: {} },
  vl = {},
  ju = { exports: {} },
  _u = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function Yb() {
  return (
    $m ||
      (($m = 1),
      (function (a) {
        function l(z, H) {
          var _ = z.length;
          z.push(H);
          t: for (; 0 < _; ) {
            var yt = (_ - 1) >>> 1,
              S = z[yt];
            if (0 < c(S, H)) (z[yt] = H), (z[_] = S), (_ = yt);
            else break t;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function r(z) {
          if (z.length === 0) return null;
          var H = z[0],
            _ = z.pop();
          if (_ !== H) {
            z[0] = _;
            t: for (var yt = 0, S = z.length, U = S >>> 1; yt < U; ) {
              var Q = 2 * (yt + 1) - 1,
                G = z[Q],
                P = Q + 1,
                dt = z[P];
              if (0 > c(G, _))
                P < S && 0 > c(dt, G)
                  ? ((z[yt] = dt), (z[P] = _), (yt = P))
                  : ((z[yt] = G), (z[Q] = _), (yt = Q));
              else if (P < S && 0 > c(dt, _))
                (z[yt] = dt), (z[P] = _), (yt = P);
              else break t;
            }
          }
          return H;
        }
        function c(z, H) {
          var _ = z.sortIndex - H.sortIndex;
          return _ !== 0 ? _ : z.id - H.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          a.unstable_now = function () {
            return f.now() - m;
          };
        }
        var y = [],
          p = [],
          v = 1,
          b = null,
          A = 3,
          C = !1,
          B = !1,
          L = !1,
          Y = !1,
          Z = typeof setTimeout == "function" ? setTimeout : null,
          $ = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function lt(z) {
          for (var H = o(p); H !== null; ) {
            if (H.callback === null) r(p);
            else if (H.startTime <= z)
              r(p), (H.sortIndex = H.expirationTime), l(y, H);
            else break;
            H = o(p);
          }
        }
        function k(z) {
          if (((L = !1), lt(z), !B))
            if (o(y) !== null) (B = !0), nt || ((nt = !0), Ot());
            else {
              var H = o(p);
              H !== null && Ct(k, H.startTime - z);
            }
        }
        var nt = !1,
          rt = -1,
          q = 5,
          pt = -1;
        function Ut() {
          return Y ? !0 : !(a.unstable_now() - pt < q);
        }
        function Zt() {
          if (((Y = !1), nt)) {
            var z = a.unstable_now();
            pt = z;
            var H = !0;
            try {
              t: {
                (B = !1), L && ((L = !1), $(rt), (rt = -1)), (C = !0);
                var _ = A;
                try {
                  e: {
                    for (
                      lt(z), b = o(y);
                      b !== null && !(b.expirationTime > z && Ut());

                    ) {
                      var yt = b.callback;
                      if (typeof yt == "function") {
                        (b.callback = null), (A = b.priorityLevel);
                        var S = yt(b.expirationTime <= z);
                        if (((z = a.unstable_now()), typeof S == "function")) {
                          (b.callback = S), lt(z), (H = !0);
                          break e;
                        }
                        b === o(y) && r(y), lt(z);
                      } else r(y);
                      b = o(y);
                    }
                    if (b !== null) H = !0;
                    else {
                      var U = o(p);
                      U !== null && Ct(k, U.startTime - z), (H = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (A = _), (C = !1);
                }
                H = void 0;
              }
            } finally {
              H ? Ot() : (nt = !1);
            }
          }
        }
        var Ot;
        if (typeof X == "function")
          Ot = function () {
            X(Zt);
          };
        else if (typeof MessageChannel < "u") {
          var Re = new MessageChannel(),
            ce = Re.port2;
          (Re.port1.onmessage = Zt),
            (Ot = function () {
              ce.postMessage(null);
            });
        } else
          Ot = function () {
            Z(Zt, 0);
          };
        function Ct(z, H) {
          rt = Z(function () {
            z(a.unstable_now());
          }, H);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (a.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (q = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_next = function (z) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = A;
            }
            var _ = A;
            A = H;
            try {
              return z();
            } finally {
              A = _;
            }
          }),
          (a.unstable_requestPaint = function () {
            Y = !0;
          }),
          (a.unstable_runWithPriority = function (z, H) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var _ = A;
            A = z;
            try {
              return H();
            } finally {
              A = _;
            }
          }),
          (a.unstable_scheduleCallback = function (z, H, _) {
            var yt = a.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? yt + _ : yt))
                : (_ = yt),
              z)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = _ + S),
              (z = {
                id: v++,
                callback: H,
                priorityLevel: z,
                startTime: _,
                expirationTime: S,
                sortIndex: -1,
              }),
              _ > yt
                ? ((z.sortIndex = _),
                  l(p, z),
                  o(y) === null &&
                    z === o(p) &&
                    (L ? ($(rt), (rt = -1)) : (L = !0), Ct(k, _ - yt)))
                : ((z.sortIndex = S),
                  l(y, z),
                  B || C || ((B = !0), nt || ((nt = !0), Ot()))),
              z
            );
          }),
          (a.unstable_shouldYield = Ut),
          (a.unstable_wrapCallback = function (z) {
            var H = A;
            return function () {
              var _ = A;
              A = H;
              try {
                return z.apply(this, arguments);
              } finally {
                A = _;
              }
            };
          });
      })(_u)),
    _u
  );
}
var Im;
function kb() {
  return Im || ((Im = 1), (ju.exports = Yb())), ju.exports;
}
var Uu = { exports: {} },
  le = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tp;
function Xb() {
  if (tp) return le;
  tp = 1;
  var a = Sc();
  function l(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(y, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: p,
      implementation: v,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (le.createPortal = function (y, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return h(y, p, null, v);
    }),
    (le.flushSync = function (y) {
      var p = f.T,
        v = r.p;
      try {
        if (((f.T = null), (r.p = 2), y)) return y();
      } finally {
        (f.T = p), (r.p = v), r.d.f();
      }
    }),
    (le.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        r.d.C(y, p));
    }),
    (le.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (le.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin),
          A = typeof p.integrity == "string" ? p.integrity : void 0,
          C = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? r.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: C,
            })
          : v === "script" &&
            r.d.X(y, {
              crossOrigin: b,
              integrity: A,
              fetchPriority: C,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (le.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            r.d.M(y, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && r.d.M(y);
    }),
    (le.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = m(v, p.crossOrigin);
        r.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (le.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          r.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (le.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (le.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (le.useFormState = function (y, p, v) {
      return f.H.useFormState(y, p, v);
    }),
    (le.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (le.version = "19.1.0"),
    le
  );
}
var ep;
function Zb() {
  if (ep) return Uu.exports;
  ep = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Uu.exports = Xb()), Uu.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function Qb() {
  if (np) return vl;
  np = 1;
  var a = kb(),
    l = Sc(),
    o = Zb();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (h(t) !== t) throw Error(r(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return m(s), t;
          if (u === i) return m(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) (n = s), (i = u);
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            (d = !0), (n = s), (i = u);
            break;
          }
          if (g === i) {
            (d = !0), (i = s), (n = u);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = u.child; g; ) {
            if (g === n) {
              (d = !0), (n = u), (i = s);
              break;
            }
            if (g === i) {
              (d = !0), (i = u), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    $ = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    lt = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    rt = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    pt = Symbol.for("react.activity"),
    Ut = Symbol.for("react.memo_cache_sentinel"),
    Zt = Symbol.iterator;
  function Ot(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Zt && t[Zt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Re = Symbol.for("react.client.reference");
  function ce(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Re ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case B:
        return "Fragment";
      case Y:
        return "Profiler";
      case L:
        return "StrictMode";
      case k:
        return "Suspense";
      case nt:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case X:
          return (t.displayName || "Context") + ".Provider";
        case $:
          return (t._context.displayName || "Context") + ".Consumer";
        case lt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case rt:
          return (
            (e = t.displayName || null), e !== null ? e : ce(t.type) || "Memo"
          );
        case q:
          (e = t._payload), (t = t._init);
          try {
            return ce(t(e));
          } catch {}
      }
    return null;
  }
  var Ct = Array.isArray,
    z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = { pending: !1, data: null, method: null, action: null },
    yt = [],
    S = -1;
  function U(t) {
    return { current: t };
  }
  function Q(t) {
    0 > S || ((t.current = yt[S]), (yt[S] = null), S--);
  }
  function G(t, e) {
    S++, (yt[S] = t.current), (t.current = e);
  }
  var P = U(null),
    dt = U(null),
    st = U(null),
    vt = U(null);
  function Dt(t, e) {
    switch ((G(st, e), G(dt, t), G(P, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Tm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Tm(e)), (t = Am(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Q(P), G(P, t);
  }
  function ge() {
    Q(P), Q(dt), Q(st);
  }
  function vn(t) {
    t.memoizedState !== null && G(vt, t);
    var e = P.current,
      n = Am(e, t.type);
    e !== n && (G(dt, t), G(P, n));
  }
  function bn(t) {
    dt.current === t && (Q(P), Q(dt)),
      vt.current === t && (Q(vt), (dl._currentValue = _));
  }
  var xn = Object.prototype.hasOwnProperty,
    vo = a.unstable_scheduleCallback,
    bo = a.unstable_cancelCallback,
    g0 = a.unstable_shouldYield,
    v0 = a.unstable_requestPaint,
    Xe = a.unstable_now,
    b0 = a.unstable_getCurrentPriorityLevel,
    ef = a.unstable_ImmediatePriority,
    nf = a.unstable_UserBlockingPriority,
    ql = a.unstable_NormalPriority,
    x0 = a.unstable_LowPriority,
    af = a.unstable_IdlePriority,
    S0 = a.log,
    T0 = a.unstable_setDisableYieldValue,
    xi = null,
    ve = null;
  function Sn(t) {
    if (
      (typeof S0 == "function" && T0(t),
      ve && typeof ve.setStrictMode == "function")
    )
      try {
        ve.setStrictMode(xi, t);
      } catch {}
  }
  var be = Math.clz32 ? Math.clz32 : M0,
    A0 = Math.log,
    E0 = Math.LN2;
  function M0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((A0(t) / E0) | 0)) | 0;
  }
  var Gl = 256,
    Yl = 4194304;
  function Wn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function kl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var g = i & 134217727;
    return (
      g !== 0
        ? ((i = g & ~u),
          i !== 0
            ? (s = Wn(i))
            : ((d &= g),
              d !== 0
                ? (s = Wn(d))
                : n || ((n = g & ~t), n !== 0 && (s = Wn(n)))))
        : ((g = i & ~u),
          g !== 0
            ? (s = Wn(g))
            : d !== 0
            ? (s = Wn(d))
            : n || ((n = i & ~t), n !== 0 && (s = Wn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & u) === 0 &&
          ((u = s & -s),
          (n = e & -e),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? e
        : s
    );
  }
  function Si(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function D0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function lf() {
    var t = Gl;
    return (Gl <<= 1), (Gl & 4194048) === 0 && (Gl = 256), t;
  }
  function sf() {
    var t = Yl;
    return (Yl <<= 1), (Yl & 62914560) === 0 && (Yl = 4194304), t;
  }
  function xo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ti(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function R0(t, e, n, i, s, u) {
    var d = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      x = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var V = 31 - be(n),
        j = 1 << V;
      (g[V] = 0), (x[V] = -1);
      var R = D[V];
      if (R !== null)
        for (D[V] = null, V = 0; V < R.length; V++) {
          var O = R[V];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~j;
    }
    i !== 0 && of(t, i, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e));
  }
  function of(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - be(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194090));
  }
  function rf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - be(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function So(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function To(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function uf() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ym(t.type));
  }
  function w0(t, e) {
    var n = H.p;
    try {
      return (H.p = t), e();
    } finally {
      H.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2),
    ae = "__reactFiber$" + Tn,
    fe = "__reactProps$" + Tn,
    Ta = "__reactContainer$" + Tn,
    Ao = "__reactEvents$" + Tn,
    O0 = "__reactListeners$" + Tn,
    C0 = "__reactHandles$" + Tn,
    cf = "__reactResources$" + Tn,
    Ai = "__reactMarker$" + Tn;
  function Eo(t) {
    delete t[ae], delete t[fe], delete t[Ao], delete t[O0], delete t[C0];
  }
  function Aa(t) {
    var e = t[ae];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ta] || n[ae])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Rm(t); t !== null; ) {
            if ((n = t[ae])) return n;
            t = Rm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ea(t) {
    if ((t = t[ae] || t[Ta])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ei(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Ma(t) {
    var e = t[cf];
    return (
      e ||
        (e = t[cf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Jt(t) {
    t[Ai] = !0;
  }
  var ff = new Set(),
    df = {};
  function $n(t, e) {
    Da(t, e), Da(t + "Capture", e);
  }
  function Da(t, e) {
    for (df[t] = e, t = 0; t < e.length; t++) ff.add(e[t]);
  }
  var z0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    hf = {},
    mf = {};
  function V0(t) {
    return xn.call(mf, t)
      ? !0
      : xn.call(hf, t)
      ? !1
      : z0.test(t)
      ? (mf[t] = !0)
      : ((hf[t] = !0), !1);
  }
  function Xl(t, e, n) {
    if (V0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Zl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Ie(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  var Mo, pf;
  function Ra(t) {
    if (Mo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Mo = (e && e[1]) || ""),
          (pf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Mo +
      t +
      pf
    );
  }
  var Do = !1;
  function Ro(t, e) {
    if (!t || Do) return "";
    Do = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (O) {
                  var R = O;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (O) {
                  R = O;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                R = O;
              }
              (j = t()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (O) {
            if (O && R && typeof O.stack == "string") return [O.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        d = u[0],
        g = u[1];
      if (d && g) {
        var x = d.split(`
`),
          D = g.split(`
`);
        for (
          s = i = 0;
          i < x.length && !x[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === x.length || s === D.length)
          for (
            i = x.length - 1, s = D.length - 1;
            1 <= i && 0 <= s && x[i] !== D[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (x[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || x[i] !== D[s])) {
                  var V =
                    `
` + x[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (Do = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ra(n) : "";
  }
  function N0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ra(t.type);
      case 16:
        return Ra("Lazy");
      case 13:
        return Ra("Suspense");
      case 19:
        return Ra("SuspenseList");
      case 0:
      case 15:
        return Ro(t.type, !1);
      case 11:
        return Ro(t.type.render, !1);
      case 1:
        return Ro(t.type, !0);
      case 31:
        return Ra("Activity");
      default:
        return "";
    }
  }
  function yf(t) {
    try {
      var e = "";
      do (e += N0(t)), (t = t.return);
      while (t);
      return e;
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
  function we(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function gf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function j0(t) {
    var e = gf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        u = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            (i = "" + d), u.call(this, d);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (d) {
            i = "" + d;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Ql(t) {
    t._valueTracker || (t._valueTracker = j0(t));
  }
  function vf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = gf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Kl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _0 = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(_0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function wo(t, e, n, i, s, u, d, g) {
    (t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + we(e))
          : t.value !== "" + we(e) && (t.value = "" + we(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Oo(t, d, we(e))
        : n != null
        ? Oo(t, d, we(n))
        : i != null && t.removeAttribute("value"),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + we(g))
        : t.removeAttribute("name");
  }
  function bf(t, e, n, i, s, u, d, g) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (n = n != null ? "" + we(n) : ""),
        (e = e != null ? "" + we(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = g ? t.checked : !!i),
      (t.defaultChecked = !!i),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d);
  }
  function Oo(t, e, n) {
    (e === "number" && Kl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function wa(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + we(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function xf(t, e, n) {
    if (
      e != null &&
      ((e = "" + we(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + we(n) : "";
  }
  function Sf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (Ct(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = we(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function Oa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var U0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || U0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Af(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Tf(t, s, i);
    } else for (var u in e) e.hasOwnProperty(u) && Tf(t, u, e[u]);
  }
  function Co(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var B0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    L0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(t) {
    return L0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var zo = null;
  function Vo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ca = null,
    za = null;
  function Ef(t) {
    var e = Ea(t);
    if (e && (t = e.stateNode)) {
      var n = t[fe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (wo(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Oe("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[fe] || null;
                if (!s) throw Error(r(90));
                wo(
                  i,
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
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && vf(i);
          }
          break t;
        case "textarea":
          xf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && wa(t, !!n.multiple, e, !1);
      }
    }
  }
  var No = !1;
  function Mf(t, e, n) {
    if (No) return t(e, n);
    No = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((No = !1),
        (Ca !== null || za !== null) &&
          (Ns(), Ca && ((e = Ca), (t = za), (za = Ca = null), Ef(e), t)))
      )
        for (e = 0; e < t.length; e++) Ef(t[e]);
    }
  }
  function Mi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[fe] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    jo = !1;
  if (tn)
    try {
      var Di = {};
      Object.defineProperty(Di, "passive", {
        get: function () {
          jo = !0;
        },
      }),
        window.addEventListener("test", Di, Di),
        window.removeEventListener("test", Di, Di);
    } catch {
      jo = !1;
    }
  var An = null,
    _o = null,
    Jl = null;
  function Df() {
    if (Jl) return Jl;
    var t,
      e = _o,
      n = e.length,
      i,
      s = "value" in An ? An.value : An.textContent,
      u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var d = n - t;
    for (i = 1; i <= d && e[n - i] === s[u - i]; i++);
    return (Jl = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Fl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wl() {
    return !0;
  }
  function Rf() {
    return !1;
  }
  function de(t) {
    function e(n, i, s, u, d) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(u) : u[g]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Wl
          : Rf),
        (this.isPropagationStopped = Rf),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wl));
        },
        persist: function () {},
        isPersistent: Wl,
      }),
      e
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $l = de(In),
    Ri = v({}, In, { view: 0, detail: 0 }),
    H0 = de(Ri),
    Uo,
    Bo,
    wi,
    Il = v({}, Ri, {
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
      getModifierState: Ho,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== wi &&
              (wi && t.type === "mousemove"
                ? ((Uo = t.screenX - wi.screenX), (Bo = t.screenY - wi.screenY))
                : (Bo = Uo = 0),
              (wi = t)),
            Uo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Bo;
      },
    }),
    wf = de(Il),
    q0 = v({}, Il, { dataTransfer: 0 }),
    G0 = de(q0),
    Y0 = v({}, Ri, { relatedTarget: 0 }),
    Lo = de(Y0),
    k0 = v({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    X0 = de(k0),
    Z0 = v({}, In, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Q0 = de(Z0),
    K0 = v({}, In, { data: 0 }),
    Of = de(K0),
    P0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    J0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    F0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function W0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = F0[t])
      ? !!e[t]
      : !1;
  }
  function Ho() {
    return W0;
  }
  var $0 = v({}, Ri, {
      key: function (t) {
        if (t.key) {
          var e = P0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Fl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? J0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ho,
      charCode: function (t) {
        return t.type === "keypress" ? Fl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Fl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    I0 = de($0),
    tv = v({}, Il, {
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
    Cf = de(tv),
    ev = v({}, Ri, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ho,
    }),
    nv = de(ev),
    av = v({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iv = de(av),
    lv = v({}, Il, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sv = de(lv),
    ov = v({}, In, { newState: 0, oldState: 0 }),
    rv = de(ov),
    uv = [9, 13, 27, 32],
    qo = tn && "CompositionEvent" in window,
    Oi = null;
  tn && "documentMode" in document && (Oi = document.documentMode);
  var cv = tn && "TextEvent" in window && !Oi,
    zf = tn && (!qo || (Oi && 8 < Oi && 11 >= Oi)),
    Vf = " ",
    Nf = !1;
  function jf(t, e) {
    switch (t) {
      case "keyup":
        return uv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _f(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Va = !1;
  function fv(t, e) {
    switch (t) {
      case "compositionend":
        return _f(e);
      case "keypress":
        return e.which !== 32 ? null : ((Nf = !0), Vf);
      case "textInput":
        return (t = e.data), t === Vf && Nf ? null : t;
      default:
        return null;
    }
  }
  function dv(t, e) {
    if (Va)
      return t === "compositionend" || (!qo && jf(t, e))
        ? ((t = Df()), (Jl = _o = An = null), (Va = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var hv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
  function Uf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!hv[t.type] : e === "textarea";
  }
  function Bf(t, e, n, i) {
    Ca ? (za ? za.push(i) : (za = [i])) : (Ca = i),
      (e = Hs(e, "onChange")),
      0 < e.length &&
        ((n = new $l("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var Ci = null,
    zi = null;
  function mv(t) {
    gm(t, 0);
  }
  function ts(t) {
    var e = Ei(t);
    if (vf(e)) return t;
  }
  function Lf(t, e) {
    if (t === "change") return e;
  }
  var Hf = !1;
  if (tn) {
    var Go;
    if (tn) {
      var Yo = "oninput" in document;
      if (!Yo) {
        var qf = document.createElement("div");
        qf.setAttribute("oninput", "return;"),
          (Yo = typeof qf.oninput == "function");
      }
      Go = Yo;
    } else Go = !1;
    Hf = Go && (!document.documentMode || 9 < document.documentMode);
  }
  function Gf() {
    Ci && (Ci.detachEvent("onpropertychange", Yf), (zi = Ci = null));
  }
  function Yf(t) {
    if (t.propertyName === "value" && ts(zi)) {
      var e = [];
      Bf(e, zi, t, Vo(t)), Mf(mv, e);
    }
  }
  function pv(t, e, n) {
    t === "focusin"
      ? (Gf(), (Ci = e), (zi = n), Ci.attachEvent("onpropertychange", Yf))
      : t === "focusout" && Gf();
  }
  function yv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ts(zi);
  }
  function gv(t, e) {
    if (t === "click") return ts(e);
  }
  function vv(t, e) {
    if (t === "input" || t === "change") return ts(e);
  }
  function bv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var xe = typeof Object.is == "function" ? Object.is : bv;
  function Vi(t, e) {
    if (xe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!xn.call(e, s) || !xe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function kf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Xf(t, e) {
    var n = kf(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = kf(n);
    }
  }
  function Zf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Zf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Qf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Kl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Kl(t.document);
    }
    return e;
  }
  function ko(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var xv = tn && "documentMode" in document && 11 >= document.documentMode,
    Na = null,
    Xo = null,
    Ni = null,
    Zo = !1;
  function Kf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zo ||
      Na == null ||
      Na !== Kl(i) ||
      ((i = Na),
      "selectionStart" in i && ko(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Ni && Vi(Ni, i)) ||
        ((Ni = i),
        (i = Hs(Xo, "onSelect")),
        0 < i.length &&
          ((e = new $l("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Na))));
  }
  function ta(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ja = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionrun: ta("Transition", "TransitionRun"),
      transitionstart: ta("Transition", "TransitionStart"),
      transitioncancel: ta("Transition", "TransitionCancel"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    Qo = {},
    Pf = {};
  tn &&
    ((Pf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ja.animationend.animation,
      delete ja.animationiteration.animation,
      delete ja.animationstart.animation),
    "TransitionEvent" in window || delete ja.transitionend.transition);
  function ea(t) {
    if (Qo[t]) return Qo[t];
    if (!ja[t]) return t;
    var e = ja[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Pf) return (Qo[t] = e[n]);
    return t;
  }
  var Jf = ea("animationend"),
    Ff = ea("animationiteration"),
    Wf = ea("animationstart"),
    Sv = ea("transitionrun"),
    Tv = ea("transitionstart"),
    Av = ea("transitioncancel"),
    $f = ea("transitionend"),
    If = new Map(),
    Ko =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ko.push("scrollEnd");
  function qe(t, e) {
    If.set(t, e), $n(e, [t]);
  }
  var td = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = td.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: yf(e) }), td.set(t, e), e);
    }
    return { value: t, source: e, stack: yf(e) };
  }
  var ze = [],
    _a = 0,
    Po = 0;
  function es() {
    for (var t = _a, e = (Po = _a = 0); e < t; ) {
      var n = ze[e];
      ze[e++] = null;
      var i = ze[e];
      ze[e++] = null;
      var s = ze[e];
      ze[e++] = null;
      var u = ze[e];
      if (((ze[e++] = null), i !== null && s !== null)) {
        var d = i.pending;
        d === null ? (s.next = s) : ((s.next = d.next), (d.next = s)),
          (i.pending = s);
      }
      u !== 0 && ed(n, s, u);
    }
  }
  function ns(t, e, n, i) {
    (ze[_a++] = t),
      (ze[_a++] = e),
      (ze[_a++] = n),
      (ze[_a++] = i),
      (Po |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function Jo(t, e, n, i) {
    return ns(t, e, n, i), as(t);
  }
  function Ua(t, e) {
    return ns(t, null, null, e), as(t);
  }
  function ed(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      (u.childLanes |= n),
        (i = u.alternate),
        i !== null && (i.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - be(n)),
          (t = u.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function as(t) {
    if (50 < il) throw ((il = 0), (eu = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ba = {};
  function Ev(t, e, n, i) {
    (this.tag = t),
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
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Se(t, e, n, i) {
    return new Ev(t, e, n, i);
  }
  function Fo(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function en(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Se(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function nd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function is(t, e, n, i, s, u) {
    var d = 0;
    if (((i = t), typeof t == "function")) Fo(t) && (d = 1);
    else if (typeof t == "string")
      d = Db(t, n, P.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case pt:
          return (t = Se(31, n, e, s)), (t.elementType = pt), (t.lanes = u), t;
        case B:
          return na(n.children, s, u, e);
        case L:
          (d = 8), (s |= 24);
          break;
        case Y:
          return (
            (t = Se(12, n, e, s | 2)), (t.elementType = Y), (t.lanes = u), t
          );
        case k:
          return (t = Se(13, n, e, s)), (t.elementType = k), (t.lanes = u), t;
        case nt:
          return (t = Se(19, n, e, s)), (t.elementType = nt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Z:
              case X:
                d = 10;
                break t;
              case $:
                d = 9;
                break t;
              case lt:
                d = 11;
                break t;
              case rt:
                d = 14;
                break t;
              case q:
                (d = 16), (i = null);
                break t;
            }
          (d = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Se(d, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = u), e
    );
  }
  function na(t, e, n, i) {
    return (t = Se(7, t, i, e)), (t.lanes = n), t;
  }
  function Wo(t, e, n) {
    return (t = Se(6, t, null, e)), (t.lanes = n), t;
  }
  function $o(t, e, n) {
    return (
      (e = Se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var La = [],
    Ha = 0,
    ls = null,
    ss = 0,
    Ve = [],
    Ne = 0,
    aa = null,
    nn = 1,
    an = "";
  function ia(t, e) {
    (La[Ha++] = ss), (La[Ha++] = ls), (ls = t), (ss = e);
  }
  function ad(t, e, n) {
    (Ve[Ne++] = nn), (Ve[Ne++] = an), (Ve[Ne++] = aa), (aa = t);
    var i = nn;
    t = an;
    var s = 32 - be(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var u = 32 - be(e) + s;
    if (30 < u) {
      var d = s - (s % 5);
      (u = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (s -= d),
        (nn = (1 << (32 - be(e) + s)) | (n << s) | i),
        (an = u + t);
    } else (nn = (1 << u) | (n << s) | i), (an = t);
  }
  function Io(t) {
    t.return !== null && (ia(t, 1), ad(t, 1, 0));
  }
  function tr(t) {
    for (; t === ls; )
      (ls = La[--Ha]), (La[Ha] = null), (ss = La[--Ha]), (La[Ha] = null);
    for (; t === aa; )
      (aa = Ve[--Ne]),
        (Ve[Ne] = null),
        (an = Ve[--Ne]),
        (Ve[Ne] = null),
        (nn = Ve[--Ne]),
        (Ve[Ne] = null);
  }
  var re = null,
    Bt = null,
    xt = !1,
    la = null,
    Ze = !1,
    er = Error(r(519));
  function sa(t) {
    var e = Error(r(418, ""));
    throw (Ui(Ce(e, t)), er);
  }
  function id(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[ae] = t), (e[fe] = i), n)) {
      case "dialog":
        mt("cancel", e), mt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        mt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < sl.length; n++) mt(sl[n], e);
        break;
      case "source":
        mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        mt("error", e), mt("load", e);
        break;
      case "details":
        mt("toggle", e);
        break;
      case "input":
        mt("invalid", e),
          bf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Ql(e);
        break;
      case "select":
        mt("invalid", e);
        break;
      case "textarea":
        mt("invalid", e), Sf(e, i.value, i.defaultValue, i.children), Ql(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Sm(e.textContent, n)
        ? (i.popover != null && (mt("beforetoggle", e), mt("toggle", e)),
          i.onScroll != null && mt("scroll", e),
          i.onScrollEnd != null && mt("scrollend", e),
          i.onClick != null && (e.onclick = qs),
          (e = !0))
        : (e = !1),
      e || sa(t);
  }
  function ld(t) {
    for (re = t.return; re; )
      switch (re.tag) {
        case 5:
        case 13:
          Ze = !1;
          return;
        case 27:
        case 3:
          Ze = !0;
          return;
        default:
          re = re.return;
      }
  }
  function ji(t) {
    if (t !== re) return !1;
    if (!xt) return ld(t), (xt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || gu(t.type, t.memoizedProps))),
        (n = !n)),
      n && Bt && sa(t),
      ld(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Bt = Ye(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Bt = null;
      }
    } else
      e === 27
        ? ((e = Bt), Hn(t.type) ? ((t = Su), (Su = null), (Bt = t)) : (Bt = e))
        : (Bt = re ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function _i() {
    (Bt = re = null), (xt = !1);
  }
  function sd() {
    var t = la;
    return (
      t !== null &&
        (pe === null ? (pe = t) : pe.push.apply(pe, t), (la = null)),
      t
    );
  }
  function Ui(t) {
    la === null ? (la = [t]) : la.push(t);
  }
  var nr = U(null),
    oa = null,
    ln = null;
  function En(t, e, n) {
    G(nr, e._currentValue), (e._currentValue = n);
  }
  function sn(t) {
    (t._currentValue = nr.current), Q(nr);
  }
  function ar(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ir(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var d = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var g = u;
          u = s;
          for (var x = 0; x < e.length; x++)
            if (g.context === e[x]) {
              (u.lanes |= n),
                (g = u.alternate),
                g !== null && (g.lanes |= n),
                ar(u.return, n, t),
                i || (d = null);
              break t;
            }
          u = g.next;
        }
      } else if (s.tag === 18) {
        if (((d = s.return), d === null)) throw Error(r(341));
        (d.lanes |= n),
          (u = d.alternate),
          u !== null && (u.lanes |= n),
          ar(d, n, t),
          (d = null);
      } else d = s.child;
      if (d !== null) d.return = s;
      else
        for (d = s; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((s = d.sibling), s !== null)) {
            (s.return = d.return), (d = s);
            break;
          }
          d = d.return;
        }
      s = d;
    }
  }
  function Bi(t, e, n, i) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var d = s.alternate;
        if (d === null) throw Error(r(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = s.type;
          xe(s.pendingProps.value, d.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (s === vt.current) {
        if (((d = s.alternate), d === null)) throw Error(r(387));
        d.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(dl) : (t = [dl]));
      }
      s = s.return;
    }
    t !== null && ir(e, t, n, i), (e.flags |= 262144);
  }
  function os(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ra(t) {
    (oa = t),
      (ln = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ie(t) {
    return od(oa, t);
  }
  function rs(t, e) {
    return oa === null && ra(t), od(t, e);
  }
  function od(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), ln === null)) {
      if (t === null) throw Error(r(308));
      (ln = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else ln = ln.next = e;
    return n;
  }
  var Mv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Dv = a.unstable_scheduleCallback,
    Rv = a.unstable_NormalPriority,
    Qt = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function lr() {
    return { controller: new Mv(), data: new Map(), refCount: 0 };
  }
  function Li(t) {
    t.refCount--,
      t.refCount === 0 &&
        Dv(Rv, function () {
          t.controller.abort();
        });
  }
  var Hi = null,
    sr = 0,
    qa = 0,
    Ga = null;
  function wv(t, e) {
    if (Hi === null) {
      var n = (Hi = []);
      (sr = 0),
        (qa = ru()),
        (Ga = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return sr++, e.then(rd, rd), e;
  }
  function rd() {
    if (--sr === 0 && Hi !== null) {
      Ga !== null && (Ga.status = "fulfilled");
      var t = Hi;
      (Hi = null), (qa = 0), (Ga = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ov(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var ud = z.S;
  z.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      wv(t, e),
      ud !== null && ud(t, e);
  };
  var ua = U(null);
  function or() {
    var t = ua.current;
    return t !== null ? t : wt.pooledCache;
  }
  function us(t, e) {
    e === null ? G(ua, ua.current) : G(ua, e.pool);
  }
  function cd() {
    var t = or();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var qi = Error(r(460)),
    fd = Error(r(474)),
    cs = Error(r(542)),
    rr = { then: function () {} };
  function dd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fs() {}
  function hd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(fs, fs), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), pd(t), t);
      default:
        if (typeof e.status == "string") e.then(fs, fs);
        else {
          if (((t = wt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), pd(t), t);
        }
        throw ((Gi = e), qi);
    }
  }
  var Gi = null;
  function md() {
    if (Gi === null) throw Error(r(459));
    var t = Gi;
    return (Gi = null), t;
  }
  function pd(t) {
    if (t === qi || t === cs) throw Error(r(483));
  }
  var Mn = !1;
  function ur(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cr(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Dn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (St & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = as(t)),
        ed(t, null, n),
        e
      );
    }
    return ns(t, i, e, n), as(t);
  }
  function Yi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), rf(t, n);
    }
  }
  function fr(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (s = u = d) : (u = u.next = d), (n = n.next);
        } while (n !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var dr = !1;
  function ki() {
    if (dr) {
      var t = Ga;
      if (t !== null) throw t;
    }
  }
  function Xi(t, e, n, i) {
    dr = !1;
    var s = t.updateQueue;
    Mn = !1;
    var u = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var x = g,
        D = x.next;
      (x.next = null), d === null ? (u = D) : (d.next = D), (d = x);
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (g = V.lastBaseUpdate),
        g !== d &&
          (g === null ? (V.firstBaseUpdate = D) : (g.next = D),
          (V.lastBaseUpdate = x)));
    }
    if (u !== null) {
      var j = s.baseState;
      (d = 0), (V = D = x = null), (g = u);
      do {
        var R = g.lane & -536870913,
          O = R !== g.lane;
        if (O ? (gt & R) === R : (i & R) === R) {
          R !== 0 && R === qa && (dr = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var at = t,
              tt = g;
            R = e;
            var Mt = n;
            switch (tt.tag) {
              case 1:
                if (((at = tt.payload), typeof at == "function")) {
                  j = at.call(Mt, j, R);
                  break t;
                }
                j = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = tt.payload),
                  (R = typeof at == "function" ? at.call(Mt, j, R) : at),
                  R == null)
                )
                  break t;
                j = v({}, j, R);
                break t;
              case 2:
                Mn = !0;
            }
          }
          (R = g.callback),
            R !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = s.callbacks),
              O === null ? (s.callbacks = [R]) : O.push(R));
        } else
          (O = {
            lane: R,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            V === null ? ((D = V = O), (x = j)) : (V = V.next = O),
            (d |= R);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (O = g),
            (g = O.next),
            (O.next = null),
            (s.lastBaseUpdate = O),
            (s.shared.pending = null);
        }
      } while (!0);
      V === null && (x = j),
        (s.baseState = x),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = V),
        u === null && (s.shared.lanes = 0),
        (_n |= d),
        (t.lanes = d),
        (t.memoizedState = j);
    }
  }
  function yd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function gd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) yd(n[t], e);
  }
  var Ya = U(null),
    ds = U(0);
  function vd(t, e) {
    (t = hn), G(ds, t), G(Ya, e), (hn = t | e.baseLanes);
  }
  function hr() {
    G(ds, hn), G(Ya, Ya.current);
  }
  function mr() {
    (hn = ds.current), Q(Ya), Q(ds);
  }
  var wn = 0,
    ut = null,
    At = null,
    kt = null,
    hs = !1,
    ka = !1,
    ca = !1,
    ms = 0,
    Zi = 0,
    Xa = null,
    Cv = 0;
  function qt() {
    throw Error(r(321));
  }
  function pr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!xe(t[n], e[n])) return !1;
    return !0;
  }
  function yr(t, e, n, i, s, u) {
    return (
      (wn = u),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? eh : nh),
      (ca = !1),
      (u = n(i, s)),
      (ca = !1),
      ka && (u = xd(e, n, i, s)),
      bd(t),
      u
    );
  }
  function bd(t) {
    z.H = xs;
    var e = At !== null && At.next !== null;
    if (((wn = 0), (kt = At = ut = null), (hs = !1), (Zi = 0), (Xa = null), e))
      throw Error(r(300));
    t === null ||
      Ft ||
      ((t = t.dependencies), t !== null && os(t) && (Ft = !0));
  }
  function xd(t, e, n, i) {
    ut = t;
    var s = 0;
    do {
      if ((ka && (Xa = null), (Zi = 0), (ka = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (kt = At = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (z.H = Bv), (u = e(n, i));
    } while (ka);
    return u;
  }
  function zv() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Qi(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function gr() {
    var t = ms !== 0;
    return (ms = 0), t;
  }
  function vr(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function br(t) {
    if (hs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      hs = !1;
    }
    (wn = 0), (kt = At = ut = null), (ka = !1), (Zi = ms = 0), (Xa = null);
  }
  function he() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return kt === null ? (ut.memoizedState = kt = t) : (kt = kt.next = t), kt;
  }
  function Xt() {
    if (At === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = kt === null ? ut.memoizedState : kt.next;
    if (e !== null) (kt = e), (At = t);
    else {
      if (t === null)
        throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        kt === null ? (ut.memoizedState = kt = t) : (kt = kt.next = t);
    }
    return kt;
  }
  function xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qi(t) {
    var e = Zi;
    return (
      (Zi += 1),
      Xa === null && (Xa = []),
      (t = hd(Xa, t, e)),
      (e = ut),
      (kt === null ? e.memoizedState : kt.next) === null &&
        ((e = e.alternate),
        (z.H = e === null || e.memoizedState === null ? eh : nh)),
      t
    );
  }
  function ps(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Qi(t);
      if (t.$$typeof === X) return ie(t);
    }
    throw Error(r(438, String(t)));
  }
  function Sr(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ut.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = xr()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = Ut;
    return e.index++, n;
  }
  function on(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ys(t) {
    var e = Xt();
    return Tr(e, At, t);
  }
  function Tr(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var d = s.next;
        (s.next = u.next), (u.next = d);
      }
      (e.baseQueue = s = u), (i.pending = null);
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var g = (d = null),
        x = null,
        D = e,
        V = !1;
      do {
        var j = D.lane & -536870913;
        if (j !== D.lane ? (gt & j) === j : (wn & j) === j) {
          var R = D.revertLane;
          if (R === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              j === qa && (V = !0);
          else if ((wn & R) === R) {
            (D = D.next), R === qa && (V = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              x === null ? ((g = x = j), (d = u)) : (x = x.next = j),
              (ut.lanes |= R),
              (_n |= R);
          (j = D.action),
            ca && n(u, j),
            (u = D.hasEagerState ? D.eagerState : n(u, j));
        } else
          (R = {
            lane: j,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            x === null ? ((g = x = R), (d = u)) : (x = x.next = R),
            (ut.lanes |= j),
            (_n |= j);
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (x === null ? (d = u) : (x.next = g),
        !xe(u, t.memoizedState) && ((Ft = !0), V && ((n = Ga), n !== null)))
      )
        throw n;
      (t.memoizedState = u),
        (t.baseState = d),
        (t.baseQueue = x),
        (i.lastRenderedState = u);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Ar(t) {
    var e = Xt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do (u = t(u, d.action)), (d = d.next);
      while (d !== s);
      xe(u, e.memoizedState) || (Ft = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, i];
  }
  function Sd(t, e, n) {
    var i = ut,
      s = Xt(),
      u = xt;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var d = !xe((At || s).memoizedState, n);
    d && ((s.memoizedState = n), (Ft = !0)), (s = s.queue);
    var g = Ed.bind(null, i, s, t);
    if (
      (Ki(2048, 8, g, [t]),
      s.getSnapshot !== e || d || (kt !== null && kt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Za(9, gs(), Ad.bind(null, i, s, n, e), null),
        wt === null)
      )
        throw Error(r(349));
      u || (wn & 124) !== 0 || Td(i, e, n);
    }
    return n;
  }
  function Td(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = xr()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Ad(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Md(e) && Dd(t);
  }
  function Ed(t, e, n) {
    return n(function () {
      Md(e) && Dd(t);
    });
  }
  function Md(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !xe(t, n);
    } catch {
      return !0;
    }
  }
  function Dd(t) {
    var e = Ua(t, 2);
    e !== null && De(e, t, 2);
  }
  function Er(t) {
    var e = he();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ca)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Rd(t, e, n, i) {
    return (t.baseState = n), Tr(t, At, typeof i == "function" ? i : on);
  }
  function Vv(t, e, n, i, s) {
    if (bs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          u.listeners.push(d);
        },
      };
      z.T !== null ? n(!0) : (u.isTransition = !1),
        i(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), wd(e, u))
          : ((u.next = n.next), (e.pending = n.next = u));
    }
  }
  function wd(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = z.T,
        d = {};
      z.T = d;
      try {
        var g = n(s, i),
          x = z.S;
        x !== null && x(d, g), Od(t, e, g);
      } catch (D) {
        Mr(t, e, D);
      } finally {
        z.T = u;
      }
    } else
      try {
        (u = n(s, i)), Od(t, e, u);
      } catch (D) {
        Mr(t, e, D);
      }
  }
  function Od(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Cd(t, e, i);
          },
          function (i) {
            return Mr(t, e, i);
          }
        )
      : Cd(t, e, n);
  }
  function Cd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      zd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), wd(t, n)));
  }
  function Mr(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), zd(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function zd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Vd(t, e) {
    return e;
  }
  function Nd(t, e) {
    if (xt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var i = ut;
          if (xt) {
            if (Bt) {
              e: {
                for (var s = Bt, u = Ze; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = Ye(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (u = s.data), (s = u === "F!" || u === "F" ? s : null);
              }
              if (s) {
                (Bt = Ye(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            sa(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = he()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vd,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = $d.bind(null, ut, i)),
      (i.dispatch = n),
      (i = Er(!1)),
      (u = Cr.bind(null, ut, !1, i.queue)),
      (i = he()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Vv.bind(null, ut, s, u, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function jd(t) {
    var e = Xt();
    return _d(e, At, t);
  }
  function _d(t, e, n) {
    if (
      ((e = Tr(t, e, Vd)[0]),
      (t = ys(on)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Qi(e);
      } catch (d) {
        throw d === qi ? cs : d;
      }
    else i = e;
    e = Xt();
    var s = e.queue,
      u = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048), Za(9, gs(), Nv.bind(null, s, n), null)),
      [i, u, t]
    );
  }
  function Nv(t, e) {
    t.action = e;
  }
  function Ud(t) {
    var e = Xt(),
      n = At;
    if (n !== null) return _d(e, n, t);
    Xt(), (e = e.memoizedState), (n = Xt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function Za(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = xr()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function gs() {
    return { destroy: void 0, resource: void 0 };
  }
  function Bd() {
    return Xt().memoizedState;
  }
  function vs(t, e, n, i) {
    var s = he();
    (i = i === void 0 ? null : i),
      (ut.flags |= t),
      (s.memoizedState = Za(1 | e, gs(), n, i));
  }
  function Ki(t, e, n, i) {
    var s = Xt();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    At !== null && i !== null && pr(i, At.memoizedState.deps)
      ? (s.memoizedState = Za(e, u, n, i))
      : ((ut.flags |= t), (s.memoizedState = Za(1 | e, u, n, i)));
  }
  function Ld(t, e) {
    vs(8390656, 8, t, e);
  }
  function Hd(t, e) {
    Ki(2048, 8, t, e);
  }
  function qd(t, e) {
    return Ki(4, 2, t, e);
  }
  function Gd(t, e) {
    return Ki(4, 4, t, e);
  }
  function Yd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function kd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Ki(4, 4, Yd.bind(null, e, t), n);
  }
  function Dr() {}
  function Xd(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && pr(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function Zd(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && pr(e, i[1])) return i[0];
    if (((i = t()), ca)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function Rr(t, e, n) {
    return n === void 0 || (wn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Ph()), (ut.lanes |= t), (_n |= t), n);
  }
  function Qd(t, e, n, i) {
    return xe(n, e)
      ? n
      : Ya.current !== null
      ? ((t = Rr(t, n, i)), xe(t, e) || (Ft = !0), t)
      : (wn & 42) === 0
      ? ((Ft = !0), (t.memoizedState = n))
      : ((t = Ph()), (ut.lanes |= t), (_n |= t), e);
  }
  function Kd(t, e, n, i, s) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var d = z.T,
      g = {};
    (z.T = g), Cr(t, !1, e, n);
    try {
      var x = s(),
        D = z.S;
      if (
        (D !== null && D(g, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var V = Ov(x, i);
        Pi(t, e, V, Me(t));
      } else Pi(t, e, i, Me(t));
    } catch (j) {
      Pi(t, e, { then: function () {}, status: "rejected", reason: j }, Me());
    } finally {
      (H.p = u), (z.T = d);
    }
  }
  function jv() {}
  function wr(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Pd(t).queue;
    Kd(
      t,
      s,
      e,
      _,
      n === null
        ? jv
        : function () {
            return Jd(t), n(i);
          }
    );
  }
  function Pd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: _,
      baseState: _,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: _,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: on,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Jd(t) {
    var e = Pd(t).next.queue;
    Pi(t, e, {}, Me());
  }
  function Or() {
    return ie(dl);
  }
  function Fd() {
    return Xt().memoizedState;
  }
  function Wd() {
    return Xt().memoizedState;
  }
  function _v(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = Dn(n);
          var i = Rn(e, t, n);
          i !== null && (De(i, e, n), Yi(i, e, n)),
            (e = { cache: lr() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Uv(t, e, n) {
    var i = Me();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      bs(t)
        ? Id(e, n)
        : ((n = Jo(t, e, n, i)), n !== null && (De(n, t, i), th(n, e, i)));
  }
  function $d(t, e, n) {
    var i = Me();
    Pi(t, e, n, i);
  }
  function Pi(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (bs(t)) Id(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var d = e.lastRenderedState,
            g = u(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), xe(g, d)))
            return ns(t, e, s, 0), wt === null && es(), !1;
        } catch {
        } finally {
        }
      if (((n = Jo(t, e, s, i)), n !== null))
        return De(n, t, i), th(n, e, i), !0;
    }
    return !1;
  }
  function Cr(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: ru(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bs(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Jo(t, n, i, 2)), e !== null && De(e, t, 2);
  }
  function bs(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function Id(t, e) {
    ka = hs = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function th(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), rf(t, n);
    }
  }
  var xs = {
      readContext: ie,
      use: ps,
      useCallback: qt,
      useContext: qt,
      useEffect: qt,
      useImperativeHandle: qt,
      useLayoutEffect: qt,
      useInsertionEffect: qt,
      useMemo: qt,
      useReducer: qt,
      useRef: qt,
      useState: qt,
      useDebugValue: qt,
      useDeferredValue: qt,
      useTransition: qt,
      useSyncExternalStore: qt,
      useId: qt,
      useHostTransitionStatus: qt,
      useFormState: qt,
      useActionState: qt,
      useOptimistic: qt,
      useMemoCache: qt,
      useCacheRefresh: qt,
    },
    eh = {
      readContext: ie,
      use: ps,
      useCallback: function (t, e) {
        return (he().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ie,
      useEffect: Ld,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          vs(4194308, 4, Yd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return vs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        vs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = he();
        e = e === void 0 ? null : e;
        var i = t();
        if (ca) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return (n.memoizedState = [i, e]), i;
      },
      useReducer: function (t, e, n) {
        var i = he();
        if (n !== void 0) {
          var s = n(e);
          if (ca) {
            Sn(!0);
            try {
              n(e);
            } finally {
              Sn(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Uv.bind(null, ut, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = he();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Er(t);
        var e = t.queue,
          n = $d.bind(null, ut, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var n = he();
        return Rr(n, t, e);
      },
      useTransition: function () {
        var t = Er(!1);
        return (
          (t = Kd.bind(null, ut, t.queue, !0, !1)),
          (he().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ut,
          s = he();
        if (xt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), wt === null)) throw Error(r(349));
          (gt & 124) !== 0 || Td(i, e, n);
        }
        s.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (s.queue = u),
          Ld(Ed.bind(null, i, u, t), [t]),
          (i.flags |= 2048),
          Za(9, gs(), Ad.bind(null, i, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = he(),
          e = wt.identifierPrefix;
        if (xt) {
          var n = an,
            i = nn;
          (n = (i & ~(1 << (32 - be(i) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = ms++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = Cv++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Or,
      useFormState: Nd,
      useActionState: Nd,
      useOptimistic: function (t) {
        var e = he();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Cr.bind(null, ut, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Sr,
      useCacheRefresh: function () {
        return (he().memoizedState = _v.bind(null, ut));
      },
    },
    nh = {
      readContext: ie,
      use: ps,
      useCallback: Xd,
      useContext: ie,
      useEffect: Hd,
      useImperativeHandle: kd,
      useInsertionEffect: qd,
      useLayoutEffect: Gd,
      useMemo: Zd,
      useReducer: ys,
      useRef: Bd,
      useState: function () {
        return ys(on);
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var n = Xt();
        return Qd(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ys(on)[0],
          e = Xt().memoizedState;
        return [typeof t == "boolean" ? t : Qi(t), e];
      },
      useSyncExternalStore: Sd,
      useId: Fd,
      useHostTransitionStatus: Or,
      useFormState: jd,
      useActionState: jd,
      useOptimistic: function (t, e) {
        var n = Xt();
        return Rd(n, At, t, e);
      },
      useMemoCache: Sr,
      useCacheRefresh: Wd,
    },
    Bv = {
      readContext: ie,
      use: ps,
      useCallback: Xd,
      useContext: ie,
      useEffect: Hd,
      useImperativeHandle: kd,
      useInsertionEffect: qd,
      useLayoutEffect: Gd,
      useMemo: Zd,
      useReducer: Ar,
      useRef: Bd,
      useState: function () {
        return Ar(on);
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var n = Xt();
        return At === null ? Rr(n, t, e) : Qd(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ar(on)[0],
          e = Xt().memoizedState;
        return [typeof t == "boolean" ? t : Qi(t), e];
      },
      useSyncExternalStore: Sd,
      useId: Fd,
      useHostTransitionStatus: Or,
      useFormState: Ud,
      useActionState: Ud,
      useOptimistic: function (t, e) {
        var n = Xt();
        return At !== null
          ? Rd(n, At, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Sr,
      useCacheRefresh: Wd,
    },
    Qa = null,
    Ji = 0;
  function Ss(t) {
    var e = Ji;
    return (Ji += 1), Qa === null && (Qa = []), hd(Qa, t, e);
  }
  function Fi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Ts(t, e) {
    throw e.$$typeof === b
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function ah(t) {
    var e = t._init;
    return e(t._payload);
  }
  function ih(t) {
    function e(E, T) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [T]), (E.flags |= 16)) : M.push(T);
      }
    }
    function n(E, T) {
      if (!t) return null;
      for (; T !== null; ) e(E, T), (T = T.sibling);
      return null;
    }
    function i(E) {
      for (var T = new Map(); E !== null; )
        E.key !== null ? T.set(E.key, E) : T.set(E.index, E), (E = E.sibling);
      return T;
    }
    function s(E, T) {
      return (E = en(E, T)), (E.index = 0), (E.sibling = null), E;
    }
    function u(E, T, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < T ? ((E.flags |= 67108866), T) : M)
              : ((E.flags |= 67108866), T))
          : ((E.flags |= 1048576), T)
      );
    }
    function d(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function g(E, T, M, N) {
      return T === null || T.tag !== 6
        ? ((T = Wo(M, E.mode, N)), (T.return = E), T)
        : ((T = s(T, M)), (T.return = E), T);
    }
    function x(E, T, M, N) {
      var J = M.type;
      return J === B
        ? V(E, T, M.props.children, N, M.key)
        : T !== null &&
          (T.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === q &&
              ah(J) === T.type))
        ? ((T = s(T, M.props)), Fi(T, M), (T.return = E), T)
        : ((T = is(M.type, M.key, M.props, null, E.mode, N)),
          Fi(T, M),
          (T.return = E),
          T);
    }
    function D(E, T, M, N) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== M.containerInfo ||
        T.stateNode.implementation !== M.implementation
        ? ((T = $o(M, E.mode, N)), (T.return = E), T)
        : ((T = s(T, M.children || [])), (T.return = E), T);
    }
    function V(E, T, M, N, J) {
      return T === null || T.tag !== 7
        ? ((T = na(M, E.mode, N, J)), (T.return = E), T)
        : ((T = s(T, M)), (T.return = E), T);
    }
    function j(E, T, M) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = Wo("" + T, E.mode, M)), (T.return = E), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case A:
            return (
              (M = is(T.type, T.key, T.props, null, E.mode, M)),
              Fi(M, T),
              (M.return = E),
              M
            );
          case C:
            return (T = $o(T, E.mode, M)), (T.return = E), T;
          case q:
            var N = T._init;
            return (T = N(T._payload)), j(E, T, M);
        }
        if (Ct(T) || Ot(T))
          return (T = na(T, E.mode, M, null)), (T.return = E), T;
        if (typeof T.then == "function") return j(E, Ss(T), M);
        if (T.$$typeof === X) return j(E, rs(E, T), M);
        Ts(E, T);
      }
      return null;
    }
    function R(E, T, M, N) {
      var J = T !== null ? T.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return J !== null ? null : g(E, T, "" + M, N);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case A:
            return M.key === J ? x(E, T, M, N) : null;
          case C:
            return M.key === J ? D(E, T, M, N) : null;
          case q:
            return (J = M._init), (M = J(M._payload)), R(E, T, M, N);
        }
        if (Ct(M) || Ot(M)) return J !== null ? null : V(E, T, M, N, null);
        if (typeof M.then == "function") return R(E, T, Ss(M), N);
        if (M.$$typeof === X) return R(E, T, rs(E, M), N);
        Ts(E, M);
      }
      return null;
    }
    function O(E, T, M, N, J) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return (E = E.get(M) || null), g(T, E, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return (
              (E = E.get(N.key === null ? M : N.key) || null), x(T, E, N, J)
            );
          case C:
            return (
              (E = E.get(N.key === null ? M : N.key) || null), D(T, E, N, J)
            );
          case q:
            var ft = N._init;
            return (N = ft(N._payload)), O(E, T, M, N, J);
        }
        if (Ct(N) || Ot(N)) return (E = E.get(M) || null), V(T, E, N, J, null);
        if (typeof N.then == "function") return O(E, T, M, Ss(N), J);
        if (N.$$typeof === X) return O(E, T, M, rs(T, N), J);
        Ts(T, N);
      }
      return null;
    }
    function at(E, T, M, N) {
      for (
        var J = null, ft = null, I = T, et = (T = 0), $t = null;
        I !== null && et < M.length;
        et++
      ) {
        I.index > et ? (($t = I), (I = null)) : ($t = I.sibling);
        var bt = R(E, I, M[et], N);
        if (bt === null) {
          I === null && (I = $t);
          break;
        }
        t && I && bt.alternate === null && e(E, I),
          (T = u(bt, T, et)),
          ft === null ? (J = bt) : (ft.sibling = bt),
          (ft = bt),
          (I = $t);
      }
      if (et === M.length) return n(E, I), xt && ia(E, et), J;
      if (I === null) {
        for (; et < M.length; et++)
          (I = j(E, M[et], N)),
            I !== null &&
              ((T = u(I, T, et)),
              ft === null ? (J = I) : (ft.sibling = I),
              (ft = I));
        return xt && ia(E, et), J;
      }
      for (I = i(I); et < M.length; et++)
        ($t = O(I, E, et, M[et], N)),
          $t !== null &&
            (t &&
              $t.alternate !== null &&
              I.delete($t.key === null ? et : $t.key),
            (T = u($t, T, et)),
            ft === null ? (J = $t) : (ft.sibling = $t),
            (ft = $t));
      return (
        t &&
          I.forEach(function (Xn) {
            return e(E, Xn);
          }),
        xt && ia(E, et),
        J
      );
    }
    function tt(E, T, M, N) {
      if (M == null) throw Error(r(151));
      for (
        var J = null, ft = null, I = T, et = (T = 0), $t = null, bt = M.next();
        I !== null && !bt.done;
        et++, bt = M.next()
      ) {
        I.index > et ? (($t = I), (I = null)) : ($t = I.sibling);
        var Xn = R(E, I, bt.value, N);
        if (Xn === null) {
          I === null && (I = $t);
          break;
        }
        t && I && Xn.alternate === null && e(E, I),
          (T = u(Xn, T, et)),
          ft === null ? (J = Xn) : (ft.sibling = Xn),
          (ft = Xn),
          (I = $t);
      }
      if (bt.done) return n(E, I), xt && ia(E, et), J;
      if (I === null) {
        for (; !bt.done; et++, bt = M.next())
          (bt = j(E, bt.value, N)),
            bt !== null &&
              ((T = u(bt, T, et)),
              ft === null ? (J = bt) : (ft.sibling = bt),
              (ft = bt));
        return xt && ia(E, et), J;
      }
      for (I = i(I); !bt.done; et++, bt = M.next())
        (bt = O(I, E, et, bt.value, N)),
          bt !== null &&
            (t &&
              bt.alternate !== null &&
              I.delete(bt.key === null ? et : bt.key),
            (T = u(bt, T, et)),
            ft === null ? (J = bt) : (ft.sibling = bt),
            (ft = bt));
      return (
        t &&
          I.forEach(function (Lb) {
            return e(E, Lb);
          }),
        xt && ia(E, et),
        J
      );
    }
    function Mt(E, T, M, N) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === B &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case A:
            t: {
              for (var J = M.key; T !== null; ) {
                if (T.key === J) {
                  if (((J = M.type), J === B)) {
                    if (T.tag === 7) {
                      n(E, T.sibling),
                        (N = s(T, M.props.children)),
                        (N.return = E),
                        (E = N);
                      break t;
                    }
                  } else if (
                    T.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === q &&
                      ah(J) === T.type)
                  ) {
                    n(E, T.sibling),
                      (N = s(T, M.props)),
                      Fi(N, M),
                      (N.return = E),
                      (E = N);
                    break t;
                  }
                  n(E, T);
                  break;
                } else e(E, T);
                T = T.sibling;
              }
              M.type === B
                ? ((N = na(M.props.children, E.mode, N, M.key)),
                  (N.return = E),
                  (E = N))
                : ((N = is(M.type, M.key, M.props, null, E.mode, N)),
                  Fi(N, M),
                  (N.return = E),
                  (E = N));
            }
            return d(E);
          case C:
            t: {
              for (J = M.key; T !== null; ) {
                if (T.key === J)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === M.containerInfo &&
                    T.stateNode.implementation === M.implementation
                  ) {
                    n(E, T.sibling),
                      (N = s(T, M.children || [])),
                      (N.return = E),
                      (E = N);
                    break t;
                  } else {
                    n(E, T);
                    break;
                  }
                else e(E, T);
                T = T.sibling;
              }
              (N = $o(M, E.mode, N)), (N.return = E), (E = N);
            }
            return d(E);
          case q:
            return (J = M._init), (M = J(M._payload)), Mt(E, T, M, N);
        }
        if (Ct(M)) return at(E, T, M, N);
        if (Ot(M)) {
          if (((J = Ot(M)), typeof J != "function")) throw Error(r(150));
          return (M = J.call(M)), tt(E, T, M, N);
        }
        if (typeof M.then == "function") return Mt(E, T, Ss(M), N);
        if (M.$$typeof === X) return Mt(E, T, rs(E, M), N);
        Ts(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          T !== null && T.tag === 6
            ? (n(E, T.sibling), (N = s(T, M)), (N.return = E), (E = N))
            : (n(E, T), (N = Wo(M, E.mode, N)), (N.return = E), (E = N)),
          d(E))
        : n(E, T);
    }
    return function (E, T, M, N) {
      try {
        Ji = 0;
        var J = Mt(E, T, M, N);
        return (Qa = null), J;
      } catch (I) {
        if (I === qi || I === cs) throw I;
        var ft = Se(29, I, null, E.mode);
        return (ft.lanes = N), (ft.return = E), ft;
      } finally {
      }
    };
  }
  var Ka = ih(!0),
    lh = ih(!1),
    je = U(null),
    Qe = null;
  function On(t) {
    var e = t.alternate;
    G(Kt, Kt.current & 1),
      G(je, t),
      Qe === null &&
        (e === null || Ya.current !== null || e.memoizedState !== null) &&
        (Qe = t);
  }
  function sh(t) {
    if (t.tag === 22) {
      if ((G(Kt, Kt.current), G(je, t), Qe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Qe = t);
      }
    } else Cn();
  }
  function Cn() {
    G(Kt, Kt.current), G(je, je.current);
  }
  function rn(t) {
    Q(je), Qe === t && (Qe = null), Q(Kt);
  }
  var Kt = U(0);
  function As(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || xu(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function zr(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Vr = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Me(),
        s = Dn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (De(e, t, i), Yi(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Me(),
        s = Dn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (De(e, t, i), Yi(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Me(),
        i = Dn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = Rn(t, i, n)),
        e !== null && (De(e, t, n), Yi(e, t, n));
    },
  };
  function oh(t, e, n, i, s, u, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, u, d)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Vi(n, i) || !Vi(s, u)
        : !0
    );
  }
  function rh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Vr.enqueueReplaceState(e, e.state, null);
  }
  function fa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var Es =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function uh(t) {
    Es(t);
  }
  function ch(t) {
    console.error(t);
  }
  function fh(t) {
    Es(t);
  }
  function Ms(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function dh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Nr(t, e, n) {
    return (
      (n = Dn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ms(t, e);
      }),
      n
    );
  }
  function hh(t) {
    return (t = Dn(t)), (t.tag = 3), t;
  }
  function mh(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      (t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          dh(e, n, i);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        dh(e, n, i),
          typeof s != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Lv(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Bi(e, n, s, !0),
        (n = je.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Qe === null ? au() : n.alternate === null && Lt === 0 && (Lt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === rr
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  lu(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === rr
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  lu(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return lu(t, i, s), au(), !1;
    }
    if (xt)
      return (
        (e = je.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== er && ((t = Error(r(422), { cause: i })), Ui(Ce(t, n))))
          : (i !== er && ((e = Error(r(423), { cause: i })), Ui(Ce(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ce(i, n)),
            (s = Nr(t.stateNode, i, s)),
            fr(t, s),
            Lt !== 4 && (Lt = 2)),
        !1
      );
    var u = Error(r(520), { cause: i });
    if (
      ((u = Ce(u, n)),
      al === null ? (al = [u]) : al.push(u),
      Lt !== 4 && (Lt = 2),
      e === null)
    )
      return !0;
    (i = Ce(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Nr(n.stateNode, i, t)),
            fr(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Un === null || !Un.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = hh(s)),
              mh(s, t, n, i),
              fr(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ph = Error(r(461)),
    Ft = !1;
  function It(t, e, n, i) {
    e.child = t === null ? lh(e, null, n, i) : Ka(e, t.child, n, i);
  }
  function yh(t, e, n, i, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in i) {
      var d = {};
      for (var g in i) g !== "ref" && (d[g] = i[g]);
    } else d = i;
    return (
      ra(e),
      (i = yr(t, e, n, d, u, s)),
      (g = gr()),
      t !== null && !Ft
        ? (vr(t, e, s), un(t, e, s))
        : (xt && g && Io(e), (e.flags |= 1), It(t, e, i, s), e.child)
    );
  }
  function gh(t, e, n, i, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !Fo(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), vh(t, e, u, i, s))
        : ((t = is(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Gr(t, s))) {
      var d = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Vi), n(d, i) && t.ref === e.ref)
      )
        return un(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = en(u, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function vh(t, e, n, i, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Vi(u, i) && t.ref === e.ref)
        if (((Ft = !1), (e.pendingProps = i = u), Gr(t, s)))
          (t.flags & 131072) !== 0 && (Ft = !0);
        else return (e.lanes = t.lanes), un(t, e, s);
    }
    return jr(t, e, n, i, s);
  }
  function bh(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      u = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, u = 0; s !== null; )
            (u = u | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = u & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return xh(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && us(e, u !== null ? u.cachePool : null),
          u !== null ? vd(e, u) : hr(),
          sh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          xh(t, e, u !== null ? u.baseLanes | n : n, n)
        );
    } else
      u !== null
        ? (us(e, u.cachePool), vd(e, u), Cn(), (e.memoizedState = null))
        : (t !== null && us(e, null), hr(), Cn());
    return It(t, e, s, n), e.child;
  }
  function xh(t, e, n, i) {
    var s = or();
    return (
      (s = s === null ? null : { parent: Qt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && us(e, null),
      hr(),
      sh(e),
      t !== null && Bi(t, e, i, !0),
      null
    );
  }
  function Ds(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function jr(t, e, n, i, s) {
    return (
      ra(e),
      (n = yr(t, e, n, i, void 0, s)),
      (i = gr()),
      t !== null && !Ft
        ? (vr(t, e, s), un(t, e, s))
        : (xt && i && Io(e), (e.flags |= 1), It(t, e, n, s), e.child)
    );
  }
  function Sh(t, e, n, i, s, u) {
    return (
      ra(e),
      (e.updateQueue = null),
      (n = xd(e, i, n, s)),
      bd(t),
      (i = gr()),
      t !== null && !Ft
        ? (vr(t, e, u), un(t, e, u))
        : (xt && i && Io(e), (e.flags |= 1), It(t, e, n, u), e.child)
    );
  }
  function Th(t, e, n, i, s) {
    if ((ra(e), e.stateNode === null)) {
      var u = Ba,
        d = n.contextType;
      typeof d == "object" && d !== null && (u = ie(d)),
        (u = new n(i, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Vr),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = i),
        (u.state = e.memoizedState),
        (u.refs = {}),
        ur(e),
        (d = n.contextType),
        (u.context = typeof d == "object" && d !== null ? ie(d) : Ba),
        (u.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (zr(e, n, d, i), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((d = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          d !== u.state && Vr.enqueueReplaceState(u, u.state, null),
          Xi(e, i, u, s),
          ki(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      u = e.stateNode;
      var g = e.memoizedProps,
        x = fa(n, g);
      u.props = x;
      var D = u.context,
        V = n.contextType;
      (d = Ba), typeof V == "object" && V !== null && (d = ie(V));
      var j = n.getDerivedStateFromProps;
      (V =
        typeof j == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        V ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((g || D !== d) && rh(e, u, i, d)),
        (Mn = !1);
      var R = e.memoizedState;
      (u.state = R),
        Xi(e, i, u, s),
        ki(),
        (D = e.memoizedState),
        g || R !== D || Mn
          ? (typeof j == "function" && (zr(e, n, j, i), (D = e.memoizedState)),
            (x = Mn || oh(e, n, x, i, R, D, d))
              ? (V ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = D)),
            (u.props = i),
            (u.state = D),
            (u.context = d),
            (i = x))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (u = e.stateNode),
        cr(t, e),
        (d = e.memoizedProps),
        (V = fa(n, d)),
        (u.props = V),
        (j = e.pendingProps),
        (R = u.context),
        (D = n.contextType),
        (x = Ba),
        typeof D == "object" && D !== null && (x = ie(D)),
        (g = n.getDerivedStateFromProps),
        (D =
          typeof g == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((d !== j || R !== x) && rh(e, u, i, x)),
        (Mn = !1),
        (R = e.memoizedState),
        (u.state = R),
        Xi(e, i, u, s),
        ki();
      var O = e.memoizedState;
      d !== j ||
      R !== O ||
      Mn ||
      (t !== null && t.dependencies !== null && os(t.dependencies))
        ? (typeof g == "function" && (zr(e, n, g, i), (O = e.memoizedState)),
          (V =
            Mn ||
            oh(e, n, V, i, R, O, x) ||
            (t !== null && t.dependencies !== null && os(t.dependencies)))
            ? (D ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, O, x),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, O, x)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = O)),
          (u.props = i),
          (u.state = O),
          (u.context = x),
          (i = V))
        : (typeof u.componentDidUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      Ds(t, e),
      (i = (e.flags & 128) !== 0),
      u || i
        ? ((u = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = Ka(e, t.child, null, s)),
              (e.child = Ka(e, null, n, s)))
            : It(t, e, n, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = un(t, e, s)),
      t
    );
  }
  function Ah(t, e, n, i) {
    return _i(), (e.flags |= 256), It(t, e, n, i), e.child;
  }
  var _r = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ur(t) {
    return { baseLanes: t, cachePool: cd() };
  }
  function Br(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= _e), t;
  }
  function Eh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      d;
    if (
      ((d = u) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0),
      d && ((s = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (xt) {
        if ((s ? On(e) : Cn(), xt)) {
          var g = Bt,
            x;
          if ((x = g)) {
            t: {
              for (x = g, g = Ze; x.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break t;
                }
                if (((x = Ye(x.nextSibling)), x === null)) {
                  g = null;
                  break t;
                }
              }
              g = x;
            }
            g !== null
              ? ((e.memoizedState = {
                  dehydrated: g,
                  treeContext: aa !== null ? { id: nn, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (x = Se(18, null, null, 0)),
                (x.stateNode = g),
                (x.return = e),
                (e.child = x),
                (re = e),
                (Bt = null),
                (x = !0))
              : (x = !1);
          }
          x || sa(e);
        }
        if (
          ((g = e.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return xu(g) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        rn(e);
      }
      return (
        (g = i.children),
        (i = i.fallback),
        s
          ? (Cn(),
            (s = e.mode),
            (g = Rs({ mode: "hidden", children: g }, s)),
            (i = na(i, s, n, null)),
            (g.return = e),
            (i.return = e),
            (g.sibling = i),
            (e.child = g),
            (s = e.child),
            (s.memoizedState = Ur(n)),
            (s.childLanes = Br(t, d, n)),
            (e.memoizedState = _r),
            i)
          : (On(e), Lr(e, g))
      );
    }
    if (
      ((x = t.memoizedState), x !== null && ((g = x.dehydrated), g !== null))
    ) {
      if (u)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = Hr(t, e, n)))
          : e.memoizedState !== null
          ? (Cn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Cn(),
            (s = i.fallback),
            (g = e.mode),
            (i = Rs({ mode: "visible", children: i.children }, g)),
            (s = na(s, g, n, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            Ka(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = Ur(n)),
            (i.childLanes = Br(t, d, n)),
            (e.memoizedState = _r),
            (e = s));
      else if ((On(e), xu(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var D = d.dgst;
        (d = D),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = d),
          Ui({ value: i, source: null, stack: null }),
          (e = Hr(t, e, n));
      } else if (
        (Ft || Bi(t, e, n, !1), (d = (n & t.childLanes) !== 0), Ft || d)
      ) {
        if (
          ((d = wt),
          d !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : So(i)),
            (i = (i & (d.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== x.retryLane))
        )
          throw ((x.retryLane = i), Ua(t, i), De(d, t, i), ph);
        g.data === "$?" || au(), (e = Hr(t, e, n));
      } else
        g.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (Bt = Ye(g.nextSibling)),
            (re = e),
            (xt = !0),
            (la = null),
            (Ze = !1),
            t !== null &&
              ((Ve[Ne++] = nn),
              (Ve[Ne++] = an),
              (Ve[Ne++] = aa),
              (nn = t.id),
              (an = t.overflow),
              (aa = e)),
            (e = Lr(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Cn(),
        (s = i.fallback),
        (g = e.mode),
        (x = t.child),
        (D = x.sibling),
        (i = en(x, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = x.subtreeFlags & 65011712),
        D !== null ? (s = en(D, s)) : ((s = na(s, g, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = Ur(n))
          : ((x = g.cachePool),
            x !== null
              ? ((D = Qt._currentValue),
                (x = x.parent !== D ? { parent: D, pool: D } : x))
              : (x = cd()),
            (g = { baseLanes: g.baseLanes | n, cachePool: x })),
        (s.memoizedState = g),
        (s.childLanes = Br(t, d, n)),
        (e.memoizedState = _r),
        i)
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = en(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Lr(t, e) {
    return (
      (e = Rs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rs(t, e) {
    return (
      (t = Se(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Hr(t, e, n) {
    return (
      Ka(e, t.child, null, n),
      (t = Lr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Mh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), ar(t.return, e, n);
  }
  function qr(t, e, n, i, s) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = n),
        (u.tailMode = s));
  }
  function Dh(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      u = i.tail;
    if ((It(t, e, i.children, n), (i = Kt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Mh(t, n, e);
          else if (t.tag === 19) Mh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((G(Kt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && As(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          qr(e, !1, s, n, u);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && As(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        qr(e, !0, n, null, u);
        break;
      case "together":
        qr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function un(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Bi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = en(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Gr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && os(t)));
  }
  function Hv(t, e, n) {
    switch (e.tag) {
      case 3:
        Dt(e, e.stateNode.containerInfo),
          En(e, Qt, t.memoizedState.cache),
          _i();
        break;
      case 27:
      case 5:
        vn(e);
        break;
      case 4:
        Dt(e, e.stateNode.containerInfo);
        break;
      case 10:
        En(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Eh(t, e, n)
            : (On(e), (t = un(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Bi(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Dh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          G(Kt, Kt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), bh(t, e, n);
      case 24:
        En(e, Qt, t.memoizedState.cache);
    }
    return un(t, e, n);
  }
  function Rh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ft = !0;
      else {
        if (!Gr(t, n) && (e.flags & 128) === 0) return (Ft = !1), Hv(t, e, n);
        Ft = (t.flags & 131072) !== 0;
      }
    else (Ft = !1), xt && (e.flags & 1048576) !== 0 && ad(e, ss, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            Fo(i)
              ? ((t = fa(i, t)), (e.tag = 1), (e = Th(null, e, i, t, n)))
              : ((e.tag = 0), (e = jr(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === lt)) {
                (e.tag = 11), (e = yh(null, e, i, t, n));
                break t;
              } else if (s === rt) {
                (e.tag = 14), (e = gh(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = ce(i) || i), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return jr(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = fa(i, e.pendingProps)), Th(t, e, i, s, n);
      case 3:
        t: {
          if ((Dt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          (s = u.element), cr(t, e), Xi(e, i, null, n);
          var d = e.memoizedState;
          if (
            ((i = d.cache),
            En(e, Qt, i),
            i !== u.cache && ir(e, [Qt], n, !0),
            ki(),
            (i = d.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Ah(t, e, i, n);
              break t;
            } else if (i !== s) {
              (s = Ce(Error(r(424)), e)), Ui(s), (e = Ah(t, e, i, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Bt = Ye(t.firstChild),
                  re = e,
                  xt = !0,
                  la = null,
                  Ze = !0,
                  n = lh(e, null, i, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((_i(), i === s)) {
              e = un(t, e, n);
              break t;
            }
            It(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ds(t, e),
          t === null
            ? (n = zm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : xt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Gs(st.current).createElement(n)),
                (i[ae] = e),
                (i[fe] = t),
                ee(i, n, t),
                Jt(i),
                (e.stateNode = i))
            : (e.memoizedState = zm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          vn(e),
          t === null &&
            xt &&
            ((i = e.stateNode = wm(e.type, e.pendingProps, st.current)),
            (re = e),
            (Ze = !0),
            (s = Bt),
            Hn(e.type) ? ((Su = s), (Bt = Ye(i.firstChild))) : (Bt = s)),
          It(t, e, e.pendingProps.children, n),
          Ds(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            xt &&
            ((s = i = Bt) &&
              ((i = hb(i, e.type, e.pendingProps, Ze)),
              i !== null
                ? ((e.stateNode = i),
                  (re = e),
                  (Bt = Ye(i.firstChild)),
                  (Ze = !1),
                  (s = !0))
                : (s = !1)),
            s || sa(e)),
          vn(e),
          (s = e.type),
          (u = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (i = u.children),
          gu(s, u) ? (i = null) : d !== null && gu(s, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = yr(t, e, zv, null, null, n)), (dl._currentValue = s)),
          Ds(t, e),
          It(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            xt &&
            ((t = n = Bt) &&
              ((n = mb(n, e.pendingProps, Ze)),
              n !== null
                ? ((e.stateNode = n), (re = e), (Bt = null), (t = !0))
                : (t = !1)),
            t || sa(e)),
          null
        );
      case 13:
        return Eh(t, e, n);
      case 4:
        return (
          Dt(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = Ka(e, null, i, n)) : It(t, e, i, n),
          e.child
        );
      case 11:
        return yh(t, e, e.type, e.pendingProps, n);
      case 7:
        return It(t, e, e.pendingProps, n), e.child;
      case 8:
        return It(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return It(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          En(e, e.type, i.value),
          It(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ra(e),
          (s = ie(s)),
          (i = i(s)),
          (e.flags |= 1),
          It(t, e, i, n),
          e.child
        );
      case 14:
        return gh(t, e, e.type, e.pendingProps, n);
      case 15:
        return vh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Dh(t, e, n);
      case 31:
        return (
          (i = e.pendingProps),
          (n = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((n = Rs(i, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = en(t.child, i)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return bh(t, e, n);
      case 24:
        return (
          ra(e),
          (i = ie(Qt)),
          t === null
            ? ((s = or()),
              s === null &&
                ((s = wt),
                (u = lr()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= n),
                (s = u)),
              (e.memoizedState = { parent: i, cache: s }),
              ur(e),
              En(e, Qt, s))
            : ((t.lanes & n) !== 0 && (cr(t, e), Xi(e, null, null, n), ki()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  En(e, Qt, i))
                : ((i = u.cache),
                  En(e, Qt, i),
                  i !== s.cache && ir(e, [Qt], n, !0))),
          It(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function cn(t) {
    t.flags |= 4;
  }
  function wh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Um(e))) {
      if (
        ((e = je.current),
        e !== null &&
          ((gt & 4194048) === gt
            ? Qe !== null
            : ((gt & 62914560) !== gt && (gt & 536870912) === 0) || e !== Qe))
      )
        throw ((Gi = rr), fd);
      t.flags |= 8192;
    }
  }
  function ws(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? sf() : 536870912), (t.lanes |= e), (Wa |= e));
  }
  function Wi(t, e) {
    if (!xt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function qv(t, e, n) {
    var i = e.pendingProps;
    switch ((tr(e), e.tag)) {
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
        return Vt(e), null;
      case 1:
        return Vt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          sn(Qt),
          ge(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ji(e)
              ? cn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), sd())),
          Vt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (cn(e),
              n !== null ? (Vt(e), wh(e, n)) : (Vt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (cn(e), Vt(e), wh(e, n))
              : (Vt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && cn(e), Vt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        bn(e), (n = st.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && cn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Vt(e), null;
          }
          (t = P.current),
            ji(e) ? id(e) : ((t = wm(s, i, n)), (e.stateNode = t), cn(e));
        }
        return Vt(e), null;
      case 5:
        if ((bn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && cn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Vt(e), null;
          }
          if (((t = P.current), ji(e))) id(e);
          else {
            switch (((s = Gs(st.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            (t[ae] = e), (t[fe] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((ee(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && cn(e);
          }
        }
        return Vt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && cn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = st.current), ji(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = re),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[ae] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Sm(t.nodeValue, n)
              )),
              t || sa(e);
          } else (t = Gs(t).createTextNode(i)), (t[ae] = e), (e.stateNode = t);
        }
        return Vt(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = ji(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[ae] = e;
            } else
              _i(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Vt(e), (s = !1);
          } else
            (s = sd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (rn(e), e) : (rn(e), null);
        }
        if ((rn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var u = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (u = i.memoizedState.cachePool.pool),
            u !== s && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          ws(e, e.updateQueue),
          Vt(e),
          null
        );
      case 4:
        return ge(), t === null && du(e.stateNode.containerInfo), Vt(e), null;
      case 10:
        return sn(e.type), Vt(e), null;
      case 19:
        if ((Q(Kt), (s = e.memoizedState), s === null)) return Vt(e), null;
        if (((i = (e.flags & 128) !== 0), (u = s.rendering), u === null))
          if (i) Wi(s, !1);
          else {
            if (Lt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = As(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Wi(s, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      ws(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    nd(n, t), (n = n.sibling);
                  return G(Kt, (Kt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Xe() > zs &&
              ((e.flags |= 128), (i = !0), Wi(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = As(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ws(e, t),
                Wi(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !xt)
              )
                return Vt(e), null;
            } else
              2 * Xe() - s.renderingStartTime > zs &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), Wi(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = s.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Xe()),
            (e.sibling = null),
            (t = Kt.current),
            G(Kt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Vt(e), null);
      case 22:
      case 23:
        return (
          rn(e),
          mr(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Vt(e),
          (n = e.updateQueue),
          n !== null && ws(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && Q(ua),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          sn(Qt),
          Vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Gv(t, e) {
    switch ((tr(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          sn(Qt),
          ge(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return bn(e), null;
      case 13:
        if (
          (rn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          _i();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Q(Kt), null;
      case 4:
        return ge(), null;
      case 10:
        return sn(e.type), null;
      case 22:
      case 23:
        return (
          rn(e),
          mr(),
          t !== null && Q(ua),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return sn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oh(t, e) {
    switch ((tr(e), e.tag)) {
      case 3:
        sn(Qt), ge();
        break;
      case 26:
      case 27:
      case 5:
        bn(e);
        break;
      case 4:
        ge();
        break;
      case 13:
        rn(e);
        break;
      case 19:
        Q(Kt);
        break;
      case 10:
        sn(e.type);
        break;
      case 22:
      case 23:
        rn(e), mr(), t !== null && Q(ua);
        break;
      case 24:
        sn(Qt);
    }
  }
  function $i(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var u = n.create,
              d = n.inst;
            (i = u()), (d.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Rt(e, e.return, g);
    }
  }
  function zn(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var d = i.inst,
              g = d.destroy;
            if (g !== void 0) {
              (d.destroy = void 0), (s = e);
              var x = n,
                D = g;
              try {
                D();
              } catch (V) {
                Rt(s, x, V);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (V) {
      Rt(e, e.return, V);
    }
  }
  function Ch(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gd(e, n);
      } catch (i) {
        Rt(t, t.return, i);
      }
    }
  }
  function zh(t, e, n) {
    (n.props = fa(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Rt(t, e, i);
    }
  }
  function Ii(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Rt(t, e, s);
    }
  }
  function Ke(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Rt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Rt(t, e, s);
        }
      else n.current = null;
  }
  function Vh(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Rt(t, t.return, s);
    }
  }
  function Yr(t, e, n) {
    try {
      var i = t.stateNode;
      rb(i, t.type, n, e), (i[fe] = e);
    } catch (s) {
      Rt(t, t.return, s);
    }
  }
  function Nh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Hn(t.type)) ||
      t.tag === 4
    );
  }
  function kr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Nh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Hn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xr(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = qs));
    else if (
      i !== 4 &&
      (i === 27 && Hn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Xr(t, e, n), t = t.sibling; t !== null; )
        Xr(t, e, n), (t = t.sibling);
  }
  function Os(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && Hn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Os(t, e, n), t = t.sibling; t !== null; )
        Os(t, e, n), (t = t.sibling);
  }
  function jh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ee(e, i, n), (e[ae] = t), (e[fe] = n);
    } catch (u) {
      Rt(t, t.return, u);
    }
  }
  var fn = !1,
    Gt = !1,
    Zr = !1,
    _h = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function Yv(t, e) {
    if (((t = t.containerInfo), (pu = Ks), (t = Qf(t)), ko(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              g = -1,
              x = -1,
              D = 0,
              V = 0,
              j = t,
              R = null;
            e: for (;;) {
              for (
                var O;
                j !== n || (s !== 0 && j.nodeType !== 3) || (g = d + s),
                  j !== u || (i !== 0 && j.nodeType !== 3) || (x = d + i),
                  j.nodeType === 3 && (d += j.nodeValue.length),
                  (O = j.firstChild) !== null;

              )
                (R = j), (j = O);
              for (;;) {
                if (j === t) break e;
                if (
                  (R === n && ++D === s && (g = d),
                  R === u && ++V === i && (x = d),
                  (O = j.nextSibling) !== null)
                )
                  break;
                (j = R), (R = j.parentNode);
              }
              j = O;
            }
            n = g === -1 || x === -1 ? null : { start: g, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      yu = { focusedElem: t, selectionRange: n }, Ks = !1, Wt = e;
      Wt !== null;

    )
      if (
        ((e = Wt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Wt = t);
      else
        for (; Wt !== null; ) {
          switch (((e = Wt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (n = e),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = n.stateNode);
                try {
                  var at = fa(n.type, s, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(at, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (tt) {
                  Rt(n, n.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  bu(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bu(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Wt = t);
            break;
          }
          Wt = e.return;
        }
  }
  function Uh(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(t, n), i & 4 && $i(5, n);
        break;
      case 1:
        if ((Vn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Rt(n, n.return, d);
            }
          else {
            var s = fa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Rt(n, n.return, d);
            }
          }
        i & 64 && Ch(n), i & 512 && Ii(n, n.return);
        break;
      case 3:
        if ((Vn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            gd(t, e);
          } catch (d) {
            Rt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && i & 4 && jh(n);
      case 26:
      case 5:
        Vn(t, n), e === null && i & 4 && Vh(n), i & 512 && Ii(n, n.return);
        break;
      case 12:
        Vn(t, n);
        break;
      case 13:
        Vn(t, n),
          i & 4 && Hh(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Wv.bind(null, n)), pb(t, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || fn), !i)) {
          (e = (e !== null && e.memoizedState !== null) || Gt), (s = fn);
          var u = Gt;
          (fn = i),
            (Gt = e) && !u ? Nn(t, n, (n.subtreeFlags & 8772) !== 0) : Vn(t, n),
            (fn = s),
            (Gt = u);
        }
        break;
      case 30:
        break;
      default:
        Vn(t, n);
    }
  }
  function Bh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Bh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Eo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var zt = null,
    me = !1;
  function dn(t, e, n) {
    for (n = n.child; n !== null; ) Lh(t, e, n), (n = n.sibling);
  }
  function Lh(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(xi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Gt || Ke(n, e),
          dn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Ke(n, e);
        var i = zt,
          s = me;
        Hn(n.type) && ((zt = n.stateNode), (me = !1)),
          dn(t, e, n),
          rl(n.stateNode),
          (zt = i),
          (me = s);
        break;
      case 5:
        Gt || Ke(n, e);
      case 6:
        if (
          ((i = zt),
          (s = me),
          (zt = null),
          dn(t, e, n),
          (zt = i),
          (me = s),
          zt !== null)
        )
          if (me)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === "HTML"
                ? zt.ownerDocument.body
                : zt
              ).removeChild(n.stateNode);
            } catch (u) {
              Rt(n, e, u);
            }
          else
            try {
              zt.removeChild(n.stateNode);
            } catch (u) {
              Rt(n, e, u);
            }
        break;
      case 18:
        zt !== null &&
          (me
            ? ((t = zt),
              Dm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              yl(t))
            : Dm(zt, n.stateNode));
        break;
      case 4:
        (i = zt),
          (s = me),
          (zt = n.stateNode.containerInfo),
          (me = !0),
          dn(t, e, n),
          (zt = i),
          (me = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gt || zn(2, n, e), Gt || zn(4, n, e), dn(t, e, n);
        break;
      case 1:
        Gt ||
          (Ke(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && zh(n, e, i)),
          dn(t, e, n);
        break;
      case 21:
        dn(t, e, n);
        break;
      case 22:
        (Gt = (i = Gt) || n.memoizedState !== null), dn(t, e, n), (Gt = i);
        break;
      default:
        dn(t, e, n);
    }
  }
  function Hh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        yl(t);
      } catch (n) {
        Rt(e, e.return, n);
      }
  }
  function kv(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _h()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _h()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Qr(t, e) {
    var n = kv(t);
    e.forEach(function (i) {
      var s = $v.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function Te(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          u = t,
          d = e,
          g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Hn(g.type)) {
                (zt = g.stateNode), (me = !1);
                break t;
              }
              break;
            case 5:
              (zt = g.stateNode), (me = !1);
              break t;
            case 3:
            case 4:
              (zt = g.stateNode.containerInfo), (me = !0);
              break t;
          }
          g = g.return;
        }
        if (zt === null) throw Error(r(160));
        Lh(u, d, s),
          (zt = null),
          (me = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) qh(e, t), (e = e.sibling);
  }
  var Ge = null;
  function qh(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Te(e, t),
          Ae(t),
          i & 4 && (zn(3, t, t.return), $i(3, t), zn(5, t, t.return));
        break;
      case 1:
        Te(e, t),
          Ae(t),
          i & 512 && (Gt || n === null || Ke(n, n.return)),
          i & 64 &&
            fn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = Ge;
        if (
          (Te(e, t),
          Ae(t),
          i & 512 && (Gt || n === null || Ke(n, n.return)),
          i & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ai] ||
                          u[ae] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(i)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title")
                          )),
                        ee(u, i, n),
                        (u[ae] = t),
                        Jt(u),
                        (i = u);
                      break t;
                    case "link":
                      var d = jm("link", "href", s).get(i + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((u = d[g]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      (u = s.createElement(i)),
                        ee(u, i, n),
                        s.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (d = jm("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((u = d[g]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      (u = s.createElement(i)),
                        ee(u, i, n),
                        s.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (u[ae] = t), Jt(u), (i = u);
                }
                t.stateNode = i;
              } else _m(s, t.type, t.stateNode);
            else t.stateNode = Nm(s, i, t.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                i === null
                  ? _m(s, t.type, t.stateNode)
                  : Nm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Yr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Te(e, t),
          Ae(t),
          i & 512 && (Gt || n === null || Ke(n, n.return)),
          n !== null && i & 4 && Yr(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Te(e, t),
          Ae(t),
          i & 512 && (Gt || n === null || Ke(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Oa(s, "");
          } catch (O) {
            Rt(t, t.return, O);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Yr(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Zr = !0);
        break;
      case 6:
        if ((Te(e, t), Ae(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (O) {
            Rt(t, t.return, O);
          }
        }
        break;
      case 3:
        if (
          ((Xs = null),
          (s = Ge),
          (Ge = Ys(e.containerInfo)),
          Te(e, t),
          (Ge = s),
          Ae(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            yl(e.containerInfo);
          } catch (O) {
            Rt(t, t.return, O);
          }
        Zr && ((Zr = !1), Gh(t));
        break;
      case 4:
        (i = Ge),
          (Ge = Ys(t.stateNode.containerInfo)),
          Te(e, t),
          Ae(t),
          (Ge = i);
        break;
      case 12:
        Te(e, t), Ae(t);
        break;
      case 13:
        Te(e, t),
          Ae(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            ($r = Xe()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Qr(t, i)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null,
          D = fn,
          V = Gt;
        if (
          ((fn = D || s),
          (Gt = V || x),
          Te(e, t),
          (Gt = V),
          (fn = D),
          Ae(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || x || fn || Gt || da(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                x = n = e;
                try {
                  if (((u = x.stateNode), s))
                    (d = u.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    g = x.stateNode;
                    var j = x.memoizedProps.style,
                      R =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    g.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (O) {
                  Rt(x, x.return, O);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = s ? "" : x.memoizedProps;
                } catch (O) {
                  Rt(x, x.return, O);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Qr(t, n))));
        break;
      case 19:
        Te(e, t),
          Ae(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Qr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Te(e, t), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Nh(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              u = kr(t);
            Os(t, u, s);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Oa(d, ""), (n.flags &= -33));
            var g = kr(t);
            Os(t, g, d);
            break;
          case 3:
          case 4:
            var x = n.stateNode.containerInfo,
              D = kr(t);
            Xr(t, D, x);
            break;
          default:
            throw Error(r(161));
        }
      } catch (V) {
        Rt(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Gh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Gh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Uh(t, e.alternate, e), (e = e.sibling);
  }
  function da(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          zn(4, e, e.return), da(e);
          break;
        case 1:
          Ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && zh(e, e.return, n),
            da(e);
          break;
        case 27:
          rl(e.stateNode);
        case 26:
        case 5:
          Ke(e, e.return), da(e);
          break;
        case 22:
          e.memoizedState === null && da(e);
          break;
        case 30:
          da(e);
          break;
        default:
          da(e);
      }
      t = t.sibling;
    }
  }
  function Nn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        u = e,
        d = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Nn(s, u, n), $i(4, u);
          break;
        case 1:
          if (
            (Nn(s, u, n),
            (i = u),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (D) {
              Rt(i, i.return, D);
            }
          if (((i = u), (s = i.updateQueue), s !== null)) {
            var g = i.stateNode;
            try {
              var x = s.shared.hiddenCallbacks;
              if (x !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < x.length; s++)
                  yd(x[s], g);
            } catch (D) {
              Rt(i, i.return, D);
            }
          }
          n && d & 64 && Ch(u), Ii(u, u.return);
          break;
        case 27:
          jh(u);
        case 26:
        case 5:
          Nn(s, u, n), n && i === null && d & 4 && Vh(u), Ii(u, u.return);
          break;
        case 12:
          Nn(s, u, n);
          break;
        case 13:
          Nn(s, u, n), n && d & 4 && Hh(s, u);
          break;
        case 22:
          u.memoizedState === null && Nn(s, u, n), Ii(u, u.return);
          break;
        case 30:
          break;
        default:
          Nn(s, u, n);
      }
      e = e.sibling;
    }
  }
  function Kr(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Li(n));
  }
  function Pr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Li(t));
  }
  function Pe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Yh(t, e, n, i), (e = e.sibling);
  }
  function Yh(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(t, e, n, i), s & 2048 && $i(9, e);
        break;
      case 1:
        Pe(t, e, n, i);
        break;
      case 3:
        Pe(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Li(t)));
        break;
      case 12:
        if (s & 2048) {
          Pe(t, e, n, i), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              d = u.id,
              g = u.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (x) {
            Rt(e, e.return, x);
          }
        } else Pe(t, e, n, i);
        break;
      case 13:
        Pe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Pe(t, e, n, i)
              : tl(t, e)
            : u._visibility & 2
            ? Pe(t, e, n, i)
            : ((u._visibility |= 2),
              Pa(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Kr(d, e);
        break;
      case 24:
        Pe(t, e, n, i), s & 2048 && Pr(e.alternate, e);
        break;
      default:
        Pe(t, e, n, i);
    }
  }
  function Pa(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        d = e,
        g = n,
        x = i,
        D = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Pa(u, d, g, x, s), $i(8, d);
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          d.memoizedState !== null
            ? V._visibility & 2
              ? Pa(u, d, g, x, s)
              : tl(u, d)
            : ((V._visibility |= 2), Pa(u, d, g, x, s)),
            s && D & 2048 && Kr(d.alternate, d);
          break;
        case 24:
          Pa(u, d, g, x, s), s && D & 2048 && Pr(d.alternate, d);
          break;
        default:
          Pa(u, d, g, x, s);
      }
      e = e.sibling;
    }
  }
  function tl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            tl(n, i), s & 2048 && Kr(i.alternate, i);
            break;
          case 24:
            tl(n, i), s & 2048 && Pr(i.alternate, i);
            break;
          default:
            tl(n, i);
        }
        e = e.sibling;
      }
  }
  var el = 8192;
  function Ja(t) {
    if (t.subtreeFlags & el)
      for (t = t.child; t !== null; ) kh(t), (t = t.sibling);
  }
  function kh(t) {
    switch (t.tag) {
      case 26:
        Ja(t),
          t.flags & el &&
            t.memoizedState !== null &&
            wb(Ge, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ja(t);
        break;
      case 3:
      case 4:
        var e = Ge;
        (Ge = Ys(t.stateNode.containerInfo)), Ja(t), (Ge = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = el), (el = 16777216), Ja(t), (el = e))
            : Ja(t));
        break;
      default:
        Ja(t);
    }
  }
  function Xh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function nl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Wt = i), Qh(i, t);
        }
      Xh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Zh(t), (t = t.sibling);
  }
  function Zh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nl(t), t.flags & 2048 && zn(9, t, t.return);
        break;
      case 3:
        nl(t);
        break;
      case 12:
        nl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Cs(t))
          : nl(t);
        break;
      default:
        nl(t);
    }
  }
  function Cs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Wt = i), Qh(i, t);
        }
      Xh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          zn(8, e, e.return), Cs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Cs(e));
          break;
        default:
          Cs(e);
      }
      t = t.sibling;
    }
  }
  function Qh(t, e) {
    for (; Wt !== null; ) {
      var n = Wt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          zn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Li(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Wt = i);
      else
        t: for (n = t; Wt !== null; ) {
          i = Wt;
          var s = i.sibling,
            u = i.return;
          if ((Bh(i), i === n)) {
            Wt = null;
            break t;
          }
          if (s !== null) {
            (s.return = u), (Wt = s);
            break t;
          }
          Wt = u;
        }
    }
  }
  var Xv = {
      getCacheForType: function (t) {
        var e = ie(Qt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Zv = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    wt = null,
    ht = null,
    gt = 0,
    Tt = 0,
    Ee = null,
    jn = !1,
    Fa = !1,
    Jr = !1,
    hn = 0,
    Lt = 0,
    _n = 0,
    ha = 0,
    Fr = 0,
    _e = 0,
    Wa = 0,
    al = null,
    pe = null,
    Wr = !1,
    $r = 0,
    zs = 1 / 0,
    Vs = null,
    Un = null,
    te = 0,
    Bn = null,
    $a = null,
    Ia = 0,
    Ir = 0,
    tu = null,
    Kh = null,
    il = 0,
    eu = null;
  function Me() {
    if ((St & 2) !== 0 && gt !== 0) return gt & -gt;
    if (z.T !== null) {
      var t = qa;
      return t !== 0 ? t : ru();
    }
    return uf();
  }
  function Ph() {
    _e === 0 && (_e = (gt & 536870912) === 0 || xt ? lf() : 536870912);
    var t = je.current;
    return t !== null && (t.flags |= 32), _e;
  }
  function De(t, e, n) {
    ((t === wt && (Tt === 2 || Tt === 9)) || t.cancelPendingCommit !== null) &&
      (ti(t, 0), Ln(t, gt, _e, !1)),
      Ti(t, n),
      ((St & 2) === 0 || t !== wt) &&
        (t === wt &&
          ((St & 2) === 0 && (ha |= n), Lt === 4 && Ln(t, gt, _e, !1)),
        Je(t));
  }
  function Jh(t, e, n) {
    if ((St & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Si(t, e),
      s = i ? Pv(t, e) : iu(t, e, !0),
      u = i;
    do {
      if (s === 0) {
        Fa && !i && Ln(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !Qv(n))) {
          (s = iu(t, e, !1)), (u = !1);
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var d = 0;
          else
            (d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              s = al;
              var x = g.current.memoizedState.isDehydrated;
              if ((x && (ti(g, d).flags |= 256), (d = iu(g, d, !1)), d !== 2)) {
                if (Jr && !x) {
                  (g.errorRecoveryDisabledLanes |= u), (ha |= u), (s = 4);
                  break t;
                }
                (u = pe),
                  (pe = s),
                  u !== null && (pe === null ? (pe = u) : pe.push.apply(pe, u));
              }
              s = d;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          ti(t, 0), Ln(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ln(i, e, _e, !jn);
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = $r + 300 - Xe()), 10 < s)) {
            if ((Ln(i, e, _e, !jn), kl(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = Em(
              Fh.bind(null, i, n, pe, Vs, Wr, e, _e, ha, Wa, jn, u, 2, -0, 0),
              s
            );
            break t;
          }
          Fh(i, n, pe, Vs, Wr, e, _e, ha, Wa, jn, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Je(t);
  }
  function Fh(t, e, n, i, s, u, d, g, x, D, V, j, R, O) {
    if (
      ((t.timeoutHandle = -1),
      (j = e.subtreeFlags),
      (j & 8192 || (j & 16785408) === 16785408) &&
        ((fl = { stylesheets: null, count: 0, unsuspend: Rb }),
        kh(e),
        (j = Ob()),
        j !== null))
    ) {
      (t.cancelPendingCommit = j(
        am.bind(null, t, e, u, n, i, s, d, g, x, V, 1, R, O)
      )),
        Ln(t, u, d, !D);
      return;
    }
    am(t, e, u, n, i, s, d, g, x);
  }
  function Qv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!xe(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Ln(t, e, n, i) {
    (e &= ~Fr),
      (e &= ~ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var u = 31 - be(s),
        d = 1 << u;
      (i[u] = -1), (s &= ~d);
    }
    n !== 0 && of(t, n, e);
  }
  function Ns() {
    return (St & 6) === 0 ? (ll(0), !1) : !0;
  }
  function nu() {
    if (ht !== null) {
      if (Tt === 0) var t = ht.return;
      else (t = ht), (ln = oa = null), br(t), (Qa = null), (Ji = 0), (t = ht);
      for (; t !== null; ) Oh(t.alternate, t), (t = t.return);
      ht = null;
    }
  }
  function ti(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), cb(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      nu(),
      (wt = t),
      (ht = n = en(t.current, null)),
      (gt = e),
      (Tt = 0),
      (Ee = null),
      (jn = !1),
      (Fa = Si(t, e)),
      (Jr = !1),
      (Wa = _e = Fr = ha = _n = Lt = 0),
      (pe = al = null),
      (Wr = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - be(i),
          u = 1 << s;
        (e |= t[s]), (i &= ~u);
      }
    return (hn = e), es(), n;
  }
  function Wh(t, e) {
    (ut = null),
      (z.H = xs),
      e === qi || e === cs
        ? ((e = md()), (Tt = 3))
        : e === fd
        ? ((e = md()), (Tt = 4))
        : (Tt =
            e === ph
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ee = e),
      ht === null && ((Lt = 1), Ms(t, Ce(e, t.current)));
  }
  function $h() {
    var t = z.H;
    return (z.H = xs), t === null ? xs : t;
  }
  function Ih() {
    var t = z.A;
    return (z.A = Xv), t;
  }
  function au() {
    (Lt = 4),
      jn || ((gt & 4194048) !== gt && je.current !== null) || (Fa = !0),
      ((_n & 134217727) === 0 && (ha & 134217727) === 0) ||
        wt === null ||
        Ln(wt, gt, _e, !1);
  }
  function iu(t, e, n) {
    var i = St;
    St |= 2;
    var s = $h(),
      u = Ih();
    (wt !== t || gt !== e) && ((Vs = null), ti(t, e)), (e = !1);
    var d = Lt;
    t: do
      try {
        if (Tt !== 0 && ht !== null) {
          var g = ht,
            x = Ee;
          switch (Tt) {
            case 8:
              nu(), (d = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              je.current === null && (e = !0);
              var D = Tt;
              if (((Tt = 0), (Ee = null), ei(t, g, x, D), n && Fa)) {
                d = 0;
                break t;
              }
              break;
            default:
              (D = Tt), (Tt = 0), (Ee = null), ei(t, g, x, D);
          }
        }
        Kv(), (d = Lt);
        break;
      } catch (V) {
        Wh(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ln = oa = null),
      (St = i),
      (z.H = s),
      (z.A = u),
      ht === null && ((wt = null), (gt = 0), es()),
      d
    );
  }
  function Kv() {
    for (; ht !== null; ) tm(ht);
  }
  function Pv(t, e) {
    var n = St;
    St |= 2;
    var i = $h(),
      s = Ih();
    wt !== t || gt !== e
      ? ((Vs = null), (zs = Xe() + 500), ti(t, e))
      : (Fa = Si(t, e));
    t: do
      try {
        if (Tt !== 0 && ht !== null) {
          e = ht;
          var u = Ee;
          e: switch (Tt) {
            case 1:
              (Tt = 0), (Ee = null), ei(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (dd(u)) {
                (Tt = 0), (Ee = null), em(e);
                break;
              }
              (e = function () {
                (Tt !== 2 && Tt !== 9) || wt !== t || (Tt = 7), Je(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              dd(u)
                ? ((Tt = 0), (Ee = null), em(e))
                : ((Tt = 0), (Ee = null), ei(t, e, u, 7));
              break;
            case 5:
              var d = null;
              switch (ht.tag) {
                case 26:
                  d = ht.memoizedState;
                case 5:
                case 27:
                  var g = ht;
                  if (!d || Um(d)) {
                    (Tt = 0), (Ee = null);
                    var x = g.sibling;
                    if (x !== null) ht = x;
                    else {
                      var D = g.return;
                      D !== null ? ((ht = D), js(D)) : (ht = null);
                    }
                    break e;
                  }
              }
              (Tt = 0), (Ee = null), ei(t, e, u, 5);
              break;
            case 6:
              (Tt = 0), (Ee = null), ei(t, e, u, 6);
              break;
            case 8:
              nu(), (Lt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        Jv();
        break;
      } catch (V) {
        Wh(t, V);
      }
    while (!0);
    return (
      (ln = oa = null),
      (z.H = i),
      (z.A = s),
      (St = n),
      ht !== null ? 0 : ((wt = null), (gt = 0), es(), Lt)
    );
  }
  function Jv() {
    for (; ht !== null && !g0(); ) tm(ht);
  }
  function tm(t) {
    var e = Rh(t.alternate, t, hn);
    (t.memoizedProps = t.pendingProps), e === null ? js(t) : (ht = e);
  }
  function em(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Sh(n, e, e.pendingProps, e.type, void 0, gt);
        break;
      case 11:
        e = Sh(n, e, e.pendingProps, e.type.render, e.ref, gt);
        break;
      case 5:
        br(e);
      default:
        Oh(n, e), (e = ht = nd(e, hn)), (e = Rh(n, e, hn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? js(t) : (ht = e);
  }
  function ei(t, e, n, i) {
    (ln = oa = null), br(e), (Qa = null), (Ji = 0);
    var s = e.return;
    try {
      if (Lv(t, s, e, n, gt)) {
        (Lt = 1), Ms(t, Ce(n, t.current)), (ht = null);
        return;
      }
    } catch (u) {
      if (s !== null) throw ((ht = s), u);
      (Lt = 1), Ms(t, Ce(n, t.current)), (ht = null);
      return;
    }
    e.flags & 32768
      ? (xt || i === 1
          ? (t = !0)
          : Fa || (gt & 536870912) !== 0
          ? (t = !1)
          : ((jn = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = je.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        nm(e, t))
      : js(e);
  }
  function js(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        nm(e, jn);
        return;
      }
      t = e.return;
      var n = qv(e.alternate, e, hn);
      if (n !== null) {
        ht = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Lt === 0 && (Lt = 5);
  }
  function nm(t, e) {
    do {
      var n = Gv(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ht = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    (Lt = 6), (ht = null);
  }
  function am(t, e, n, i, s, u, d, g, x) {
    t.cancelPendingCommit = null;
    do _s();
    while (te !== 0);
    if ((St & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Po),
        R0(t, n, u, d, g, x),
        t === wt && ((ht = wt = null), (gt = 0)),
        ($a = e),
        (Bn = t),
        (Ia = n),
        (Ir = u),
        (tu = s),
        (Kh = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Iv(ql, function () {
              return rm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = z.T), (z.T = null), (s = H.p), (H.p = 2), (d = St), (St |= 4);
        try {
          Yv(t, e, n);
        } finally {
          (St = d), (H.p = s), (z.T = i);
        }
      }
      (te = 1), im(), lm(), sm();
    }
  }
  function im() {
    if (te === 1) {
      te = 0;
      var t = Bn,
        e = $a,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = H.p;
        H.p = 2;
        var s = St;
        St |= 4;
        try {
          qh(e, t);
          var u = yu,
            d = Qf(t.containerInfo),
            g = u.focusedElem,
            x = u.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            Zf(g.ownerDocument.documentElement, g)
          ) {
            if (x !== null && ko(g)) {
              var D = x.start,
                V = x.end;
              if ((V === void 0 && (V = D), "selectionStart" in g))
                (g.selectionStart = D),
                  (g.selectionEnd = Math.min(V, g.value.length));
              else {
                var j = g.ownerDocument || document,
                  R = (j && j.defaultView) || window;
                if (R.getSelection) {
                  var O = R.getSelection(),
                    at = g.textContent.length,
                    tt = Math.min(x.start, at),
                    Mt = x.end === void 0 ? tt : Math.min(x.end, at);
                  !O.extend && tt > Mt && ((d = Mt), (Mt = tt), (tt = d));
                  var E = Xf(g, tt),
                    T = Xf(g, Mt);
                  if (
                    E &&
                    T &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== E.node ||
                      O.anchorOffset !== E.offset ||
                      O.focusNode !== T.node ||
                      O.focusOffset !== T.offset)
                  ) {
                    var M = j.createRange();
                    M.setStart(E.node, E.offset),
                      O.removeAllRanges(),
                      tt > Mt
                        ? (O.addRange(M), O.extend(T.node, T.offset))
                        : (M.setEnd(T.node, T.offset), O.addRange(M));
                  }
                }
              }
            }
            for (j = [], O = g; (O = O.parentNode); )
              O.nodeType === 1 &&
                j.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < j.length;
              g++
            ) {
              var N = j[g];
              (N.element.scrollLeft = N.left), (N.element.scrollTop = N.top);
            }
          }
          (Ks = !!pu), (yu = pu = null);
        } finally {
          (St = s), (H.p = i), (z.T = n);
        }
      }
      (t.current = e), (te = 2);
    }
  }
  function lm() {
    if (te === 2) {
      te = 0;
      var t = Bn,
        e = $a,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = H.p;
        H.p = 2;
        var s = St;
        St |= 4;
        try {
          Uh(t, e.alternate, e);
        } finally {
          (St = s), (H.p = i), (z.T = n);
        }
      }
      te = 3;
    }
  }
  function sm() {
    if (te === 4 || te === 3) {
      (te = 0), v0();
      var t = Bn,
        e = $a,
        n = Ia,
        i = Kh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (te = 5)
        : ((te = 0), ($a = Bn = null), om(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Un = null),
        To(n),
        (e = e.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(xi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (e = z.T), (s = H.p), (H.p = 2), (z.T = null);
        try {
          for (var u = t.onRecoverableError, d = 0; d < i.length; d++) {
            var g = i[d];
            u(g.value, { componentStack: g.stack });
          }
        } finally {
          (z.T = e), (H.p = s);
        }
      }
      (Ia & 3) !== 0 && _s(),
        Je(t),
        (s = t.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? t === eu
            ? il++
            : ((il = 0), (eu = t))
          : (il = 0),
        ll(0);
    }
  }
  function om(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Li(e)));
  }
  function _s(t) {
    return im(), lm(), sm(), rm();
  }
  function rm() {
    if (te !== 5) return !1;
    var t = Bn,
      e = Ir;
    Ir = 0;
    var n = To(Ia),
      i = z.T,
      s = H.p;
    try {
      (H.p = 32 > n ? 32 : n), (z.T = null), (n = tu), (tu = null);
      var u = Bn,
        d = Ia;
      if (((te = 0), ($a = Bn = null), (Ia = 0), (St & 6) !== 0))
        throw Error(r(331));
      var g = St;
      if (
        ((St |= 4),
        Zh(u.current),
        Yh(u, u.current, d, n),
        (St = g),
        ll(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(xi, u);
        } catch {}
      return !0;
    } finally {
      (H.p = s), (z.T = i), om(t, e);
    }
  }
  function um(t, e, n) {
    (e = Ce(n, e)),
      (e = Nr(t.stateNode, e, 2)),
      (t = Rn(t, e, 2)),
      t !== null && (Ti(t, 2), Je(t));
  }
  function Rt(t, e, n) {
    if (t.tag === 3) um(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          um(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Un === null || !Un.has(i)))
          ) {
            (t = Ce(n, t)),
              (n = hh(2)),
              (i = Rn(e, n, 2)),
              i !== null && (mh(n, i, e, t), Ti(i, 2), Je(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function lu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Zv();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((Jr = !0), s.add(n), (t = Fv.bind(null, t, e, n)), e.then(t, t));
  }
  function Fv(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      wt === t &&
        (gt & n) === n &&
        (Lt === 4 || (Lt === 3 && (gt & 62914560) === gt && 300 > Xe() - $r)
          ? (St & 2) === 0 && ti(t, 0)
          : (Fr |= n),
        Wa === gt && (Wa = 0)),
      Je(t);
  }
  function cm(t, e) {
    e === 0 && (e = sf()), (t = Ua(t, e)), t !== null && (Ti(t, e), Je(t));
  }
  function Wv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), cm(t, n);
  }
  function $v(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), cm(t, n);
  }
  function Iv(t, e) {
    return vo(t, e);
  }
  var Us = null,
    ni = null,
    su = !1,
    Bs = !1,
    ou = !1,
    ma = 0;
  function Je(t) {
    t !== ni &&
      t.next === null &&
      (ni === null ? (Us = ni = t) : (ni = ni.next = t)),
      (Bs = !0),
      su || ((su = !0), eb());
  }
  function ll(t, e) {
    if (!ou && Bs) {
      ou = !0;
      do
        for (var n = !1, i = Us; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var d = i.suspendedLanes,
                g = i.pingedLanes;
              (u = (1 << (31 - be(42 | t) + 1)) - 1),
                (u &= s & ~(d & ~g)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), mm(i, u));
          } else
            (u = gt),
              (u = kl(
                i,
                i === wt ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Si(i, u) || ((n = !0), mm(i, u));
          i = i.next;
        }
      while (n);
      ou = !1;
    }
  }
  function tb() {
    fm();
  }
  function fm() {
    Bs = su = !1;
    var t = 0;
    ma !== 0 && (ub() && (t = ma), (ma = 0));
    for (var e = Xe(), n = null, i = Us; i !== null; ) {
      var s = i.next,
        u = dm(i, e);
      u === 0
        ? ((i.next = null),
          n === null ? (Us = s) : (n.next = s),
          s === null && (ni = n))
        : ((n = i), (t !== 0 || (u & 3) !== 0) && (Bs = !0)),
        (i = s);
    }
    ll(t);
  }
  function dm(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var d = 31 - be(u),
        g = 1 << d,
        x = s[d];
      x === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (s[d] = D0(g, e))
        : x <= e && (t.expiredLanes |= g),
        (u &= ~g);
    }
    if (
      ((e = wt),
      (n = gt),
      (n = kl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (Tt === 2 || Tt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && bo(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Si(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && bo(i), To(n))) {
        case 2:
        case 8:
          n = nf;
          break;
        case 32:
          n = ql;
          break;
        case 268435456:
          n = af;
          break;
        default:
          n = ql;
      }
      return (
        (i = hm.bind(null, t)),
        (n = vo(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && bo(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function hm(t, e) {
    if (te !== 0 && te !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (_s() && t.callbackNode !== n) return null;
    var i = gt;
    return (
      (i = kl(
        t,
        t === wt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (Jh(t, i, e),
          dm(t, Xe()),
          t.callbackNode != null && t.callbackNode === n
            ? hm.bind(null, t)
            : null)
    );
  }
  function mm(t, e) {
    if (_s()) return null;
    Jh(t, e, !0);
  }
  function eb() {
    fb(function () {
      (St & 6) !== 0 ? vo(ef, tb) : fm();
    });
  }
  function ru() {
    return ma === 0 && (ma = lf()), ma;
  }
  function pm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Pl("" + t);
  }
  function ym(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function nb(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = pm((s[fe] || null).action),
        d = i.submitter;
      d &&
        ((e = (e = d[fe] || null)
          ? pm(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((u = e), (d = null)));
      var g = new $l("action", "action", null, i, s);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (ma !== 0) {
                  var x = d ? ym(s, d) : new FormData(s);
                  wr(
                    n,
                    { pending: !0, data: x, method: s.method, action: u },
                    null,
                    x
                  );
                }
              } else
                typeof u == "function" &&
                  (g.preventDefault(),
                  (x = d ? ym(s, d) : new FormData(s)),
                  wr(
                    n,
                    { pending: !0, data: x, method: s.method, action: u },
                    u,
                    x
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var uu = 0; uu < Ko.length; uu++) {
    var cu = Ko[uu],
      ab = cu.toLowerCase(),
      ib = cu[0].toUpperCase() + cu.slice(1);
    qe(ab, "on" + ib);
  }
  qe(Jf, "onAnimationEnd"),
    qe(Ff, "onAnimationIteration"),
    qe(Wf, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(Sv, "onTransitionRun"),
    qe(Tv, "onTransitionStart"),
    qe(Av, "onTransitionCancel"),
    qe($f, "onTransitionEnd"),
    Da("onMouseEnter", ["mouseout", "mouseover"]),
    Da("onMouseLeave", ["mouseout", "mouseover"]),
    Da("onPointerEnter", ["pointerout", "pointerover"]),
    Da("onPointerLeave", ["pointerout", "pointerover"]),
    $n(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    $n(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $n(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    $n(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    $n(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var sl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    lb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(sl)
    );
  function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var d = i.length - 1; 0 <= d; d--) {
            var g = i[d],
              x = g.instance,
              D = g.currentTarget;
            if (((g = g.listener), x !== u && s.isPropagationStopped()))
              break t;
            (u = g), (s.currentTarget = D);
            try {
              u(s);
            } catch (V) {
              Es(V);
            }
            (s.currentTarget = null), (u = x);
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((g = i[d]),
              (x = g.instance),
              (D = g.currentTarget),
              (g = g.listener),
              x !== u && s.isPropagationStopped())
            )
              break t;
            (u = g), (s.currentTarget = D);
            try {
              u(s);
            } catch (V) {
              Es(V);
            }
            (s.currentTarget = null), (u = x);
          }
      }
    }
  }
  function mt(t, e) {
    var n = e[Ao];
    n === void 0 && (n = e[Ao] = new Set());
    var i = t + "__bubble";
    n.has(i) || (vm(e, t, 2, !1), n.add(i));
  }
  function fu(t, e, n) {
    var i = 0;
    e && (i |= 4), vm(n, t, i, e);
  }
  var Ls = "_reactListening" + Math.random().toString(36).slice(2);
  function du(t) {
    if (!t[Ls]) {
      (t[Ls] = !0),
        ff.forEach(function (n) {
          n !== "selectionchange" && (lb.has(n) || fu(n, !1, t), fu(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ls] || ((e[Ls] = !0), fu("selectionchange", !1, e));
    }
  }
  function vm(t, e, n, i) {
    switch (Ym(e)) {
      case 2:
        var s = Vb;
        break;
      case 8:
        s = Nb;
        break;
      default:
        s = Du;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !jo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function hu(t, e, n, i, s) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === s)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Aa(g)), d === null)) return;
            if (((x = d.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              i = u = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Mf(function () {
      var D = u,
        V = Vo(n),
        j = [];
      t: {
        var R = If.get(t);
        if (R !== void 0) {
          var O = $l,
            at = t;
          switch (t) {
            case "keypress":
              if (Fl(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = I0;
              break;
            case "focusin":
              (at = "focus"), (O = Lo);
              break;
            case "focusout":
              (at = "blur"), (O = Lo);
              break;
            case "beforeblur":
            case "afterblur":
              O = Lo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = G0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = nv;
              break;
            case Jf:
            case Ff:
            case Wf:
              O = X0;
              break;
            case $f:
              O = iv;
              break;
            case "scroll":
            case "scrollend":
              O = H0;
              break;
            case "wheel":
              O = sv;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Q0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Cf;
              break;
            case "toggle":
            case "beforetoggle":
              O = rv;
          }
          var tt = (e & 4) !== 0,
            Mt = !tt && (t === "scroll" || t === "scrollend"),
            E = tt ? (R !== null ? R + "Capture" : null) : R;
          tt = [];
          for (var T = D, M; T !== null; ) {
            var N = T;
            if (
              ((M = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                M === null ||
                E === null ||
                ((N = Mi(T, E)), N != null && tt.push(ol(T, N, M))),
              Mt)
            )
              break;
            T = T.return;
          }
          0 < tt.length &&
            ((R = new O(R, at, null, n, V)),
            j.push({ event: R, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            R &&
              n !== zo &&
              (at = n.relatedTarget || n.fromElement) &&
              (Aa(at) || at[Ta]))
          )
            break t;
          if (
            (O || R) &&
            ((R =
              V.window === V
                ? V
                : (R = V.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            O
              ? ((at = n.relatedTarget || n.toElement),
                (O = D),
                (at = at ? Aa(at) : null),
                at !== null &&
                  ((Mt = h(at)),
                  (tt = at.tag),
                  at !== Mt || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (at = null))
              : ((O = null), (at = D)),
            O !== at)
          ) {
            if (
              ((tt = wf),
              (N = "onMouseLeave"),
              (E = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = Cf),
                (N = "onPointerLeave"),
                (E = "onPointerEnter"),
                (T = "pointer")),
              (Mt = O == null ? R : Ei(O)),
              (M = at == null ? R : Ei(at)),
              (R = new tt(N, T + "leave", O, n, V)),
              (R.target = Mt),
              (R.relatedTarget = M),
              (N = null),
              Aa(V) === D &&
                ((tt = new tt(E, T + "enter", at, n, V)),
                (tt.target = M),
                (tt.relatedTarget = Mt),
                (N = tt)),
              (Mt = N),
              O && at)
            )
              e: {
                for (tt = O, E = at, T = 0, M = tt; M; M = ai(M)) T++;
                for (M = 0, N = E; N; N = ai(N)) M++;
                for (; 0 < T - M; ) (tt = ai(tt)), T--;
                for (; 0 < M - T; ) (E = ai(E)), M--;
                for (; T--; ) {
                  if (tt === E || (E !== null && tt === E.alternate)) break e;
                  (tt = ai(tt)), (E = ai(E));
                }
                tt = null;
              }
            else tt = null;
            O !== null && bm(j, R, O, tt, !1),
              at !== null && Mt !== null && bm(j, Mt, at, tt, !0);
          }
        }
        t: {
          if (
            ((R = D ? Ei(D) : window),
            (O = R.nodeName && R.nodeName.toLowerCase()),
            O === "select" || (O === "input" && R.type === "file"))
          )
            var J = Lf;
          else if (Uf(R))
            if (Hf) J = vv;
            else {
              J = yv;
              var ft = pv;
            }
          else
            (O = R.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? D && Co(D.elementType) && (J = Lf)
                : (J = gv);
          if (J && (J = J(t, D))) {
            Bf(j, J, n, V);
            break t;
          }
          ft && ft(t, R, D),
            t === "focusout" &&
              D &&
              R.type === "number" &&
              D.memoizedProps.value != null &&
              Oo(R, "number", R.value);
        }
        switch (((ft = D ? Ei(D) : window), t)) {
          case "focusin":
            (Uf(ft) || ft.contentEditable === "true") &&
              ((Na = ft), (Xo = D), (Ni = null));
            break;
          case "focusout":
            Ni = Xo = Na = null;
            break;
          case "mousedown":
            Zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zo = !1), Kf(j, n, V);
            break;
          case "selectionchange":
            if (xv) break;
          case "keydown":
          case "keyup":
            Kf(j, n, V);
        }
        var I;
        if (qo)
          t: {
            switch (t) {
              case "compositionstart":
                var et = "onCompositionStart";
                break t;
              case "compositionend":
                et = "onCompositionEnd";
                break t;
              case "compositionupdate":
                et = "onCompositionUpdate";
                break t;
            }
            et = void 0;
          }
        else
          Va
            ? jf(t, n) && (et = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (et = "onCompositionStart");
        et &&
          (zf &&
            n.locale !== "ko" &&
            (Va || et !== "onCompositionStart"
              ? et === "onCompositionEnd" && Va && (I = Df())
              : ((An = V),
                (_o = "value" in An ? An.value : An.textContent),
                (Va = !0))),
          (ft = Hs(D, et)),
          0 < ft.length &&
            ((et = new Of(et, t, null, n, V)),
            j.push({ event: et, listeners: ft }),
            I ? (et.data = I) : ((I = _f(n)), I !== null && (et.data = I)))),
          (I = cv ? fv(t, n) : dv(t, n)) &&
            ((et = Hs(D, "onBeforeInput")),
            0 < et.length &&
              ((ft = new Of("onBeforeInput", "beforeinput", null, n, V)),
              j.push({ event: ft, listeners: et }),
              (ft.data = I))),
          nb(j, t, D, n, V);
      }
      gm(j, e);
    });
  }
  function ol(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Hs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = Mi(t, n)),
          s != null && i.unshift(ol(t, s, u)),
          (s = Mi(t, e)),
          s != null && i.push(ol(t, s, u))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function ai(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function bm(t, e, n, i, s) {
    for (var u = e._reactName, d = []; n !== null && n !== i; ) {
      var g = n,
        x = g.alternate,
        D = g.stateNode;
      if (((g = g.tag), x !== null && x === i)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        D === null ||
        ((x = D),
        s
          ? ((D = Mi(n, u)), D != null && d.unshift(ol(n, D, x)))
          : s || ((D = Mi(n, u)), D != null && d.push(ol(n, D, x)))),
        (n = n.return);
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var sb = /\r\n?/g,
    ob = /\u0000|\uFFFD/g;
  function xm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        sb,
        `
`
      )
      .replace(ob, "");
  }
  function Sm(t, e) {
    return (e = xm(e)), xm(t) === e;
  }
  function qs() {}
  function Et(t, e, n, i, s, u) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Oa(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Oa(t, "" + i);
        break;
      case "className":
        Zl(t, "class", i);
        break;
      case "tabIndex":
        Zl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zl(t, n, i);
        break;
      case "style":
        Af(t, i, u);
        break;
      case "data":
        if (e !== "object") {
          Zl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = Pl("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Et(t, e, "name", s.name, s, null),
                Et(t, e, "formEncType", s.formEncType, s, null),
                Et(t, e, "formMethod", s.formMethod, s, null),
                Et(t, e, "formTarget", s.formTarget, s, null))
              : (Et(t, e, "encType", s.encType, s, null),
                Et(t, e, "method", s.method, s, null),
                Et(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = Pl("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = qs);
        break;
      case "onScroll":
        i != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Pl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        mt("beforetoggle", t), mt("toggle", t), Xl(t, "popover", i);
        break;
      case "xlinkActuate":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Xl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = B0.get(n) || n), Xl(t, n, i));
    }
  }
  function mu(t, e, n, i, s, u) {
    switch (n) {
      case "style":
        Af(t, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Oa(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Oa(t, "" + i);
        break;
      case "onScroll":
        i != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && mt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = qs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!df.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (u = t[fe] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, s),
              typeof i == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : Xl(t, n, i);
          }
    }
  }
  function ee(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        mt("error", t), mt("load", t);
        var i = !1,
          s = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var d = n[u];
            if (d != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Et(t, e, u, d, n, null);
              }
          }
        s && Et(t, e, "srcSet", n.srcSet, n, null),
          i && Et(t, e, "src", n.src, n, null);
        return;
      case "input":
        mt("invalid", t);
        var g = (u = d = s = null),
          x = null,
          D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  s = V;
                  break;
                case "type":
                  d = V;
                  break;
                case "checked":
                  x = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  g = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(r(137, e));
                  break;
                default:
                  Et(t, e, i, V, n, null);
              }
          }
        bf(t, u, g, x, D, d, s, !1), Ql(t);
        return;
      case "select":
        mt("invalid", t), (i = d = u = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                u = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                i = g;
              default:
                Et(t, e, s, g, n, null);
            }
        (e = u),
          (n = d),
          (t.multiple = !!i),
          e != null ? wa(t, !!i, e, !1) : n != null && wa(t, !!i, n, !0);
        return;
      case "textarea":
        mt("invalid", t), (u = s = i = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Et(t, e, d, g, n, null);
            }
        Sf(t, i, s, u), Ql(t);
        return;
      case "option":
        for (x in n)
          if (n.hasOwnProperty(x) && ((i = n[x]), i != null))
            switch (x) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Et(t, e, x, i, n, null);
            }
        return;
      case "dialog":
        mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t);
        break;
      case "iframe":
      case "object":
        mt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < sl.length; i++) mt(sl[i], t);
        break;
      case "image":
        mt("error", t), mt("load", t);
        break;
      case "details":
        mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        mt("error", t), mt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((i = n[D]), i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Et(t, e, D, i, n, null);
            }
        return;
      default:
        if (Co(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((i = n[V]), i !== void 0 && mu(t, e, V, i, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((i = n[g]), i != null && Et(t, e, g, i, n, null));
  }
  function rb(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          d = null,
          g = null,
          x = null,
          D = null,
          V = null;
        for (O in n) {
          var j = n[O];
          if (n.hasOwnProperty(O) && j != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = j;
              default:
                i.hasOwnProperty(O) || Et(t, e, O, null, i, j);
            }
        }
        for (var R in i) {
          var O = i[R];
          if (((j = n[R]), i.hasOwnProperty(R) && (O != null || j != null)))
            switch (R) {
              case "type":
                u = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                D = O;
                break;
              case "defaultChecked":
                V = O;
                break;
              case "value":
                d = O;
                break;
              case "defaultValue":
                g = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                O !== j && Et(t, e, R, O, i, j);
            }
        }
        wo(t, d, g, x, D, V, u, s);
        return;
      case "select":
        O = d = g = R = null;
        for (u in n)
          if (((x = n[u]), n.hasOwnProperty(u) && x != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = x;
              default:
                i.hasOwnProperty(u) || Et(t, e, u, null, i, x);
            }
        for (s in i)
          if (
            ((u = i[s]),
            (x = n[s]),
            i.hasOwnProperty(s) && (u != null || x != null))
          )
            switch (s) {
              case "value":
                R = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "multiple":
                d = u;
              default:
                u !== x && Et(t, e, s, u, i, x);
            }
        (e = g),
          (n = d),
          (i = O),
          R != null
            ? wa(t, !!n, R, !1)
            : !!i != !!n &&
              (e != null ? wa(t, !!n, e, !0) : wa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = R = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, g, null, i, s);
            }
        for (d in i)
          if (
            ((s = i[d]),
            (u = n[d]),
            i.hasOwnProperty(d) && (s != null || u != null))
          )
            switch (d) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Et(t, e, d, s, i, u);
            }
        xf(t, R, O);
        return;
      case "option":
        for (var at in n)
          if (
            ((R = n[at]),
            n.hasOwnProperty(at) && R != null && !i.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Et(t, e, at, null, i, R);
            }
        for (x in i)
          if (
            ((R = i[x]),
            (O = n[x]),
            i.hasOwnProperty(x) && R !== O && (R != null || O != null))
          )
            switch (x) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                Et(t, e, x, R, i, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in n)
          (R = n[tt]),
            n.hasOwnProperty(tt) &&
              R != null &&
              !i.hasOwnProperty(tt) &&
              Et(t, e, tt, null, i, R);
        for (D in i)
          if (
            ((R = i[D]),
            (O = n[D]),
            i.hasOwnProperty(D) && R !== O && (R != null || O != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(r(137, e));
                break;
              default:
                Et(t, e, D, R, i, O);
            }
        return;
      default:
        if (Co(e)) {
          for (var Mt in n)
            (R = n[Mt]),
              n.hasOwnProperty(Mt) &&
                R !== void 0 &&
                !i.hasOwnProperty(Mt) &&
                mu(t, e, Mt, void 0, i, R);
          for (V in i)
            (R = i[V]),
              (O = n[V]),
              !i.hasOwnProperty(V) ||
                R === O ||
                (R === void 0 && O === void 0) ||
                mu(t, e, V, R, i, O);
          return;
        }
    }
    for (var E in n)
      (R = n[E]),
        n.hasOwnProperty(E) &&
          R != null &&
          !i.hasOwnProperty(E) &&
          Et(t, e, E, null, i, R);
    for (j in i)
      (R = i[j]),
        (O = n[j]),
        !i.hasOwnProperty(j) ||
          R === O ||
          (R == null && O == null) ||
          Et(t, e, j, R, i, O);
  }
  var pu = null,
    yu = null;
  function Gs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Tm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function gu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vu = null;
  function ub() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vu
        ? !1
        : ((vu = t), !0)
      : ((vu = null), !1);
  }
  var Em = typeof setTimeout == "function" ? setTimeout : void 0,
    cb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mm = typeof Promise == "function" ? Promise : void 0,
    fb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Mm < "u"
        ? function (t) {
            return Mm.resolve(null).then(t).catch(db);
          }
        : Em;
  function db(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function Dm(t, e) {
    var n = e,
      i = 0,
      s = 0;
    do {
      var u = n.nextSibling;
      if ((t.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var d = t.ownerDocument;
            if ((n & 1 && rl(d.documentElement), n & 2 && rl(d.body), n & 4))
              for (n = d.head, rl(n), d = n.firstChild; d; ) {
                var g = d.nextSibling,
                  x = d.nodeName;
                d[Ai] ||
                  x === "SCRIPT" ||
                  x === "STYLE" ||
                  (x === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(d),
                  (d = g);
              }
          }
          if (s === 0) {
            t.removeChild(u), yl(e);
            return;
          }
          s--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? s++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = u;
    } while (n);
    yl(e);
  }
  function bu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bu(n), Eo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function hb(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[Ai])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function mb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function pb(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var i = function () {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Su = null;
  function Rm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wm(t, e, n) {
    switch (((e = Gs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function rl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Eo(t);
  }
  var Ue = new Map(),
    Om = new Set();
  function Ys(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var mn = H.d;
  H.d = { f: yb, r: gb, D: vb, C: bb, L: xb, m: Sb, X: Ab, S: Tb, M: Eb };
  function yb() {
    var t = mn.f(),
      e = Ns();
    return t || e;
  }
  function gb(t) {
    var e = Ea(t);
    e !== null && e.tag === 5 && e.type === "form" ? Jd(e) : mn.r(t);
  }
  var ii = typeof document > "u" ? null : document;
  function Cm(t, e, n) {
    var i = ii;
    if (i && typeof e == "string" && e) {
      var s = Oe(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Om.has(s) ||
          (Om.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            ee(e, "link", t),
            Jt(e),
            i.head.appendChild(e)));
    }
  }
  function vb(t) {
    mn.D(t), Cm("dns-prefetch", t, null);
  }
  function bb(t, e) {
    mn.C(t, e), Cm("preconnect", t, e);
  }
  function xb(t, e, n) {
    mn.L(t, e, n);
    var i = ii;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Oe(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Oe(n.imageSizes) + '"]'))
        : (s += '[href="' + Oe(t) + '"]');
      var u = s;
      switch (e) {
        case "style":
          u = li(t);
          break;
        case "script":
          u = si(t);
      }
      Ue.has(u) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ue.set(u, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(ul(u))) ||
          (e === "script" && i.querySelector(cl(u))) ||
          ((e = i.createElement("link")),
          ee(e, "link", t),
          Jt(e),
          i.head.appendChild(e)));
    }
  }
  function Sb(t, e) {
    mn.m(t, e);
    var n = ii;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Oe(i) + '"][href="' + Oe(t) + '"]',
        u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = si(t);
      }
      if (
        !Ue.has(u) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        Ue.set(u, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(cl(u))) return;
        }
        (i = n.createElement("link")),
          ee(i, "link", t),
          Jt(i),
          n.head.appendChild(i);
      }
    }
  }
  function Tb(t, e, n) {
    mn.S(t, e, n);
    var i = ii;
    if (i && t) {
      var s = Ma(i).hoistableStyles,
        u = li(t);
      e = e || "default";
      var d = s.get(u);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = i.querySelector(ul(u)))) g.loading = 5;
        else {
          (t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ue.get(u)) && Tu(t, n);
          var x = (d = i.createElement("link"));
          Jt(x),
            ee(x, "link", t),
            (x._p = new Promise(function (D, V) {
              (x.onload = D), (x.onerror = V);
            })),
            x.addEventListener("load", function () {
              g.loading |= 1;
            }),
            x.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            ks(d, e, i);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: g }),
          s.set(u, d);
      }
    }
  }
  function Ab(t, e) {
    mn.X(t, e);
    var n = ii;
    if (n && t) {
      var i = Ma(n).hoistableScripts,
        s = si(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector(cl(s))),
        u ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = Ue.get(s)) && Au(t, e),
          (u = n.createElement("script")),
          Jt(u),
          ee(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function Eb(t, e) {
    mn.M(t, e);
    var n = ii;
    if (n && t) {
      var i = Ma(n).hoistableScripts,
        s = si(t),
        u = i.get(s);
      u ||
        ((u = n.querySelector(cl(s))),
        u ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = Ue.get(s)) && Au(t, e),
          (u = n.createElement("script")),
          Jt(u),
          ee(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function zm(t, e, n, i) {
    var s = (s = st.current) ? Ys(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = li(n.href)),
            (n = Ma(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = li(n.href);
          var u = Ma(s).hoistableStyles,
            d = u.get(t);
          if (
            (d ||
              ((s = s.ownerDocument || s),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, d),
              (u = s.querySelector(ul(t))) &&
                !u._p &&
                ((d.instance = u), (d.state.loading = 5)),
              Ue.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ue.set(t, n),
                u || Mb(s, t, n, d.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return d;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = si(n)),
              (n = Ma(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function li(t) {
    return 'href="' + Oe(t) + '"';
  }
  function ul(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Vm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Mb(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        ee(e, "link", n),
        Jt(e),
        t.head.appendChild(e));
  }
  function si(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function cl(t) {
    return "script[async]" + t;
  }
  function Nm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Oe(n.href) + '"]');
          if (i) return (e.instance = i), Jt(i), i;
          var s = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Jt(i),
            ee(i, "style", s),
            ks(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = li(n.href);
          var u = t.querySelector(ul(s));
          if (u) return (e.state.loading |= 4), (e.instance = u), Jt(u), u;
          (i = Vm(n)),
            (s = Ue.get(s)) && Tu(i, s),
            (u = (t.ownerDocument || t).createElement("link")),
            Jt(u);
          var d = u;
          return (
            (d._p = new Promise(function (g, x) {
              (d.onload = g), (d.onerror = x);
            })),
            ee(u, "link", i),
            (e.state.loading |= 4),
            ks(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = si(n.src)),
            (s = t.querySelector(cl(u)))
              ? ((e.instance = s), Jt(s), s)
              : ((i = n),
                (s = Ue.get(u)) && ((i = v({}, n)), Au(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Jt(s),
                ee(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), ks(i, n.precedence, t));
    return e.instance;
  }
  function ks(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        u = s,
        d = 0;
      d < i.length;
      d++
    ) {
      var g = i[d];
      if (g.dataset.precedence === e) u = g;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Tu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Au(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xs = null;
  function jm(t, e, n) {
    if (Xs === null) {
      var i = new Map(),
        s = (Xs = new Map());
      s.set(n, i);
    } else (s = Xs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var u = n[s];
      if (
        !(
          u[Ai] ||
          u[ae] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = u.getAttribute(e) || "";
        d = t + d;
        var g = i.get(d);
        g ? g.push(u) : i.set(d, [u]);
      }
    }
    return i;
  }
  function _m(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Db(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Um(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var fl = null;
  function Rb() {}
  function wb(t, e, n) {
    if (fl === null) throw Error(r(475));
    var i = fl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = li(n.href),
          u = t.querySelector(ul(s));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Zs.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = u),
            Jt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (n = Vm(n)),
          (s = Ue.get(s)) && Tu(n, s),
          (u = u.createElement("link")),
          Jt(u);
        var d = u;
        (d._p = new Promise(function (g, x) {
          (d.onload = g), (d.onerror = x);
        })),
          ee(u, "link", n),
          (e.instance = u);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Zs.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Ob() {
    if (fl === null) throw Error(r(475));
    var t = fl;
    return (
      t.stylesheets && t.count === 0 && Eu(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Eu(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Zs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Eu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Qs = null;
  function Eu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qs = new Map()),
        e.forEach(Cb, t),
        (Qs = null),
        Zs.call(t));
  }
  function Cb(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Qs.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), Qs.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var d = s[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (i = d));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (d = s.getAttribute("data-precedence")),
        (u = n.get(d) || i),
        u === i && n.set(null, s),
        n.set(d, s),
        this.count++,
        (i = Zs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var dl = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: _,
    _currentValue2: _,
    _threadCount: 0,
  };
  function zb(t, e, n, i, s, u, d, g) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xo(0)),
      (this.hiddenUpdates = xo(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function Bm(t, e, n, i, s, u, d, g, x, D, V, j) {
    return (
      (t = new zb(t, e, n, d, g, x, D, j)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Se(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = lr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: i, isDehydrated: n, cache: e }),
      ur(u),
      t
    );
  }
  function Lm(t) {
    return t ? ((t = Ba), t) : Ba;
  }
  function Hm(t, e, n, i, s, u) {
    (s = Lm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Dn(e)),
      (i.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (n = Rn(t, i, e)),
      n !== null && (De(n, t, e), Yi(n, t, e));
  }
  function qm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Mu(t, e) {
    qm(t, e), (t = t.alternate) && qm(t, e);
  }
  function Gm(t) {
    if (t.tag === 13) {
      var e = Ua(t, 67108864);
      e !== null && De(e, t, 67108864), Mu(t, 67108864);
    }
  }
  var Ks = !0;
  function Vb(t, e, n, i) {
    var s = z.T;
    z.T = null;
    var u = H.p;
    try {
      (H.p = 2), Du(t, e, n, i);
    } finally {
      (H.p = u), (z.T = s);
    }
  }
  function Nb(t, e, n, i) {
    var s = z.T;
    z.T = null;
    var u = H.p;
    try {
      (H.p = 8), Du(t, e, n, i);
    } finally {
      (H.p = u), (z.T = s);
    }
  }
  function Du(t, e, n, i) {
    if (Ks) {
      var s = Ru(i);
      if (s === null) hu(t, e, i, Ps, n), km(t, i);
      else if (_b(s, t, e, n, i)) i.stopPropagation();
      else if ((km(t, i), e & 4 && -1 < jb.indexOf(t))) {
        for (; s !== null; ) {
          var u = Ea(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var d = Wn(u.pendingLanes);
                  if (d !== 0) {
                    var g = u;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var x = 1 << (31 - be(d));
                      (g.entanglements[1] |= x), (d &= ~x);
                    }
                    Je(u), (St & 6) === 0 && ((zs = Xe() + 500), ll(0));
                  }
                }
                break;
              case 13:
                (g = Ua(u, 2)), g !== null && De(g, u, 2), Ns(), Mu(u, 2);
            }
          if (((u = Ru(i)), u === null && hu(t, e, i, Ps, n), u === s)) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else hu(t, e, i, null, n);
    }
  }
  function Ru(t) {
    return (t = Vo(t)), wu(t);
  }
  var Ps = null;
  function wu(t) {
    if (((Ps = null), (t = Aa(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ps = t), null;
  }
  function Ym(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (b0()) {
          case ef:
            return 2;
          case nf:
            return 8;
          case ql:
          case x0:
            return 32;
          case af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ou = !1,
    qn = null,
    Gn = null,
    Yn = null,
    hl = new Map(),
    ml = new Map(),
    kn = [],
    jb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function km(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        hl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(e.pointerId);
    }
  }
  function pl(t, e, n, i, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = Ea(e)), e !== null && Gm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function _b(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (qn = pl(qn, t, e, n, i, s)), !0;
      case "dragenter":
        return (Gn = pl(Gn, t, e, n, i, s)), !0;
      case "mouseover":
        return (Yn = pl(Yn, t, e, n, i, s)), !0;
      case "pointerover":
        var u = s.pointerId;
        return hl.set(u, pl(hl.get(u) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (u = s.pointerId), ml.set(u, pl(ml.get(u) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function Xm(t) {
    var e = Aa(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            (t.blockedOn = e),
              w0(t.priority, function () {
                if (n.tag === 13) {
                  var i = Me();
                  i = So(i);
                  var s = Ua(n, i);
                  s !== null && De(s, n, i), Mu(n, i);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Js(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ru(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (zo = i), n.target.dispatchEvent(i), (zo = null);
      } else return (e = Ea(n)), e !== null && Gm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Zm(t, e, n) {
    Js(t) && n.delete(e);
  }
  function Ub() {
    (Ou = !1),
      qn !== null && Js(qn) && (qn = null),
      Gn !== null && Js(Gn) && (Gn = null),
      Yn !== null && Js(Yn) && (Yn = null),
      hl.forEach(Zm),
      ml.forEach(Zm);
  }
  function Fs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Ou ||
        ((Ou = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Ub)));
  }
  var Ws = null;
  function Qm(t) {
    Ws !== t &&
      ((Ws = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Ws === t && (Ws = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (wu(i || n) === null) continue;
            break;
          }
          var u = Ea(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            wr(u, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function yl(t) {
    function e(x) {
      return Fs(x, t);
    }
    qn !== null && Fs(qn, t),
      Gn !== null && Fs(Gn, t),
      Yn !== null && Fs(Yn, t),
      hl.forEach(e),
      ml.forEach(e);
    for (var n = 0; n < kn.length; n++) {
      var i = kn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
      Xm(n), n.blockedOn === null && kn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          u = n[i + 1],
          d = s[fe] || null;
        if (typeof u == "function") d || Qm(n);
        else if (d) {
          var g = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (d = u[fe] || null))) g = d.formAction;
            else if (wu(s) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)),
            Qm(n);
        }
      }
  }
  function Cu(t) {
    this._internalRoot = t;
  }
  ($s.prototype.render = Cu.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = Me();
      Hm(n, i, t, e, null, null);
    }),
    ($s.prototype.unmount = Cu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Hm(t.current, 2, null, t, null, null), Ns(), (e[Ta] = null);
        }
      });
  function $s(t) {
    this._internalRoot = t;
  }
  $s.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = uf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < kn.length && e !== 0 && e < kn[n].priority; n++);
      kn.splice(n, 0, t), n === 0 && Xm(t);
    }
  };
  var Km = l.version;
  if (Km !== "19.1.0") throw Error(r(527, Km, "19.1.0"));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Bb = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Is.isDisabled && Is.supportsFiber)
      try {
        (xi = Is.inject(Bb)), (ve = Is);
      } catch {}
  }
  return (
    (vl.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = uh,
        u = ch,
        d = fh,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (g = e.unstable_transitionCallbacks)),
        (e = Bm(t, 1, !1, null, null, n, i, s, u, d, g, null)),
        (t[Ta] = e.current),
        du(t),
        new Cu(e)
      );
    }),
    (vl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        u = uh,
        d = ch,
        g = fh,
        x = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (x = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (e = Bm(t, 1, !0, e, n ?? null, i, s, u, d, g, x, D)),
        (e.context = Lm(null)),
        (n = e.current),
        (i = Me()),
        (i = So(i)),
        (s = Dn(i)),
        (s.callback = null),
        Rn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        Ti(e, n),
        Je(e),
        (t[Ta] = e.current),
        du(t),
        new $s(e)
      );
    }),
    (vl.version = "19.1.0"),
    vl
  );
}
var ap;
function Kb() {
  if (ap) return Nu.exports;
  ap = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Nu.exports = Qb()), Nu.exports;
}
var Pb = Kb();
function ip(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function Jb(...a) {
  return (l) => {
    let o = !1;
    const r = a.map((c) => {
      const h = ip(c, l);
      return !o && typeof h == "function" && (o = !0), h;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : ip(a[c], null);
        }
      };
  };
}
function Fb(...a) {
  return K.useCallback(Jb(...a), a);
}
function Wb(a) {
  const l = Ib(a),
    o = K.forwardRef((r, c) => {
      const { children: h, ...f } = r,
        m = K.Children.toArray(h),
        y = m.find(e1);
      if (y) {
        const p = y.props.children,
          v = m.map((b) =>
            b === y
              ? K.Children.count(p) > 1
                ? K.Children.only(null)
                : K.isValidElement(p)
                ? p.props.children
                : null
              : b
          );
        return w.jsx(l, {
          ...f,
          ref: c,
          children: K.isValidElement(p) ? K.cloneElement(p, void 0, v) : null,
        });
      }
      return w.jsx(l, { ...f, ref: c, children: h });
    });
  return (o.displayName = `${a}.Slot`), o;
}
var $b = Wb("Slot");
function Ib(a) {
  const l = K.forwardRef((o, r) => {
    const { children: c, ...h } = o,
      f = K.isValidElement(c) ? a1(c) : void 0,
      m = Fb(f, r);
    if (K.isValidElement(c)) {
      const y = n1(h, c.props);
      return c.type !== K.Fragment && (y.ref = m), K.cloneElement(c, y);
    }
    return K.Children.count(c) > 1 ? K.Children.only(null) : null;
  });
  return (l.displayName = `${a}.SlotClone`), l;
}
var t1 = Symbol("radix.slottable");
function e1(a) {
  return (
    K.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === t1
  );
}
function n1(a, l) {
  const o = { ...l };
  for (const r in l) {
    const c = a[r],
      h = l[r];
    /^on[A-Z]/.test(r)
      ? c && h
        ? (o[r] = (...m) => {
            const y = h(...m);
            return c(...m), y;
          })
        : c && (o[r] = c)
      : r === "style"
      ? (o[r] = { ...c, ...h })
      : r === "className" && (o[r] = [c, h].filter(Boolean).join(" "));
  }
  return { ...a, ...o };
}
function a1(a) {
  var r, c;
  let l =
      (r = Object.getOwnPropertyDescriptor(a.props, "ref")) == null
        ? void 0
        : r.get,
    o = l && "isReactWarning" in l && l.isReactWarning;
  return o
    ? a.ref
    : ((l =
        (c = Object.getOwnPropertyDescriptor(a, "ref")) == null
          ? void 0
          : c.get),
      (o = l && "isReactWarning" in l && l.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
function Ry(a) {
  var l,
    o,
    r = "";
  if (typeof a == "string" || typeof a == "number") r += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var c = a.length;
      for (l = 0; l < c; l++)
        a[l] && (o = Ry(a[l])) && (r && (r += " "), (r += o));
    } else for (o in a) a[o] && (r && (r += " "), (r += o));
  return r;
}
function wy() {
  for (var a, l, o = 0, r = "", c = arguments.length; o < c; o++)
    (a = arguments[o]) && (l = Ry(a)) && (r && (r += " "), (r += l));
  return r;
}
const lp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  sp = wy,
  i1 = (a, l) => (o) => {
    var r;
    if ((l == null ? void 0 : l.variants) == null)
      return sp(
        a,
        o == null ? void 0 : o.class,
        o == null ? void 0 : o.className
      );
    const { variants: c, defaultVariants: h } = l,
      f = Object.keys(c).map((p) => {
        const v = o == null ? void 0 : o[p],
          b = h == null ? void 0 : h[p];
        if (v === null) return null;
        const A = lp(v) || lp(b);
        return c[p][A];
      }),
      m =
        o &&
        Object.entries(o).reduce((p, v) => {
          let [b, A] = v;
          return A === void 0 || (p[b] = A), p;
        }, {}),
      y =
        l == null || (r = l.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((p, v) => {
              let { class: b, className: A, ...C } = v;
              return Object.entries(C).every((B) => {
                let [L, Y] = B;
                return Array.isArray(Y)
                  ? Y.includes({ ...h, ...m }[L])
                  : { ...h, ...m }[L] === Y;
              })
                ? [...p, b, A]
                : p;
            }, []);
    return sp(
      a,
      f,
      y,
      o == null ? void 0 : o.class,
      o == null ? void 0 : o.className
    );
  },
  Tc = "-",
  l1 = (a) => {
    const l = o1(a),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: r } = a;
    return {
      getClassGroupId: (f) => {
        const m = f.split(Tc);
        return m[0] === "" && m.length !== 1 && m.shift(), Oy(m, l) || s1(f);
      },
      getConflictingClassGroupIds: (f, m) => {
        const y = o[f] || [];
        return m && r[f] ? [...y, ...r[f]] : y;
      },
    };
  },
  Oy = (a, l) => {
    var f;
    if (a.length === 0) return l.classGroupId;
    const o = a[0],
      r = l.nextPart.get(o),
      c = r ? Oy(a.slice(1), r) : void 0;
    if (c) return c;
    if (l.validators.length === 0) return;
    const h = a.join(Tc);
    return (f = l.validators.find(({ validator: m }) => m(h))) == null
      ? void 0
      : f.classGroupId;
  },
  op = /^\[(.+)\]$/,
  s1 = (a) => {
    if (op.test(a)) {
      const l = op.exec(a)[1],
        o = l == null ? void 0 : l.substring(0, l.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  o1 = (a) => {
    const { theme: l, classGroups: o } = a,
      r = { nextPart: new Map(), validators: [] };
    for (const c in o) $u(o[c], r, c, l);
    return r;
  },
  $u = (a, l, o, r) => {
    a.forEach((c) => {
      if (typeof c == "string") {
        const h = c === "" ? l : rp(l, c);
        h.classGroupId = o;
        return;
      }
      if (typeof c == "function") {
        if (r1(c)) {
          $u(c(r), l, o, r);
          return;
        }
        l.validators.push({ validator: c, classGroupId: o });
        return;
      }
      Object.entries(c).forEach(([h, f]) => {
        $u(f, rp(l, h), o, r);
      });
    });
  },
  rp = (a, l) => {
    let o = a;
    return (
      l.split(Tc).forEach((r) => {
        o.nextPart.has(r) ||
          o.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(r));
      }),
      o
    );
  },
  r1 = (a) => a.isThemeGetter,
  u1 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let l = 0,
      o = new Map(),
      r = new Map();
    const c = (h, f) => {
      o.set(h, f), l++, l > a && ((l = 0), (r = o), (o = new Map()));
    };
    return {
      get(h) {
        let f = o.get(h);
        if (f !== void 0) return f;
        if ((f = r.get(h)) !== void 0) return c(h, f), f;
      },
      set(h, f) {
        o.has(h) ? o.set(h, f) : c(h, f);
      },
    };
  },
  Iu = "!",
  tc = ":",
  c1 = tc.length,
  f1 = (a) => {
    const { prefix: l, experimentalParseClassName: o } = a;
    let r = (c) => {
      const h = [];
      let f = 0,
        m = 0,
        y = 0,
        p;
      for (let B = 0; B < c.length; B++) {
        let L = c[B];
        if (f === 0 && m === 0) {
          if (L === tc) {
            h.push(c.slice(y, B)), (y = B + c1);
            continue;
          }
          if (L === "/") {
            p = B;
            continue;
          }
        }
        L === "[" ? f++ : L === "]" ? f-- : L === "(" ? m++ : L === ")" && m--;
      }
      const v = h.length === 0 ? c : c.substring(y),
        b = d1(v),
        A = b !== v,
        C = p && p > y ? p - y : void 0;
      return {
        modifiers: h,
        hasImportantModifier: A,
        baseClassName: b,
        maybePostfixModifierPosition: C,
      };
    };
    if (l) {
      const c = l + tc,
        h = r;
      r = (f) =>
        f.startsWith(c)
          ? h(f.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (o) {
      const c = r;
      r = (h) => o({ className: h, parseClassName: c });
    }
    return r;
  },
  d1 = (a) =>
    a.endsWith(Iu)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Iu)
      ? a.substring(1)
      : a,
  h1 = (a) => {
    const l = Object.fromEntries(a.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const c = [];
      let h = [];
      return (
        r.forEach((f) => {
          f[0] === "[" || l[f] ? (c.push(...h.sort(), f), (h = [])) : h.push(f);
        }),
        c.push(...h.sort()),
        c
      );
    };
  },
  m1 = (a) => ({
    cache: u1(a.cacheSize),
    parseClassName: f1(a),
    sortModifiers: h1(a),
    ...l1(a),
  }),
  p1 = /\s+/,
  y1 = (a, l) => {
    const {
        parseClassName: o,
        getClassGroupId: r,
        getConflictingClassGroupIds: c,
        sortModifiers: h,
      } = l,
      f = [],
      m = a.trim().split(p1);
    let y = "";
    for (let p = m.length - 1; p >= 0; p -= 1) {
      const v = m[p],
        {
          isExternal: b,
          modifiers: A,
          hasImportantModifier: C,
          baseClassName: B,
          maybePostfixModifierPosition: L,
        } = o(v);
      if (b) {
        y = v + (y.length > 0 ? " " + y : y);
        continue;
      }
      let Y = !!L,
        Z = r(Y ? B.substring(0, L) : B);
      if (!Z) {
        if (!Y) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((Z = r(B)), !Z)) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        Y = !1;
      }
      const $ = h(A).join(":"),
        X = C ? $ + Iu : $,
        lt = X + Z;
      if (f.includes(lt)) continue;
      f.push(lt);
      const k = c(Z, Y);
      for (let nt = 0; nt < k.length; ++nt) {
        const rt = k[nt];
        f.push(X + rt);
      }
      y = v + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function g1() {
  let a = 0,
    l,
    o,
    r = "";
  for (; a < arguments.length; )
    (l = arguments[a++]) && (o = Cy(l)) && (r && (r += " "), (r += o));
  return r;
}
const Cy = (a) => {
  if (typeof a == "string") return a;
  let l,
    o = "";
  for (let r = 0; r < a.length; r++)
    a[r] && (l = Cy(a[r])) && (o && (o += " "), (o += l));
  return o;
};
function v1(a, ...l) {
  let o,
    r,
    c,
    h = f;
  function f(y) {
    const p = l.reduce((v, b) => b(v), a());
    return (o = m1(p)), (r = o.cache.get), (c = o.cache.set), (h = m), m(y);
  }
  function m(y) {
    const p = r(y);
    if (p) return p;
    const v = y1(y, o);
    return c(y, v), v;
  }
  return function () {
    return h(g1.apply(null, arguments));
  };
}
const Pt = (a) => {
    const l = (o) => o[a] || [];
    return (l.isThemeGetter = !0), l;
  },
  zy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Vy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  b1 = /^\d+\/\d+$/,
  x1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  S1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  T1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  A1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  E1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  oi = (a) => b1.test(a),
  ct = (a) => !!a && !Number.isNaN(Number(a)),
  Zn = (a) => !!a && Number.isInteger(Number(a)),
  Bu = (a) => a.endsWith("%") && ct(a.slice(0, -1)),
  pn = (a) => x1.test(a),
  M1 = () => !0,
  D1 = (a) => S1.test(a) && !T1.test(a),
  Ny = () => !1,
  R1 = (a) => A1.test(a),
  w1 = (a) => E1.test(a),
  O1 = (a) => !F(a) && !W(a),
  C1 = (a) => pi(a, Uy, Ny),
  F = (a) => zy.test(a),
  pa = (a) => pi(a, By, D1),
  Lu = (a) => pi(a, _1, ct),
  up = (a) => pi(a, jy, Ny),
  z1 = (a) => pi(a, _y, w1),
  to = (a) => pi(a, Ly, R1),
  W = (a) => Vy.test(a),
  bl = (a) => yi(a, By),
  V1 = (a) => yi(a, U1),
  cp = (a) => yi(a, jy),
  N1 = (a) => yi(a, Uy),
  j1 = (a) => yi(a, _y),
  eo = (a) => yi(a, Ly, !0),
  pi = (a, l, o) => {
    const r = zy.exec(a);
    return r ? (r[1] ? l(r[1]) : o(r[2])) : !1;
  },
  yi = (a, l, o = !1) => {
    const r = Vy.exec(a);
    return r ? (r[1] ? l(r[1]) : o) : !1;
  },
  jy = (a) => a === "position" || a === "percentage",
  _y = (a) => a === "image" || a === "url",
  Uy = (a) => a === "length" || a === "size" || a === "bg-size",
  By = (a) => a === "length",
  _1 = (a) => a === "number",
  U1 = (a) => a === "family-name",
  Ly = (a) => a === "shadow",
  B1 = () => {
    const a = Pt("color"),
      l = Pt("font"),
      o = Pt("text"),
      r = Pt("font-weight"),
      c = Pt("tracking"),
      h = Pt("leading"),
      f = Pt("breakpoint"),
      m = Pt("container"),
      y = Pt("spacing"),
      p = Pt("radius"),
      v = Pt("shadow"),
      b = Pt("inset-shadow"),
      A = Pt("text-shadow"),
      C = Pt("drop-shadow"),
      B = Pt("blur"),
      L = Pt("perspective"),
      Y = Pt("aspect"),
      Z = Pt("ease"),
      $ = Pt("animate"),
      X = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      lt = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      k = () => [...lt(), W, F],
      nt = () => ["auto", "hidden", "clip", "visible", "scroll"],
      rt = () => ["auto", "contain", "none"],
      q = () => [W, F, y],
      pt = () => [oi, "full", "auto", ...q()],
      Ut = () => [Zn, "none", "subgrid", W, F],
      Zt = () => ["auto", { span: ["full", Zn, W, F] }, Zn, W, F],
      Ot = () => [Zn, "auto", W, F],
      Re = () => ["auto", "min", "max", "fr", W, F],
      ce = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Ct = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      z = () => ["auto", ...q()],
      H = () => [
        oi,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...q(),
      ],
      _ = () => [a, W, F],
      yt = () => [...lt(), cp, up, { position: [W, F] }],
      S = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      U = () => ["auto", "cover", "contain", N1, C1, { size: [W, F] }],
      Q = () => [Bu, bl, pa],
      G = () => ["", "none", "full", p, W, F],
      P = () => ["", ct, bl, pa],
      dt = () => ["solid", "dashed", "dotted", "double"],
      st = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      vt = () => [ct, Bu, cp, up],
      Dt = () => ["", "none", B, W, F],
      ge = () => ["none", ct, W, F],
      vn = () => ["none", ct, W, F],
      bn = () => [ct, W, F],
      xn = () => [oi, "full", ...q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [pn],
        breakpoint: [pn],
        color: [M1],
        container: [pn],
        "drop-shadow": [pn],
        ease: ["in", "out", "in-out"],
        font: [O1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [pn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [pn],
        shadow: [pn],
        spacing: ["px", ct],
        text: [pn],
        "text-shadow": [pn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", oi, F, W, Y] }],
        container: ["container"],
        columns: [{ columns: [ct, F, W, m] }],
        "break-after": [{ "break-after": X() }],
        "break-before": [{ "break-before": X() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: k() }],
        overflow: [{ overflow: nt() }],
        "overflow-x": [{ "overflow-x": nt() }],
        "overflow-y": [{ "overflow-y": nt() }],
        overscroll: [{ overscroll: rt() }],
        "overscroll-x": [{ "overscroll-x": rt() }],
        "overscroll-y": [{ "overscroll-y": rt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: pt() }],
        "inset-x": [{ "inset-x": pt() }],
        "inset-y": [{ "inset-y": pt() }],
        start: [{ start: pt() }],
        end: [{ end: pt() }],
        top: [{ top: pt() }],
        right: [{ right: pt() }],
        bottom: [{ bottom: pt() }],
        left: [{ left: pt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Zn, "auto", W, F] }],
        basis: [{ basis: [oi, "full", "auto", m, ...q()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ct, oi, "auto", "initial", "none", F] }],
        grow: [{ grow: ["", ct, W, F] }],
        shrink: [{ shrink: ["", ct, W, F] }],
        order: [{ order: [Zn, "first", "last", "none", W, F] }],
        "grid-cols": [{ "grid-cols": Ut() }],
        "col-start-end": [{ col: Zt() }],
        "col-start": [{ "col-start": Ot() }],
        "col-end": [{ "col-end": Ot() }],
        "grid-rows": [{ "grid-rows": Ut() }],
        "row-start-end": [{ row: Zt() }],
        "row-start": [{ "row-start": Ot() }],
        "row-end": [{ "row-end": Ot() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Re() }],
        "auto-rows": [{ "auto-rows": Re() }],
        gap: [{ gap: q() }],
        "gap-x": [{ "gap-x": q() }],
        "gap-y": [{ "gap-y": q() }],
        "justify-content": [{ justify: [...ce(), "normal"] }],
        "justify-items": [{ "justify-items": [...Ct(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Ct()] }],
        "align-content": [{ content: ["normal", ...ce()] }],
        "align-items": [{ items: [...Ct(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Ct(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ce() }],
        "place-items": [{ "place-items": [...Ct(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Ct()] }],
        p: [{ p: q() }],
        px: [{ px: q() }],
        py: [{ py: q() }],
        ps: [{ ps: q() }],
        pe: [{ pe: q() }],
        pt: [{ pt: q() }],
        pr: [{ pr: q() }],
        pb: [{ pb: q() }],
        pl: [{ pl: q() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        "space-x": [{ "space-x": q() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": q() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: H() }],
        w: [{ w: [m, "screen", ...H()] }],
        "min-w": [{ "min-w": [m, "screen", "none", ...H()] }],
        "max-w": [
          { "max-w": [m, "screen", "none", "prose", { screen: [f] }, ...H()] },
        ],
        h: [{ h: ["screen", "lh", ...H()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...H()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...H()] }],
        "font-size": [{ text: ["base", o, bl, pa] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, W, Lu] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Bu,
              F,
            ],
          },
        ],
        "font-family": [{ font: [V1, F, l] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, W, F] }],
        "line-clamp": [{ "line-clamp": [ct, "none", W, Lu] }],
        leading: [{ leading: [h, ...q()] }],
        "list-image": [{ "list-image": ["none", W, F] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", W, F] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: _() }],
        "text-color": [{ text: _() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...dt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ct, "from-font", "auto", W, pa] },
        ],
        "text-decoration-color": [{ decoration: _() }],
        "underline-offset": [{ "underline-offset": [ct, "auto", W, F] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: q() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              W,
              F,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", W, F] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: yt() }],
        "bg-repeat": [{ bg: S() }],
        "bg-size": [{ bg: U() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Zn,
                  W,
                  F,
                ],
                radial: ["", W, F],
                conic: [Zn, W, F],
              },
              j1,
              z1,
            ],
          },
        ],
        "bg-color": [{ bg: _() }],
        "gradient-from-pos": [{ from: Q() }],
        "gradient-via-pos": [{ via: Q() }],
        "gradient-to-pos": [{ to: Q() }],
        "gradient-from": [{ from: _() }],
        "gradient-via": [{ via: _() }],
        "gradient-to": [{ to: _() }],
        rounded: [{ rounded: G() }],
        "rounded-s": [{ "rounded-s": G() }],
        "rounded-e": [{ "rounded-e": G() }],
        "rounded-t": [{ "rounded-t": G() }],
        "rounded-r": [{ "rounded-r": G() }],
        "rounded-b": [{ "rounded-b": G() }],
        "rounded-l": [{ "rounded-l": G() }],
        "rounded-ss": [{ "rounded-ss": G() }],
        "rounded-se": [{ "rounded-se": G() }],
        "rounded-ee": [{ "rounded-ee": G() }],
        "rounded-es": [{ "rounded-es": G() }],
        "rounded-tl": [{ "rounded-tl": G() }],
        "rounded-tr": [{ "rounded-tr": G() }],
        "rounded-br": [{ "rounded-br": G() }],
        "rounded-bl": [{ "rounded-bl": G() }],
        "border-w": [{ border: P() }],
        "border-w-x": [{ "border-x": P() }],
        "border-w-y": [{ "border-y": P() }],
        "border-w-s": [{ "border-s": P() }],
        "border-w-e": [{ "border-e": P() }],
        "border-w-t": [{ "border-t": P() }],
        "border-w-r": [{ "border-r": P() }],
        "border-w-b": [{ "border-b": P() }],
        "border-w-l": [{ "border-l": P() }],
        "divide-x": [{ "divide-x": P() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": P() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...dt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...dt(), "hidden", "none"] }],
        "border-color": [{ border: _() }],
        "border-color-x": [{ "border-x": _() }],
        "border-color-y": [{ "border-y": _() }],
        "border-color-s": [{ "border-s": _() }],
        "border-color-e": [{ "border-e": _() }],
        "border-color-t": [{ "border-t": _() }],
        "border-color-r": [{ "border-r": _() }],
        "border-color-b": [{ "border-b": _() }],
        "border-color-l": [{ "border-l": _() }],
        "divide-color": [{ divide: _() }],
        "outline-style": [{ outline: [...dt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ct, W, F] }],
        "outline-w": [{ outline: ["", ct, bl, pa] }],
        "outline-color": [{ outline: _() }],
        shadow: [{ shadow: ["", "none", v, eo, to] }],
        "shadow-color": [{ shadow: _() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, eo, to] }],
        "inset-shadow-color": [{ "inset-shadow": _() }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: _() }],
        "ring-offset-w": [{ "ring-offset": [ct, pa] }],
        "ring-offset-color": [{ "ring-offset": _() }],
        "inset-ring-w": [{ "inset-ring": P() }],
        "inset-ring-color": [{ "inset-ring": _() }],
        "text-shadow": [{ "text-shadow": ["none", A, eo, to] }],
        "text-shadow-color": [{ "text-shadow": _() }],
        opacity: [{ opacity: [ct, W, F] }],
        "mix-blend": [
          { "mix-blend": [...st(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": st() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ct] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": vt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": vt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": _() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": _() }],
        "mask-image-t-from-pos": [{ "mask-t-from": vt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": vt() }],
        "mask-image-t-from-color": [{ "mask-t-from": _() }],
        "mask-image-t-to-color": [{ "mask-t-to": _() }],
        "mask-image-r-from-pos": [{ "mask-r-from": vt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": vt() }],
        "mask-image-r-from-color": [{ "mask-r-from": _() }],
        "mask-image-r-to-color": [{ "mask-r-to": _() }],
        "mask-image-b-from-pos": [{ "mask-b-from": vt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": vt() }],
        "mask-image-b-from-color": [{ "mask-b-from": _() }],
        "mask-image-b-to-color": [{ "mask-b-to": _() }],
        "mask-image-l-from-pos": [{ "mask-l-from": vt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": vt() }],
        "mask-image-l-from-color": [{ "mask-l-from": _() }],
        "mask-image-l-to-color": [{ "mask-l-to": _() }],
        "mask-image-x-from-pos": [{ "mask-x-from": vt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": vt() }],
        "mask-image-x-from-color": [{ "mask-x-from": _() }],
        "mask-image-x-to-color": [{ "mask-x-to": _() }],
        "mask-image-y-from-pos": [{ "mask-y-from": vt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": vt() }],
        "mask-image-y-from-color": [{ "mask-y-from": _() }],
        "mask-image-y-to-color": [{ "mask-y-to": _() }],
        "mask-image-radial": [{ "mask-radial": [W, F] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": vt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": vt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": _() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": _() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": lt() }],
        "mask-image-conic-pos": [{ "mask-conic": [ct] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": vt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": vt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": _() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": _() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: yt() }],
        "mask-repeat": [{ mask: S() }],
        "mask-size": [{ mask: U() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", W, F] }],
        filter: [{ filter: ["", "none", W, F] }],
        blur: [{ blur: Dt() }],
        brightness: [{ brightness: [ct, W, F] }],
        contrast: [{ contrast: [ct, W, F] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", C, eo, to] }],
        "drop-shadow-color": [{ "drop-shadow": _() }],
        grayscale: [{ grayscale: ["", ct, W, F] }],
        "hue-rotate": [{ "hue-rotate": [ct, W, F] }],
        invert: [{ invert: ["", ct, W, F] }],
        saturate: [{ saturate: [ct, W, F] }],
        sepia: [{ sepia: ["", ct, W, F] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", W, F] }],
        "backdrop-blur": [{ "backdrop-blur": Dt() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ct, W, F] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ct, W, F] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ct, W, F] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ct, W, F] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ct, W, F] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ct, W, F] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ct, W, F] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ct, W, F] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": q() }],
        "border-spacing-x": [{ "border-spacing-x": q() }],
        "border-spacing-y": [{ "border-spacing-y": q() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              W,
              F,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ct, "initial", W, F] }],
        ease: [{ ease: ["linear", "initial", Z, W, F] }],
        delay: [{ delay: [ct, W, F] }],
        animate: [{ animate: ["none", $, W, F] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [L, W, F] }],
        "perspective-origin": [{ "perspective-origin": k() }],
        rotate: [{ rotate: ge() }],
        "rotate-x": [{ "rotate-x": ge() }],
        "rotate-y": [{ "rotate-y": ge() }],
        "rotate-z": [{ "rotate-z": ge() }],
        scale: [{ scale: vn() }],
        "scale-x": [{ "scale-x": vn() }],
        "scale-y": [{ "scale-y": vn() }],
        "scale-z": [{ "scale-z": vn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: bn() }],
        "skew-x": [{ "skew-x": bn() }],
        "skew-y": [{ "skew-y": bn() }],
        transform: [{ transform: [W, F, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: k() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: xn() }],
        "translate-x": [{ "translate-x": xn() }],
        "translate-y": [{ "translate-y": xn() }],
        "translate-z": [{ "translate-z": xn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: _() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: _() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              W,
              F,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": q() }],
        "scroll-mx": [{ "scroll-mx": q() }],
        "scroll-my": [{ "scroll-my": q() }],
        "scroll-ms": [{ "scroll-ms": q() }],
        "scroll-me": [{ "scroll-me": q() }],
        "scroll-mt": [{ "scroll-mt": q() }],
        "scroll-mr": [{ "scroll-mr": q() }],
        "scroll-mb": [{ "scroll-mb": q() }],
        "scroll-ml": [{ "scroll-ml": q() }],
        "scroll-p": [{ "scroll-p": q() }],
        "scroll-px": [{ "scroll-px": q() }],
        "scroll-py": [{ "scroll-py": q() }],
        "scroll-ps": [{ "scroll-ps": q() }],
        "scroll-pe": [{ "scroll-pe": q() }],
        "scroll-pt": [{ "scroll-pt": q() }],
        "scroll-pr": [{ "scroll-pr": q() }],
        "scroll-pb": [{ "scroll-pb": q() }],
        "scroll-pl": [{ "scroll-pl": q() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", W, F] },
        ],
        fill: [{ fill: ["none", ..._()] }],
        "stroke-w": [{ stroke: [ct, bl, pa, Lu] }],
        stroke: [{ stroke: ["none", ..._()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  L1 = v1(B1);
function _l(...a) {
  return L1(wy(a));
}
const H1 = i1(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function xl({ className: a, variant: l, size: o, asChild: r = !1, ...c }) {
  const h = r ? $b : "button";
  return w.jsx(h, {
    "data-slot": "button",
    className: _l(H1({ variant: l, size: o, className: a })),
    ...c,
  });
}
function fp({ className: a, ...l }) {
  return w.jsx("div", {
    "data-slot": "card",
    className: _l(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      a
    ),
    ...l,
  });
}
function dp({ className: a, ...l }) {
  return w.jsx("div", {
    "data-slot": "card-content",
    className: _l("px-6", a),
    ...l,
  });
}
function Hu({ className: a, type: l, ...o }) {
  return w.jsx("input", {
    type: l,
    "data-slot": "input",
    className: _l(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      a
    ),
    ...o,
  });
}
function q1({ className: a, ...l }) {
  return w.jsx("textarea", {
    "data-slot": "textarea",
    className: _l(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a
    ),
    ...l,
  });
}
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Y1 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, r) =>
      r ? r.toUpperCase() : o.toLowerCase()
    ),
  hp = (a) => {
    const l = Y1(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  Hy = (...a) =>
    a
      .filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o)
      .join(" ")
      .trim(),
  k1 = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = K.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: h,
      iconNode: f,
      ...m
    },
    y
  ) =>
    K.createElement(
      "svg",
      {
        ref: y,
        ...X1,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: r ? (Number(o) * 24) / Number(l) : o,
        className: Hy("lucide", c),
        ...(!h && !k1(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([p, v]) => K.createElement(p, v)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jn = (a, l) => {
  const o = K.forwardRef(({ className: r, ...c }, h) =>
    K.createElement(Z1, {
      ref: h,
      iconNode: l,
      className: Hy(`lucide-${G1(hp(a))}`, `lucide-${a}`, r),
      ...c,
    })
  );
  return (o.displayName = hp(a)), o;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  K1 = Jn("facebook", Q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  J1 = Jn("instagram", P1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  W1 = Jn("mail", F1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  I1 = Jn("map-pin", $1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  ex = Jn("menu", tx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  mp = Jn("message-circle", nx);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  ix = Jn("phone", ax);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  sx = Jn("x", lx),
  qy = K.createContext({});
function ox(a) {
  const l = K.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Ac = typeof window < "u",
  rx = Ac ? K.useLayoutEffect : K.useEffect,
  Ec = K.createContext(null);
function Mc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function Dc(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const yn = (a, l, o) => (o > l ? l : o < a ? a : o);
let Rc = () => {};
const gn = {},
  Gy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function Yy(a) {
  return typeof a == "object" && a !== null;
}
const ky = (a) => /^0[^.\s]+$/u.test(a);
function wc(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const He = (a) => a,
  ux = (a, l) => (o) => l(a(o)),
  Ul = (...a) => a.reduce(ux),
  wl = (a, l, o) => {
    const r = l - a;
    return r === 0 ? 1 : (o - a) / r;
  };
class Oc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Mc(this.subscriptions, l), () => Dc(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, r);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fe = (a) => a * 1e3,
  We = (a) => a / 1e3;
function Xy(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Zy = (a, l, o) =>
    (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a,
  cx = 1e-7,
  fx = 12;
function dx(a, l, o, r, c) {
  let h,
    f,
    m = 0;
  do (f = l + (o - l) / 2), (h = Zy(f, r, c) - a), h > 0 ? (o = f) : (l = f);
  while (Math.abs(h) > cx && ++m < fx);
  return f;
}
function Bl(a, l, o, r) {
  if (a === l && o === r) return He;
  const c = (h) => dx(h, 0, 1, a, o);
  return (h) => (h === 0 || h === 1 ? h : Zy(c(h), l, r));
}
const Qy = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  Ky = (a) => (l) => 1 - a(1 - l),
  Py = Bl(0.33, 1.53, 0.69, 0.99),
  Cc = Ky(Py),
  Jy = Qy(Cc),
  Fy = (a) =>
    (a *= 2) < 1 ? 0.5 * Cc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  zc = (a) => 1 - Math.sin(Math.acos(a)),
  Wy = Ky(zc),
  $y = Qy(zc),
  hx = Bl(0.42, 0, 1, 1),
  mx = Bl(0, 0, 0.58, 1),
  Iy = Bl(0.42, 0, 0.58, 1),
  px = (a) => Array.isArray(a) && typeof a[0] != "number",
  tg = (a) => Array.isArray(a) && typeof a[0] == "number",
  yx = {
    linear: He,
    easeIn: hx,
    easeInOut: Iy,
    easeOut: mx,
    circIn: zc,
    circInOut: $y,
    circOut: Wy,
    backIn: Cc,
    backInOut: Jy,
    backOut: Py,
    anticipate: Fy,
  },
  gx = (a) => typeof a == "string",
  pp = (a) => {
    if (tg(a)) {
      Rc(a.length === 4);
      const [l, o, r, c] = a;
      return Bl(l, o, r, c);
    } else if (gx(a)) return yx[a];
    return a;
  },
  no = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  yp = { value: null };
function vx(a, l) {
  let o = new Set(),
    r = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    y = 0;
  function p(b) {
    f.has(b) && (v.schedule(b), a()), y++, b(m);
  }
  const v = {
    schedule: (b, A = !1, C = !1) => {
      const L = C && c ? o : r;
      return A && f.add(b), L.has(b) || L.add(b), b;
    },
    cancel: (b) => {
      r.delete(b), f.delete(b);
    },
    process: (b) => {
      if (((m = b), c)) {
        h = !0;
        return;
      }
      (c = !0),
        ([o, r] = [r, o]),
        o.forEach(p),
        l && yp.value && yp.value.frameloop[l].push(y),
        (y = 0),
        o.clear(),
        (c = !1),
        h && ((h = !1), v.process(b));
    },
  };
  return v;
}
const bx = 40;
function eg(a, l) {
  let o = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (o = !0),
    f = no.reduce((X, lt) => ((X[lt] = vx(h, l ? lt : void 0)), X), {}),
    {
      setup: m,
      read: y,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: A,
      render: C,
      postRender: B,
    } = f,
    L = () => {
      const X = gn.useManualTiming ? c.timestamp : performance.now();
      (o = !1),
        gn.useManualTiming ||
          (c.delta = r ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, bx), 1)),
        (c.timestamp = X),
        (c.isProcessing = !0),
        m.process(c),
        y.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        A.process(c),
        C.process(c),
        B.process(c),
        (c.isProcessing = !1),
        o && l && ((r = !1), a(L));
    },
    Y = () => {
      (o = !0), (r = !0), c.isProcessing || a(L);
    };
  return {
    schedule: no.reduce((X, lt) => {
      const k = f[lt];
      return (
        (X[lt] = (nt, rt = !1, q = !1) => (o || Y(), k.schedule(nt, rt, q))), X
      );
    }, {}),
    cancel: (X) => {
      for (let lt = 0; lt < no.length; lt++) f[no[lt]].cancel(X);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: _t,
  cancel: Kn,
  state: ne,
  steps: qu,
} = eg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0);
let lo;
function xx() {
  lo = void 0;
}
const ye = {
    now: () => (
      lo === void 0 &&
        ye.set(
          ne.isProcessing || gn.useManualTiming
            ? ne.timestamp
            : performance.now()
        ),
      lo
    ),
    set: (a) => {
      (lo = a), queueMicrotask(xx);
    },
  },
  ng = (a) => (l) => typeof l == "string" && l.startsWith(a),
  Vc = ng("--"),
  Sx = ng("var(--"),
  Nc = (a) => (Sx(a) ? Tx.test(a.split("/*")[0].trim()) : !1),
  Tx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  gi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Ol = { ...gi, transform: (a) => yn(0, 1, a) },
  ao = { ...gi, default: 1 },
  Al = (a) => Math.round(a * 1e5) / 1e5,
  jc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ax(a) {
  return a == null;
}
const Ex =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  _c = (a, l) => (o) =>
    !!(
      (typeof o == "string" && Ex.test(o) && o.startsWith(a)) ||
      (l && !Ax(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  ag = (a, l, o) => (r) => {
    if (typeof r != "string") return r;
    const [c, h, f, m] = r.match(jc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [o]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  Mx = (a) => yn(0, 255, a),
  Gu = { ...gi, transform: (a) => Math.round(Mx(a)) },
  va = {
    test: _c("rgb", "red"),
    parse: ag("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      Gu.transform(a) +
      ", " +
      Gu.transform(l) +
      ", " +
      Gu.transform(o) +
      ", " +
      Al(Ol.transform(r)) +
      ")",
  };
function Dx(a) {
  let l = "",
    o = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (o += o),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ec = { test: _c("#"), parse: Dx, transform: va.transform },
  Ll = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Qn = Ll("deg"),
  $e = Ll("%"),
  it = Ll("px"),
  Rx = Ll("vh"),
  wx = Ll("vw"),
  gp = {
    ...$e,
    parse: (a) => $e.parse(a) / 100,
    transform: (a) => $e.transform(a * 100),
  },
  ri = {
    test: _c("hsl", "hue"),
    parse: ag("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: o, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      $e.transform(Al(l)) +
      ", " +
      $e.transform(Al(o)) +
      ", " +
      Al(Ol.transform(r)) +
      ")",
  },
  se = {
    test: (a) => va.test(a) || ec.test(a) || ri.test(a),
    parse: (a) =>
      va.test(a) ? va.parse(a) : ri.test(a) ? ri.parse(a) : ec.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? va.transform(a)
        : ri.transform(a),
  },
  Ox =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cx(a) {
  var l, o;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(jc)) == null ? void 0 : l.length) || 0) +
      (((o = a.match(Ox)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const ig = "number",
  lg = "color",
  zx = "var",
  Vx = "var(",
  vp = "${}",
  Nx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Cl(a) {
  const l = a.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = l
    .replace(
      Nx,
      (y) => (
        se.test(y)
          ? (r.color.push(h), c.push(lg), o.push(se.parse(y)))
          : y.startsWith(Vx)
          ? (r.var.push(h), c.push(zx), o.push(y))
          : (r.number.push(h), c.push(ig), o.push(parseFloat(y))),
        ++h,
        vp
      )
    )
    .split(vp);
  return { values: o, split: m, indexes: r, types: c };
}
function sg(a) {
  return Cl(a).values;
}
function og(a) {
  const { split: l, types: o } = Cl(a),
    r = l.length;
  return (c) => {
    let h = "";
    for (let f = 0; f < r; f++)
      if (((h += l[f]), c[f] !== void 0)) {
        const m = o[f];
        m === ig
          ? (h += Al(c[f]))
          : m === lg
          ? (h += se.transform(c[f]))
          : (h += c[f]);
      }
    return h;
  };
}
const jx = (a) => (typeof a == "number" ? 0 : a);
function _x(a) {
  const l = sg(a);
  return og(a)(l.map(jx));
}
const Pn = {
  test: Cx,
  parse: sg,
  createTransformer: og,
  getAnimatableNone: _x,
};
function Yu(a, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? a + (l - a) * 6 * o
      : o < 1 / 2
      ? l
      : o < 2 / 3
      ? a + (l - a) * (2 / 3 - o) * 6
      : a
  );
}
function Ux({ hue: a, saturation: l, lightness: o, alpha: r }) {
  (a /= 360), (l /= 100), (o /= 100);
  let c = 0,
    h = 0,
    f = 0;
  if (!l) c = h = f = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l,
      y = 2 * o - m;
    (c = Yu(y, m, a + 1 / 3)), (h = Yu(y, m, a)), (f = Yu(y, m, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function uo(a, l) {
  return (o) => (o > 0 ? l : a);
}
const jt = (a, l, o) => a + (l - a) * o,
  ku = (a, l, o) => {
    const r = a * a,
      c = o * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Bx = [ec, va, ri],
  Lx = (a) => Bx.find((l) => l.test(a));
function bp(a) {
  const l = Lx(a);
  if (!l) return !1;
  let o = l.parse(a);
  return l === ri && (o = Ux(o)), o;
}
const xp = (a, l) => {
    const o = bp(a),
      r = bp(l);
    if (!o || !r) return uo(a, l);
    const c = { ...o };
    return (h) => (
      (c.red = ku(o.red, r.red, h)),
      (c.green = ku(o.green, r.green, h)),
      (c.blue = ku(o.blue, r.blue, h)),
      (c.alpha = jt(o.alpha, r.alpha, h)),
      va.transform(c)
    );
  },
  nc = new Set(["none", "hidden"]);
function Hx(a, l) {
  return nc.has(a) ? (o) => (o <= 0 ? a : l) : (o) => (o >= 1 ? l : a);
}
function qx(a, l) {
  return (o) => jt(a, l, o);
}
function Uc(a) {
  return typeof a == "number"
    ? qx
    : typeof a == "string"
    ? Nc(a)
      ? uo
      : se.test(a)
      ? xp
      : kx
    : Array.isArray(a)
    ? rg
    : typeof a == "object"
    ? se.test(a)
      ? xp
      : Gx
    : uo;
}
function rg(a, l) {
  const o = [...a],
    r = o.length,
    c = a.map((h, f) => Uc(h)(h, l[f]));
  return (h) => {
    for (let f = 0; f < r; f++) o[f] = c[f](h);
    return o;
  };
}
function Gx(a, l) {
  const o = { ...a, ...l },
    r = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = Uc(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in r) o[h] = r[h](c);
    return o;
  };
}
function Yx(a, l) {
  const o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      f = a.indexes[h][r[h]],
      m = a.values[f] ?? 0;
    (o[c] = m), r[h]++;
  }
  return o;
}
const kx = (a, l) => {
  const o = Pn.createTransformer(l),
    r = Cl(a),
    c = Cl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (nc.has(a) && !c.values.length) || (nc.has(l) && !r.values.length)
      ? Hx(a, l)
      : Ul(rg(Yx(r, c), c.values), o)
    : uo(a, l);
};
function ug(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number"
    ? jt(a, l, o)
    : Uc(a)(a, l);
}
const Xx = (a) => {
    const l = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => _t.update(l, o),
      stop: () => Kn(l),
      now: () => (ne.isProcessing ? ne.timestamp : ye.now()),
    };
  },
  cg = (a, l, o = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let h = 0; h < c; h++) r += a(h / (c - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  co = 2e4;
function Bc(a) {
  let l = 0;
  const o = 50;
  let r = a.next(l);
  for (; !r.done && l < co; ) (l += o), (r = a.next(l));
  return l >= co ? 1 / 0 : l;
}
function Zx(a, l = 100, o) {
  const r = o({ ...a, keyframes: [0, l] }),
    c = Math.min(Bc(r), co);
  return {
    type: "keyframes",
    ease: (h) => r.next(c * h).value / l,
    duration: We(c),
  };
}
const Qx = 5;
function fg(a, l, o) {
  const r = Math.max(l - Qx, 0);
  return Xy(o - a(r), l - r);
}
const Ht = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Sp = 0.001;
function Kx({
  duration: a = Ht.duration,
  bounce: l = Ht.bounce,
  velocity: o = Ht.velocity,
  mass: r = Ht.mass,
}) {
  let c,
    h,
    f = 1 - l;
  (f = yn(Ht.minDamping, Ht.maxDamping, f)),
    (a = yn(Ht.minDuration, Ht.maxDuration, We(a))),
    f < 1
      ? ((c = (p) => {
          const v = p * f,
            b = v * a,
            A = v - o,
            C = ac(p, f),
            B = Math.exp(-b);
          return Sp - (A / C) * B;
        }),
        (h = (p) => {
          const b = p * f * a,
            A = b * o + o,
            C = Math.pow(f, 2) * Math.pow(p, 2) * a,
            B = Math.exp(-b),
            L = ac(Math.pow(p, 2), f);
          return ((-c(p) + Sp > 0 ? -1 : 1) * ((A - C) * B)) / L;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * a),
            b = (p - o) * a + 1;
          return -0.001 + v * b;
        }),
        (h = (p) => {
          const v = Math.exp(-p * a),
            b = (o - p) * (a * a);
          return v * b;
        }));
  const m = 5 / a,
    y = Jx(c, h, m);
  if (((a = Fe(a)), isNaN(y)))
    return { stiffness: Ht.stiffness, damping: Ht.damping, duration: a };
  {
    const p = Math.pow(y, 2) * r;
    return { stiffness: p, damping: f * 2 * Math.sqrt(r * p), duration: a };
  }
}
const Px = 12;
function Jx(a, l, o) {
  let r = o;
  for (let c = 1; c < Px; c++) r = r - a(r) / l(r);
  return r;
}
function ac(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const Fx = ["duration", "bounce"],
  Wx = ["stiffness", "damping", "mass"];
function Tp(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function $x(a) {
  let l = {
    velocity: Ht.velocity,
    stiffness: Ht.stiffness,
    damping: Ht.damping,
    mass: Ht.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Tp(a, Wx) && Tp(a, Fx))
    if (a.visualDuration) {
      const o = a.visualDuration,
        r = (2 * Math.PI) / (o * 1.2),
        c = r * r,
        h = 2 * yn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Ht.mass, stiffness: c, damping: h };
    } else {
      const o = Kx(a);
      (l = { ...l, ...o, mass: Ht.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function fo(a = Ht.visualDuration, l = Ht.bounce) {
  const o =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: r, restDelta: c } = o;
  const h = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: y,
      damping: p,
      mass: v,
      duration: b,
      velocity: A,
      isResolvedFromDuration: C,
    } = $x({ ...o, velocity: -We(o.velocity || 0) }),
    B = A || 0,
    L = p / (2 * Math.sqrt(y * v)),
    Y = f - h,
    Z = We(Math.sqrt(y / v)),
    $ = Math.abs(Y) < 5;
  r || (r = $ ? Ht.restSpeed.granular : Ht.restSpeed.default),
    c || (c = $ ? Ht.restDelta.granular : Ht.restDelta.default);
  let X;
  if (L < 1) {
    const k = ac(Z, L);
    X = (nt) => {
      const rt = Math.exp(-L * Z * nt);
      return (
        f -
        rt * (((B + L * Z * Y) / k) * Math.sin(k * nt) + Y * Math.cos(k * nt))
      );
    };
  } else if (L === 1) X = (k) => f - Math.exp(-Z * k) * (Y + (B + Z * Y) * k);
  else {
    const k = Z * Math.sqrt(L * L - 1);
    X = (nt) => {
      const rt = Math.exp(-L * Z * nt),
        q = Math.min(k * nt, 300);
      return (
        f - (rt * ((B + L * Z * Y) * Math.sinh(q) + k * Y * Math.cosh(q))) / k
      );
    };
  }
  const lt = {
    calculatedDuration: (C && b) || null,
    next: (k) => {
      const nt = X(k);
      if (C) m.done = k >= b;
      else {
        let rt = k === 0 ? B : 0;
        L < 1 && (rt = k === 0 ? Fe(B) : fg(X, k, nt));
        const q = Math.abs(rt) <= r,
          pt = Math.abs(f - nt) <= c;
        m.done = q && pt;
      }
      return (m.value = m.done ? f : nt), m;
    },
    toString: () => {
      const k = Math.min(Bc(lt), co),
        nt = cg((rt) => lt.next(k * rt).value, k, 30);
      return k + "ms " + nt;
    },
    toTransition: () => {},
  };
  return lt;
}
fo.applyToOptions = (a) => {
  const l = Zx(a, 100, fo);
  return (
    (a.ease = l.ease), (a.duration = Fe(l.duration)), (a.type = "keyframes"), a
  );
};
function ic({
  keyframes: a,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: m,
  max: y,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    A = { done: !1, value: b },
    C = (q) => (m !== void 0 && q < m) || (y !== void 0 && q > y),
    B = (q) =>
      m === void 0
        ? y
        : y === void 0 || Math.abs(m - q) < Math.abs(y - q)
        ? m
        : y;
  let L = o * l;
  const Y = b + L,
    Z = f === void 0 ? Y : f(Y);
  Z !== Y && (L = Z - b);
  const $ = (q) => -L * Math.exp(-q / r),
    X = (q) => Z + $(q),
    lt = (q) => {
      const pt = $(q),
        Ut = X(q);
      (A.done = Math.abs(pt) <= p), (A.value = A.done ? Z : Ut);
    };
  let k, nt;
  const rt = (q) => {
    C(A.value) &&
      ((k = q),
      (nt = fo({
        keyframes: [A.value, B(A.value)],
        velocity: fg(X, q, A.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    rt(0),
    {
      calculatedDuration: null,
      next: (q) => {
        let pt = !1;
        return (
          !nt && k === void 0 && ((pt = !0), lt(q), rt(q)),
          k !== void 0 && q >= k ? nt.next(q - k) : (!pt && lt(q), A)
        );
      },
    }
  );
}
function Ix(a, l, o) {
  const r = [],
    c = o || gn.mix || ug,
    h = a.length - 1;
  for (let f = 0; f < h; f++) {
    let m = c(a[f], a[f + 1]);
    if (l) {
      const y = Array.isArray(l) ? l[f] || He : l;
      m = Ul(y, m);
    }
    r.push(m);
  }
  return r;
}
function tS(a, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = a.length;
  if ((Rc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const f = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = Ix(l, r, c),
    y = m.length,
    p = (v) => {
      if (f && v < a[0]) return l[0];
      let b = 0;
      if (y > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const A = wl(a[b], a[b + 1], v);
      return m[b](A);
    };
  return o ? (v) => p(yn(a[0], a[h - 1], v)) : p;
}
function eS(a, l) {
  const o = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = wl(0, l, r);
    a.push(jt(o, 1, c));
  }
}
function nS(a) {
  const l = [0];
  return eS(l, a.length - 1), l;
}
function aS(a, l) {
  return a.map((o) => o * l);
}
function iS(a, l) {
  return a.map(() => l || Iy).splice(0, a.length - 1);
}
function El({
  duration: a = 300,
  keyframes: l,
  times: o,
  ease: r = "easeInOut",
}) {
  const c = px(r) ? r.map(pp) : pp(r),
    h = { done: !1, value: l[0] },
    f = aS(o && o.length === l.length ? o : nS(l), a),
    m = tS(f, l, { ease: Array.isArray(c) ? c : iS(l, c) });
  return {
    calculatedDuration: a,
    next: (y) => ((h.value = m(y)), (h.done = y >= a), h),
  };
}
const lS = (a) => a !== null;
function Lc(a, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = a.filter(lS),
    m = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !m || r === void 0 ? h[m] : r;
}
const sS = { decay: ic, inertia: ic, tween: El, keyframes: El, spring: fo };
function dg(a) {
  typeof a.type == "string" && (a.type = sS[a.type]);
}
class Hc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const oS = (a) => a / 100;
class qc extends Hc {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, c;
        const { motionValue: o } = this.options;
        o && o.updatedAt !== ye.now() && this.tick(ye.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (r = this.options).onStop) == null || c.call(r));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    dg(l);
    const {
      type: o = El,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: f = 0,
    } = l;
    let { keyframes: m } = l;
    const y = o || El;
    y !== El &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Ul(oS, ug(m[0], m[1]))), (m = [0, 100]));
    const p = y({ ...l, keyframes: m });
    h === "mirror" &&
      (this.mirroredGenerator = y({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = Bc(p));
    const { calculatedDuration: v } = p;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = p);
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: y,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: p = 0,
      keyframes: v,
      repeat: b,
      repeatType: A,
      repeatDelay: C,
      type: B,
      onUpdate: L,
      finalKeyframe: Y,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l);
    const Z = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      $ = this.playbackSpeed >= 0 ? Z < 0 : Z > c;
    (this.currentTime = Math.max(Z, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let X = this.currentTime,
      lt = r;
    if (b) {
      const q = Math.min(this.currentTime, c) / m;
      let pt = Math.floor(q),
        Ut = q % 1;
      !Ut && q >= 1 && (Ut = 1),
        Ut === 1 && pt--,
        (pt = Math.min(pt, b + 1)),
        !!(pt % 2) &&
          (A === "reverse"
            ? ((Ut = 1 - Ut), C && (Ut -= C / m))
            : A === "mirror" && (lt = f)),
        (X = yn(0, 1, Ut) * m);
    }
    const k = $ ? { done: !1, value: v[0] } : lt.next(X);
    h && (k.value = h(k.value));
    let { done: nt } = k;
    !$ &&
      y !== null &&
      (nt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const rt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && nt));
    return (
      rt && B !== ic && (k.value = Lc(v, this.options, Y, this.speed)),
      L && L(k.value),
      rt && this.finish(),
      k
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return We(this.calculatedDuration);
  }
  get time() {
    return We(this.currentTime);
  }
  set time(l) {
    var o;
    (l = Fe(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      (o = this.driver) == null || o.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(ye.now());
    const o = this.playbackSpeed !== l;
    (this.playbackSpeed = l), o && (this.time = We(this.currentTime));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: l = Xx, startTime: o } = this.options;
    this.driver || (this.driver = l((f) => this.tick(f))),
      (h = (c = this.options).onPlay) == null || h.call(c);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = o ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ye.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var l, o;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (l = this.options).onComplete) == null || o.call(l);
  }
  cancel() {
    var l, o;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (l = this.options).onCancel) == null || o.call(l);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      l.observe(this)
    );
  }
}
function rS(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const ba = (a) => (a * 180) / Math.PI,
  lc = (a) => {
    const l = ba(Math.atan2(a[1], a[0]));
    return sc(l);
  },
  uS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: lc,
    rotateZ: lc,
    skewX: (a) => ba(Math.atan(a[1])),
    skewY: (a) => ba(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  sc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Ap = lc,
  Ep = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Mp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  cS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ep,
    scaleY: Mp,
    scale: (a) => (Ep(a) + Mp(a)) / 2,
    rotateX: (a) => sc(ba(Math.atan2(a[6], a[5]))),
    rotateY: (a) => sc(ba(Math.atan2(-a[2], a[0]))),
    rotateZ: Ap,
    rotate: Ap,
    skewX: (a) => ba(Math.atan(a[4])),
    skewY: (a) => ba(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function oc(a) {
  return a.includes("scale") ? 1 : 0;
}
function rc(a, l) {
  if (!a || a === "none") return oc(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o) (r = cS), (c = o);
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = uS), (c = m);
  }
  if (!c) return oc(l);
  const h = r[l],
    f = c[1].split(",").map(dS);
  return typeof h == "function" ? h(f) : f[h];
}
const fS = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return rc(o, l);
};
function dS(a) {
  return parseFloat(a.trim());
}
const vi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  bi = new Set(vi),
  Dp = (a) => a === gi || a === it,
  hS = new Set(["x", "y", "z"]),
  mS = vi.filter((a) => !hS.has(a));
function pS(a) {
  const l = [];
  return (
    mS.forEach((o) => {
      const r = a.getValue(o);
      r !== void 0 &&
        (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const xa = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: o = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(o),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: o = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(o),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => rc(l, "x"),
  y: (a, { transform: l }) => rc(l, "y"),
};
xa.translateX = xa.x;
xa.translateY = xa.y;
const Sa = new Set();
let uc = !1,
  cc = !1,
  fc = !1;
function hg() {
  if (cc) {
    const a = Array.from(Sa).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      o = new Map();
    l.forEach((r) => {
      const c = pS(r);
      c.length && (o.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = o.get(r);
        c &&
          c.forEach(([h, f]) => {
            var m;
            (m = r.getValue(h)) == null || m.set(f);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (cc = !1), (uc = !1), Sa.forEach((a) => a.complete(fc)), Sa.clear();
}
function mg() {
  Sa.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (cc = !0);
  });
}
function yS() {
  (fc = !0), mg(), hg(), (fc = !1);
}
class Gc {
  constructor(l, o, r, c, h, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Sa.add(this),
          uc || ((uc = !0), _t.read(mg), _t.resolveKeyframes(hg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: r,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const h = c == null ? void 0 : c.get(),
        f = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (r && o) {
        const m = r.readValue(o, f);
        m != null && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && h === void 0 && c.set(l[0]);
    }
    rS(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Sa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Sa.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const gS = (a) => a.startsWith("--");
function vS(a, l, o) {
  gS(l) ? a.style.setProperty(l, o) : (a.style[l] = o);
}
const bS = wc(() => window.ScrollTimeline !== void 0),
  xS = {};
function SS(a, l) {
  const o = wc(a);
  return () => xS[l] ?? o();
}
const pg = SS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Tl = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`,
  Rp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Tl([0, 0.65, 0.55, 1]),
    circOut: Tl([0.55, 0, 1, 0.45]),
    backIn: Tl([0.31, 0.01, 0.66, -0.59]),
    backOut: Tl([0.33, 1.53, 0.69, 0.99]),
  };
function yg(a, l) {
  if (a)
    return typeof a == "function"
      ? pg()
        ? cg(a, l)
        : "ease-out"
      : tg(a)
      ? Tl(a)
      : Array.isArray(a)
      ? a.map((o) => yg(o, l) || Rp.easeOut)
      : Rp[a];
}
function TS(
  a,
  l,
  o,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: y,
  } = {},
  p = void 0
) {
  const v = { [l]: o };
  y && (v.offset = y);
  const b = yg(m, c);
  Array.isArray(b) && (v.easing = b);
  const A = {
    delay: r,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return p && (A.pseudoElement = p), a.animate(v, A);
}
function gg(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function AS({ type: a, ...l }) {
  return gg(a) && pg()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class ES extends Hc {
  constructor(l) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !l))
      return;
    const {
      element: o,
      name: r,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: y,
    } = l;
    (this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = l),
      Rc(typeof l.type != "string");
    const p = AS(l);
    (this.animation = TS(o, r, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const v = Lc(c, this.options, m, this.speed);
          this.updateMotionValue ? this.updateMotionValue(v) : vS(o, r, v),
            this.animation.cancel();
        }
        y == null || y(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var l, o;
    this.isPseudoElement ||
      (o = (l = this.animation).commitStyles) == null ||
      o.call(l);
  }
  get duration() {
    var o, r;
    const l =
      ((r =
        (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) ==
      null
        ? void 0
        : r.call(o).duration) || 0;
    return We(Number(l));
  }
  get time() {
    return We(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    (this.finishedTime = null), (this.animation.currentTime = Fe(l));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, observe: o }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && bS() ? ((this.animation.timeline = l), He) : o(this)
    );
  }
}
const vg = { anticipate: Fy, backInOut: Jy, circInOut: $y };
function MS(a) {
  return a in vg;
}
function DS(a) {
  typeof a.ease == "string" && MS(a.ease) && (a.ease = vg[a.ease]);
}
const wp = 10;
class RS extends ES {
  constructor(l) {
    DS(l),
      dg(l),
      super(l),
      l.startTime && (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: r,
      onComplete: c,
      element: h,
      ...f
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const m = new qc({ ...f, autoplay: !1 }),
      y = Fe(this.finishedTime ?? this.time);
    o.setWithVelocity(m.sample(y - wp).value, m.sample(y).value, wp), m.stop();
  }
}
const Op = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Pn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function wS(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== l) return !0;
}
function OS(a, l, o, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    f = Op(c, l),
    m = Op(h, l);
  return !f || !m ? !1 : wS(a) || ((o === "spring" || gg(o)) && r);
}
function bg(a) {
  return Yy(a) && "offsetHeight" in a;
}
const CS = new Set(["opacity", "clipPath", "filter", "transform"]),
  zS = wc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function VS(a) {
  var p;
  const {
    motionValue: l,
    name: o,
    repeatDelay: r,
    repeatType: c,
    damping: h,
    type: f,
  } = a;
  if (!bg((p = l == null ? void 0 : l.owner) == null ? void 0 : p.current))
    return !1;
  const { onUpdate: m, transformTemplate: y } = l.owner.getProps();
  return (
    zS() &&
    o &&
    CS.has(o) &&
    (o !== "transform" || !y) &&
    !m &&
    !r &&
    c !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const NS = 40;
class jS extends Hc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: y,
    motionValue: p,
    element: v,
    ...b
  }) {
    var B;
    super(),
      (this.stop = () => {
        var L, Y;
        this._animation &&
          (this._animation.stop(),
          (L = this.stopTimeline) == null || L.call(this)),
          (Y = this.keyframeResolver) == null || Y.cancel();
      }),
      (this.createdAt = ye.now());
    const A = {
        autoplay: l,
        delay: o,
        type: r,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        name: y,
        motionValue: p,
        element: v,
        ...b,
      },
      C = (v == null ? void 0 : v.KeyframeResolver) || Gc;
    (this.keyframeResolver = new C(
      m,
      (L, Y, Z) => this.onKeyframesResolved(L, Y, A, !Z),
      y,
      p,
      v
    )),
      (B = this.keyframeResolver) == null || B.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: f,
      velocity: m,
      delay: y,
      isHandoff: p,
      onUpdate: v,
    } = r;
    (this.resolvedAt = ye.now()),
      OS(l, h, f, m) ||
        ((gn.instantAnimations || !y) && (v == null || v(Lc(l, r, o))),
        (l[0] = l[l.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const A = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > NS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...r,
        keyframes: l,
      },
      C =
        !p && VS(A)
          ? new RS({ ...A, element: A.motionValue.owner.current })
          : new qc(A);
    C.finished.then(() => this.notifyFinished()).catch(He),
      this.pendingTimeline &&
        ((this.stopTimeline = C.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = C);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation ||
        ((l = this.keyframeResolver) == null || l.resume(), yS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(),
      (l = this.keyframeResolver) == null || l.cancel();
  }
}
const _S = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function US(a) {
  const l = _S.exec(a);
  if (!l) return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function xg(a, l, o = 1) {
  const [r, c] = US(a);
  if (!r) return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const f = h.trim();
    return Gy(f) ? parseFloat(f) : f;
  }
  return Nc(c) ? xg(c, l, o + 1) : c;
}
function Yc(a, l) {
  return (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
}
const Sg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...vi,
  ]),
  BS = { test: (a) => a === "auto", parse: (a) => a },
  Tg = (a) => (l) => l.test(a),
  Ag = [gi, it, $e, Qn, wx, Rx, BS],
  Cp = (a) => Ag.find(Tg(a));
function LS(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || ky(a)
    : !0;
}
const HS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function qS(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = o.match(jc) || [];
  if (!r) return a;
  const c = o.replace(r, "");
  let h = HS.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const GS = /\b([a-z-]*)\(.*?\)/gu,
  dc = {
    ...Pn,
    getAnimatableNone: (a) => {
      const l = a.match(GS);
      return l ? l.map(qS).join(" ") : a;
    },
  },
  zp = { ...gi, transform: Math.round },
  YS = {
    rotate: Qn,
    rotateX: Qn,
    rotateY: Qn,
    rotateZ: Qn,
    scale: ao,
    scaleX: ao,
    scaleY: ao,
    scaleZ: ao,
    skew: Qn,
    skewX: Qn,
    skewY: Qn,
    distance: it,
    translateX: it,
    translateY: it,
    translateZ: it,
    x: it,
    y: it,
    z: it,
    perspective: it,
    transformPerspective: it,
    opacity: Ol,
    originX: gp,
    originY: gp,
    originZ: it,
  },
  kc = {
    borderWidth: it,
    borderTopWidth: it,
    borderRightWidth: it,
    borderBottomWidth: it,
    borderLeftWidth: it,
    borderRadius: it,
    radius: it,
    borderTopLeftRadius: it,
    borderTopRightRadius: it,
    borderBottomRightRadius: it,
    borderBottomLeftRadius: it,
    width: it,
    maxWidth: it,
    height: it,
    maxHeight: it,
    top: it,
    right: it,
    bottom: it,
    left: it,
    padding: it,
    paddingTop: it,
    paddingRight: it,
    paddingBottom: it,
    paddingLeft: it,
    margin: it,
    marginTop: it,
    marginRight: it,
    marginBottom: it,
    marginLeft: it,
    backgroundPositionX: it,
    backgroundPositionY: it,
    ...YS,
    zIndex: zp,
    fillOpacity: Ol,
    strokeOpacity: Ol,
    numOctaves: zp,
  },
  kS = {
    ...kc,
    color: se,
    backgroundColor: se,
    outlineColor: se,
    fill: se,
    stroke: se,
    borderColor: se,
    borderTopColor: se,
    borderRightColor: se,
    borderBottomColor: se,
    borderLeftColor: se,
    filter: dc,
    WebkitFilter: dc,
  },
  Eg = (a) => kS[a];
function Mg(a, l) {
  let o = Eg(a);
  return (
    o !== dc && (o = Pn), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const XS = new Set(["auto", "none", "0"]);
function ZS(a, l, o) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const h = a[r];
    typeof h == "string" && !XS.has(h) && Cl(h).values.length && (c = a[r]),
      r++;
  }
  if (c && o) for (const h of l) a[h] = Mg(o, c);
}
class QS extends Gc {
  constructor(l, o, r, c, h) {
    super(l, o, r, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let y = 0; y < l.length; y++) {
      let p = l[y];
      if (typeof p == "string" && ((p = p.trim()), Nc(p))) {
        const v = xg(p, o.current);
        v !== void 0 && (l[y] = v),
          y === l.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sg.has(r) || l.length !== 2)) return;
    const [c, h] = l,
      f = Cp(c),
      m = Cp(h);
    if (f !== m)
      if (Dp(f) && Dp(m))
        for (let y = 0; y < l.length; y++) {
          const p = l[y];
          typeof p == "string" && (l[y] = parseFloat(p));
        }
      else xa[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || LS(l[c])) && r.push(c);
    r.length && ZS(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xa[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (o[0] = this.measuredOrigin);
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const h = r.length - 1,
      f = r[h];
    (r[h] = xa[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([y, p]) => {
          l.getValue(y).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function KS(a, l, o) {
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let r = document;
    const c = (o == null ? void 0 : o[a]) ?? r.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a);
}
const Dg = (a, l) => (l && typeof a == "number" ? l.transform(a) : a),
  Vp = 30,
  PS = (a) => !isNaN(parseFloat(a));
class JS {
  constructor(l, o = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        var f, m;
        const h = ye.now();
        if (
          (this.updatedAt !== h && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((f = this.events.change) == null || f.notify(this.current),
            this.dependents))
        )
          for (const y of this.dependents) y.dirty();
        c &&
          ((m = this.events.renderRequest) == null || m.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = ye.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = PS(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Oc());
    const r = this.events[l].add(o);
    return l === "change"
      ? () => {
          r(),
            _t.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    (this.passiveEffect = l), (this.stopPassiveEffect = o);
  }
  set(l, o = !0) {
    !o || !this.passiveEffect
      ? this.updateAndNotify(l, o)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, o, r) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, o = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = ye.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Vp
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Vp);
    return Xy(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, o;
    (l = this.dependents) == null || l.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hi(a, l) {
  return new JS(a, l);
}
const { schedule: Xc } = eg(queueMicrotask, !1),
  ke = { x: !1, y: !1 };
function Rg() {
  return ke.x || ke.y;
}
function FS(a) {
  return a === "x" || a === "y"
    ? ke[a]
      ? null
      : ((ke[a] = !0),
        () => {
          ke[a] = !1;
        })
    : ke.x || ke.y
    ? null
    : ((ke.x = ke.y = !0),
      () => {
        ke.x = ke.y = !1;
      });
}
function wg(a, l) {
  const o = KS(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [o, c, () => r.abort()];
}
function Np(a) {
  return !(a.pointerType === "touch" || Rg());
}
function WS(a, l, o = {}) {
  const [r, c, h] = wg(a, o),
    f = (m) => {
      if (!Np(m)) return;
      const { target: y } = m,
        p = l(y, m);
      if (typeof p != "function" || !y) return;
      const v = (b) => {
        Np(b) && (p(b), y.removeEventListener("pointerleave", v));
      };
      y.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((m) => {
      m.addEventListener("pointerenter", f, c);
    }),
    h
  );
}
const Og = (a, l) => (l ? (a === l ? !0 : Og(a, l.parentElement)) : !1),
  Zc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  $S = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function IS(a) {
  return $S.has(a.tagName) || a.tabIndex !== -1;
}
const so = new WeakSet();
function jp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Xu(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const tT = (a, l) => {
  const o = a.currentTarget;
  if (!o) return;
  const r = jp(() => {
    if (so.has(o)) return;
    Xu(o, "down");
    const c = jp(() => {
        Xu(o, "up");
      }),
      h = () => Xu(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l);
  });
  o.addEventListener("keydown", r, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function _p(a) {
  return Zc(a) && !Rg();
}
function eT(a, l, o = {}) {
  const [r, c, h] = wg(a, o),
    f = (m) => {
      const y = m.currentTarget;
      if (!_p(m)) return;
      so.add(y);
      const p = l(y, m),
        v = (C, B) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", A),
            so.has(y) && so.delete(y),
            _p(C) && typeof p == "function" && p(C, { success: B });
        },
        b = (C) => {
          v(
            C,
            y === window ||
              y === document ||
              o.useGlobalTarget ||
              Og(y, C.target)
          );
        },
        A = (C) => {
          v(C, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", A, c);
    };
  return (
    r.forEach((m) => {
      (o.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        bg(m) &&
          (m.addEventListener("focus", (p) => tT(p, c)),
          !IS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    h
  );
}
function Cg(a) {
  return Yy(a) && "ownerSVGElement" in a;
}
function nT(a) {
  return Cg(a) && a.tagName === "svg";
}
const oe = (a) => !!(a && a.getVelocity),
  aT = [...Ag, se, Pn],
  iT = (a) => aT.find(Tg(a)),
  zg = K.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function lT(a = !0) {
  const l = K.useContext(Ec);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l,
    h = K.useId();
  K.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const f = K.useCallback(() => a && r && r(h), [h, r, a]);
  return !o && r ? [!1, f] : [!0];
}
const Vg = K.createContext({ strict: !1 }),
  Up = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  mi = {};
for (const a in Up) mi[a] = { isEnabled: (l) => Up[a].some((o) => !!l[o]) };
function sT(a) {
  for (const l in a) mi[l] = { ...mi[l], ...a[l] };
}
const oT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ho(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    oT.has(a)
  );
}
let Ng = (a) => !ho(a);
function rT(a) {
  a && (Ng = (l) => (l.startsWith("on") ? !ho(l) : a(l)));
}
try {
  rT(require("@emotion/is-prop-valid").default);
} catch {}
function uT(a, l, o) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((Ng(c) ||
        (o === !0 && ho(c)) ||
        (!l && !ho(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
function cT(a) {
  if (typeof Proxy > "u") return a;
  const l = new Map(),
    o = (...r) => a(...r);
  return new Proxy(o, {
    get: (r, c) =>
      c === "create" ? a : (l.has(c) || l.set(c, a(c)), l.get(c)),
  });
}
const po = K.createContext({});
function yo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function zl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Qc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kc = ["initial", ...Qc];
function go(a) {
  return yo(a.animate) || Kc.some((l) => zl(a[l]));
}
function jg(a) {
  return !!(go(a) || a.variants);
}
function fT(a, l) {
  if (go(a)) {
    const { initial: o, animate: r } = a;
    return {
      initial: o === !1 || zl(o) ? o : void 0,
      animate: zl(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function dT(a) {
  const { initial: l, animate: o } = fT(a, K.useContext(po));
  return K.useMemo(() => ({ initial: l, animate: o }), [Bp(l), Bp(o)]);
}
function Bp(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const hT = Symbol.for("motionComponentSymbol");
function ui(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function mT(a, l, o) {
  return K.useCallback(
    (r) => {
      r && a.onMount && a.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        o && (typeof o == "function" ? o(r) : ui(o) && (o.current = r));
    },
    [l]
  );
}
const Pc = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  pT = "framerAppearId",
  _g = "data-" + Pc(pT),
  Ug = K.createContext({});
function yT(a, l, o, r, c) {
  var L, Y;
  const { visualElement: h } = K.useContext(po),
    f = K.useContext(Vg),
    m = K.useContext(Ec),
    y = K.useContext(zg).reducedMotion,
    p = K.useRef(null);
  (r = r || f.renderer),
    !p.current &&
      r &&
      (p.current = r(a, {
        visualState: l,
        parent: h,
        props: o,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y,
      }));
  const v = p.current,
    b = K.useContext(Ug);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    gT(p.current, o, c, b);
  const A = K.useRef(!1);
  K.useInsertionEffect(() => {
    v && A.current && v.update(o, m);
  });
  const C = o[_g],
    B = K.useRef(
      !!C &&
        !((L = window.MotionHandoffIsComplete) != null && L.call(window, C)) &&
        ((Y = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : Y.call(window, C))
    );
  return (
    rx(() => {
      v &&
        ((A.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        Xc.render(v.render),
        B.current && v.animationState && v.animationState.animateChanges());
    }),
    K.useEffect(() => {
      v &&
        (!B.current && v.animationState && v.animationState.animateChanges(),
        B.current &&
          (queueMicrotask(() => {
            var Z;
            (Z = window.MotionHandoffMarkAsComplete) == null ||
              Z.call(window, C);
          }),
          (B.current = !1)));
    }),
    v
  );
}
function gT(a, l, o, r) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: m,
    layoutScroll: y,
    layoutRoot: p,
    layoutCrossfade: v,
  } = l;
  (a.projection = new o(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Bg(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (m && ui(m)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: r,
      crossfade: v,
      layoutScroll: y,
      layoutRoot: p,
    });
}
function Bg(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Bg(a.parent);
}
function vT({
  preloadedFeatures: a,
  createVisualElement: l,
  useRender: o,
  useVisualState: r,
  Component: c,
}) {
  a && sT(a);
  function h(m, y) {
    let p;
    const v = { ...K.useContext(zg), ...m, layoutId: bT(m) },
      { isStatic: b } = v,
      A = dT(m),
      C = r(m, b);
    if (!b && Ac) {
      xT();
      const B = ST(v);
      (p = B.MeasureLayout),
        (A.visualElement = yT(c, C, v, l, B.ProjectionNode));
    }
    return w.jsxs(po.Provider, {
      value: A,
      children: [
        p && A.visualElement
          ? w.jsx(p, { visualElement: A.visualElement, ...v })
          : null,
        o(c, m, mT(C, A.visualElement, y), C, b, A.visualElement),
      ],
    });
  }
  h.displayName = `motion.${
    typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`
  }`;
  const f = K.forwardRef(h);
  return (f[hT] = c), f;
}
function bT({ layoutId: a }) {
  const l = K.useContext(qy).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function xT(a, l) {
  K.useContext(Vg).strict;
}
function ST(a) {
  const { drag: l, layout: o } = mi;
  if (!l && !o) return {};
  const r = { ...l, ...o };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (o != null && o.isEnabled(a))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Vl = {};
function TT(a) {
  for (const l in a) (Vl[l] = a[l]), Vc(l) && (Vl[l].isCSSVariable = !0);
}
function Lg(a, { layout: l, layoutId: o }) {
  return (
    bi.has(a) ||
    a.startsWith("origin") ||
    ((l || o !== void 0) && (!!Vl[a] || a === "opacity"))
  );
}
const AT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ET = vi.length;
function MT(a, l, o) {
  let r = "",
    c = !0;
  for (let h = 0; h < ET; h++) {
    const f = vi[h],
      m = a[f];
    if (m === void 0) continue;
    let y = !0;
    if (
      (typeof m == "number"
        ? (y = m === (f.startsWith("scale") ? 1 : 0))
        : (y = parseFloat(m) === 0),
      !y || o)
    ) {
      const p = Dg(m, kc[f]);
      if (!y) {
        c = !1;
        const v = AT[f] || f;
        r += `${v}(${p}) `;
      }
      o && (l[f] = p);
    }
  }
  return (r = r.trim()), o ? (r = o(l, c ? "" : r)) : c && (r = "none"), r;
}
function Jc(a, l, o) {
  const { style: r, vars: c, transformOrigin: h } = a;
  let f = !1,
    m = !1;
  for (const y in l) {
    const p = l[y];
    if (bi.has(y)) {
      f = !0;
      continue;
    } else if (Vc(y)) {
      c[y] = p;
      continue;
    } else {
      const v = Dg(p, kc[y]);
      y.startsWith("origin") ? ((m = !0), (h[y] = v)) : (r[y] = v);
    }
  }
  if (
    (l.transform ||
      (f || o
        ? (r.transform = MT(l, a.transform, o))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: y = "50%", originY: p = "50%", originZ: v = 0 } = h;
    r.transformOrigin = `${y} ${p} ${v}`;
  }
}
const Fc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Hg(a, l, o) {
  for (const r in l) !oe(l[r]) && !Lg(r, o) && (a[r] = l[r]);
}
function DT({ transformTemplate: a }, l) {
  return K.useMemo(() => {
    const o = Fc();
    return Jc(o, l, a), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function RT(a, l) {
  const o = a.style || {},
    r = {};
  return Hg(r, o, a), Object.assign(r, DT(a, l)), r;
}
function wT(a, l) {
  const o = {},
    r = RT(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
const OT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  CT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function zT(a, l, o = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? OT : CT;
  a[h.offset] = it.transform(-r);
  const f = it.transform(l),
    m = it.transform(o);
  a[h.array] = `${f} ${m}`;
}
function qg(
  a,
  {
    attrX: l,
    attrY: o,
    attrScale: r,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...m
  },
  y,
  p,
  v
) {
  if ((Jc(a, m, p), y)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: b, style: A } = a;
  b.transform && ((A.transform = b.transform), delete b.transform),
    (A.transform || b.transformOrigin) &&
      ((A.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    A.transform &&
      ((A.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox),
    l !== void 0 && (b.x = l),
    o !== void 0 && (b.y = o),
    r !== void 0 && (b.scale = r),
    c !== void 0 && zT(b, c, h, f, !1);
}
const Gg = () => ({ ...Fc(), attrs: {} }),
  Yg = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function VT(a, l, o, r) {
  const c = K.useMemo(() => {
    const h = Gg();
    return (
      qg(h, l, Yg(r), a.transformTemplate, a.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (a.style) {
    const h = {};
    Hg(h, a.style, a), (c.style = { ...h, ...c.style });
  }
  return c;
}
const NT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Wc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(NT.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function jT(a = !1) {
  return (o, r, c, { latestValues: h }, f) => {
    const y = (Wc(o) ? VT : wT)(r, h, f, o),
      p = uT(r, typeof o == "string", a),
      v = o !== K.Fragment ? { ...p, ...y, ref: c } : {},
      { children: b } = r,
      A = K.useMemo(() => (oe(b) ? b.get() : b), [b]);
    return K.createElement(o, { ...v, children: A });
  };
}
function Lp(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((o, r) => {
        (l[0][r] = o.get()), (l[1][r] = o.getVelocity());
      }),
    l
  );
}
function $c(a, l, o, r) {
  if (typeof l == "function") {
    const [c, h] = Lp(r);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = Lp(r);
    l = l(o !== void 0 ? o : a.custom, c, h);
  }
  return l;
}
function oo(a) {
  return oe(a) ? a.get() : a;
}
function _T({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, r, c) {
  return { latestValues: UT(o, r, c, a), renderState: l() };
}
const kg = (a) => (l, o) => {
  const r = K.useContext(po),
    c = K.useContext(Ec),
    h = () => _T(a, l, r, c);
  return o ? h() : ox(h);
};
function UT(a, l, o, r) {
  const c = {},
    h = r(a, {});
  for (const A in h) c[A] = oo(h[A]);
  let { initial: f, animate: m } = a;
  const y = go(a),
    p = jg(a);
  l &&
    p &&
    !y &&
    a.inherit !== !1 &&
    (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || f === !1;
  const b = v ? m : f;
  if (b && typeof b != "boolean" && !yo(b)) {
    const A = Array.isArray(b) ? b : [b];
    for (let C = 0; C < A.length; C++) {
      const B = $c(a, A[C]);
      if (B) {
        const { transitionEnd: L, transition: Y, ...Z } = B;
        for (const $ in Z) {
          let X = Z[$];
          if (Array.isArray(X)) {
            const lt = v ? X.length - 1 : 0;
            X = X[lt];
          }
          X !== null && (c[$] = X);
        }
        for (const $ in L) c[$] = L[$];
      }
    }
  }
  return c;
}
function Ic(a, l, o) {
  var h;
  const { style: r } = a,
    c = {};
  for (const f in r)
    (oe(r[f]) ||
      (l.style && oe(l.style[f])) ||
      Lg(f, a) ||
      ((h = o == null ? void 0 : o.getValue(f)) == null
        ? void 0
        : h.liveStyle) !== void 0) &&
      (c[f] = r[f]);
  return c;
}
const BT = {
  useVisualState: kg({
    scrapeMotionValuesFromProps: Ic,
    createRenderState: Fc,
  }),
};
function Xg(a, l, o) {
  const r = Ic(a, l, o);
  for (const c in a)
    if (oe(a[c]) || oe(l[c])) {
      const h =
        vi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[h] = a[c];
    }
  return r;
}
const LT = {
  useVisualState: kg({
    scrapeMotionValuesFromProps: Xg,
    createRenderState: Gg,
  }),
};
function HT(a, l) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Wc(r) ? LT : BT),
      preloadedFeatures: a,
      useRender: jT(c),
      createVisualElement: l,
      Component: r,
    };
    return vT(f);
  };
}
function Nl(a, l, o) {
  const r = a.getProps();
  return $c(r, l, o !== void 0 ? o : r.custom, a);
}
const hc = (a) => Array.isArray(a);
function qT(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, hi(o));
}
function GT(a) {
  return hc(a) ? a[a.length - 1] || 0 : a;
}
function YT(a, l) {
  const o = Nl(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const f in h) {
    const m = GT(h[f]);
    qT(a, f, m);
  }
}
function kT(a) {
  return !!(oe(a) && a.add);
}
function mc(a, l) {
  const o = a.getValue("willChange");
  if (kT(o)) return o.add(l);
  if (!o && gn.WillChange) {
    const r = new gn.WillChange("auto");
    a.addValue("willChange", r), r.add(l);
  }
}
function Zg(a) {
  return a.props[_g];
}
const XT = (a) => a !== null;
function ZT(a, { repeat: l, repeatType: o = "loop" }, r) {
  const c = a.filter(XT),
    h = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[h];
}
const QT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  KT = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  PT = { type: "keyframes", duration: 0.8 },
  JT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  FT = (a, { keyframes: l }) =>
    l.length > 2
      ? PT
      : bi.has(a)
      ? a.startsWith("scale")
        ? KT(l[1])
        : QT
      : JT;
function WT({
  when: a,
  delay: l,
  delayChildren: o,
  staggerChildren: r,
  staggerDirection: c,
  repeat: h,
  repeatType: f,
  repeatDelay: m,
  from: y,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
const tf =
  (a, l, o, r = {}, c, h) =>
  (f) => {
    const m = Yc(r, a) || {},
      y = m.delay || r.delay || 0;
    let { elapsed: p = 0 } = r;
    p = p - Fe(y);
    const v = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (A) => {
        l.set(A), m.onUpdate && m.onUpdate(A);
      },
      onComplete: () => {
        f(), m.onComplete && m.onComplete();
      },
      name: a,
      motionValue: l,
      element: h ? void 0 : c,
    };
    WT(m) || Object.assign(v, FT(a, v)),
      v.duration && (v.duration = Fe(v.duration)),
      v.repeatDelay && (v.repeatDelay = Fe(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (b = !0)),
      (gn.instantAnimations || gn.skipAnimations) &&
        ((b = !0), (v.duration = 0), (v.delay = 0)),
      (v.allowFlatten = !m.type && !m.ease),
      b && !h && l.get() !== void 0)
    ) {
      const A = ZT(v.keyframes, m);
      if (A !== void 0) {
        _t.update(() => {
          v.onUpdate(A), v.onComplete();
        });
        return;
      }
    }
    return m.isSync ? new qc(v) : new jS(v);
  };
function $T({ protectedKeys: a, needsAnimating: l }, o) {
  const r = a.hasOwnProperty(o) && l[o] !== !0;
  return (l[o] = !1), r;
}
function Qg(a, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h = a.getDefaultTransition(), transitionEnd: f, ...m } = l;
  r && (h = r);
  const y = [],
    p = c && a.animationState && a.animationState.getState()[c];
  for (const v in m) {
    const b = a.getValue(v, a.latestValues[v] ?? null),
      A = m[v];
    if (A === void 0 || (p && $T(p, v))) continue;
    const C = { delay: o, ...Yc(h || {}, v) },
      B = b.get();
    if (
      B !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(A) &&
      A === B &&
      !C.velocity
    )
      continue;
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const Z = Zg(a);
      if (Z) {
        const $ = window.MotionHandoffAnimation(Z, v, _t);
        $ !== null && ((C.startTime = $), (L = !0));
      }
    }
    mc(a, v),
      b.start(
        tf(v, b, A, a.shouldReduceMotion && Sg.has(v) ? { type: !1 } : C, a, L)
      );
    const Y = b.animation;
    Y && y.push(Y);
  }
  return (
    f &&
      Promise.all(y).then(() => {
        _t.update(() => {
          f && YT(a, f);
        });
      }),
    y
  );
}
function pc(a, l, o = {}) {
  var y;
  const r = Nl(
    a,
    l,
    o.type === "exit"
      ? (y = a.presenceContext) == null
        ? void 0
        : y.custom
      : void 0
  );
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const h = r ? () => Promise.all(Qg(a, r, o)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: A,
            } = c;
            return IT(a, l, v + p, b, A, o);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [p, v] = m === "beforeChildren" ? [h, f] : [f, h];
    return p().then(() => v());
  } else return Promise.all([h(), f(o.delay)]);
}
function IT(a, l, o = 0, r = 0, c = 1, h) {
  const f = [],
    m = (a.variantChildren.size - 1) * r,
    y = c === 1 ? (p = 0) => p * r : (p = 0) => m - p * r;
  return (
    Array.from(a.variantChildren)
      .sort(t2)
      .forEach((p, v) => {
        p.notify("AnimationStart", l),
          f.push(
            pc(p, l, { ...h, delay: o + y(v) }).then(() =>
              p.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(f)
  );
}
function t2(a, l) {
  return a.sortNodePosition(l);
}
function e2(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((h) => pc(a, h, o));
    r = Promise.all(c);
  } else if (typeof l == "string") r = pc(a, l, o);
  else {
    const c = typeof l == "function" ? Nl(a, l, o.custom) : l;
    r = Promise.all(Qg(a, c, o));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function Kg(a, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== a.length) return !1;
  for (let r = 0; r < o; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const n2 = Kc.length;
function Pg(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? Pg(a.parent) || {} : {};
    return a.props.initial !== void 0 && (o.initial = a.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < n2; o++) {
    const r = Kc[o],
      c = a.props[r];
    (zl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const a2 = [...Qc].reverse(),
  i2 = Qc.length;
function l2(a) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: r }) => e2(a, o, r)));
}
function s2(a) {
  let l = l2(a),
    o = Hp(),
    r = !0;
  const c = (y) => (p, v) => {
    var A;
    const b = Nl(
      a,
      v,
      y === "exit"
        ? (A = a.presenceContext) == null
          ? void 0
          : A.custom
        : void 0
    );
    if (b) {
      const { transition: C, transitionEnd: B, ...L } = b;
      p = { ...p, ...L, ...B };
    }
    return p;
  };
  function h(y) {
    l = y(a);
  }
  function f(y) {
    const { props: p } = a,
      v = Pg(a.parent) || {},
      b = [],
      A = new Set();
    let C = {},
      B = 1 / 0;
    for (let Y = 0; Y < i2; Y++) {
      const Z = a2[Y],
        $ = o[Z],
        X = p[Z] !== void 0 ? p[Z] : v[Z],
        lt = zl(X),
        k = Z === y ? $.isActive : null;
      k === !1 && (B = Y);
      let nt = X === v[Z] && X !== p[Z] && lt;
      if (
        (nt && r && a.manuallyAnimateOnMount && (nt = !1),
        ($.protectedKeys = { ...C }),
        (!$.isActive && k === null) ||
          (!X && !$.prevProp) ||
          yo(X) ||
          typeof X == "boolean")
      )
        continue;
      const rt = o2($.prevProp, X);
      let q = rt || (Z === y && $.isActive && !nt && lt) || (Y > B && lt),
        pt = !1;
      const Ut = Array.isArray(X) ? X : [X];
      let Zt = Ut.reduce(c(Z), {});
      k === !1 && (Zt = {});
      const { prevResolvedValues: Ot = {} } = $,
        Re = { ...Ot, ...Zt },
        ce = (H) => {
          (q = !0),
            A.has(H) && ((pt = !0), A.delete(H)),
            ($.needsAnimating[H] = !0);
          const _ = a.getValue(H);
          _ && (_.liveStyle = !1);
        };
      for (const H in Re) {
        const _ = Zt[H],
          yt = Ot[H];
        if (C.hasOwnProperty(H)) continue;
        let S = !1;
        hc(_) && hc(yt) ? (S = !Kg(_, yt)) : (S = _ !== yt),
          S
            ? _ != null
              ? ce(H)
              : A.add(H)
            : _ !== void 0 && A.has(H)
            ? ce(H)
            : ($.protectedKeys[H] = !0);
      }
      ($.prevProp = X),
        ($.prevResolvedValues = Zt),
        $.isActive && (C = { ...C, ...Zt }),
        r && a.blockInitialAnimation && (q = !1),
        q &&
          (!(nt && rt) || pt) &&
          b.push(...Ut.map((H) => ({ animation: H, options: { type: Z } })));
    }
    if (A.size) {
      const Y = {};
      if (typeof p.initial != "boolean") {
        const Z = Nl(a, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        Z && Z.transition && (Y.transition = Z.transition);
      }
      A.forEach((Z) => {
        const $ = a.getBaseTarget(Z),
          X = a.getValue(Z);
        X && (X.liveStyle = !0), (Y[Z] = $ ?? null);
      }),
        b.push({ animation: Y });
    }
    let L = !!b.length;
    return (
      r &&
        (p.initial === !1 || p.initial === p.animate) &&
        !a.manuallyAnimateOnMount &&
        (L = !1),
      (r = !1),
      L ? l(b) : Promise.resolve()
    );
  }
  function m(y, p) {
    var b;
    if (o[y].isActive === p) return Promise.resolve();
    (b = a.variantChildren) == null ||
      b.forEach((A) => {
        var C;
        return (C = A.animationState) == null ? void 0 : C.setActive(y, p);
      }),
      (o[y].isActive = p);
    const v = f(y);
    for (const A in o) o[A].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: h,
    getState: () => o,
    reset: () => {
      (o = Hp()), (r = !0);
    },
  };
}
function o2(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Kg(l, a) : !1;
}
function ya(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Hp() {
  return {
    animate: ya(!0),
    whileInView: ya(),
    whileHover: ya(),
    whileTap: ya(),
    whileDrag: ya(),
    whileFocus: ya(),
    exit: ya(),
  };
}
class Fn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class r2 extends Fn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = s2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    yo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let u2 = 0;
class c2 extends Fn {
  constructor() {
    super(...arguments), (this.id = u2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const f2 = { animation: { Feature: r2 }, exit: { Feature: c2 } };
function jl(a, l, o, r = { passive: !0 }) {
  return a.addEventListener(l, o, r), () => a.removeEventListener(l, o);
}
function Hl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const d2 = (a) => (l) => Zc(l) && a(l, Hl(l));
function Ml(a, l, o, r) {
  return jl(a, l, d2(o), r);
}
function Jg({ top: a, left: l, right: o, bottom: r }) {
  return { x: { min: l, max: o }, y: { min: a, max: r } };
}
function h2({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function m2(a, l) {
  if (!l) return a;
  const o = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
const Fg = 1e-4,
  p2 = 1 - Fg,
  y2 = 1 + Fg,
  Wg = 0.01,
  g2 = 0 - Wg,
  v2 = 0 + Wg;
function ue(a) {
  return a.max - a.min;
}
function b2(a, l, o) {
  return Math.abs(a - l) <= o;
}
function qp(a, l, o, r = 0.5) {
  (a.origin = r),
    (a.originPoint = jt(l.min, l.max, a.origin)),
    (a.scale = ue(o) / ue(l)),
    (a.translate = jt(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= p2 && a.scale <= y2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= g2 && a.translate <= v2) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function Dl(a, l, o, r) {
  qp(a.x, l.x, o.x, r ? r.originX : void 0),
    qp(a.y, l.y, o.y, r ? r.originY : void 0);
}
function Gp(a, l, o) {
  (a.min = o.min + l.min), (a.max = a.min + ue(l));
}
function x2(a, l, o) {
  Gp(a.x, l.x, o.x), Gp(a.y, l.y, o.y);
}
function Yp(a, l, o) {
  (a.min = l.min - o.min), (a.max = a.min + ue(l));
}
function Rl(a, l, o) {
  Yp(a.x, l.x, o.x), Yp(a.y, l.y, o.y);
}
const kp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: kp(), y: kp() }),
  Xp = () => ({ min: 0, max: 0 }),
  Yt = () => ({ x: Xp(), y: Xp() });
function Le(a) {
  return [a("x"), a("y")];
}
function Zu(a) {
  return a === void 0 || a === 1;
}
function yc({ scale: a, scaleX: l, scaleY: o }) {
  return !Zu(a) || !Zu(l) || !Zu(o);
}
function ga(a) {
  return (
    yc(a) ||
    $g(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function $g(a) {
  return Zp(a.x) || Zp(a.y);
}
function Zp(a) {
  return a && a !== "0%";
}
function mo(a, l, o) {
  const r = a - o,
    c = l * r;
  return o + c;
}
function Qp(a, l, o, r, c) {
  return c !== void 0 && (a = mo(a, c, r)), mo(a, o, r) + l;
}
function gc(a, l = 0, o = 1, r, c) {
  (a.min = Qp(a.min, l, o, r, c)), (a.max = Qp(a.max, l, o, r, c));
}
function Ig(a, { x: l, y: o }) {
  gc(a.x, l.translate, l.scale, l.originPoint),
    gc(a.y, o.translate, o.scale, o.originPoint);
}
const Kp = 0.999999999999,
  Pp = 1.0000000000001;
function S2(a, l, o, r = !1) {
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, f;
  for (let m = 0; m < c; m++) {
    (h = o[m]), (f = h.projectionDelta);
    const { visualElement: y } = h.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (r &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        di(a, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      f && ((l.x *= f.x.scale), (l.y *= f.y.scale), Ig(a, f)),
      r && ga(h.latestValues) && di(a, h.latestValues));
  }
  l.x < Pp && l.x > Kp && (l.x = 1), l.y < Pp && l.y > Kp && (l.y = 1);
}
function fi(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function Jp(a, l, o, r, c = 0.5) {
  const h = jt(a.min, a.max, c);
  gc(a, l, o, h, r);
}
function di(a, l) {
  Jp(a.x, l.x, l.scaleX, l.scale, l.originX),
    Jp(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function t0(a, l) {
  return Jg(m2(a.getBoundingClientRect(), l));
}
function T2(a, l, o) {
  const r = t0(a, o),
    { scroll: c } = l;
  return c && (fi(r.x, c.offset.x), fi(r.y, c.offset.y)), r;
}
const e0 = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  Fp = (a, l) => Math.abs(a - l);
function A2(a, l) {
  const o = Fp(a.x, l.x),
    r = Fp(a.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
class n0 {
  constructor(
    l,
    o,
    { transformPagePoint: r, contextWindow: c, dragSnapToOrigin: h = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = Ku(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          C = A2(b.offset, { x: 0, y: 0 }) >= 3;
        if (!A && !C) return;
        const { point: B } = b,
          { timestamp: L } = ne;
        this.history.push({ ...B, timestamp: L });
        const { onStart: Y, onMove: Z } = this.handlers;
        A ||
          (Y && Y(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          Z && Z(this.lastMoveEvent, b);
      }),
      (this.handlePointerMove = (b, A) => {
        (this.lastMoveEvent = b),
          (this.lastMoveEventInfo = Qu(A, this.transformPagePoint)),
          _t.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (b, A) => {
        this.end();
        const { onEnd: C, onSessionEnd: B, resumeAnimation: L } = this.handlers;
        if (
          (this.dragSnapToOrigin && L && L(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = Ku(
          b.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Qu(A, this.transformPagePoint),
          this.history
        );
        this.startEvent && C && C(b, Y), B && B(b, Y);
      }),
      !Zc(l))
    )
      return;
    (this.dragSnapToOrigin = h),
      (this.handlers = o),
      (this.transformPagePoint = r),
      (this.contextWindow = c || window);
    const f = Hl(l),
      m = Qu(f, this.transformPagePoint),
      { point: y } = m,
      { timestamp: p } = ne;
    this.history = [{ ...y, timestamp: p }];
    const { onSessionStart: v } = o;
    v && v(l, Ku(m, this.history)),
      (this.removeListeners = Ul(
        Ml(this.contextWindow, "pointermove", this.handlePointerMove),
        Ml(this.contextWindow, "pointerup", this.handlePointerUp),
        Ml(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Kn(this.updatePoint);
  }
}
function Qu(a, l) {
  return l ? { point: l(a.point) } : a;
}
function Wp(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Ku({ point: a }, l) {
  return {
    point: a,
    delta: Wp(a, a0(l)),
    offset: Wp(a, E2(l)),
    velocity: M2(l, 0.1),
  };
}
function E2(a) {
  return a[0];
}
function a0(a) {
  return a[a.length - 1];
}
function M2(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    r = null;
  const c = a0(a);
  for (; o >= 0 && ((r = a[o]), !(c.timestamp - r.timestamp > Fe(l))); ) o--;
  if (!r) return { x: 0, y: 0 };
  const h = We(c.timestamp - r.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - r.x) / h, y: (c.y - r.y) / h };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function D2(a, { min: l, max: o }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? jt(l, a, r.min) : Math.max(a, l))
      : o !== void 0 && a > o && (a = r ? jt(o, a, r.max) : Math.min(a, o)),
    a
  );
}
function $p(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function R2(a, { top: l, left: o, bottom: r, right: c }) {
  return { x: $p(a.x, o, c), y: $p(a.y, l, r) };
}
function Ip(a, l) {
  let o = l.min - a.min,
    r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([o, r] = [r, o]), { min: o, max: r };
}
function w2(a, l) {
  return { x: Ip(a.x, l.x), y: Ip(a.y, l.y) };
}
function O2(a, l) {
  let o = 0.5;
  const r = ue(a),
    c = ue(l);
  return (
    c > r
      ? (o = wl(l.min, l.max - r, a.min))
      : r > c && (o = wl(a.min, a.max - c, l.min)),
    yn(0, 1, o)
  );
}
function C2(a, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - a.min),
    l.max !== void 0 && (o.max = l.max - a.min),
    o
  );
}
const vc = 0.35;
function z2(a = vc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = vc),
    { x: ty(a, "left", "right"), y: ty(a, "top", "bottom") }
  );
}
function ty(a, l, o) {
  return { min: ey(a, l), max: ey(a, o) };
}
function ey(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const V2 = new WeakMap();
class N2 {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Yt()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: o = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: b } = this.getProps();
        b ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(Hl(v).point);
      },
      h = (v, b) => {
        const { drag: A, dragPropagation: C, onDragStart: B } = this.getProps();
        if (
          A &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = FS(A)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Le((Y) => {
            let Z = this.getAxisMotionValue(Y).get() || 0;
            if ($e.test(Z)) {
              const { projection: $ } = this.visualElement;
              if ($ && $.layout) {
                const X = $.layout.layoutBox[Y];
                X && (Z = ue(X) * (parseFloat(Z) / 100));
              }
            }
            this.originPoint[Y] = Z;
          }),
          B && _t.postRender(() => B(v, b)),
          mc(this.visualElement, "transform");
        const { animationState: L } = this.visualElement;
        L && L.setActive("whileDrag", !0);
      },
      f = (v, b) => {
        const {
          dragPropagation: A,
          dragDirectionLock: C,
          onDirectionLock: B,
          onDrag: L,
        } = this.getProps();
        if (!A && !this.openDragLock) return;
        const { offset: Y } = b;
        if (C && this.currentDirection === null) {
          (this.currentDirection = j2(Y)),
            this.currentDirection !== null && B && B(this.currentDirection);
          return;
        }
        this.updateAxis("x", b.point, Y),
          this.updateAxis("y", b.point, Y),
          this.visualElement.render(),
          L && L(v, b);
      },
      m = (v, b) => this.stop(v, b),
      y = () =>
        Le((v) => {
          var b;
          return (
            this.getAnimationState(v) === "paused" &&
            ((b = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : b.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new n0(
      l,
      {
        onSessionStart: c,
        onStart: h,
        onMove: f,
        onSessionEnd: m,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: e0(this.visualElement),
      }
    );
  }
  stop(l, o) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = o;
    this.startAnimation(c);
    const { onDragEnd: h } = this.getProps();
    h && _t.postRender(() => h(l, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !io(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (f = D2(f, this.constraints[l], this.elastic[l])),
      h.set(f);
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
          ? void 0
          : h.layout,
      c = this.constraints;
    l && ui(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
      ? (this.constraints = R2(r.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = z2(o)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Le((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = C2(r.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !ui(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = T2(r, c.root, this.visualElement.getTransformPagePoint());
    let f = w2(c.layout.layoutBox, h);
    if (o) {
      const m = o(h2(f));
      (this.hasMutatedConstraints = !!m), m && (f = Jg(m));
    }
    return f;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      y = this.constraints || {},
      p = Le((v) => {
        if (!io(v, o, this.currentDirection)) return;
        let b = (y && y[v]) || {};
        f && (b = { min: 0, max: 0 });
        const A = c ? 200 : 1e6,
          C = c ? 40 : 1e7,
          B = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: A,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(v, B);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return (
      mc(this.visualElement, l), r.start(tf(l, r, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Le((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Le((l) => {
      var o;
      return (o = this.getAxisMotionValue(l).animation) == null
        ? void 0
        : o.pause();
    });
  }
  getAnimationState(l) {
    var o;
    return (o = this.getAxisMotionValue(l).animation) == null
      ? void 0
      : o.state;
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[o];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Le((o) => {
      const { drag: r } = this.getProps();
      if (!io(o, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[o];
        h.set(l[o] - jt(f, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ui(o) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Le((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const y = m.get();
        c[f] = O2({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Le((f) => {
        if (!io(f, l, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: y, max: p } = this.constraints[f];
        m.set(jt(y, p, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    V2.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = Ml(l, "pointerdown", (y) => {
        const { drag: p, dragListener: v = !0 } = this.getProps();
        p && v && this.start(y);
      }),
      r = () => {
        const { dragConstraints: y } = this.getProps();
        ui(y) && y.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      h = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      _t.read(r);
    const f = jl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Le((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += y[v].translate),
                b.set(b.get() + y[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), o(), h(), m && m();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = vc,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function io(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function j2(a, l = 10) {
  let o = null;
  return Math.abs(a.y) > l ? (o = "y") : Math.abs(a.x) > l && (o = "x"), o;
}
class _2 extends Fn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = He),
      (this.removeListeners = He),
      (this.controls = new N2(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || He);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ny = (a) => (l, o) => {
  a && _t.postRender(() => a(l, o));
};
class U2 extends Fn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = He);
  }
  onPointerDown(l) {
    this.session = new n0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: e0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: ny(l),
      onStart: ny(o),
      onMove: r,
      onEnd: (h, f) => {
        delete this.session, c && _t.postRender(() => c(h, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ml(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ro = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ay(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const Sl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (it.test(a)) a = parseFloat(a);
        else return a;
      const o = ay(a, l.target.x),
        r = ay(a, l.target.y);
      return `${o}% ${r}%`;
    },
  },
  B2 = {
    correct: (a, { treeScale: l, projectionDelta: o }) => {
      const r = a,
        c = Pn.parse(a);
      if (c.length > 5) return r;
      const h = Pn.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        m = o.x.scale * l.x,
        y = o.y.scale * l.y;
      (c[0 + f] /= m), (c[1 + f] /= y);
      const p = jt(m, y, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        h(c)
      );
    },
  };
class L2 extends K.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: h } = l;
    TT(H2),
      h &&
        (o.group && o.group.add(h),
        r && r.register && c && r.register(h),
        h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        h.setOptions({
          ...h.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ro.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: o,
        visualElement: r,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = h),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              _t.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Xc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      o && o.group && o.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function i0(a) {
  const [l, o] = lT(),
    r = K.useContext(qy);
  return w.jsx(L2, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: K.useContext(Ug),
    isPresent: l,
    safeToRemove: o,
  });
}
const H2 = {
  borderRadius: {
    ...Sl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Sl,
  borderTopRightRadius: Sl,
  borderBottomLeftRadius: Sl,
  borderBottomRightRadius: Sl,
  boxShadow: B2,
};
function q2(a, l, o) {
  const r = oe(a) ? a : hi(a);
  return r.start(tf("", r, l, o)), r.animation;
}
const G2 = (a, l) => a.depth - l.depth;
class Y2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Mc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    Dc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(G2),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function k2(a, l) {
  const o = ye.now(),
    r = ({ timestamp: c }) => {
      const h = c - o;
      h >= l && (Kn(r), a(h - l));
    };
  return _t.setup(r, !0), () => Kn(r);
}
const l0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  X2 = l0.length,
  iy = (a) => (typeof a == "string" ? parseFloat(a) : a),
  ly = (a) => typeof a == "number" || it.test(a);
function Z2(a, l, o, r, c, h) {
  c
    ? ((a.opacity = jt(0, o.opacity ?? 1, Q2(r))),
      (a.opacityExit = jt(l.opacity ?? 1, 0, K2(r))))
    : h && (a.opacity = jt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let f = 0; f < X2; f++) {
    const m = `border${l0[f]}Radius`;
    let y = sy(l, m),
      p = sy(o, m);
    if (y === void 0 && p === void 0) continue;
    y || (y = 0),
      p || (p = 0),
      y === 0 || p === 0 || ly(y) === ly(p)
        ? ((a[m] = Math.max(jt(iy(y), iy(p), r), 0)),
          ($e.test(p) || $e.test(y)) && (a[m] += "%"))
        : (a[m] = p);
  }
  (l.rotate || o.rotate) && (a.rotate = jt(l.rotate || 0, o.rotate || 0, r));
}
function sy(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const Q2 = s0(0, 0.5, Wy),
  K2 = s0(0.5, 0.95, He);
function s0(a, l, o) {
  return (r) => (r < a ? 0 : r > l ? 1 : o(wl(a, l, r)));
}
function oy(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function Be(a, l) {
  oy(a.x, l.x), oy(a.y, l.y);
}
function ry(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function uy(a, l, o, r, c) {
  return (
    (a -= l), (a = mo(a, 1 / o, r)), c !== void 0 && (a = mo(a, 1 / c, r)), a
  );
}
function P2(a, l = 0, o = 1, r = 0.5, c, h = a, f = a) {
  if (
    ($e.test(l) &&
      ((l = parseFloat(l)), (l = jt(f.min, f.max, l / 100) - f.min)),
    typeof l != "number")
  )
    return;
  let m = jt(h.min, h.max, r);
  a === h && (m -= l),
    (a.min = uy(a.min, l, o, m, c)),
    (a.max = uy(a.max, l, o, m, c));
}
function cy(a, l, [o, r, c], h, f) {
  P2(a, l[o], l[r], l[c], l.scale, h, f);
}
const J2 = ["x", "scaleX", "originX"],
  F2 = ["y", "scaleY", "originY"];
function fy(a, l, o, r) {
  cy(a.x, l, J2, o ? o.x : void 0, r ? r.x : void 0),
    cy(a.y, l, F2, o ? o.y : void 0, r ? r.y : void 0);
}
function dy(a) {
  return a.translate === 0 && a.scale === 1;
}
function o0(a) {
  return dy(a.x) && dy(a.y);
}
function hy(a, l) {
  return a.min === l.min && a.max === l.max;
}
function W2(a, l) {
  return hy(a.x, l.x) && hy(a.y, l.y);
}
function my(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function r0(a, l) {
  return my(a.x, l.x) && my(a.y, l.y);
}
function py(a) {
  return ue(a.x) / ue(a.y);
}
function yy(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class $2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Mc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (Dc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    const o = this.members.findIndex((c) => l === c);
    if (o === 0) return !1;
    let r;
    for (let c = o; c >= 0; c--) {
      const h = this.members[c];
      if (h.isPresent !== !1) {
        r = h;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        o && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: o, resumingFrom: r } = l;
      o.onExitComplete && o.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function I2(a, l, o) {
  let r = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    f = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || h || f) && (r = `translate3d(${c}px, ${h}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: b,
      rotateY: A,
      skewX: C,
      skewY: B,
    } = o;
    p && (r = `perspective(${p}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      b && (r += `rotateX(${b}deg) `),
      A && (r += `rotateY(${A}deg) `),
      C && (r += `skewX(${C}deg) `),
      B && (r += `skewY(${B}deg) `);
  }
  const m = a.x.scale * l.x,
    y = a.y.scale * l.y;
  return (m !== 1 || y !== 1) && (r += `scale(${m}, ${y})`), r || "none";
}
const Pu = ["", "X", "Y", "Z"],
  tA = { visibility: "hidden" },
  eA = 1e3;
let nA = 0;
function Ju(a, l, o, r) {
  const { latestValues: c } = l;
  c[a] && ((o[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function u0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const o = Zg(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", _t, !(c || h));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && u0(r);
}
function c0({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = l == null ? void 0 : l()) {
      (this.id = nA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(lA),
            this.nodes.forEach(cA),
            this.nodes.forEach(fA),
            this.nodes.forEach(sA);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Y2());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Oc()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = Cg(f) && !nT(f)), (this.instance = f);
      const { layoutId: m, layout: y, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (y || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let v;
        const b = () => (this.root.updateBlockedByResize = !1);
        a(f, () => {
          (this.root.updateBlockedByResize = !0),
            v && v(),
            (v = k2(b, 250)),
            ro.hasAnimatedSinceResize &&
              ((ro.hasAnimatedSinceResize = !1), this.nodes.forEach(vy));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: A,
              layout: C,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const B =
                  this.options.transition || p.getDefaultTransition() || yA,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: Y } =
                  p.getProps(),
                Z = !this.targetLayout || !r0(this.targetLayout, C),
                $ = !b && A;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                $ ||
                (b && (Z || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const X = { ...Yc(B, "layout"), onPlay: L, onComplete: Y };
                (p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((X.delay = 0), (X.type = !1)),
                  this.startAnimation(X),
                  this.setAnimationOrigin(v, $);
              } else
                b || vy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = C;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Kn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(dA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          u0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gy);
        return;
      }
      this.isUpdating || this.nodes.forEach(rA),
        (this.isUpdating = !1),
        this.nodes.forEach(uA),
        this.nodes.forEach(aA),
        this.nodes.forEach(iA),
        this.clearAllSnapshots();
      const m = ye.now();
      (ne.delta = yn(0, 1e3 / 60, m - ne.timestamp)),
        (ne.timestamp = m),
        (ne.isProcessing = !0),
        qu.update.process(ne),
        qu.preRender.process(ne),
        qu.render.process(ne),
        (ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(oA), this.sharedNodes.forEach(hA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _t.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _t.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ue(this.snapshot.measuredBox.x) &&
          !ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Yt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const y = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: y,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !o0(this.projectionDelta),
        y = this.getTransformTemplate(),
        p = y ? y(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || ga(this.latestValues) || v) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return (
        f && (y = this.removeTransform(y)),
        gA(y),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: f } = this.options;
      if (!f) return Yt();
      const m = f.measureViewportBox();
      if (
        !(
          ((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(vA)
        )
      ) {
        const { scroll: v } = this.root;
        v && (fi(m.x, v.offset.x), fi(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var y;
      const m = Yt();
      if ((Be(m, f), (y = this.scroll) != null && y.wasRoot)) return m;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: b, options: A } = v;
        v !== this.root &&
          b &&
          A.layoutScroll &&
          (b.wasRoot && Be(m, f), fi(m.x, b.offset.x), fi(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const y = Yt();
      Be(y, f);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        !m &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          di(y, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ga(v.latestValues) && di(y, v.latestValues);
      }
      return ga(this.latestValues) && di(y, this.latestValues), y;
    }
    removeTransform(f) {
      const m = Yt();
      Be(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const p = this.path[y];
        if (!p.instance || !ga(p.latestValues)) continue;
        yc(p.latestValues) && p.updateSnapshot();
        const v = Yt(),
          b = p.measurePageBox();
        Be(v, b),
          fy(m, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v);
      }
      return ga(this.latestValues) && fy(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var A;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((A = this.parent) != null && A.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!(!this.layout || !(v || b))) {
        if (
          ((this.resolvedRelativeTargetAt = ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Yt()),
              (this.relativeTargetOrigin = Yt()),
              Rl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                C.layout.layoutBox
              ),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Yt()), (this.targetWithTransforms = Yt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              x2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Be(this.target, this.layout.layoutBox),
              Ig(this.target, this.targetDelta))
            : Be(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const C = this.getClosestProjectingParent();
          C &&
          !!C.resumingFrom == !!this.resumingFrom &&
          !C.options.layoutScroll &&
          C.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Yt()),
              (this.relativeTargetOrigin = Yt()),
              Rl(this.relativeTargetOrigin, this.target, C.target),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          yc(this.parent.latestValues) ||
          $g(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var B;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          ((B = this.parent) != null && B.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === ne.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: p, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || v))
      )
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        A = this.treeScale.y;
      S2(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Yt()));
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ry(this.prevProjectionDelta.x, this.projectionDelta.x),
          ry(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Dl(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== A ||
          !yy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !yy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ci()),
        (this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci());
    }
    setAnimationOrigin(f, m = !1) {
      const y = this.snapshot,
        p = y ? y.latestValues : {},
        v = { ...this.latestValues },
        b = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const A = Yt(),
        C = y ? y.source : void 0,
        B = this.layout ? this.layout.source : void 0,
        L = C !== B,
        Y = this.getStack(),
        Z = !Y || Y.members.length <= 1,
        $ = !!(L && !Z && this.options.crossfade === !0 && !this.path.some(pA));
      this.animationProgress = 0;
      let X;
      (this.mixTargetDelta = (lt) => {
        const k = lt / 1e3;
        by(b.x, f.x, k),
          by(b.y, f.y, k),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rl(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            mA(this.relativeTarget, this.relativeTargetOrigin, A, k),
            X && W2(this.relativeTarget, X) && (this.isProjectionDirty = !1),
            X || (X = Yt()),
            Be(X, this.relativeTarget)),
          L &&
            ((this.animationValues = v), Z2(v, p, this.latestValues, k, $, Z)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var m, y, p;
      this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (p = (y = this.resumingFrom) == null ? void 0 : y.currentAnimation) ==
          null || p.stop(),
        this.pendingAnimation &&
          (Kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _t.update(() => {
          (ro.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = hi(0)),
            (this.currentAnimation = q2(this.motionValue, [0, 1e3], {
              ...f,
              isSync: !0,
              onUpdate: (v) => {
                this.mixTargetDelta(v), f.onUpdate && f.onUpdate(v);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(eA),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: y,
        layout: p,
        latestValues: v,
      } = f;
      if (!(!m || !y || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          f0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          y = this.target || Yt();
          const b = ue(this.layout.layoutBox.x);
          (y.x.min = f.target.x.min), (y.x.max = y.x.min + b);
          const A = ue(this.layout.layoutBox.y);
          (y.y.min = f.target.y.min), (y.y.max = y.y.min + A);
        }
        Be(m, y),
          di(m, v),
          Dl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new $2()),
        this.sharedNodes.get(f).add(m);
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: y } = {}) {
      const p = this.getStack();
      p && p.promote(this, y),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: y } = f;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      y.z && Ju("z", f, p, this.animationValues);
      for (let v = 0; v < Pu.length; v++)
        Ju(`rotate${Pu[v]}`, f, p, this.animationValues),
          Ju(`skew${Pu[v]}`, f, p, this.animationValues);
      f.render();
      for (const v in p)
        f.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return tA;
      const m = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = oo(f == null ? void 0 : f.pointerEvents) || ""),
          (m.transform = y ? y(this.latestValues, "") : "none"),
          m
        );
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        const C = {};
        return (
          this.options.layoutId &&
            ((C.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (C.pointerEvents = oo(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !ga(this.latestValues) &&
            ((C.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          C
        );
      }
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = I2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v
        )),
        y && (m.transform = y(v, m.transform));
      const { x: b, y: A } = this.projectionDelta;
      (m.transformOrigin = `${b.origin * 100}% ${A.origin * 100}% 0`),
        p.animationValues
          ? (m.opacity =
              p === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (m.opacity =
              p === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const C in Vl) {
        if (v[C] === void 0) continue;
        const { correct: B, applyTo: L, isCSSVariable: Y } = Vl[C],
          Z = m.transform === "none" ? v[C] : B(v[C], p);
        if (L) {
          const $ = L.length;
          for (let X = 0; X < $; X++) m[L[X]] = Z;
        } else
          Y ? (this.options.visualElement.renderState.vars[C] = Z) : (m[C] = Z);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            p === this
              ? oo(f == null ? void 0 : f.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(gy),
        this.root.sharedNodes.clear();
    }
  };
}
function aA(a) {
  a.updateLayout();
}
function iA(a) {
  var o;
  const l = ((o = a.resumeFrom) == null ? void 0 : o.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: h } = a.options,
      f = l.source !== a.layout.source;
    h === "size"
      ? Le((b) => {
          const A = f ? l.measuredBox[b] : l.layoutBox[b],
            C = ue(A);
          (A.min = r[b].min), (A.max = A.min + C);
        })
      : f0(h, l.layoutBox, r) &&
        Le((b) => {
          const A = f ? l.measuredBox[b] : l.layoutBox[b],
            C = ue(r[b]);
          (A.max = A.min + C),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + C));
        });
    const m = ci();
    Dl(m, r, l.layoutBox);
    const y = ci();
    f ? Dl(y, a.applyTransform(c, !0), l.measuredBox) : Dl(y, r, l.layoutBox);
    const p = !o0(m);
    let v = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: A, layout: C } = b;
        if (A && C) {
          const B = Yt();
          Rl(B, l.layoutBox, A.layoutBox);
          const L = Yt();
          Rl(L, r, C.layoutBox),
            r0(B, L) || (v = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = L),
              (a.relativeTargetOrigin = B),
              (a.relativeParent = b));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: y,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function lA(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function sA(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function oA(a) {
  a.clearSnapshot();
}
function gy(a) {
  a.clearMeasurements();
}
function rA(a) {
  a.isLayoutDirty = !1;
}
function uA(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function vy(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function cA(a) {
  a.resolveTargetDelta();
}
function fA(a) {
  a.calcProjection();
}
function dA(a) {
  a.resetSkewAndRotation();
}
function hA(a) {
  a.removeLeadSnapshot();
}
function by(a, l, o) {
  (a.translate = jt(l.translate, 0, o)),
    (a.scale = jt(l.scale, 1, o)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function xy(a, l, o, r) {
  (a.min = jt(l.min, o.min, r)), (a.max = jt(l.max, o.max, r));
}
function mA(a, l, o, r) {
  xy(a.x, l.x, o.x, r), xy(a.y, l.y, o.y, r);
}
function pA(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const yA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Sy = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  Ty = Sy("applewebkit/") && !Sy("chrome/") ? Math.round : He;
function Ay(a) {
  (a.min = Ty(a.min)), (a.max = Ty(a.max));
}
function gA(a) {
  Ay(a.x), Ay(a.y);
}
function f0(a, l, o) {
  return (
    a === "position" || (a === "preserve-aspect" && !b2(py(l), py(o), 0.2))
  );
}
function vA(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const bA = c0({
    attachResizeListener: (a, l) => jl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Fu = { current: void 0 },
  d0 = c0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Fu.current) {
        const a = new bA({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (Fu.current = a);
      }
      return Fu.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  xA = {
    pan: { Feature: U2 },
    drag: { Feature: _2, ProjectionNode: d0, MeasureLayout: i0 },
  };
function Ey(a, l, o) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    h = r[c];
  h && _t.postRender(() => h(l, Hl(l)));
}
class SA extends Fn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = WS(
        l,
        (o, r) => (Ey(this.node, r, "Start"), (c) => Ey(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class TA extends Fn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ul(
      jl(this.node.current, "focus", () => this.onFocus()),
      jl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function My(a, l, o) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    h = r[c];
  h && _t.postRender(() => h(l, Hl(l)));
}
class AA extends Fn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = eT(
        l,
        (o, r) => (
          My(this.node, r, "Start"),
          (c, { success: h }) => My(this.node, c, h ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const bc = new WeakMap(),
  Wu = new WeakMap(),
  EA = (a) => {
    const l = bc.get(a.target);
    l && l(a);
  },
  MA = (a) => {
    a.forEach(EA);
  };
function DA({ root: a, ...l }) {
  const o = a || document;
  Wu.has(o) || Wu.set(o, {});
  const r = Wu.get(o),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(MA, { root: a, ...l })), r[c];
}
function RA(a, l, o) {
  const r = DA(l);
  return (
    bc.set(a, o),
    r.observe(a),
    () => {
      bc.delete(a), r.unobserve(a);
    }
  );
}
const wA = { some: 0, all: 1 };
class OA extends Fn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: r, amount: c = "some", once: h } = l,
      f = {
        root: o ? o.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : wA[c],
      },
      m = (y) => {
        const { isIntersecting: p } = y;
        if (
          this.isInView === p ||
          ((this.isInView = p), h && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          A = p ? v : b;
        A && A(y);
      };
    return RA(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(CA(l, o)) && this.startObserver();
  }
  unmount() {}
}
function CA({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const zA = {
    inView: { Feature: OA },
    tap: { Feature: AA },
    focus: { Feature: TA },
    hover: { Feature: SA },
  },
  VA = { layout: { ProjectionNode: d0, MeasureLayout: i0 } },
  xc = { current: null },
  h0 = { current: !1 };
function NA() {
  if (((h0.current = !0), !!Ac))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (xc.current = a.matches);
      a.addListener(l), l();
    } else xc.current = !1;
}
const jA = new WeakMap();
function _A(a, l, o) {
  for (const r in l) {
    const c = l[r],
      h = o[r];
    if (oe(c)) a.addValue(r, c);
    else if (oe(h)) a.addValue(r, hi(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(r)) {
        const f = a.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(r);
        a.addValue(r, hi(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const r in o) l[r] === void 0 && a.removeValue(r);
  return l;
}
const Dy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class UA {
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: h,
      visualState: f,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Gc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const A = ye.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), _t.render(this.render, !1, !0));
      });
    const { latestValues: y, renderState: p } = f;
    (this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = o.initial ? { ...y } : {}),
      (this.renderState = p),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = go(o)),
      (this.isVariantNode = jg(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this
    );
    for (const A in b) {
      const C = b[A];
      y[A] !== void 0 && oe(C) && C.set(y[A], !1);
    }
  }
  mount(l) {
    (this.current = l),
      jA.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, r) => this.bindToMotionValue(r, o)),
      h0.current || NA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : xc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Kn(this.notifyUpdate),
      Kn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, o) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = bi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (m) => {
        (this.latestValues[l] = m),
          this.props.onUpdate && _t.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      h = o.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        c(), h(), f && f(), o.owner && o.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in mi) {
      const o = mi[l];
      if (!o) continue;
      const { isEnabled: r, Feature: c } = o;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Yt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let r = 0; r < Dy.length; r++) {
      const c = Dy[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = l[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = _A(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(l),
        () => o.variantChildren.delete(l)
      );
  }
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = hi(o === null ? void 0 : o, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, o) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Gy(r) || ky(r))
          ? (r = parseFloat(r))
          : !iT(r) && Pn.test(o) && (r = Mg(l, o)),
        this.setBaseTarget(l, oe(r) ? r.get() : r)),
      oe(r) ? r.get() : r
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    var h;
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const f = $c(
        this.props,
        o,
        (h = this.presenceContext) == null ? void 0 : h.custom
      );
      f && (r = f[l]);
    }
    if (o && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !oe(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Oc()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
}
class m0 extends UA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = QS);
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    return l.style ? l.style[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    oe(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function p0(a, { style: l, vars: o }, r, c) {
  Object.assign(a.style, l, c && c.getProjectionStyles(r));
  for (const h in o) a.style.setProperty(h, o[h]);
}
function BA(a) {
  return window.getComputedStyle(a);
}
class LA extends m0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = p0);
  }
  readValueFromInstance(l, o) {
    var r;
    if (bi.has(o))
      return (r = this.projection) != null && r.isProjecting ? oc(o) : fS(l, o);
    {
      const c = BA(l),
        h = (Vc(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return t0(l, o);
  }
  build(l, o, r) {
    Jc(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Ic(l, o, r);
  }
}
const y0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function HA(a, l, o, r) {
  p0(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute(y0.has(c) ? c : Pc(c), l.attrs[c]);
}
class qA extends m0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Yt);
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (bi.has(o)) {
      const r = Eg(o);
      return (r && r.default) || 0;
    }
    return (o = y0.has(o) ? o : Pc(o)), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Xg(l, o, r);
  }
  build(l, o, r) {
    qg(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    HA(l, o, r, c);
  }
  mount(l) {
    (this.isSVGTag = Yg(l.tagName)), super.mount(l);
  }
}
const GA = (a, l) =>
    Wc(a) ? new qA(l) : new LA(l, { allowProjection: a !== K.Fragment }),
  YA = HT({ ...f2, ...zA, ...xA, ...VA }, GA),
  Nt = cT(YA),
  kA = "/assets/hero-pilates-studio-CX3tbpUf.jpg",
  XA = "/assets/pilates-equipment-close-Cna-0557.jpg",
  ZA = "/assets/pilates-class-group--S2-9Hna.jpg";
function QA() {
  const [a, l] = K.useState(!1),
    [o, r] = K.useState(0),
    c = [
      {
        name: "Ana Lúcia Poubel",
        profession: "Assistente social",
        text: "Fazer Pilates vai além de exercício corporal. Constantemente exercitamos nossas mentes, nossos corações. É uma terapia diária. Fazemos amizade, convivemos com as diferenças e dificuldades de pessoas diferentes e especiais ao mesmo tempo. Adoro Pilates, especialmente o ProLife!",
      },
      {
        name: "Fábio Barros",
        profession: "Designer",
        text: "Trabalho muitas horas sentado e meu médico me recomendou o Pilates para as dores que eu sentia nas costas. Eu tinha alguns preconceitos com relação ao Pilates já que algumas pessoas diziam que a máquina faz o esforço por você. Isso mudou e hoje o Pilates é minha principal atividade física.",
      },
      {
        name: "Tatiana Britto",
        profession: "Advogada",
        text: "Sou aluna do Studio Teste há quase 6 anos e posso dizer que minha vida mudou: não tive mais problemas relacionados à coluna e ao joelho, e outros benefícios surgiram. As aulas são dinâmicas e em um ambiente muito agradável, com o que há de mais novo na área.",
      },
      {
        name: "Inês Teixeira",
        profession: "Contadora",
        text: "Com o Pilates, além de emagrecer, estamos fortalecendo toda nossa estrutura muscular. Atividades como levantar do sofá e subir escadas que antes eram realizadas com muita dificuldade, minha mãe, Zezé, agora faz sozinha e com destreza.",
      },
    ],
    h = [
      {
        title: "Studio Teste UNIDADE I",
        subtitle: "onde tudo começou",
        description:
          "Aqui você encontra um conceito diferenciado em saúde e bem-estar. No Studio Teste, trabalhamos para melhorar a qualidade de vida dos nossos alunos por meio da prática do RPG e do Pilates, nas versão clássica ou fitness.",
      },
      {
        title: "Studio Teste UNIDADE II",
        subtitle: "outra opção para o cuidado com você",
        description:
          "Nesta unidade, os benefícios do Pilates são aliados ao treinamento funcional. A proposta surgiu do desejo dos alunos de realizar exercícios aeróbicos e mais intensos em um ambiente tranquilo como o do estúdio.",
      },
      {
        title: "Studio Teste UNIDADE III",
        subtitle: "O caçulinha",
        description:
          "Nossa terceira e mais nova unidade está moderna, aconchegante e foi projetada com muito cuidado para receber novos alunos da região para aulas de Pilates além de profissionais interessados em cursos e encontros.",
      },
    ];
  K.useEffect(() => {
    const y = setInterval(() => {
      r((p) => (p + 1) % c.length);
    }, 5e3);
    return () => clearInterval(y);
  }, []);
  const f = (y) => {
      var p;
      (p = document.getElementById(y)) == null ||
        p.scrollIntoView({ behavior: "smooth" }),
        l(!1);
    },
    m = () => {
      window.open(
        "https://wa.me/5527999112027?text=Olá! Gostaria de agendar minha aula experimental gratuita!",
        "_blank"
      );
    };
  return w.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      w.jsxs("header", {
        className:
          "fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm",
        children: [
          w.jsxs("div", {
            className:
              "container mx-auto px-4 py-4 flex justify-between items-center",
            children: [
              w.jsx(Nt.div, {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                className: "text-2xl font-bold text-purple-700",
                children: "ProLife",
              }),
              w.jsxs("nav", {
                className: "hidden md:flex space-x-8",
                children: [
                  w.jsx("button", {
                    onClick: () => f("home"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors",
                    children: "Home",
                  }),
                  w.jsx("button", {
                    onClick: () => f("about"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors",
                    children: "Sobre",
                  }),
                  w.jsx("button", {
                    onClick: () => f("testimonials"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors",
                    children: "Depoimentos",
                  }),
                  w.jsx("button", {
                    onClick: () => f("units"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors",
                    children: "Unidades",
                  }),
                  w.jsx("button", {
                    onClick: () => f("contact"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors",
                    children: "Contato",
                  }),
                ],
              }),
              w.jsx("button", {
                className: "md:hidden",
                onClick: () => l(!a),
                children: a ? w.jsx(sx, { size: 24 }) : w.jsx(ex, { size: 24 }),
              }),
            ],
          }),
          a &&
            w.jsx(Nt.div, {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              className: "md:hidden bg-white border-t",
              children: w.jsxs("nav", {
                className:
                  "container mx-auto px-4 py-4 flex flex-col space-y-4",
                children: [
                  w.jsx("button", {
                    onClick: () => f("home"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors text-left",
                    children: "Home",
                  }),
                  w.jsx("button", {
                    onClick: () => f("about"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors text-left",
                    children: "Sobre",
                  }),
                  w.jsx("button", {
                    onClick: () => f("testimonials"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors text-left",
                    children: "Depoimentos",
                  }),
                  w.jsx("button", {
                    onClick: () => f("units"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors text-left",
                    children: "Unidades",
                  }),
                  w.jsx("button", {
                    onClick: () => f("contact"),
                    className:
                      "text-gray-700 hover:text-purple-700 transition-colors text-left",
                    children: "Contato",
                  }),
                ],
              }),
            }),
        ],
      }),
      w.jsxs("section", {
        id: "home",
        className:
          "relative h-screen flex items-center justify-center overflow-hidden",
        children: [
          w.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: { backgroundImage: `url(${kA})` },
            children: w.jsx("div", {
              className: "absolute inset-0 bg-black/40",
            }),
          }),
          w.jsxs("div", {
            className: "relative z-10 text-center text-white px-4",
            children: [
              w.jsxs(Nt.h1, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "text-5xl md:text-7xl font-bold mb-6",
                children: [
                  "Bem-vindo ao ",
                  w.jsx("span", {
                    className: "text-purple-300",
                    children: "Studio Teste",
                  }),
                ],
              }),
              w.jsx(Nt.p, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "text-xl md:text-2xl mb-8 max-w-3xl mx-auto",
                children:
                  "Aqui você encontra um conceito diferenciado em saúde e bem-estar. Trabalhamos para melhorar a qualidade de vida dos nossos alunos por meio da prática do RPG e do Pilates.",
              }),
              w.jsx(Nt.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                children: w.jsx(xl, {
                  onClick: m,
                  className:
                    "bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full",
                  children: "Agende sua Aula Experimental Gratuita!",
                }),
              }),
            ],
          }),
        ],
      }),
      w.jsx("section", {
        id: "about",
        className: "py-20 bg-gray-50",
        children: w.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            w.jsxs("div", {
              className: "text-center mb-16",
              children: [
                w.jsx(Nt.h2, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className:
                    "text-4xl md:text-5xl font-bold text-purple-700 mb-4",
                  children: "Studio Teste",
                }),
                w.jsx(Nt.p, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  className: "text-xl text-gray-600",
                  children: "um pouco sobre nós",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [
                w.jsxs(Nt.div, {
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  children: [
                    w.jsxs("p", {
                      className: "text-lg text-gray-700 mb-6",
                      children: [
                        "O ",
                        w.jsx("strong", { children: "Studio Teste" }),
                        " nasceu em 2007 com a proposta de oferecer aos alunos um atendimento diferenciado voltado à promoção da saúde e à qualidade de vida. As atividades são realizadas com, no máximo, dois alunos por instrutor, priorizando os benefícios de um trabalho personalizado.",
                      ],
                    }),
                    w.jsx("p", {
                      className: "text-lg text-gray-700 mb-6",
                      children:
                        "Formada por profissionais especializados e em constante aperfeiçoamento, nossa equipe está pronta para orientar de forma individualizada cada aluno, em especial idosos, gestantes, pacientes com dores crônicas e aqueles que buscam reabilitação.",
                    }),
                    w.jsx("p", {
                      className: "text-lg text-gray-700 mb-6",
                      children:
                        "A frequência é de duas a cinco vezes por semana, com hora marcada para aulas, em espaços climatizados, som ambiente e todas as condições que proporcionem ao aluno obter saúde física e mental.",
                    }),
                    w.jsxs("p", {
                      className: "text-lg text-gray-700",
                      children: [
                        "Outro diferencial é o ",
                        w.jsx("em", { children: "Pilates Kids" }),
                        ", indicado por pediatras como forma de melhorar a postura, a concentração e a ansiedade. São aulas lúdicas, individuais ou em grupo, para crianças a partir de 4 anos.",
                      ],
                    }),
                  ],
                }),
                w.jsxs(Nt.div, {
                  initial: { opacity: 0, x: 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    w.jsx("img", {
                      src: XA,
                      alt: "Equipamento de Pilates",
                      className: "rounded-lg shadow-lg",
                    }),
                    w.jsx("img", {
                      src: ZA,
                      alt: "Aula de Pilates",
                      className: "rounded-lg shadow-lg",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx("section", {
        id: "testimonials",
        className: "py-20 bg-purple-700 text-white",
        children: w.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            w.jsxs("div", {
              className: "text-center mb-16",
              children: [
                w.jsx(Nt.h2, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: "DEPOIMENTOS",
                }),
                w.jsx(Nt.p, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  className: "text-xl",
                  children: "o que nossos clientes dizem",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "max-w-4xl mx-auto",
              children: [
                w.jsxs(
                  Nt.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.5 },
                    className: "text-center",
                    children: [
                      w.jsxs("blockquote", {
                        className: "text-xl md:text-2xl mb-8 italic",
                        children: ['"', c[o].text, '"'],
                      }),
                      w.jsxs("div", {
                        children: [
                          w.jsx("p", {
                            className: "text-lg font-semibold",
                            children: c[o].name,
                          }),
                          w.jsx("p", {
                            className: "text-purple-200",
                            children: c[o].profession,
                          }),
                        ],
                      }),
                    ],
                  },
                  o
                ),
                w.jsx("div", {
                  className: "flex justify-center mt-8 space-x-2",
                  children: c.map((y, p) =>
                    w.jsx(
                      "button",
                      {
                        onClick: () => r(p),
                        className: `w-3 h-3 rounded-full transition-colors ${
                          p === o ? "bg-white" : "bg-white/30"
                        }`,
                      },
                      p
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx("section", {
        id: "units",
        className: "py-20 bg-gray-50",
        children: w.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            w.jsxs("div", {
              className: "text-center mb-16",
              children: [
                w.jsx(Nt.h2, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className:
                    "text-4xl md:text-5xl font-bold text-purple-700 mb-4",
                  children: "NOSSAS UNIDADES",
                }),
                w.jsx(Nt.p, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  className: "text-xl text-gray-600",
                  children: "três unidades para sua escolha",
                }),
              ],
            }),
            w.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: h.map((y, p) =>
                w.jsx(
                  Nt.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: p * 0.2 },
                    children: w.jsx(fp, {
                      className: "h-full hover:shadow-lg transition-shadow",
                      children: w.jsxs(dp, {
                        className: "p-6",
                        children: [
                          w.jsx("h3", {
                            className: "text-xl font-bold text-purple-700 mb-2",
                            children: y.title,
                          }),
                          w.jsx("p", {
                            className: "text-purple-500 mb-4 italic",
                            children: y.subtitle,
                          }),
                          w.jsx("p", {
                            className: "text-gray-700",
                            children: y.description,
                          }),
                        ],
                      }),
                    }),
                  },
                  p
                )
              ),
            }),
          ],
        }),
      }),
      w.jsx("section", {
        className: "py-16 bg-white",
        children: w.jsxs("div", {
          className: "container mx-auto px-4 text-center",
          children: [
            w.jsx(Nt.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: "text-3xl font-bold text-purple-700 mb-4",
              children: "SIGA NOSSAS REDES!",
            }),
            w.jsx(Nt.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className: "text-lg text-gray-600 mb-8",
              children: "curta e compartilhe prolife",
            }),
            w.jsxs(Nt.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.4 },
              className: "flex justify-center space-x-6",
              children: [
                w.jsxs(xl, {
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full",
                  children: [
                    w.jsx(J1, { className: "mr-2", size: 20 }),
                    "Instagram",
                  ],
                }),
                w.jsxs(xl, {
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full",
                  children: [
                    w.jsx(K1, { className: "mr-2", size: 20 }),
                    "Facebook",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx("section", {
        id: "contact",
        className: "py-20 bg-gray-50",
        children: w.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            w.jsxs("div", {
              className: "text-center mb-16",
              children: [
                w.jsx(Nt.h2, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className:
                    "text-4xl md:text-5xl font-bold text-purple-700 mb-4",
                  children: "FALE CONOSCO",
                }),
                w.jsx(Nt.p, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  className: "text-xl text-gray-600",
                  children: "tire suas dúvidas entrando em contato!",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12",
              children: [
                w.jsx(Nt.div, {
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  children: w.jsx(fp, {
                    children: w.jsx(dp, {
                      className: "p-6",
                      children: w.jsxs("form", {
                        className: "space-y-4",
                        children: [
                          w.jsx(Hu, { placeholder: "Nome completo" }),
                          w.jsx(Hu, { type: "email", placeholder: "E-mail" }),
                          w.jsx(Hu, { type: "tel", placeholder: "Telefone" }),
                          w.jsx(q1, { placeholder: "Mensagem", rows: 4 }),
                          w.jsx(xl, {
                            className:
                              "w-full bg-purple-600 hover:bg-purple-700",
                            children: "Enviar Mensagem",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                w.jsxs(Nt.div, {
                  initial: { opacity: 0, x: 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  className: "space-y-8",
                  children: [
                    w.jsxs("div", {
                      className: "text-center",
                      children: [
                        w.jsx("h3", {
                          className: "text-2xl font-bold text-purple-700 mb-4",
                          children: "OU DIRETO PELO TELEFONE (WhatsApp)",
                        }),
                        w.jsx("div", {
                          className: "text-4xl font-bold text-green-600 mb-4",
                          children: "27 99911 2027",
                        }),
                        w.jsxs(xl, {
                          onClick: m,
                          className:
                            "bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full",
                          children: [
                            w.jsx(mp, { className: "mr-2", size: 20 }),
                            "Chamar no WhatsApp",
                          ],
                        }),
                      ],
                    }),
                    w.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        w.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            w.jsx(I1, {
                              className: "text-purple-600",
                              size: 20,
                            }),
                            w.jsx("span", {
                              children: "Vitória, ES - 3 Unidades",
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            w.jsx(ix, {
                              className: "text-purple-600",
                              size: 20,
                            }),
                            w.jsx("span", { children: "(99) 99999-9999" }),
                          ],
                        }),
                        w.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            w.jsx(W1, {
                              className: "text-purple-600",
                              size: 20,
                            }),
                            w.jsx("span", {
                              children: "contato@testMail.com.br",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      w.jsx("footer", {
        className: "bg-purple-700 text-white py-12",
        children: w.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            w.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [
                w.jsxs("div", {
                  children: [
                    w.jsx("h3", {
                      className: "text-2xl font-bold mb-4",
                      children: "ProLife",
                    }),
                    w.jsx("p", {
                      className: "text-purple-200",
                      children:
                        "Studio de Pilates especializado em atendimento personalizado e qualidade de vida.",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("h4", {
                      className: "text-lg font-semibold mb-4",
                      children: "Links Úteis",
                    }),
                    w.jsxs("ul", {
                      className: "space-y-2 text-purple-200",
                      children: [
                        w.jsx("li", {
                          children: w.jsx("button", {
                            onClick: () => f("about"),
                            children: "Sobre Nós",
                          }),
                        }),
                        w.jsx("li", {
                          children: w.jsx("button", {
                            onClick: () => f("testimonials"),
                            children: "Depoimentos",
                          }),
                        }),
                        w.jsx("li", {
                          children: w.jsx("button", {
                            onClick: () => f("units"),
                            children: "Unidades",
                          }),
                        }),
                        w.jsx("li", {
                          children: w.jsx("button", {
                            onClick: () => f("contact"),
                            children: "Contato",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("h4", {
                      className: "text-lg font-semibold mb-4",
                      children: "Contato",
                    }),
                    w.jsxs("div", {
                      className: "space-y-2 text-purple-200",
                      children: [
                        w.jsx("p", { children: "(99) 99999-9999" }),
                        w.jsx("p", {
                          children: "contato@testMail.com.br",
                        }),
                        w.jsx("p", { children: "Vitória, ES" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              className:
                "border-t border-purple-600 mt-8 pt-8 text-center text-purple-200",
              children: w.jsx("p", {
                children: "© 2024 Studio Teste. Todos os direitos reservados.",
              }),
            }),
          ],
        }),
      }),
      w.jsx(Nt.button, {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { delay: 1 },
        onClick: m,
        className:
          "fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors",
        children: w.jsx(mp, { size: 24 }),
      }),
    ],
  });
}
Pb.createRoot(document.getElementById("root")).render(
  w.jsx(K.StrictMode, { children: w.jsx(QA, {}) })
);
