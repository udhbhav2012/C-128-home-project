song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rigthWristX = 0;
rigthWristY = 0;

function preload()
{
    song_1 = loadSound("114_pirates_of_caribbean_themes_mp3_ringtone_ringtone_mp3.mp3");
    song_1 = loadSound("44_avengers_theme_bgm_mp3_ringtone_ringtone_mp3.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded()
{
    console.log("Posenet Is Initalized");
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rightWristX + "rigthWristY = " + rigthWristY);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rigthWristX + "rigthWristY = " + rigthWristY);
    }

}
function draw()
{

    image(video, 0, 0, 600, 500);
}