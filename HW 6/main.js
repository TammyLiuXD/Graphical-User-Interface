/*
  Name: Tammy Liu
  Email Address: Tammy_Liu@student.uml.edu
  Affliation: University of Massachusetts Lowell Computer Science Student
  File: cs.uml.edu/~tliu/HW5
  COMP.4610-201 (91.61) GUI Programming I Assignment: Creating an Interactive Dynamic Table
  source: getbootstrap.com, bootswatch.com, css-tricks.com, youtube.com (Brad Traversy), jqueryvalidation.org
*/

function handleSubmit() {
  const firstNumber = parseInt(document.querySelector("#firstNumber").value, 10);
  const secondNumber = parseInt(document.querySelector("#secondNumber").value, 10);
  const thirdNumber = parseInt(document.querySelector("#thirdNumber").value, 10);
  const fourthNumber = parseInt(document.querySelector("#fourthNumber").value, 10);
  const container = document.querySelector("#mTable");
  const table = document.createElement("table");
  table.className = "table table-bordered";

  //Create table Header
  const thead = document.createElement("thead");
  let tr = document.createElement("tr"); //creation of a tr element that can be modified
  let th = document.createElement("th"); //creation of a th element that can be modified
  tr.appendChild(th); /*appending th (data entries) to tr (row); first entry is empty
                        so we do not need to assign an innerText to th*/

  for(let i = firstNumber; i <= secondNumber; i++){
    th = document.createElement("th"); //creation of a new entry in the head row
    th.innerText = i; /*assigning an value from the interval of the firstNumber and
                        secondNumber to the newly created data entry in the head row*/
    tr.appendChild(th); // appending th (data entries) to tr (row)
  }

  thead.appendChild(tr); //appending tr (row) to thead (beginning/head of table)
  table.appendChild(thead); //appending thead to the table

  //Create table Body
  const tbody = document.createElement("tbody"); // creating the body of the table
  let td; //variable used to capture the entry space that will store the data info

  /*Create each row by using a for loop to calculate the entries for the
  first column which is the interval from the thirdNumber to the fourthNumber.
  There is a inner for loop that is used to find the entries of the first row
  which is the interval from firstNumber entry to the secondNumber entry.*/
  for(let j = thirdNumber; j <= fourthNumber; j++){
    tr = document.createElement("tr"); //creation of a new row
    th = document.createElement("th"); //creation of the first entry of the row.
    th.innerText = j; /*the first entry of the row contains the numbers between
                        the interval of the thirdNumber and fourthNumber*/
    tr.appendChild(th); //appending th (the first entry) to tr (row)

    for(let i = firstNumber; i <= secondNumber; i++){
      td = document.createElement("td"); //creating a new table data entry
      td.innerText = i*j; /*multiplying the ith number with the jth number and
                            assigning the result to the newly created data entry
                            variable*/
      tr.appendChild(td); //appending td (table data) to tr (row)
    }

    tbody.appendChild(tr); //appending that tr (row) to the tbody
  }

  table.appendChild(tbody); //appending the tbody to the table

  container.innerText = ""; //prevent multiple tables being displayed
  container.appendChild(table); //appending the table to the container
}

//Error Handling
jQuery.validator.addMethod("compare1and2", function(value, element) {
  const firstNumber = parseInt(document.querySelector("#firstNumber").value, 10);
  const secondNumber = parseInt(document.querySelector("#secondNumber").value, 10);

/*If both numbers do not exist, we cannot compare. This check if they both exist.
Leaving the error handling for when it is empty to the validate function below.*/
  if (isNaN(firstNumber)){
    return true;
  }
  if (isNaN(secondNumber)){
    return true;
  }

  if (firstNumber > secondNumber){
    return false; //false means it is not  valid and not valid causes the message below to display.
  } else {
    return true;
  }
}, "The first number is greater than the second number. Please enter a number for the first number that is less than or equal to the second number.");

jQuery.validator.addMethod("compare3and4", function(value, element) {
  const thirdNumber = parseInt(document.querySelector("#thirdNumber").value, 10);
  const fourthNumber = parseInt(document.querySelector("#fourthNumber").value, 10);

/*If both numbers do not exist, we cannot compare. This check if they both exist.
Leaving the error handling for when it is empty to the validate function below.*/
  if (isNaN(thirdNumber)){
    return true;
  }
  if (isNaN(fourthNumber)){
    return true;
  }

  if (thirdNumber > fourthNumber){
    return false;
  } else {
    return true;
  }
}, "The third number is greater than the fourth number. Please enter a number for the third number that is less than or equal to the fourth number.");

$( function() { /*main.js is called before tForm exists. Therefore, this function
                  is necessary to make sure the page is done loading before
                  executing the code below.*/
  $( "#tForm" ).validate({
    rules: {
      firstNumber: { /*firstNumber and secondNumber needs to pass compare1and2
                      and required. If not, the message function below will
                      display a error message for the appropriate number.*/
        compare1and2: true,
        required: true
      },
      secondNumber: {
        compare1and2: true,
        required: true
      },
      thirdNumber: {/*thirdNumber and fourthNumber needs to pass compare3and4
                      and required. If not, the message function below will
                      display a error message for the appropriate number.*/
        compare3and4: true,
        required: true
      },
      fourthNumber: {
        compare3and4: true,
        required: true
      }
    },

    messages: {/*displays error message for when there is no input in the input fields.*/
      firstNumber: {
        required: "This field is required. Please enter a number for the First Number"
      },
      secondNumber: {
        required: "This field is required. Please enter a number for the Second Number"
      },
      thirdNumber: {
        required: "This field is required. Please enter a number for the Third Number"
      },
      fourthNumber: {
        required: "This field is required. Please enter a number for the Fourth Number"
      }
    },

    submitHandler: handleSubmit, //This tells the browser what it needs to do once submit is hit.

    errorClass: "text-danger", //Changes the color of the text to red.

    onfocusout: function(element){ /*The element being validated is the input element.
                                    You want to validate immediately on focus change
                                    because default is not validated until submit.*/
      this.element(element)
    }
  });
});
