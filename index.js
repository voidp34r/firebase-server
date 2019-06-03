"use strict";

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/database");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var app = firebase.initializeApp({
  databaseURL: "ws://localhost:5555"
});
// app.database().ref().on('value', function (snap) {
//   console.log('Got value: ', snap.val({}));
// });

console.table(app.appName);