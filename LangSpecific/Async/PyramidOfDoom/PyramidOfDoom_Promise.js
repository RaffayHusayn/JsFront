window.onload = function(){

    //function to download image that takes some time
    function downloadImage(url, downloadTime){
        let myPromise = new Promise((resolve, reject)=>{
            setTimeout(()=>{

                let err = false;
                if(!err){
                    console.log(`image is being downloaded from : ${url}`)
                    resolve(`image is being downloaded from : ${url}`);
                }else{
                    reject("There was a problem downloading the image");
                }
            }, downloadTime);
        });
        return myPromise;
    }


    function applyFilter(){
        console.log("filter applied to the image");
    }


    downloadImage("www.unsplash.com/1", 2000)
    .then(applyFilter)
    .then(downloadImage("www.unsplash.com/2", 3000))
    .then(applyFilter)
    .catch(err=>{
        console.log(err);
    })

};