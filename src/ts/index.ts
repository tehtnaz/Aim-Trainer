circle = document.getElementById("circle");
score = document.getElementById("score");
timer = document.getElementById("timer");
h_score = document.getElementById("highest_score");
backlground = document.getElementById("lol");
let score_count = 0;
let audio = new Audio('click.wav');
let fail_audio = new Audio('fail.wav');
let timer_count = 100;
let high_scores = [0];
let timer_on = false;

function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - i - 1; j++){

            if(arr[j + 1] < arr[j]){

                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr[arr.length - 1];
};

function clicked(){
    audio.play();
    backlground.style.backgroundColor = "black";
    score_count += 1;
    score.innerHTML = "score: " + score_count;
    RandomXpos = Math.random() * (window.innerWidth-100);
    RandomYpos = Math.random() * (window.innerHeight - 300);

    circle.style.marginLeft = RandomXpos + "px";
    circle.style.marginTop = RandomYpos + "px";

}

function hard(){
    audio.play();
    circle.style.width = "15px";
    circle.style.height = "15px";
}

function medium(){
    audio.play();
    circle.style.width = "45px";
    circle.style.height = "45px";
}

function easy(){
    audio.play();
    circle.style.width = "60px";
    circle.style.height = "60px";
}

function updateClock(){
    backlground.style.backgroundColor = "black";
    setTimeout(updateClock,100);
    if (score_count > 0){
        if (score_count > bubbleSort(high_scores)){
            score.style.color = "#39ff14";
        }else{
            score.style.color = "white";
        }
        console.log(score_count);
        timer_count -= 1;
        timer.innerHTML = "timer: " + Math.floor(timer_count/10) + ":" + timer_count%10+ "0";
        if (timer_count == 0){
            fail_audio.play();
            score.style.color = "white";
            console.log(10);
            high_scores.unshift(score_count);
            //backlground.style.backgroundColor = "red";
            backlground.style.backgroundColor = "#e52165";
            h_score.innerHTML = "High Score: " + bubbleSort(high_scores);
            score_count = 0;
            score.innerHTML = "Score: " + score_count;
            timer_count = 100;
        }
    }

}

updateClock();