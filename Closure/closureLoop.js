console.log("outside of for loop");
for(var i= 0 ; i < 10 ; i++){

    console.log("inside the for loop");
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

function outside(){
    for(var i = 0; i<10; i++){
        function inside(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        inside();
    }
}

console.log("calling the outside function nowwwwwww");
outside();