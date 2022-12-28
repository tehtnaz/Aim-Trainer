import "/src/css/styles.css"

const circle = document.getElementById("circle")!;
const score = document.getElementById("score")!;
const timer = document.getElementById("timer")!;
const h_score = document.getElementById("highest_score")!;
const backlground = document.getElementById("lol")!;
let score_count = 0;
let audio = new Audio('click.wav');
let fail_audio = new Audio('fail.wav');
const high_scores = [0];
let time = Date.now();

//bind buttons
document.getElementById("hard_btn")!.onclick = hard;
document.getElementById("medium_btn")!.onclick = medium;
document.getElementById("easy_btn")!.onclick = easy;
circle.onclick = clicked;

function findGreatest(arr: number[]){
    let largestNum = 0;
    for(const item of arr){
        if(item > largestNum) largestNum = item;
    }
    return largestNum;
}

function clicked(){
    if(score_count === 0){
        time = Date.now();
    }
    audio.play();
    backlground.style.backgroundColor = "black";
    score_count += 1;
    score.innerHTML = "score: " + score_count;
    const RandomXpos = Math.random() * (window.innerWidth-100);
    const RandomYpos = Math.random() * (window.innerHeight - 300);

    circle.style.marginLeft = `${RandomXpos}px`;
    circle.style.marginTop = `${RandomYpos}px`;
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
    if (score_count > 0){
        if (score_count > findGreatest(high_scores)){
            score.style.color = "#39ff14";
        }else{
            score.style.color = "white";
        }
        console.log(score_count);
        timer.innerHTML = `Timer: ${Math.floor((time - Date.now()) / 1000) + 10}.${Math.floor((Date.now() - time)/10) % 100}`;
        if (time + 10000 < Date.now()){
            fail_audio.play();
            score.style.color = "white";
            high_scores.unshift(score_count);
            backlground.style.backgroundColor = "#e52165";
            timer.innerHTML = `Timer: 0.00`;
            h_score.innerHTML = "High Score: " + findGreatest(high_scores);
            score_count = 0;
            score.innerHTML = "Score: " + score_count;
            setTimeout(updateClock, 100);
            return;
        }
    }
    setTimeout(updateClock,10);
}

updateClock();