function setup()
{

video = createCapture(VIDEO);
video.size(500, 500);

canvas = createCanvas(500, 500);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotposes);

}

function draw()
{

background("#000000");

}

function modelloaded()
{

console.log("poseNet is initialised");

}

function gotposes(results)
{

if(results.length>0)
{

console.log(results);

}

}