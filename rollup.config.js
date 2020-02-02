const config = {};

function generateConfig(name) {}

["wpm", "wpm.min"].forEach(function(key) {
  config[key] = generateConfig(key);
});

module.exports = config;
