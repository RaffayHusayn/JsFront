window.onload = function(){

    //function to download Image that takes some time
    function downloadImage(url, downloadTime, callback){
        setTimeout(()=>{
            console.log(`Image is downloaded from : ${url}`);
            callback();
        }, downloadTime);
    }

    //function to apply filter to image after it's downloaded
    function applyFilter(){
        console.log("filter applied to the image");
    }


    //calling the function one after another sequentially
    downloadImage("www.unsplash.com/1", 3000, ()=>{
        console.log("filter applied to the image");
        downloadImage("www.unsplash.com/2", 2000, ()=>{
            console.log("filter applied to the image");
            downloadImage("www.unsplash.com/3", 1000, ()=>{
                console.log("filter applied to the image");
            });
        });
    });
}
