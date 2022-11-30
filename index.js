const { images } = require("./images.json");

/**
 * Returns uri to a png of a random Pokemon
 * @returns {string}
 */
function randomPokeImg() {
  const img = images[Math.floor(Math.random() * images.length)];
  return img;
}

module.exports = { randomPokeImg };
