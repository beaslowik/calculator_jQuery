$(document).on("ready", function() {

  var firstNumberValue;
  var secondNumberValue;
  var resultValue;

  function takeValue(idOfValue) {
    return $(idOfValue).val().trim().replace(",", ".");
  }

  function printElement(sign) {
    var listOfElements = $("ul");
    var elementOfList = $("<li> <span>" + firstNumberValue + " " + sign + " " + secondNumberValue + " = " + resultValue + "</span></li>");
    listOfElements.append(elementOfList);
    var buttonMark = $("<span>Zaznacz</span>").addClass("buttonMark");
    elementOfList.append(buttonMark);
  }

  function printAlert() {
    alert("Podaj liczby");
  }

  function checkIfNumber(value) {
    var result = false;
    if ($.isNumeric(value)) {
      result = true;
    } else {
      printAlert();
    }
    return result;
  }

  function parseNumbers() {
    var result = false;
    if (checkIfNumber(firstNumberValue) && checkIfNumber(secondNumberValue)) {
      firstNumberValue = parseFloat(firstNumberValue);
      secondNumberValue = parseFloat(secondNumberValue);
      result = true;
    }
    return result;
  }

  var add = function(a, b) {
    return a + b;
  }

  var sub = function(a, b) {
    return a - b;
  }

  var multiply = function(a, b) {
    return a * b;
  }

  var divide = function(a, b) {
    return a / b;
  }

  function count(sign, method) {
    firstNumberValue = takeValue("#firstNumber");
    secondNumberValue = takeValue("#secondNumber");

    if (parseNumbers()) {
      resultValue = method(firstNumberValue, secondNumberValue);
      printElement(sign);
    }
  }

  ///////

  $("#buttonAdd").on("click",
    function() {
      return count("+", add);
    }
  )

  $("#buttonSubtraction").on("click",
    function() {
      return count("-", sub);
    }
  )

  $("#buttonMultiplication").on("click",
    function() {
      return count("*", multiply);
    }
  )

  $("#buttonDivision").on("click",
    function() {
      return count("/", divide);
    }
  )

  // MARK RED
  $("ul").on("click", ".buttonMark",
    function() {
      $(this).prev("span").toggleClass("mark");
    }
  )


});
