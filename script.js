


let count = 0;

let tempcount = 0; 
let right_arrow = document.getElementById('arrow_right');
let left_arrow = document.getElementById('arrow_left');

function arrow(right,left){
    
    let mainContainer = document.getElementById("container-slider");

    
    if(right){
        count += window.innerWidth;
        
        tempcount ++;
        if (tempcount >0){
            right_arrow.style.opacity = 0;
            left_arrow.style.opacity = 1;
        }
        mainContainer.scrollTo({top: 0, left: count, behavior: "smooth" });

    }else{
        
        count -= window.innerWidth;
        tempcount--;

        if (tempcount <=0){
            right_arrow.style.opacity = 1;
            left_arrow.style.opacity = 0;
        }
    mainContainer.scrollTo({top:0, left: count, behavior: "smooth" });

    }
    

}
