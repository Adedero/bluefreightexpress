const toTitleCase = (str, capitalizeEachWord) => {
  if (!str) return "";
  if (capitalizeEachWord) {
    return str.split(/\s+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  } else {
    const words = str.split(/\s+/);
    if (words.length === 0) return "";
    return words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase() + (words.length > 1 ? " " + words.slice(1).join(" ").toLowerCase() : "");
  }
};

export { toTitleCase as t };
//# sourceMappingURL=index15.mjs.map
