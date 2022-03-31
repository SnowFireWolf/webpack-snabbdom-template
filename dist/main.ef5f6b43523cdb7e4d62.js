/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/snabbdom/build/h.js":
/*!******************************************!*\
  !*** ./node_modules/snabbdom/build/h.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNS\": () => (/* binding */ addNS),\n/* harmony export */   \"fragment\": () => (/* binding */ fragment),\n/* harmony export */   \"h\": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnode */ \"./node_modules/snabbdom/build/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/snabbdom/build/is.js\");\n\n\nfunction addNS(data, children, sel) {\n  data.ns = \"http://www.w3.org/2000/svg\";\n  if (sel !== \"foreignObject\" && children !== void 0) {\n    for (let i = 0; i < children.length; ++i) {\n      const child = children[i];\n      if (typeof child === \"string\")\n        continue;\n      const childData = child.data;\n      if (childData !== void 0) {\n        addNS(childData, child.children, child.sel);\n      }\n    }\n  }\n}\nfunction h(sel, b, c) {\n  let data = {};\n  let children;\n  let text;\n  let i;\n  if (c !== void 0) {\n    if (b !== null) {\n      data = b;\n    }\n    if (_is__WEBPACK_IMPORTED_MODULE_0__.array(c)) {\n      children = c;\n    } else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c)) {\n      text = c.toString();\n    } else if (c && c.sel) {\n      children = [c];\n    }\n  } else if (b !== void 0 && b !== null) {\n    if (_is__WEBPACK_IMPORTED_MODULE_0__.array(b)) {\n      children = b;\n    } else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(b)) {\n      text = b.toString();\n    } else if (b && b.sel) {\n      children = [b];\n    } else {\n      data = b;\n    }\n  }\n  if (children !== void 0) {\n    for (i = 0; i < children.length; ++i) {\n      if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(children[i]))\n        children[i] = (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(void 0, void 0, void 0, children[i], void 0);\n    }\n  }\n  if (sel[0] === \"s\" && sel[1] === \"v\" && sel[2] === \"g\" && (sel.length === 3 || sel[3] === \".\" || sel[3] === \"#\")) {\n    addNS(data, children, sel);\n  }\n  return (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(sel, data, children, text, void 0);\n}\nfunction fragment(children) {\n  let c;\n  let text;\n  if (_is__WEBPACK_IMPORTED_MODULE_0__.array(children)) {\n    c = children;\n  } else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c)) {\n    text = children;\n  } else if (c && c.sel) {\n    c = [children];\n  }\n  if (c !== void 0) {\n    for (let i = 0; i < c.length; ++i) {\n      if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c[i]))\n        c[i] = (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(void 0, void 0, void 0, c[i], void 0);\n    }\n  }\n  return (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(void 0, {}, c, text, void 0);\n}\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/h.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/htmldomapi.js":
/*!***************************************************!*\
  !*** ./node_modules/snabbdom/build/htmldomapi.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlDomApi\": () => (/* binding */ htmlDomApi)\n/* harmony export */ });\nfunction createElement(tagName2, options) {\n  return document.createElement(tagName2, options);\n}\nfunction createElementNS(namespaceURI, qualifiedName, options) {\n  return document.createElementNS(namespaceURI, qualifiedName, options);\n}\nfunction createDocumentFragment() {\n  return document.createDocumentFragment();\n}\nfunction createTextNode(text) {\n  return document.createTextNode(text);\n}\nfunction createComment(text) {\n  return document.createComment(text);\n}\nfunction insertBefore(parentNode2, newNode, referenceNode) {\n  parentNode2.insertBefore(newNode, referenceNode);\n}\nfunction removeChild(node, child) {\n  node.removeChild(child);\n}\nfunction appendChild(node, child) {\n  node.appendChild(child);\n}\nfunction parentNode(node) {\n  return node.parentNode;\n}\nfunction nextSibling(node) {\n  return node.nextSibling;\n}\nfunction tagName(elm) {\n  return elm.tagName;\n}\nfunction setTextContent(node, text) {\n  node.textContent = text;\n}\nfunction getTextContent(node) {\n  return node.textContent;\n}\nfunction isElement(node) {\n  return node.nodeType === 1;\n}\nfunction isText(node) {\n  return node.nodeType === 3;\n}\nfunction isComment(node) {\n  return node.nodeType === 8;\n}\nfunction isDocumentFragment(node) {\n  return node.nodeType === 11;\n}\nconst htmlDomApi = {\n  createElement,\n  createElementNS,\n  createTextNode,\n  createDocumentFragment,\n  createComment,\n  insertBefore,\n  removeChild,\n  appendChild,\n  parentNode,\n  nextSibling,\n  tagName,\n  setTextContent,\n  getTextContent,\n  isElement,\n  isText,\n  isComment,\n  isDocumentFragment\n};\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/htmldomapi.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/init.js":
