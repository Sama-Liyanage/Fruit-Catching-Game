var game = document.querySelector(".game");
var basket = document.querySelector(".basket");
var fruits = document.querySelector(".fruits");
var basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
var basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));

function moveBasketLeft(){
    if(basketLeft>0) {
        basketLeft -= 15;
        basket.style.left = basketLeft + 'px';
    }
}

function moveBasketRight(){
    if(basketLeft<620) {
        basketLeft += 15;
        basket.style.left = basketLeft + 'px';
    }
}

function control(e){
    if(e.key =="ArrowLeft"){
    moveBasketLeft();
    }
    if(e.key =="ArrowRight"){
    moveBasketRight();
    }
}

function  generateFruits(){
    var fruit=document.createElement('div');
    fruit.setAttribute("class","fruit");
    fruits.appendChild(fruit);
}
generateFruits();

document.addEventListener("keydown", control);

