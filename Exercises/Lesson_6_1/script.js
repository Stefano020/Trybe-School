let submitButton = document.getElementById('submit-button');
let colsolidatedData = document.getElementById('consolidated-data');
// Function to add all inputed data in a <div>
submitButton.addEventListener('click', function() {
  event.preventDefault();

  let fullNameParagraph = document.createElement('p');
  fullNameParagraph.innerHTML = document.getElementById('full-name-input').value;
  colsolidatedData.appendChild(fullNameParagraph);

  let emailParagraph = document.createElement('p');
  emailParagraph.innerHTML = document.getElementById('email-input').value;
  colsolidatedData.appendChild(emailParagraph);

  let cpfParagraph = document.createElement('p');
  cpfParagraph.innerHTML = document.getElementById('cpf-input').value;
  colsolidatedData.appendChild(cpfParagraph);

  let addressParagraph = document.createElement('p');
  addressParagraph.innerHTML = document.getElementById('address-input').value;
  colsolidatedData.appendChild(addressParagraph);

  let cityParagraph = document.createElement('p');
  cityParagraph.innerHTML = document.getElementById('city-input').value;
  colsolidatedData.appendChild(cityParagraph);

  let statesParagraph = document.createElement('p');
  statesParagraph.innerHTML = document.getElementById('states').value;
  colsolidatedData.appendChild(statesParagraph);

  let residenceParagraph = document.createElement('p');
  residenceParagraph.innerHTML = document.getElementById('residence-type').value;
  colsolidatedData.appendChild(residenceParagraph);

  let curriculumParagraph = document.createElement('p');
  curriculumParagraph.innerHTML = document.getElementById('curriculum-summary').value;
  colsolidatedData.appendChild(curriculumParagraph);

  let jobParagraph = document.createElement('p');
  jobParagraph.innerHTML = document.getElementById('job').value;
  colsolidatedData.appendChild(jobParagraph);

  let jobDescriptionParagraph = document.createElement('p');
  jobDescriptionParagraph.innerHTML = document.getElementById('job-description').value;
  colsolidatedData.appendChild(jobDescriptionParagraph);

  let startDateParagraph = document.createElement('p');
  startDateParagraph.innerHTML = document.getElementById('start-date').value;
  colsolidatedData.appendChild(startDateParagraph);
});

// Function to clear all inputs and Consolidated data div content
let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  if (colsolidatedData.innerHTML !== '') {
  colsolidatedData.remove(this.innerHTML);
  } else {
    return;
  }
});
