document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'AIzaSyDcDnWt9fMK8CSqXosxysk4V4xKRsIVxQg';
  const videoId = 'pCR8Ys0sS9I';
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`;

  function embedVideo() {
      fetch(apiUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network cannot respond');
              }
              return response.json();
          })
          .then(data => {
              const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
              const videoIframe = document.createElement('iframe');

              videoIframe.width = '700';
              videoIframe.height = '400';
              videoIframe.src = videoEmbedUrl;
              videoIframe.style.border = '0';
              videoIframe.allowfullscreen = true;

              const videoContainer = document.getElementById('video-container');
              videoContainer.innerHTML = '';
              videoContainer.appendChild(videoIframe);
          })
          .catch(error => {
              console.error('fetch operation failed:', error.message);
          });
  }

  
  const aboutUsAccordion = document.getElementById('about-us-accordion');
  aboutUsAccordion.addEventListener('click', function () {
      embedVideo();
  });


  embedVideo();
});
