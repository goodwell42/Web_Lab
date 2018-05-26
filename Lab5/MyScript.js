function MyRandom() {
	var elem = document.getElementById("p");
	elem.style.color = "red";
	elem.style.fontSize= "35px" ;
	var num = Math.floor(Math.random()*10) % 3;
	var ans;
	if(num === 0) {
		ans = "yes";
	} else if(num === 1) {
		ans = "No";
	} else {
		ans = "Maybe";
	}
	elem.innerHTML = ans; 
}