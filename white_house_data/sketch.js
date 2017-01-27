//stopped at 22:38 of https://www.youtube.com/watch?v=UrznYJltZrU
var potus;
var counts = {};
function preload() {
	potus = loadJSON('potus.json');

}

function setup() {
	createCanvas(600,400);
	//console.log(potus);
	var tweets = potus.tweets;
	for (var i = 0; i < tweets.length; i++) {
		var date = new Date(tweets[i].timestamp);
		var month = date.getMonth();
		var year = date.getFullYear();
		//console.log(date);
		var key = month + '/' + year;
		

		if (counts.hasOwnProperty(key)) {
			counts[key].total++;
		} else {
			counts[key] = {
				total: 1,
				words: {

				}
			};
		}
		var txt = tweets[i].text;
		var words = txt.split(/\W+/);
		//console.log(words);

	}


	background(0);

	console.log(counts);
	var months = Object.keys(counts);
	months.reverse();

	var maxtweets = 0;
	for (var i = 0; i<months.length;i++) {
		var month = months[i];
		var num = counts[month].total;
		if (num > maxtweets) {
			maxtweets = num;
		} 
	}
	//console.log(months);
	var w = width/months.length;
	for (var i = 0; i<months.length;i++) {
		//var h = 100;
		var month = months[i];
		var num = counts[month].total;
		var h = map(num,0,maxtweets,0,375);
		fill(random(255),random(255),random(255));
		rect(i*w,height-h,w-1,h);
	}
}
