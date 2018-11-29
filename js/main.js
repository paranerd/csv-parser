window.onload = function () {
    // Init text loader
    document.getElementById("text-loader").addEventListener('click', function () {
        this.querySelector('input').click();
    });

    document.querySelector('#text-loader input').addEventListener('change', function () {
        readFile(this.files[0], displayText);
    });
};

function displayText(text) {
    let elements = CSV_Parser.parse(text);
    $("#result").removeClass("hidden").text(JSON.stringify(elements, null, 4));
}

function readFile(file, callback) {
    let reader = new FileReader();

    reader.onload = function() {
        callback(reader.result);
    };

    if (file.type.match(/^text/)) {
        reader.readAsText(file);
    }
}
