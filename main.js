rightWristX=0;
leftWristX=0;
difference=0;
function preload(){
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.position(560,130);
    video = createCapture(VIDEO);
    video.size(550, 500)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#0000FF");
    document.getElementById("font-size").innerHTML="font-size = "+difference+"px";
    textSize(difference);
    fill('#FF0000');
    text("Abhi",70,300);
   
}
function modelLoaded() {
    console.log('posenet is Initiallized!');
}

function gotPoses(results) {
 
    if(results.length >0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX);
    }
}