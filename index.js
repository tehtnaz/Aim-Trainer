circle = document.getElementById("circle");
score = document.getElementById("score");
timer = document.getElementById("timer");
h_score = document.getElementById("highest_score");
let score_count = 0;
let audio = new Audio('click.wav');
let timer_count = 10;
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
    setTimeout(updateClock,1000);
    if (score_count > 0){
        console.log(score_count);
        timer_count -= 1;
        timer.innerHTML = "timer: " + timer_count;
        if (timer_count == 0){
            console.log(10);
            high_scores.unshift(score_count);
    
            h_score.innerHTML = "High Score: " + bubbleSort(high_scores);
            score_count = 0;
            score.innerHTML = "Score: " + score_count;
            timer_count = 10;
        }
    }

}

updateClock();