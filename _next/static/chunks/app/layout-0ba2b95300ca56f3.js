(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    9871: (e, t, A) => {
      Promise.resolve().then(A.t.bind(A, 9324, 23)),
        Promise.resolve().then(A.bind(A, 9983)),
        Promise.resolve().then(A.bind(A, 4597)),
        Promise.resolve().then(A.bind(A, 766)),
        Promise.resolve().then(A.bind(A, 96)),
        Promise.resolve().then(A.bind(A, 3479)),
        Promise.resolve().then(A.bind(A, 5967)),
        Promise.resolve().then(A.t.bind(A, 3704, 23)),
        Promise.resolve().then(A.t.bind(A, 6651, 23)),
        Promise.resolve().then(A.t.bind(A, 1136, 23)),
        Promise.resolve().then(A.t.bind(A, 2557, 23)),
        Promise.resolve().then(A.t.bind(A, 9028, 23)),
        Promise.resolve().then(A.bind(A, 3492));
    },
    9983: (e, t, A) => {
      "use strict";
      A.d(t, { NavBar: () => o });
      var a = A(5155),
        r = A(7396),
        s = A(6046);
      let o = () => {
        let e = (0, s.usePathname)();
        return (0, a.jsx)("nav", {
          className:
            "absolute top-0 left-0 w-full z-50 p-4 bg-[#280047] bg-opacity-50 ",
          children: (0, a.jsxs)("ul", {
            className: "flex justify-center space-x-2",
            children: [
              [
                { name: "Home", path: "/" },
                { name: "About", path: "/about.html" },
                { name: "Journey", path: "/journey.html" },
                
              ].map((t) =>
                (0, a.jsx)(
                  "li",
                  {
                    children: (0, a.jsx)(r.default, {
                      href: t.path,
                      className:
                        "text-white text-xl hover:text-gray-300 px-2 py-0\n                                    ".concat(
                          e === t.path
                            ? "outline outline-2 outline-white rounded-full"
                            : ""
                        ),
                      children: t.name,
                    }),
                  },
                  t.path
                )
              ),

            ],
          }),
        });
      };
    },
    4597: (e, t, A) => {
      "use strict";
      A.d(t, { Toaster: () => P });
      var a = A(5155),
        r = A(2115);
      let s = 0,
        o = new Map(),
        i = (e) => {
          if (o.has(e)) return;
          let t = setTimeout(() => {
            o.delete(e), c({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          o.set(e, t);
        },
        l = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: A } = t;
              return (
                A
                  ? i(A)
                  : e.toasts.forEach((e) => {
                      i(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === A || void 0 === A ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        d = [],
        n = { toasts: [] };
      function c(e) {
        (n = l(n, e)),
          d.forEach((e) => {
            e(n);
          });
      }
      function u(e) {
        let { ...t } = e,
          A = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(),
          a = () => c({ type: "DISMISS_TOAST", toastId: A });
        return (
          c({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: A,
              open: !0,
              onOpenChange: (e) => {
                e || a();
              },
            },
          }),
          {
            id: A,
            dismiss: a,
            update: (e) => c({ type: "UPDATE_TOAST", toast: { ...e, id: A } }),
          }
        );
      }
      var g = A(5644),
        h = A(1027),
        m = A(767),
        f = A(9602);
      let p = g.Kq,
        b = r.forwardRef((e, t) => {
          let { className: A, ...r } = e;
          return (0, a.jsx)(g.LM, {
            ref: t,
            className: (0, f.cn)(
              "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
              A
            ),
            ...r,
          });
        });
      b.displayName = g.LM.displayName;
      let v = (0, h.F)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",
          {
            variants: {
              variant: {
                default:
                  "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
                destructive:
                  "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        x = r.forwardRef((e, t) => {
          let { className: A, variant: r, ...s } = e;
          return (0, a.jsx)(g.bL, {
            ref: t,
            className: (0, f.cn)(v({ variant: r }), A),
            ...s,
          });
        });
      (x.displayName = g.bL.displayName),
        (r.forwardRef((e, t) => {
          let { className: A, ...r } = e;
          return (0, a.jsx)(g.rc, {
            ref: t,
            className: (0, f.cn)(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",
              A
            ),
            ...r,
          });
        }).displayName = g.rc.displayName);
      let w = r.forwardRef((e, t) => {
        let { className: A, ...r } = e;
        return (0, a.jsx)(g.bm, {
          ref: t,
          className: (0, f.cn)(
            "absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
            A
          ),
          "toast-close": "",
          ...r,
          children: (0, a.jsx)(m.A, { className: "h-4 w-4" }),
        });
      });
      w.displayName = g.bm.displayName;
      let E = r.forwardRef((e, t) => {
        let { className: A, ...r } = e;
        return (0, a.jsx)(g.hE, {
          ref: t,
          className: (0, f.cn)(
            "text-sm font-semibold font-[family-name:var(--font-unifont)]",
            A
          ),
          ...r,
        });
      });
      E.displayName = g.hE.displayName;
      let B = r.forwardRef((e, t) => {
        let { className: A, ...r } = e;
        return (0, a.jsx)(g.VY, {
          ref: t,
          className: (0, f.cn)(
            "text-sm opacity-90 font-[family-name:var(--font-unifont)]",
            A
          ),
          ...r,
        });
      });
      function P() {
        let { toasts: e } = (function () {
          let [e, t] = r.useState(n);
          return (
            r.useEffect(
              () => (
                d.push(t),
                () => {
                  let e = d.indexOf(t);
                  e > -1 && d.splice(e, 1);
                }
              ),
              [e]
            ),
            {
              ...e,
              toast: u,
              dismiss: (e) => c({ type: "DISMISS_TOAST", toastId: e }),
            }
          );
        })();
        return (0, a.jsxs)(p, {
          children: [
            e.map(function (e) {
              let { id: t, title: A, description: r, action: s, ...o } = e;
              return (0,
              a.jsxs)(x, { ...o, children: [(0, a.jsxs)("div", { className: "grid gap-1", children: [A && (0, a.jsx)(E, { children: A }), r && (0, a.jsx)(B, { children: r })] }), s, (0, a.jsx)(w, {})] }, t);
            }),
            (0, a.jsx)(b, {}),
          ],
        });
      }
      B.displayName = g.VY.displayName;
    },
    9602: (e, t, A) => {
      "use strict";
      A.d(t, { cn: () => g, y: () => h });
      var a = A(3463),
        r = A(9795),
        s = A(1514),
        o = A(5224),
        i = A(8826),
        l = A(6043),
        d = A(1666),
        n = A(4314),
        c = A(3275),
        u = A(6948);
      function g() {
        for (var e = arguments.length, t = Array(e), A = 0; A < e; A++)
          t[A] = arguments[A];
        return (0, r.QP)((0, a.$)(t));
      }
      let h = [
        {
          src: s.default,
          alt: "CoinGecko logo",
          href: "https://www.coingecko.com/en/coins/good-martian",
        },
        {
          src: o.default,
          alt: "Dex Screener logo",
          href: "https://dexscreener.com/solana/cyw9mcs6tjmtde9hgxypuxmarn3nehiwaapu4xqk4wau",
        },
        {
          src: i.default,
          alt: "Dex Tools logo",
          href: "https://www.dextools.io/app/en/token/goodmartian",
        },
        {
          src: l.default,
          alt: "Telegram logo",
          href: "https://t.me/goodmartiansol",
        },
        {
          src: d.default,
          alt: "Discord logo",
          href: "https://discord.gg/goodmartian",
        },
        { src: n.default, alt: "X logo", href: "https://x.com/goodmartiansol" },
        {
          src: c.default,
          alt: "Instagram logo",
          href: "https://www.instagram.com/goodmartiansol",
        },

      ];
    },
    9324: () => {},
    3492: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/bg.c16e9948.png",
        height: 9461,
        width: 2632,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAMAAADk895wAAAABlBMVEUtBksvCU03vgICAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYGBgZIQiJAAAAHsAB+LXQL4AAAAASUVORK5CYII=",
        blurWidth: 2,
        blurHeight: 8,
      };
    },
    1514: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/coingecko.e8ba57e8.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX///8wIT1lVHEvGz/z8PWjkrD+/P5MaXFrT4EjAEIAAAf6+vz/9vb////d1uL////////u7e////+/usV6Z4deVV5TQ2GbkaOworvHvM+km6p7bYVPP14uCkw8F1hZOXDk3ul7YY+RfaHo5euEcEkdAAAAHXRSTlP9PPnE/vxaAP79Rasd8/7aztbrsvQbzJr+/uPw+nWG+MgAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEFAoAgAACxI5SwOwHR///RDVN2NFVtKNGtZljoH2tTwQZFSCE8J+PrYty5mLJzmU8hZhsPfXuMWKVU3vx/BQOnN2/bOwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5224: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/dexscreener.6c148bff.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH6+fvz8fRDMVLq5u2WgqWpnLP+/v8NBhi3q8F4aoP////t6+////9eS17i3OaWi57////8/PzY0N/5+fz///+YjaBWN264sb7OxdRlVXEoFDhSQmD///9xV4ZTMmt+aJCH7gYZAAAAHXRSTlMA+fXC/f35+0H+9B3Wqxv4mtpd/lfN4/6y/vnQ+uo8uYkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEHAoAgDAPAIEUK7j1T/P8rvQPmKbquAVYuVrPtsTEUGzgiyhcscUflDiuJGSclXVE8tGakvAqoz/ej+AGPlgPWS/G9SQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    8826: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/dextools.7cc5a08d.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEWnmLL///99ZpCbiKn7+vz+/v729fdMaXELBBbSytmIcpl+cYj8/Py9sMb///////9eVV5gQ3f7/PvAtMm+uMRNPFuYjKBqWnWbkKImEjU0IkVSQmB+bIyXhKb////k3uiejKuSfqLu6/BZzPUqAAAAHnRSTlP8+/38+1rSAEH9/vSr/h3aG/7r+bLMmvnj0Lj6/PvLcSwCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBBxKAIAwEwKMmgIq9zoTy/0e6C3JZ2WEiOJExiJ/hi64wckKFZnSTG2tZUKMk7HZDDP0FQ4rtH4P4SNfD9AOEMgPdR61lIwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1666: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/discord.bd48e499.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVMaXH7+vzTytr////////39/ji3OgMBBbr6O6Db5P8/Pz////29v84FVX8/PwvCU2KdZteS16+tsKrobFNPFuWi542IkVSRGBlVXF2Z4EnEzeglqf///9GJGDv7PJoS31hRHd2XYmoOZejAAAAHHRSTlMA9fza9tL8Qf76Xasd+1f++Bux9MyauPr5+NDj93h1mgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwFwYcBgDAMAzC3dLL3dFL4/0kkoK7omhboqSnRT/Chk2HkBpff8ol5YLKUIpox06oNuiMuJNMRgbhe5x3xA4+WBC7NXtf7AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    3275: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/insta.7b6651c4.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXF7bYbTytn////BtcqqnbX4+Pj8+/4LBBfg2eT////////////Tytr////29vZVS177+/u+t8JRP1+WjKCckqRSQ2A0IkUnEzdpWXP///+zpb7HvM+5rMPt6u/Y0N8KN3i5AAAAGnRSTlMA9P7a/PnS/kH9XVfz/asdG+uyzJrj+rjQ+c2BLlgAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEHAsAgCASwsxXB7j0A7f9/2QToWh2mGeg1NyOnBemLRqQH2C0X0xOrR3fTgI2jlVxvCClrvQSQPbyP4AeFkwPgRV0nxQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6043: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/telegram.bc277039.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVMaXGxo7xXQWpjTXXu6/D8+/3+/v4OBhfh2+b9/v53aYH////////8/P3o5epnXnH///9UOGyYjqCDbZSmnK7Tytm4sb6YjaBOPVwoFjg0IUP///+IcpnPxNc1EFJzWYdCH1wZADry8PR31XOAAAAAG3RSTlMA/fz89/laQfv+9Ksd2tUbzfia/vT+sePM0LhOO89oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBQLAIBADsKIHzF0Ks/8/cgngm+iqGvAkQ2k79E5lPXCEvU2+Jm6wsTyvYsLKsOTwnZCZkVYLIHsyh+AHiX8D25zAlcYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6948: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/tiktok.3c99c87e.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX////QyNdCMVJ6a4S1p7+qnLNqUoBMaXENBhf////////////8/PzKwNL////u6+8+G1leVV6Wi565sr/6+fqbj6IoFjllVXFSQ2D////u6vCbial8ZI/o5evc1uEXLn2yAAAAGXRSTlP6/sL0/Pf+AEHUXVer/R3W/huasevj0Pn6WNoiBwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwYcBgDAMAzB3JmWVDe7g/zORIEMCpkUwkmVm3pCIb/XcAdbaDC+cJfpGOhwM0aBbaCDYX4Wodc+t8gOEtwOeCBmB2AAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    4314: (e, t, A) => {
      "use strict";
      A.r(t), A.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/x.b827108e.png",
        height: 156,
        width: 151,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH6+Pp1YYRnUXj5+frs6e+4qsOjlK8PCBr///+fja3////29vb////29fdVS16Tf6LRydiWi578/PybkKI2IkZ7bYZQQF4qFzrQx9bCvMZQPV3////i2+bw6/OGb5fq5O7l0HTpAAAAHHRSTlMA4/r80v7++0Fa/Ksd8/4b/via+eO48PrQ/rHMNnCohgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAENJREFUeJwFwYcBwCAMAzCzmkD3Xgb6/5WVgGjYtx0Qv2YI2Y/wxco0c8HK7ITcYNjUevPAU4QphR0qJPOpgL7WXYofiW0D9ShNOAsAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [396, 181, 261, 698, 441, 517, 358], () => t(9871)), (_N_E = e.O());
  },
]);
