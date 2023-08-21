leftx=results[0].pose.keypoints[9].x;
rightx=0;
lefty=results[0].pose.keypoints[9].y;
righty=0;
asong = "";
asong2 = "";
function preload() {
    asong = loadSound();
    asong.volume(1);
    asong.speed(1); 
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw() {
    image(video, 0, 0, 600, 500);
    asong=false;
    stroke("#FFFFF");
    if (results[0].pose.keypoints[9].score>0.2) {
        circ(10,10, results[0].pose.keypoints[9].x, results[0].pose.keypoints[9].y);
        asong2.stop();
        if (asong == false) {
            asong.play();
            document.getElementById(asong).innerHTML = "Song 1 is playing right now.";

        }
    }
}
function loadSound() {
    asong2 = loadSound();
    asong2.volume(1);
    asong2.speed(1);
}

function consoletest() {
    console.log(results[0].pose.keypoints[9].x+"<- that is x coordinate of left wrist");
    console.log(results[0].pose.keypoints[9].y+"<- that is y coordinate of left wrist");
}

