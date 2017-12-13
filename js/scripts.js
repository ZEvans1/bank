//back end
var total;

function Customer(name, initialDeposit) {
  // debugger;

  this.customerName = name;
  this.initialAmount = initialDeposit;

  if (isNaN(initialDeposit)) {
    total = 0;
  } else {
    total = initialDeposit;
  }
};

Customer.prototype.transaction = function(deposit, withdrawal) {
  debugger;
  if (!isNaN(deposit)) {
    total += deposit;
  } else {

  }

  if (!isNaN(withdrawal)) {
    total -= withdrawal;
  } else {

  }
};

//front end
$(document).ready(function() {
  $("#open-acc").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#user-name").val();
    var inputInitialDeposit = parseFloat($("#initial-deposit").val());
    user = new Customer(inputtedName, inputInitialDeposit);

    $("#user-name").val("");
    $("#initial-deposit").val("");
    $("#outputBal").text("$" + total);
  });

  $("#transaction").submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("#user-deposit").val());
    var withdrawal = parseFloat($("#user-withdrawal").val());
    user.transaction(deposit, withdrawal);
    $("#user-deposit").val("");
    $("#user-withdrawal").val("");
    $("#outputBal").text("$" + total);
  })


});
