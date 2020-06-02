'use strict';


function pressSubmit() {
  $('#number-chooser').submit(event => {
    event.preventDefault();

    $('.js-result').empty();

    let number = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());

    let results = [];

    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push('fizzbuzz');
      } else if (i % 3 === 0) {
        results.push('fizz');
      } else if (i % 5 === 0) {
        results.push('buzz');
      } else {
        results.push(i);
      }
    }

    $('.js-results').append(results);

  });
}

$(pressSubmit());