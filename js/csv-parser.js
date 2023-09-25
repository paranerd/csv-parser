const CSV_Parser = new (function () {
  this.parse = function (raw) {
    const valuesRegExp = /(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/g;
    //const valuesRegExp = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    const lines = raw.split(/(?:\r\n|\n)+/).filter((el) => {
      return el.length != 0;
    });
    const headers = lines.splice(0, 1)[0].split(',');

    const elements = [];

    for (let i = 0; i < lines.length; i++) {
      const element = {};
      let j = 0;

      while ((matches = valuesRegExp.exec(lines[i]))) {
        element[headers[j]] = matches[matches.length - 1].replaceAll('"', '');
        j++;
      }

      elements.push(element);
    }

    return elements;
  };
})();
