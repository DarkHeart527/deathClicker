/* These Are Starter Scripts */



//\/_____________________________________________________________PAGE 1______________________________________________________________________________/\//

/* Java Script

Page 1 - Content

Page 2 - Variables

Page 3 - Clicking Script

Page 4 - Shop Scripts

Page 5 - Permission

Page 6 - Cookies

Page 7 - Time Script

Page 8 - Storage

Page 9 - Loader

Page 10 - Displays

Page 11 - Per Second

Page 12 - Interval Setter

Page 13 - Reset
*/



//\/_____________________________________________________________PAGE 2______________________________________________________________________________/\//

/* Set Variables */

var taxAndFee = 1.25;

/* Required Variables */
var timePlayed = null;
var Money = null;
var clickPower = null;
var perSecond = null;

function declare() {
 Money = Money;
 clickPower = clickPower;
 timePlayed = timePlayed;
 perSecond = perSecond;
 document.getElementById('timeArea').innerHTML = timePlayed;
 document.getElementById('moneyArea').innerHTML = Money;
}
 
//\/_____________________________________________________________PAGE 3______________________________________________________________________________/\//

function addKill() {
	Money = Money + clickPower;
}

//\/_____________________________________________________________PAGE 4______________________________________________________________________________/\//

//\/_____________________________________________________________PAGE 5______________________________________________________________________________/\//

//\/_____________________________________________________________PAGE 6______________________________________________________________________________/\//

//\/_____________________________________________________________PAGE 7______________________________________________________________________________/\//

function addTime() {
	timePlayed = timePlayed + 1;
}

//\/_____________________________________________________________PAGE 8______________________________________________________________________________/\//
function saver() {
	localStorage.Moneystat = Money;
	localStorage.clickPowerstat = clickPower;
	localStorage.timePlayedstat = timePlayed;
	localStorage.perSecondstat = perSecond;
}

//\/_____________________________________________________________PAGE 9______________________________________________________________________________/\//

function statLoader() {
	Money =  Number(localStorage.Moneystat);
	clickPower =  Number(localStorage.clickPowerstat);
	timePlayed = Number(localStorage.timePlayedstat);
}
//\/_____________________________________________________________PAGE 10______________________________________________________________________________/\//

function timeDisplay() {
	console.info ("| Time Played: ",timePlayed,"| Click Power: ", clickPower,"| Money: ", Money,"| Money Per Second: ", perSecond);
}

//\/_____________________________________________________________PAGE 11______________________________________________________________________________/\//

function perSecondMoney() {
	Money = Money + perSecond;
}

//\/_____________________________________________________________PAGE 12______________________________________________________________________________/\//

function loadIntervals() {
	setInterval( function() { addTime(); }, 1000);
	setInterval( function() { timeDisplay(); }, 1000);
	setInterval( function() { declare(); }, 1);
	setInterval( function() { perSecondMoney(); }, 1000);
	setInterval( function() { saver() }, 10);
	setTimeout( function() { statLoader() }, 5)
}

//\/_____________________________________________________________PAGE 13______________________________________________________________________________/\//

function reset() {
	timePlayed = 0;
	Money = 0;
	clickPower = 1;
	perSecond = 0;
	localStorage.Moneystat = 0;
	localStorage.clickPowerstat = 0;
	localStorage.timePlayedstat = 0;
	localStorage.perSecond = 0;
}
