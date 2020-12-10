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

var name = '';
var money = '';

var info = `Assalomu alaykum, ${name}. Samalyot Xarajatlari: ${ticketPrice}.<br>Mehmonxona Xarajatlari: ${hotelPrice} USD.<br>Ko'ngilochar joylar Xarajatlari: ${travelPrice} USD.<br>Umumiy Xarajatlar: ${totalExpense} EUR.<br> Sizdagi mablag': ${money} UZS.<br>`;

var elCalculateForm = document.querySelector('.calculate-form');

elCalculateForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elMessage = document.querySelector('.message');
  elMessage.classList.remove('d-none');

  name += elCalculateForm.querySelector('.name-input').value.trim();
  money += parseFloat(elCalculateForm.querySelector('.money-input').value.trim(), 10);

  if (money >= totalExpense){
    info += `Oq yo'l, ${name}`;
    elMessage.classList.add('alert-success');
  } 
  else {
    info += `${name}, ozgina sabr qilish kerak bo’lar ekan!`;
    elMessage.classList.add('alert-danger');
  }

  elMessage.innerHTML = info;
});

