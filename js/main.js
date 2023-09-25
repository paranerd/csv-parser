window.onload = function () {
  // Init text loader
  document.getElementById('text-loader').addEventListener('click', function () {
    this.querySelector('input').click();
  });

  const fileInput = document.querySelector('#text-loader input');

  fileInput.addEventListener('change', (e) => {
    readFile(e.target.files[0], displayText);

    // Clear input to trigger change event on file reload
    fileInput.value = '';
  });
};

function displayText(text) {
  const elements = CSV_Parser.parse(text);
  const result = document.getElementById('result');
  const resultContainer = document.getElementById('result-container');
  resultContainer.classList.remove('hidden');
  result.innerText = JSON.stringify(elements, null, 4);
}

function readFile(file, callback) {
  const reader = new FileReader();

  reader.onload = function () {
    callback(reader.result);
  };

  if (file.type.match(/^text/)) {
    reader.readAsText(file);
  }
}
