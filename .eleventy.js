module.exports = function (eleventyConfig) {
    // Make eleventy command less detailed
    eleventyConfig.setQuietMode(true);

    // Change permalinks from e.g. foobar/index.html to foobar.html
    eleventyConfig.addGlobalData("permalink", "{{page.filePathStem}}.html");

    // Set eleventy to not use .gitignore file to ignore files
    eleventyConfig.setUseGitIgnore(false);

    // Define the copied files
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  return {
      dir: {
          input: "content",
          output: "public",
      }
  }
};