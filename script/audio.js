var gura_index = 0
var taiko = 1

function autoplay() {
    document.addEventListener('click', musicPlay);
    function musicPlay() {
        document.getElementById('playAudio').volume = 0.3;
        document.getElementById('playAudio').play();
        document.removeEventListener('click', musicPlay);
    }
}

function gura() {
    document.getElementById('playAudio').volume = 0.1
    document.getElementById('taiko1').volume = 1;
    switch (gura_index) {
        case 0:
        case 4:
        case 8:
        case 12:
        case 16:
        case 20:
            document.getElementById("gura1").style.display = "flex";
            document.getElementById("gura2").style.display = "none";
            document.getElementById("gura3").style.display = "none";
            document.getElementById("gura4").style.display = "none";
            break;
        case 1:
        case 5:
        case 9:
        case 13:
        case 17:
        case 21:
            document.getElementById("gura1").style.display = "none";
            document.getElementById("gura2").style.display = "flex";
            document.getElementById("gura3").style.display = "none";
            document.getElementById("gura4").style.display = "none";
            var temp = "taiko" + taiko
            document.getElementById(temp).play()
            taiko++
            break;
        case 2:
        case 6:
        case 10:
        case 14:
        case 18:
        case 22:
            document.getElementById("gura1").style.display = "none";
            document.getElementById("gura2").style.display = "none";
            document.getElementById("gura3").style.display = "flex";
            document.getElementById("gura4").style.display = "none";
            break;
        case 3:
        case 7:
        case 11:
        case 15:
        case 19:
            document.getElementById("gura1").style.display = "none";
            document.getElementById("gura2").style.display = "none";
            document.getElementById("gura3").style.display = "none";
            document.getElementById("gura4").style.display = "flex";
            var temp = "taiko" + taiko
            document.getElementById(temp).play()
            taiko++
            break;
        case 23:
            $("body").fadeOut(1000, function () { window.location.replace("file:///C:/Users/THUY/Desktop/Web/main.html") });
            
            break;
    }
    gura_index++;
}

