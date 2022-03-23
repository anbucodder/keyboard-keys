canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
window.addEventListener("keydown",my_keydown);

img_width = 750;
img_height = 400;

var img_image ;

img_x = 100;
img_y = 100;

function add(){
    img_imageTag = new Image();
    img_imageTag.onload = uploadimg;
    img_imageTag.src =img_image;
}
function uploadimg(){
    ctx.drawImage(img_imageTag,img_x,img_y,img_width,img_height);
}
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if((keypressed >=65 && keypressed<=90) || (keypressed>=97 && keypressed<=122)){
        alpha();
        console.log("You have pressed a Alphabet key");
    }
    else if(keypressed >=48 && keypressed<=57){
        num();
        console.log("You have pressed a Number key");
    }
    else if(keypressed >=37 && keypressed<=40){
        arr();
        console.log("You have pressed a Arrow key");
        console.log("Arrow Key");
    }
    else if(keypressed ==17 || keypressed==18|| keypressed==27){
        spe();
        console.log("You have pressed a Special key");
    }
    else{
        other();
        console.log("You have pressed a Special key");
    }
}
function alpha(){
    img_image = "alpha.jpg";
    add();
}

function num (){
    img_image = "num.jpg";
    add();
}

function arr(){
    img_image = "arr.jpg";
    add();
}

function spe(){
    img_image = "spe.jpg";
    add();
}

function other(){
    img_image = "oth.jpg";
    add();
}
