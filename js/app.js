'use strict';

console.log('sales, tables and such');
// ==========Global===========
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var totalOfTotalsArray = [];

var allTheStores = [];

var allTheTables = document.getElementById('shopTable');

var newShop = document.getElementById('newShop');

var sixTotal = 0, sevenTotal = 0, eightTotal = 0, nineTotal = 0, tenTotal = 0, elevenTotal = 0, twelveTotal = 0, oneTotal = 0, TwoTotal = 0, threeTotal = 0, fourTotal = 0, fiveTotal = 0, sixPmTotal = 0, sevenPmTotal = 0;

var allTheStores = [sixTotal, sevenTotal, eightTotal, nineTotal, tenTotal, elevenTotal, twelveTotal, onePmTotal, twoTotal, threeTotal, fourTotal, fiveTotal, sixPmTotal, sevenPmTotal];


class Shop {
  constructor(location, minCustie, maxCustie, avgCookieSale) {
    this.location = location;
    this.minCustie = minCustie;
    this.maxCustie = maxCustie;
    this.avgCookieSale = avgCookieSale;

    this.hrSalesArray = [];
    this.totalDay = 0;
    this.acrossLocations = 0;
    this.totalOfTotals = 0;
    allTheStores.push(this);
  }
  randomCookiesPerHour() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomNumCookies = Math.floor((Math.random() * (this.maxCustie - this.minCustie) + this.minCustie) * this.avgCookieSale);
      this.hrSalesArray.push(randomNumCookies);
    }
  }
  renderTable() {
    this.randomCookiesPerHour();

    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');

    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);

    for (var i = 0; i < hoursArray.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = this.hrSalesArray[i];

      trElement.appendChild(tdElement);

      this.totalDay = this.hrSalesArray[i];
    }


    totalOfTotalsArray.push(this.totalDay);

    tdElement = document.createElement('td');
    tdElement.textContent = this.totalDay;
    trElement.appendChild(tdElement);

    allTheTables.appendChild(trElement);
  }
}

new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38,2.3);
new Shop('Lima', 2, 16, 4.6);

function makeHeaderRow(){
  var headTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = '';
  headTrElement.appendChild(thElement);

  for(var i = 0; i < hoursArray.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hoursArray[i];
    headTrElement.appendChild(thElement); 
  }

  var lastThElement = document.createElement('th');
  lastThElement.textContent = 'Day Total per Location';
  headTrElement.appendChild(lastThElement);
  allTheTables.appendChild(headTrElement);
}

function makeFooterRow(){
  var footTrElement = document.createElement('tr');
  var footThElement = document.createElement('th');

  footThElement.textContent = 'Hour Total all Location';
  footTrElement.appendChild(footThElement);

  for(var i = 0; i < hoursArray.length; i++){
    var totalPerHour = 0;
    // var totalTotal = 0;
    for(var w = 0; w < allTheStores.length; w++){
      totalPerHour += allTheStores[w].hourSale[i];
      // console.log('hour total', totalPerHour);
      // totalTotal += totalPerHour;
      // console.log('totalTotal', totalTotal);

    }

    var footTdElement = document.createElement('td');
    footTdElement.textContent = totalPerHour;
    footTrElement.appendChild(footTdElement);
  }

  footThElement = document.createElement('th');

  var totalTotal = 0;
  for( t = o; t < totalOfTotalsArray.length; t++){
    totalTotal += totalOfTotalsArray[t];
  }

  footThElement.textContent = totalTotal;
  footTrElement.appendChild(footThElement);
  allTheTables.appendChild(footTrElement);
}

function renderStores (){
  for(var i in allTheStores){
    allTheStores[i].renderTable();
  }
}


// console.log(hoursArray[i]);
// ========math.random=======
// function getRAndomIntInclusive(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;

// Stores.prototype.randomNumCookiesPerHour= function (){
//   for(var i = 0; i < timeArray.length; i++){
//     var randomNumCookies = Math.floor((Math.random() * (this.maxCustomers-this.minCustomers) + this.minCustomers) * this.avgCookieSales);
//     this.hourlySalesArray.push(randomNumCookies);
//   }
// };