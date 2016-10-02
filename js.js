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
*/



//\/_____________________________________________________________PAGE 2______________________________________________________________________________/\//

/* Set Variables */

var taxAndFee = 1.25;

/* Required Variables */
var timePlayed = 0;
var Money = null;
var clickPower = 1;
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
	localStorage.addItem = ('Moneystat', Money);
	localStorage.addItem = ('clickPowerstat', clickPower);
	localStorage.addItem = ('timePlayedstat', timePlayed);
}

//\/_____________________________________________________________PAGE 9______________________________________________________________________________/\//

function statLoader() {
	Money = Money + localStorage.getItem('Moneystat');
	clickPower = clickPower + localStorage.getItem('clickPowerstat');
	timePlayed = timePlayed + localStorage.getItem('timePlayedstat');
}
//\/_____________________________________________________________PAGE 10______________________________________________________________________________/\//

function timeDisplay() {
	console.info ("| Time Played: ",timePlayed,"| Click Power: ", clickPower,"| Money: ", Money,"| Money Per Second: ", perSecond);
}

//\/_____________________________________________________________PAGE 10______________________________________________________________________________/\//

function perSecondMoney() {
	Money = Money + perSecond;
}

//\/_____________________________________________________________PAGE 10______________________________________________________________________________/\//

function loadIntervals() {
	setInterval( function() { addTime(); }, 1000);
	setInterval( function() { timeDisplay(); }, 1000);
	setInterval( function() { declare(); }, 1);
	setInterval( function() { perSecondMoney(); }, 1000);
	//setInterval( function() { saver() }, 0);
	//setInterval( function() { statLoader(); }, 1000)
}