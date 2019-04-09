console.log("javaScript loaded");
var bol = true;

myImage1 = () => { 
document.getElementById('myImage1').src="../images/lightbulbon.jpeg"
	console.log("Turn On");
}


myImage2 = () => { 
document.getElementById('myImage1').src="../images/lightbulboff.jpeg"
	console.log("Turn Off");
}

ligth = () => {
	if(bol) {
		console.log(`bol is  ${bol}` )
		myImage2();
		bol = false;
	}
	else{
		console.log(`bol is  ${bol}` )
		myImage1();
		bol = true; 
	}
}