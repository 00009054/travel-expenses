var dollarCurrency = 9433.34;
var euroCurrency = 10354.03;

var ticketPrice = 500;
var hotelPrice = 500;
var travelPrice = 120;

var ticketPriceUzs = ticketPrice * dollarCurrency;
var hotelPriceUzs = hotelPrice * dollarCurrency;
var travelPriceUzs = travelPrice * euroCurrency;
var totalExpense = ticketPriceUzs + hotelPriceUzs + travelPriceUzs;
totalExpense = Math.round(totalExpense);

var elCalculateForm = document.querySelector('.calculate-form');

elCalculateForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elMessage = document.querySelector('.message');
  elMessage.classList.remove('d-none');

  var name = elCalculateForm.querySelector('.name-input').value.trim();
  var money = parseFloat(elCalculateForm.querySelector('.money-input').value.trim(), 10);

  if (money >= totalExpense){
    elMessage.textContent = 'Oq yo\'l, ' + name;
    elMessage.classList.add('alert-success');
  } 
  else {
    elMessage.textContent = name + ', ozgina sabr qilish kerak bo’lar ekan';
    elMessage.classList.add('alert-danger');
  }
});

