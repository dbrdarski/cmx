/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import './main.less'
// import m from 'mithril'
// import r from 'ramda'

// var app = require("moduler")
// app.config('m', m)
// app.config('_', r)

// let components = app.store()
// app.config('component', components.getOrSet)
// app.config('components', components.getAll)

// import './templates/module'

// let routes = app.store()

// app.config('str', {
//   slugify: function(st){
//     st = st.toLowerCase()
//     st = st.replace(/[\u00C0-\u00C5]/ig,'a');
//     st = st.replace(/[\u00C8-\u00CB]/ig,'e');
//     st = st.replace(/[\u00CC-\u00CF]/ig,'i');
//     st = st.replace(/[\u00D2-\u00D6]/ig,'o');
//     st = st.replace(/[\u00D9-\u00DC]/ig,'u');
//     st = st.replace(/[\u00D1]/ig,'n');
//     st = st.replace(/[\-]/g,' ');
//     // st = st.replace(/[^a-z0-9 ]+/gi,'')
//     st = st.trim().replace(/ /g,'-');
//     st = st.replace(/[\-]{2,}/g,'-');
//     st = st.replace(/^[^a-z]+/g,'');
//     return (st.replace(/[^a-z0-9\- ]*/gi,''));
//   }
// })

// app.config('group', function(route, fn){
//   var instance = this
//   var newInstance = Object.create(this);
//   Object.defineProperty(newInstance, 'route', {
//     get : ()=> (instance.route || "") + route
//   })
//   fn.call(newInstance, newInstance)
// })
// // app.config('route', function(route, view){
// //   routes.getOrSet(this.route || "" + route, view)
// // })
// app.config('route', routes.getOrSet)
// app.config('routes', routes.getAll)


// let routeHandler = (route, view) => {
//   var data;
//   return {
//     onmatch: () => new Promise((resolve, reject) => {
//       m.request(window.location.href, { method: "POST" }).then((responseData) => {
//         data = responseData.data;
//         // console.log(data)
//         resolve(view)
//       })
//     }),
//     render: vnode => {
//       vnode.attrs.data = data
//       // let state = {
//       //   title: data.title,
//       //   customSlug: data.slug,
//       //   description: data.description,
//       //   setTitle: function(v) {
//       //     state.title = v
//       //   },
//       //   setSlug: function(v) {
//       //     state.customSlug = str.slugify(v)
//       //   },
//       //   setDescription: function(v){
//       //     state.description = v
//       //   }
//       // }
//       // Object.defineProperty(state, 'slug', {
//       //   get: () => state.customSlug || str.slugify(state.title)
//       // })
//       return vnode
//     }
//   }
// }

// app.run(['templates'], function({
//   components: { CoursesIndex }
// }){
//   // console.log(CoursesIndex)
//   // => m.request('route').then(()=>m.mount(...))
//   m.route.prefix("")

//   let routes = app.routes()
//   let rs = {}
//   // Object.keys(routes).map(components, routes => )
//   for (let  r in routes){
//     rs[r] = routeHandler(r, routes[r])
//   }
//   // console.log(["ROUTES", routes()])
//   // // let routes = app.routes()

//   // m.route(document.body, '/courses', {
//   //   '/courses' : routeHandler('/courses', routes['/courses'])
//   // })
//   m.route(document.body, '/courses', rs)

//   // // m.mount(document.body, CoursesIndex)
// })
// // console.log(app)

// // console.log(c, a)


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map