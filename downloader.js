var download = require('download-file');
const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var checkUpper = (character) => {
	if (character == character.toUpperCase()) {
		 return true;
	}
	if (character == character.toLowerCase()){
		return false;
	}
}

for(i=20;i<25;i++){
fileName='./urls/url'+i.toString()+'.json';
var obj = JSON.parse(fs.readFileSync(fileName, 'utf8')); 
obj.forEach((i)=>{
	i.title=i.title.split(" ");	
	x=8;
	state=[];district=[];

	while(true)
	if(checkUpper(i.title[x])) {
		district.push(i.title[x])
		x=x+1;
	}
	else {if(x==8) {district.push(i.title[8]);x=10;} break;}

	while(true)
	if(checkUpper(i.title[x+2])) {
		state.push(i.title[x+2])
		x=x+1;
	}
	else break;

	state=state.join(" ");district=district.join(" ");
	// console.log("state=",state,"district=",district);
	options = {
    directory: "./data/"+state+"/",
    filename: district+".csv"
	};
	url=i.url;
	download(url, options, function(err){
    if (err) console.log("Got Error");
    console.log("meow");
	})
	sleep(500);
})}