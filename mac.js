function close() {
	document.getElementById("home").style.display = "none";
	document.getElementById("close").style.display = "none";
}
function openSafari() {
document.getElementById("safari").style.display = "block";	
	close();
}
function openMail() {
	document.getElementById("mail").style.display= "block";
	close();
}
function openSMeet() {
	document.getElementById("meet").style.display= "block";
	close();
}
window.addEventListener("keydown" , myKeyDown);
function myKeyDown(e) {
    keypress = e.keyCode ;
    if(keypress == '27'){
        document.getElementById("home").style.display = "block";
		document.getElementById("safari").style.display = "none";
		document.getElementById("meet").style.display = "none";
		document.getElementById("mail").style.display = "none";
    }
}