/*!*********************************************!*\
  !*** ./node_modules/snabbdom/build/init.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./node_modules/snabbdom/build/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ \"./node_modules/snabbdom/build/is.js\");\n/* harmony import */ var _htmldomapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmldomapi */ \"./node_modules/snabbdom/build/htmldomapi.js\");\n\n\n\nfunction isUndef(s) {\n  return s === void 0;\n}\nfunction isDef(s) {\n  return s !== void 0;\n}\nconst emptyNode = (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(\"\", {}, [], void 0, void 0);\nfunction sameVnode(vnode1, vnode2) {\n  var _a, _b;\n  const isSameKey = vnode1.key === vnode2.key;\n  const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);\n  const isSameSel = vnode1.sel === vnode2.sel;\n  return isSameSel && isSameKey && isSameIs;\n}\nfunction documentFragmentIsNotSupported() {\n  throw new Error(\"The document fragment is not supported on this platform.\");\n}\nfunction isElement(api, vnode2) {\n  return api.isElement(vnode2);\n}\nfunction isDocumentFragment(api, vnode2) {\n  return api.isDocumentFragment(vnode2);\n}\nfunction createKeyToOldIdx(children, beginIdx, endIdx) {\n  var _a;\n  const map = {};\n  for (let i = beginIdx; i <= endIdx; ++i) {\n    const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;\n    if (key !== void 0) {\n      map[key] = i;\n    }\n  }\n  return map;\n}\nconst hooks = [\n  \"create\",\n  \"update\",\n  \"remove\",\n  \"destroy\",\n  \"pre\",\n  \"post\"\n];\nfunction init(modules, domApi, options) {\n  const cbs = {\n    create: [],\n    update: [],\n    remove: [],\n    destroy: [],\n    pre: [],\n    post: []\n  };\n  const api = domApi !== void 0 ? domApi : _htmldomapi__WEBPACK_IMPORTED_MODULE_1__.htmlDomApi;\n  for (const hook of hooks) {\n    for (const module of modules) {\n      const currentHook = module[hook];\n      if (currentHook !== void 0) {\n        cbs[hook].push(currentHook);\n      }\n    }\n  }\n  function emptyNodeAt(elm) {\n    const id = elm.id ? \"#\" + elm.id : \"\";\n    const classes = elm.getAttribute(\"class\");\n    const c = classes ? \".\" + classes.split(\" \").join(\".\") : \"\";\n    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(api.tagName(elm).toLowerCase() + id + c, {}, [], void 0, elm);\n  }\n  function emptyDocumentFragmentAt(frag) {\n    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(void 0, {}, [], void 0, frag);\n  }\n  function createRmCb(childElm, listeners) {\n    return function rmCb() {\n      if (--listeners === 0) {\n        const parent = api.parentNode(childElm);\n        api.removeChild(parent, childElm);\n      }\n    };\n  }\n  function createElm(vnode2, insertedVnodeQueue) {\n    var _a, _b, _c, _d;\n    let i;\n    let data = vnode2.data;\n    if (data !== void 0) {\n      const init2 = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;\n      if (isDef(init2)) {\n        init2(vnode2);\n        data = vnode2.data;\n      }\n    }\n    const children = vnode2.children;\n    const sel = vnode2.sel;\n    if (sel === \"!\") {\n      if (isUndef(vnode2.text)) {\n        vnode2.text = \"\";\n      }\n      vnode2.elm = api.createComment(vnode2.text);\n    } else if (sel !== void 0) {\n      const hashIdx = sel.indexOf(\"#\");\n      const dotIdx = sel.indexOf(\".\", hashIdx);\n      const hash = hashIdx > 0 ? hashIdx : sel.length;\n      const dot = dotIdx > 0 ? dotIdx : sel.length;\n      const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;\n      const elm = vnode2.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);\n      if (hash < dot)\n        elm.setAttribute(\"id\", sel.slice(hash + 1, dot));\n      if (dotIdx > 0)\n        elm.setAttribute(\"class\", sel.slice(dot + 1).replace(/\\./g, \" \"));\n      for (i = 0; i < cbs.create.length; ++i)\n        cbs.create[i](emptyNode, vnode2);\n      if (_is__WEBPACK_IMPORTED_MODULE_2__.array(children)) {\n        for (i = 0; i < children.length; ++i) {\n          const ch = children[i];\n          if (ch != null) {\n            api.appendChild(elm, createElm(ch, insertedVnodeQueue));\n          }\n        }\n      } else if (_is__WEBPACK_IMPORTED_MODULE_2__.primitive(vnode2.text)) {\n        api.appendChild(elm, api.createTextNode(vnode2.text));\n      }\n      const hook = vnode2.data.hook;\n      if (isDef(hook)) {\n        (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode2);\n        if (hook.insert) {\n          insertedVnodeQueue.push(vnode2);\n        }\n      }\n    } else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode2.children) {\n      const children2 = vnode2.children;\n      vnode2.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();\n      for (i = 0; i < cbs.create.length; ++i)\n        cbs.create[i](emptyNode, vnode2);\n      for (i = 0; i < children2.length; ++i) {\n        const ch = children2[i];\n        if (ch != null) {\n          api.appendChild(vnode2.elm, createElm(ch, insertedVnodeQueue));\n        }\n      }\n    } else {\n      vnode2.elm = api.createTextNode(vnode2.text);\n    }\n    return vnode2.elm;\n  }\n  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      const ch = vnodes[startIdx];\n      if (ch != null) {\n        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);\n      }\n    }\n  }\n  function invokeDestroyHook(vnode2) {\n    var _a, _b;\n    const data = vnode2.data;\n    if (data !== void 0) {\n      (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode2);\n      for (let i = 0; i < cbs.destroy.length; ++i)\n        cbs.destroy[i](vnode2);\n      if (vnode2.children !== void 0) {\n        for (let j = 0; j < vnode2.children.length; ++j) {\n          const child = vnode2.children[j];\n          if (child != null && typeof child !== \"string\") {\n            invokeDestroyHook(child);\n          }\n        }\n      }\n    }\n  }\n  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\n    var _a, _b;\n    for (; startIdx <= endIdx; ++startIdx) {\n      let listeners;\n      let rm;\n      const ch = vnodes[startIdx];\n      if (ch != null) {\n        if (isDef(ch.sel)) {\n          invokeDestroyHook(ch);\n          listeners = cbs.remove.length + 1;\n          rm = createRmCb(ch.elm, listeners);\n          for (let i = 0; i < cbs.remove.length; ++i)\n            cbs.remove[i](ch, rm);\n          const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;\n          if (isDef(removeHook)) {\n            removeHook(ch, rm);\n          } else {\n            rm();\n          }\n        } else {\n          api.removeChild(parentElm, ch.elm);\n        }\n      }\n    }\n  }\n  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {\n    let oldStartIdx = 0;\n    let newStartIdx = 0;\n    let oldEndIdx = oldCh.length - 1;\n    let oldStartVnode = oldCh[0];\n    let oldEndVnode = oldCh[oldEndIdx];\n    let newEndIdx = newCh.length - 1;\n    let newStartVnode = newCh[0];\n    let newEndVnode = newCh[newEndIdx];\n    let oldKeyToIdx;\n    let idxInOld;\n    let elmToMove;\n    let before;\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n      if (oldStartVnode == null) {\n        oldStartVnode = oldCh[++oldStartIdx];\n      } else if (oldEndVnode == null) {\n        oldEndVnode = oldCh[--oldEndIdx];\n      } else if (newStartVnode == null) {\n        newStartVnode = newCh[++newStartIdx];\n      } else if (newEndVnode == null) {\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldStartVnode, newStartVnode)) {\n        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);\n        oldStartVnode = oldCh[++oldStartIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else if (sameVnode(oldEndVnode, newEndVnode)) {\n        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldStartVnode, newEndVnode)) {\n        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);\n        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));\n        oldStartVnode = oldCh[++oldStartIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldEndVnode, newStartVnode)) {\n        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);\n        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else {\n        if (oldKeyToIdx === void 0) {\n          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n        }\n        idxInOld = oldKeyToIdx[newStartVnode.key];\n        if (isUndef(idxInOld)) {\n          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n        } else {\n          elmToMove = oldCh[idxInOld];\n          if (elmToMove.sel !== newStartVnode.sel) {\n            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n          } else {\n            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);\n            oldCh[idxInOld] = void 0;\n            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);\n          }\n        }\n        newStartVnode = newCh[++newStartIdx];\n      }\n    }\n    if (newStartIdx <= newEndIdx) {\n      before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;\n      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n    }\n    if (oldStartIdx <= oldEndIdx) {\n      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);\n    }\n  }\n  function patchVnode(oldVnode, vnode2, insertedVnodeQueue) {\n    var _a, _b, _c, _d, _e;\n    const hook = (_a = vnode2.data) === null || _a === void 0 ? void 0 : _a.hook;\n    (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode2);\n    const elm = vnode2.elm = oldVnode.elm;\n    const oldCh = oldVnode.children;\n    const ch = vnode2.children;\n    if (oldVnode === vnode2)\n      return;\n    if (vnode2.data !== void 0) {\n      for (let i = 0; i < cbs.update.length; ++i)\n        cbs.update[i](oldVnode, vnode2);\n      (_d = (_c = vnode2.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode2);\n    }\n    if (isUndef(vnode2.text)) {\n      if (isDef(oldCh) && isDef(ch)) {\n        if (oldCh !== ch)\n          updateChildren(elm, oldCh, ch, insertedVnodeQueue);\n      } else if (isDef(ch)) {\n        if (isDef(oldVnode.text))\n          api.setTextContent(elm, \"\");\n        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n      } else if (isDef(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n      } else if (isDef(oldVnode.text)) {\n        api.setTextContent(elm, \"\");\n      }\n    } else if (oldVnode.text !== vnode2.text) {\n      if (isDef(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n      }\n      api.setTextContent(elm, vnode2.text);\n    }\n    (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode2);\n  }\n  return function patch(oldVnode, vnode2) {\n    let i, elm, parent;\n    const insertedVnodeQueue = [];\n    for (i = 0; i < cbs.pre.length; ++i)\n      cbs.pre[i]();\n    if (isElement(api, oldVnode)) {\n      oldVnode = emptyNodeAt(oldVnode);\n    } else if (isDocumentFragment(api, oldVnode)) {\n      oldVnode = emptyDocumentFragmentAt(oldVnode);\n    }\n    if (sameVnode(oldVnode, vnode2)) {\n      patchVnode(oldVnode, vnode2, insertedVnodeQueue);\n    } else {\n      elm = oldVnode.elm;\n      parent = api.parentNode(elm);\n      createElm(vnode2, insertedVnodeQueue);\n      if (parent !== null) {\n        api.insertBefore(parent, vnode2.elm, api.nextSibling(elm));\n        removeVnodes(parent, [oldVnode], 0, 0);\n      }\n    }\n    for (i = 0; i < insertedVnodeQueue.length; ++i) {\n      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);\n    }\n    for (i = 0; i < cbs.post.length; ++i)\n      cbs.post[i]();\n    return vnode2;\n  };\n}\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/init.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/is.js":
