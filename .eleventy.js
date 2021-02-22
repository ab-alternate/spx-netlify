const fs = require("fs");

module.exports = function(eleventyConfig) {

  // Pass through important assets to the built directory
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: 'pages',
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}
