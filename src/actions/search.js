import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch, getState) => {
    setTimeout(() => {
      searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      });
    }, 500);
  };
};

export default handleVideoSearch;
