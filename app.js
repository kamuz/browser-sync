// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
  proxy: "http://sandbox.dev:8080/test/"
});

// Listen to change events on HTML and reload
bs.watch("*.php").on("change", bs.reload);