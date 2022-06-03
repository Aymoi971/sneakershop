let cart_tab=localCartIni();
let quantInCart=0;

function localCartIni(){
    let tab =[];
    if (JSON.parse(localStorage.getItem('cart_tab'))==null){
        localStorage.setItem('cart_tab', JSON.stringify(tab));
    } else {
        tab=JSON.parse(localStorage.getItem('cart_tab'));
    }
    return tab;
}


let counterOperator = document.querySelectorAll(".operator");
counterOperator[0].addEventListener("click", decrCounter);
counterOperator[1].addEventListener("click",incrCounter);
function incrCounter(){
    counterAmount= document.querySelector("#Counter > span");
    counterAmount.textContent = parseInt(counterAmount.textContent) + 1;
    }
function decrCounter(){
    counterAmount= document.querySelector("#Counter > span");
    amount = parseInt(counterAmount.textContent);
    
    if (amount >0){
        counterAmount.textContent = amount - 1;
    }
}

let empty = document.querySelector("#cart-body > h5");
let carticles = document.querySelector("#modal-cart .cart-content");
let button = document.querySelector("#modal-cart .button");
let notif = document.querySelector("#perso > span");
let cartButton=document.querySelector("#cart");

cartButton.addEventListener("click", function(){
    modalAutoStyle();
    modalAction();
    
})
modalAutoStyle();
for (let i = 0; i < cart_tab.length; i++) {
    console.log(cart_tab[i].id,cart_tab[i].articleName,cart_tab[i].quant,cart_tab[i].price);
    createCartItem(cart_tab[i].id,cart_tab[i].articleName,cart_tab[i].quant,cart_tab[i].price);
}
function modalAutoStyle(){
    if (totalQuantInCart()==0){
        notif.style.display="none";
        carticles.style.display = "none";
        button.style.display = "none";
        empty.style.display = "block";
    } else {
        console.log("{style action" + carticles.style.display);
        console.log(button.style.display);
        notif.textContent = quantInCart;
        notif.style.display= "flex";
        button.style.display = "flex";
        carticles.style.display = "flex";
        empty.style.display = "none";
        console.log("style action" + carticles.style.display);
        console.log("{style action" + button.style.display);
    }
}
function totalQuantInCart(){
    totalQuant = cart_tab.reduce((total, article) => article.quant + total, 0);
    quantInCart = totalQuant;
    return totalQuant;
}
function modalAction(){
    let modal = document.querySelector("#modal-cart");
    if (modal.style.display=="none"||modal.style.display==""){
        console.log("premodal action at " + modal.style.display);
        modal.style.display="flex";
        console.log("postmodal action at " + modal.style.display);
    } else {
        console.log("premodal action at " + modal.style.display);
        modal.style.display="none";
        console.log("postmodal action at " + modal.style.display);
    }
}
let price = parseFloat(document.querySelector("#price > h3").textContent.replace("$",""));
let title = document.querySelector("#Text > h1");
let articleName =title.textContent;
let id =title.dataset.id;

addBttn = document.querySelector("#Addbttn");
addBttn.addEventListener("click", function(){
    let quant = parseInt(document.querySelector("#Counter > span").textContent);
    let articles_tab = document.querySelectorAll(".cart-item > img + p");
    article=cart_tab.find((article)=>{return article.articleName==articleName});
    cart_index=cart_tab.indexOf(article);
    mod_index=cartIndex(articleName);
    console.log(article);
    
    if (article!=undefined&&mod_index!=-1){
        addToCart(cart_index, mod_index,quant);
    }
    else if(quant!=0){
        cart_tab.push({id,articleName,quant,price});
        console.log(cart_tab);
        localStorage.setItem(`cart_tab`,JSON.stringify(cart_tab));
        console.log(id);
        createCartItem(id,articleName,quant,price);}
})

function addToCart(cart_index, mod_index,quant){
    mod_article = document.querySelectorAll(".cart-item")[mod_index];
    itemize = mod_article.querySelector(".itemize");
    total = mod_article.querySelector(".total");
    newQuant = parseFloat(total.textContent.replace("$",""))/price + quant;
    cart_tab[cart_index].quant+=quant;
    localStorage.setItem(`cart_tab`,JSON.stringify(cart_tab));
    itemize.textContent= "$"+ price + ".00 x " + newQuant;
    total.textContent= "$"+ price*newQuant + ".00";
    // quantInCart+=quant;
    modalAutoStyle();
}

