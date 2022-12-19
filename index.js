circle = document.getElementById("circle");
score = document.getElementById("score");
timer = document.getElementById("timer");
let score_count = 0;

function clicked(){
    score_count += 1;
    score.innerHTML = "score: " + score_count;
    RandomXpos = Math.random() * (window.innerWidth-100);
    RandomYpos = Math.random() * (window.innerHeight - 300);

    timer.innerHTML = "timer: 0";
    circle.style.marginLeft = RandomXpos + "px";
    circle.style.marginTop = RandomYpos + "px";

}

function hard(){
    circle.style.width = "15px";
    circle.style.height = "15px";
}

function medium(){
    circle.style.width = "45px";
    circle.style.height = "45px";
}

function easy(){
    circle.style.width = "60px";
    circle.style.height = "60px";
}