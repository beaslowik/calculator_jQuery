$(document).on("ready", function() {



  function count(sign) {
    var firstNumberValue = $("#firstNumber").val().trim().replace(",", ".");
    var secondNumberValue = $("#secondNumber").val().trim().replace(",", ".");
    var listOfElements = $("ul");

    if ($.isNumeric(firstNumberValue) === true && $.isNumeric(secondNumberValue) === true) {

      firstNumberValue = parseFloat(firstNumberValue);
      secondNumberValue = parseFloat(secondNumberValue);

      resultValue = firstNumberValue + secondNumberValue;

      var elementOfList = $("<li>" + firstNumberValue + sign + secondNumberValue + " = " + resultValue + "</li>");
      listOfElements.append(elementOfList);
      var buttonMark = $("<button>Zaznacz</button>")
      elementOfList.append(buttonMark);

      console.log(resultValue);


    } else {
      alert("Podaj liczby");
    }
  }


  $("#buttonAdd").on("click",
    function() {
      return count("+");
    }
  )



  // =======================================================================================================


  var myList = $("ul");
  myList.on("click", "button",
    function() {
      $(this).parent("li").toggleClass("mark");
    }
  )


});
