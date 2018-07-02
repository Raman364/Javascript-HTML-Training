function start() {
    

    var elem = document.getElementById("text");
    var loader = document.getElementById("loader");
    

    var width = 0;
var id = setInterval(frame, 40);

    function frame() {
        if (width >= 100) {
        	
            clearInterval(id);
            document.getElementById("startbtn").style.display="block";
            document.getElementById("startbtn").innerHTML="Start Again";
        } else {
            document.getElementById("startbtn").style.display="none";
            width++;
            loader.style.width = width + '%';
            elem.innerHTML = width + '%';
            
        }
    }
}
