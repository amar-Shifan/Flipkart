


let count = 0;
let image2 = "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f871c3dec2984ff3.jpeg?q=20";
let image3 = "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b35a105fe8bc8cbb.png?q=20";

let tempcount = 0; 
let right_arrow = document.getElementById('arrow_right');
let left_arrow = document.getElementById('arrow_left');

function arrow(direction){


    let div = document.getElementById('container-slider');
    let image = document.getAnimations('image');
    console.log(image);

    console.log(div);

    if(direction){
        console.log("its right");
        
        image.src = "/mobile.png";

    }else{
        console.log("its left");
        image.src = image3
    }
}

