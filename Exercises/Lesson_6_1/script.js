
let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  let colsolidatedData = document.getElementById('consolidated-data');
  let newParagraph = document.createElement('p');
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('full-name-input').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('email-input').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('cpf-input').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('address-input').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('city-input').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('states').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('residence-type').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('curriculum-summary').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('job').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('job-description').value;
  colsolidatedData.appendChild(newParagraph).innerHTML = document.getElementById('start-date').value;
});

let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  document.getElementById('consolidated-data').remove(colsolidatedData.innerHTML);
});
