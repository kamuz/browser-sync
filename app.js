// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
  proxy: "http://sandbox.dev:8080/test/"
});