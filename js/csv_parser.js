var CSV_Parser = new function() {
    this.parse = function(raw) {
        let valuesRegExp = /(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g;
        let lines = raw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0});
        let headers = lines.splice(0, 1)[0].split(",");
        let elements = [];

        for (let i = 0; i < lines.length; i++) {
            let element = {};
            let j = 0;

            while (matches = valuesRegExp.exec(lines[i])) {
                var value = matches[1] || matches[2];
                value = value.replace(/\"\"/g, "\"");

                element[headers[j]] = value;
                j++;
            }

            elements.push(element);
        }

        return elements;
    }
}
