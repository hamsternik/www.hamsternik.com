import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/nkhomitsevych.resume.pdf");

  // Date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  // ISO date filter for <time> elements
  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Blog posts collection sorted by date ascending
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/**/*.md")
      .sort((a, b) => a.date - b.date);
  });

  // RSS feed plugin
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/rss.xml",
    collection: {
      name: "blog",
      limit: 20,
    },
    metadata: {
      language: "en",
      title: "Ni Khomitsevych",
      subtitle:
        "Conscious Calmness, Elegant Minimalism. Software Engineer (iOS, Web) | Technical Career Adviser. At least one new post every year.",
      base: "https://www.hamsternik.com/",
      author: {
        name: "Nikita Khomitsevych",
      },
    },
  });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    includes: "_includes",
    data: "_data",
  },
};