function cartIndex(articleName){
    articles_tab = document.querySelectorAll(".cart-item > img + p");
    for (let i = 0; i < articles_tab.length; i++) {
        if(articles_tab[i].textContent==articleName){
            return i;
        }  
    }
    return -1;
}
// creatediv(["img",["p","h6","h3"],"img"],modal);
function createCartItem(id,articleName, quant, price){
    modal = document.querySelector(".cart-content");
    cartItem= document.createElement("div");
    cartItem.classList.add("cart-item");
    modal.appendChild(cartItem);

    prodImg=  document.createElement("img");
    prodImg.src= "images/image-product-1-thumbnail.jpg";
    cartItem.appendChild(prodImg);
    
    p = document.createElement("p");
    p.textContent = articleName;
    p.classList ="article-name"
    p.dataset.id= id;
    cartItem.appendChild(p);
    itemize = document.createElement("p");
    itemize.classList="itemize";
    itemize.textContent= "$"+ price + ".00 x " + quant;
    cartItem.appendChild(itemize);
    total = document.createElement("h5");
    total.classList="total";
    total.textContent= "$"+ price*quant + ".00";
    cartItem.appendChild(total);
    trash = document.createElement("img");
    trash.src = "images/icon-delete.svg";
    activateTrash(trash);
    cartItem.appendChild(trash);
    modalAutoStyle();
}

function activateTrash(trashIcon){

    trashIcon.addEventListener("click", function(){
        
        let name = this.parentNode.querySelector(".article-name").textContent;
        article=cart_tab.find((article)=>{return article.articleName==name});
        cart_index=cart_tab.indexOf(article);
        cart_tab.splice(cart_index,1);
        localStorage.setItem('cart_tab', JSON.stringify(cart_tab));
        this.parentNode.classList.add("slide-out-right");
        console.log(this.parentNode);
        console.log(this.parentNode.classList);
        this.parentNode.remove(); 
        modalAutoStyle();        
    });
}


let thumbnail_tab=[];

function updateMainImg(src){
    document.querySelector("#main-img").style.backgroundImage=`url(${src})`;
}


// currentIndex=img_bar.find((image)=>{return image.checked==true});

// console.log(currentIndex);

let mainModImg = document.querySelector("#full-mod-imgs > .main");
let img_bar=document.querySelectorAll("#img-bar > *");
let mainImg = document.querySelector("#main-img");
let currentIndex =0;
for (let i = 0; i < img_bar.length; i++) {
    thumbnail_tab[i]=img_bar[i].dataset.src;
    console.log(thumbnail_tab[i]);
     img_bar[i].addEventListener("click",function(){
        updateMainImg(this.dataset.src);
        thumbnail_tab[i]=this.dataset.src;
        console.log(thumbnail_tab[i]);
    }) 
}
mainImg.addEventListener("click", function(){
    console.log("main");
    for (let i = 0; i < img_bar.length; i++) {
        if(img_bar[i].checked){
            mainModImg.style.backgroundImage = `url(${img_bar[i].dataset.src})`;
            currentIndex=i;
        }        
    }
    fullModBackground.style.display="block";
    fullModImgs.style.display="flex"; 
})
arrows = document.querySelectorAll(".arrow > img" );

for (let i = 0; i < arrows.length; i++) {
    // console.log(arrows[i]);
    arrows[i].addEventListener("click", function(){
        updateMainModImg(currentIndex,this.dataset.increment);        
        // document.querySelector("#full-mod-imgs > .main").style.backgroundImage=`url(${thumbnail_tab[(currentIndex+this.dataset.increment)%4]})`;
    })
    arrows[i].parentNode.addEventListener("click", function(){
        updateMainModImg(currentIndex,arrows[i].dataset.increment);        
        // document.querySelector("#full-mod-imgs > .main").style.backgroundImage=`url(${thumbnail_tab[(currentIndex+this.dataset.increment)%4]})`;
    })
}
modImgBar=document.querySelectorAll("#full-mod-imgs > .bar > *");
for (let i = 0; i < modImgBar.length; i++) {
    thumbnail_tab[i]=modImgBar[i].dataset.src;
     modImgBar[i].addEventListener("click",function(){
        updateMainModImg(this.dataset.src);
        // thumbnail_tab[i]=this.dataset.src;
    })
}
function updateMainModImg(indexOrSrc, increment=false){    
    console.log(mainModImg);
    if(increment){
        let newIndex = (indexOrSrc + parseInt(increment)+4)%4
    // console.log(increment);
        console.log("the new index is:"+ newIndex);
        currentIndex = newIndex;
        let src = thumbnail_tab[newIndex];
        console.log(src);
        mainModImg.style.backgroundImage = `url(${src})`;
        checkImgBar(currentIndex);
    } else {
        mainModImg.style.backgroundImage = `url(${indexOrSrc})`;
        checkImgBar(thumbnail_tab.indexOf(indexOrSrc));
    }
}
function checkImgBar(index){
    let modImgBar=document.querySelectorAll("#full-mod-imgs > .bar > *");
    modImgBar[index].checked=true;
}
let closer = document.querySelector("#full-mod-imgs > .main > img");
let fullModImgs= document.querySelector("#full-mod-imgs");
let fullModBackground = document.querySelector("#full-mod-background");
closer.addEventListener("click", function(){
    fullModBackground.style.display="none";
    fullModImgs.style.display="none";        
})


// window.addEventListener('scroll',function(){
//     let {scrollHeight,scrollTop,clientHeight} = document.documentElement;

