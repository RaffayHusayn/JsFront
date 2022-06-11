window.onload = function(){


    //function to download Image that takes some time
    function downloadImage(url, callback){
        setTimeout(()=>{
            console.log(`Image is downloaded from : ${url}`);
            callback();
        }, 2000);
    }

    //function to apply filter to image after it's downloaded
    function applyFilter(){
        console.log("filter applied to the image");
    }


    //calling the function

    downloadImage("www.unsplash.com/house", applyFilter);

}