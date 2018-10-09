function MyRandom() {
	var elem = document.getElementsByTagName("p");
	for (var i = elem.length - 1; i >= 0; i--) {
		var num = Math.floor(Math.random()*10) % 3;
		var ans;
		if(num === 0) {
			ans = "Yes!";
		} else if(num === 1) {
			ans = "No!";
		} else {
			ans = "Maybe!";
		}
		elem[i].innerHTML = ans; 
	}	
}