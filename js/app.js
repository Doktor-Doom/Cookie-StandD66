'use strict';

console.log('sales, tables and such');
// ==========Global===========
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var totalOfTotalsArray = [];

var allTheStores = [];

var allTheTables = document.getElementById('shopTable');

var newShop = document.getElementById('newShop');

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