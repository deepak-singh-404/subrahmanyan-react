
THIRD PARTY API
SENDGRiD => for sending emails
twilio => for sending message
youtube=> access_key or secret_key

step1 - Google Developers Console
step2 - create a project => Enable api and services
step3 - enable youtube api v3 data
step4 - copy access key

https://developers.google.com/youtube/v3/docs/videos/list?apix=true

access_key =""


GET https://youtube.googleapis.com/youtube/v3/videos?key=access_key


FOR TRENDING VIDEOS
https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=access_key


You will get list of ids

https://www.youtube.com/embed/CuklIb9d3fI

<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>