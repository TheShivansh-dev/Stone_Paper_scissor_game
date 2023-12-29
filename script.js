let img1 = document.querySelector("#s1");
let img2 = document.querySelector("#s2");
let span = document.querySelector("#sp");
let span2 = document.querySelector("#sp3");
let l1 = document.querySelector("#l1");



function funs2(){
for(i=0;i<4;i++){
    let n = Math.floor(Math.random()*3)+1;
    let k = "im"+ n + ".jpeg";
    img2.src = k;
    t1 = img2.src;
}
}

setInterval(funs2,900);
let count = 0;
let win=0;
function funs(x){
    y=x.value;
    z = "im"+y+".jpeg";
    img1.src = z;
    let t2 = img1.src;
    let k = t1.localeCompare(t2);
    
    
    
    if(k==0){
        span2.innerText = "You are The winner";
        win++;
        l1.style.display = "block";
        l2.style.display = "block";
        l3.style.display = "block";
        l4.style.display = "block";
        l5.style.display = "block";
        l6.style.display = "block";
        l7.style.display = "block";
        r1.style.display = "block";
        r2.style.display = "block";
        r3.style.display = "block";
        r4.style.display = "block";
        r5.style.display = "block";
        r6.style.display = "block";
        r7.style.display = "block";
        
    }
    else{
        span2.innerText = "you are The looser";
        l1.style.display = "none";
        l2.style.display = "none";
        l3.style.display = "none";
        l4.style.display = "none";
        l5.style.display = "none";
        l6.style.display = "none";
        l7.style.display = "none";
        r1.style.display = "none";
        r2.style.display = "none";
        r3.style.display = "none";
        r4.style.display = "none";
        r5.style.display = "none";
        r6.style.display = "none";
        r7.style.display = "none";
    }
    count++;
  


span.innerText = win + "/" + count;
span.innerText = win + "/" + count;
    
}
