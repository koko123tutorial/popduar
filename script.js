window.onload = function(){
    var img = document.getElementById("duar1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("duar.mp3");

    img.addEventListener('mousedown', function (){
        img.src = 'duar2.png';
        increaseScore();
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = 'duar1.png';
        audio.play();
    });

    img.addEventListener('touchstart', function (){
        img.src = 'duar2.png';
        increaseScore();
        audio.play();
    });

    img.addEventListener('touchmove', function (){
        img.src = 'duar1.png';
        audio.play();
    });

    window.addEventListener("keydown", checkKeyPress, false);
    window.addEventListener("keyup", checkKeyUp, false);

    function checkKeyPress(key){
        if (key.keyCode == "32"){
            img.src = 'duar2.png';
            increaseScore();
            audio.play();
        }
    }

    function checkKeyUp(key){
        if (key.keyCode == "32"){
            img.src = 'duar1.png';
            audio.play();
        }
    }

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}