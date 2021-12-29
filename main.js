Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach("#cam");

function start(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML="<img id='selfie' src='"+data_uri+"'>";
    });
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J62utMnUe/model.json",modelloaded);
function modelloaded(){
console.log("model loaded");
}

prediction1="";
prediction2="";

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="THE FIRST PREDICTION IS"+prediction1;
    speak_data_2="THE SECOND PREDICTION IS"+prediction2;
    utterthis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}