/*!*******************************************!*\
  !*** ./node_modules/snabbdom/build/is.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"array\": () => (/* binding */ array),\n/* harmony export */   \"primitive\": () => (/* binding */ primitive)\n/* harmony export */ });\nconst array = Array.isArray;\nfunction primitive(s) {\n  return typeof s === \"string\" || typeof s === \"number\" || s instanceof String || s instanceof Number;\n}\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/is.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/class.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/class.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classModule\": () => (/* binding */ classModule)\n/* harmony export */ });\nfunction updateClass(oldVnode, vnode) {\n  let cur;\n  let name;\n  const elm = vnode.elm;\n  let oldClass = oldVnode.data.class;\n  let klass = vnode.data.class;\n  if (!oldClass && !klass)\n    return;\n  if (oldClass === klass)\n    return;\n  oldClass = oldClass || {};\n  klass = klass || {};\n  for (name in oldClass) {\n    if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {\n      elm.classList.remove(name);\n    }\n  }\n  for (name in klass) {\n    cur = klass[name];\n    if (cur !== oldClass[name]) {\n      elm.classList[cur ? \"add\" : \"remove\"](name);\n    }\n  }\n}\nconst classModule = { create: updateClass, update: updateClass };\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/modules/class.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/eventlisteners.js":
/*!***************************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/eventlisteners.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListenersModule\": () => (/* binding */ eventListenersModule)\n/* harmony export */ });\nfunction invokeHandler(handler, vnode, event) {\n  if (typeof handler === \"function\") {\n    handler.call(vnode, event, vnode);\n  } else if (typeof handler === \"object\") {\n    for (let i = 0; i < handler.length; i++) {\n      invokeHandler(handler[i], vnode, event);\n    }\n  }\n}\nfunction handleEvent(event, vnode) {\n  const name = event.type;\n  const on = vnode.data.on;\n  if (on && on[name]) {\n    invokeHandler(on[name], vnode, event);\n  }\n}\nfunction createListener() {\n  return function handler(event) {\n    handleEvent(event, handler.vnode);\n  };\n}\nfunction updateEventListeners(oldVnode, vnode) {\n  const oldOn = oldVnode.data.on;\n  const oldListener = oldVnode.listener;\n  const oldElm = oldVnode.elm;\n  const on = vnode && vnode.data.on;\n  const elm = vnode && vnode.elm;\n  let name;\n  if (oldOn === on) {\n    return;\n  }\n  if (oldOn && oldListener) {\n    if (!on) {\n      for (name in oldOn) {\n        oldElm.removeEventListener(name, oldListener, false);\n      }\n    } else {\n      for (name in oldOn) {\n        if (!on[name]) {\n          oldElm.removeEventListener(name, oldListener, false);\n        }\n      }\n    }\n  }\n  if (on) {\n    const listener = vnode.listener = oldVnode.listener || createListener();\n    listener.vnode = vnode;\n    if (!oldOn) {\n      for (name in on) {\n        elm.addEventListener(name, listener, false);\n      }\n    } else {\n      for (name in on) {\n        if (!oldOn[name]) {\n          elm.addEventListener(name, listener, false);\n        }\n      }\n    }\n  }\n}\nconst eventListenersModule = {\n  create: updateEventListeners,\n  update: updateEventListeners,\n  destroy: updateEventListeners\n};\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/modules/eventlisteners.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/props.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/props.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"propsModule\": () => (/* binding */ propsModule)\n/* harmony export */ });\nfunction updateProps(oldVnode, vnode) {\n  let key;\n  let cur;\n  let old;\n  const elm = vnode.elm;\n  let oldProps = oldVnode.data.props;\n  let props = vnode.data.props;\n  if (!oldProps && !props)\n    return;\n  if (oldProps === props)\n    return;\n  oldProps = oldProps || {};\n  props = props || {};\n  for (key in props) {\n    cur = props[key];\n    old = oldProps[key];\n    if (old !== cur && (key !== \"value\" || elm[key] !== cur)) {\n      elm[key] = cur;\n    }\n  }\n}\nconst propsModule = { create: updateProps, update: updateProps };\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/modules/props.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/style.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/style.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleModule\": () => (/* binding */ styleModule)\n/* harmony export */ });\nconst raf = typeof window !== \"undefined\" && window.requestAnimationFrame.bind(window) || setTimeout;\nconst nextFrame = function(fn) {\n  raf(function() {\n    raf(fn);\n  });\n};\nlet reflowForced = false;\nfunction setNextFrame(obj, prop, val) {\n  nextFrame(function() {\n    obj[prop] = val;\n  });\n}\nfunction updateStyle(oldVnode, vnode) {\n  let cur;\n  let name;\n  const elm = vnode.elm;\n  let oldStyle = oldVnode.data.style;\n  let style = vnode.data.style;\n  if (!oldStyle && !style)\n    return;\n  if (oldStyle === style)\n    return;\n  oldStyle = oldStyle || {};\n  style = style || {};\n  const oldHasDel = \"delayed\" in oldStyle;\n  for (name in oldStyle) {\n    if (!style[name]) {\n      if (name[0] === \"-\" && name[1] === \"-\") {\n        elm.style.removeProperty(name);\n      } else {\n        elm.style[name] = \"\";\n      }\n    }\n  }\n  for (name in style) {\n    cur = style[name];\n    if (name === \"delayed\" && style.delayed) {\n      for (const name2 in style.delayed) {\n        cur = style.delayed[name2];\n        if (!oldHasDel || cur !== oldStyle.delayed[name2]) {\n          setNextFrame(elm.style, name2, cur);\n        }\n      }\n    } else if (name !== \"remove\" && cur !== oldStyle[name]) {\n      if (name[0] === \"-\" && name[1] === \"-\") {\n        elm.style.setProperty(name, cur);\n      } else {\n        elm.style[name] = cur;\n      }\n    }\n  }\n}\nfunction applyDestroyStyle(vnode) {\n  let style;\n  let name;\n  const elm = vnode.elm;\n  const s = vnode.data.style;\n  if (!s || !(style = s.destroy))\n    return;\n  for (name in style) {\n    elm.style[name] = style[name];\n  }\n}\nfunction applyRemoveStyle(vnode, rm) {\n  const s = vnode.data.style;\n  if (!s || !s.remove) {\n    rm();\n    return;\n  }\n  if (!reflowForced) {\n    vnode.elm.offsetLeft;\n    reflowForced = true;\n  }\n  let name;\n  const elm = vnode.elm;\n  let i = 0;\n  const style = s.remove;\n  let amount = 0;\n  const applied = [];\n  for (name in style) {\n    applied.push(name);\n    elm.style[name] = style[name];\n  }\n  const compStyle = getComputedStyle(elm);\n  const props = compStyle[\"transition-property\"].split(\", \");\n  for (; i < props.length; ++i) {\n    if (applied.indexOf(props[i]) !== -1)\n      amount++;\n  }\n  elm.addEventListener(\"transitionend\", function(ev) {\n    if (ev.target === elm)\n      --amount;\n    if (amount === 0)\n      rm();\n  });\n}\nfunction forceReflow() {\n  reflowForced = false;\n}\nconst styleModule = {\n  pre: forceReflow,\n  create: updateStyle,\n  update: updateStyle,\n  destroy: applyDestroyStyle,\n  remove: applyRemoveStyle\n};\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/modules/style.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/snabbdom/build/vnode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vnode\": () => (/* binding */ vnode)\n/* harmony export */ });\nfunction vnode(sel, data, children, text, elm) {\n  const key = data === void 0 ? void 0 : data.key;\n  return { sel, data, children, text, elm, key };\n}\n\n\n//# sourceURL=webpack://snabbdom/./node_modules/snabbdom/build/vnode.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/init.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/class.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/props.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/style.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/eventlisteners.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/h.js\");\n\nconst patch = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.init)([\n  snabbdom__WEBPACK_IMPORTED_MODULE_1__.classModule,\n  snabbdom__WEBPACK_IMPORTED_MODULE_2__.propsModule,\n  snabbdom__WEBPACK_IMPORTED_MODULE_3__.styleModule,\n  snabbdom__WEBPACK_IMPORTED_MODULE_4__.eventListenersModule\n]);\nconst container = document.getElementById(\"app\");\nconsole.time(\"render\");\nconst vnode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"div#container.two.classes\", { on: { click: () => console.log(\"hi\") } }, [\n  (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"span\", { style: { fontWeight: \"bold\" } }, \"This is bold\"),\n  \" and this is just normal text\",\n  (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"a\", { props: { href: \"/foo\" } }, \"I'll take you places!\")\n]);\npatch(container, vnode);\nconsole.timeEnd(\"render\");\nconsole.time(\"render\");\nconst newVnode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"div#container.two.classes\", { on: { click: () => console.log(\"boom\") } }, [\n  (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"span\", { style: { fontWeight: \"normal\", fontStyle: \"italic\" } }, \"This is now italic type\"),\n  \" and this is still just normal text\",\n  (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)(\"a\", { props: { href: \"/bar\" } }, \"I'll take you places!\")\n]);\npatch(vnode, newVnode);\nconsole.timeEnd(\"render\");\n\n\n//# sourceURL=webpack://snabbdom/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;