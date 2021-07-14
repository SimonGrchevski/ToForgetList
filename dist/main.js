(() => { "use strict"; var e = { 426: (e, t, n) => { n.d(t, { Z: () => a }); var r = n(645),
          o = n.n(r)()((function(e) { return e[1] }));
        o.push([e.id, "body {\n  background-color: #f9f9f9;\n}\n\nli {\n  list-style-type: none;\n  border-bottom: 1px solid gray;\n}\n\n.to-do-list-wrap {\n  background-color: #fff;\n  box-shadow: 1px 1px 1px black;\n}\n", ""]); const a = o }, 645: e => { e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var n = e(t); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function(e, n, r) { "string" == typeof e && (e = [
              [null, e, ""]
            ]); var o = {}; if (r)
              for (var a = 0; a < this.length; a++) { var i = this[a][0];
                null != i && (o[i] = !0) }
            for (var s = 0; s < e.length; s++) { var c = [].concat(e[s]);
              r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c)) } }, t } }, 379: e => { var t = [];

        function n(e) { for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) { n = r; break }
          return n }

        function r(e, r) { for (var a = {}, i = [], s = 0; s < e.length; s++) { var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              u = a[l] || 0,
              d = "".concat(l, " ").concat(u);
            a[l] = u + 1; var p = n(d),
              f = { css: c[1], media: c[2], sourceMap: c[3] }; - 1 !== p ? (t[p].references++, t[p].updater(f)) : t.push({ identifier: d, updater: o(f, r), references: 1 }), i.push(d) } return i }

        function o(e, t) { var n = t.domAPI(t); return n.update(e),
            function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                n.update(e = t) } else n.remove() } }
        e.exports = function(e, o) { var a = r(e = e || [], o = o || {}); return function(e) { e = e || []; for (var i = 0; i < a.length; i++) { var s = n(a[i]);
              t[s].references-- } for (var c = r(e, o), l = 0; l < a.length; l++) { var u = n(a[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1)) }
            a = c } } }, 569: e => { var t = {};
        e.exports = function(e, n) { var r = function(e) { if (void 0 === t[e]) { var n = document.querySelector(e); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
              t[e] = n } return t[e] }(e); if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(n) } }, 216: e => { e.exports = function(e) { var t = document.createElement("style"); return e.setAttributes(t, e.attributes), e.insert(t), t } }, 565: (e, t, n) => { e.exports = function(e) { var t = n.nc;
          t && e.setAttribute("nonce", t) } }, 795: e => { e.exports = function(e) { var t = e.insertStyleElement(e); return { update: function(n) {! function(e, t, n) { var r = n.css,
                  o = n.media,
                  a = n.sourceMap;
                o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e) }(t, e, n) }, remove: function() {! function(e) { if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e) }(t) } } } }, 589: e => { e.exports = function(e, t) { if (t.styleSheet) t.styleSheet.cssText = e;
          else { for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e)) } } } },
    t = {};

  function n(r) { var o = t[r]; if (void 0 !== o) return o.exports; var a = t[r] = { id: r, exports: {} }; return e[r](a, a.exports, n), a.exports }
  n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { var e = n(379),
      t = n.n(e),
      r = n(795),
      o = n.n(r),
      a = n(569),
      i = n.n(a),
      s = n(565),
      c = n.n(s),
      l = n(216),
      u = n.n(l),
      d = n(589),
      p = n.n(d),
      f = n(426),
      m = {};
    m.styleTagTransform = p(), m.setAttributes = c(), m.insert = i().bind(null, "head"), m.domAPI = o(), m.insertStyleElement = u(), t()(f.Z, m), f.Z && f.Z.locals && f.Z.locals; const h = document.querySelector(".to-do-list-wrap");
    class v { constructor(e, t, n) { this.description = e, this.completed = t, this.index = n } } let y = [new v("wash the dishes", !1, 5), new v("complete to do list project", !1, 1), new v("Watch movie", !1, 3)];
    initializeListWrapper = () => { h.innerHTML = ""; const e = document.createElement("li").innerHTML = "Todays to do",
        t = document.createElement("input");
      t.type = "text", t.className = "newTask", t.placeholder = "Add to your list...", h.append(e, t) }, sortList = () => { y = y.sort(((e, t) => e.index - t.index)) }, display = () => { initializeListWrapper(), y.forEach((e => { const t = document.createElement("li"),
          n = e.description;
        t.innerHTML = `<input type='checkbox' id=${n} name=${n}>\n  <label for = ${n}>${n}</label>`, h.append(t) })) }, updateLocalStorage = () => { sortList(), localStorage.setItem("toDoList", JSON.stringify(y)) }, addTask = e => { y.push(e), sortList(), updateLocalStorage(), display() }, JSON.parse(localStorage.getItem("toDoList")) && (y = JSON.parse(localStorage.getItem("toDoList"))), updateLocalStorage(), display() })() })();