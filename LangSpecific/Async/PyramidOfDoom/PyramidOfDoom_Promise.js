window.onload = function(){

    //function to download image that takes some time
    function downloadImage(url, downloadTime){
        let myPromise = new Promise((resolve, reject)=>{
            setTimeout(()=>{

                let err = false;
                if(!err){
                    console.log(`image is being downloaded from : ${url}`)
                    let img = {
                        name: url 
                    }
                    resolve(img);
                }else{
                    reject("There was a problem downloading the image");
                }
            }, downloadTime);
        });
        return myPromise;
    }


    function applyFilter(image){
        console.log("filter applied to the image: ", image.name);
    }


    downloadImage("www.unsplash.com/1", 2000)
    .then((result)=>{
        applyFilter(result);
        return downloadImage("www.unsplash.com/2", 3000); 
    })
    .then((image)=>{
        applyFilter(image);
        return downloadImage("www.unsplash.com/3", 4000); 
    })
    .then((image)=>{
        applyFilter(image);
    })
    .catch(err=>{
        console.log(err);
    })

};