

let div = document.getElementById('div')
let temp = 1 ;

function popUp(){
    if(temp==1){
        div.style.display = 'flex';
        temp = 0;
    }else{
        div.style.display = 'none';
        temp = 1;
    }
}
