import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTrendingVideos } from './redux/actions/userAction'



function App() {
  const { videos } = useSelector(store => store.userRoot)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingVideos())
  }, [])




  return (
    <>
      <div>
        {videos.length !== 0 ? videos.map(d =>
          <div>
            <iframe src={`https://www.youtube.com/embed/${d.id}`}
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </div>
        ) : <h1>No videos to Show</h1>}
      </div>
    </>
  );
}

export default App;
