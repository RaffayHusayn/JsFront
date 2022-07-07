function greeting(){
    //finding the current time
    let date = new Date();
    let hours = date.getHours();

    if(hours > 4 && hours < 12){
        console.log("good morning");
    }else if (hours > 12 && hours <5){
        console.log("good afternoon");
    }else{
        console.log("good night");
    }
}

greeting();

