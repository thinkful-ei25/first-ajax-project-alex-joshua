'use strict';

const videoList = (function() {
    const generateListItem = function(video) {
        return `
          <li data-video-id="${video.id}">
            <h3>${video.title}</h3> 
            <div>
              <img src="${video.thumbnail}" alt="${video.title}"/>
            </div>
          </li>
        `;
    };

    const decorateResponse = function(response) {
        return response.items.map( item => {
          return { 
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url  
          };
        });
    };

    const render = function() {
        const search = store.videos.map( video => generateListItem(video));
        search.join('');
        $('.results').html(search);
    };

    const handleFormSubmit = function() {
        $('form').submit(event => {
          event.preventDefault();
          let input = $('#search-term').val();
          $('#search-term').val('');
          api.fetchVideos(input, response => {
            const decorated = decorateResponse(response);
            store.setVideos(decorated);
            render();
          });
        });
    };

    const bindEventListeners = function(){
        handleFormSubmit();
    }


    return{render, bindEventListeners};
}());