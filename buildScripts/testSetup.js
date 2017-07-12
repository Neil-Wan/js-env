// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {}; // treat .css statements just as an empty function.