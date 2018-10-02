const store = (function(){
    const videos = [];
    const setVideos = function(videos){
        this.videos = videos;
    };
    return {setVideos, videos};
 
});



  